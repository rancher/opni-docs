---
title: Opni Backends
slug: /installation/opni/backends
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An observability backend is where observability data is sent and for storage and querying.  Backends are configured in the Opni Management UI.
You can currently create the following backends:
 
<Tabs>
<TabItem value="opni-monitoring" label="Opni Monitoring" default>

TODO Joe
</TabItem>
<TabItem value="opni-logging" label="Opni Logging">
To enable the Opni Logging backend select Logging under Backends in the left hand navigation menu of the UI, and hit the Enable button.  You will be presented with a number of details to fill out.
<br/>
<br/>

#### External URL
This is the URL that the Opensearch API will be exposed on.  You will need to manually expose this URL using either an Ingress or Load Balancer service.

#### Data Retention
This is how long logs will be retained for.  The default is 7 days (7d).  This can be extended if required, for example 6 months (6m) or 1 year (1y).

#### Node Pool configuration
![Opni Node Pool settings](/img/loggingnodepool.png)
This is where the Opensearch node pools are configured. All three roles (controlplane, data, ingest) are required in the cluster but can be spread across multiple node pools.

The roles are as follows:
 * Controlplane - manages leader elections for the cluster
 * Data - stores the cluster data and runs indexing and search operations
 * Ingest - runs ingest pipelines; Opni uses ingest pipelines to set up the data for AI operations.

For large clusters it is recommended to separate the roles.  In particular the controlplane nodes should be separated to avoid resource contention affecting the leader elections.  There should always be an odd number of controlplane nodes.

#### Dashboards configuration.
Click enable to install Opensearch Dashboards.  This provides a UI for Opensearch and Opni AIOps.<br/>
![Opni Node Pool settings](/img/loggingdashboards.png)

</TabItem>
</Tabs>
