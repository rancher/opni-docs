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

## Prerequisities
* The cluster must have Opni logging enabled.

## Enabling AI Services

Setting up log anomaly detection for Opni can be done during the [installation of Opni](../opni/index.md) either through the Rancher UI or installing through Helm. The Pulumi installation does not currently support the enabling of log anomaly detection but that will be introduced sometime down the road.

### Enable through Rancher UI

 After the gateway has been setup, go to the AI Services tab and check the box to enable AI services. Once that has been done, then click the Install button.

![Enable AI Services](/img/enable_ai_services.png)

### Enable through Helm

For installing Opni using Helm, go to the [values.yaml file](https://github.com/rancher/opni/blob/main/packages/opni/opni/charts/values.yaml) and for the ai enabled spec, set that to True.
```
ai:
  enabled: true
```

Log Anomaly Detection is dependent on Opni logging so even when you enable AI services on Opni, it will only be instantiated once Opni logging has been enabled on the cluster. 

## Consuming AI Insights from Opni

Once Opni logging has been enabled in the central cluster, log anomaly insights can now be obtained by going to Opensearch Dashboards and viewing the Opni plugin.

![Opensearch Dashboards Opni Plugin](/img/opensearch_opni_plugin.png)

### Overall Insights
![Opensearch Dashboards Overall Breakdown](/img/opensearch_dashboards_overall.png)
The Opni UI within Opensearch breaks down the status of all clusters into an **easy-to-consume** manner. 
From the top two panels, the left chart show the overall number of normal and anomalous logs in the system and the right chart shows the breakdown of anomalous log messages from Kubernetes control plane components.

### Kubernetes Control Plane and Etcd Log Insights

![Opensearch Dashboards Control Plane Component](/img/opni_controlplane_breakdown.png)
For control plane logs, the Opni UI allows the user to **zone in on specific Kubernetes components** and upon clicking on the number of anomalous or normal log messages, the user will be redirected to the actual log messages that were **inferred on by the pre-trained Deep Learning model for control plane logs**.

### Rancher Log Insights

![Opensearch Dashboards Rancher Logs](/img/opni_rancher_breakdown.png)
Similar to the control plane logs, Rancher logs are also displayed in an easy-to-consume manner where the user can be redirected to the Dashboards page to view the actual log messages that were **inferred by the pretrained Deep Learning model for Rancher logs**.

**For more information on the pretrained models leveraged by Opni, click on the tab below.**

<Tabs>
<TabItem value="pre-trained" label="Pretrained Models">

Opni log anomaly detection comes with three specialized pretrained Deep Learning models which are maintained by SUSE Rancher. These models have been optimized to **not require a GPU** for usage, provide **state-of-the-art accuracy** and each one has a **size just under 80 MB.** Use these models to **accelerate mean time to resolution**.

* **Kubernetes control plane and etcd logs**
    * Compatible with control plane and etcd logs from RKE1, RKE2 and K3s distributions.
    * Identifies granular anomalies within specific Kubernetes components.

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