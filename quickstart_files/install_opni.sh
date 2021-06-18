#!/bin/sh
wget https://github.com/rancher/opni-docs/raw/main/quickstart_files/opnictl
chmod +x opnictl
wget https://github.com/rancher/opni-docs/raw/main/quickstart_files/quickstart_demo.sh 
chmod +x quickstart_demo.sh
./quickstart_demo.sh
