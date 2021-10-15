---
title: Setup Grafana Dashboard for Metric Service 
---
The Opni system supports an experimental version of metric anomaly detection service. To start get insights from it, its Grafana dashboard needs to be setup as follow:

1. Navigate to Grafana and login. For Rancher monitoring user, the username/password is `admin/prom-operator`, otherwise it's likely to be `admin/admin`
2. [Add Elasticsearch as a datasource](https://grafana.com/docs/grafana/latest/datasources/add-a-data-source/#add-a-data-source), and fillin these fields with following values:
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
Then click `Save & Test`, the expected response is `Index OK. Time field name OK.`
3. [Import dashboard](https://grafana.com/docs/grafana/latest/dashboards/export-import/#import-dashboard) and upload the json file `grafana-dashboard.json` in this repo.

A dashboard named `MetricAnomaly` should be ready to go.