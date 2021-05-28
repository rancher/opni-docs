---
title: Demo Mode
---

This guide will help you quickly install Opni using Opnictl on an RKE2 cluster while also displaying Opni's anomaly detection capabilities.

### Prerequisites

Setup a virtual machine with at least 2 CPUs, 16 GB memory and 32 GB disk space.

### Run as Root within Virtual Machine
```
sudo su
```

### Server Node Installation
--------------
```
sh run_rke2_setup.sh
```
This will install the `rke2-server` service and the `rke2` binary onto your machine.

### Path Exporting
```
export KUBECONFIG=/etc/rancher/rke2/rke2.yaml PATH=$PATH:/var/lib/rancher/rke2/bin
```

### Install Opnictl with the quickstart flag
```
./opnictl install --quickstart
```

### Port forward Kibana so you can view endpoint
```
kubectl port-forward svc/opendistro-es-kibana-svc --address 0.0.0.0 -n opni-system 5601:443
```

### Go to Kibana endpoint and view dashboard
```
Go to [Public IPV4 Address]:5601
Username and Password are both admin
```

### Inject anomalies
```
Anomalies can be injected by going to the /examples folder.
Currently there are bash scripts for pod disruption budgets (drain.sh), image pull errors (replace-images.sh) and pod scheduling errors (job.sh)
For more information on these anomalies, please refer to fault-injection.md within the examples folder.
```