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
Opni AIOps offers log anomaly detection on workload logs with the following features:

* self-train models that learn from logs of workloads you selected.
* Doesn't require high volume of data to get started
* No AI/ML knowledge needed

Note that it requires an GPU available in your Opni cluster.

#### Prerequisites
the Opni cluster needs at least `1 GPU` attached.

#### Steps to enable
TODO - add images
1. enable workload log anomaly detection
2. select workloads for the AI models to learn from
3. Give it sometime for the AI model to get ready.
4. check out Opni's opensearch dashboard for AI insights.

#### Update workloads to modeling
TODO - add images

#### How to disable this
Simply click `Disable` to remove everything.

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