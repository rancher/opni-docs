---
title: Opni Installation
slug: /installation/opni
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

There are a few different ways to install Opni. We recommend installation through the Rancher UI.

<Tabs>
<TabItem value="rancher" label="Installation using Rancher UI" default>
TODO Dan
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
TODO Joe
</TabItem>
</Tabs>
