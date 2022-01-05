#!/bin/sh

set -e

# info logs the given argument at info log level.
info() {
    echo "[INFO] " "$@"
}

# warn logs the given argument at warn log level.
warn() {
    echo "[WARN] " "$@" >&2
}

# fatal logs the given argument at fatal log level.
fatal() {
    echo "[ERROR] " "$@" >&2
    if [ -n "${SUFFIX}" ]; then
        echo "[ALT] Please visit 'https://github.com/rancher/rke2/releases' directly and download the latest rke2.${SUFFIX}.tar.gz" >&2
    fi
    exit 1
}

verify_downloader() {
    cmd="$(command -v "${1}")"
    if [ -z "${cmd}" ]; then
        return 1
    fi
    if [ ! -x "${cmd}" ]; then
        return 1
    fi

    # Set verified executable as our downloader program and return success
    DOWNLOADER=${cmd}
    return 0
}

download() {
    if [ $# -ne 2 ]; then
        fatal "download needs exactly 2 arguments"
    fi

    case ${DOWNLOADER} in
    *curl)
        curl -o "$1" -fsSL "$2"
        ;;
    *wget)
        wget -qO "$1" "$2"
        ;;
    *)
        fatal "downloader executable not supported: '${DOWNLOADER}'"
        ;;
    esac

    # Abort if download command failed
    if [ $? -ne 0 ]; then
        fatal "download failed"
    fi
}

do_install_rke2() {
    curl -sfL https://get.rke2.io | sh -
    systemctl enable rke2-server.service > /dev/null 2>&1
    systemctl start rke2-server.service
    until /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml get nodes > /dev/null 2>&1
    do
        info "Waiting for RKE2 cluster to be active"
        sleep 10
    done
}

inject_anomaly() {
    info "Injecting anomaly"
    cat <<EOF | /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml apply -f -
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


do_install_opni() {
    if [ -z "${INSTALL_RKE2_ARTIFACT_PATH}" ]; then
        verify_downloader curl || verify_downloader wget || fatal "can not find curl or wget for downloading files"
    fi
    do_install_rke2
    sleep 5
    info "Installing Cert Manager"
    /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml apply -f https://github.com/jetstack/cert-manager/releases/download/v1.5.3/cert-manager.yaml > /dev/null 2>&1
    /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml wait --timeout=300s --for=condition=available deploy/cert-manager -n cert-manager 
    /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml wait --timeout=300s --for=condition=available deploy/cert-manager-cainjector -n cert-manager
    info "Installing Opni"
    /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml apply -f https://raw.githubusercontent.com/rancher/opni/main/deploy/manifests/00_crds.yaml > /dev/null 2>&1
    /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml apply -f https://raw.githubusercontent.com/rancher/opni/main/deploy/manifests/01_rbac.yaml > /dev/null 2>&1
    /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml apply -f https://raw.githubusercontent.com/rancher/opni/main/deploy/manifests/10_operator.yaml > /dev/null 2>&1
    /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml wait --timeout=300s --for=condition=available deploy/opni-controller-manager -n opni-system
    /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml apply -f https://raw.githubusercontent.com/rancher/opni/main/deploy/examples/logAdapters/logAdapter_rke2.yaml > /dev/null 2>&1
    /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml apply -f https://raw.githubusercontent.com/rancher/opni/main/deploy/manifests/20_cluster.yaml > /dev/null 2>&1
    sleep 20
    /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml wait --timeout=600s --for=condition=available deploy/opni-es-kibana -n opni
}

do_install_opni
info "Waiting for logging to stabilize"
sleep 20
inject_anomaly

info "To view the Kibana UI set up a port-forward: kubectl port-forward -n opni svc/opni-es-kibana 5601:5601"

exit 0
