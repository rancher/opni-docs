---
title: Quick Start Demo
---

This guide will help you quickly install Opni using Opnictl on an RKE1 cluster while also displaying Opni's anomaly detection capabilities.

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
./opnictl install --quickstart --kubeconfig /etc/rancher/rke2/rke2.yaml
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
sh fault_injection.sh
```

