#!/bin/bash

if [ "$#" -eq 0 ]; then
  echo 'Usage: ./drain.sh node [node2 ...]'
  exit 1
fi

trap 'kubectl delete -A pdb --selector "opni-test=true"; kubectl uncordon $@; exit' INT

for ns in `kubectl get ns -o go-template='{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}'`; do 
  kubectl create -n $ns -f ./pdb.yaml; 
done

kubectl drain $@ --ignore-daemonsets --delete-emptydir-data --force
kubectl delete -A pdb --selector "opni-test=true"
kubectl uncordon $@