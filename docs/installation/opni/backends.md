---
title: Opni Backends
slug: /installation/opni/backends
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An observability backend is where observability data is sent and for storage and querying.
You can currently create the following backends:
 
<Tabs>
<TabItem value="opni-monitoring" label="Opni Monitoring" default>

The Monitoring backend is composed of [Cortex](https://cortexmetrics.io/) and [Grafana](https://grafana.com/) deployments, fully managed by Opni.
You can enable and configure Monitoring from the Opni dashboard, or from the CLI.

## Using the Opni Dashboard

Follow these steps to enable Monitoring from the Opni dashboard:

1. Navigate to the Opni dashboard

  To access the dashboard, you can port-forward:

  ```bash
  kubectl -n opni port-forward svc/opni-admin-dashboard web:web
  ```
  Then navigate to [http://localhost:12080](http://localhost:12080).


2. Select "Monitoring" from the left sidebar under "Backends", then click "Enable".

  <div class="image-border">
    <img
      src={require('/img/installation/monitoring-not-installed.png').default} 
      alt="Monitoring not installed"
    />
  </div>

3. Adjust configuration options as needed:
  
    <div class="image-border">
      <img
        src={require('/img/installation/monitoring-install-options.png').default} 
        alt="Monitoring configuration"
      />
    </div>
 
  <br />
  <br />

  ### Mode

    - **Standalone**: All components of cortex will be deployed in a single pod. This is suitable for small setups.

    - **Highly Available**: Cortex components will be deployed in separate pods and replicated for high availability. This setup can provide better performance and reliability, but requires more resources.

  ### Storage Type

    - **S3**: Cortex will store time series data in an S3 bucket. This is the recommended default option. 

    - **Filesystem**: Cortex will store time series data on the local filesystem using a persistent volume. This option is suitable for testing and demo setups.

    :::caution

    Filesystem storage may be unreliable, especially during upgrades. Do not rely on this option for production workloads, as data loss is possible.

    :::

  ### Data Retention Period

  Controls the global retention period for time series data. 
  
  :::note

  Cortex stores historical data in blocks, where each block contains 2 hours worth of data. Blocks are scanned periodically, and any blocks which contain metrics older than the retention period will be deleted.

  :::

  ### S3 Options

    When S3 storage is selected, the following options are available (required fields will be marked with a <span style={{ color: '#f00' }}>*</span> in the Opni UI):

    - **Bucket Name**: The name of the S3 bucket to use for storing time series data. This bucket must already exist.

    - **Endpoint**: The S3 endpoint to use. Selecting a region from the dropdown will automatically populate this field with the appropriate AWS S3 endpoint, or a custom endpoint can be provided.

    - **Access Key ID**: The access key ID to use for authenticating with S3.

    - **Secret Access Key**: The secret access key to use for authenticating with S3.

    - **Signature Version**: The signature version to use for authenticating with S3. This should be set to `v4` for AWS S3.

    - **Server Side Encryption**: This can be enabled if your S3 bucket is configured to use server side encryption. If `SSE-KMS` is selected, you will be required to provide the KMS Key ID and Encryption Context.

    - **Connection**: Various connection options can be specified. The default options are sufficient for most use cases.

  ### Grafana

  Grafana can be enabled by clicking "Enable" under the Grafana section. The following configuration options are available:

    - **Hostname**: The hostname at which Grafana will be accessed in the browser.
  
    :::info

    To access grafana from a browser, you will need to create a Kubernetes Ingress for the grafana service. This hostname must match the hostname configured in the ingress.

    :::

## Using the CLI

  Opening a shell into the Opni Gateway pod will give you access to an auto-configured CLI environment.

  ```bash
  kubectl -n opni exec -it deploy/opni-gateway -- sh
  ```

  The `opni metrics ops` subcommand can be used to configure the Monitoring backend.

  ```bash
  $ opni metrics ops --help
    Cortex cluster setup and config operations

    Available Commands:
      configure           Install or configure a Cortex cluster
      get-configuration   Get the current Cortex cluster configuration
      status              Cortex cluster status
      uninstall           Uninstall a Cortex cluster
  ```

  <details>
    <summary>Usage of the <code>configure</code> subcommand</summary>

```
$ opni metrics ops configure --help
Install or configure a Cortex cluster. If the cluster is already installed, this command will update the cluster
configuration.
Some fields contain secrets. You may provide the placeholder value *** to keep an existing secret when
updating the cluster configuration.

Options:
    --grafana=true:
        Enable Grafana

    --grafana-hostname='':
        Grafana hostname

    --mode='':
        Deployment mode (one of: AllInOne, HighlyAvailable)

    --storage.azure.account-key='':
        [secret] Azure storage account key

    --storage.azure.account-name='':
        Azure storage account name

    --storage.azure.container-name='':
        Azure storage container name

    --storage.azure.endpoint-suffix='':
        Azure storage endpoint suffix without schema. The account name will be prefixed to this value to create the
        FQDN

    --storage.azure.expect-continue-timeout=1s:
        The time to wait for a server's first response headers after fully writing the request headers if the request
        has an Expect header. 0 to send the request body immediately.

    --storage.azure.http.idle-conn-timeout=1m30s:
        The time an idle connection will remain idle before closing.

    --storage.azure.http.insecure-skip-verify=false:
        If the client connects via HTTPS and this option is enabled, the client will accept any certificate and
        hostname.

    --storage.azure.http.response-header-timeout=2m0s:
        The amount of time the client will wait for a servers response headers.

    --storage.azure.max-connections-per-host=0:
        Maximum number of connections per host. 0 means no limit.

    --storage.azure.max-idle-connections=100:
        Maximum number of idle (keep-alive) connections across all hosts. 0 means no limit.

    --storage.azure.max-idle-connections-per-host=100:
        Maximum number of idle (keep-alive) connections to keep per-host. If 0, a built-in default value is used.

    --storage.azure.max-retries=20:
        Number of retries for recoverable errors

    --storage.azure.msi-resource='':
        [secret] Azure storage MSI resource. Either this or account key must be set.

    --storage.azure.tls-handshake-timeout=10s:
        Maximum time to wait for a TLS handshake. 0 means no limit.

    --storage.azure.user-assigned-id='':
        Azure storage MSI resource managed identity client Id. If not supplied system assigned identity is used

    --storage.backend='':
        Backend storage to use. Supported backends are: s3, gcs, azure, swift, filesystem.

    --storage.filesystem.dir='/data':
        Local filesystem storage directory.

    --storage.gcs.bucket-name='':
        GCS bucket name

    --storage.gcs.service-account='':
        [secret] JSON representing either a Google Developers Console client_credentials.json file or a
        Google Developers service account key file. If empty, fallback to Google default logic.

    --storage.retention-period=0s:
        Delete blocks containing samples older than the specified retention period. 0 to disable

    --storage.s3.access-key-id='':
        S3 access key ID

    --storage.s3.bucket-name='':
        S3 bucket name

    --storage.s3.endpoint='':
        The S3 bucket endpoint. It could be an AWS S3 endpoint listed at
        https://docs.aws.amazon.com/general/latest/gr/s3.html or the address of an S3-compatible service in
        hostname:port format.

    --storage.s3.expect-continue-timeout=1s:
        The time to wait for a server's first response headers after fully writing the request headers if the request
        has an Expect header. 0 to send the request body immediately.

    --storage.s3.http.idle-conn-timeout=1m30s:
        The time an idle connection will remain idle before closing.

    --storage.s3.http.insecure-skip-verify=false:
        If the client connects via HTTPS and this option is enabled, the client will accept any certificate and
        hostname.

    --storage.s3.http.response-header-timeout=2m0s:
        The amount of time the client will wait for a servers response headers.

    --storage.s3.insecure=false:
        If enabled, use http:// for the S3 endpoint instead of https://. This could be useful in local dev/test
        environments while using an S3-compatible backend storage, like Minio.

    --storage.s3.max-connections-per-host=0:
        Maximum number of connections per host. 0 means no limit.

    --storage.s3.max-idle-connections=100:
        Maximum number of idle (keep-alive) connections across all hosts. 0 means no limit.

    --storage.s3.max-idle-connections-per-host=100:
        Maximum number of idle (keep-alive) connections to keep per-host. If 0, a built-in default value is used.

    --storage.s3.region='':
        S3 region. If unset, the client will issue a S3 GetBucketLocation API call to autodetect it.

    --storage.s3.secret-access-key='':
        [secret] S3 secret access key

    --storage.s3.signature-version='v4':
        The signature version to use for authenticating against S3. Supported values are: v4, v2.

    --storage.s3.sse.kms-encryption-context='':
        [secret] KMS Encryption Context used for object encryption. It expects JSON formatted string.

    --storage.s3.sse.kms-key-id='':
        KMS Key ID used to encrypt objects in S3

    --storage.s3.sse.type='':
        Enable AWS Server Side Encryption. Supported values: SSE-KMS, SSE-S3.

    --storage.s3.tls-handshake-timeout=10s:
        Maximum time to wait for a TLS handshake. 0 means no limit.

    --storage.swift.auth-url='':
        OpenStack Swift authentication URL

    --storage.swift.auth-version=0:
        OpenStack Swift authentication API version. 0 to autodetect.

    --storage.swift.connect-timeout=10s:
        Time after which a connection attempt is aborted.

    --storage.swift.container-name='':
        Name of the OpenStack Swift container to put chunks in.

    --storage.swift.domain-id='':
        OpenStack Swift user's domain ID.

    --storage.swift.domain-name='':
        OpenStack Swift user's domain name.

    --storage.swift.max-retries=3:
        Max retries on requests error.

    --storage.swift.password='':
        [secret] OpenStack Swift API key.

    --storage.swift.project-domain-id='':
        ID of the OpenStack Swift project's domain (v3 auth only), only needed if it differs the from user domain.

    --storage.swift.project-domain-name='':
        Name of the OpenStack Swift project's domain (v3 auth only), only needed if it differs from the user domain.

    --storage.swift.project-id='':
        OpenStack Swift project ID (v2,v3 auth only).

    --storage.swift.project-name='':
        OpenStack Swift project name (v2,v3 auth only).

    --storage.swift.region-name='':
        OpenStack Swift Region to use (v2,v3 auth only).

    --storage.swift.request-timeout=5s:
        Time after which an idle request is aborted. The timeout watchdog is reset each time some data is received, so
        the timeout triggers after X time no data is received on a request.

    --storage.swift.user-domain-id='':
        OpenStack Swift user's domain ID.

    --storage.swift.user-domain-name='':
        OpenStack Swift user's domain name.

    --storage.swift.user-id='':
        OpenStack Swift user ID.

    --storage.swift.username='':
        OpenStack Swift username.
    --disable-usage=false:
        Disable anonymous Opni usage tracking.

Usage:
  opni metrics ops configure [flags] [options]

```
  </details>

:::tip

The `configure` and `uninstall` subcommands can be given the `--follow` option to watch the progress of the operation in real time.

:::


<details>
<summary>Experimental Features</summary>

Using the CLI, you can configure storage backends for Azure, GCS, and Swift, in addition to the ones available in the UI. These backends are not tested as thoroughly as the S3 backend, and may or may not work correctly.


:::tip Openstack Environment Variables

When using the CLI to configure the Swift backend (using `--storage.backend=swift`), the standard Openstack environment variables will be used to populate unset options. The `--storage.swift.container-name` flag will still be required.

:::

</details>

</TabItem>
<TabItem value="opni-logging" label="Opni Logging">

TODO Dan
</TabItem>
</Tabs>
