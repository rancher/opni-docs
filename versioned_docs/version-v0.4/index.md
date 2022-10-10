---
title: Opni - AIOps for Kubernetes
slug: /
---

Opni = AIOps for Kubernetes + logging + monitoring.

It currently features log anomaly detection - simply ship your logs to Opni and its AI models will automatically learn and identify anomalous behavior in your control plane, etcd, and applications logs. Metrics and event anomaly detection to come soon!

[![](https://opni-public.s3.us-east-2.amazonaws.com/opni_youtube_gh.png)](https://youtu.be/DQVBwMaO_o0)

:::info Opni Monitoring

Opni Monitoring is a new multi-cluster monitoring tool that integrates with Opni AI and Logging systems. Check out the [documentation](https://rancher.github.io/opni-monitoring) for more details on how to get started.

:::

:::caution Attention

v0.4.0 release notes:

- GPU Learning is temporarily disabled in the v0.4.0 release as Opni moves to a multicluster architecture.  This will be returning in a future release
- The v1beta1 API has been deprecated in this release.  Details about the changes made in v1beta2 can be found [here](apiversions/v1beta2.md)
- The UI and Insights services, which were experimental, have been removed.

:::

## Installing Opni

For a complete quickstart including cluster setup, see [Quickstart](deployment/quickstart.md)

For a basic installation on an existing cluster with no persistent storage and no GPU, see [Basic Installation](deployment/basic.md)

For a fully customizable installation on an existing cluster (some manual configuration required), see [Advanced Installation](deployment/advanced.md)

