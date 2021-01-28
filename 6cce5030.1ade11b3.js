(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(165)),i={title:"Core"},s={unversionedId:"deploy/core",id:"deploy/core",isDocsHomePage:!1,title:"Core",description:"We're in the process of migrating the docs for OpenFn/core over here.",source:"@site/docs/deploy/core.md",slug:"/deploy/core",permalink:"/documentation/deploy/core",editUrl:"https://github.com/openfn/docs/edit/main/docs/deploy/core.md",version:"current",sidebar:"docs",previous:{title:"Microservices",permalink:"/documentation/deploy/microservices"},next:{title:"Project Management",permalink:"/documentation/manage/platform-mgmt"}},c=[{value:"On DIY implementations using OpenFn/core",id:"on-diy-implementations-using-openfncore",children:[{value:"State.json",id:"statejson",children:[]},{value:"Sample files for DIY getting started",id:"sample-files-for-diy-getting-started",children:[]}]}],l={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We're in the process of migrating the docs for ",Object(o.b)("strong",{parentName:"p"},"OpenFn/core")," over here."),Object(o.b)("p",{parentName:"div"},"In the meantime, check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenFn/core"}),"https://github.com/OpenFn/core")))),Object(o.b)("h2",{id:"on-diy-implementations-using-openfncore"},"On DIY implementations using OpenFn/core"),Object(o.b)("p",null,"OpenFn's core ETL tools are all open-source, and here we will explain how those\ntools can be used to perform ETL operations from your command line. You can even\ntake this further and wrap them together in your own hosted service!"),Object(o.b)("p",null,"To create an integration service like OpenFn.org, you will need to build a REST\nendpoint that allows JSON or XML to be posted to it, returning a ",Object(o.b)("inlineCode",{parentName:"p"},"2XX")," and\nchecking the body of that message to see if it matches some criteria. If the\ncriteria match for that message, you must perform ",Object(o.b)("inlineCode",{parentName:"p"},"execute")," from fn-lang, using\nthe message data and some stored configuration as state. See a sample state.json\nbelow:"),Object(o.b)("h3",{id:"statejson"},"State.json"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "word_count": 284,\n    "last_update": "2016-11-10 13:58:47",\n    "folder_name": "Civil Disobedience",\n    "file_owner": "student@school.org.za",\n    "file_name": "Mock Journal Article"\n  },\n  "configuration": {\n    "host": "109.XXX.11X.2XX",\n    "port": "5432",\n    "database": "data-warehouse",\n    "user": "postgres",\n    "password": "secret-password",\n    "ssl": true\n  }\n}\n')),Object(o.b)("p",null,"Make sure to store your logs. If you'd like to be able to retry transactions,\npersist the message data and provide an interface for manipulating that data by\nhand, or re-running certain transactions after the job expression has been\naltered."),Object(o.b)("p",null,"Make sure that a single inbound message can kick off the running of multiple\njobs."),Object(o.b)("p",null,"To get started, or just run fn-lang manually, from your command line, check out\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenFn/openfn-devtools"}),"openfn-devtools"),". With windows and\nlinux install scripts, it's the fastest way to get up and running with OpenFn on\nyour local machine."),Object(o.b)("h3",{id:"sample-files-for-diy-getting-started"},"Sample files for DIY getting started"),Object(o.b)("p",null,"Below you can find sample code to fill the 3 files required to run fn-lang -\n",Object(o.b)("inlineCode",{parentName:"p"},"message.json"),", ",Object(o.b)("inlineCode",{parentName:"p"},"expression.js")," and ",Object(o.b)("inlineCode",{parentName:"p"},"config.json"),"."),Object(o.b)("h4",{id:"messagejson"},"message.json"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "xform_ids": [],\n  "version": null,\n  "user_id": "user1",\n  "server_date_opened": null,\n  "server_date_modified": null,\n  "properties": {\n    "prop_c": "2013-05-18",\n    "prop_b": "Female",\n    "prop_a": 99,\n    "owner_id": null,\n    "external_id": null,\n    "date_opened": null,\n    "date": "2013-05-17",\n    "case_type": "case_type",\n    "case_name": "Demo"\n  },\n  "indices": {}\n}\n')),Object(o.b)("h4",{id:"expressionjs"},"expression.js"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"event(\n  fields(\n    field('program', 'eBAyeGv0exc'),\n    field('orgUnit', 'DiszpKrYNg8'),\n    field('eventDate', dataValue('properties.date')),\n    field('status', 'COMPLETED'),\n    field('storedBy', 'admin'),\n    field('coordinate', {\n      latitude: '59.8',\n      longitude: '10.9',\n    }),\n    field('dataValues', function (state) {\n      return [\n        {\n          dataElement: 'qrur9Dvnyt5',\n          value: dataValue('properties.prop_a')(state),\n        },\n        {\n          dataElement: 'oZg33kd9taw',\n          value: dataValue('properties.prop_b')(state),\n        },\n        {\n          dataElement: 'msodh3rEMJa',\n          value: dataValue('properties.prop_c')(state),\n        },\n      ];\n    })\n  )\n);\n")),Object(o.b)("h4",{id:"configjson"},"config.json"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "username": "admin",\n  "password": "district",\n  "apiUrl": "https://play.dhis2.org/demo"\n}\n')))}p.isMDXComponent=!0},165:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?r.a.createElement(b,s(s({ref:n},l),{},{components:t})):r.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);