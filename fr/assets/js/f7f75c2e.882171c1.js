"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[84784],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(a),m=n,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(k,p(p({ref:t},s),{},{components:a})):r.createElement(k,p({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var i=2;i<o;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},32077:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={title:"progres@1.1.0",id:"progres-docs",keywords:["adaptor","progres","postData"]},p=void 0,l={unversionedId:"packages/progres-docs",id:"packages/progres-docs",title:"progres@1.1.0",description:"Adaptor",source:"@site/adaptors/packages/progres-docs.md",sourceDirName:"packages",slug:"/packages/progres-docs",permalink:"/fr/adaptors/packages/progres-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"progres@1.1.0",id:"progres-docs",keywords:["adaptor","progres","postData"]},sidebar:"library",previous:{title:"primero developer readme",permalink:"/fr/adaptors/packages/primero-readme"},next:{title:"progres changelog",permalink:"/fr/adaptors/packages/progres-changelog"}},c={},i=[{value:"Adaptor",id:"adaptor",level:2},{value:"Adaptor.execute",id:"adaptorexecute",level:3},{value:"new exports.execute(operations)",id:"new-exportsexecuteoperations",level:4},{value:"Adaptor.postData(params, callback) \u21d2 <code>Operation</code>",id:"adaptorpostdataparams-callback--operation",level:3}],s={toc:i};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"module_Adaptor"}),(0,n.kt)("h2",{id:"adaptor"},"Adaptor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor"},"Adaptor"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.execute"},".execute"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_Adaptor.execute_new"},"new exports.execute(operations)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.postData"},".postData(params, callback)")," \u21d2 ",(0,n.kt)("code",null,"Operation"))))),(0,n.kt)("a",{name:"module_Adaptor.execute"}),(0,n.kt)("h3",{id:"adaptorexecute"},"Adaptor.execute"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),"  "),(0,n.kt)("a",{name:"new_module_Adaptor.execute_new"}),(0,n.kt)("h4",{id:"new-exportsexecuteoperations"},"new exports.execute(operations)"),(0,n.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,n.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for http."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operations"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Operations")),(0,n.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,n.kt)("a",{name:"module_Adaptor.postData"}),(0,n.kt)("h3",{id:"adaptorpostdataparams-callback--operation"},"Adaptor.postData(params, callback) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Make a POST request with a certificate"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"Url, Headers and Body parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) A callback function")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"postData({\n url: urlDTP,\n body: obj,\n headers: {\n   'Ocp-Apim-Subscription-Key': configuration['Ocp-Apim-Subscription-Key'],\n },\n agentOptions: {\n   key,\n   cert,\n },\n}, callback)(state)\n")))}d.isMDXComponent=!0}}]);