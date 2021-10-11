---
title: Opni - AIOps for Kubernetes
---
 
Opni = AIOps for Kubernetes + logging + monitoring. 

It currently features log anomaly detection - simply ship your logs to Opni and its AI models will automatically learn and identify anomalous behavior in your control plane, etcd, and applications logs. Metrics and event anomaly detection to come soon!

[![](https://opni-public.s3.us-east-2.amazonaws.com/opni_youtube_gh.png)](https://youtu.be/DQVBwMaO_o0)

!!! attention "opnictl"
    We have deprecated the opnictl CLI and are currently reviewing it. It should no longer be used starting in v0.2. For legacy quickstart documentation, see [here](deployment/quickstart.md)

## Installing Opni

For a basic installation with no persistent storage and no GPU, see [Basic Installation](deployment/basic.md)

For a fully customizable installation (some manual configuration required), see [Advanced Installation](deployment/advanced.md)

For the legacy quickstart documentation, see [Quickstart](deployment/quickstart.md)