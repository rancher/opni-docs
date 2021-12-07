---
title: OpniCluster
---

The OpniCluster resource controls the deployment of the Opni microservices, along with prerequisite infrastructure (such as NATS).  This is the main resource used for deploying Opni.

*example.yaml*
```yaml
apiVersion: opni.io/v1beta1
kind: OpniCluster
metadata:
  name: example
  namespace: opni
spec:
  version: v0.1.3
  deployLogCollector: true
  services:
    inference:
      enabled: true
      pretrainedModels:
        - name: control-plane
    gpuController:
      enabled: false
  elastic:
    version: 1.13.2
  nats:
    authMethod: nkey
  s3:
    internal: {}
```

### Custom Resource Specs

#### OpniClusterSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| version | No | *string* | The version of the Opni service images to deploy.  Defaults to `latest` |
| defaultRepo | No | *string* | Docker repo to use for the Opni service images.  Defaults to `docker.io/rancher` |
| services | No | [ServicesSpec](#servicesspec) | Configuration for the individual Opni services |
| elastic | No | [ElasticSpec](../elasticsearch/#elasticspec) | Configures the Opendistro Elasticsearch cluster deployed along with Opni |
| nats | No | [NatsSpec](../nats/#natsspec) | Configures the NATS cluster deployed along with Opni |
| s3 | Yes | [S3Spec](../s3/#s3spec) | Configures the S3 storage used for persisting the AI models |
| deployLogCollector | No | *bool* | Whether the Opni ClusterFlow and ClusterOutput should be deployed.  Defaults to true.  See [Log Shipping](../../setup/log-shipping) for more details |
| globalNodeSelector | No | map | A node selector that will get applied to all Opni components and deployed infrastructure |
| globalTolerations | No | [Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#toleration-v1-core) *array* | Tolerations that will get applied to all Opni components and infrastructure |
| nulogHyperParameters | No | map | Overrides for the default nulog hyperparameters |
!!! warning
    The default hyperparameters should not be overridden unless there is a specific reason to

#### ServicesSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| drain | No | [DrainServiceSpec](#drainservicespec) | Configuration for the Opni Drain service |
| inference | No | [InferenceServiceSpec](#inferenceservicespec) | Configuration for the Opni Nulog Inference services |
| preprocessing | No | [PreprocessingServiceSpec](#preprocessingservicespec) | Configuration for the Opni Preprocessing service |
| payloadReceiver | No | [PayloadReceiverServiceSpec](#payloadreceiverservicespec) | Configuration for the Opni HTTP Payload Receiver service |
| gpuController | No | [GPUControllerServiceSpec](#gpucontrollerservicespec) | Configuration for the optional GPU service |
| metrics | No | [MetricsServiceSpec](#metricsservicespec) | Configuration for the metrics anomaly detection service |
| insights | No | [InsightsServiceSpec](#insightsservicespec) | Configuration for the insights api service |
| ui | No | [UIServiceSpec](#uiservicespec) | Configuration for the custom Opni UI service |

#### DrainServiceSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| image | No | *string* | Explicit override for the image to use for the service |
| imagePullPolicy | No | *string* | Image pull policy. One of Always, Never, IfNotPresent. Defaults to `IfNotPresent` |
| imagePullSecrets | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) *array* | List of secrets in the same namespace to use for pulling the image |
| enabled | No | *bool* | Enable the service.  Defaults to true |
| nodeSelector | No | map | A node selector that will be applied to the Drain service.  This overrides the globalNodeSelector field |
| tolerations | No | [Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#toleration-v1-core) *array* | Tolerations for the service.  These will be added to the tolerations in globalTolerations (if any) |

#### InferenceServiceSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| image | No | *string* | Explicit override for the image to use for the service |
| imagePullPolicy | No | *string* | Image pull policy. One of Always, Never, IfNotPresent. Defaults to `IfNotPresent` |
| imagePullSecrets | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) *array* | List of secrets in the same namespace to use for pulling the image |
| enabled | No | *bool* | Enable the service.  Defaults to true |
| nodeSelector | No | map | A node selector that will be applied to the Drain service.  This overrides the globalNodeSelector field |
| tolerations | No | [Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#toleration-v1-core) *array* | Tolerations for the service.  These will be added to the tolerations in globalTolerations (if any) |
| pretrainedModels | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) *array* | A list of pretrained models to deploy.  Object references should point to a [PretrainedModel resource](../pretrainedmodel) |

#### PreprocessingServiceSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| image | No | *string* | Explicit override for the image to use for the service |
| imagePullPolicy | No | *string* | Image pull policy. One of Always, Never, IfNotPresent. Defaults to `IfNotPresent` |
| imagePullSecrets | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) *array* | List of secrets in the same namespace to use for pulling the image |
| enabled | No | *bool* | Enable the service.  Defaults to true |
| nodeSelector | No | map | A node selector that will be applied to the Drain service.  This overrides the globalNodeSelector field |
| tolerations | No | [Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#toleration-v1-core) *array* | Tolerations for the service.  These will be added to the tolerations in globalTolerations (if any) |

#### PayloadReceiverServiceSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| image | No | *string* | Explicit override for the image to use for the service |
| imagePullPolicy | No | *string* | Image pull policy. One of Always, Never, IfNotPresent. Defaults to `IfNotPresent` |
| imagePullSecrets | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) *array* | List of secrets in the same namespace to use for pulling the image |
| enabled | No | *bool* | Enable the service.  Defaults to true |
| nodeSelector | No | map | A node selector that will be applied to the Drain service.  This overrides the globalNodeSelector field |
| tolerations | No | [Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#toleration-v1-core) *array* | Tolerations for the service.  These will be added to the tolerations in globalTolerations (if any) |

#### GPUControllerServiceSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| image | No | *string* | Explicit override for the image to use for the service |
| imagePullPolicy | No | *string* | Image pull policy. One of Always, Never, IfNotPresent. Defaults to `IfNotPresent` |
| imagePullSecrets | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) *array* | List of secrets in the same namespace to use for pulling the image |
| enabled | No | *bool* | Enable the service.  Defaults to true |
| nodeSelector | No | map | A node selector that will be applied to the Drain service.  This overrides the globalNodeSelector field |
| tolerations | No | [Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#toleration-v1-core) *array* | Tolerations for the service.  These will be added to the tolerations in globalTolerations (if any) |

#### MetricsServiceSpec

!!! note
    The metrics anomaly service is currently experimental

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| image | No | *string* | Explicit override for the image to use for the service |
| imagePullPolicy | No | *string* | Image pull policy. One of Always, Never, IfNotPresent. Defaults to `IfNotPresent` |
| imagePullSecrets | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) *array* | List of secrets in the same namespace to use for pulling the image |
| enabled | No | *bool* | Enable the service.  Defaults to true |
| nodeSelector | No | map | A node selector that will be applied to the Drain service.  This overrides the globalNodeSelector field |
| tolerations | No | [Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#toleration-v1-core) *array* | Tolerations for the service.  These will be added to the tolerations in globalTolerations (if any) |
| prometheus | No | [PrometheusReference](#prometheusreference) | Reference to a prometheus-operator Prometheus resource.  If this is provided ServiceMonitor and PrometheusRule resources will be created |
| prometheusEndpoint | No | *string* | Endpoint of Prometheus cluster for the cluster.  This is required if the prometheus reference is not provided, or the referenced Prometheus object doens't include an externalURL|

#### InsightsServiceSpec

!!! note
    The insights service is currently experimental.  It provides an API that the custom UI uses.

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| image | No | *string* | Explicit override for the image to use for the service |
| imagePullPolicy | No | *string* | Image pull policy. One of Always, Never, IfNotPresent. Defaults to `IfNotPresent` |
| imagePullSecrets | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) *array* | List of secrets in the same namespace to use for pulling the image |
| enabled | No | *bool* | Enable the service.  Defaults to true |
| nodeSelector | No | map | A node selector that will be applied to the Drain service.  This overrides the globalNodeSelector field |
| tolerations | No | [Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#toleration-v1-core) *array* | Tolerations for the service.  These will be added to the tolerations in globalTolerations (if any) |

#### UIServiceSpec

!!! note
    The UI is currently experimental.  It is not currently exposed outside the cluster, however changes to the Kubernetes Service will not be reconciled, so it can be updated to be a LoadBalancer or NodePort.

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| image | No | *string* | Explicit override for the image to use for the service |
| imagePullPolicy | No | *string* | Image pull policy. One of Always, Never, IfNotPresent. Defaults to `IfNotPresent` |
| imagePullSecrets | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) *array* | List of secrets in the same namespace to use for pulling the image |
| enabled | No | *bool* | Enable the service.  Defaults to true |
| nodeSelector | No | map | A node selector that will be applied to the Drain service.  This overrides the globalNodeSelector field |
| tolerations | No | [Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#toleration-v1-core) *array* | Tolerations for the service.  These will be added to the tolerations in globalTolerations (if any) |

#### PrometheusReference

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| name | Yes | *string* | The name of the Prometheus resource |
| namespace | Yes | *string* | The namespace the Prometheus resource is in |