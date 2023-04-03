---
title: Enable Opni AIOps
slug: /installation/opni/aiops
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
<TabItem value="log-anomaly-detection" label="Log Anomaly Detection" default>

## Overview
Opni log anomaly detection comes with two features. 

The first feature involves the usage of three pre-trained Deep Learning models for logs from **Kubernetes control plane and etcd**, **Rancher** and **Longhorn** respectively. 

The second feature involves the user specifying workloads of interest and then Opni will train a  Deep Learning model and monitor the selected workloads.

## Enabling AI Services

Setting up log anomaly detection for Opni can be done through the Opni admin dashboard. Go to the AIOps section and then check the pretrained models that the user would like to receive insights from. If a GPU is enabled on this cluster and the user would like to receive insights on selected workloads, check the **Enable GPU services** button.

![Enable AIOps](/img/aiops/admin_dashboard_enable_ai.png)

<Tabs>
<details>
<TabItem value="pre-trained" label="Pretrained Models">

Opni log anomaly detection comes with three specialized pretrained Deep Learning models which are maintained by SUSE Rancher. These models have been optimized to **not require a GPU** for usage, provide **state-of-the-art accuracy** and each one has a **size just under 80 MB.** Use these models to **accelerate mean time to resolution**.

## Prerequisites

The Opni cluster must have **Opni logging** enabled.

* **Kubernetes control plane and etcd logs**
    * Compatible with control plane and etcd logs from RKE1, RKE2 and K3s distributions.
    * Identifies granular anomalies within specific Kubernetes components.

* **Rancher logs** 
    * Compatible with any distribution of Kubernetes that is running any distribution of [Rancher](https://docs.ranchermanager.rancher.io/versions).

* **Longhorn logs**
    * Compatible with any distribution of Kubernetes that is running any distribution of [Longhorn](https://longhorn.io).

</TabItem>
<TabItem value="workload" label="User Workloads Self-Learning">
Opni AIOps offers log anomaly detection on user's workload logs with the following features:

* self-train models that learn from logs of the workloads user have selected
* Doesn't require high volume of data to get started
* No AI/ML knowledge needed

Note that it requires an GPU available in the Opni cluster.

## Prerequisites
* Opni logging enabled
* Enabling AIOps and the GPU Services
* At least 1 NVIDIA GPU attached

## Getting Started
![SetupWorkloads](/img/aiops/initial_workload_configuration.png)

1. Within the Opni Admin Dashboard, once AIOps has been enabled, go to the Workload Insights Tab.
2. Select a cluster
3. Select the workloads you want
4. Click **Update Watchlist** to submit the configuration

The UI will give a status of the progress of the model. 
![Model Training Status](/img/aiops/opni_train_workload_model.png)

Once the model is ready, you can then navigate to Opni's Opensearch dashboard and [consume AI Insights](#consuming-ai-insights-from-opni).

### Remove workloads

![RemoveWorkloads](/img/aiops/remove_workload_insights.png)

To remove the workloads you don't want anymore, simply uncheck the boxes and **Update Watchlist**.

### Reset workloads

To reset your watchlist, simply hit the button **Clear Watchlist**.

</TabItem>
</Tabs>

## Consuming AI Insights from Opni

Once Opni logging has been enabled in the central cluster, log anomaly insights can now be obtained by going to Opensearch Dashboards and viewing the Opni plugin.

![Opensearch Dashboards Opni Plugin](/img/aiops/opensearch_opni_plugin.png)

### Overall Insights
![Opensearch Dashboards Overall Breakdown](/img/aiops/opensearch_dashboards_overall.png)

The Opni UI within Opensearch breaks down the status of all clusters into an **easy-to-consume** manner. 
From the top two panels, the left chart shows the overall number of normal and anomalous logs in the system and the right chart shows the breakdown of anomalous log messages from Kubernetes control plane components.

### Workload Log Insights
![Opensearch Dashboards Workload Component](/img/aiops/workload_insights_panel.png)

For workload logs, the Opni UI will display the breakdown of normal and anomalous log messages at a pod level among the selected deployments.

### Kubernetes Control Plane and Etcd Log Insights

![Opensearch Dashboards Control Plane Component](/img/aiops/opni_controlplane_breakdown.png)

For control plane logs, the Opni UI allows the user to **zone in on specific Kubernetes components** and upon clicking on the number of anomalous or normal log messages, the user will be redirected to the actual log messages that were **inferred on by the pretrained Deep Learning model for control plane logs**.

### Rancher Log Insights

![Opensearch Dashboards Rancher Logs](/img/aiops/rancher_log_insights.png)

Similar to the control plane logs, Rancher logs are also displayed in an easy-to-consume manner where the user can be redirected to the Dashboards page to view the actual log messages that were **inferred by the pretrained deep learning model for Rancher logs**.

### Longhorn Log Insights
![Opensearch Dashboards Longhorn Logs](/img/aiops/longhorn_opni_log_anomaly.png)
Longhorn logs are displayed in an easy-to-consume manner where the user can be redirected to the Dashboards page to view the actual log messages that were **inferred by the pretrained deep learning model for Longhorn logs**



</TabItem>
</Tabs>