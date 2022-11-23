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
You are free to edit or delete this condition as you see fit.
:::

<hr/>

### Editing / Deleting Alarms

In order to edit or delete alarms right click the condition you want to edit or delete :

<div className="image-border">
  <img
    src={require('/img/edit.png').default} 
    alt="Alerting configuration"
  />
</div>

### Attaching an Endpoint to an Alarm

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

Based on the implementation details above, once we hit 'Save' and our downstream agent has disconnected for > 10mins, you will receive an alert:

<div className="image-border">
  <img
    src={require('/img/slack-alarm.png').default} 
    alt="Alerting configuration"
  />
</div>

## Overview

Overview tab will display a timeline of when alarms have fired.

<div className="image-border">
  <img
    src={require('/img/timeline.png').default} 
    alt="Alerting configuration"
  />
</div>
