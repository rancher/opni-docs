---
title: Demo Mode
---

This guide will help you quickly install Opni using Opnictl on an RKE1 cluster while also displaying Opni's anomaly detection capabilities.

### Requirements: Cloud
- Terraform >=0.13.0
- IAM Credentials for AWS
- Kubectl 

### EC2 Instance requirements
- Ubuntu 20.04
- 4 CPUs
- 16GB of RAM
- 32GB of disk space

### Clone this Github repository to create an RKE cluster
```
git clone https://github.com/dbason/opni-quickstart-tf
```
```
Copy or rename terraform.tfvars.example to terraform.tfvars and fill in aws_access_key, aws_secret_key and aws_region
```
```
terraform init
```
```
terraform apply
```

This will output a cluster_node_ip and the Kubeconfig file which is called kube_config_cluster.yaml. Make sure to note down the cluster_node_ip.

### Install Kubectl
```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```


### Path Exporting
```
export KUBECONFIG=kube_config_cluster.yml
```

### Connect to the RKE cluster
```
cp kube_config_cluster.yaml ~/.kube/config
```

### Install Opnictl with the quickstart flag
Linux
```
curl -sfL https://github.com/rancher/opni-docs/blob/main/quickstart_files/install_opni_linux.sh | sh -
```
macOs
```
curl -sfL https://github.com/rancher/opni-docs/blob/main/quickstart_files/install_opni_darwin.sh | sh -
```


### Port forward Kibana so you can view endpoint
```
kubectl port-forward svc/opendistro-es-kibana-svc --address 0.0.0.0 -n opni-system 5601:443
```

### Go to Kibana endpoint and view dashboard
```
Go to [cluster_node_ip]:5601
Username and Password are both admin
```

### Inject anomalies
```
Inject this anomaly which will create 50 jobs that fail to be scheduled.
curl -sfL https://github.com/rancher/opni-docs/blob/main/examples/job.sh | sh -
```