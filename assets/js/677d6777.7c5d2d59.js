"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[33224],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>h});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),c=r,h=u["".concat(p,".").concat(c)]||u[c]||g[c]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},28316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(45072),r=(n(11504),n(95788));const o={title:"dhis2 developer readme",id:"dhis2-readme",keywords:["adaptor","readme","dhis2"]},i="dhis2 Adaptor developer README.md",s={unversionedId:"packages/dhis2-readme",id:"packages/dhis2-readme",title:"dhis2 developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/dhis2",source:"@site/adaptors/packages/dhis2-readme.md",sourceDirName:"packages",slug:"/packages/dhis2-readme",permalink:"/adaptors/packages/dhis2-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"dhis2 developer readme",id:"dhis2-readme",keywords:["adaptor","readme","dhis2"]},sidebar:"adaptors",previous:{title:"dhis2 changelog",permalink:"/adaptors/packages/dhis2-changelog"},next:{title:"dynamics@0.4.8",permalink:"/adaptors/packages/dynamics-docs"}},p={},l=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Development",id:"development",level:2},{value:"Unit Tests",id:"unit-tests",level:3},{value:"End-to-end integration tests",id:"end-to-end-integration-tests",level:3},{value:"Troubleshooting the tests",id:"troubleshooting-the-tests",level:4}],d={toc:l},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"dhis2-adaptor-developer-readmemd"},"dhis2 Adaptor developer README.md"),(0,r.yg)("p",null,"Source: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/dhis2"},"https://github.com/OpenFn/adaptors/tree/main/packages/dhis2")),(0,r.yg)("h1",{id:"language-dhis2"},"Language DHIS2"),(0,r.yg)("p",null,"An OpenFn language Pack for building expressions and operations for working with\nthe\n",(0,r.yg)("a",{parentName:"p",href:"http://dhis2.github.io/dhis2-docs/master/en/developer/html/dhis2_developer_manual.html"},"DHIS2 API"),".\nUsed most commonly via OpenFn.org or by hand with\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/core"},"OpenFn/core")," from the root of this repo:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"core execute \\\n -l ../language-dhis2 \\\n -e ./tmp/expression.js \\\n -s ./tmp/state.json \\\n -o ./tmp/output.json\n")),(0,r.yg)("h2",{id:"documentation"},"Documentation"),(0,r.yg)("p",null,"View the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/dhis2-docs"},"docs site")," for\nfull technical documentation."),(0,r.yg)("p",null,"There are lots of ",(0,r.yg)("strong",{parentName:"p"},"examples")," for how to use the various helper functions on\nthe main\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/dhis2-docs#modules"},"Adaptor docs"),"\npage."),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"View all the required and optional properties for ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/dhis2-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("p",null,"Run tests using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch"),". (NB: that this repo\nalso contain integration tests which can be run with\n",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run integration-test"),".)"),(0,r.yg)("p",null,"\u26a0\ufe0f NB: Make changes to the files in ",(0,r.yg)("inlineCode",{parentName:"p"},"src/")," and then use ",(0,r.yg)("inlineCode",{parentName:"p"},"npm run build")," to\ngenerate output files in ",(0,r.yg)("inlineCode",{parentName:"p"},"lib/"),"."),(0,r.yg)("p",null,"The documentation is autogenerated, so please ",(0,r.yg)("strong",{parentName:"p"},"rebuild the docs")," after making\nchanges by running ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build docs")),(0,r.yg)("h3",{id:"unit-tests"},"Unit Tests"),(0,r.yg)("p",null,"Unit tests allows to test the functionalities of the adaptor helper functions\nsuch as:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Does ",(0,r.yg)("inlineCode",{parentName:"p"},"create('events', payload)")," perform a post request to the correct DHIS2\nAPI?")),(0,r.yg)("p",null,"To run unit tests execute ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test")," (they're the default tests)."),(0,r.yg)("p",null,"Anytime a new functionality is added to the helper functions, more unit tests\nneeds to be added."),(0,r.yg)("h3",{id:"end-to-end-integration-tests"},"End-to-end integration tests"),(0,r.yg)("p",null,"Integration tests allow us to test the end-to-end behavior of the helper\nfunctions and also to test the examples we provide via inline documentation."),(0,r.yg)("p",null,"For example with integration tests we answer the following question:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Does ",(0,r.yg)("inlineCode",{parentName:"p"},"create('events', eventPayload)")," actually create a new event in a live\nDHIS2 system?")),(0,r.yg)("p",null,"To run integration tests, execute ",(0,r.yg)("inlineCode",{parentName:"p"},"npm run integration-test"),'. These tests use\nnetwork I/O and a public connection to a DHIS2 "play" server so their timing and\nperformance is unpredictable. Consider adding an increased timeout, and\nmodifying the orgUnit, program, etc., IDs set in ',(0,r.yg)("inlineCode",{parentName:"p"},"globalState"),"."),(0,r.yg)("h4",{id:"troubleshooting-the-tests"},"Troubleshooting the tests"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Depending on your internet strength please consider changing the ",(0,r.yg)("strong",{parentName:"p"},"global\ntimeout")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"test/mocha.opts")," file to avoid faillures related to network\ntimeouts.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The behavior of the tests in ",(0,r.yg)("inlineCode",{parentName:"p"},"test/integration.js")," is very unpredictable; they\ndepend on the ",(0,r.yg)("strong",{parentName:"p"},"configuration of a target DHIS2 instance"),". Currently you need\nto have at least one organisation unit with one program, one\ntrackedEntityInstance and one programStage in it. These components need to be\nwell configured for the integration tests to work. For example: the\ntrackedEntityInstance need to be enrolled to the program, which should be\ncreated in that organisation unit and contains at least that programStage. If\nthe tests fail, you must adjust these attributes in the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/dhis2/test/integration.js"},"before hook"),":"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"before(done => {\n  fixture.initialState = {\n    configuration: {\n      username: 'admin',\n      password: 'district',\n      hostUrl: 'https://play.dhis2.org/2.36.6',\n    },\n    program: 'IpHINAT79UW',\n    orgUnit: 'DiszpKrYNg8',\n    trackedEntityInstance: 'uhubxsfLanV',\n    programStage: 'eaDHS084uMp',\n  };\n  done();\n});\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Make sure the ",(0,r.yg)("inlineCode",{parentName:"li"},"update")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"upsert")," integration tests don't affect those\ninitial organisation units, programs, programStage and trackedEntityInstance\nrequired. Otherwise the create integration tests would be broken again; and\nthat's an endless faillure loop :(")),(0,r.yg)("p",null,"Anytime a new example is added in the documentation of a helper function, a new\nintegration test should be built."))}g.isMDXComponent=!0}}]);