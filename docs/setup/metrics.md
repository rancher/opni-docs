---
title: Metrics Anomaly Detection (beta)
---

Metrics anomaly detection in Opni depends on having a Prometheus instance set up, and collecting metrics from the Kubernetes cluster.  The Opni metrics service exposes the predictions via a Prometheus metrics enddpoint so this also needs to be regularly scraped.

The simplest way to set up Prometheus is to use [prometheus-operator](https://github.com/prometheus-operator/prometheus-operator).  This can be installed with the [community helm chart](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack), or using the Rancher Monitoring application.

## Configuring Metrics.

The Opni metrics service can be configured to work with prometheus-operator.  To enable this provide a reference to the Prometheus resource you want to use.  Opni will then use that to obtain the Prometheus URL, and create a ServiceMonitor and PrometheusRule (for alerts).

If the Prometheus object doesn't include an externalURL field, or you are manually managing Prometheus, you will need to provide the Prometheus URL.  If don't provide the Prometheus reference you will need to manually set up the Prometheus scrape config.