"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4325],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47659:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Using async and array.map",sidebar_label:"\ud83d\udcdc Using async and array.map",id:"async-and-array-dot-map",keywords:["library","job","expression","http","alterState","map","post","async","await","Promise"]},l=void 0,c={unversionedId:"jobs/auto/async-and-array-dot-map",id:"jobs/auto/async-and-array-dot-map",title:"Using async and array.map",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/async-and-array-dot-map.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/async-and-array-dot-map",permalink:"/library/jobs/auto/async-and-array-dot-map",draft:!1,tags:[],version:"current",frontMatter:{title:"Using async and array.map",sidebar_label:"\ud83d\udcdc Using async and array.map",id:"async-and-array-dot-map",keywords:["library","job","expression","http","alterState","map","post","async","await","Promise"]},sidebar:"library",previous:{title:"\ud83d\udcdc Timeout to create a delay",permalink:"/library/jobs/auto/timeout"},next:{title:"GET Data From KoboToolbox",permalink:"/library/jobs/auto/GET-Data-From-KoboToolbox-2022-03-22"}},p={},u=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udcdc ",(0,o.kt)("em",null,"This job is an official example from OpenFn.")),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Using async and array.map"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,o.kt)("inlineCode",{parentName:"a"},"latest"))),(0,o.kt)("li",{parentName:"ul"},"Created date unknown"),(0,o.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"100")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"await"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  console.log('Here we will await the result of a LOT of async operations.');\n\n  console.log('First we needed to break large arrays into smaller chunks.');\n  function chunk(arr, chunkSize) {\n    var R = [];\n    for (var i = 0, len = arr.length; i < len; i += chunkSize)\n      R.push(arr.slice(i, i + chunkSize));\n    return R;\n  }\n\n  const clinicSets = chunk(state.data.Clinic, 10);\n  const patientSets = chunk(state.data.Patient, 10);\n  const visitSets = chunk(state.data.Visit, 10);\n  const deletedVisitSets = chunk(state.data.VisitDeleted, 10);\n\n  console.log('Then we define a bunch of different async functions.');\n  const postClinics = async cs => {\n    return post(state.configuration.inboxUrl, {\n      body: { clinics: cs },\n    })(state);\n  };\n\n  const postPatients = async ps => {\n    return post(state.configuration.inboxUrl, {\n      body: { patients: ps },\n    })(state);\n  };\n\n  const postVisits = async vs => {\n    return post(state.configuration.inboxUrl, {\n      body: { visits: vs },\n    })(state);\n  };\n\n  const postDeletedVisits = async dvs => {\n    return post(state.configuration.inboxUrl, {\n      body: { deletedVisits: dvs },\n    })(state);\n  };\n\n  console.log(\n    'Then we define a single function that wraps them all up and waits for all the individual functions to resolve.'\n  );\n  async function makePosts() {\n    return Promise.all([\n      ...clinicSets.map(item => postClinics(item)),\n      ...patientSets.map(item => postPatients(item)),\n      ...visitSets.map(item => postVisits(item)),\n      ...deletedVisitSets.map(item => postDeletedVisits(item)),\n    ]);\n  }\n\n  console.log(\n    'Then we return that function, forcing our next operation to await the result of this one.'\n  );\n  return makePosts();\n});\n\nalterState(state => {\n  console.log('I show up AFTER those async functions are resolved.');\n  return state;\n});\n\n")))}m.isMDXComponent=!0}}]);