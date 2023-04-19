# Opni Alerting

Opni Alerting is a service managed by opni to send notifications based on opni observability data.

There are 2 main components to Opni-Alerting:

- Endpoints : targets for alarms to dispatch to
- Alarms : Expressions that specify some condition to alert on

## Endpoints

Supported integrations:

- Slack
- Email (with SMTP server)
- Pager Duty

See [the endpoints configuration section](#endpoints) for getting started with configuring your endpoints

## Alarms

Supported integrations:

- Opni agent
- Opni monitoring
- Opni monitoring backend

See [the alarms configuratin section](#alarms) for getting started with configuring your alarms.

## SLOs

A more sophisticated alarm configuration targeted at meeting budgeting and SLA goals.

Supported integrations:

- Opni monitoring

See [the SLO page](#slos) for getting started with creating SLOs.
