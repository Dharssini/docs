"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(b,s(s({ref:t},u),{},{components:n})):a.createElement(b,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Extract Kobo data from API to send to OpenFn Inbox",sidebar_label:"\ud83d\udcdc Extract Kobo data from API to send to OpenFn Inbox",id:"getKoboData",keywords:["library","job","expression","http","alterState","dataPath","each","get","map","post"]},s=void 0,i={unversionedId:"library/jobs/auto/getKoboData",id:"library/jobs/auto/getKoboData",title:"Extract Kobo data from API to send to OpenFn Inbox",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/getKoboData.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/getKoboData",permalink:"/fr/adaptors/library/jobs/auto/getKoboData",draft:!1,tags:[],version:"current",frontMatter:{title:"Extract Kobo data from API to send to OpenFn Inbox",sidebar_label:"\ud83d\udcdc Extract Kobo data from API to send to OpenFn Inbox",id:"getKoboData",keywords:["library","job","expression","http","alterState","dataPath","each","get","map","post"]},sidebar:"adaptors",previous:{title:"http@4.2.3",permalink:"/fr/adaptors/packages/http-docs"},next:{title:"\ud83d\udcdc Using async and array.map",permalink:"/fr/adaptors/library/jobs/auto/async-and-array-dot-map"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcdc ",(0,r.kt)("em",null,"This job is an official example from OpenFn.")),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: Extract Kobo data from API to send to OpenFn Inbox"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http/releases/tag/v3.1.7"},(0,r.kt)("inlineCode",{parentName:"a"},"v3.1.7"))),(0,r.kt)("li",{parentName:"ul"},"Created date unknown"),(0,r.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"100")," (an ",(0,r.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"post")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//Sample job to get Kobo data and post back to OpenFn Inbox\nalterState(state => {\n  console.log(`Started at: ${new Date().toISOString()}`);\n  state.submissions = [];\n  state.data = {\n    surveys: [\n      // =========================================================================\n      //== TODO: Specify new forms to fetch here, including the Kobo form id, tag, name, and owner ==//\n      { id: 'aijj9FSpuCzMTRnMPGike8', tag: 'nrgt_historical', name: 'NRGT Makira 2017 - Test OpenFn', owner: 'bns' }, // example\n      //consider listing multiple forms\n      // =========================================================================\n     \n    ].map(survey => ({\n      formId: survey.id,\n      tag: survey.tag,\n      name: survey.name, \n      owner: survey.owner,\n      url: `https://kf.kobotoolbox.org/api/v2/assets/${survey.id}/data/?format=json`,\n    })),\n  };\n  console.log(`Fetching data for ${state.data.surveys.length} surveys.`);\n  return state;\n});\n\neach(dataPath('surveys[*]'), state => {\n  const { url, tag, formId, name, owner } = state.data;\n  return get(url, {}, state => {\n    state.data.submissions = state.data.results.map((submission, i) => {\n      return {\n        i,\n        // Here we append the tags defined above to the Kobo form submission data\n        form: tag,\n        formName: name, \n        formOwner: owner,\n        body: submission,\n      };\n    });\n    const count = state.data.submissions.length;\n    console.log(`Fetched ${count} submissions from ${formId} (${tag}).`);\n    //Once we fetch the data, we want to post each individual Kobo survey\n    //back to the OpenFn inbox to run through the jobs\n    return each(dataPath('submissions[*]'), state => {\n      console.log(`Posting ${state.data.i + 1} of ${count}...`);\n       // =========================================================================\n       //== TODO: replace openfnInboxUrl with your OpenFn Project Inbox URL ====//\n      return post(openfnInboxUrl, { body: state => state.data })(state);\n    })(state);\n    // =========================================================================\n  })(state);\n});\n\nalterState(state => {\n  console.log(`Finished at: ${new Date().toISOString()}`);\n  return {\n    data: {\n      message: \"No cursor required. Job fetches all submission for given forms.\"\n    },\n    references: []\n  };\n});\n\n")))}c.isMDXComponent=!0}}]);