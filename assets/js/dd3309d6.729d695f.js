"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8593],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,g=c["".concat(u,".").concat(s)]||c[s]||m[s]||l;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Bare Metal",sidebar_position:4},u=void 0,p={unversionedId:"deployment/bare_metal",id:"deployment/bare_metal",title:"Bare Metal",description:"Environment Requirements",source:"@site/docs/deployment/bare_metal.md",sourceDirName:"deployment",slug:"/deployment/bare_metal",permalink:"/docs/next/deployment/bare_metal",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/deployment/bare_metal.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Bare Metal",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/next/deployment/k8s"},next:{title:"Overview",permalink:"/docs/next/modules/agent/overview"}},d={},m=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Prepare Message Queue",id:"prepare-message-queue",level:2},{value:"Download the Binary Package",id:"download-the-binary-package",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Create Data Stream",id:"create-data-stream",level:2}],c={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,l.kt)("li",{parentName:"ul"},"Flink 1.13.5")),(0,l.kt)("h2",{id:"prepare-message-queue"},"Prepare Message Queue"),(0,l.kt)("p",null,"InLong Support the following Message Queue services now, you can choose one of them."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/modules/tubemq/quick_start"},"InLong TubeMQ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/2.8.1/standalone/"},"Apache Pulsar 2.8.x"))),(0,l.kt)("h2",{id:"download-the-binary-package"},"Download the Binary Package"),(0,l.kt)("p",null,"You can get binary package from ",(0,l.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download/main/"},"Download Page")," ,or you can build the InLong refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/quick_start/how_to_build"},"How to Build"),".\u3002"),(0,l.kt)("h2",{id:"deploy"},"Deploy"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"order"),(0,l.kt)("th",{parentName:"tr",align:null},"component"),(0,l.kt)("th",{parentName:"tr",align:null},"dependencies"),(0,l.kt)("th",{parentName:"tr",align:null},"deploy guide"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-audit"),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL or Elasticsearch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/modules/audit/quick_start"},"InLong Audit")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-manager"),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/modules/manager/quick_start"},"InLong Manager")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-dataproxy"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/modules/dataproxy/quick_start"},"InLong DataProxy")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-agent"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/modules/agent/quick_start"},"InLong Agent")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-dashboard"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx or Docker"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/modules/dashboard/quick_start"},"InLong Dashboard")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"create-data-stream"},"Create Data Stream"),(0,l.kt)("p",null,"After the InLong cluster deployed successfully, you can create a data stream refer to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/user_guide/user_manual"},"user manual")," to start using."))}s.isMDXComponent=!0}}]);