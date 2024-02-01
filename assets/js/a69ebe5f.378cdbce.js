"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[77768],{95788:(e,a,t)=>{t.d(a,{Iu:()=>u,yg:()=>y});var n=t(11504);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(t),f=r,y=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return t?n.createElement(y,l(l({ref:a},u),{},{components:t})):n.createElement(y,l({ref:a},u))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},28184:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=t(45072),r=(t(11504),t(95788));const o={title:"Add data values",sidebar_label:"\ud83d\udcdc Add data values",id:"DHIS2-DataValues-API",keywords:["library","job","expression","dhis2","dataValue","field","fields"]},l=void 0,i={unversionedId:"library/jobs/auto/DHIS2-DataValues-API",id:"library/jobs/auto/DHIS2-DataValues-API",title:"Add data values",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/DHIS2-DataValues-API.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/DHIS2-DataValues-API",permalink:"/adaptors/library/jobs/auto/DHIS2-DataValues-API",draft:!1,tags:[],version:"current",frontMatter:{title:"Add data values",sidebar_label:"\ud83d\udcdc Add data values",id:"DHIS2-DataValues-API",keywords:["library","job","expression","dhis2","dataValue","field","fields"]},sidebar:"adaptors",previous:{title:"Config for dhis2",permalink:"/adaptors/packages/dhis2-configuration-schema"},next:{title:"\ud83d\udcdc Add events",permalink:"/adaptors/library/jobs/auto/DHIS2-Events-API"}},s={},d=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:d},p="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.c)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\ud83d\udcdc ",(0,r.yg)("em",null,"This job is an official example from OpenFn.")),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Name: Add data values"),(0,r.yg)("li",{parentName:"ul"},"Adaptor: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,r.yg)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,r.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,r.yg)("inlineCode",{parentName:"a"},"latest"))),(0,r.yg)("li",{parentName:"ul"},"Created date unknown"),(0,r.yg)("li",{parentName:"ul"},"Updated date unknown"),(0,r.yg)("li",{parentName:"ul"},"Score: ",(0,r.yg)("b",null,"100")," (an ",(0,r.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.yg)("h2",{id:"key-functions"},"Key Functions"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"field"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"fields")),(0,r.yg)("h2",{id:"expression"},"Expression"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// ----\n// Add data to data value sets in DHIS2 using a generic JSON message, submitted\n// by Taylor Downs @ OpenFn.\n// ---\n\ndataValueSet(\n  fields(\n    field('dataSet', 'pBOMPrpg1QX'),\n    field('orgUnit', 'DiszpKrYNg8'),\n    field('period', '201401'),\n    field('completeData', dataValue('form.date')),\n    field('dataValues', function (state) {\n      return [\n        dataElement('qrur9Dvnyt5', dataValue('form.prop_a')(state)),\n        dataElement('oZg33kd9taw', dataValue('form.prop_b')(state)),\n        dataElement('msodh3rEMJa', dataValue('form.prop_c')(state)),\n      ];\n    })\n  )\n);\n\n")))}c.isMDXComponent=!0}}]);