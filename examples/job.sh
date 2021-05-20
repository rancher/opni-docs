#!/bin/bash

cat <<EOF | kubectl apply -f -
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
EOF

echo "To delete the job, run: kubectl delete job test-job"