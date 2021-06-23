---
title: Opni - AIOps for Kubernetes
---

Opni = AIOps for Kubernetes + logging + monitoring. 

It currently features log anomaly detection - simply ship your logs to Opni and its AI models will automatically learn and identify anomalous behavior in your control plane, etcd, and applications logs. Metrics and event anomaly detection to come soon!

[![](https://opni-public.s3.us-east-2.amazonaws.com/opni_youtube_gh.png)](https://youtu.be/DQVBwMaO_o0)

Get started by setting up Opnictl in your own environment! You may need to run as root if using a virtual machine.
```
curl -sfL https://raw.githubusercontent.com/rancher/opni-docs/main/quickstart_files/install_opni.sh | sh -
```

Copy the NodePort address from the script output in order to access the User Interface


Open the following address in a browser
```
[IPV4_ADDRESS]:[NODE_PORT]
``` 
The default username and password is admin/admin
Make sure to be in the Global Tenant mode if you are not already. Click on Dashboard, Opni Logs Dashboard.

To view the anomaly detection press 'Enter' in the console window running the script to inject an anomaly.

You can also choose to inject different anomalies such as creating pods which are unschedulable, have nonexistent images and exiting with non-zero exit codes.
```
sh <(curl -sfL https://raw.githubusercontent.com/rancher/opni-docs/main/quickstart_files/errors_injection.sh)
```


