---
title: Enable Opni AIOps
slug: /installation/opni/aiops
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Opni AIOps is composed of a few different solutions.
Read about each one to learn more and enable in your Opni cluster.

<Tabs>
<TabItem value="log-anomaly-detection" label="Log Anomaly Detection" default>

## Overview
Opni log anomaly detection comes with two features. The first includes three pre-trained models that can be used to achieve insights on logs from the Kubernetes controlplane and etcd, Rancher and Longhorn. 

The second feature allows a user to specify workloads which are of interest and then Opni will self-train models based on those workloads. At least one NVIDIA GPU is required for this step.

To learn more about these two features, click on the tabs below.

<Tabs>
<TabItem value="pre-trained" label="Pretrained Models">
Opni log anomaly detection comes with three specialized pretrained Deep Learning models which are maintained by SUSE Rancher. These models have been optimized to **not require a GPU for usage**, provide state-of-the-art accuracy and each one has a size just under 80 MB. Use these models to accelerate mean time to resolution.

* **Kubernetes control plane and etcd logs**
    * Compatible with control plane and etcd logs from RKE1, RKE2 and K3s distributions.
    * Identifies granular anomalies within specific Kubernetes components.

* **Rancher logs** 
    * Compatible with any distribution of Kubernetes that is running any distribution of [Rancher](https://docs.ranchermanager.rancher.io/versions).

* **Longhorn logs**
    * Compatible with any distribution of Kubernetes that is running any distribution of [Longhorn](https://longhorn.io).

</TabItem>
<TabItem value="workload" label="User workloads self-learning">
Opni AIOps offers log anomaly detection on user's workload logs with the following features:

* self-train models that learn from logs of the workloads user have selected
* Doesn't require high volume of data to get started
* No AI/ML knowledge needed

## Prerequisites

The Opni cluster must have **Opni Logging enabled** and needs at least **1 GPU** attached.

## Getting Started
![SetupWorkloads](/img/aiops/setup_workload_loganomaly.png)

1. Navigate to the Opni Admin dashboard and select the **Workloads** tab
2. Select a cluster
3. Select the workloads you want
4. Click **Update Watchlist** to submit the configuration

Give it some time for the AI models to get ready. You can then navigate to Opni's Opensearch dashboard and [consume AI Insights](#consuming-ai-insights-from-opni).

### Remove workloads

![RemoveWorkloads](/img/aiops/remove_workload_loganomaly.png)

To remove the workloads you don't want anymore, simply uncheck the boxes and **Update Watchlist**.

</TabItem>
</Tabs>

The other component of log anomaly detection is for workload logs which will self-train models that learn from the logs of the workloads selected by the user. No AI/ML knowledge is required however **at least 1 NVIDIA** GPU must be attached to the cluster to use this component.

For more information on these two components, go down below and click on the tabs for pre-trained or workload log anomaly detection.

## Prerequisites

The cluster must have Opni logging enabled. In addition, if workload insights are enabled, **at least 1 NVIDIA GPU** must be attached to the cluster.

## Enabling AI Services

Setting up log anomaly detection for Opni can be done through the Opni admin dashboard. You can specify which of the pretrained models you would like to have generating insights on your cluster and if you would like to receive insights on workload logs, check the box to enable GPU services. 

![Opni Admin Dashboard Enable AIOps](/img/admin_dashboard_enable_ai.png)

## Consuming AI Insights from Opni

Once Opni logging has been enabled in the central cluster, log anomaly insights can now be obtained by going to Opensearch Dashboards and viewing the Opni plugin.

![Opensearch Dashboards Opni Plugin](/img/opensearch_opni_plugin.png)

### Overall Insights
![Opensearch Dashboards Overall Breakdown](/img/opensearch_dashboards_overall.png)

The Opni UI within Opensearch breaks down the status of all clusters into an **easy-to-consume** manner. 
From the top two panels, the left chart shows the overall number of normal and anomalous logs in the system and the right chart shows the breakdown of anomalous log messages from Kubernetes control plane components.

### Kubernetes Control Plane and Etcd Log Insights

![Opensearch Dashboards Control Plane Component](/img/opni_controlplane_breakdown.png)

For control plane logs, the Opni UI allows the user to **zone in on specific Kubernetes components** and upon clicking on the number of anomalous or normal log messages, the user will be redirected to the actual log messages that were **inferred on by the pretrained Deep Learning model for control plane logs**.

### Rancher Log Insights

![Opensearch Dashboards Rancher Logs](/img/opni_rancher_breakdown.png)

Similar to the control plane logs, Rancher logs are also displayed in an easy-to-consume manner where the user can be redirected to the Dashboards page to view the actual log messages that were **inferred by the pretrained deep learning model for Rancher logs**.
</TabItem>
</Tabs>