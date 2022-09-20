---
title: Getting started with SLOs
---

## Prerequisites

- Opni monitoring must be installed, see [here](https://rancher.github.io/opni-monitoring/).
- One or more agents with metrics capabilities connected to the upstream cluster, see [here](https://rancher.github.io/opni-monitoring/).

No knowledge of promql required!

### The SLO dashboard

Admin operators can navigate to the Opni dashboard to create their first SLO.

![](../img/SLO_tab.png){ loading=lazy }

## Creating our First SLO

For this tutorial, we will create an SLO that measures the http availability of the kubernetes API server.

### Required setup:

To follow along, you will require :

- An opni agent connected to the upstream cluster with metrics & kube-metrics enabled.

### Constructing an SLO

![](../img/SLO_process.png){ loading=lazy }

1 - Select a name for your new [SLO](./slo.md#service-level-objective-slo)

2 - Select the cluster to see what services are available

3 - Select from the list of services discovered

4 - Select a metric that represents the positive count events of your system that you want to monitor

- **Warning** : you must select at least one filter for your positive count, otherwise your [SLI](./slo#service-level-indicator-sli) will be trivial (same events compared to same events)

5 - Define the good events that constitute the good count

6 - Select a metric that represents the total count of event in your system to monitor

- **Warning** : the total count metric should always match your good count metric, unless you are confident in what you are doing (the [SLI](./slo.md#service-level-indicator-sli) is no longer guaranteed to be within 0 - 1 as requried)
- Selecting a different total metric should be done when analyzing quantiles, for example `metric_name_bucket_total / metric_name_count_total`

7 - Define what events should be applied to all counts, if any. The default is to consider all events as part of the total events.

8 - The target for the [SLO](./slo.md#service-level-objective-slo) to achive in the period.

9 - The period upon which the target should apply

10 - How closely the SLO should track changes in the [burn rate](./slo#burn-rate-ratio). A lower budgeting interval means deviations in burn rate will be alerted on more frequently.

- See [Multi-Window Multi-Burn alerting](https://sre.google/workbook/alerting-on-slos/) for more details.
- The budgeting interval corresponds to the smallest window in multi-window multi burn alerting, the other windows are automatically derived based on this window.
<!--

### Example - Apiserver http-availability

### Example - Restricting an SLO to a single instance

### Example - Constructing quantiles

## Example - api server http-availability

TODO

## Example - restricting an SLO to a single instance

TODO

## Example - SLOs with quantiles

TODO

-->
