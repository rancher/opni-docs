#!/bin/sh
wget https://github.com/rancher/opni-docs/raw/demo/quickstart_files/opnictl
chmod +x opnictl
wget https://raw.githubusercontent.com/rancher/opni-docs/demo/quickstart_files/quickstart_demo.sh
chmod +x quickstart_demo.sh
./quickstart_demo.sh
