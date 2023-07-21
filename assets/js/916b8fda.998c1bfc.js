"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[32107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Fetch Claims",sidebar_label:"\u2728 Fetch Claims",id:"Fetch-Claims-2023-07-17",keywords:["library","job","expression","http","create","get","map","JSON"]},o=void 0,s={unversionedId:"library/jobs/auto/Fetch-Claims-2023-07-17",id:"library/jobs/auto/Fetch-Claims-2023-07-17",title:"Fetch Claims",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Fetch-Claims-2023-07-17.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Fetch-Claims-2023-07-17",permalink:"/adaptors/library/jobs/auto/Fetch-Claims-2023-07-17",draft:!1,tags:[],version:"current",frontMatter:{title:"Fetch Claims",sidebar_label:"\u2728 Fetch Claims",id:"Fetch-Claims-2023-07-17",keywords:["library","job","expression","http","create","get","map","JSON"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Chaining synchronous http requests",permalink:"/adaptors/library/jobs/auto/synchronous-http-request"},next:{title:"\u2728 WF2-1. Bulk get Person cases",permalink:"/adaptors/library/jobs/auto/WF2-1-Bulk-get-Person-cases-2023-05-19"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Fetch Claims"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http/releases/tag/v4.2.8"},(0,a.kt)("inlineCode",{parentName:"a"},"v4.2.8"))),(0,a.kt)("li",{parentName:"ul"},"Created 4 days ago"),(0,a.kt)("li",{parentName:"ul"},"Updated about 4 hours ago"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"84")," (an ",(0,a.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Get last 10 claims and related patients from HAPI\nget(\n  'Claim',\n  {\n    query: {\n      created: 'ge2023-07-19',\n      _include: 'Claim:patient',\n      _sort: '-_lastUpdated',\n      _count: 200,\n    },\n  },\n  next => {\n    const byType = next.data.entry.reduce((r, a) => {\n      r[a.resource.resourceType] = r[a.resource.resourceType] || [];\n      r[a.resource.resourceType].push(a);\n      return r;\n    }, Object.create(null));\n\n    return {\n      ...state,\n      data: {\n        claims: byType.Claim,\n        patients: byType.Patient,\n      },\n    };\n  }\n);\n\n// clean and merge data\nfn(state => {\n  const { claims, patients } = state.data;\n\n  // A bunch of data quality issues make for a more complex workflow...\n  // if (!claim) throw new Error('there is no claim!');\n  // if (!claim.item) throw new Error('there is no claim item!');\n  // if (!patient.name[0].given[0]) throw new Error('there is no patient!');\n  // if (!patient.identifier) throw new Error('no patient identifier');\n\n  const patientsWithClaims = patients\n    // drop all patients without identifiers\n    .filter(p => p.resource.identifier)\n    .map(p => ({\n      ...p,\n      claims: claims.filter(c => {\n        // console.log(JSON.stringify(c, null, 2));\n        return (\n          // has item\n          c.resource.item &&\n          // has coding\n          c.resource.item[0].productOrService.coding &&\n          // for this patient\n          p.resource.id == c.resource.patient.reference.split('/')[1]\n        );\n      }),\n    }));\n\n  return { ...state, data: { patientsWithClaims } };\n});\n\n")))}m.isMDXComponent=!0}}]);