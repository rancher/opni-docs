---
title: Opni SLO Core Concepts
---

<hr/>

## Service Level Indicator (SLI)

**Unit** : `ratio/percentage`

**A unit of measure to reflect a service's health, performance or reliability.**

For opni, an SLI is constructed on a specific service by taking the :

```
rate(good events)/rate(total events)
```

on the given service over the period of time it is defined on, for example 30 days.

An SLI of 1 (100%) indicates that the system is perfectly reliable, performant or reliable, while an SLI
of 0 indicates that the system is completely unreliable, inoperable or unereliable.

<hr/>

## Service Level Objective (SLO)

Unit : `ratio/percentage`

**The target ratio/percentage, or threshold an SLI should have over its period**.

An SLO can have a target between 0 and 1 (0-100%).

<hr/>

## Error budget

Unit : `ratio/percentage`

**The allowed amount of events that deviate from the good events over the period the SLI is defined on**.

A remaining error budget of 100% means that the service has no encountered any bad events or failures.

## Burn rate (ratio)

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
