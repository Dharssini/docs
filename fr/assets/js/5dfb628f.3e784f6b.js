"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[12573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={title:"nexmo@0.1.1",id:"nexmo-docs",keywords:["adaptor","nexmo","sendSMS"]},l=void 0,p={unversionedId:"packages/nexmo-docs",id:"packages/nexmo-docs",title:"nexmo@0.1.1",description:"Functions",source:"@site/adaptors/packages/nexmo-docs.md",sourceDirName:"packages",slug:"/packages/nexmo-docs",permalink:"/fr/adaptors/packages/nexmo-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"nexmo@0.1.1",id:"nexmo-docs",keywords:["adaptor","nexmo","sendSMS"]},sidebar:"adaptors",previous:{title:"mysql developer readme",permalink:"/fr/adaptors/packages/mysql-readme"},next:{title:"nexmo changelog",permalink:"/fr/adaptors/packages/nexmo-changelog"}},s={},i=[{value:"Functions",id:"functions",level:2},{value:"execute(operations) \u21d2 <code>Operation</code>",id:"executeoperations--operation",level:2},{value:"sendSMS(from, toNumber, message) \u21d2 <code>Operation</code>",id:"sendsmsfrom-tonumber-message--operation",level:2}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#execute"},"execute(operations)")," \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Execute a sequence of operations. Wraps ",(0,a.kt)("code",null,"@openfn/language-common/execute"),", and prepends initial state for http.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#sendSMS"},"sendSMS(from, toNumber, message)")," \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Sends an SMS message to a specific phone number"))),(0,a.kt)("a",{name:"execute"}),(0,a.kt)("h2",{id:"executeoperations--operation"},"execute(operations) \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,a.kt)("inlineCode",{parentName:"p"},"@openfn/language-common/execute"),", and prepends initial state for http."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operations"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Operations")),(0,a.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,a.kt)("a",{name:"sendSMS"}),(0,a.kt)("h2",{id:"sendsmsfrom-tonumber-message--operation"},"sendSMS(from, toNumber, message) \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("p",null,"Sends an SMS message to a specific phone number"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"from"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Name or number the message should be sent from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toNumber"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Destination phone number.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Text message")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'sendSMS("OpenFn", "phoneNumber", "Hello World!")\n')))}u.isMDXComponent=!0}}]);