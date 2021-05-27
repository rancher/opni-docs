---
title: Production Installation
---

This guide will help you quickly install Opni using Opnictl on any Kubernetes cluster.

### Prerequisites

At least two GPU nodes (K80 GPU or higher)
One node with at least 4 CPUs
At least three additional nodes each with at least 16 GB RAM and 40 GB of disk space.

## Installing
Use a 1-command install: `opnictl` - A small tool to install the opni stack on Kubernetes cluster
```
opnictl install --kubeconfig <kubeconfig path>
```

### Options
The tool can be customized to specify different passwords and versions for the stack components:
```
# opnictl install --help
NAME:
   opnictl install - install opni stack

USAGE:
   opnictl install [OPTIONS]

OPTIONS:
   --kubeconfig value               [$KUBECONFIG]
   --minio-access-key value         [$MINIO_ACCESS_KEY]
   --minio-secret-key value         [$MINIO_SECRET_KEY]
   --minio-version value           (default: "4.0.8") [$MINIO_VERSION]
   --nats-version value            (default: "2.2.1") [$NATS_VERSION]
   --nats-password value            [$NATS_PASSWORD]
   --nats-replicas value           (default: 3) [$NATS_REPLICAS]
   --nats-max-payload value        (default: 10485760) [$NATS_MAX_PAYLOAD]
   --nvidia-version value          (default: "1.0.0-beta6") [$NVIDIA_VERSION]
   --elasticsearch-user value      (default: "admin") [$ES_USER]
   --elasticsearch-password value  (default: "admin") [$ES_PASSWORD]
   --traefik-version value         (default: "v9.18.3") [$TRAEFIK_VERSION]
```
If passwords are not specified for a specific component, a random generated password will be created for it.

For deleting the stack:
```
opnictl delete --kubeconfig <kubeconfig path> --all
```