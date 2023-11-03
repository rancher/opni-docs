"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(r),h=o,d=m["".concat(c,".").concat(h)]||m[h]||l[h]||i;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={title:"Metrics Anomaly Detection (beta)"},s=void 0,a={unversionedId:"setup/metrics",id:"setup/metrics",title:"Metrics Anomaly Detection (beta)",description:"Metrics anomaly detection in Opni depends on having a Prometheus instance set up, and collecting metrics from the Kubernetes cluster.  The Opni metrics service exposes the predictions via a Prometheus metrics enddpoint so this also needs to be regularly scraped.",source:"@site/docs/setup/metrics.md",sourceDirName:"setup",slug:"/setup/metrics",permalink:"/setup/metrics",draft:!1,editUrl:"https://github.com/rancher/opni-docs/edit/main/docs/setup/metrics.md",tags:[],version:"current",frontMatter:{title:"Metrics Anomaly Detection (beta)"}},c={},u=[{value:"Configuring Metrics.",id:"configuring-metrics",level:2}],p={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Metrics anomaly detection in Opni depends on having a Prometheus instance set up, and collecting metrics from the Kubernetes cluster.  The Opni metrics service exposes the predictions via a Prometheus metrics enddpoint so this also needs to be regularly scraped."),(0,o.kt)("p",null,"The simplest way to set up Prometheus is to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"prometheus-operator"),".  This can be installed with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"},"community helm chart"),", or using the Rancher Monitoring application."),(0,o.kt)("h2",{id:"configuring-metrics"},"Configuring Metrics."),(0,o.kt)("p",null,"The Opni metrics service can be configured to work with prometheus-operator.  To enable this provide a reference to the Prometheus resource you want to use.  Opni will then use that to obtain the Prometheus URL, and create a ServiceMonitor and PrometheusRule (for alerts)."),(0,o.kt)("p",null,"If the Prometheus object doesn't include an externalURL field, or you are manually managing Prometheus, you will need to provide the Prometheus URL.  If don't provide the Prometheus reference you will need to manually set up the Prometheus scrape config."))}l.isMDXComponent=!0}}]);