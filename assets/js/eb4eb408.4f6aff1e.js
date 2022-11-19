"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[82863],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(f,i(i({ref:r},c),{},{components:t})):a.createElement(f,i({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},11541:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const o={title:"primero developer readme",id:"primero-readme",keywords:["adaptor","readme","primero"]},i="Developer README for the primero adaptor",s={unversionedId:"packages/primero-readme",id:"packages/primero-readme",title:"primero developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/primero",source:"@site/adaptors/packages/primero-readme.md",sourceDirName:"packages",slug:"/packages/primero-readme",permalink:"/adaptors/packages/primero-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"primero developer readme",id:"primero-readme",keywords:["adaptor","readme","primero"]},sidebar:"library",previous:{title:"primero changelog",permalink:"/adaptors/packages/primero-changelog"},next:{title:"progres@1.1.0",permalink:"/adaptors/packages/progres-docs"}},l={},p=[{value:"Primero API Versions",id:"primero-api-versions",level:2},{value:"Adaptor for Primero v2.0",id:"adaptor-for-primero-v20",level:3},{value:"Adaptor for Primero v1.0 still available on the <code>v1</code> branch.",id:"adaptor-for-primero-v10-still-available-on-the-v1-branch",level:3},{value:"Primero Authentication Strategies",id:"primero-authentication-strategies",level:4},{value:"Technical Documentation",id:"technical-documentation",level:2},{value:"Sample configuration",id:"sample-configuration",level:3},{value:"Get cases from Primero with query parameters",id:"get-cases-from-primero-with-query-parameters",level:3},{value:"Get forms from Primero with query parameters",id:"get-forms-from-primero-with-query-parameters",level:3},{value:"Get lookups from Primero with query parameters",id:"get-lookups-from-primero-with-query-parameters",level:3},{value:"Get loocations from Primero with query parameters",id:"get-loocations-from-primero-with-query-parameters",level:3},{value:"Create a new case in Primero",id:"create-a-new-case-in-primero",level:3},{value:"Update case with query Parameters",id:"update-case-with-query-parameters",level:3},{value:"Update or Insert a case with query Parameters",id:"update-or-insert-a-case-with-query-parameters",level:3},{value:"Get referrals for a case in Primero",id:"get-referrals-for-a-case-in-primero",level:3},{value:"Create referrals for one or multiple cases in Primero",id:"create-referrals-for-one-or-multiple-cases-in-primero",level:3},{value:"Update referrals for a case in Primero",id:"update-referrals-for-a-case-in-primero",level:3},{value:"Development",id:"development",level:2}],c={toc:p};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"developer-readme-for-the-primero-adaptor"},"Developer README for the primero adaptor"),(0,n.kt)("p",null,"Source: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/primero"},"https://github.com/OpenFn/adaptors/tree/main/packages/primero")),(0,n.kt)("h1",{id:"language-primero"},"language-primero"),(0,n.kt)("p",null,"An OpenFn ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with UNICEF's\nPrimero API."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See Update Docs Site: ",(0,n.kt)("a",{parentName:"strong",href:"https://openfn.github.io/language-primero/"},"https://openfn.github.io/language-primero/")," ")),(0,n.kt)("h2",{id:"primero-api-versions"},"Primero API Versions"),(0,n.kt)("h3",{id:"adaptor-for-primero-v20"},"Adaptor for Primero v2.0"),(0,n.kt)("p",null,"This documentation outlines the functions available for Primero ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.0")," in the\nmain branch. The API documentation is available at:\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/primeroIMS/primero/tree/development_v2/app/controllers/api"},"https://github.com/primeroIMS/primero/tree/development_v2/app/controllers/api")),(0,n.kt)("h3",{id:"adaptor-for-primero-v10-still-available-on-the-v1-branch"},"Adaptor for Primero v1.0 still available on the ",(0,n.kt)("inlineCode",{parentName:"h3"},"v1")," branch."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"v1.0.7")," of this adaptor was built for the Primero ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.1")," API:\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-primero/blob/v1/README.md"},"https://github.com/OpenFn/language-primero/blob/v1/README.md")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1jpaT2_UBBnc3PxPYlLMBEzNUkyfuxRZiksywG5MKM0Q/edit"},"Primero API v1.1 Documentation")),(0,n.kt)("h4",{id:"primero-authentication-strategies"},"Primero Authentication Strategies"),(0,n.kt)("p",null,"The Primero team is considering a shift to Microsoft Azure Active Directory B2C\nfor auth. We can likely accommodate this with a similar pattern as has been used\nin our Microsoft Dynamics, Github, or Google Sheets adaptors, but we'll need to\nawait final doucmentation for Primero's ",(0,n.kt)("inlineCode",{parentName:"p"},"v2")," API before making changes."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory-b2c/"},"Azure Active Directory B2C")),(0,n.kt)("h2",{id:"technical-documentation"},"Technical Documentation"),(0,n.kt)("h3",{id:"sample-configuration"},"Sample configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user": "admin",\n  "password": "admin",\n  "url": "https://some-primero-instance.unicef.org",\n  "basicAuth": false\n}\n')),(0,n.kt)("h3",{id:"get-cases-from-primero-with-query-parameters"},"Get cases from Primero with query parameters"),(0,n.kt)("p",null,"Use this function to get cases from Primero based on a set of query parameters.\nNote that in many implementations, the ",(0,n.kt)("inlineCode",{parentName:"p"},"remote")," attribute should be set to\n",(0,n.kt)("inlineCode",{parentName:"p"},"true")," to ensure that only cases marked for remote access will be retrieved. You\ncan specify a case_id value to fetch a unique case and a query string to filter\nresult."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"getCases(\n  {\n    remote: true,\n    query: 'sex=male',\n  },\n  state => {\n    console.log('Here is the callback.');\n    return state;\n  }\n);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"getCases(\n  {\n    remote: true,\n    case_id: '6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz',\n  },\n  state => {\n    console.log('We are fetching a unique case id');\n    return state;\n  }\n);\n")),(0,n.kt)("h3",{id:"get-forms-from-primero-with-query-parameters"},"Get forms from Primero with query parameters"),(0,n.kt)("p",null,"Use this function to get forms from Primero that are accessible to this user\nbased on a set of query parameters. The user can filter the form list by record\ntype and module."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"getForms(state => {\n  console.log('We are fetching forms from Primero for this user');\n  return state;\n});\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"getForms(\n  {\n    module_id: '6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz',\n  },\n  state => {\n    console.log('We are fetching a unique form using module_id');\n    return state;\n  }\n);\n")),(0,n.kt)("h3",{id:"get-lookups-from-primero-with-query-parameters"},"Get lookups from Primero with query parameters"),(0,n.kt)("p",null,"Use this function to get a paginated list of all lookups that are accessible to\nthis user from Primero."),(0,n.kt)("p",null,"Note: You can specify a ",(0,n.kt)("inlineCode",{parentName:"p"},"per")," value to fetch records per page(Defaults to 20).\nAlso you can specify ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," value to fetch pagination (Defaults to 1)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"getLookups(\n  {\n    per: 10000,\n    page: 1,\n  },\n  state => {\n    console.log('Here is the callback.');\n    return state;\n  }\n);\n")),(0,n.kt)("h3",{id:"get-loocations-from-primero-with-query-parameters"},"Get loocations from Primero with query parameters"),(0,n.kt)("p",null,"Use this function to get a paginated list of all locations that are accessible\nto this user from Primero. Note: You can specify a ",(0,n.kt)("inlineCode",{parentName:"p"},"per")," value to fetch records\nper page(Defaults to 20). Also you can specify ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," value to fetch pagination\n(Defaults to 1). Another parameter is ",(0,n.kt)("inlineCode",{parentName:"p"},"hierarchy: true")," (Defaults to false)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"getLocations(\n  {\n    per: 100000,\n  },\n  state => {\n    console.log('Here is the callback.');\n    return state;\n  }\n);\n")),(0,n.kt)("h3",{id:"create-a-new-case-in-primero"},"Create a new case in Primero"),(0,n.kt)("p",null,"Use this function to insert a new case in Primero based on a set of Data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"createCase(\n  {\n    data: state => ({\n      remote: true,\n      enabled: true,\n      age: 15,\n      sex: 'male',\n      name: 'Alex',\n      status: 'open',\n      case_id: '6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz',\n      child: {\n        date_of_birth: \"2020-01-02\",\n        ...,\n        services_section: [ ... ],\n        transitions: [ ... ]\n      },\n    })\n  }\n);\n")),(0,n.kt)("h3",{id:"update-case-with-query-parameters"},"Update case with query Parameters"),(0,n.kt)("p",null,"Use this function to update an existing case from Primero. In this\nimplementation, the function uses an ID to check for the case to update."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'updateCase(\n    "case_id", {\n    data: {\n      remote: true,\n      oscar_number: c.oscar_number,\n      case_id: c.case_id,\n      child: {\n        date_of_birth: "2020-01-02",\n        ...,\n        services_section: [ ... ],\n        transitions: [ ... ]\n      },\n    }\n  }\n);\n')),(0,n.kt)("h3",{id:"update-or-insert-a-case-with-query-parameters"},"Update or Insert a case with query Parameters"),(0,n.kt)("p",null,"Use this function to update an existing case from Primero or to insert it\notherwise. In this implementation, we first fetch the list of cases, then we\ncheck if the case exist before choosing the right operation to do."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'upsertCase(\n  {\n    externalIds: ["case_id"],\n    data: {\n      remote: true,\n      oscar_number: c.oscar_number,\n      case_id: c.case_id,\n      child: {\n        date_of_birth: "2020-01-02",\n        ...,\n        services_section: [ ... ],\n        transitions: [ ... ]\n      },\n    }\n  },\n  state => {\n    console.log(state.data);\n    return state;\n  }\n);\n')),(0,n.kt)("h3",{id:"get-referrals-for-a-case-in-primero"},"Get referrals for a case in Primero"),(0,n.kt)("p",null,"Use this function to get the list of referrals of one case from Primero. The\nsearch can be done using either ",(0,n.kt)("inlineCode",{parentName:"p"},"record id")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"case id"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"getReferrals(\n  { externalId: 'case_id' },\n  'a59e880e-d58f-4b68-ba6e-e0616a49aefd',\n  state => {\n    console.log(state.data);\n    return state;\n  }\n);\n")),(0,n.kt)("h3",{id:"create-referrals-for-one-or-multiple-cases-in-primero"},"Create referrals for one or multiple cases in Primero"),(0,n.kt)("p",null,"Use this function to bulk refer to one or multiple cases from Primero"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"createReferrals(\n  {\n    data: {\n      ids: ['case_id'],\n      transitioned_to: 'primero_cp',\n      notes: 'Creating a referral',\n    },\n  },\n  state => {\n    console.log('Here is the callback.');\n    return state;\n  }\n);\n")),(0,n.kt)("h3",{id:"update-referrals-for-a-case-in-primero"},"Update referrals for a case in Primero"),(0,n.kt)("p",null,"Use this function to update one referral using the referral_id. The update is\nmade using either the ",(0,n.kt)("inlineCode",{parentName:"p"},"record id")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"case id"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"updateReferrals(\n  {\n    externalId: 'case_id',\n    id: '2a2cc932-4b6f-43a6-928d-40fc9949eb02',\n    referral_id: 'c377bcb2-122d-46ee-a861-869e1b6476cd',\n    data: {\n      status: 'accepted',\n      id: '4c58d02f-3182-4006-b2fe-96aa797f5ee7',\n      type: 'Referral',\n      record_type: 'case',\n    },\n  },\n  state => {\n    console.log(state.data);\n    return state;\n  }\n);\n")),(0,n.kt)("h2",{id:"development"},"Development"),(0,n.kt)("p",null,"Clone the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,n.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,n.kt)("p",null,"Run tests using ",(0,n.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,n.kt)("p",null,"Build the project using ",(0,n.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,n.kt)("p",null,"To just build the docs run ",(0,n.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}m.isMDXComponent=!0}}]);