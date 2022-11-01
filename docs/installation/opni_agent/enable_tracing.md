---
title: Enable Traces Manually in downstream clusters
slug: /installation/opni_agent/enable_tracing
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

Opni agent doesn't support the tracing capability yet. This guild will walk you through an example of using Opentelemetry Collector to ship trace data to Opni.

## Prerequisites
* The [Logging Backend](/docs/installation/opni/backends.md) is enabled in your Opni cluster.
* Instrument your applications in the downstream cluster.
* Cert-manager is installed in the downstream cluster.
    <summary>Install cert-manager using kubectl apply with static manifests</summary>

    ```bash
    kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.10.0/cert-manager.yaml
    ```

## Getting Started
**1. Install Data-Prepper**
:::note
if you already have Opni-Agent installed in your downstream cluster and have the logging capability enabled, skip this step.
In this case, 
:::

Prepare a `data-prepper.yaml` yaml file. 
<details>
  <summary>
    A sample data-prepper yaml
  </summary>

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
namespace: tracing
labels:
    app: data-prepper
name: data-prepper-config
data:
pipelines.yaml: |
    entry-pipeline:
    workers : 8
    delay: "100"
    buffer:
        bounded_blocking:
        # buffer_size is the number of ExportTraceRequest from otel-collector the data prepper should hold in memeory.
        # We recommend to keep the same buffer_size for all pipelines.
        # Make sure you configure sufficient heap
        # default value is 512
        buffer_size: 4096
        # This is the maximum number of request each worker thread will process within the delay.
        # Default is 8.
        # Make sure buffer_size >= workers * batch_size
        batch_size: 512
    source:
        otel_trace_source:
        # health_check_service: true
        ssl: false
    prepper:
        - peer_forwarder:
            discovery_mode: "dns"
            domain_name: "data-prepper-headless"
            ssl: false
    sink:
        - pipeline:
            name: "raw-pipeline"
        - pipeline:
            name: "service-map-pipeline"
    raw-pipeline:
    workers : 8
    buffer:
        bounded_blocking:
        # Configure the same value as in otel-trace-pipeline
        # Make sure you configure sufficient heap
        # default value is 512
        buffer_size: 4096
        # The raw prepper does bulk request to your elasticsearch sink, so configure the batch_size higher.
        # If you use the recommended otel-collector setup each ExportTraceRequest could contain max 50 spans. https://github.com/opendistro-for-elasticsearch/data-prepper/tree/v0.7.x/deployment/aws
        # With 64 as batch size each worker thread could process upto 3200 spans (64 * 50)
        batch_size: 512
    source:
        pipeline:
        name: "entry-pipeline"
    prepper:
        - otel_trace_raw_prepper:
    sink:
        - opensearch:
            hosts:
            - <Your-Opni-Opensearch-Hostname>
            insecure: true
            username: admin
            password: admin
            trace_analytics_raw: true
        - stdout:
    service-map-pipeline:
    workers : 1
    delay: "100"
    source:
        pipeline:
        name: "entry-pipeline"
    prepper:
        - service_map_stateful:
    buffer:
        bounded_blocking:
        # buffer_size is the number of ExportTraceRequest from otel-collector the data prepper should hold in memory.
        # We recommend to keep the same buffer_size for all pipelines.
        # Make sure you configure sufficient heap
        # default value is 512
        buffer_size: 512
        # This is the maximum number of request each worker thread will process within the delay.
        # Default is 8.
        # Make sure buffer_size >= workers * batch_size
        batch_size: 8
    sink:
        - opensearch:
            hosts:
            - <Your-Opni-Opensearch-Hostname>
            insecure: true
            username: admin
            password: admin
            trace_analytics_service_map: true
        - stdout:
data-prepper-config.yaml: |
    ssl: false
---
apiVersion: v1
kind: Service
metadata:
namespace: tracing
labels:
    app: data-prepper
name: data-prepper-headless
spec:
clusterIP: None
ports:
    - name: "21890"
    port: 21890
    targetPort: 21890
selector:
    app: data-prepper
---
apiVersion: v1
kind: Service
metadata:
namespace: tracing
labels:
    app: data-prepper
name: data-prepper-metrics
spec:
type: NodePort
ports:
    - name: "4900"
    port: 4900
    targetPort: 4900
selector:
    app: data-prepper
---
apiVersion: apps/v1
kind: Deployment
metadata:
namespace: tracing
labels:
    app: data-prepper
name: data-prepper
spec:
replicas: 4
selector:
    matchLabels:
    app: data-prepper
strategy:
    type: Recreate
template:
    metadata:
    annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "4900"
        prometheus.io/path: "/metrics"
        sidecar.istio.io/inject: "false"
    labels:
        app: data-prepper
    spec:
    containers:
        - args:
            - java
            - -jar
            - /usr/share/data-prepper/data-prepper.jar
            - /etc/data-prepper/pipelines.yaml
            - /etc/data-prepper/data-prepper-config.yaml
            - -Dlog4j.configurationFile=config/log4j2.properties
        image: opensearchproject/data-prepper:1.2.1
        imagePullPolicy: IfNotPresent
        name: data-prepper
        resources:
            limits:
            cpu: 1
            memory: 2Gi
            requests:
            cpu: 200m
            memory: 400Mi
        ports:
            - containerPort: 21890
        volumeMounts:
            - mountPath: /etc/data-prepper
            name: prepper-configmap-claim0
            - mountPath: config
            name: prepper-log4j2
    restartPolicy: Always
    volumes:
        - name: prepper-configmap-claim0
        configMap:
            name: data-prepper-config
        - name: prepper-log4j2
        configMap:
            name: data-prepper-log4j2
---
apiVersion: v1
kind: ConfigMap
metadata:
namespace: tracing
labels:
    app: data-prepper
name: data-prepper-log4j2
data:
log4j2.properties: |
    status = error
    dest = err
    name = PropertiesConfig

    property.filename = log/data-prepper/data-prepper.log

    appender.console.type = Console
    appender.console.name = STDOUT
    appender.console.layout.type = PatternLayout
    appender.console.layout.pattern = %d{ISO8601} [%t] %-5p %40C - %m%n

    rootLogger.level = warn
    rootLogger.appenderRef.stdout.ref = STDOUT

    logger.pipeline.name = com.amazon.dataprepper.pipeline
    logger.pipeline.level = info

    logger.parser.name = com.amazon.dataprepper.parser
    logger.parser.level = info

    logger.plugins.name = com.amazon.dataprepper.plugins
    logger.plugins.level = info
---
```

</details>

Replace `<Your-Opni-Opensearch-Hostname>` with you Opni Opensearch hostname and apply it:
```bash
kubectl create ns tracing
kubectl create -f data-prepper.yaml
```
    

**2. Install opentelemetry-collector**

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

Replace `<Data-Prepper-Endpoint>` with the endpoint of data-prepper installed in step 1. 

:::note
if you skipped step 1, you should use the endpoint of `opni-shipper` as the `<Data-Prepper-Endpoint>`
:::

Run the command to install the opentelemetry-collector, it should be installed to the *same namespace with your workload apps*, and release name must be *opentelemetry-collector*:
```bash
helm install opentelemetry-collector open-telemetry/opentelemetry-collector --values ot-collector-helm-values.yaml
```

#### Validate the installation
Check the logs of the pod `opentelemetry-collector`, if you see logs like 
![ValidateTraceEnable](/img/validate_trace_enable.png)
you are good to go.

## Trace Analytic Dashboard

Head to the Opensearch Dashboards. Head to the Trace Analytics view from Home -> OpenSearch Plugins -> Trace Analytics. You should see traces populate there
![TraceAnalyticPage](/img/trace_analytic_page.png)