"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Prometheus Data Import",slug:"/guides/prometheus-import"},i="Prometheus Data Import",s={unversionedId:"guides/prometheus-import/index",id:"guides/prometheus-import/index",title:"Prometheus Data Import",description:"This guide walks you through importing the metrics data stored by an existing Rancher Monitoring installation.",source:"@site/docs/guides/prometheus-import/index.md",sourceDirName:"guides/prometheus-import",slug:"/guides/prometheus-import",permalink:"/guides/prometheus-import",draft:!1,editUrl:"https://github.com/rancher/opni-docs/edit/main/docs/guides/prometheus-import/index.md",tags:[],version:"current",frontMatter:{title:"Prometheus Data Import",slug:"/guides/prometheus-import"},sidebar:"tutorialSidebar",previous:{title:"Install and Config OpenTelemetry-Collector",permalink:"/guilds/install-otel-collector/index"},next:{title:"Opni Alerting : User Guide",permalink:"/guides/alerting/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Adding Targets",id:"adding-targets",level:2},{value:"Starting an Import",id:"starting-an-import",level:2},{value:"Checking Progress",id:"checking-progress",level:3},{value:"Stopping",id:"stopping",level:2},{value:"Dealing with Prometheus Operator",id:"dealing-with-prometheus-operator",level:2},{value:"Validating Import",id:"validating-import",level:2}],m={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prometheus-data-import"},"Prometheus Data Import"),(0,a.kt)("p",null,"This guide walks you through importing the metrics data stored by an existing Rancher Monitoring installation."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You will need to have the following installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A K8s cluster"),(0,a.kt)("li",{parentName:"ul"},"Opni Gateway"),(0,a.kt)("li",{parentName:"ul"},"Opni Agent"),(0,a.kt)("li",{parentName:"ul"},"Opni Metrics backend")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the target cluster has a pre-existing PrometheusOperator installed, be sure to check ",(0,a.kt)("a",{parentName:"p",href:"#dealing-with-prometheus-operator"},"Dealing with Prometheus Operator")," first.")),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(8166).Z,alt:"Add Cluster"})),(0,a.kt)("h2",{id:"adding-targets"},"Adding Targets"),(0,a.kt)("p",null,"The first step to importing Prometheus data is to point Opni at the Prometheus deployments to read data from. To do this you can create an import target using ",(0,a.kt)("inlineCode",{parentName:"p"},"opni import add <cluster> <name> <endpoint>"),". Import targets must have a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," combination, so that they can be identified later."),(0,a.kt)("p",null,"When adding targets it is important to note that while the add request is sent to the gateway, the target endpoint needs to be reachable by the agent and not the gateway."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you do not know what prometheus services / endpoints exist on your cluster, Opni provides best effort attempt to discover these targets. Opni will check the cluster for any ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheuses.monitoring.coreos.com")," and report the urls for the related service:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},">>> opni import discover\n CLUSTER                               NAME                           EXTERNAL                                                            INTERNAL                                                                 \n 0194fdc2-fa2f-4cc0-81d3-ff12045b73c8  rancher-monitoring-prometheus  http://rancher-monitoring-prometheus.cattle-monitoring-system:9090  rancher-monitoring-prometheus.cattle-monitoring-system.svc.cluster.local \n")),(0,a.kt)("p",{parentName:"admonition"},"You will need to add the url scheme, port, and endpoint path yourself.")),(0,a.kt)("h2",{id:"starting-an-import"},"Starting an Import"),(0,a.kt)("p",null,"First you should list the available targets:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> opni import list\n CLUSTER                               NAME                ENDPOINT                                                                   LAST READ  STATE        MESSAGE\n 0194fdc2-fa2f-4cc0-81d3-ff12045b73c8  demo                http://127.0.0.1:8090/api/v1/read                                                     not running\n 0194fdc2-fa2f-4cc0-81d3-ff12045b73c8  rancher-monitoring  rancher-monitoring-prometheus.cattle-monitoring-service.svc.cluster.local             not running\n")),(0,a.kt)("p",null,"When starting an import, there are a handful of options available you can use to add constraints to the import. You can specify the time range for the import using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--start")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--end")," flags, or add a ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"PromQL")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--filters")," flag. Once you know which target to start and what constraints you might want, you can start the import with ",(0,a.kt)("inlineCode",{parentName:"p"},"bpni import start <cluste> <name>"),". There is no limit to how many imports you can run at once."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can start and follow the import progress in one command with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--follow")," flag:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"> opni import start --follow 0194fdc2-fa2f-4cc0-81d3-ff12045b73c8 demo\n2023-02-02T13:42:55-05:00 INFO commands/import.go:284 import started\n\n  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100%\n\n  State: complete\n  Last Read Timestamp: 2023-02-02 18:42:55 +0000 UTC\n")),(0,a.kt)("p",{parentName:"admonition"},"This is essentially the same as running ",(0,a.kt)("inlineCode",{parentName:"p"},"opni import start 0194fdc2-fa2f-4cc0-81d3-ff12045b73c8 demo && opni import progress 0194fdc2-fa2f-4cc0-81d3-ff12045b73c8 demo"))),(0,a.kt)("h3",{id:"checking-progress"},"Checking Progress"),(0,a.kt)("p",null,"Once you have started your imports, there are two ways you can use to check the state of the import."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Running ",(0,a.kt)("inlineCode",{parentName:"li"},"opni import list")," will give you a high level representation of your import state:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"CLUSTER                               NAME                ENDPOINT                                                                          LAST READ                      STATE     MESSAGE\n0194fdc2-fa2f-4cc0-81d3-ff12045b73c8  demo                http://127.0.0.1:8090/api/v1/read                                                 2023-02-02 17:49:49 +0000 UTC  complete\n0194fdc2-fa2f-4cc0-81d3-ff12045b73c8  rancher-monitoring  http://rancher-monitoring-prometheus.cattle-monitoring-service.svc.cluster.local  1970-01-01 00:00:00 +0000 UTC  failed    failed to read from target endpoint: could not get response from remote read: connection refused\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Running ",(0,a.kt)("inlineCode",{parentName:"li"},"opni import progress <cluster> <name>")," will follow the import progress, and show clearer progress and status information:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100%\n\n  State: complete\n  Last Read Timestamp: 2023-02-02 18:42:55 +0000 UTC\n")),(0,a.kt)("h2",{id:"stopping"},"Stopping"),(0,a.kt)("p",null,"If you choose to manually stop a running import using ",(0,a.kt)("inlineCode",{parentName:"p"},"opni import stop <cluter> <name>")," all operations on that import target will halt, but any data which has already been written to Opni's metrics store will not be removed."),(0,a.kt)("h2",{id:"dealing-with-prometheus-operator"},"Dealing with Prometheus Operator"),(0,a.kt)("p",null,"If the cluster you want to install Opni onto has an existing Prometheus Operator instance installed (ex Rancher Monitoring), you will need to disable the agent's ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-prometheus-stack")," sub-chart with the following Helm values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"opni-agent:\n  kube-prometheus-stack:\n    enabled: false\n")),(0,a.kt)("p",null,"Once Opni is installed, you'll need to follow ",(0,a.kt)("a",{parentName:"p",href:"/installation/opni/backends"},"these steps")," to ensure you have a Cortex deployment to import your metrics to using the steps listed above."),(0,a.kt)("h2",{id:"validating-import"},"Validating Import"),(0,a.kt)("p",null,"Now that you've imported data to your clusters you'll need to validate the import before you can safely tear down your existing metrics infrastructure. The simplest way to verify that your data has made it, is to use ",(0,a.kt)("inlineCode",{parentName:"p"},"opni metrics admin query command"),"."),(0,a.kt)("p",null,"You will want to specify the same labels and cluster used for the import. For example, if you imported data from cluster ",(0,a.kt)("inlineCode",{parentName:"p"},"0194fdc2-fa2f-4cc0-81d3-ff12045b73c8")," with the label selector ",(0,a.kt)("inlineCode",{parentName:"p"},"__name__=up")," you should run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"opni metrics admin query --clusters 0194fdc2-fa2f-4cc0-81d3-ff12045b73c8 '{__name__=\"up\"}'"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "status": "success",\n  "data": {\n    "resultType": "vector",\n    "result": [\n      {\n        "metric": {\n          "__name__": "up",\n          "__tenant_id__": "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8",\n          "container": "alertmanager",\n          "endpoint": "http-web",\n          "instance": "192.168.245.145:9093",\n          "job": "rancher-monitoring-alertmanager",\n          "namespace": "cattle-monitoring-system",\n          "pod": "alertmanager-rancher-monitoring-alertmanager-0",\n          "prometheus": "cattle-monitoring-system/rancher-monitoring-prometheus",\n          "prometheus_replica": "prometheus-rancher-monitoring-prometheus-0",\n          "service": "rancher-monitoring-alertmanager"\n        },\n        "value": [\n          1678112707.697,\n          "1"\n        ]\n      },\n      \n      // more data...\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"If no metrics made it to the cluster, you will see output similar to: ",(0,a.kt)("inlineCode",{parentName:"p"},'{"status":"success","data":{"resultType":"vector","result":[]}}'),"."))}c.isMDXComponent=!0},8166:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/data-import-architecture-fdad869d18cf091fe8fd83c5a83ee0c5.png"}}]);