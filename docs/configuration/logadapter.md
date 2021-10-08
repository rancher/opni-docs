---
title: LogAdapter
---
The LogAdapter custom resource simplifies the configuration of log shipping for a range of Kubernetes distributions.  It builds on the [Banzai Cloud logging operator](https://banzaicloud.com/docs/one-eye/logging-operator/) to do this.

It currently supports the following distributions

- rke
- rke2
- k3s
- aks
- eks
- gke

*example.yaml*
```yaml
apiVersion: opni.io/v1beta1
kind: LogAdapter
metadata:
  name: example-adapter
spec:
  provider: rke
  opniCluster:
    name: example-cluster
    namespace: opni
```

### Custom Resource Specs

#### LogAdapterSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| provider | Yes | *string* | One of the supported distributions |
| opniCluster | Yes | [OpniClusterNameSpec](#opniclusternamespec) | A reference to an installed OpniCluster |
| containerLogDir | No | *string* | Path to the container logs on the host.  Defaults to `/var/lib/docker/containers` |
| seLinuxEnabled | No | *bool* | Enable SELinux support.  Defaults to false |
| rootFluentConfig | No | [FluentConfigSpec](#fluentconfigspec) | Fluentd and Fluentbit config for the base conatiner log shipping.  If this is absent it it creates default Banzaicloud configs, with a liveness probe for fluentd, and uses the Rancher logging images |
| fluentConfig | No | [FluentConfigSpec](#fluentconfigspec) | Fluent config for additional Logging object for K3S and cloud providers.  Defaults as per rootFluentConfig, along with additional sane default file locations for the specific distribution |
| aks | No | AKSSpec | AKS config; should be empty |
| eks | No | EKSSpec | EKS config; should be empty |
| gke | No | GKESpec | GKE config; should be empty |
| rke | No | [RKESpec](#rkespec) | RKE specific config |
| k3s | No | [K3SSpec](#k3sspec) | K3s specific config |
| rke2 | No | [RKE2Spec](#rke2Spec) | RKE2 specific config |
*N.B. If a distribution spec is set it must match the provider field*

#### OpniClusterNameSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| name | Yes | *string* | Name of the opnicluster to link the LogAdapter to |
| namespace | No | *string* | Name of the namespace the opnicluster is in.  Defaults to `default` |

#### FluentConfigSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| fluentbit | No | [FluentbitSpec](https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/fluentbit_types/#fluentbitspec) | Uses Banzaicloud defaults with the image spec set to the Rancher logging images |
| fluentd | No | [FluentdSpec](https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/fluentd_types/#fluentdspec) | Uses Banzaicloud defaults with the image spec set to the Rancher logging images, and a liveness probe configured |

#### RKESpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| logLevel | No | *string* | Log level for the fluentbit aggregator.  Defaults to `info` |

#### K3SSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| containerEngine | No | *string* | Must be either `systemd` or `openrc`.  Defaults to `systemd` |
| logPath | No | *string* | For `systemd` this is the path to the journalctl log location.  Defaults to `/var/log/journal`.  For `openrc` this is the path to the service log file.  Defaults to `/var/log/k3s.log` | 

#### RKE2Spec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| logPath | No | *string* | This is the path to the journalctl log location.  Defaults to `/var/log/journal` |