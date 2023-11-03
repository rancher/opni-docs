"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Quick Start using Rancher Desktop",s={unversionedId:"guides/rancher-desktop/index",id:"guides/rancher-desktop/index",title:"Quick Start using Rancher Desktop",description:"This guide walks you through installation of Opni on Rancher Desktop, an open-sourced desktop application for Linux, MacOS and Windows. In 10 mins, you will have Opni deployed on a local k3s cluster.",source:"@site/docs/guides/rancher-desktop/index.md",sourceDirName:"guides/rancher-desktop",slug:"/guides/rancher-desktop/",permalink:"/guides/rancher-desktop/",draft:!1,editUrl:"https://github.com/rancher/opni-docs/edit/main/docs/guides/rancher-desktop/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Uninstall Opni",permalink:"/installation/uninstall"},next:{title:"Install and Config OpenTelemetry-Collector",permalink:"/guilds/install-otel-collector/index"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Rancher Desktop on your computer",id:"install-rancher-desktop-on-your-computer",level:3},{value:"Configure Rancher Desktop",id:"configure-rancher-desktop",level:3},{value:"Install Opni",id:"install-opni",level:2},{value:"Validate Installation",id:"validate-installation",level:3},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start-using-rancher-desktop"},"Quick Start using Rancher Desktop"),(0,r.kt)("p",null,"This guide walks you through installation of ",(0,r.kt)("em",{parentName:"p"},"Opni")," on ",(0,r.kt)("a",{parentName:"p",href:"https://rancherdesktop.io"},"Rancher Desktop"),", an open-sourced desktop application for Linux, MacOS and Windows. In 10 mins, you will have ",(0,r.kt)("em",{parentName:"p"},"Opni")," deployed on a ",(0,r.kt)("em",{parentName:"p"},"local k3s cluster"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rancher Desktop is installed and configured on your machine.")),(0,r.kt)("h3",{id:"install-rancher-desktop-on-your-computer"},"Install Rancher Desktop on your computer"),(0,r.kt)("p",null,"Follow the official ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rancherdesktop.io/getting-started/installation"},"documentation")," to install Rancher Desktop. Once installed, it creates a ",(0,r.kt)("em",{parentName:"p"},"local k3s cluster")," on your machine and installs the command line tools you need to deploy apps to it (kubectl/nerdctl/helm)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Make sure to switch k8s context to the local k3s cluster in Rancher Desktop"),"\n",(0,r.kt)("img",{alt:"SwitchK8sContext",src:n(5770).Z,width:"712",height:"402"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"and validate it"),"\n",(0,r.kt)("img",{alt:"InstallRancherDesktop",src:n(111).Z,width:"1330",height:"130"})),(0,r.kt)("h3",{id:"configure-rancher-desktop"},"Configure Rancher Desktop"),(0,r.kt)("p",null,"Allocate enough resource to the local k3s cluster. Opni requires 8 CPUs and 8GB Memory at a minimum.\n",(0,r.kt)("img",{alt:"ConfigRancherDesktop",src:n(5989).Z,width:"432",height:"408"}),"\n",(0,r.kt)("img",{alt:"ConfigRancherDesktop",src:n(5669).Z,width:"1534",height:"1026"})),(0,r.kt)("h2",{id:"install-opni"},"Install Opni"),(0,r.kt)("p",null,"Here is an example of using Helm to install Opni. For more details please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://opni.io/installation/opni#prerequisites"},"here")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Install cert-manager")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.10.0/cert-manager.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. config chart value. Select ",(0,r.kt)("inlineCode",{parentName:"strong"},"noauth")," as auth provider and input your ",(0,r.kt)("inlineCode",{parentName:"strong"},"hostname")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"grafana.hostname"),".")),(0,r.kt)("p",null,"  This is a sample ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'gateway:\n  # Set a hostname for the Opni Gateway API. This must be accessible to all agents.\n  hostname: <your-hostname> # required\n  auth:\n    # Set an auth provider. Available options are "openid" and "noauth".\n    provider: "noauth"\n\n    # If using the "openid" provider:\n    openid:\n      # discovery and wellKnownConfiguration are mutually exclusive.\n      # If the OP (openid provider) has a discovery endpoint, it should be\n      # configured in the discovery field, otherwise the well-known configuration\n      # fields can be set manually. If set, required fields are listed below.\n      discovery:\n        # Relative path at which to find the openid configuration.\n        # Defaults to "/.well-known/openid-configuration".\n        path: "/.well-known/openid-configuration"\n\n        # The OP\'s Issuer identifier. This must exactly match the issuer URL\n        # obtained from the discovery endpoint, and will match the `iss\' claim\n        # in the ID Tokens issued by the OP.\n        issuer: ""  # required\n\n      # The ID Token claim that will be used to identify users ("sub", "email", etc.). \n      # The value of this field will be matched against role binding subject names.\n      # Defaults to "sub".\n      identifyingClaim: "sub"\n\n      clientID: ""  # required\n      clientSecret: ""  # required\n\n      # OAuth scopes that will be requested by the client. Defaults to ["openid", "profile", "email"].\n      scopes: ["openid", "profile", "email"]\n\n      # https://grafana.com/docs/grafana/v9.0/setup-grafana/configure-security/configure-authentication/generic-oauth/#roles\n      roleAttributePath: # required\n\n      # Optional manually-provided discovery information. Mutually exclusive with \n      # the discovery field (see above). If set, required fields are listed below.\n      wellKnownConfiguration:\n        issuer: ""                  # required\n        authorization_endpoint: ""  # required\n        token_endpoint: ""          # required\n        userinfo_endpoint: ""       # required\n        jwks_uri: ""                # required\n        # revocation_endpoint: ""\n        # scopes_supported: []\n        # response_types_supported: []\n        # response_modes_supported: []\n        # id_token_signing_alg_values_supported: []\n        # token_endpoint_auth_methods_supported: []\n        # claims_supported: []\n        # request_uri_parameter_supported: false\n    \n    # If using the "noauth" provider:\n    noauth:\n      # Set a hostname where the grafana dashboard will be accessible. This value\n      # is the grafana oauth redirect URL for the noauth provider.\n      grafanaHostname: <your-grafana-hostname> # required\n\n  opni-agent:\n      # Embedded kube-prometheus-stack chart. Only the following components will be installed:\n      # - prometheus operator\n      # - kube state metrics\n      # - node exporter\n      # - default service monitors and rules\n      kube-prometheus-stack:\n      enabled: true\n      \n  opni-prometheus-crd:\n      # set to false if `opni-agent.kube-prometheus-stack.enabled` is true\n      enabled: false\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Add the Opni Helm repository:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add opni https://raw.githubusercontent.com/rancher/opni/charts-repo\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Install the CRDs chart:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm -n opni install --create-namespace opni-crd opni/opni-crd\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Install the Opni chart:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm -n opni install opni opni/opni -f values.yaml\n")),(0,r.kt)("h3",{id:"validate-installation"},"Validate Installation"),(0,r.kt)("p",null,"Run the following command to validate Opni has been installed in namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"Opni"),"\n",(0,r.kt)("img",{alt:"ValidateInstallation",src:n(171).Z,width:"1382",height:"436"})),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/installation/opni/backends"},"Enable Backends")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/installation/opni/aiops"},"Enable AIOps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/installation/opni/slo"},"Enable SLOs"))))}u.isMDXComponent=!0},5669:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rancherdesktop_config_resource-e1766bd3ab7280a3fdf7163ddfd45da3.png"},5989:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rancherdesktop_preference-cf81c67fee984503074af346b791530b.png"},5770:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rancherdesktop_switch_k8s_context-762cb4912dcd9dee09f000ca7b3c32b2.png"},171:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rancherdesktop_validate-d15e99ae7febd920413451f973697cc4.png"},111:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rancherdesktop_validate_node-c4701e306795c09faffea44695eaeee3.png"}}]);