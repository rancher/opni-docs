---
title: Opni Agent Installation
slug: /installation/opni_agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

There are two ways to install Opni agent. We recommend installation through the Rancher UI.

<Tabs>
<TabItem value="rancher" label="Installation using Rancher UI" default>
Opni provides GitHub charts repository that can be used with the Rancher UI.  To add the charts go to Apps -> Repositories in the Rancher UI.  Name the repository and select the 'Git repository containing Helm chart or cluster template definitions' option.

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

 To install the Opni Agent fill in the three required fields:
 ![Opni Charts](/img/opniagentchart.png)

These can be obtained from the Opni Management UI.  Under cluster select Add Cluster and in the following screen expand the Manual Install Information section
 ![Opni Charts](/img/addcluster.png)

 These fields map directly to the fields in the chart install UI.

</TabItem>
<TabItem value="helm" label="Installation using Helm">
TODO Joe
</TabItem>
</Tabs>