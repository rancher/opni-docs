---
title: DataPrepper
---
The DataPrepper resource is created by opnictl when a downstream cluster is bootstrapped for multicluster logging.  It deploys an Opensearch Data Prepper instance configured to ship to Opni

*example.yaml*
```yaml
apiVersion: opni.io/v1beta2
kind: DataPrepper
metadata:
  name: opni-shipper
  namespace: opni-system
spec:
  username: username
  passwordFrom:
    key: password
    name: opni-opensearch-auth
  opensearch:
    endpoint: https://opensearch.url
    insecureDisableSSLVerify: false
  cluster: cluster-uid
  version: latest
```

### Custom Resource Specs

#### DataPrepperSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------|
| image | No | *string* | Explicit override for the image to use for the service |
| imagePullPolicy | No | *string* | Image pull policy. One of Always, Never, IfNotPresent. Defaults to `IfNotPresent` |
| imagePullSecrets | No | [LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) *array* | List of secrets in the same namespace to use for pulling the image |
| version | No | *string* | The Data Prepper image version to use.  Defaults to latest |
| defaultRepo | No | *string* | The default repo to use for Data Prepper images. Defaults to `docker.io/opensearchproject` |
| opensearchSpec | Yes | [OpensearchSpec](#opensearchspec) | Details for the Opensearch endpoint to ship logs to |
| username | Yes | *string* | User with index permissions to the Opensearch Endpoint |
| passwordFrom | Yes | [SecretKeySelector](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#secretkeyselector-v1-core) | Reference to the secret key containing the password for the Opensearch user.
| cluster | Yes | *string* | Cluster ID for shipping logs to Opni.  Canonically this is the UID of the kube-system namespace |

#### OpensearchSpec
| Field | Required | Type | Description |
|:------|:---------|:-----|:------------|
| endpoint | Yes | *string* | Opensearch endpoint to ship logs to |
| insecureDisableSSLVerify | No | *bool* | Disable strict TLS checking for the endpoint |