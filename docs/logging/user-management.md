---
title: User Management
---

Opensearch Users can be managed within Opensearch itself. When a logging cluster is bootstrapped Opni will create a role in Opensearch that provides read access to the logs from that cluster.  Alternatively Opni can manage the Opensearch users.

### User creation
To create a user in Opensearch create a MulticlusterUser resource:
```yaml
apiVersion: opni.io/v1beta2
kind: MulticlusterUser
metadata:
  name: test
  namespace: opni-cluster-system
spec:
  opensearchClusterRef: # This is a reference to the Opensearch cluster object
    name: opni
    namespace: opni-cluster-system
  password: testpassword
```

This will create a user with the `kibanauser` backend role in the Opensearch cluster

### Granting Access to a cluster's logs
To allow the user to access the logs for a cluster you will need to create a LoggingClusterBinding object:
```yaml
apiVersion: opni.io/v1beta2
kind: LoggingClusterBinding
metadata:
  name: demobinding
  namespace: opni-cluster-system
spec:
  opensearchClusterRef:
    name: opni
    namespace: opni-cluster-system
  loggingCluster: # Either ID or logging cluster name needs to be specified.  ID is preferred
    id: 52473120-4e12-427b-9055-c4179f90f6b1 # The cluster ID is the UID of the kube-system namespace in the cluster
    loggingClusterName: # This is the name/namespace of the object referring to the downstream cluster
      name: name-of-object
      namespace: opni-cluster-system
  user:
    name: test
    namespace: opni-cluster-system
```

This will bind the User to the read role for the cluster in Opensearch