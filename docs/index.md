---
title: Opni - Multi-Cluster Observability with AIOps
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Opni is an open-source software designed for multi-cluster and multi-tenant observability. Built on Kubernetes, Opni simplifies the process of creating and managing backends, agents, and data related to logging, monitoring, and tracing. With built-in AIOps, Opni allows users to swiftly detect anomalous activities in their data.

![Opni Architecture](/img/high_level_arch.png)

## Opni Components
The three key elements of observability are ***logs, metrics, and traces***.
Observability backends and agents handle the collection and storage of this data. AIOps aids in understanding this observability data, and Opni encompasses all these components.

<Tabs>
<TabItem value="backends" label="Observability Backends" default>    

Observability backends receive and store various data types.
Opni, designed with Kubernetes in mind, builds on popular open-source tools to serve as backends. Although these backends can be challenging to set up, Opni streamlines their creation and management.

Currently, you can create the following:

- **Opni Logging** - enhances [Opensearch](https://opensearch.org) for easy searching, visualization, and analysis of **logs**, **traces**, and **Kubernetes events**
- **Opni Monitoring** - extends [Cortex](https://cortexmetrics.io) for multi-cluster, long-term storage of **Prometheus metrics**
      
</TabItem>
<TabItem value="agents" label="Observability Agents">

Observability agents are software that collects observability data (logs, metrics, traces, and events) from their host and sends it to an observability backend.
Installing the Opni agent in Kubernetes clusters enables the collection of logs, Kubernetes events, OpenTelemetry traces, and Prometheus metrics with a single click.

</TabItem>
<TabItem value="aiops" label="AIOps">

AIOps involves the application of AI and machine learning to IT and observability data.
Opni AIOps features include:
* **Log anomaly detection**
  * Pretrained models for [Kubernetes control plane](https://kubernetes.io/docs/concepts/overview/components/), [Rancher](https://www.rancher.com/why-rancher), and [Longhorn](https://longhorn.io/)
  * Capability to learn and self-train models based on your workload logs if a GPU is available on the cluster
* **Root cause detection** (coming soon)
* **Metric anomaly detection** (coming soon)

</TabItem>
<TabItem value="alerting" label="Alerting and SLOs">

Creating triggers and reliability targets for services allows you to utilize your data effectively and make informed decisions regarding software operations. Opni alerting enables this through its alerting and SLO interface.
</TabItem>
</Tabs>