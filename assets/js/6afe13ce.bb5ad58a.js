"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[781],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),f=r,k=c["".concat(o,".").concat(f)]||c[f]||m[f]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={title:"S3"},i=void 0,p={unversionedId:"configuration/s3",id:"configuration/s3",title:"S3",description:"Opni requires an S3 endpoint to store the AI models for the Drain and Inference services.  This can be endpoint for an external S3 compatible API, or Opni can deploy a SeaweedFS pod to serve the S3 API.",source:"@site/docs/configuration/s3.md",sourceDirName:"configuration",slug:"/configuration/s3",permalink:"/configuration/s3",draft:!1,editUrl:"https://github.com/rancher/opni-docs/edit/main/docs/configuration/s3.md",tags:[],version:"current",frontMatter:{title:"S3"}},o={},s=[{value:"Custom Resource Specs",id:"custom-resource-specs",level:3},{value:"S3Spec",id:"s3spec",level:4},{value:"InternalSpec",id:"internalspec",level:4},{value:"PersistenceSpec",id:"persistencespec",level:4},{value:"ExternalSpec",id:"externalspec",level:4}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Opni requires an S3 endpoint to store the AI models for the Drain and Inference services.  This can be endpoint for an external S3 compatible API, or Opni can deploy a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chrislusf/seaweedfs"},"SeaweedFS")," pod to serve the S3 API."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"example.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: opni.io/v1beta1\nkind: OpniCluster\nmetadata:\n  name: example\n  namespace: opni\nspec:\n  s3:\n    internal: {}\n")),(0,r.kt)("h3",{id:"custom-resource-specs"},"Custom Resource Specs"),(0,r.kt)("h4",{id:"s3spec"},"S3Spec"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"internal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#internalspec"},"InternalSpec")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If set will deploy an internal S3 endpoint to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"external"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#externalspec"},"ExternalSpec")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The reference to the external S3 compatible API to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nulogS3Bucket"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the S3 bucket to use for the Nulog model.  Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"opni-nulog-models"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"drainS3Bucket"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the S3 bucket to use for the Drain model.  Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"opni-drain-model"))))),(0,r.kt)("h4",{id:"internalspec"},"InternalSpec"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"persistence"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#persistencespec"},"PersistenceSpec")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If set SeaweedFS will be configured to use persistent storage")))),(0,r.kt)("h4",{id:"persistencespec"},"PersistenceSpec"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether persistent storage is enabled.  Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storageClassName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If persistent storage is enabled, the name of the StorageClass to use.  If not set will use the default StorageClass")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"accessModes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string array")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An array of the ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"access modes")," the volume supports")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"request"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The size of the volume to request.  Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"10Gi"))))),(0,r.kt)("h4",{id:"externalspec"},"ExternalSpec"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The external S3 endpoint URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"credentials"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#secretreference-v1-core"},"SecretReference")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reference to a secret containing the S3 credentials.  It must have ",(0,r.kt)("inlineCode",{parentName:"td"},"accessKey")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"secretKey")," items")))))}m.isMDXComponent=!0}}]);