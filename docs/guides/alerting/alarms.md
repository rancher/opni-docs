# Alarms

Alarms are used to evaluate whether or not some external condition should dispatch a notification to the configured endpoints

:::caution
Alarms will fire without attached endpoints, but if you do not attach any endpoints to your alarm it will not dispatch to any endpoints (it will still show as firing in the opni UI).
:::

## State

Alarms have a state that reports their runtime status.

- Unkown : State can't be reported or analyzed by Opni-Alerting
- Pending : the alarm is waiting for dependencies it needs to be created before activating
- Ok : The alarm is fine
- Firing : The alarm has met its condition, expect to eventually receive a notification, the timing will depend on your settings
- Silenced : The alarm is firing but has been silenced by the User.
- Invalidated : The alarm can no longer evaluate to Ok or Firing, usually due to missing external requirements, for example when a cluster is delete or a required capability is uninstalled

## Managing Alarms

### Overview

Overview tab will display a timeline of when alarms have fired.

<div className="image-border">
  <img
    src={require('/img/timeline.png').default} 
    alt="Alerting configuration"
  />
</div>

### Editing / Deleting Alarms

In order to edit or delete alarms right click the condition you want to edit or delete :

<div className="image-border">
  <img
    src={require('/img/edit.png').default} 
    alt="Alerting configuration"
  />
</div>

### Cloning

:::caution attention
Cloning alarms with specific external requirements to other cluster(s) may result in invalidated state alerts if those requirements are not met by the target cluster(s)
:::

As above, you can right click the alarm you want to clone, which will open a menu to select which
clusters you want to clone to.

<div className="image-border">
  <img
    src={require('/img/clone-menu.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

You are allowed to clone to the same cluster, as well as clone any number of times to any cluster.

### Silencing an Alarm

If operators wish to silence a firing alarm, which will cause the alarm to no longer send any notifications to endpoints, then consider :

<div className="image-border">
  <img
    src={require('/img/example-firing.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

They can do so by right clicking edit and navigating to the silence tab:

<div className="image-border">
  <img
    src={require('/img/example-firing.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

Once the alarm is silenced, operators can always un-silence it by clicking the resume now.

<div className="image-border">
  <img
    src={require('/img/resume-silence.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

Tada! the alarm is silenced.

<div className="image-border">
  <img
    src={require('/img/silenced-alarm.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

:::note
You can silence alarms that are not in the firing state, and they will prevent any notifications from
being sent to endpoints if that alarm does enter the firing state
:::

## Alarm Types

### Prometheus Query

Alerts when the given prometheus query evaluates to <b> non-empty </b> on the discovered opni monitoring observability data.

:::caution attention
Requires the monitoring backend to be installed & one or more downstream agents
to have the metrics capability.
:::

#### Options

<div className="image-border">
  <img
    src={require('/img/prometheus-query-options.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

:::note
The above query should always evaluate to true, and subsequently evaluate to firing.
It can be used to sanity check your downstream agents with metrics installed.
:::

- Cluster : any cluster with an agent with metrics capabilities
- Duration : period after which we should fire an alert
- Query : any valid prometheus query

#### Examples

For users unsure where to begin with prometheus queries / alerts, here are [some starting ideas for alarms](https://awesome-prometheus-alerts.grep.to/rules.html).
Note the `expr` section of the rule corresponds to Opni-Alerting's prometheus query section.

### Agent Disconnect

Alerts when an agent disconnects within the specified timeout.

By default, whenever an agent is bootstrapped, for example consider this agent :

<div className="image-border">
  <img
    src={require('/img/default-agent.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

A matching agent disconnect condition is created with a 10 minute timeout.

<div className="image-border">
  <img
    src={require('/img/default-disconnect-alarm.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

:::note
You are free to edit or delete this default condition as you see fit.
:::

<hr/>

#### Options

<div className="image-border">
  <img
    src={require('/img/agent-disconnect-options.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

- Cluster : agent this alarm applies to
- Timeout : how long this agent has been disconnect before firing an alarm

#### Recommended Options

- Timeout : 10 or more minutes

### Downstream Capability

Alerts when an agent capability, e.g. Logging or Metrics, is in some unhealthy state for a certain amount of time.

By default when an agent is bootstrapped, a matching downstream capability alarm is created that will alert if _any_ unhealthy state is sustained over a period of 10 minutes.

<div className="image-border">
  <img
    src={require('/img/downstream-capability-alarm.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

:::note
You are free to edit or delete this default condition as you see fit.
:::

#### Options

<div className="image-border">
  <img
    src={require('/img/downstream-capability-alarm-options.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

- Cluster : cluster this applies to
- Duration : period after which we decide to fire an alaram
- One ore more capability states to track :
  - `Failure` : An agent capability is experiencing errors
  - `Pending` : A setup step or sync operation is hanging

#### Recommended Options

- Duration : 10 or more minutes

### Monitoring Backend

:::caution attention
Requires the monitoring backend to be installed
:::

Alerts when the specified monitoring backend components are in an unhealthy state over
some period of time

#### Options

<div className="image-border">
  <img
    src={require('/img/monitoring-backend-alarm-options.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

- Duration : period after which we should fire an alarm if the specified backend components
  are unhealthy, recommended to be 10 minutes or more
- Backend components :
  - `store-gateway` : responsible for persistent & remote storage, critical component.
  - `distributor` : responsible for distributing remote writes to the ingester
  - `ingester` : responsible for (persistent) buffering of incoming data
  - `ruler` : responsible for applying stored prometheus queries and prometheus alerts
  - `purger` : responsible for deleting cluster data
  - `compactor` : responsible for buffer compaction before sending to persistent storage
  - `query-frontend` : "api gateway" for the querier
  - `querier` : handles prometheus queries from the user

#### Recommended options

- Duration : 10 minutes or more, but no more than 90 mins
- Backend Components :
  1. track `store-gateway`, `distributor`, `ingester` & `compactor` as a high severity alarm
  2. track all components as a lesser severity alarm

### Kube State

:::caution attention
Requires the monitoring backend to be installed and have one or more agents that have both
metrics capabilities and kube-state-metrics enabled.
:::

Alerts when the desired kubernetes object on the cluster is in the state specified by the user for a certain amount of time.

#### Options

<div className="image-border">
  <img
    src={require('/img/kube-state-options.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

:::note
The above configuration will alert if the opni gateway is in fact running for more than 5 minutes.

It can be used to sanity check that your kube-state-metrics are working as intended.
:::

## General Alarm Options

### Attaching endpoint(s) to an Alarm

Right click edit your condition, and navigate to the message options tab in the edit UI & click 'Add Endpoint'

<div className="image-border">
  <img
    src={require('/img/add-endpoint.png').default} 
    alt="Alerting configuration"
  />
</div>

<br/>
<br/>

From here you can add a list of your configured endpoints to your alarm:

<div className="image-border">
  <img
    src={require('/img/CRUD-condition.png').default} 
    alt="Alerting configuration"
  />
</div>

<br/>
<br/>

You must specify Message options for the contents & dispatching configuration to your endpoint :

- Title : header for your particular endpoint
- Body : content of the message
- Initial Delay : time for backend to wait before sending alert
- Repeat interval : how often to repeat the alert when it fires
- Throttling duration : Throttle (delay) all alerts received from the same source by X minutes

<div className="image-border">
  <img
    src={require('/img/attach-endpoint.png').default} 
    alt="Alerting configuration"
  />
</div>
<br/>
<br/>

Based on the implementation details above, once we hit 'Save' and our downstream agent has disconnected for > 10mins, you will receive an alert:

<div className="image-border">
  <img
    src={require('/img/slack-alarm.png').default} 
    alt="Alerting configuration"
  />
</div>
