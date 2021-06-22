#!/bin/bash

inject_unschedulable_pods_anomaly() {
    cat <<EOF | /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml apply -f -
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: test-job-unschedulable
    spec:
      completions: 10
      parallelism: 10
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
}

inject_nonexistent_image_pods_anomaly() {
    cat <<EOF | /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml apply -f -
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: test-job-nonexistent-image
    spec:
      completions: 10
      parallelism: 10
      template:
        spec:
          containers:
            - name: test
              image: this-image-does-not-exist
              command:
              - /test
              imagePullPolicy: Always
          restartPolicy: Never
EOF
}

inject_nonzero_exit_code_pods_anomaly() {
    cat <<EOF | /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml apply -f -
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: test-job-nonzero-exit-code
    spec:
      completions: 10
      parallelism: 10
      template:
        spec:
          containers:
            - name: test
              image: busybox
              command:
              - /bin/false
          restartPolicy: Never
EOF
}

get_user_anomaly_input() {
	echo " Possible Anomalies to inject"
	echo "1) Create 10 unschedulable pods."
	echo "2) Create 10 pods with nonexistent images."
	echo "3) Create 10 pods that will exit with non-zero exit codes"
	read -p "Type the number of the anomaly you would like to inject: " anomaly
	if [ $anomaly = '1' ]; then
		echo "Injecting the fault to create 10 unschedulable pods."
		inject_unschedulable_pods_anomaly
	elif [ $anomaly = '2' ]; then
		echo "Injecting the fault to create 10 pods with nonexistent images."
		inject_nonexistent_image_pods_anomaly
	elif [ $anomaly = '3' ]; then
		echo "Injecting the fault to create 10 pods that will exit with non-zero exit codes."
		inject_nonzero_exit_code_pods_anomaly
	fi
}
get_user_anomaly_input
exit 0