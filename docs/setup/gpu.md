---
title: Cluster GPU Configuration
---

Opni utilizes GPU acceleration for some of its components. Links to documentation
for several common cluster providers are listed below. If your cluster provider
is not listed, consult the documentation for your cluster provider.


For standard clusters (e.g. Kubeadm, Kops, RKE2, K3S), you can use
the [GPU Operator](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/getting-started.html#install-nvidia-gpu-operator)

For Docker-based Kubernetes clusters:

- [RKE](https://rancher.com/blog/2020/get-up-and-running-with-nvidia-gpus)
- [K3D](https://k3d.io/usage/guides/cuda/)
- [Minikube](https://minikube.sigs.k8s.io/docs/tutorials/nvidia_gpu/)