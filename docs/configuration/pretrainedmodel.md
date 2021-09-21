---
title: PretrainedModel
---
The Opni system has the ability to make use of pretrained nulog models.  Currently we provide a pretrained model for the Kubernetes control plane.  The configuration for pretrained models is controlled by the PretrainedModel resource.  This resource is then referenced by the OpniCluster resource to deploy the model

*example.yaml*
```yaml
apiVersion: opni.io/v1beta1
kind: PretrainedModel
metadata:
  name: control-plane
  namespace: opni
spec:
  source:
    http:
      url: "https://opni-public.s3.us-east-2.amazonaws.com/pretrain-models/control-plane-model-v0.1.2.zip"
  hyperparameters:
    modelThreshold: "0.6"
    minLogTokens: 4
    isControlPlane: "true"
```

### Custom Resource Specs

#### PretrainedModelSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| source | yes | [ModelSource](#modelsource) | A reference to the location of the pretrained model files |
| hyperparameters | yes | map | An optional map of hyperparameters to pass to the model.  Values must be integers or strings.  Keys must be strings |

#### ModelSource

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| http | No | [HTTPSource](#httpsource) | A reference to a http location service the model tarball.  If this is not provided a container source must be. |
| container | No | [ContainerSource](#containersource) | A reference to a CRI image containing a pretrained model at `/model/model.tar.gz`.  If this is not provided a http source must be |

#### HTTPSource

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| url | Yes | *string* | The URL to download the pretrained model from |

#### ContainerSource

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------| 
| image | Yes | *string* | The CRI image to use |
| imagePullSecrets | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) *array* | List of secrets in the same namespace to use for pulling the image |