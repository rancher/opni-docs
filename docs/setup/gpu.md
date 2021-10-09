---
title: Cluster GPU Configuration
---

## Automatic GPU Operator Configuration

Opni can utilize GPU acceleration to enable log anomaly detection for workload 
and application logs. If you would like Opni to learn from your own workloads, 
follow the instructions below to configure your cluster. If GPU acceleration
is not enabled, Opni can still analyze your Control Plane logs using our 
pretrained models.

The recommended way to configure GPU acceleration in your cluster is by using
the [Nvidia GPU Operator](https://github.com/NVIDIA/gpu-operator). If your cluster
is managed by Rancher, you can follow [this guide](https://rancher.com/blog/2020/get-up-and-running-with-nvidia-gpus).
 
If desired, you may install the GPU operator manually
via the official Helm chart. Additionally, Opni has an experimental integrated
GPU Operator which can be enabled with a feature gate. If your environment 
permits, using the integrated GPU Operator will require the least amount of 
manual configuration.

-------------

## Prerequisites
### GPU Node Hardware Requirements:
- 1x NVIDIA GPU
  - If not using VGPU, any Quadro or Tesla GPU will work. 
  - If using VGPU, one of the following GPUs is required:
    - Tesla M6, M10, M60
    - Tesla P4, P6, P40, P100
    - Tesla V100
    - Quadro RTX 6000/8000
    - Tesla T4
    - NVIDIA A10, A16, A30, A40, A100, RTX A5000/A6000
  - MIG is not supported when using automatic GPU Operator configuration at this time.
- Ubuntu 20.04. No other host OS is supported at this time.
- The GPU node should not have an Nvidia driver or container runtime installed.
  The GPU Operator handles installing all the necessary drivers automatically.

### Kubernetes Cluster Requirements:
- Vanilla upstream Kubernetes, or one of the following distributions:
    - RKE
    - K3S >= v1.22.2+k3s1
    - RKE2
    - Amazon EKS
    - Google GKE
    - Azure AKS

- Cert-Manager installed 
- NFD installed (see deploy/examples/nfd_aio.yaml in the Opni repo)

### Feature Gate

The GPU Operator feature gate is disabled by default. To enable it, ensure the
Opni Manager is running with the additional argument 
`--feature-gates=GPUOperator=true`

----------------
## Install Custom Resources

### NodeFeatureDiscovery 

Create a NodeFeatureDiscovery resource to enable the GPU Operator to discover
GPU hardware on the node. This resource should not need any additional customization.

```yaml
apiVersion: nfd.opni.io/v1
kind: NodeFeatureDiscovery
metadata:
  name: opni-nfd-server
  namespace: opni
spec:
  operand:
    namespace: opni
    image: "k8s.gcr.io/nfd/node-feature-discovery:v0.7.0"
    servicePort: 12000
  extraLabelNs:
    - nvidia.com
  workerConfig:
    configData: |
      sources:
        pci:
          deviceLabelFields:
          - vendor
```

### GPUPolicyAdapter

Creating a GPUPolicyAdapter resource will trigger the GPU Operator to start 
configuring the cluster. 

If not using VGPU, the GPUPolicyAdapter resource does not need any customization,
and can be created with an empty spec, as follows:

```yaml
apiVersion: opni.io/v1beta1
kind: GpuPolicyAdapter
metadata:
  name: gpu
spec: {}
```

(note that the empty brackets after `spec:` are important)

If using VGPU, please follow the official documentation to build the VGPU driver
image, and create a GPUPolicyAdapter resource with the following spec, filling
in the `driver` and `licenseConfigMap` fields:

```yaml
apiVersion: opni.io/v1beta1
kind: GpuPolicyAdapter
metadata:
  name: vgpu
spec:
  images:
    driver: # Image name for the VGPU driver
  vgpu:
    licenseConfigMap: # ConfigMap containing gridd.conf and the client config token
    licenseServerKind: nls 
```

Once the GPUPolicyAdapter resource is created, the GPU Operator will begin
configuring the cluster. This takes a few minutes, and the container engine
will be restarted during this process. Once all the pods in the `gpu-operator-resources`
namespace complete, GPUs will be available for use and the Opni GPU Controller
pod should start.

## Provider-specific Notes and Troubleshooting

### K3S

  - If you are using K3S, you must use v1.22.2+k3s1 or later. This version
    introduces automatic detection of Nvidia container runtimes on nodes, and
    a large number of bugfixes related to pod lifecycle were added in
    upstream Kubernetes for this release. If you are using an earlier version,
    you may experience issues where pods become stuck in the 'Terminating'
    state. If this happens, force-deleting the stuck pods should help resolve
    the issue.

### RKE

  - RKE uses Docker as its container engine. If you are using RKE, you should
    be aware of how the Nvidia runtime interacts with Docker. When the GPU
    operator is installed for the first time, it will create a `RuntimeClass`
    object which allows Kubernetes to use the `nvidia` runtime, which is 
    configured in the docker engine itself. The RuntimeClass will look similar
    to this when using RKE:
  
    ```yaml
    apiVersion: node.k8s.io/v1alpha1
    kind: RuntimeClass
    metadata:
      name: nvidia
    handler: docker
    ```

    The RuntimeClass `name` is used in a pod spec to identify the runtime to use.
    It is specified using the `runtimeClassName` field:

    ```yaml
    apiVersion: v1
    kind: Pod
    spec:
      # ...
      runtimeClassName: nvidia
      # ...
    ```

    When using containerd for example, the `handler` field in the `RuntimeClass`
    is used to select a specific container runtime by name. However, dockershim
    does not support selecting custom container runtimes, meaning the nvidia
    container runtime _must_ be set as the default. The GPU Operator will still
    utilize a `RuntimeClass`, but its `handler` must be set to `docker` to
    work. Otherwise, you may see an error like this:

    > Failed to create pod sandbox: rpc error: code = Unknown desc = RuntimeHandler "nvidia" not supported

    If you encounter this error, check the `handler` field in the `RuntimeClass`
    and ensure it is set to `docker`. 

## VGPU

If you are using VGPUs, you should be aware of the following:

- Nvidia gridd _does not_ run on the virtualization host. Instead, it runs in
  guest VMs - when using the GPU Operator, gridd runs inside the nvidia driver
  daemonset pod.
- The VGPU driver must match the driver on the host. When downloading the 
  driver package from the Nvidia License Portal, you will be presented with 
  two driver runfiles, for example:
  - `NVIDIA-Linux-x86_64-470.63-vgpu-kvm.run` - Installed on the **host**
  - `NVIDIA-Linux-x86_64-470.63.01-grid.run` - Installed on the **guest** (automatic with GPU operator)
  
  Ensure the correct drivers are used for the host and guest. 
  
- CUDA drivers do not need to be installed on the virtualization host (and are not
  included by default with the VGPU driver)
- VGPU mediated device UUIDs are not persistent across reboots. This can cause
  libvirt to fail after a reboot if you are running a VM with VGPUs. To fix this:

  - List instances on the host with `virsh list --all` (the instance will be shut off)

  - Find the instance that has the VGPU. If you don't know which one it is,
    use the `virsh edit` command to view the XML configuration of each instance
    and search for `mdev`.

  - Undefine the instance using `virsh undefine` and restart libvirtd.

- You might not be able to determine from the host whether a guest VGPU
  is licensed. To check license status, you should open a shell to a pod
  running with the nvidia container runtime and use `nvidia-smi` from there.
- On the virtualization host, you may notice that your physical GPU is bound to
  the `nvidia` driver, even though the `nvidia_vgpu_vfio` driver is available.
  The official docs are ambiguous on this, but your GPU should be bound to
  the `nvidia` driver. The guest VGPU will also be bound to the `nvidia` driver
  once the guest drivers are installed.

## Other Notes

- The `nvidia.com/gpu` resource request behaves counterintuitively. It serves as 
  a node scheduling hint for pods, and to keep track of which/how many pods are 
  using GPUs. `nvidia.com/gpu` a first-class node resource just like cpu and 
  memory. If a pod makes a request for one, the node it is scheduled on must 
  have that resource available. The existence of this resource request does 
  not equate to a pod taking exclusive ownership of the device. In fact, a pod
  can use a GPU without requesting an `nvidia.com/gpu` resource at all, as long
  as it has the correct environment variables and `runtimeClassName` set. 
  This is how the GPU Operator pods are configured - they do not request GPU
  resources by design, rather they are scheduled onto GPU nodes by other means
  and set up to use the nvidia container runtime. 
- Regardless of `nvidia.com/gpu` resource requests or container runtime, GPUs
  will _only_ be available if the `NVIDIA_VISIBLE_DEVICES` and 
  `NVIDIA_DRIVER_CAPABILITIES` environment variables are set correctly. They 
  should be set as follows:
    - `NVIDIA_VISIBLE_DEVICES=all`
    - `NVIDIA_DRIVER_CAPABILITIES=compute,utility`

    They can be set either in the pod spec, or in the docker image itself
    by using `ENV` in the Dockerfile.

- If you are not using the GPU operator, but you are using the nvidia device
  plugin daemonset by itself, be aware that you must patch the daemonset to 
  include `runtimeClassName: nvidia` in its pod template. The GPU operator will
  do this automatically, but the daemonset does not have it set by default.
- The GPU Operator installs the drivers in such a way that they are not 
  directly visible or usable by the host. As such, tools like `nvidia-smi` will
  not be available, so you will need to exec into a pod running with the nvidia
  container runtime to interact with a GPU.
- A common way to pass a GPU through to a virtual machine is by using the
  vfio-pci driver. There are several tutorials online that explain how to set 
  up vfio-pci. It is important to note that some Nvidia GPUs expose additional
  PCI devices (such as an audio or usb controller) in the same IOMMU group
  as the GPU device itself. When binding the GPU device to the vfio-pci driver, 
  ensure that any additional devices belonging to the GPU are bound as well.
