---
title: Enable capabilities in downstream agents
slug: /installation/opni_agent/capabilities
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

By default, agents do not have any capabilities enabled. From the Opni dashboard or CLI, you can enable or disable capabilities per-agent.

The following capabilities can be enabled in downstream agents:
<Tabs>
<TabItem value="metrics" label="Metrics capability" default>

Enabling the metrics capability for an agent will deploy a Prometheus instance on the agent's cluster. It will then automatically begin collecting metrics and sending them to the Opni Gateway, where they will be forwarded to Cortex.

### Prerequisites

Before you can enable the metrics capability for agents, you must first enable the Monitoring backend in the Opni cluster. See [Enable Backends](/installation/opni/backends) for instructions.

:::note

If the backend is not installed, you will see the following tooltip when hovering over the Monitoring capability button:

<div className="image-border">
  <img
    src={require('/img/installation/agent-capability-cannot-install.png').default} 
    alt="Tooltip"
  />
</div>

:::

### Using the Opni dashboard

To enable the metrics capability for an agent using the Opni dashboard, follow these steps:

1. Navigate to the Opni dashboard

  To access the dashboard, you can port-forward:

  ```bash
  kubectl -n opni port-forward svc/opni-admin-dashboard web:web
  ```
  Then navigate to [http://localhost:12080](http://localhost:12080).

2. Select "Clusters" from the left sidebar, and identify the cluster you want to enable the metrics capability for. Click the capability button to enable it.

  <div className="image-border">
    <img
      src={require('/img/installation/agent-capability-install.png').default} 
      alt="Enable capability"
    />
  </div>

  <br />
  <br />

  <div className="image-border">
    <img
      src={require('/img/installation/agent-capability-install-success.png').default} 
      alt="Installing capability"
    />
  </div>

  <br />
  <br />

  If the installation succeeds, you should see data in the the **Distinct Metrics** and **Metrics Ingestion Rate** fields for this cluster.

  <div className="image-border">
    <img
      src={require('/img/installation/agent-metrics-stats.png').default} 
      alt="Capability installed"
    />
  </div>

  <br />
  <br />

  :::tip Cluster Names

  Clusters are identified by a UUID by default, but you can set a name alias for the cluster to make it easier to identify. To edit a cluster's name, right-click on it and choose "Edit", then input a name and click "Save".

  <div className="image-border">
    <img
      src={require('/img/installation/cluster-edit-name.png').default} 
      alt="Edit cluster name"
    />
  </div>

  <br />
  <br />

  Afterwards, the cluster will be listed by its name instead of its UUID.

  <div className="image-border">
    <img
      src={require('/img/installation/cluster-name-saved.png').default} 
      alt="Copy cluster ID"
    />
  </div>

  <br />
  <br />

  If you need the UUID later, you can right-click on the cluster and select "Copy ID".

  :::

  :::tip Identifying a cluster by UUID

  The UUID used to identify a cluster is the `uid` of the cluster's `kube-system` namespace resource. If needed, you can obtain a cluster's UUID manually with the following command:

  ```bash
  kubectl get namespace kube-system -o jsonpath='{.metadata.uid}'
  ```

  :::

### Using the CLI

You can also manage cluster capabilities using the Opni CLI. 

The `opni capability` command can install, uninstall, and check the status of cluster capabilities. See below for an example of how these commands can be used:


<CodeBlock>

<p>
$ opni capabilities status metrics 4003b8a2-333e-4f3a-889b-7993700b9d25<br />
<span style={{ color: 'red' }}>Not installed</span>
</p>

<p>
$ opni capabilities install metrics 4003b8a2-333e-4f3a-889b-7993700b9d25<br />
2022-10-20T16:30:26.515Z <span style={{ color: 'dodgerblue' }}>INFO</span> <span style={{ color: 'gray' }}>commands/capabilities.go:81</span> Capability installed successfully
</p>

<p>
$ opni capabilities status metrics 4003b8a2-333e-4f3a-889b-7993700b9d25<br />
<span style={{ color: 'limegreen' }}>Installed</span>
</p>

<p>
$ opni capabilities uninstall metrics 4003b8a2-333e-4f3a-889b-7993700b9d25<br />
2022-10-20T16:30:38.667Z <span style={{ color: 'dodgerblue' }}>INFO</span> <span style={{ color: 'gray' }}>commands/capabilities.go:118</span> Uninstall request submitted successfully<br />
2022-10-20T16:30:38.667Z <span style={{ color: 'dodgerblue' }}>INFO</span> <span style={{ color: 'gray' }}>commands/capabilities.go:124</span> Watching for progress updates...<br />
<span style={{ color: 'dodgerblue' }}>INFO</span> [Oct 20 16:30:38.663] State changed to <span style={{ color: 'gold' }}>Pending</span><br />
<span style={{ color: 'dodgerblue' }}>INFO</span> [Oct 20 16:30:38.669] Stored data will not be deleted<br />
<span style={{ color: 'dodgerblue' }}>INFO</span> [Oct 20 16:30:38.672] State changed to <span style={{ color: 'dodgerblue' }}>Running</span><br />
<span style={{ color: 'dodgerblue' }}>INFO</span> [Oct 20 16:30:38.680] Uninstalling metrics capability for this cluster<br />
<span style={{ color: 'dodgerblue' }}>INFO</span> [Oct 20 16:30:38.682] Time series data will not be deleted<br />
<span style={{ color: 'dodgerblue' }}>INFO</span> [Oct 20 16:30:38.686] Removing capability from cluster metadata<br />
<span style={{ color: 'dodgerblue' }}>INFO</span> [Oct 20 16:30:38.691] State changed to <span style={{ color: 'limegreen' }}>Completed</span><br />
<span style={{ color: 'dodgerblue' }}>INFO</span> [Oct 20 16:30:38.698] Capability uninstalled successfully<br />
</p>

<p style={{ margin: '0' }}>
$ opni capabilities status metrics 4003b8a2-333e-4f3a-889b-7993700b9d25<br />
<span style={{ color: 'red' }}>Not installed</span>
</p>
</CodeBlock>

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
