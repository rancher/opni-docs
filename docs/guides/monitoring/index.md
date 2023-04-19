# Opni Monitoring : User Guide

This guide walks through the usage of Opni-Monitoring

## Prerequisites

- Opni-monitoring is installed in the upstream.
- One or more downstream agents have the metrics capability installed.

## Components

There are several components to Opni-Monitoring;

### Upstream

<b>The upstream includes the following components</b> :

- Cortex : A multi-tenant solution using Prometheus/Alertmanager as backends
  - Cortex AlertManager :
  - Cortex Compactor :
  - Cortex Distributor :
  - Cortex Ingester :
  - Cortex Purger :
  - Cortex Querier :
  - Cortex Query Frontend :
  - Cortex Ruler :
  - Cortex Store Gateway :

:::note
In standalone mode, the cortex-all-in-one pod will contain each of these components.
:::

### Configuring Upstream Components

TODO

### Downstream

Agents with metrics capabilities include :

- Prometheus operator CRDs, if they don't already exist
- Prometheus operator deployments, if they don't already exist

If your downstream cluster also has the chart value :

```yaml
kube-promethues-stack:
  enabled: true
```

- Prometheus operator Node exporter, if it doesn't already exist
- Prometheus operator kube-state-metrics, if it doesn't already exist

### Configuring Downstream Components
