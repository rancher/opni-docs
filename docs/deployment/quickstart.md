---
title: Quickstart
---

On a fresh VM run the quickstart script:
```bash
curl -sfL https://raw.githubusercontent.com/rancher/opni-docs/main/quickstart_files/install_opni.sh | sh -
```
This script will set up a RKE2 cluster and install Opni into it.  It will also generate a control-plane anomaly that Opni will detect


#### Kibana UI

To view the Kibana UI you will need to port forward it:
```bash
export PATH=$PATH:/var/lib/rancher/rke2/bin
kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml \
    -n opni-cluster \
    port-forward --address 0.0.0.0 svc/opni-es-kibana 5601:5601
```


Open the following address in a browser
```
[IPV4_ADDRESS]:5601
``` 
The username is admin and the password is stored in the opni-es-password secret in the opni-cluster namespace:
```bash
export PATH=$PATH:/var/lib/rancher/rke2/bin
kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml \
    -n opni-cluster \
    get secret opni-es-password --template={{.data.password}} | base64 -d
```
You must be in the Global Tenant mode if you are not already. Click on Dashboard, Opni Logs Dashboard.


#### Additional Anomaly Injection

Using the provided script, you can inject sample anomalies into your cluster. The script can create pods which are unschedulable, have nonexistent images, or exit with non-zero exit codes.
Note: If you are not using the quickstart script, you must set the KUBECONFIG environment variable like
```bash
export KUBECONFIG=[PATH_TO_KUBECONFIG_FILE]
export PATH=$PATH:[PATH_TO_KUBECTL_BINARY]
```
Then, you can inject anomalies into your cluster with this command:
```bash
sh <(curl -sfL https://raw.githubusercontent.com/rancher/opni-docs/main/quickstart_files/errors_injection.sh)
```