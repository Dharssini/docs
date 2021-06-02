(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4143],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,y=f["".concat(i,".").concat(m)]||f[m]||l[m]||a;return n?r.createElement(y,u(u({ref:t},p),{},{components:n})):r.createElement(y,u({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2793:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return i},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),u={title:"SurveyCTO"},c={unversionedId:"apps/survey-cto",id:"apps/survey-cto",isDocsHomePage:!1,title:"SurveyCTO",description:"SurveyCTO is not able to push data to external URLs. In order to fetch data from SurveyCTO, you must run a job on a using language-surveycto:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/survey-cto.md",sourceDirName:"apps",slug:"/apps/survey-cto",permalink:"/fr/documentation/apps/survey-cto",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/survey-cto.md",version:"current",frontMatter:{title:"SurveyCTO"},sidebar:"docs",previous:{title:"Salesforce",permalink:"/fr/documentation/apps/salesforce"},next:{title:"Tableau",permalink:"/fr/documentation/apps/tableau"}},i=[],s={toc:i};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SurveyCTO is not able to push data to external URLs. In order to fetch data from SurveyCTO, you must run a job on a using ",(0,a.kt)("inlineCode",{parentName:"p"},"language-surveycto"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fetchSubmissions(\n  'form_id', // the form id\n  'Sep 1, 2016 3:56:02 PM', // the initial \"after\" date\n  // after the first run, OpenFn will only fetch new submissions\n  'https://www.openfn.org/inbox/something-secret' // the inbox to post form data to.\n);\n")),(0,a.kt)("p",null,"Every time this job runs it will only fetch new data, by default."))}p.isMDXComponent=!0}}]);