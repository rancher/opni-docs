---
title: Setup Grafana Dashboard for Metric Service 
---

The Opni system supports an experimental version of metric anomaly detection service. To start get insights from it, its Grafana dashboard needs to be setup as follow:
#### Prerequisites:
The Opni Metric Service requires Prometheus and Grafana to run. Rancher users can simply [enable Rancher monitoring](https://rancher.com/docs/rancher/v2.5/en/monitoring-alerting/guides/enable-monitoring/) to install Prometheus and Grafana.

#### Setup Dashboard

1. Navigate to Grafana and log in. For a Rancher Monitoring user, the default username/password is `admin/prom-operator`. Otherwise, it is likely to be `admin/admin`.
2. [Add Elasticsearch as a Data Source](https://grafana.com/docs/grafana/latest/datasources/add-a-data-source/#add-a-data-source), and fill in these fields with following values:
```
URL: https://opni-es-client.opni.svc:9200
Basic Auth: enable
Skip TLS Verify: enable
Basic Auth Details:
    User: admin
    Password: <opni-es-password>
Index name: mymetrics
Time field name: timestamp
Version: 7.0+
```
Then click `Save & Test`. The expected response should be `Index OK. Time field name OK.`
3. [Import dashboard](https://grafana.com/docs/grafana/latest/dashboards/export-import/#import-dashboard) and upload the json file `grafana-dashboard.json` in this repo.

A dashboard named `MetricAnomaly` should now be available.