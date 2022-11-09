"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"adaptors-intro",title:"Adaptors",sidebar_label:"Introduction",slug:"/"},i=void 0,p={unversionedId:"adaptors-intro",id:"adaptors-intro",title:"Adaptors",description:"An adaptor is an open-source Javascript or Typescript module that provides",source:"@site/adaptors/intro.md",sourceDirName:".",slug:"/",permalink:"/fr/adaptors/",draft:!1,tags:[],version:"current",frontMatter:{id:"adaptors-intro",title:"Adaptors",sidebar_label:"Introduction",slug:"/"},sidebar:"library",next:{title:"asana",permalink:"/fr/adaptors/packages/asana-docs"}},l={},s=[{value:"Where to find them?",id:"where-to-find-them",level:2},{value:"On GitHub",id:"on-github",level:3},{value:"On platform",id:"on-platform",level:3},{value:"Via npm",id:"via-npm",level:3},{value:"Install on platform via npm",id:"install-on-platform-via-npm",level:4},{value:"Building and extending adaptors",id:"building-and-extending-adaptors",level:2}],d={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'An adaptor is an open-source Javascript or Typescript module that provides\nOpenFn users with a clean set of helper functions that help communicate with a\nspecific external system. In the past, we often referred to them as "language\npackages" and the two terms are sometimes used interchangeably, but the\npreferred way of communicating about adaptors is as follows:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"What ',(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"adaptor")),' is that job using?" ("That job is using\n',(0,r.kt)("inlineCode",{parentName:"li"},"language-dhis2"),'.")'),(0,r.kt)("li",{parentName:"ul"},'"The DHIS2 ',(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"adaptor"))," is called ",(0,r.kt)("inlineCode",{parentName:"li"},"language-dhis2"),'."'),(0,r.kt)("li",{parentName:"ul"},"\"I don't have the right ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"adaptor"))," for this job, let me install it by\nrunning ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install @openfn/language-dhis2"),".")),(0,r.kt)("p",null,"In short, ",(0,r.kt)("em",{parentName:"p"},"most")," adaptors follow the naming convention ",(0,r.kt)("inlineCode",{parentName:"p"},"@openfn/language-xyz"),",\nbut not all do!"),(0,r.kt)("h2",{id:"where-to-find-them"},"Where to find them?"),(0,r.kt)("h3",{id:"on-github"},"On GitHub"),(0,r.kt)("p",null,"Source code for adaptors can be found in GitHub under\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"github.com/OpenFn/adaptors"),", inside the\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," directory. Some examples are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/adaptors/tree/main/packages/http"},"http")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/adaptors/tree/main/packages/postgresql"},"postgresql")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/adaptors/tree/main/packages/primero"},"primero"))),(0,r.kt)("h3",{id:"on-platform"},"On platform"),(0,r.kt)("p",null,'When creating or editing a job on platform, you can choose the adaptor to run\nthe job. This way you "import" the needed operations. Simply open the dropdown\nlist of adaptors, and click on one.'),(0,r.kt)("img",{src:"/img/adaptor_choice_openfn.png",width:"300"}),(0,r.kt)("h3",{id:"via-npm"},"Via npm"),(0,r.kt)("p",null,"Most of our adaptors are also available on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40openfn"},"npmjs"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adaptors list in npm",src:n(57361).Z,width:"2766",height:"1266"})),(0,r.kt)("h4",{id:"install-on-platform-via-npm"},"Install on platform via npm"),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),", you can install adaptors that are not part of the\nrecommended adaptors picklist directly from\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40openfn"},"npm"),"."),(0,r.kt)("p",null,"To install from npm, click on the ",(0,r.kt)("em",{parentName:"p"},"cloud download icon")," next to the adaptor\nversion picklist. In the ",(0,r.kt)("strong",{parentName:"p"},"Select Unreleased Adaptor")," dialog box, enter the\n",(0,r.kt)("inlineCode",{parentName:"p"},"adaptor name"),"(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"dhis2")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"language-dhis2"),") and the corresponding\n",(0,r.kt)("inlineCode",{parentName:"p"},"version number"),"(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.3.4"),"), as listed on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40openfn"},"npmjs"),", for the adaptor of your\nchoice. The platform will attempt to install the selected adaptor version it can\nbe used to run the specified job."),(0,r.kt)("p",null,"Note that, after this custom installation of the adaptor, ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," will not\nadd this adaptor version to the picklist of recommended adaptors in\n",(0,r.kt)("a",{parentName:"p",href:"/documentation/jobs/job-studio"},"JobStudio"),", but you are guaranteed that the\nadaptor will be available to use in any of your jobs as long as you specify it\nvia the ",(0,r.kt)("strong",{parentName:"p"},"Select Unreleased Adaptor")," dialog."),(0,r.kt)("h2",{id:"building-and-extending-adaptors"},"Building and extending adaptors"),(0,r.kt)("p",null,"The source code and technical documentation for developing or extending existing\nadaptors can be found on GitHub at ",(0,r.kt)("a",{parentName:"p",href:"http://www.github.com/OpenFn/adaptors"},"www.github.com/OpenFn/adaptors"),"."))}m.isMDXComponent=!0},57361:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/adaptor_npm-2141b2789fbf572fb682e67a828e768f.png"}}]);