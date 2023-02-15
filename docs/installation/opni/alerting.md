# Install Alerting

The Alerting backend is composed of an [AlertManager](https://prometheus.io/docs/alerting/latest/alertmanager/) statefulset, fully managed by Opni.

## Using the Opni Dashboard

Follow these steps to enable Monitoring from the Opni dashboard:

1. Navigate to the Opni dashboard

To access the dashboard, you can port-forward:

```bash
kubectl -n opni port-forward svc/opni-admin-dashboard web:web
```

Then navigate to [http://localhost:12080](http://localhost:12080).

2. Select "Alerting" from the left sidebar then click enable to install

  <div className="image-border">
    <img
      src={require('/img/installation/alerting-not-installed.png').default} 
      alt="Alerting not installed"
    />
  </div>

:::caution known-issue
Alerting backend can sometimes erroneously show a "no changes to apply" error when installing, however this does not impact functionality
:::

3. Choose between deploying the opni-cluster as standalone or HA:

<div className="image-border">
  <img
    src={require('/img/installation/alerting-options.png').default} 
    alt="Alerting configuration"
  />
</div>
