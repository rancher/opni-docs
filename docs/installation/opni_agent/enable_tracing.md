---
title: Enable Traces Manually in downstream clusters
slug: /installation/opni_agent/enable_tracing
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

Opni agent installs a data shipper when the ***logging capability*** is enabled in a connected cluster. 
You must export traces from OpenTelemetry collector to Opni agent's data shipper port `21890`.

## Prerequisites
In the cluster you'd like to get traces from
* [Logging Capability](/docs/installation//opni_agent/capabilities.md) is enabled
* Applications have been [instrumented with OpenTelemetry](https://opentelemetry.io/docs/concepts/instrumenting/)


## Getting Started
### Install opentelemetry-collector

Add the helm repo of open-telemetry
```bash
helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts
```

Install opentelemetry-collector with custom chart value file, here is a sample yaml `ot-collector-helm-values.yaml`:
<details>
  <summary>
    A sample custom chart value yaml
  </summary>

```yaml
config:
    processors:
        k8sattributes:
        passthrough: false
        auth_type: "kubeConfig"
        extract:
            metadata:
            # extract the following well-known metadata fields
            - podName
            - podUID
            - deployment
            - cluster
            - namespace
            - node
            - startTime
    exporters:
        logging: {}
        otlp/data-prepper:
        endpoint: <Data-Prepper-Endpoint> # example: opni-shipper.opni-agent.svc:21890
        tls:
            insecure: true

    service:
        extensions: [health_check]
        pipelines:
        traces:
            receivers: [otlp]
            processors: [memory_limiter, batch, k8sattributes]
            exporters: [logging, otlp/data-prepper]

    # disable ports that are not required
    ports:
    jaeger-binary:
        enabled: false
    jaeger-compact:
        enabled: false
    jaeger-grpc:
        enabled: false
    jaeger-http:
        enabled: false
    zipkin:
        enabled: false

    # k8sProcessor:
    #   rbac:
    #     name: "microservices-tagger"
    #     create: true

    serviceAccount:
    create: true

    resources:
    limits:
        cpu: 500m
        memory: 2Gi
    requests:
        cpu: 200m
        memory: 400Mi

    clusterRole:
    # Specifies whether a clusterRole should be created
    create: true
    # Annotations to add to the clusterRole
    annotations: {}
    # The name of the clusterRole to use.
    # If not set and create is true, a name is generated using the fullname template
    name: "ot-collector-clusterrole"
    # A set of rules as documented here : https://kubernetes.io/docs/reference/access-authn-authz/rbac/
    rules:
    - apiGroups:
        - ''
        resources:
        - 'pods'
        - 'nodes'
        verbs:
        - 'get'
        - 'list'
        - 'watch'

    clusterRoleBinding:
        # Annotations to add to the clusterRoleBinding
        annotations: {}
        # The name of the clusterRoleBinding to use.
        # If not set and create is true, a name is generated using the fullname template
        name: "ot-collector-clusterrolebinding"

mode: deployment
```

</details>

Replace `<Data-Prepper-Endpoint>` with the endpoint of `opni-shipper` service.
![GetOpniShipper](/img/get_opni_shipper.png)

Run the command to install the opentelemetry-collector, it should be installed to the *same namespace with your workload apps*, and release name must be *opentelemetry-collector*:
```bash
helm install opentelemetry-collector open-telemetry/opentelemetry-collector --values ot-collector-helm-values.yaml
```

### Validate the installation
Check the logs of the pod `opentelemetry-collector`, if you see logs like 
![ValidateTraceEnable](/img/validate_trace_enable.png)
you are good to go.

## Trace Analytic Dashboard

Head to the Opensearch Dashboards. Head to the Trace Analytics view from Home -> OpenSearch Plugins -> Trace Analytics. You should see traces populate there
![TraceAnalyticPage](/img/trace_analytic_page.png)