---
title: Enable SLOs
slug: /installation/opni/slo
---

## Introduction

The term [SLO](#service-level-objective-slo), or Service Level Objective, is derived from the need in production applications for SLAs, or Service Level Agreements.

SLAs specify a target for application performance, reliability or health, and SLOs are the tool used to **observe**
said application's performance, reliability or health.

SLOs can be broken down into two components :

- [SLI](#service-level-indicator-sli) : the actual metrics that represent the application performance, reliability or health over some **period** of time
- Target : an objective we want the metrics the SLI defines to abide by

## Observability of SLOs

There are many ways to define and observe SLOs, in Opni we choose to represent them as :

$$
\frac{rate \ over \ time(good \ events)}{rate \ over \ time(total \ events)}
$$

which lets consumers of opni SLOs to specify the good events and total events they consider relevant
to their applications.

For example, should an operator want to observe the reliability of an application's <b>http requests</b>,
an operator may choose to classify the events as :

![Events Example](/img/events_example.png)

Note that:

- leaving the total of events empty includes all events observed
- all good events are automatically included in the list of total events
- if total events is not-empty, codes that are neither classified as total or good will be ignored from the calculation

<hr/>

Opni SLOs create several metrics to help understand the observed performance, reliability and health
of your [SLO](#service-level-objective-slo) :

- [Error Budget](#error-budget) : metric representing the remaining number of bad events until the SLO's target is breached
- [Burn Rate](#burn-rate-ratio) : The current rate at which bad events are occuring
- [Expected Budget Consumption](#expected-budget-consumption) : Metric that predicts the budget consumption over the SLO's period based on a variety of factors

## Getting Started

<!---
TODO: actual "tutorial"
--->

### Prerequisites

Opni's SLO functionality requires :

- The [Opni Monitoring Backend](#TODO-LINK)
- One or more agents with the [metrics capability](#TODO-LINK) enabled
<!---
TODO: - the [Opni Alerting Backend] to forward the alerts produced by SLOs
--->

### Create Opni SLO

Navigate to your Opni Admin Dashboard:

![SLOManagement](/img/sloManagement.png)

---

![SLOManagement](/img/sloProcess.png)

**1** - Select a name for your new [SLO](#service-level-objective-slo)

**2** - Select the cluster you wish to observe

**3** - Select a service discovered by the metrics backend

**4** - Select a metric exposed by the your system that you want to monitor with an SLO

**5** - The Metric filter allows you to tell Opni what the good events are for your SLO

- **Warning** : you must select at least one filter for your positive count, otherwise your [SLI](#service-level-indicator-sli) will be trivial (same events compared to same events)

**6** - Select a metric that represents the total count of event in your system to monitor

- **Warning** : the total count metric should always match your good count metric, unless you are confident in what you are doing (the [SLI](#service-level-indicator-sli) is no longer guaranteed to be within 0 - 1 as requried)
- Selecting a different total metric should be done when analyzing quantiles, for example `metric_name_bucket_total / metric_name_count_total`

**7** - Define any filter on the total events, if any. The default is to consider all events as part of the total events.

**8** - The target for the [SLO](#service-level-objective-slo) to achive over the period.

**9** - The period upon which the target should apply

**10** - How closely the SLO should track changes in the [burn rate](#burn-rate-ratio). A lower budgeting interval means deviations in burn rate will be alerted on more frequently.

## Example Usecase

When the Kubernetes apiserver is not available, this can be an indicator of underlying cluster performance issues, for example CPU, memory, FS or disk usage saturation.

The example pictured below details an SLO that measures the HTTP-availability of the Kubernetes api server:

- The filter on response codes of 200/201 from the apiserver indicate GET/LIST/CREATE/DELETE requests are working, while others may indicate that the api server is busy or encountering other issues that may affect your applications
- The total filter `service = kubernetes`, ensures that we are restricting our observation to the default kubernetes apiserver, and not any apiserver addons or plugins.

![Example SLO](/img/Example_SLO.png)

---

### Monitor your SLOs

<b> Opni alerting provides some comprehensive dashboards to monitor the status of your SLOs via opni grafana. </b>

#### Multi-Tenancy

Opni Alerting SLOs support multi-tenancy via opni-monitoring grafana access control, see [here](https://rancher.github.io/opni-monitoring/guides/access_control/).

Operators with specific role permissions will only have access to the SLOs on the clusters they have been assigned by the admin's RoleBinding configuration.

After setting up your access control, you can head to your opni cluster's grafana deployment and open the `Slo - Overview` & `Slo - Detailed` for
thorough dashboard breakdowns on your SLO's performance.

#### Multi-Cluster overview

The SLO Overview lets you quickly inspect the SLOs performance.

- View SLOs that are exceeding the burn rate filter that you can adjust
- View overall burn rate timeline and budget remaining
- View overall expected budget consumption

#### In depth overview

Ability to filter by cluster, service and slo name for viewing metrics on your SLOs

- SLI perfomance
- Burn rate, error budget
- Alerts status

---

## Core Concepts

### Service Level Objective (SLO)

Unit : `ratio/percentage`

**The target ratio/percentage, or threshold an [SLI](#service-level-indicator-sli) should have over its period**.

An SLO is considered healthy if :

$$
SLI >= Target
$$

And breaching if :

$$
SLI < Target
$$

<hr/>

### Service Level Indicator (SLI)

**Unit** : `ratio/percentage`

**A unit of measure to reflect a service's health, performance or reliability.**

For opni, an SLI is constructed on a specific service by comparing the rate of good events to the rate of all (total) events on the given service over the period of time it is defined on, for example 30 days.

An SLI of 1 (100%) indicates that the system is perfectly reliable, performant or healthy, while an SLI
of 0 indicates that the system is completely unreliable, inoperable or unhealthy.

$$
0 \le SLI \le 1
$$

<hr/>

### Error budget

Unit : `ratio/percentage`

**The allowed amount of events that deviate from the good events over the period the SLI is defined on**.

A remaining error budget of 100% means that the service has no encountered any bad events or failures.

$$
ErrorBudgetRatio = 1 - || SLO.Objective ||
$$

### Burn rate (ratio)

Unit : `ratio/percentage`

**The (immediate) rate at which the error budget is being consumed by the system.**

A burn rate between 0 and 1 (0-100%) corresponds to an SLI operating within its target and a burn rate > 1 (> 100%) indicates the target will be breached if the system continues consuming the budget at this burn rate.

$$
BurnRate = ErrorRatioRate - ErrorBudgetRatio
$$

where

$$
ErrorRatioRate = \frac{\partial}{\partial t} \frac{SLO.GoodEvents}{SLO.TotalEvents}
$$

and

$$
\frac{\partial}{\partial t} = rate over time
$$

<hr/>

### Expected budget consumption

Unit : `ratio/percentage`

**The estimated expected consumption of the budget over the SLI's period, Based on the observed error budget & burn rate**

For example, an expected error budget of 450%, means that based on current data, we expect to consume 4.5x the allowed error budget.

<hr/>

## Further Reading

Our underlying SLO model uses the Multi-Window, Multi-BurnRate alerts method from [Google's SRE Workbook](#https://sre.google/workbook/alerting-on-slos/)
