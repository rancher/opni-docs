---
title: Opni - AIOPs for Kubernetes
---
Opni is a collection of AIOPs tools - it currently features log anomaly detection for Kubernetes.

### What does Opni give me?
TODO: Add architecture markdown file
* Insights into logs from your cluster's workloads, control plane & etcd
* Opni insights dashboard to inspect logs
* Ability to send alerts (slack/email/etc) when anomaly threshold is breached

Every log message sent to Opni will be marked as either normal, suspicious, or anomalous.
If a lot of logs in a short period of time are marked as suspicious or anomalous it is probably worth investigating!
The anomaly threshold is a number that can tuned depending on your volume of logs and how frequently Opni is predicting anomalies.

### This website is under construction!
Check back soon for documentation on what Opni is and how you can use it. In the meantime check out our [Github repo](https://github.com/rancher/opni) and a demo of Opni below.

[![](https://opni-public.s3.us-east-2.amazonaws.com/opni_youtube_gh.png)](https://youtu.be/DQVBwMaO_o0)
