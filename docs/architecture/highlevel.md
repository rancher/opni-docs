---
title: High-level Architecture
---

At a high level Opni is made up of a number of microservices communicating via NATS.  Training data is persisted in Opendistro Elasticsearch, and models are stored in S3.

![Architecture Diagram](../img/opni-high-level-arch.png){ loading=lazy }

###Log ingest
Opni includes a http receiver for logs shipped from fluentd.

###GPU service
To enable learning of workload logs Opni requires an nVidia GPU.  The Opni system includes an optional GPU service that uses the GPU for training.