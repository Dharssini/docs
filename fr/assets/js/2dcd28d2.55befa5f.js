"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[31262],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),m=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=m(a),d=n,k=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return a?r.createElement(k,p(p({ref:e},s),{},{components:a})):r.createElement(k,p({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=d;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[c]="string"==typeof t?t:n,p[1]=o;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3925:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"mailchimp@0.3.4",id:"mailchimp-docs",keywords:["adaptor","mailchimp"]},p=void 0,o={unversionedId:"packages/mailchimp-docs",id:"packages/mailchimp-docs",title:"mailchimp@0.3.4",description:"Functions",source:"@site/adaptors/packages/mailchimp-docs.md",sourceDirName:"packages",slug:"/packages/mailchimp-docs",permalink:"/fr/adaptors/packages/mailchimp-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"mailchimp@0.3.4",id:"mailchimp-docs",keywords:["adaptor","mailchimp"]},sidebar:"adaptors",previous:{title:"magpi developer readme",permalink:"/fr/adaptors/packages/magpi-readme"},next:{title:"Config for mailchimp",permalink:"/fr/adaptors/packages/mailchimp-configuration-schema"}},i={},m=[{value:"Functions",id:"functions",level:2},{value:"upsertMembers(params) \u21d2 <code>Operation</code>",id:"upsertmembersparams--operation",level:2},{value:"tagMembers(params) \u21d2 <code>Operation</code>",id:"tagmembersparams--operation",level:2},{value:"startBatch(params) \u21d2 <code>Operation</code>",id:"startbatchparams--operation",level:2}],s={toc:m},c="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#upsertMembers"},"upsertMembers(params)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Add members to a particular audience")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#tagMembers"},"tagMembers(params)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Tag members with a particular tag")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#startBatch"},"startBatch(params)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Start a batch with a list of operations."))),(0,n.kt)("a",{name:"upsertMembers"}),(0,n.kt)("h2",{id:"upsertmembersparams--operation"},"upsertMembers(params) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Add members to a particular audience"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"a listId, users, and options")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"upsertMembers(params)\n")),(0,n.kt)("a",{name:"tagMembers"}),(0,n.kt)("h2",{id:"tagmembersparams--operation"},"tagMembers(params) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Tag members with a particular tag"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"a tagId, members, and a list")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"tagMembers(params)\n")),(0,n.kt)("a",{name:"startBatch"}),(0,n.kt)("h2",{id:"startbatchparams--operation"},"startBatch(params) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Start a batch with a list of operations."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"operations batch job")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"startBatch(params)\n")))}u.isMDXComponent=!0}}]);