---
title: Enable capabilities in downstream agents
slug: /installation/opni_agent/capabilities
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The following capabilities can be enabled in downstream agents:
<Tabs>
<TabItem value="metrics" label="Metrics capability" default>
TODO Joe

Pre-requisites:
* Opni monitoring backend is enabled in upstream Opni

</TabItem>
<TabItem value="logs" label="Logs capability">

Pre-requisites:
 * Opni logging backend is enabled in upstream Opni<br/>
 <br/>

To install the Logs capability into a cluster once the logging backend is installed, select the Logging button in the clusters screen

![Add cluster](/img/clusters.png)

The Opni agent will detect the type of cluster it is installed into and create an appropriate fluentbit and fluentd configuration to collect the logs.  It will also start collecting Kubernetes events from inside the cluster.  These will all be sent to the Opni Shipper deployment which is configured to authenticate to Opensearch in the central cluster and ship logs to the endpoint.

</TabItem>
</Tabs>
