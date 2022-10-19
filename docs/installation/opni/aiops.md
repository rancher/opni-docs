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

Setting up log anomaly detection for Opni can be done during the [installation of Opni](../opni/index.md). After you setting the gateway, go to the AI Services tab and check the box to enable AI services. Once that has been done, then hit the Install button.

![Enable AI Services](/img/enable_ai_services.png)

Log Anomaly Detection is dependent on [Opni logging](../opni/backends.md) so even when you enable AI services on Opni, it will only be instantiated once you have setup Opni logging on your cluster. 
<Tabs>
<TabItem value="pre-trained" label="Pretrained Models">
Opni log anomaly detection comes with three specialized pretrained Deep Learning models that do not require a GPU for:

* **Kubernetes control plane logs**
    * Provides log anomaly insights for the Kubernetes control plane components including
        * Kubelet
        * Kube-controller-manager
        * Kube-apiserver
        * Kube-proxy
        * Kube-scheduler
        * etcd
    * Note: Amazon EKS clusters do not make control plane logs directly accessible so in order to use this feature, logs must be shipped from an RKE1, RKE2 or K3s cluster.

* **Rancher logs** 
    * Provides log anomaly insights for any clusters that have installed [Rancher](https://docs.ranchermanager.rancher.io/versions).

* **Longhorn logs**
    * Provides log anomaly insights for any clusters that have installed [Longhorn](https://longhorn.io).

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