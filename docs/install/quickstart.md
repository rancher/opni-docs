---
title: Quick Start
---

This guide will help you quickly install Opni using Opnictl on an RKE2 cluster.

### Prerequisites

Setup a virtual machine with 2 CPUs and 16 GB memory and 32 GB disk space.

### Server Node Installation
--------------
```
sudo sh run_rke2_setup.sh
```
This will install the `rke2-server` service and the `rke2` binary onto your machine.

### Path Exporting
```

export KUBECONFIG=/etc/rancher/rke2/rke2.yaml PATH=$PATH:/var/lib/rancher/rke2/bin
```

### Install Opnictl with the quickstart flag
```
opnictl install --quickstart --kubeconfig /etc/rancher/rke2/rke2.yaml
```

### View Kibana dashboard
```
kubectl port-forward svc/opendistro-es-kibana-svc --address 0.0.0.0 -n opni-system 5601:443
```

### Inject anomalies
```
sh fault_injection.sh
```

