---
title: Opni - AIOps for Kubernetes
---

Opni = AIOps for Kubernetes + logging + monitoring. 

It currently features log anomaly detection - simply ship your logs to Opni and its AI models will automatically learn and identify anomalous behavior in your control plane, etcd, and applications logs. Metrics and event anomaly detection to come soon!

[![](https://opni-public.s3.us-east-2.amazonaws.com/opni_youtube_gh.png)](https://youtu.be/DQVBwMaO_o0)

Get started by setting up Opnictl in your own environment! You may need to run as root if using a virtual machine.
```
curl -sfL https://raw.githubusercontent.com/rancher/opni-docs/demo/quickstart_files/install_opni.sh | sh -
#Installs RKE2 and then will setup Opni in the demo mode and inject anomaly into cluster.
```
Setup the kubeconfig and kubectl to access the RKE2 cluster:
```
export KUBECONFIG=/etc/rancher/rke2/rke2.yaml PATH=$PATH:/var/lib/rancher/rke2/bin
```
Port forward Kibana in order to access the User Interface
```
kubectl port-forward svc/opendistro-es-kibana-svc --address 0.0.0.0 -n opni-system 5601:443
```

Go to 
```
[IPV4_ADDRESS]:5601
``` 
Make sure to be in the Global Tenant mode if you are not already. Click on Dashboard, Opni Logs Dashboard and then observe the anomalies that are being marked by Opni.


