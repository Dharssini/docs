(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4089],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38185:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"What's an operation?"},s={unversionedId:"jobs/operations",id:"jobs/operations",isDocsHomePage:!1,title:"What's an operation?",description:"An Operation is a function which returns a function which takes state and",source:"@site/docs/jobs/operations.md",sourceDirName:"jobs",slug:"/jobs/operations",permalink:"/documentation/jobs/operations",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/operations.md",version:"current",frontMatter:{title:"What's an operation?"},sidebar:"docs",previous:{title:"A closer look at jobs",permalink:"/documentation/jobs/understanding"},next:{title:"Using multiple operations",permalink:"/documentation/jobs/multiple-operations"}},c=[],p={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An Operation is a function which returns a function which takes ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," and\nreturns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"."),(0,a.kt)("p",null,"The purpose of an Operation is to act as an unresolved unit of behaviour."),(0,a.kt)("p",null,"For example, when creating an expression - the code itself doesn't know what the\nstate is going to be, only what ",(0,a.kt)("em",{parentName:"p"},"it's going to do"),"."),(0,a.kt)("p",null,"Language packs all follow this convention, where the functions that are provided\nall return Operations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"create('My_Custom_Object__c', {\n  Custom_Field__c: dataValue('foo'),\n});\n")),(0,a.kt)("p",null,"In the snippet above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," function doesn't know anything about\ncredentials, or any dynamic data that you may be available at runtime."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function create(objectName, data) {\n  return function (state) {\n    // expand the data argument using state\n    // actually do the work\n  };\n}\n")),(0,a.kt)("p",null,"In this snippet is a simple example of what most functions in OpenFn look like.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," function returns a function that takes state, this is an\n",(0,a.kt)("inlineCode",{parentName:"p"},"Operation"),". The runtime using ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," will call all Operations with ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"."))}l.isMDXComponent=!0}}]);