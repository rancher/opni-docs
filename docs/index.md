---
title: Opni - AIOps for Kubernetes
---
 
Opni = AIOps for Kubernetes + logging + monitoring. 

It currently features log anomaly detection - simply ship your logs to Opni and its AI models will automatically learn and identify anomalous behavior in your control plane, etcd, and applications logs. Metrics and event anomaly detection to come soon!

[![](https://opni-public.s3.us-east-2.amazonaws.com/opni_youtube_gh.png)](https://youtu.be/DQVBwMaO_o0)

!!! danger "Impending removal"
    The opnidemo resource has been deprecated in the v0.2.0 release and will be removed in the next release.

!!! attention "opnictl"
    We have deprecated the opnictl CLI and are currently reviewing it.  The recommended method for deploying Opni is to use the yaml files in the [repo](https://github.com/rancher/opni/tree/reorg-samples/deploy/manifests)

### Setup Opni
Get started by setting up Opnictl in your own environment! You may need to run as root if using a virtual machine.
```
curl -sfL https://raw.githubusercontent.com/rancher/opni-docs/main/quickstart_files/install_opni.sh | sh -
```

For more details view the [Quickstart guide](./deployment/quickstart)