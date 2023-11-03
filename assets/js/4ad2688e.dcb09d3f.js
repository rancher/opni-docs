"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[214],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),y=r,g=m["".concat(p,".").concat(y)]||m[y]||u[y]||a;return t?o.createElement(g,l(l({ref:n},c),{},{components:t})):o.createElement(g,l({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={title:"Opni Log Anomaly Setup"},l=void 0,i={unversionedId:"log-anomaly/log-anomaly",id:"log-anomaly/log-anomaly",title:"Opni Log Anomaly Setup",description:"Following this guide will allow you to setup Opni Log Anomaly Detection on your cluster.",source:"@site/docs/log-anomaly/log-anomaly.md",sourceDirName:"log-anomaly",slug:"/log-anomaly/",permalink:"/log-anomaly/",draft:!1,editUrl:"https://github.com/rancher/opni-docs/edit/main/docs/log-anomaly/log-anomaly.md",tags:[],version:"current",frontMatter:{title:"Opni Log Anomaly Setup"}},p={},s=[{value:"Setup Opni Logging",id:"setup-opni-logging",level:3},{value:"Setup Opni Log Anomaly",id:"setup-opni-log-anomaly",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Following this guide will allow you to setup Opni Log Anomaly Detection on your cluster."),(0,r.kt)("h3",{id:"setup-opni-logging"},"Setup Opni Logging"),(0,r.kt)("p",null,"To setup Opni Log Anomaly, first follow the ",(0,r.kt)("a",{parentName:"p",href:"/logging/"},"instructions here")," to setup a central Opni cluster and at least one downstream cluster boostrapped to ship logs over to the central Opni cluster."),(0,r.kt)("h3",{id:"setup-opni-log-anomaly"},"Setup Opni Log Anomaly"),(0,r.kt)("p",null,"To set up log anomaly detection, apply this yaml file to your central Opni cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: opni.io/v1beta2\nkind: OpniCluster\nmetadata:\n  name: opni-log-anomaly\n  namespace: opni-cluster-system\nspec:\n  version: v0.4.0\n  deployLogCollector: false\n  services:\n    gpuController:\n      enabled: false\n    inference:\n      enabled: true\n      imagePullPolicy: Always\n      pretrainedModels:\n      - name: control-plane\n    metrics:\n      enabled: false\n  opensearch:\n    externalOpensearch:\n      name: opni\n      namespace: opni-cluster-system\n  s3:\n    internal: {}\n  nats:\n    authMethod: nkey\n---\napiVersion: opni.io/v1beta2\nkind: PretrainedModel\nmetadata:\n  name: control-plane\n  namespace: opni-cluster-system\nspec:\n  source:\n    http:\n      url: "https://opni-public.s3.us-east-2.amazonaws.com/pretrain-models/control-plane-model-v0.4.0.zip"\n  hyperparameters:\n    modelThreshold: "0.6"\n    minLogTokens: 1\n    isControlPlane: "true"\n')))}u.isMDXComponent=!0}}]);