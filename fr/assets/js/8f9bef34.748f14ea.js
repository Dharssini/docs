(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7842],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61126:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Platform"},p={unversionedId:"deploy/platform",id:"deploy/platform",isDocsHomePage:!1,title:"Platform",description:"Introduction",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/deploy/platform.md",sourceDirName:"deploy",slug:"/deploy/platform",permalink:"/fr/documentation/deploy/platform",editUrl:"https://github.com/openfn/docs/edit/main/docs/deploy/platform.md",version:"current",frontMatter:{title:"Platform"},sidebar:"docs",previous:{title:"Portabilit\xe9",permalink:"/fr/documentation/portability"},next:{title:"Microservice",permalink:"/fr/documentation/microservice/home"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Considerations for platform deployments",id:"considerations-for-platform-deployments",children:[{value:"Compliance",id:"compliance",children:[]},{value:"Trust",id:"trust",children:[]}]}],l={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The OpenFn integration platform provides a flexible, scalable, and secure infrastructure to connect your existing systems, streamline data sharing, and automate workflows."),(0,a.kt)("p",null,"Standard pricing information can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/pricing"},"https://openfn.org/pricing"),", but feel free to contact an OpenFn implementation specialist at ",(0,a.kt)("a",{parentName:"p",href:"mailto:enterpise@openfn.org"},"enterpise@openfn.org")," for enterprise SaaS options that match your model and needs."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you're building on ",(0,a.kt)("strong",{parentName:"p"},"OpenFn/platform"),", you can simply scale up or down your project at any time from the project settings page."))),(0,a.kt)("h2",{id:"considerations-for-platform-deployments"},"Considerations for platform deployments"),(0,a.kt)("h3",{id:"compliance"},"Compliance"),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://www.openfn.org/compliance"},"https://www.openfn.org/compliance")," for an overview of how to consider OpenFn and the GDPR."),(0,a.kt)("h3",{id:"trust"},"Trust"),(0,a.kt)("p",null,"Learn more about S3, how OpenFn manages security, stability, and scalability at ",(0,a.kt)("a",{parentName:"p",href:"https://www.openfn.org/trust"},"https://www.openfn.org/trust")))}s.isMDXComponent=!0}}]);