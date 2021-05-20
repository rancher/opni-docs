#!/bin/bash
curl -sfL https://get.rke2.io | sh -s - server --write-kubeconfig-mode 644
if ! command -v kubectl &> /dev/null; then
  sudo ln -s /var/lib/rancher/rke2/bin/kubectl /usr/bin/kubectl
fi
systemctl enable rke2-server.service
systemctl start rke2-server.service
