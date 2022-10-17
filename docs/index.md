---
title: Opni - Multi Cluster Observability with AIOps
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Opni is open source software that combines everything an organization needs for multi-cluster, multi-tenant observability. Built on Kubernetes, Opni makes it easy for operators to create and manage backends, agents, and data associated with logging, monitoring, and tracing. Opni comes with AIOps built in so that users can immediately identify anomalous activity in their data.

![Opni Architecture](/img/high_level_arch.png)

## Opni Components
The three pillars of observability are ***logs, metrics and traces***.
The collection and storage of observability data is handled by observability backends and agents.
AIOps helps makes sense of this observability data.
Opni comes with all these nuts and bolts.
 
<Tabs>
<TabItem value="backends" label="Observability Backends" default>    

An observability backend is where these forms of data are sent and stored.
Opni was built with Kubernetes in mind and has built on top of popular open source tools that serve as backends. These backends are often difficult to set up, but Opni makes it easy to create and manage them. 

At the moment you can create the following: 

- **Opni Logging** - extends [Opensearch](https://opensearch.org) to make it easy to search, visualize and analyze **logs**, **traces** and **Kubernetes events**
- **Opni Monitoring** - extends [Cortex](https://cortexmetrics.io) to enable multi cluster, long term storage for **Prometheus metrics**
      
</TabItem>
<TabItem value="agents" label="Observability Agents">

An observability agent is software that collects observability data (logs, metrics, traces, events) from its host and sends it to an observability backend.
Installation of Opni agent in Kubernetes clusters allows you to collect logs, Kubernetes events, OpenTelemetry traces and Prometheus metrics with the click of a button. 

</TabItem>
<TabItem value="aiops" label="AIOps">

AIOps is the application of AI and machine learning to IT and observability data.
Opni AIOps includes the following:
* **Log anomaly detection**
  * Packaged with pretrained models for Kubernetes control plane, Rancher, Longhorn (does not require GPU to run)
  * Ability to learn and self train models based on your workload logs if a GPU is available on the cluster (coming soon)
* **Root cause detection** (coming soon)
* **Metric anomaly detection** (coming soon)


</TabItem>
<TabItem value="alerting" label="Alerting and SLOs">

Being able to create triggers and reliability targets for services allows you to leverage your data in meaningful ways and make better decisions on how to operate your software.
Opni alerting allows you to do this with its alerting and SLO interface. 
</TabItem>
</Tabs>

