"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(n),d=o,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Log Shipping"},i=void 0,p={unversionedId:"setup/log-shipping",id:"setup/log-shipping",title:"Log Shipping",description:"The Opni payload receiver service provides a http endpoint for receiving JSON formatted logs from the FluentD http output.  The recommended mechanism for configuring FluentD is to use the Banzaicloud logging operator",source:"@site/docs/setup/log-shipping.md",sourceDirName:"setup",slug:"/setup/log-shipping",permalink:"/setup/log-shipping",draft:!1,editUrl:"https://github.com/rancher/opni-docs/edit/main/docs/setup/log-shipping.md",tags:[],version:"current",frontMatter:{title:"Log Shipping"}},l={},s=[{value:"Log Adapter",id:"log-adapter",level:3},{value:"Separate Logging Operator",id:"separate-logging-operator",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Opni payload receiver service provides a http endpoint for receiving JSON formatted logs from the FluentD http output.  The recommended mechanism for configuring FluentD is to use the ",(0,o.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/"},"Banzaicloud logging operator")),(0,o.kt)("h3",{id:"log-adapter"},"Log Adapter"),(0,o.kt)("p",null,"The Opni operator understands the banzaicloud logging custom resources, but under the ",(0,o.kt)("inlineCode",{parentName:"p"},"logging.opni.io")," API group instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"logging.banzaicloud.io"),".  This allows the Opni operator to manage log shipping configuration, without conflicting with a separate Banzaicloud operator install."),(0,o.kt)("p",null,"For convenience Opni has a LogAdapter custom resource for configuring log shipping on various Kubernetes distributions.  This creates a Logging resource, and also configures a fluentbit DaemonSet to pick up Kubernetes system logs from either file based logging or journald.  More details on the LogAdapter can be found on the ",(0,o.kt)("a",{parentName:"p",href:"../../configuration/logadapter/"},"LogAdapter configuration page"),"."),(0,o.kt)("p",null,"If using a LogAdapter the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.deployLogCollector")," field can be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," on the OpniCluster resource.  This will create a ClusterOutput and ClusterFlow to ship the logs to the install Opni payload receiver service."),(0,o.kt)("h3",{id:"separate-logging-operator"},"Separate Logging Operator"),(0,o.kt)("p",null,"If using a Rancher distribution of Kubernetes you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/logging/"},"Rancher Logging integration")," to ship logs.  Once the Rancher Logging App is installed you will need to add a ClusterFlow and ClusterOutput to ship the logs to Opni:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"clusteroutput.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: <clusteroutput name>\nspec:\n  http:\n    buffer:\n      chunk_limit_size: 1mb\n      flush_interval: 2s\n      tags: '[]'\n      timekey: \"\"\n    content_type: application/json\n    endpoint: <opni payload-receiver endpoint>\n    json_array: true\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"clusterflow.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: <clusterflow name>\nspec:\n  filters:\n  - dedot:\n      de_dot_nested: true\n      de_dot_separator: '-'\n  - grep:\n      exclude:\n      - key: log\n        pattern: ^\\n$\n  - detectExceptions:\n      languages:\n      - java\n      - python\n      - go\n      - ruby\n      - js\n      - csharp\n      - php\n      multiline_flush_interval: \"0.1\"\n  globalOutputRefs:\n  - <clusteroutput name>\n  match:\n  - exclude:\n      namespaces:\n      - <opni namespace> #We exclude the opni cluster namespace\n  - select: {}\n")))}c.isMDXComponent=!0}}]);