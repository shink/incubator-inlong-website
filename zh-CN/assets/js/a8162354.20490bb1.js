"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[120],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26506:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"MySQL SQL",sidebar_position:3},s=void 0,c={unversionedId:"modules/agent/sql",id:"version-1.0.0/modules/agent/sql",title:"MySQL SQL",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.0/modules/agent/sql.md",sourceDirName:"modules/agent",slug:"/modules/agent/sql",permalink:"/zh-CN/docs/modules/agent/sql",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.0.0/modules/agent/sql.md",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{title:"MySQL SQL",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6587\u4ef6",permalink:"/zh-CN/docs/modules/agent/file"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/dataproxy/overview"}},u={},p=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"MySQL Job\u521b\u5efa\u6b65\u9aa4",id:"mysql-job\u521b\u5efa\u6b65\u9aa4",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u4e3e\u4f8b",id:"\u4e3e\u4f8b",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,a.kt)("p",null,"\u76ee\u524d Agent \u652f\u6301 MySQL \u7248\u672c\u4e3a5.1.x , 5.5.x , 5.6.x , 5.7.x , 8.0.x\n\u76ee\u524d Agent \u53ea\u652f\u6301 curl \u8bf7\u6c42\u521b\u5efa Job \u65b9\u5f0f\u63d0\u4ea4\u91c7\u96c6\u4efb\u52a1\uff0c\u6682\u65f6\u4e0d\u652f\u6301 manager \u524d\u7aef\u521b\u5efa SQL \u91c7\u96c6"),(0,a.kt)("h2",{id:"mysql-job\u521b\u5efa\u6b65\u9aa4"},"MySQL Job\u521b\u5efa\u6b65\u9aa4"),(0,a.kt)("p",null,'1\u3001\u5728 manager \u4e0a\u7533\u8bf7\u63a5\u5165\uff0c\u586b\u5199\u6570\u636e\u4fe1\u606f\u65f6\uff0c\u9009\u62e9\u6d88\u606f\u6765\u6e90\u4e3a"\u81ea\u4e3b\u63a8\u9001"\n2\u3001\u9009\u62e9\u6e90\u6570\u636e\u5b57\u6bb5\u5206\u9694\u7b26\n3\u3001\u586b\u5199\u6e90\u6570\u636e\u5b57\u6bb5\uff0c\u5b57\u6bb5\u987a\u5e8f\u4e0e sql \u67e5\u8be2\u7ed3\u679c\u4e2d\u7684\u5b57\u6bb5\u987a\u5e8f\u4fdd\u6301\u4e00\u81f4\n4\u3001\u4f7f\u7528 curl \u8bf7\u6c42\u521b\u5efa\u4e00\u4e2a SQL \u8bfb\u53d6\u4efb\u52a1'),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SQL Agent Job \u4e2d\u5404\u4e2a\u4f7f\u7528\u53c2\u6570\u8bf4\u660e\u4e3a\n1\u3001job.sql.command: \u5b9e\u9645\u6267\u884c\u7684 sql \u8bed\u53e5\uff0c\u4e3e\u4f8b: select * from apache_inlong_manager.user\n2\u3001job.sql.user: \u8fde\u63a5\u6570\u636e\u5e93\u65f6\u4f7f\u7528\u7684 user\uff0c\u4e3e\u4f8b: abc\n3\u3001job.sql.password: \u8fde\u63a5\u6570\u636e\u5e93\u65f6\u4f7f\u7528\u7684 password, \u4e3e\u4f8b: 123456\n4\u3001job.sql.hostname: \u8fde\u63a5\u7684\u6570\u636e\u5e93 ip \u5730\u5740\uff0c\u4e3e\u4f8b\uff1a127.0.0.1\n5\u3001job.sql.port\uff1a\u8fde\u63a5\u7684\u6570\u636e\u5e93\u7aef\u53e3\uff0c\u4e3e\u4f8b\uff1a3306\n6\u3001job.sql.separator: \u4f7f\u7528\u7684\u5206\u5272\u7b26\u6765\u5206\u5272\u591a\u4e2a\u5b57\u6bb5\uff0c\u9700\u8981\u4e0e manager \u524d\u7aef\n")),(0,a.kt)("h2",{id:"\u4e3e\u4f8b"},"\u4e3e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:8008/config/job\' \\--header \'Content-Type: application/json\' \\--data \'{\n  "job": {\n    "sql": {\n      "command": "select * from apache_inlong_manager.user",\n      "user":  "root",\n      "password": "inlong",\n      "hostname": "10.0.0.6",\n      "port": "3306",\n      "separator": "|"\n    },\n    "id": 1,\n    "thread": {\n      "running": {\n        "core": "4"\n      }\n    },\n    "name": "test",\n    "source": "org.apache.inlong.agent.plugin.sources.DataBaseSource",\n    "sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n    "channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n  },\n  "proxy": {\n    "inlongGroupId": "b_test_tube_hive_20211221_01",\n    "inlongStreamId": "test_data_stream_20211221_01_01"\n  },\n  "op": "add"\n}\n\'\n')))}m.isMDXComponent=!0}}]);