---
title: Opni Installation
slug: /installation/opni
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

There are a few different ways to install Opni. We recommend installation through the Rancher UI.

Installation of Opni will give you the following:
* **Opni Gateway** - the component that agents will communicate with to establish a connection between upstream opni and downstream opni agents
*  **Opni Admin UI** - the dashboard that is used to create and manage backends, SLOs and downstream Opni agents

<Tabs>
<TabItem value="rancher" label="Installation using Rancher UI" default>
Opni provides GitHub charts repository that can be used with the Rancher UI.
To add the charts, navigate to Apps -> Repositories in the Rancher UI.  Name the repository and select the 'Git repository containing Helm chart or cluster template definitions' option.

Enter the following git url:
```
https://github.com/rancher/opni.git
```

And the following branch:
```
charts-repo
```

Once the repo has updated you should be able to find Opni in the list of charts.  
![Opni Charts](/img/opnicharts.png)

To install Opni follow the prompts in the UI.  The most important setting is the Gateway Hostname.  This is the hostname that agents will use to connect to the Opni Gateway.  By default this is created as a Load Balancer service, but you may also place an ingress in front of it if your cluster does not support Load Balancer services.
![Opni Gateway settings](/img/opnigateway.png)

Under the Auth Settings tab you may select the default noauth provider, or otherwise select openid and provide details for an external auth provider.
![Opni Gateway settings](/img/opniauth.png)

Once satisfied with the options, click ***Install***

</TabItem>
<TabItem value="helm" label="Installation using Helm">
TODO Joe
</TabItem>
<TabItem value="pulumi" label="Installation using Pulumi">
TODO Joe
</TabItem>
</Tabs>
