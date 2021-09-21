---
title: Elasticsearch
---

The deployment of the Elasticsearch cluster is a subsection of the [OpniCluster](../opnicluster) resource.  It deploys an Elasticsearch cluster and Kibana for visualization.  The Opni controller will also create indices and configuration in the Elasticsearch cluster.

*example.yaml*
```yaml
apiVersion: opni.io/v1beta1
kind: OpniCluster
metadata:
  name: example
  namespace: opni
spec:
  elastic:
    version: 1.13.2
    workloads:
      master:
        resources:
          requests:
            memory: 1Gi
          limits:
            memory: 1Gi
      data:
        replicas: 2
        resources:
          requests:
            memory: 2Gi
          limits:
            memory: 2Gi
```

### Custom Resource Specs

#### ElasticSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------|
| version | No | *string* | Version of the Opendistro image to use.  Defaults to `latest` |
| workloads | No | [ElasticWorkloadSpec](#elasticworkloadspec) | Configure the Elasticsearch cluster components |
| defaultRepo | No | *string* | Image repo to use for Elasticsearch images.  Defaults to `docker.io/amazon` |
| image | No | [ImageSpec](#imagespec) | Explicit configuration for the Elasticsearch image |
| kibanaImage | No | [ImageSpec](#imagespec) | Explicit configuration for the Kibana image |
| persistence | No | [PersistenceSpec](#persistencespec) | Configure the persistence for Elasticsearch data |
| configSecret | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) | Reference to a secret containing `logging.yml` with the Elasticsearch logging config |

#### ElasticWorkloadSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------|
| master | [ElasticWorkloadOptions](#elasticworkloadoptions) | Configuration for the Elasticsearch master node StatefulSet |
| data | [ElasticWorkloadOptions](#elasticworkloadoptions) | Configuration for the Elasticsearch data node StatefulSet |
| client | [ElasticWorkloadOptions](#elasticworkloadoptions) | Configuration for the Elasticsearch client node Deployment |
| kibana | [ElasticWorkloadOptions](#elasticworkloadoptions) | Configuration for the Kibana Deployment |

#### ElasticWorkloadOptions

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------|
| replicas | No | *int* | Number of replicas to deploy.  Defaults to `1` |
| resources | No | [ResourceRequirements](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#resourcerequirements-v1-core) | Resources for the workload.  The resources are used to calculate the Java memory options.  If a memory limit exists this is used, if there is a memory request but no limit that is used, otherwise the Java optioms default to a heap size of 512MB |
| affinity | No | [Affinity](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#affinity-v1-core) | Affinity settings for the workload pods |
| nodeSelector | No | map | NodeSelector for the workload pods.  If this exists it will override the globalNodeSelector |
| tolerations | No | [Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#toleration-v1-core) *array* | Tolerations for the workload.  These will be combined with the globalTolerations (if any) |

#### ImageSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------|
| image | No | *string* | Explicit CRI image to use |
| imagePullPolicy | No | *string* | Image pull policy. One of Always, Never, IfNotPresent. Defaults to `IfNotPresent` |
| imagePullSecrets | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) *array* | List of secrets in the same namespace to use for pulling the image |

#### PersistenceSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------|
| enabled | No | *bool* | Whether persistent storage is enabled.  Defaults to `false` |
| storageClassName | No | *string* | If persistent storage is enabled, the name of the StorageClass to use.  If not set will use the default StorageClass |
| accessModes | No | *string array* | An array of the [access modes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes) the volume supports |
| request | No | *string* | The size of the volume to request.  Defaults to `10Gi` |