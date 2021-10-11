---
title: Installation
---

#### 1) Install Cert Manager

Cert Manager needs to be installed for the operator.  This can be installed with the following command:
```sh
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.5.4/cert-manager.yaml
```

#### 2) Install prerequisites

Next the CRDs and RBAC need to be installed for the operator:
```sh
kubectl  apply -f https://raw.githubusercontent.com/rancher/opni/main/deploy/manifests/00_crds.yaml
kubectl  apply -f https://raw.githubusercontent.com/rancher/opni/main/deploy/manifests/01_rbac.yaml
```

#### 3) Install the operator

Next install the operator into the cluster:
```sh
kubectl  apply -f https://raw.githubusercontent.com/rancher/opni/main/deploy/manifests/10_operator.yaml
```

#### 4) Create the OpniCluster resource

!!! note
    The operator deployment should be ready before applying the OpniCluster, otherwise the admission webhook will fail.

Create the Opni cluster:
```sh
kubectl apply -f https://raw.githubusercontent.com/rancher/opni/main/deploy/manifests/20_cluster.yaml
```

To deploy the GPU Controller service edit the resource and set `spec.services.gpuController` to be `true`.  Make sure the cluster has been [setup](../../setup/gpu) for GPU support.

If Rancher Logging is not installed then log shipping will need to be [setup](../../setup/log-shipping)

More details about the OpniCluster custom resource can be found in the [configuration page](../../configuration/opnicluster).