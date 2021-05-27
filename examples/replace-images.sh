#!/bin/sh

if [ "$#" -eq 0 ]; then
  echo 'Usage: ./replace-images.sh namespace1 [namespace2 ...]'
  exit 1
fi

for ns in "$@"; do 
  for pod in $(kubectl get -n $ns pods -o name); do 
    kubectl patch $pod --type 'json' -p '[{"op": "replace", "path": "/spec/containers/0/image", "value":"this-image-does-not-exist"}]'
  done
done
