---
title: Opni Log Anomaly Setup
---

Following this guide will allow you to setup Opni Log Anomaly Detection on your cluster.

### Setup Opni Logging

To setup Opni Log Anomaly, first follow the [instructions here](../logging/logging.md) to setup a central Opni cluster and at least one downstream cluster boostrapped to ship logs over to the central Opni cluster.

###
To set up log anomaly detection, apply this yaml file.

```
apiVersion: opni.io/v1beta2
kind: OpniCluster
metadata:
  name: opni-log-anomaly
  namespace: opni-cluster-system
spec:
  version: v0.3.1
  deployLogCollector: false
  services:
    gpuController:
      enabled: false
    inference:
      enabled: true
      pretrainedModels:
      - name: control-plane
    metrics:
      enabled: false
  elastic:
    externalOpensearch:
      name: opni
      namespace: opni-cluster-system
  s3:
    internal: {}
  nats:
    authMethod: nkey

```