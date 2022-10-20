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

## Prerequisites

- cert-manager

    Install cert-manager using one of the following methods, or check out the official documentation [here](https://cert-manager.io/docs/installation/)

    <details>
    <summary>Install using kubectl apply with static manifests</summary>

    ```bash
    kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.10.0/cert-manager.yaml
    ```

    </details>

    <details>
    <summary>Install using helm</summary>

    ```bash
    helm repo add jetstack https://charts.jetstack.io
    ```

    ```bash
    helm repo update
    ```

    ```bash
    helm install \
      cert-manager jetstack/cert-manager \
      --namespace cert-manager \
      --create-namespace \
      --version v1.10.0 \
      --set installCRDs=true
    ```
    </details>

## Chart configuration

See below for a sample `values.yaml` file. Edit the file with your own values.

  ```yaml
  gateway:
    # Set a hostname for the Opni Gateway API. This must be accessible to all agents.
    hostname: # required
    auth:
      # Set an auth provider. Available options are "openid" and "noauth".
      provider: "openid"

      # If using the "openid" provider:
      openid:
        # discovery and wellKnownConfiguration are mutually exclusive.
        # If the OP (openid provider) has a discovery endpoint, it should be
        # configured in the discovery field, otherwise the well-known configuration
        # fields can be set manually. If set, required fields are listed below.
        discovery:
          # Relative path at which to find the openid configuration.
          # Defaults to "/.well-known/openid-configuration".
          path: "/.well-known/openid-configuration"

          # The OP's Issuer identifier. This must exactly match the issuer URL
          # obtained from the discovery endpoint, and will match the `iss' claim
          # in the ID Tokens issued by the OP.
          issuer: ""  # required

        # The ID Token claim that will be used to identify users ("sub", "email", etc.). 
        # The value of this field will be matched against role binding subject names.
        # Defaults to "sub".
        identifyingClaim: "sub"

        clientID: ""  # required
        clientSecret: ""  # required

        # OAuth scopes that will be requested by the client. Defaults to ["openid", "profile", "email"].
        scopes: ["openid", "profile", "email"]

        # https://grafana.com/docs/grafana/v9.0/setup-grafana/configure-security/configure-authentication/generic-oauth/#roles
        roleAttributePath: # required

        # Optional manually-provided discovery information. Mutually exclusive with 
        # the discovery field (see above). If set, required fields are listed below.
        wellKnownConfiguration:
          issuer: ""                  # required
          authorization_endpoint: ""  # required
          token_endpoint: ""          # required
          userinfo_endpoint: ""       # required
          jwks_uri: ""                # required
          # revocation_endpoint: ""
          # scopes_supported: []
          # response_types_supported: []
          # response_modes_supported: []
          # id_token_signing_alg_values_supported: []
          # token_endpoint_auth_methods_supported: []
          # claims_supported: []
          # request_uri_parameter_supported: false
      
      # If using the "noauth" provider:
      noauth:
        # Set a hostname where the grafana dashboard will be accessible. This value
        # is the grafana oauth redirect URL for the noauth provider.
        grafanaHostname: # required

  opni-agent:
    # Embedded kube-prometheus-stack chart. Only the following components will be installed:
    # - prometheus operator
    # - kube state metrics
    # - node exporter
    # - default service monitors and rules
    kube-prometheus-stack:
      enabled: true
      
  opni-prometheus-crd:
    # set to false if `opni-agent.kube-prometheus-stack.enabled` is true
    enabled: false

  ```

### More about auth providers

<details>
<summary><code>openid</code></summary>

Opni supports OpenID Connect for generic user authentication and authorization. Any OpenID Connect provider can be used. 

Take the following steps to set up Opni with your OpenID Provider.
Every provider is different, so you should consult your provider's documentation for more information.

1. Create a new client ID and secret to use for Opni. These are set in the `gateway.auth.openid` section of the `values.yaml` file above.
2. Add an allowed callback URL for `https://<your grafana url>/login/generic_oauth`
3. Add an allowed logout URL for `https://<your grafana url>`

</details>

<details>
<summary><code>noauth</code></summary>

The `noauth` auth provider can be used for demo purposes or for testing. 

### How it works

This demo auth mechanism allows Opni to be its own OpenID Provider. When signing in to Grafana, instead of being redirected to an external OAuth provider, you will be redirected to a simple login page containing a list of all known users in the system (the set of all subjects in the current list of role bindings). Simply select the user you want to sign in as and you will be redirected back to Grafana, logged in as that user. All users will be a Grafana admin.

</details>

## Installation

1. Add the Opni Helm repository:

  ```bash
  helm repo add opni https://raw.githubusercontent.com/rancher/opni/charts-repo
  ```
  ```bash
  helm repo update
  ```
2. Install the CRDs chart:

  ```bash
  helm -n opni install --create-namespace opni-crd opni/opni-crd
  ```
3. Install the Opni chart:

  ```bash
  helm -n opni install opni opni/opni -f values.yaml
  ```

## Upgrading

1. Upgrade the helm chart:

  ```bash
  helm repo update
  ```

  ```bash
  helm -n opni upgrade opni opni/opni -f values.yaml
  ```

2. If necessary, restart the `opni-manager` deployment:

  ```bash
  kubectl -n opni rollout restart deployment opni-manager
  ```


</TabItem>
<TabItem value="pulumi" label="Installation using Pulumi">

You can use [Pulumi](https://www.pulumi.com/) to install a production-ready Opni cluster on AWS.

## Prerequisites

The following tools are required:

  * [Pulumi CLI](https://www.pulumi.com/docs/get-started/install/)
  * [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

## Setup

Click the button below to get started:

  [![](https://get.pulumi.com/new/button.svg)](https://app.pulumi.com/new?template=https://github.com/rancher/opni)

Once you reach the "New Project" screen, give your project and stack a name:

  <div className="image-border">
    <img
      src={require('/img/installation/pulumi-new-project.png').default} 
      alt="New Project Settings" 
    />
  </div>

  <br />
  <br />

  Configure EKS cluster settings, including node group size and instance type:

  <div className="image-border">
    <img
      src={require('/img/installation/pulumi-new-config-cluster.png').default} 
      alt="Cluster Settings" 
    />
  </div>

  <br />
  <br />

  Lastly, set an existing Route53 Zone ID where DNS records will be created, and choose an AWS region:

  <div className="image-border">
    <img
      src={require('/img/installation/pulumi-new-config-zone-region.png').default} 
      alt="Zone and Region Settings" 
    />
  </div>

  <br />
  <br />

  You can find your Route53 Zone ID in the AWS console, under "Hosted Zones":

  <div>
    <img
      src={require('/img/installation/aws-hosted-zones.png').default} 
      alt="AWS Hosted Zones"
    />
  </div>

  <br />
  <br />

  On the next page, follow the provided instructions to launch your stack. Before running `pulumi up`, you can view or modify any settings using the `pulumi config` commands, or by editing `infra/Pulumi.<stack-name>.yaml`.

  <div className="image-border">
    <img
      src={require('/img/installation/pulumi-deploy.png').default} 
      alt="Deploy Stack" 
    />
  </div>

  <br />
  <br />

  -----------------

  ### Available config options:

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>aws:region</code></td>
        <td>AWS region to deploy to</td>
        <td><code>us-east-2</code></td>
      </tr>
      <tr>
        <td><code>aws:skipCredentialsValidation</code></td>
        <td>Skip AWS credentials validation</td>
        <td><code>true</code></td>
      </tr>
      <tr>
        <td><code>aws:skipRequestingAccountId</code></td>
        <td>Skip requesting AWS account ID</td>
        <td><code>true</code></td>
      </tr>
      <tr>
        <td><code>opni:chartVersion</code></td>
        <td>Chart version to deploy</td>
        <td>latest version available</td>
      </tr>
      <tr>
        <td><code>opni:chartsRepo</code></td>
        <td>Opni chart repository</td>
        <td><code>https://raw.githubusercontent.com/rancher/opni/charts-repo/</code></td>
      </tr>
      <tr>
        <td><code>opni:imageTag</code></td>
        <td>Opni image tag</td>
        <td><code>latest</code></td>
      </tr>
      <tr>
        <td><code>opni:minimalImageTag</code></td>
        <td>Minimal image tag (used for agents)</td>
        <td><code>latest-minimal</code></td>
      </tr>
      <tr>
        <td><code>opni:namePrefix</code></td>
        <td>Prefix for Opni resources</td>
        <td><code>opni</code></td>
      </tr>
      <tr>
        <td><code>opni:zoneID</code></td>
        <td>Route53 Zone ID to create DNS records in</td>
        <td>(required)</td>
      </tr>
      <tr>
        <td><code>opni:tags</code></td>
        <td>Tags to apply to all resources</td>
        <td><code>&#123;&#125;</code></td>
      </tr>
      <tr>
        <td><code>opni:cluster</code></td>
        <td colSpan="2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>nodeInstanceType</code></td>
              <td>Instance type for EKS nodes</td>
              <td><code>r6a.xlarge</code></td>
            </tr>
            <tr>
              <td><code>nodeGroupMinSize</code></td>
              <td>Minimum number of nodes in the EKS node group</td>
              <td><code>3</code></td>
            </tr>
            <tr>
              <td><code>nodeGroupMaxSize</code></td>
              <td>Maximum number of nodes in the EKS node group</td>
              <td><code>3</code></td>
            </tr>
            <tr>
              <td><code>nodeGroupDesiredSize</code></td>
              <td>Desired number of nodes in the EKS node group</td>
              <td><code>3</code></td>
            </tr>
          </tbody>
        </td>
      </tr>
    </tbody>
  </table>
</TabItem>
</Tabs>
 