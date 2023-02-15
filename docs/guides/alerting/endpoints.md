# Endpoints

## Prerequisites

- Access to the admin UI
- Opni-Alerting backend is installed

## Configuration

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
