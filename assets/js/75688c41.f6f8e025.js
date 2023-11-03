"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,g=m["".concat(s,".").concat(p)]||m[p]||c[p]||r;return n?i.createElement(g,l(l({ref:t},u),{},{components:n})):i.createElement(g,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={},l="Opni Alerting : User Guide",o={unversionedId:"guides/alerting/index",id:"guides/alerting/index",title:"Opni Alerting : User Guide",description:"This guide walks through the usage of Opni-Alerting.",source:"@site/docs/guides/alerting/index.md",sourceDirName:"guides/alerting",slug:"/guides/alerting/",permalink:"/guides/alerting/",draft:!1,editUrl:"https://github.com/rancher/opni-docs/edit/main/docs/guides/alerting/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prometheus Data Import",permalink:"/guides/prometheus-import"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Slack",id:"slack",level:3},{value:"Email",id:"email",level:3},{value:"PagerDuty",id:"pagerduty",level:3},{value:"Alarms",id:"alarms",level:2},{value:"State",id:"state",level:3},{value:"Overview",id:"overview",level:3},{value:"Editing / Deleting Alarms",id:"editing--deleting-alarms",level:3},{value:"Cloning",id:"cloning",level:3},{value:"Alarm Types",id:"alarm-types",level:2},{value:"Agent Disconnect",id:"agent-disconnect",level:3},{value:"Options",id:"options",level:4},{value:"Recommended Options",id:"recommended-options",level:4},{value:"Downstream Capability",id:"downstream-capability",level:3},{value:"Options",id:"options-1",level:4},{value:"Recommended Options",id:"recommended-options-1",level:4},{value:"Monitoring Backend",id:"monitoring-backend",level:3},{value:"Options",id:"options-2",level:4},{value:"Recommended options",id:"recommended-options-2",level:4},{value:"Prometheus Query",id:"prometheus-query",level:3},{value:"Options",id:"options-3",level:4},{value:"Kube State",id:"kube-state",level:3},{value:"Options",id:"options-4",level:4},{value:"General Alarm Options",id:"general-alarm-options",level:2},{value:"Attaching endpoint(s) to an Alarm",id:"attaching-endpoints-to-an-alarm",level:3},{value:"Silencing an Alarm",id:"silencing-an-alarm",level:3}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opni-alerting--user-guide"},"Opni Alerting : User Guide"),(0,a.kt)("p",null,"This guide walks through the usage of Opni-Alerting."),(0,a.kt)("p",null,"There are 3 main components to Opni-Alerting:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Endpoints : targets for alarms to dispatch to"),(0,a.kt)("li",{parentName:"ul"},"Alarms : Expressions that specify some condition to alert on"),(0,a.kt)("li",{parentName:"ul"},"Overview : Timeline of breached conditions")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access to the admin UI"),(0,a.kt)("li",{parentName:"ul"},"Opni-Alerting backend is installed")),(0,a.kt)("h2",{id:"endpoints"},"Endpoints"),(0,a.kt)("p",null,"In order to get started, head to the 'Endpoints' tab under 'Alerting' in the left sidebar of the admin UI"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(5470).Z,alt:"Alerting configuration"})),(0,a.kt)("p",null,"To create a new endpoint, click the top-right 'Create' button to open\nthe create UI"),(0,a.kt)("h3",{id:"slack"},"Slack"),(0,a.kt)("p",null,"Using slack requires a :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Valid incoming slack webhook"),(0,a.kt)("li",{parentName:"ul"},"Valid slack channel")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"See the official ",(0,a.kt)("a",{parentName:"p",href:"https://slack.com/help/articles/115005265063-Incoming-webhooks-for-Slack"},"slack docs")," for setup instructions")),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(6891).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If the specified channel does not exist, or your slackbot does not have appropriate permissions to send messages to the specified channel, it will send the alert to its default channel.")),(0,a.kt)("p",null,"To validate your inputs, hit the 'Test Endpoint' button to make sure opni alerting can dispatch messages to your configured endpoint."),(0,a.kt)("p",null,"If your inputs are correct, you should receive a test message:"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(8234).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),"When you are done, hit the 'Save' button.",(0,a.kt)("h3",{id:"email"},"Email"),(0,a.kt)("p",null,"Using email endpoint requires its own smtp server, which will require:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To email : valid recipient for this endpoint"),(0,a.kt)("li",{parentName:"ul"},"From email : valid sender for this email"),(0,a.kt)("li",{parentName:"ul"},"Smart Host : ",(0,a.kt)("inlineCode",{parentName:"li"},"<url>:<port>")," for your SMTP server setup"),(0,a.kt)("li",{parentName:"ul"},"Smtp Identity : Identity to use with your SMTP server"),(0,a.kt)("li",{parentName:"ul"},"Smtp username : Auth username credential for SMTP server"),(0,a.kt)("li",{parentName:"ul"},"Smtp Password : Auth password credential for SMTP server")),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(5152).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"SMTP server configurations will be specific to your IT or production setup")),(0,a.kt)("p",null,"To validate your inputs, hit the 'Test Endpoint' button to make sure opni alerting can dispatch messages to your configured endpoint."),(0,a.kt)("p",null,"When you are done, hit the 'Save' button."),(0,a.kt)("h3",{id:"pagerduty"},"PagerDuty"),(0,a.kt)("p",null,"Using PagerDuty requires a PagerDuty integration key."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"See the official PagerDuty docs on ",(0,a.kt)("a",{parentName:"p",href:"https://www.pagerduty.com/docs/guides/prometheus-integration-guide/"},"integration with AlertManager")," for generating\nintegration keys")),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(102).Z,alt:"Alerting configuration"})),(0,a.kt)("h2",{id:"alarms"},"Alarms"),(0,a.kt)("p",null,"Alarms are used to evaluate whether or not some external condition should dispatch a notification to the configured endpoints"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Alarms will fire without attached endpoints, but if you do not attach any endpoints to your alarm it will not dispatch to any endpoints (it will still show as firing in the opni UI).")),(0,a.kt)("h3",{id:"state"},"State"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unkown : State can't be reported or analyzed by Opni-Alerting"),(0,a.kt)("li",{parentName:"ul"},"Ok : The alarm is fine"),(0,a.kt)("li",{parentName:"ul"},"Firing : The alarm has met its condition, expect to eventually receive a notification, depending on your settings"),(0,a.kt)("li",{parentName:"ul"},"Silenced : The alarm is firing but has been silence by the User."),(0,a.kt)("li",{parentName:"ul"},"Invalidated : The alarm can no longer evaluate to Ok or Firing, usually due to uninstalling external requirements.")),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Overview tab will display a timeline of when alarms have fired."),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(4707).Z,alt:"Alerting configuration"})),(0,a.kt)("h3",{id:"editing--deleting-alarms"},"Editing / Deleting Alarms"),(0,a.kt)("p",null,"In order to edit or delete alarms right click the condition you want to edit or delete :"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(749).Z,alt:"Alerting configuration"})),(0,a.kt)("h3",{id:"cloning"},"Cloning"),(0,a.kt)("admonition",{title:"attention",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Cloning alarms with specific external requirements to other cluster(s) may result in invalidated state alerts if those requirements are not met by the target cluster(s)")),(0,a.kt)("p",null,"As above, you can right click the alarm you want to clone, which will open a menu to select which\nclusters you want to clone to."),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(3297).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"You are allowed to clone to the same cluster, as well as clone any number of times to any cluster."),(0,a.kt)("h2",{id:"alarm-types"},"Alarm Types"),(0,a.kt)("h3",{id:"agent-disconnect"},"Agent Disconnect"),(0,a.kt)("p",null,"Alerts when an agent disconnects within the specified timeout."),(0,a.kt)("p",null,"By default, whenever an agent is bootstrapped, for example consider this agent :"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(1527).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"A matching agent disconnect condition is created with a 10 minute timeout."),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(4480).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You are free to edit or delete this default condition as you see fit.")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(4384).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cluster : agent this alarm applies to"),(0,a.kt)("li",{parentName:"ul"},"Timeout : how long this agent has been disconnect before firing an alarm")),(0,a.kt)("h4",{id:"recommended-options"},"Recommended Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Timeout : 10 or more minutes")),(0,a.kt)("h3",{id:"downstream-capability"},"Downstream Capability"),(0,a.kt)("p",null,"Alerts when an agent capability, e.g. Logging or Metrics, is in some unhealthy state for a certain amount of time."),(0,a.kt)("p",null,"By default when an agent is bootstrapped, a matching downstream capability alarm is created that will alert if ",(0,a.kt)("em",{parentName:"p"},"any")," unhealthy state is sustained over a period of 10 minutes."),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(8437).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You are free to edit or delete this default condition as you see fit.")),(0,a.kt)("h4",{id:"options-1"},"Options"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(4415).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cluster : cluster this applies to"),(0,a.kt)("li",{parentName:"ul"},"Duration : period after which we decide to fire an alaram"),(0,a.kt)("li",{parentName:"ul"},"One ore more capability states to track :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Failure")," : An agent capability is experiencing errors"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Pending")," : A setup step or sync operation is hanging")))),(0,a.kt)("h4",{id:"recommended-options-1"},"Recommended Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Duration : 10 or more minutes")),(0,a.kt)("h3",{id:"monitoring-backend"},"Monitoring Backend"),(0,a.kt)("admonition",{title:"attention",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Requires the monitoring backend to be installed")),(0,a.kt)("p",null,"Alerts when the specified monitoring backend components are in an unhealthy state over\nsome period of time"),(0,a.kt)("h4",{id:"options-2"},"Options"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(2370).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Duration : period after which we should fire an alarm if the specified backend components\nare unhealthy, recommended to be 10 minutes or more"),(0,a.kt)("li",{parentName:"ul"},"Backend components :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"store-gateway")," : responsible for persistent & remote storage, critical component."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"distributor")," : responsible for distributing remote writes to the ingester"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ingester")," : responsible for (persistent) buffering of incoming data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ruler")," : responsible for applying stored prometheus queries and prometheus alerts"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"purger")," : responsible for deleting cluster data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"compactor")," : responsible for buffer compaction before sending to persistent storage"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"query-frontend"),' : "api gateway" for the querier'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"querier")," : handles prometheus queries from the user")))),(0,a.kt)("h4",{id:"recommended-options-2"},"Recommended options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Duration : 10 minutes or more, but no more than 90 mins"),(0,a.kt)("li",{parentName:"ul"},"Backend Components :",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"track ",(0,a.kt)("inlineCode",{parentName:"li"},"store-gateway"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"distributor"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingester")," & ",(0,a.kt)("inlineCode",{parentName:"li"},"compactor")," as a high severity alarm"),(0,a.kt)("li",{parentName:"ol"},"track all components as a lesser severity alarm")))),(0,a.kt)("h3",{id:"prometheus-query"},"Prometheus Query"),(0,a.kt)("p",null,"Alerts when the given prometheus query evaluates to ",(0,a.kt)("b",null," True ")),(0,a.kt)("admonition",{title:"attention",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Requires the monitoring backend to be installed & one or more downstream agents\nto have the metrics capability.")),(0,a.kt)("h4",{id:"options-3"},"Options"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(1885).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The above query should always evaluate to true, and subsequently evaluate to firing.\nIt can be used to sanity check your downstream agents with metrics installed.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cluster : any cluster with an agent with metrics capabilities"),(0,a.kt)("li",{parentName:"ul"},"Duration : period after which we should fire an alert"),(0,a.kt)("li",{parentName:"ul"},"Query : any valid prometheus query")),(0,a.kt)("h3",{id:"kube-state"},"Kube State"),(0,a.kt)("admonition",{title:"attention",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Requires the monitoring backend to be installed and have one or more agents that have both\nmetrics capabilities and kube-state-metrics enabled.")),(0,a.kt)("p",null,"Alerts when the desired kubernetes object on the cluster is in the state specified by the user for a certain amount of time."),(0,a.kt)("h4",{id:"options-4"},"Options"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(7119).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The above configuration will alert if the opni gateway is in fact running for more than 5 minutes."),(0,a.kt)("p",{parentName:"admonition"},"It can be used to sanity check that your kube-state-metrics are working as intended.")),(0,a.kt)("h2",{id:"general-alarm-options"},"General Alarm Options"),(0,a.kt)("h3",{id:"attaching-endpoints-to-an-alarm"},"Attaching endpoint(s) to an Alarm"),(0,a.kt)("p",null,"Right click edit your condition, and navigate to the message options tab in the edit UI & click 'Add Endpoint'"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(5278).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"From here you can add a list of your configured endpoints to your alarm:"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(6663).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"You must specify Message options for the contents & dispatching configuration to your endpoint :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Title : header for your particular endpoint"),(0,a.kt)("li",{parentName:"ul"},"Body : content of the message"),(0,a.kt)("li",{parentName:"ul"},"Initial Delay : time for backend to wait before sending alert"),(0,a.kt)("li",{parentName:"ul"},"Repeat interval : how often to repeat the alert when it fires"),(0,a.kt)("li",{parentName:"ul"},"Throttling duration : Throttle (delay) all alerts received from the same source by X minutes")),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(7454).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Based on the implementation details above, once we hit 'Save' and our downstream agent has disconnected for > 10mins, you will receive an alert:"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(6913).Z,alt:"Alerting configuration"})),(0,a.kt)("h3",{id:"silencing-an-alarm"},"Silencing an Alarm"),(0,a.kt)("p",null,"If operators with to silence a firing alarm, which will cause the alarm to no longer send any notifications to endpoints, then consider :"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(746).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"They can do so by right clicking edit and navigating to the silence tab:"),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(746).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Once the alarm is silenced, operators can always un-silence it by clicking the resume now."),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(6370).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Tada! the alarm is silenced."),(0,a.kt)("div",{className:"image-border"},(0,a.kt)("img",{src:n(5757).Z,alt:"Alerting configuration"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can silence alarms that are not in the firing state, and they will prevent any notifications from\nbeing sent to endpoints if that alarm does enter the firing state")))}c.isMDXComponent=!0},6663:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/CRUD-condition-4705465f2367d510aab9ae9257a602ec.png"},5278:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/add-endpoint-055e3a1c6fae6dbbff03fe2a193dd21d.png"},4384:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/agent-disconnect-options-4e4449b5edc4c139ad1d4747aaefe92f.png"},7454:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/attach-endpoint-4dec5b5246467bcd1bdd1ce014c5dc35.png"},3297:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/clone-menu-ca4b6169e6b4382c03ab2186dafae577.png"},1527:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/default-agent-06ea489c3300e219488eb62286bb9e49.png"},4480:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/default-disconnect-alarm-f74f7a969208f9299f6813100f3b1f4d.png"},4415:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/downstream-capability-alarm-options-ed029ac01593b28fdc6f5d4bf64c5aaa.png"},8437:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/downstream-capability-alarm-a7bf37ee826f176ba9fb2e6c376d1ed8.png"},749:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/edit-cbb3f8319e34449fe2f82cae14cbb562.png"},5152:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/email-configure-5112d45406ea66971381824fb76b340b.png"},5470:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/endpoints-7a5e06b7e13d39ae560cbf77e732a49b.png"},746:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/example-firing-edfefe4d48f30d082e55f90f3f24402c.png"},7119:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/kube-state-options-48b8cba51bf243b750ebbefdec20ef95.png"},2370:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/monitoring-backend-alarm-options-c666aaf70c22f625fe11b26eb2786c7c.png"},102:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pager-duty-1a02cbbe9717c4c64bf833722802fbcd.png"},1885:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/prometheus-query-options-ceaf1b8217c9d93ee358756bff3394dc.png"},6370:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/resume-silence-6408475ea79049ae886b84ec8b6fab22.png"},5757:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/silenced-alarm-83e80f8ba598e74d61794b16557fd692.png"},6913:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/slack-alarm-9a045b899dbedeea904ce2b20b19577e.png"},6891:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/slack-configure-687684790ef0f0120f3b2cba42c190c7.png"},8234:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/slack-example-message-bf48837e2debb7db8c2c6244fc7c3803.png"},4707:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/timeline-cd03868b7a1133001f0e7c9af33aec69.png"}}]);