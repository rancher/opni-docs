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

## Opni Prerequisites

Opni's SLO functionality requires :

- The [Opni Monitoring Backend](#TODO-LINK)
- One or more agents with the [metrics capability](#TODO-LINK) enabled
<!---
TODO: - the [Opni Alerting Backend] to forward the alerts produced by SLOs
--->

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

- leaving the total of events empty, includes all events observed
- all good events are automatically included in the list of total events.

<hr/>

Opni SLOs create several metrics to help understand the observed performance, reliability and health
of your [SLO](#service-level-objective-slo) :

- [Error Budget](#error-budget) : metric representing the remaining number of bad events the SLO's target is breached
- [Burn Rate](#burn-rate-ratio) : The current rate at which bad events are occuring
- [Expected Budget Consumption](#expected-budget-consumption) : Metric that predicts the budget consumption over the SLO's period

## Getting Started

<!---
TODO: actual "tutorial"
--->

### Create Opni SLO

<!---
TODO:
--->

### Monitor your SLOs

<!---
TODO:
--->

## Core Concepts

<!---
TODO: add images
--->

<hr/>

### Service Level Objective (SLO)

This is an [SLI](#service-level-indicator-sli) paired with some target ratio between 0-1 (or a percentage from 0-100%)

<hr/>

### Service Level Indicator (SLI)

**Unit** : `ratio/percentage`

**A unit of measure to reflect a service's health, performance or reliability.**

For opni, an SLI is constructed on a specific service by taking the
$\frac{rate(good \ events)}{rate(total \ events)}$
on the given service over the period of time it is defined on, for example 30 days.

An SLI of 1 (100%) indicates that the system is perfectly reliable, performant or reliable, while an SLI
of 0 indicates that the system is completely unreliable, inoperable or unereliable.

<hr/>

### Service Level Objective (SLO)

Unit : `ratio/percentage`

**The target ratio/percentage, or threshold an SLI should have over its period**.

An SLO can have a target between 0 and 1 (0-100%).

<hr/>

### Error budget

Unit : `ratio/percentage`

**The allowed amount of events that deviate from the good events over the period the SLI is defined on**.

A remaining error budget of 100% means that the service has no encountered any bad events or failures.

### Burn rate (ratio)

Unit : `ratio/percentage`

**The immediate rate at which the error budget is being consumed by the system.**

A burn rate between 0 and 1 (0-100%) corresponds to an SLI operating within its budget and a burn rate > 1 (> 100%) means the error budget
will be breached if the system continues consuming the budget.

<hr/>

### Expected budget consumption

Unit : `ratio/percentage`

**The estimated expected consumption of the budget over the SLI's period, Based on the observed error budget & burn rate**

For example, an expected error budget of 450%, means that based on current data, we expect to consume 4.5x the allowed error budget.

<hr/>

## Further Reading
