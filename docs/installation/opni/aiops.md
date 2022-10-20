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
TODO Amartya
<Tabs>
<TabItem value="pre-trained" label="Pretrained Models">

TODO Amartya
* Hello world

</TabItem>
<TabItem value="workload" label="User workloads self-learning (coming soon)">
Opni AIOps offers log anomaly detection on user's workload logs with the following features:

* <i> self-train models that learn from logs of the workloads user selected. </i>
* <i> Doesn't require high volume of data to get started </i>
* <i> No AI/ML knowledge needed </i>

Note that it requires an GPU available in the Opni cluster.

## Prerequisites
the Opni cluster must have **Opni Logging enabled** and needs at least **1 GPU** attached.

## Getting Started
![SetupWorkloads](/img/aiops/setup_workload_loganomaly.png)
1. Navigate to the Opni Admin dashboard, select the **Workloads** tab
2. select a cluster
3. select the workloads you want 
4. Click **Update Watchlist** to submit the configuration.

Give it some time for the AI models to get ready. You can then navigate to Opni's Opensearch dashboard and [consume AI Insights](#consume-ai-insights)

### Remove workloads
![RemoveWorkloads](/img/aiops/remove_workload_loganomaly.png)
To remove the workloads you don't want anymore, simply uncheck the boxes and **Update Watchlist**.

</TabItem>
</Tabs>
</TabItem>
<TabItem value="metric-anomaly-detection" label="Metric Anomaly Detection (coming soon)">
TODO Yingbei
</TabItem>
<TabItem value="root-cause-detection" label="Root Cause Detection (coming soon)">
TODO Yingbei
</TabItem>
</Tabs>