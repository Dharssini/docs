"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[79128],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>m});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(t),g=a,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},92540:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(45072),a=(t(11504),t(95788));const o={title:"salesforce developer readme",id:"salesforce-readme",keywords:["adaptor","readme","salesforce"]},s="salesforce Adaptor developer README.md",l={unversionedId:"packages/salesforce-readme",id:"packages/salesforce-readme",title:"salesforce developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/salesforce",source:"@site/adaptors/packages/salesforce-readme.md",sourceDirName:"packages",slug:"/packages/salesforce-readme",permalink:"/adaptors/packages/salesforce-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"salesforce developer readme",id:"salesforce-readme",keywords:["adaptor","readme","salesforce"]},sidebar:"adaptors",previous:{title:"salesforce changelog",permalink:"/adaptors/packages/salesforce-changelog"},next:{title:"sftp@1.0.2",permalink:"/adaptors/packages/sftp-docs"}},p={},i=[{value:"Documentation",id:"documentation",level:2},{value:"Release notes and deprecated CHANGELOG.md",id:"release-notes-and-deprecated-changelogmd",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Intent",id:"intent",level:2},{value:"Expressions",id:"expressions",level:2},{value:"Development",id:"development",level:2}],c={toc:i},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"salesforce-adaptor-developer-readmemd"},"salesforce Adaptor developer README.md"),(0,a.yg)("p",null,"Source: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/salesforce"},"https://github.com/OpenFn/adaptors/tree/main/packages/salesforce")),(0,a.yg)("h1",{id:"language-salesforce"},"Language Salesforce"),(0,a.yg)("p",null,"An OpenFn ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the\nSalesforce API."),(0,a.yg)("h2",{id:"documentation"},"Documentation"),(0,a.yg)("p",null,"View the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/salesforce-docs"},"docs site"),"\nfor full technical documentation."),(0,a.yg)("h2",{id:"release-notes-and-deprecated-changelogmd"},"Release notes and deprecated CHANGELOG.md"),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/salesforce-changelog"},"releases"),"\nfor all changes."),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"View all the required and optional properties for ",(0,a.yg)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/saleforce-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,a.yg)("h2",{id:"intent"},"Intent"),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Allow communication with Salesforce using a set of Lisp compatible expressions."),(0,a.yg)("p",null,"Using simple functions we can create a simplified API, simple enough to generate\ncode from data."),(0,a.yg)("h2",{id:"expressions"},"Expressions"),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Expressions are a simplified set of function calls. Outlining the operations\nneeded to be performed."),(0,a.yg)("p",null,"An uncompiled expression has no knowledge of the internals of the adaptor,\ncredentials or runtime environment."),(0,a.yg)("p",null,"It's the responsibility of the build process to provide a wrapper that will\ninject the functions in."),(0,a.yg)("p",null,"For example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"describe('vera__Test_Event__c'),\n  create('vera__Test_Event__c', {\n    vera__Test_Event_Name_Unique__c: 'hello from jsforce',\n  }),\n  create('vera__Boat__c', {\n    Name: 'Catatafish redux!',\n    vera__Test_Event__c: reference(0),\n  });\n")),(0,a.yg)("h2",{id:"development"},"Development"),(0,a.yg)("p",null,"Clone the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.yg)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.yg)("p",null,"Run tests using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.yg)("p",null,"Build the project using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.yg)("p",null,"To just build the docs run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build docs")),(0,a.yg)("p",null,"##\xa0Other"),(0,a.yg)("p",null,"Create SOAP session"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'curl https://test.salesforce.com/services/Soap/u/47.0 -H "Content-Type: text/xml; charset=UTF-8" -H "SOAPAction: login" -d @tmp/login.txt | xmllint --format -\n')),(0,a.yg)("p",null,"Close jobs"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"curl\nhttps://openfn.my.salesforce.com/services/async/47.0/job/some_id -H 'X-SFDC-Session: abc123sessionID456xyz' -H \"Content-Type: application/xml; charset=UTF-8\" -d @tmp/close_job.txt | xmllint --format -\n")))}u.isMDXComponent=!0}}]);