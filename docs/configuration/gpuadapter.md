---
title: GPU Policy Adapter
---
!!! warning
    The GPU Adapter is currently experimental and is behind a feature gate.  To turn this on you need to run the Opni Manager with the following argument `--feature-gates=GPUOperator=true`

The Opni Manager can assist with configuring NVIDIA GPU drivers and runtimes.  To do this it uses an embedded [NVIDIA GPU Operator](https://github.com/NVIDIA/gpu-operator) with a wrapper.  The GPU operator requires Node Feature Discovery running as a prerequisite.  If this is not already deployed it can be run with the following command:
```bash
kubectl apply -f https://raw.githubusercontent.com/rancher/opni/main/deploy/examples/nfd_aio.yaml
```

It currently supports the following Kubernetes distributions:

- rke
- k3s (v1.22.2+k3s1 or later)
- auto (auto detection)

And the following container runtimes:

- docker
- containerd
- crio
- auto (auto detection)

*example.yaml*
```yaml
apiVersion: opni.io/v1beta1
kind: GpuPolicyAdapter
metadata:
  name: example-adapter
spec: {}
```

### Custom Resource Specs

#### GpuPolicyAdapterSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| containerRuntime | No | *string* | The container runtime the host is using.  Must be one of docker, containerd, crio, or auto.  Defaults to auto |
| kubernetesProvider | No | *string* | The kubernetes distribution.  Must be one of k3s, rke2, rke, auto, or none.  Defaults to auto |
| images | No | [ImagesSpec](#imagesspec) | Overrides for the images used by the operator (primarily for airgapped scenarios) |
| vgpu | No | [VGPUSpec](#vgpuspec) | Additional config required if using vGPUs |
| template | No | nvidia ClusterPolicySpec | Overrides for the ClusterPolicy created by the GpuPolicyAdapter.  Details about the fields can be found in the [NVIDIA documentation](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/getting-started.html) or by reviewing the [NVIDIA code](https://github.com/NVIDIA/gpu-operator/blob/master/api/v1/clusterpolicy_types.go) |

#### ImagesSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| driver | No | *string* | Driver image |
| driverManager | No | *string* | Driver Manager image |
| dcgm | No | *string* | DCGM image |
| dcgmExporter | No | *string* | DCGM Exporter image |
| devicePlugin | No | *string* | Device Plugin image |
| gfd | No | *string* | GFD image |
| initContainer | No | *string* | InitContainer image for deployed workloads |
| toolkit | No | *string* | Toolkit image |
| validator | No | *string* | Validator image |
| migManager | No | *string* | MIG Manager image |

!!! info
    Details about the images can be found in the [NVIDIA airgap documentation](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/appendix.html#install-gpu-operator-in-air-gapped-environments)

#### VGPUSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------|
| licenseConfigMap | Yes | *string* | Name of the config map that contains the vGPU license file |
| licenseServerKind | Yes | *string* | The type of vGPU license.  Must be one of nls, or legacy |