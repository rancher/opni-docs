#!/bin/bash
curl -sfL https://get.rke2.io | sh -s - server --write-kubeconfig-mode 644
systemctl enable rke2-server.service
systemctl start rke2-server.service