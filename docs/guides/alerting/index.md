# Opni Alerting : User Guide

This guide walks through the usage of Opni-Alerting.

There are 3 main components to Opni-Alerting:

- Endpoints : targets for alarms to dispatch to
- Alarms : Expressions that specify some condition to alert on
- Overview : Timeline of breached conditions

## Prerequisites

- Access to the admin UI
- Opni-Alerting backend is installed

## Endpoints

In order to get started, head to the 'Endpoints' tab under 'Alerting' in the left sidebar of the admin UI

<div className="image-border">
  <img
    src={require('/img/endpoints.png').default} 
    alt="Alerting configuration"
  />
</div>

To create a new endpoint, click the top-right 'Create' button to open
the create UI

### Slack

Using slack requires a :

- Valid incoming slack webhook
- Valid slack channel

:::note
See the official [slack docs](https://slack.com/help/articles/115005265063-Incoming-webhooks-for-Slack) for setup instructions
:::

<div className="image-border">
  <img
    src={require('/img/slack-configure.png').default} 
    alt="Alerting configuration"
  />
</div>

<br/>
<br/>

:::caution

If the specified channel does not exist, or your slackbot does not have appropriate permissions to send messages to the specified channel, it will send the alert to its default channel.

:::

To validate your inputs, hit the 'Test Endpoint' button to make sure opni alerting can dispatch messages to your configured endpoint.

If your inputs are correct, you should receive a test message:

<div className="image-border">
  <img
    src={require('/img/slack-example-message.png').default} 
    alt="Alerting configuration"
  />
</div>

<br/>
<br/>
When you are done, hit the 'Save' button.

### Email

Using email endpoint requires its own smtp server, which will require:

- To email : valid recipient for this endpoint
- From email : valid sender for this email
- Smart Host : `<url>:<port>` for your SMTP server setup
- Smtp Identity : Identity to use with your SMTP server
- Smtp username : Auth username credential for SMTP server
- Smtp Password : Auth password credential for SMTP server

<div className="image-border">
  <img
    src={require('/img/email-configure.png').default} 
    alt="Alerting configuration"
  />
</div>

<br/>
<br/>

:::note
SMTP server configurations will be specific to your IT or production setup
:::

To validate your inputs, hit the 'Test Endpoint' button to make sure opni alerting can dispatch messages to your configured endpoint.

When you are done, hit the 'Save' button.

### PagerDuty

Using PagerDuty requires a PagerDuty integration key.

:::note
See the official PagerDuty docs on [integration with AlertManager](https://www.pagerduty.com/docs/guides/prometheus-integration-guide/) for generating
integration keys
:::

<div className="image-border">
  <img
    src={require('/img/pager-duty.png').default} 
    alt="Alerting configuration"
  />
</div>

## Alarms

Alarms are used to evaluate whether or not some external condition should dispatch a notification to the configured endpoints

:::caution
Alarms will fire without attached endpoints, but if you do not attach any endpoints to your alarm it will not dispatch to any endpoints (it will still show as firing in the opni UI).
:::

### State

- Unkown : State can't be reported or analyzed by Opni-Alerting
- Ok : The alarm is fine
- Firing : The alarm has met its condition, expect to eventually receive a notification, depending on your settings
- Silenced : The alarm is firing but has been silence by the User.
- Invalidated : The alarm can no longer evaluate to Ok or Firing, usually due to uninstalling external requirements.

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

## Alarm Types

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

### Prometheus Query

Alerts when the given prometheus query evaluates to <b> True </b>

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

### Silencing an Alarm

If operators with to silence a firing alarm, which will cause the alarm to no longer send any notifications to endpoints, then consider :

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
