#!/bin/sh
export KUBECONFIG="${KUBECONFIG:-/etc/rancher/rke2/rke2.yaml}" PATH="${PATH:+${PATH}:}/var/lib/rancher/rke2/bin/"

inject_nonexistent_image_pods_anomaly() {
    cat <<EOF | kubectl apply -f -
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: test-job-nonexistent-image
      labels:
        is-opni-demo: "true"
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
    cat <<EOF | kubectl apply -f -
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: test-job-nonzero-exit-code
      labels:
        is-opni-demo: "true"
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

undo_anomalies() {
  kubectl delete jobs -l is-opni-demo=true
}

get_user_anomaly_input() {
  while true
  do
  	echo "Possible anomalies to inject"
  	echo "1: Create 10 pods with nonexistent images."
  	echo "2: Create 10 pods that will exit with non-zero exit codes."
    echo "u: Undo anomalies injected into cluster."
    echo "q: Exit this script."
  	read -p "Select the action you would like to perform: " anomaly
  	if [ "$anomaly" = '1' ]; then
  		echo "Injecting the fault to create 10 pods with nonexistent images."
  		inject_nonexistent_image_pods_anomaly
  	elif [ "$anomaly" = '2' ]; then
  		echo "Injecting the fault to create 10 pods that will exit with non-zero exit codes."
  		inject_nonzero_exit_code_pods_anomaly
    elif [ "$anomaly" = 'u' ]; then
      echo "Undoing anomalies injected into systems."
      undo_anomalies
    elif [ "$anomaly" = 'q' ]; then
      break
    fi
  done
}
get_user_anomaly_input
exit 0
