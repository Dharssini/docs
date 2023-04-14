"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3112],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=u(a),s=r,k=c["".concat(i,".").concat(s)]||c[s]||m[s]||l;return a?n.createElement(k,o(o({ref:e},d),{},{components:a})):n.createElement(k,o({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[c]="string"==typeof t?t:r,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6028:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"mogli@0.3.3",id:"mogli-docs",keywords:["adaptor","mogli"]},o=void 0,p={unversionedId:"packages/mogli-docs",id:"packages/mogli-docs",title:"mogli@0.3.3",description:"Functions",source:"@site/adaptors/packages/mogli-docs.md",sourceDirName:"packages",slug:"/packages/mogli-docs",permalink:"/adaptors/packages/mogli-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"mogli@0.3.3",id:"mogli-docs",keywords:["adaptor","mogli"]},sidebar:"adaptors",previous:{title:"medicmobile developer readme",permalink:"/adaptors/packages/medicmobile-readme"},next:{title:"Config for mogli",permalink:"/adaptors/packages/mogli-configuration-schema"}},i={},u=[{value:"Functions",id:"functions",level:2},{value:"cleanupState",id:"cleanupstate",level:2},{value:"lookup",id:"lookup",level:2},{value:"relationship",id:"relationship",level:2}],d={toc:u},c="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#cleanupState"},"cleanupState(state)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#lookup"},"lookup(relationshipName, externalID, path)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#relationship"},"relationship(relationshipName, externalID, dataSource)"))),(0,r.kt)("h2",{id:"cleanupstate"},"cleanupState"),(0,r.kt)("p",null,"cleanupState(state) \u21d2 ",(0,r.kt)("code",null,"State"),"\nRemoves unserializable keys from the state."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"State"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"lookup"},"lookup"),(0,r.kt)("p",null,"lookup(relationshipName, externalID, path) \u21d2 ",(0,r.kt)("code",null,"object"),"\nAdds a lookup or 'dome insert' to a record."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relationshipName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"__r")," relationship field on the record.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"externalID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Salesforce ExternalID field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"JSONPath to data source.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Example)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'lookup("relationship_name__r", "externalID on related object", "$.path")\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"relationship"},"relationship"),(0,r.kt)("p",null,"relationship(relationshipName, externalID, dataSource) \u21d2 ",(0,r.kt)("code",null,"object"),"\nAdds a lookup or 'dome insert' to a record."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relationshipName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"__r")," relationship field on the record.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"externalID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Salesforce ExternalID field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"resolvable source.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Data Sourced Value)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'relationship("relationship_name__r", "externalID on related object", dataSource("path"))\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Fixed Value)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'relationship("relationship_name__r", "externalID on related object", "hello world")\n')),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);