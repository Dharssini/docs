"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[56080],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>m});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(45072),a=(n(11504),n(95788));const o={title:"What's an operation?"},i=void 0,p={unversionedId:"build-for-developers/operations",id:"build-for-developers/operations",title:"What's an operation?",description:"An Operation is a function which returns a function which takes state and",source:"@site/docs/build-for-developers/operations.md",sourceDirName:"build-for-developers",slug:"/build-for-developers/operations",permalink:"/documentation/next/build-for-developers/operations",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build-for-developers/operations.md",tags:[],version:"current",frontMatter:{title:"What's an operation?"}},l={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"An Operation is a function which returns a function which takes ",(0,a.yg)("inlineCode",{parentName:"p"},"state")," and\nreturns a ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"state"),"."),(0,a.yg)("p",null,"The purpose of an Operation is to act as an unresolved unit of behaviour."),(0,a.yg)("p",null,"For example, when creating an expression - the code itself doesn't know what the\nstate is going to be, only what ",(0,a.yg)("em",{parentName:"p"},"it's going to do"),"."),(0,a.yg)("p",null,"Language packs all follow this convention, where the functions that are provided\nall return Operations."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"create('My_Custom_Object__c', {\n  Custom_Field__c: dataValue('foo'),\n});\n")),(0,a.yg)("p",null,"In the snippet above, the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," function doesn't know anything about\ncredentials, or any dynamic data that you may be available at runtime."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"function create(objectName, data) {\n  return function (state) {\n    // expand the data argument using state\n    // actually do the work\n  };\n}\n")),(0,a.yg)("p",null,"In this snippet is a simple example of what most functions in OpenFn look like.\nThe ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," function returns a function that takes state, this is an\n",(0,a.yg)("inlineCode",{parentName:"p"},"Operation"),". The runtime using ",(0,a.yg)("inlineCode",{parentName:"p"},"execute")," will call all Operations with ",(0,a.yg)("inlineCode",{parentName:"p"},"state"),"."))}d.isMDXComponent=!0}}]);