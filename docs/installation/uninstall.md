---
title: Uninstall Opni
slug: /installation/uninstall
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Before uninstalling all capabilities should be removed from all clusters.  This can be done by clicking an installed capability in the clusters screen and choosing to remove the cabability.

<Tabs>
<TabItem value="rancher" label="Uninstall in Rancher UI" default>

**Due the presence of a Kubernetes finalizer the Logging backend should be disabled before Opni is uninstalled in the central cluster.  This can be done in the Opni Management UI by going to the Logging backends in the left hand navigation pane, and selecting Disable.**

In the Rancher UI make sure the namespace the App is installed into is selected in the top dropdown box.  Then navigate to Apps -> Installed Apps and select the installs you want to remove.  Press the Delete button to remove the apps.

If you have been using persistent storage in your cluster you should PersistentVolumeClaims in the cluster as these may not be automatically cleaned up.

</TabItem>
<TabItem value="helm" label="Uninstall using Helm">
TODO Joe
</TabItem>
<TabItem value="pulumi" label="Uninstall using Pulumi">
TODO Joe
</TabItem>
</Tabs>