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

To uninstall Opni using Helm, run the following command:

```bash
helm -n opni uninstall opni
```

This will uninstall all Opni components from the main cluster. 

:::tip

This will not delete any persistent data stored by Cortex (e.g. in S3), or uninstall the Opni agents from downstream clusters.

:::

### Uninstall the Opni agents

On each downstream cluster, run the following command to uninstall its Opni agent:

```bash
helm -n opni-agent uninstall opni-agent
helm -n opni-agent uninstall opni-agent-crd # optional, delete crds
```

:::tip

Persistent volumes created by Opni workloads may still remain after uninstalling the Opni helm charts.

:::

</TabItem>
<TabItem value="pulumi" label="Uninstall using Pulumi">


### Destroying Pulumi-managed resources
:::danger

Destroying Opni infrastructure provisioned with Pulumi will delete the associated S3 bucket and all data stored in it.

:::

:::note

The instructions below can also be found in the Pulumi web console under the "Settings" tab for your stack.

:::

To delete all resources provisioned by Pulumi, run `pulumi destroy`. This is an irreversible operation.

```bash
pulumi destroy
```
or by using the fully-qualified stack name:
```bash
pulumi destroy -s org-name/project-name/stack-name
```

### Deleting the Pulumi stack

To delete the stack (and its associated configuration and history) from the Pulumi console, run `pulumi stack rm`:

```bash
pulumi stack rm org-name/project-name/stack-name
```

To delete the stack but keep all provisioned cloud resources, use the `--force` flag:

```bash
pulumi stack rm --force org-name/project-name/stack-name
```

### Recovering configuration 

If you lost the `Pulumi.yaml` and `Pulumi.stack-name.yaml` config files for your stack, you can recreate them as follows:

```bash
echo "name: stack-name" > Pulumi.yaml
echo "runtime: go" >> Pulumi.yaml

pulumi stack select org-name/project-name/stack-name
pulumi config refresh
```

</TabItem>
</Tabs>