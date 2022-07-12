"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5818],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||c[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],p={title:"BambooHR"},l=void 0,u={unversionedId:"apps/bamboohr",id:"apps/bamboohr",title:"BambooHR",description:"Overview",source:"@site/docs/apps/bamboohr.md",sourceDirName:"apps",slug:"/apps/bamboohr",permalink:"/documentation/apps/bamboohr",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/bamboohr.md",tags:[],version:"current",frontMatter:{title:"BambooHR"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Integration Use Cases",id:"integration-use-cases",level:3},{value:"Further Reading:",id:"further-reading",level:3},{value:"Integration Options",id:"integration-options",level:2},{value:"OpenFn Adaptor",id:"openfn-adaptor",level:2},{value:"Integration Examples",id:"integration-examples",level:2}],f={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"BambooHR is..."),(0,a.kt)("h3",{id:"integration-use-cases"},"Integration Use Cases"),(0,a.kt)("p",null,"Example user stories..."),(0,a.kt)("h3",{id:"further-reading"},"Further Reading:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Links...")),(0,a.kt)("h2",{id:"integration-options"},"Integration Options"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Data integration via BambooHR Web API - link: ....")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Webhook service to push data to OpenFn endpoint - link: ... Notes about\nwebhook setup..."))),(0,a.kt)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),(0,a.kt)("p",null,"Currently there is no tool-specific adaptor, so ",(0,a.kt)("inlineCode",{parentName:"p"},"language-http")," can be\nimplemented to integrate via HTTP requests to the web API."),(0,a.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,a.kt)("p",null,"Links to sample jobs/ code snippets..."))}m.isMDXComponent=!0}}]);