---
title: Log Shipping
---
The Opni payload receiver service provides a http endpoint for receiving JSON formatted logs from the FluentD http output.  The recommended mechanism for configuring FluentD is to use the [Banzaicloud logging operator](https://banzaicloud.com/docs/one-eye/logging-operator/)

###Log Adapter
The Opni operator understands the banzaicloud logging custom resources, but under the `logging.opni.io` API group instead of `logging.banzaicloud.io`.  This allows the Opni operator to manage log shipping configuration, without conflicting with a separate Banzaicloud operator install.

For convenience Opni has a LogAdapter custom resource for configuring log shipping on various Kubernetes distributions.  This creates a Logging resource, and also configures a fluentbit DaemonSet to pick up Kubernetes system logs from either file based logging or journald.  More details on the LogAdapter can be found on the [LogAdapter configuration page](../../configuration/logadapter/).

If using a LogAdapter the `spec.deployLogCollector` field can be set to `true` on the OpniCluster resource.  This will create a ClusterOutput and ClusterFlow to ship the logs to the install Opni payload receiver service.

###Separate Logging Operator
If using a Rancher distribution of Kubernetes you can use the [Rancher Logging integration](https://rancher.com/docs/rancher/v2.6/en/logging/) to ship logs.  Once the Rancher Logging App is installed you will need to add a ClusterFlow and ClusterOutput to ship the logs to Opni:

*clusteroutput.yaml*
```yaml
apiVersion: logging.banzaicloud.io/v1beta1
kind: ClusterOutput
metadata:
  name: <clusteroutput name>
spec:
  http:
    buffer:
      chunk_limit_size: 1mb
      flush_interval: 2s
      tags: '[]'
      timekey: ""
    content_type: application/json
    endpoint: <opni payload-receiver endpoint>
    json_array: true
```

*clusterflow.yaml*
```yaml
apiVersion: logging.banzaicloud.io/v1beta1
kind: ClusterFlow
metadata:
  name: <clusterflow name>
spec:
  filters:
  - dedot:
      de_dot_nested: true
      de_dot_separator: '-'
  - grep:
      exclude:
      - key: log
        pattern: ^\n$
  - detectExceptions:
      languages:
      - java
      - python
      - go
      - ruby
      - js
      - csharp
      - php
      multiline_flush_interval: "0.1"
  globalOutputRefs:
  - <clusteroutput name>
  match:
  - exclude:
      namespaces:
      - <opni namespace> #We exclude the opni cluster namespace
  - select: {}
```