#!/bin/sh
sudo su
wget https://github.com/rancher/opni-docs/raw/demo/quickstart_files/opnictl
chmod +x opnictl
wget https://raw.githubusercontent.com/rancher/opni-docs/demo/quickstart_files/quickstart_demo.sh
chmod +x quickstart_demo.sh
mv opnictl /usr/local/bin
./quickstart_demo.sh
