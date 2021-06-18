---
title: Opni - AIOps for Kubernetes
---

Opni = AIOps for Kubernetes + logging + monitoring. 

It currently features log anomaly detection - simply ship your logs to Opni and its AI models will automatically learn and identify anomalous behavior in your control plane, etcd, and applications logs. Metrics and event anomaly detection to come soon!

[![](https://opni-public.s3.us-east-2.amazonaws.com/opni_youtube_gh.png)](https://youtu.be/DQVBwMaO_o0)

Get started by setting up Opnictl in your own environment!
```
curl -sfL https://raw.githubusercontent.com/rancher/opni-docs/demo/quickstart_files/install_opni.sh | sh -
kubectl port-forward svc/opendistro-es-kibana-svc --address 0.0.0.0 -n opni-system 5601:443
```
