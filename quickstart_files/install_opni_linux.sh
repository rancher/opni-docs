#!/bin/sh
wget https://github.com/rancher/opni-docs/raw/main/quickstart_files/opnictl
chmod +x opnictl
./opnictl install --quickstart