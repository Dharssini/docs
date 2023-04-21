"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[34490],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>y});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,y=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return t?n.createElement(y,s(s({ref:a},u),{},{components:t})):n.createElement(y,s({ref:a},u))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},69881:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const o={title:"Using findValue with an array of data",sidebar_label:"\ud83d\udcdc Using findValue with an array of data",id:"async-findValue",keywords:["library","job","expression","postgresql","findValue","upsertMany","async","await"]},s=void 0,i={unversionedId:"library/jobs/auto/async-findValue",id:"library/jobs/auto/async-findValue",title:"Using findValue with an array of data",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/async-findValue.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/async-findValue",permalink:"/adaptors/library/jobs/auto/async-findValue",draft:!1,tags:[],version:"current",frontMatter:{title:"Using findValue with an array of data",sidebar_label:"\ud83d\udcdc Using findValue with an array of data",id:"async-findValue",keywords:["library","job","expression","postgresql","findValue","upsertMany","async","await"]},sidebar:"adaptors",previous:{title:"Config for postgresql",permalink:"/adaptors/packages/postgresql-configuration-schema"},next:{title:"1. Get data from SLUHIS",permalink:"/adaptors/library/jobs/auto/1-Get-data-from-SLUHIS-2023-03-08"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcdc ",(0,r.kt)("em",null,"This job is an official example from OpenFn.")),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: Using findValue with an array of data"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-postgresql"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql"},(0,r.kt)("inlineCode",{parentName:"a"},"latest"))),(0,r.kt)("li",{parentName:"ul"},"Created date unknown"),(0,r.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"100")," (an ",(0,r.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"findValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upsertMany"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"async"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"await")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'fn(async state => {\n  const dataArray =\n    state.data.body.st_grass_repeat ||\n    state.data.body["plot_forest_area/st_grass_repeat"] ||\n    [];\n  const dataGrass = [];\n  const path = state.data.body.st_grass_repeat\n    ? "st_grass_repeat"\n    : "plot_forest_area/st_grass_repeat";\n\n  for (let data of uniqueGrass) {\n    dataGrass.push({\n      WCSPROGRAMS_TaxaID: await findValue({\n        uuid: "WCSPROGRAMS_TaxaID",\n        relation: "WCSPROGRAMS_Taxa",\n        where: {\n          ScientificName: `%${state.handleValue(\n            data["st_grass_repeat/grass_species"]\n          )}%`,\n        },\n        operator: { ScientificName: "like" },\n      })(state),\n      UnknownSpeciesImage: data[`${path}/noknown`],\n      GrassPercent: data[`${path}/grass_perc`],\n      GrassHeight: data[`${path}/grass_height`],\n      AnswerId: state.data.body._id,\n    });\n  }\n  \n  return upsertMany(\n    "WCSPROGRAMS_VegetationGrass",\n    "WCSPROGRAMS_VegetationGrassCode",\n    () => dataGrass\n  )(state);\n});\n\n')))}c.isMDXComponent=!0}}]);