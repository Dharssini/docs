"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[66227],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>f});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||y[d]||o;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73698:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(58168),a=(r(96540),r(15680));const o={title:"Create Person in OpenMRS",sidebar_label:"Create Person in OpenMRS",id:"Create-Person-in-OpenMRS-2016-02-12",keywords:["library","job","expression","openmrs","dataValue","field","fields"]},i=void 0,l={unversionedId:"library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12",id:"library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12",title:"Create Person in OpenMRS",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12",permalink:"/adaptors/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12",draft:!1,tags:[],version:"current",frontMatter:{title:"Create Person in OpenMRS",sidebar_label:"Create Person in OpenMRS",id:"Create-Person-in-OpenMRS-2016-02-12",keywords:["library","job","expression","openmrs","dataValue","field","fields"]},sidebar:"adaptors",previous:{title:"Config for openmrs",permalink:"/adaptors/packages/openmrs-configuration-schema"},next:{title:"Create Patient in OpenMRS",permalink:"/adaptors/library/jobs/auto/Create-Patient-in-OpenMRS-2019-10-24"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},c="wrapper";function y(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.yg)("h2",{id:"metadata"},"Metadata"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Name: Create Person in OpenMRS"),(0,a.yg)("li",{parentName:"ul"},"Adaptor: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openmrs"},(0,a.yg)("inlineCode",{parentName:"a"},"@openfn/language-openmrs"))),(0,a.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openmrs/releases/tag/v0.0.2"},(0,a.yg)("inlineCode",{parentName:"a"},"v0.0.2"))),(0,a.yg)("li",{parentName:"ul"},"Created about 8 years ago"),(0,a.yg)("li",{parentName:"ul"},"Updated almost 3 years ago"),(0,a.yg)("li",{parentName:"ul"},"Score: ",(0,a.yg)("b",null,"0")," (an ",(0,a.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.yg)("h2",{id:"key-functions"},"Key Functions"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"fields")),(0,a.yg)("h2",{id:"expression"},"Expression"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'person(\n  fields(\n    field("gender", "M"),\n    field("names", function(state) {\n      return [{\n        "givenName": dataValue("form.first_name")(state),\n        "familyName": "Sports_Music_Field_Day"\n      }]\n    })\n  )\n)\n')))}y.isMDXComponent=!0}}]);