"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[83278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},78186:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={title:"salesforce developer readme",id:"salesforce-readme",keywords:["adaptor","readme","salesforce"]},s="Developer README for the salesforce adaptor",l={unversionedId:"packages/salesforce-readme",id:"packages/salesforce-readme",title:"salesforce developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/salesforce",source:"@site/adaptors/packages/salesforce-readme.md",sourceDirName:"packages",slug:"/packages/salesforce-readme",permalink:"/adaptors/packages/salesforce-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"salesforce developer readme",id:"salesforce-readme",keywords:["adaptor","readme","salesforce"]},sidebar:"adaptors",previous:{title:"salesforce changelog",permalink:"/adaptors/packages/salesforce-changelog"},next:{title:"sftp@0.6.4",permalink:"/adaptors/packages/sftp-docs"}},p={},i=[{value:"Release notes and deprecated CHANGELOG.md",id:"release-notes-and-deprecated-changelogmd",level:2},{value:"Sample configuration",id:"sample-configuration",level:2},{value:"Intent",id:"intent",level:2},{value:"Expressions",id:"expressions",level:2},{value:"##\xa0API",id:"api",level:2},{value:"Development",id:"development",level:2},{value:"##\xa0Other",id:"other",level:2}],c={toc:i};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-salesforce-adaptor"},"Developer README for the salesforce adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/salesforce"},"https://github.com/OpenFn/adaptors/tree/main/packages/salesforce")),(0,r.kt)("h1",{id:"language-salesforce"},"Language Salesforce"),(0,r.kt)("p",null,"Salesforce Language Pack for OpenFn. ",(0,r.kt)("strong",{parentName:"p"},"See the main docs site:\n",(0,r.kt)("a",{parentName:"strong",href:"http://openfn.github.io/language-salesforce/"},"http://openfn.github.io/language-salesforce/")," ")),(0,r.kt)("h2",{id:"release-notes-and-deprecated-changelogmd"},"Release notes and deprecated CHANGELOG.md"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce/releases"},"releases")," for all\nchanges."),(0,r.kt)("h2",{id:"sample-configuration"},"Sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginUrl": "https://somesalesforcelogin.url/",\n  "username": "someusername",\n  "password": "somesupersecretpassword",\n  "securityToken": "salesforcesecuritytoken"\n}\n')),(0,r.kt)("h2",{id:"intent"},"Intent"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Allow communication with Salesforce using a set of Lisp compatible expressions."),(0,r.kt)("p",null,"Using simple functions we can create a simplified API, simple enough to generate\ncode from data."),(0,r.kt)("h2",{id:"expressions"},"Expressions"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Expressions are a simplified set of function calls. Outlining the operations\nneeded to be performed."),(0,r.kt)("p",null,"An uncompiled expression has no knowledge of the internals of the adaptor,\ncredentials or runtime environment."),(0,r.kt)("p",null,"It's the responsibility of the build process to provide a wrapper that will\ninject the functions in."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"describe('vera__Test_Event__c'),\n  create('vera__Test_Event__c', {\n    vera__Test_Event_Name_Unique__c: 'hello from jsforce',\n  }),\n  create('vera__Boat__c', {\n    Name: 'Catatafish redux!',\n    vera__Test_Event__c: reference(0),\n  });\n")),(0,r.kt)("h2",{id:"api"},"##\xa0API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'field("key","value")')," Returns ",(0,r.kt)("inlineCode",{parentName:"p"},'{ "key": "value" }')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L23-L44"},(0,r.kt)("inlineCode",{parentName:"a"},'relationship("relationship_name__r", "externalID", dataSource("path"))'))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L46-L71"},(0,r.kt)("inlineCode",{parentName:"a"},'describe("obj_name")'))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L107-L136"},(0,r.kt)("inlineCode",{parentName:"a"},"query('queryString')"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L138-L210"},(0,r.kt)("inlineCode",{parentName:"a"},"bulk('obj_name', 'operation', 'options', arrayOfFields)"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L212-L238"},(0,r.kt)("inlineCode",{parentName:"a"},"create('obj_name', fields())"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#225-259"},(0,r.kt)("inlineCode",{parentName:"a"},"destroy('obj_name', fields())"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L240-L279"},(0,r.kt)("inlineCode",{parentName:"a"},"createIf(logical, 'obj_name', fields())"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L281-L315"},(0,r.kt)("inlineCode",{parentName:"a"},"upsert(sObject, 'externalID', fields())"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L317-L370"},(0,r.kt)("inlineCode",{parentName:"a"},"upsertIf(logical, 'obj_name', 'externalID', fields())"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce/blob/master/src/Adaptor.js#L372-L398"},(0,r.kt)("inlineCode",{parentName:"a"},"update('obj_name', fields())"))),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")),(0,r.kt)("h2",{id:"other"},"##\xa0Other"),(0,r.kt)("p",null,"Create SOAP session"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl https://test.salesforce.com/services/Soap/u/47.0 -H "Content-Type: text/xml; charset=UTF-8" -H "SOAPAction: login" -d @tmp/login.txt | xmllint --format -\n')),(0,r.kt)("p",null,"Close jobs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl\nhttps://openfn.my.salesforce.com/services/async/47.0/job/some_id -H 'X-SFDC-Session: abc123sessionID456xyz' -H \"Content-Type: application/xml; charset=UTF-8\" -d @tmp/close_job.txt | xmllint --format -\n")))}u.isMDXComponent=!0}}]);