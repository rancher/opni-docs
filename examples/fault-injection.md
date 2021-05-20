## Injecting errors to trigger anomalous control plane logs

The following sample scenarios can be used to see how Opni can catch control plane errors.
For each scenario, there are associated shell scripts available to run.

### Pod Disruption Budgets (`drain.sh`)

This PDB blocks all pods from being evicted. We can then drain worker nodes to produce errors without actually removing the pods.
Because this PDB will match every pod, it will also produce errors when it matches pods that are not controlled by another resource.

```yaml
# pdb.yaml
apiVersion: policy/v1beta1
kind: PodDisruptionBudget
metadata:
  name: test-pdb
spec:
  minAvailable: 100%
  selector:
    matchExpressions:
    - key: nonexistent
      operator: DoesNotExist
```
```bash
for ns in `kubectl get ns -o go-template='{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}'`; do kubectl create -n $ns -f pdb.yaml; done
```

### Image Pull errors (`replace-images.sh`)

Replace all pod images with a nonexistent image to trigger a large volume of image pull errors. Delete all affected pods when done to clear errors.

```bash
for pod in `kubectl get pods -o name`; do kubectl patch $pod --type 'json' -p '[{"op": "replace", "path": "/spec/containers/0/image", "value":"this-image-does-not-exist"}]'; done
```

### Pod Scheduling errors (`job.sh`)

This job will spawn 50 pods that will fail to schedule.

```yaml
# job.yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: test-job
spec:
  completions: 50
  parallelism: 50
  template:
    spec:
      containers:
        - name: test
          image: busybox
          command:
          - /bin/ls
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: nonexistent
                operator: Exists
      restartPolicy: Never
```