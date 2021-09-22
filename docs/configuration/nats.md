---
title: NATS
---

Opni requires a NATS cluster to enable communication between services. The deployment of a NATS cluster is configured by a subsection of the [OpniCluster](../opnicluster) resource.

*example.yaml*
```yaml
apiVersion: opni.io/v1beta1
kind: OpniCluster
metadata:
  name: example
  namespace: opni
spec:
  nats:
    authMethod: nkey
```

### Custom Resource Specs

#### NatsSpec

| Field | Required | Type | Description |
|:------|:---------|:-----|:------------|
| authMethod | No | *string* | Must be either `username` or `nkey`.  Defaults to `nkey` |
| replicas | No | *int* | Number of NATS replicas to deploy (should be an odd number).  Defaults to `3` |
| username | No | *string* | Username to use with the `username` auth method.  If not set defaults to `nats-user` |
| passwordFrom | No | [SecretKeySelector](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#secretkeyselector-v1-core) | Secret key containing the password to use.  If not set then a random password will be generated and used |
| nodeSelector | No | map | NodeSelector for the cluster pods.  If this exists it will override the globalNodeSelector |
| tolerations | No | [Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#toleration-v1-core) *array* | Tolerations for the cluster pods.  These will be combined with the globalTolerations (if any) |