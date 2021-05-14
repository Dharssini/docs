(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4325],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(y,o(o({ref:e},p),{},{components:n})):a.createElement(y,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68654:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"Using async and array.map with http",sidebar_label:"\ud83d\udcdc Using async and array.map",id:"async-and-array-dot-map",keywords:["library","job","expression","http","alterState","map","post"]},s={unversionedId:"jobs/auto/async-and-array-dot-map",id:"jobs/auto/async-and-array-dot-map",isDocsHomePage:!1,title:"Using async and array.map with http",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/async-and-array-dot-map.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/async-and-array-dot-map",permalink:"/library/jobs/auto/async-and-array-dot-map",version:"current",sidebar_label:"\ud83d\udcdc Using async and array.map",frontMatter:{title:"Using async and array.map with http",sidebar_label:"\ud83d\udcdc Using async and array.map",id:"async-and-array-dot-map",keywords:["library","job","expression","http","alterState","map","post"]},sidebar:"library",previous:{title:"Request Vitas Sync with http",permalink:"/library/jobs/auto/Request Vitas Sync-2021-05-11"},next:{title:"Chaining HTTP Requests with http",permalink:"/library/jobs/auto/complex-http-request-chains"}},l=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],c={toc:l};function p(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ud83d\udcdc ",(0,i.kt)("em",null,"This job is an official example from OpenFn.")),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: Using async and array.map"),(0,i.kt)("li",{parentName:"ul"},"Adaptor: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,i.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,i.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,i.kt)("inlineCode",{parentName:"a"},"latest"))),(0,i.kt)("li",{parentName:"ul"},"Created date unknown"),(0,i.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,i.kt)("li",{parentName:"ul"},"Score: ",(0,i.kt)("b",null,"100")," (an ",(0,i.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,i.kt)("h2",{id:"key-functions"},"Key Functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"post")),(0,i.kt)("h2",{id:"expression"},"Expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  console.log('Here we will await the result of a LOT of async operations.');\n\n  console.log('First we needed to break large arrays into smaller chunks.');\n  function chunk(arr, chunkSize) {\n    var R = [];\n    for (var i = 0, len = arr.length; i < len; i += chunkSize)\n      R.push(arr.slice(i, i + chunkSize));\n    return R;\n  }\n\n  const clinicSets = chunk(state.data.Clinic, 10);\n  const patientSets = chunk(state.data.Patient, 10);\n  const visitSets = chunk(state.data.Visit, 10);\n  const deletedVisitSets = chunk(state.data.VisitDeleted, 10);\n\n  console.log('Then we define a bunch of different async functions.');\n  const postClinics = async cs => {\n    return post(state.configuration.inboxUrl, {\n      body: { clinics: cs },\n    })(state);\n  };\n\n  const postPatients = async ps => {\n    return post(state.configuration.inboxUrl, {\n      body: { patients: ps },\n    })(state);\n  };\n\n  const postVisits = async vs => {\n    return post(state.configuration.inboxUrl, {\n      body: { visits: vs },\n    })(state);\n  };\n\n  const postDeletedVisits = async dvs => {\n    return post(state.configuration.inboxUrl, {\n      body: { deletedVisits: dvs },\n    })(state);\n  };\n\n  console.log(\n    'Then we define a single function that wraps them all up and waits for all the individual functions to resolve.'\n  );\n  async function makePosts() {\n    return Promise.all([\n      ...clinicSets.map(item => postClinics(item)),\n      ...patientSets.map(item => postPatients(item)),\n      ...visitSets.map(item => postVisits(item)),\n      ...deletedVisitSets.map(item => postDeletedVisits(item)),\n    ]);\n  }\n\n  console.log(\n    'Then we return that function, forcing our next operation to await the result of this one.'\n  );\n  return makePosts();\n});\n\nalterState(state => {\n  console.log('I show up AFTER those async functions are resolved.');\n  return state;\n});\n\n")))}p.isMDXComponent=!0}}]);