---
title: Opni Log Anomaly Setup
---

Following this guide will allow you to setup Opni Log Anomaly Detection on your cluster.

### Setup Opni Logging

To setup Opni Log Anomaly, first follow the [instructions here](../logging/logging.md) to setup a central Opni cluster and at least one downstream cluster boostrapped to ship logs over to the central Opni cluster.

### Setup Opni Log Anomaly
To set up log anomaly detection, apply this yaml file.

```
apiVersion: opni.io/v1beta2
kind: OpniCluster
metadata:
  name: opni-log-anomaly
  namespace: opni-cluster-system
spec:
  version: v0.4.0
  deployLogCollector: false
  services:
    gpuController:
      enabled: false
    inference:
      enabled: true
      imagePullPolicy: Always
      pretrainedModels:
      - name: control-plane
    metrics:
      enabled: false
  opensearch:
    externalOpensearch:
      name: opni
      namespace: opni-cluster-system
  s3:
    internal: {}
  nats:
    authMethod: nkey
---
apiVersion: opni.io/v1beta2
kind: PretrainedModel
metadata:
  name: control-plane
  namespace: opni-cluster-system
spec:
  source:
    http:
      url: "https://opni-public.s3.us-east-2.amazonaws.com/pretrain-models/control-plane-model-v0.4.0.zip"
  hyperparameters:
    modelThreshold: "0.6"
    minLogTokens: 1
    isControlPlane: "true"
```