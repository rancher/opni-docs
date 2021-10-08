---
title: High-level Architecture
---

At a high level Opni is made up of a number of microservices communicating via NATS.  Logs are persisted in Opendistro Elasticsearch and AI assets are stored in S3.

![Architecture Diagram](../img/opni-high-level-arch.png){ loading=lazy }

### Log ingest
Opni ingests logs through a http receiver for logs shipped from fluentd.

### GPU service (optional)
Opni requires an NVIDIA GPU - we recommend at least a k80 - to learn and inference on your cluster's workload logs.

