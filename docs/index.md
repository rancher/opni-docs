---
title: Opni - AIOps for Kubernetes
---
 
Opni = AIOps for Kubernetes + logging + monitoring. 

It currently features log anomaly detection - simply ship your logs to Opni and its AI models will automatically learn and identify anomalous behavior in your control plane, etcd, and applications logs. Metrics and event anomaly detection to come soon!

[![](https://opni-public.s3.us-east-2.amazonaws.com/opni_youtube_gh.png)](https://youtu.be/DQVBwMaO_o0)

!!! danger "Impending removal"!!! attention "opnictl"
    We have deprecated the opnictl CLI and are currently reviewing it. It should no longer be used starting in v0.2. v0.2.0 release and will be removed in the next release.

!!! attention "opnictl"
    We have deprecated the opnictl CLI and are currently reviewing it. It should no longer be used starting in v0.2. For legacy quickstart documentation, see [here](deployment/quickstart.md)

## Installing Opni

### Prerequisites:

Opni requires Cert-Manager to run. Follow the official [instructions](https://cert-manager.io/docs/installation/) to install Cert-Manager.

### Clone the Opni repo 

```bash
$ git clone https://github.com/rancher/opni-docs.git
# Or by using the github CLI:
$ gh repo clone rancher/opni
```

### Install the Opni operator
Run the following command to install the Opni operator with Kustomize:
```
$ kubectl create -k config/default
```
### Wait for the operator to be ready
```
$ kubectl wait --timeout=300s --for=condition=available deploy/opni-controller-manager -n opni-system`
```
### Configure and install Opni components

Configure which Opni components will be installed by editing `deploy/kustomization.yaml`. 
This file specifies locations of other YAML files containing the required Opni
deployment configuration, as well as example entries for optional features. 
Some optional features require additional configuration in separate files.

After configuration is complete, install them using Kustomize:
```
$ kubectl create -k deploy
```
After the components are installed, monitor pods running in the opni namespace
and wait for them to be ready. This may take a few minutes. If GPU support is
enabled, several GPU Operator pods will be running in the `gpu-operator-resources`
namespace. It takes several minutes for the GPU operator to configure your cluster.
Your container runtime will be restarted during this process, so it is normal to
experience brief connectivity issues during this time.

See [Cluster GPU Configuration](setup/gpu.md) for more details
regarding GPU operator configuration.