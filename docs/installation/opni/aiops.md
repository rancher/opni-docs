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

### Prerequisities
* Opni logging enabled

### Enabling AI Services

Setting up log anomaly detection for Opni can be done during the installation of Opni either through the [Rancher UI](../opni/index.md#rancher) or installing through [Helm](../opni/index.md#helm). The Pulumi installation does not currently support the enabling of log anomaly detection but that will be introduced sometime down the road.

### Rancher UI

 After the gateway has been setup, go to the AI Services tab and check the box to enable AI services. Once that has been done, then click the Install button.

![Enable AI Services](/img/enable_ai_services.png)

## Helm Installation

For installing Opni using Helm, go to the [values.yaml file](https://github.com/rancher/opni/blob/main/packages/opni/opni/charts/values.yaml) and for the ai enabled spec, set that to True.
```
ai:
  enabled: true
```

Log Anomaly Detection is dependent on [Opni logging](../opni/backends.md#opni-logging) so even when you enable AI services on Opni, it will only be instantiated once you have setup Opni logging on your cluster. 

Once Opni logging has been enabled in the central cluster, log anomaly insights can now be obtained by going to Opensearch Dashboards and viewing the Opni plugin.
<Tabs>
<TabItem value="pre-trained" label="Pretrained Models">
Opni log anomaly detection comes with three specialized pre-trained Deep Learning models which are maintained by SUSE Rancher. These models have been optimized to not require a GPU for usage, provide state-of-the-art accuracy and each have a size just under 80 MB.

* **Kubernetes control plane and etcd logs**
    * Compatible with control plane and etcd logs from RKE1, RKE2 and K3s distributions.
    * Identifies anomalies within specific control plane components to accelerate mean time to resolution.

* **Rancher logs** 
    * Compatible with any distribution of Kubernetes that is running any distribution of [Rancher](https://docs.ranchermanager.rancher.io/versions).

* **Longhorn logs**
    * Compatible with any distribution of Kubernetes that is running any distribution of [Longhorn](https://longhorn.io).

</TabItem>
<TabItem value="workload" label="User workloads self-learning (coming soon)">
TODO Yingbei
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