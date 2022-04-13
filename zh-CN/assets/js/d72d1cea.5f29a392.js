"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5805],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81778:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],u={title:"\u5b89\u88c5\u90e8\u7f72"},o=void 0,s={unversionedId:"modules/audit/quick_start",id:"modules/audit/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 inlong-audit \u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u4f7f\u7528 MySQL \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7sql/apacheinlongaudit.sql\u521d\u59cb\u5316\u6570\u636e\u5e93\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/audit/quick_start.md",sourceDirName:"modules/audit",slug:"/modules/audit/quick_start",permalink:"/zh-CN/docs/next/modules/audit/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/audit/quick_start.md",tags:[],version:"current",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/audit/overview"},next:{title:"\u793a\u4f8b",permalink:"/zh-CN/docs/next/sdk/dataproxy-sdk/example"}},p={},c=[{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Audit Proxy",id:"audit-proxy",level:2},{value:"\u914d\u7f6e\u6d88\u606f\u961f\u5217",id:"\u914d\u7f6e\u6d88\u606f\u961f\u5217",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"Audit Store",id:"audit-store",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56-1",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8-1",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"inlong-audit")," \u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u4f7f\u7528 MySQL \u5b58\u50a8\u5ba1\u8ba1\u6570\u636e\uff0c\u9700\u8981\u5148\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_audit.sql"),"\u521d\u59cb\u5316\u6570\u636e\u5e93\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521d\u59cb\u5316 database\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_audit.sql\n")),(0,l.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,l.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar"),", \u5e76\u5c06\u5176\u653e\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,l.kt)("h2",{id:"audit-proxy"},"Audit Proxy"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u6d88\u606f\u961f\u5217"},"\u914d\u7f6e\u6d88\u606f\u961f\u5217"),(0,l.kt)("p",null,"\u6d88\u606f\u961f\u5217\u670d\u52a1\u76ee\u524d\u53ef\u4ee5\u4f7f\u7528Apache Pulsar\u6216\u8005InLong TubeMQ\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528Pulsar\uff0c\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-pulsar.conf"),"\uff0c\u4fee\u6539\u4e0b\u5217\u914d\u7f6e\u4e2d\u7684 Pulsar service \u5730\u5740\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sources.tcp-source.port = 10081\nagent1.sinks.pulsar-sink-msg1.pulsar_server_url= pulsar://localhost:6650\nagent1.sinks.pulsar-sink-msg1.topic = persistent://public/default/inlong-audit\nagent1.sinks.pulsar-sink-msg2.pulsar_server_url = pulsar://localhost:6650\nagent1.sinks.pulsar-sink-msg2.topic = persistent://public/default/inlong-audit\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528TubeMQ\uff0c\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},"conf/audit-proxy-tube.conf"),"\uff0c\u4fee\u6539\u4e0b\u5217\u914d\u7f6e\u4e2d\u7684 TubeMQ master \u5730\u5740\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"agent1.sources.tcp-source.port = 10081\nagent1.sinks.tube-sink-msg1.master-host-port-list = localhost:8715\nagent1.sinks.tube-sink-msg1.topic = inlong-audit\nagent1.sinks.tube-sink-msg2.master-host-port-list = localhost:8715\nagent1.sinks.tube-sink-msg2.topic = inlong-audit\n")),(0,l.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"# \u9ed8\u8ba4\u4f7f\u7528 pulsar \u4f5c\u4e3a\u6d88\u606f\u961f\u5217\uff0c\u52a0\u8f7d audit-proxy-pulsar.conf \u914d\u7f6e\u6587\u4ef6\nbash +x ./bin/proxy-start.sh [pulsar\uff5ctube]\n")),(0,l.kt)("h2",{id:"audit-store"},"Audit Store"),(0,l.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/application.properties")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"# proxy.type: pulsar / tube\naudit.config.proxy.type=pulsar\n\n# store.server: mysql / elasticsearch \naudit.config.store.mode=mysql\n\n# audit pulsar config (optional)\uff0c\u5c06PULSAR_BROKER_LIST\u66ff\u6362\u4e3aPulsar\u96c6\u7fa4\u7684\u670d\u52a1\u5730\u5740\naudit.pulsar.server.url=pulsar://PULSAR_BROKER_LIST\naudit.pulsar.topic=persistent://public/default/inlong-audit\naudit.pulsar.consumer.sub.name=sub-audit\n\n# audit tube config (optional)\uff0c\u5c06TUBE_LIST\u66ff\u6362\u4e3aTubeMQ\u96c6\u7fa4\u7684master\u5730\u5740\naudit.tube.masterlist=TUBE_LIST\naudit.tube.topic=inlong-audit\naudit.tube.consumer.group.name=inlong-audit-consumer\n\n# mysql\nspring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/apache_inlong_audit?characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2b8&rewriteBatchedStatements=true&allowMultiQueries=true&zeroDateTimeBehavior=CONVERT_TO_NULL\nspring.datasource.druid.username=root\nspring.datasource.druid.password=inlong\n")),(0,l.kt)("h3",{id:"\u4f9d\u8d56-1"},"\u4f9d\u8d56"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,l.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.26/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar"),", \u5e76\u5c06\u5176\u653e\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"lib/")," \u76ee\u5f55\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,l.kt)("h3",{id:"\u542f\u52a8-1"},"\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"bash +x ./bin/store-start.sh\n")),(0,l.kt)("p",null,"Audit Proxy \u9ed8\u8ba4\u76d1\u542c\u7aef\u53e3\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"10081"),"\u3002"))}m.isMDXComponent=!0}}]);