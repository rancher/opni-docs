---
title: Quick Start
---

This guide will help you quickly install Opni using Opnictl on an RKE2 cluster.

### Prerequisites

Setup a virtual machine with 2 CPUs and 16 GB memory.

### Server Node Installation
--------------
```
sh run_rke2_setup.sh
```
This will install the `rke2-server` service and the `rke2` binary onto your machine.

### Install Opnictl with the quickstart flag
```
opnictl install --quickstart 
```

### Inject anomalies and view Kibana dashboard
```
sh fault_injection.sh
```

