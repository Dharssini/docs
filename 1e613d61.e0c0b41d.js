(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{165:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||r;return t?o.a.createElement(b,s(s({ref:n},p),{},{components:t})):o.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),o=t(7),r=(t(0),t(165)),i={title:"Developing Connected Apps"},s={unversionedId:"for-devs",id:"for-devs",isDocsHomePage:!1,title:"Developing Connected Apps",description:"This section is for you if you are hoping to build or extend an existing",source:"@site/docs/for-devs.md",slug:"/for-devs",permalink:"/documentation/for-devs",editUrl:"https://github.com/openfn/docs/edit/main/docs/for-devs.md",version:"current",sidebar:"docs",previous:{title:"Salesforce",permalink:"/documentation/tools/salesforce"},next:{title:"Devtools",permalink:"/documentation/deploy/devtools"}},c=[{value:"Sending data to OpenFn",id:"sending-data-to-openfn",children:[]},{value:"Receiving data from OpenFn",id:"receiving-data-from-openfn",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section is for you if you are hoping to build or extend an existing\napplication that can connect to OpenFn. We follow modern web-standard JSON api\nguidelines."),Object(r.b)("p",null,'For your application to a be data provider (or "source") for OpenFn\nintegrations, we highly recommend that you create a "notifications service"\n(sometimes called a "webhooks service" or "event-based push API"). This is\npreferable to using a REST api for two reasons: (1) A notifications service will\ngive your clients the ability to set up real-time integrations, and (2) a\nnotifications service is more efficient for both your servers and OpenFn\u2014instead\nof having requests be made and handled every X seconds, your servers and\nOpenFn\'s servers will only work when new data is available.'),Object(r.b)("p",null,'For your application to be a consumer (or "destination") for OpenFn, you must\neither have a standard, JSON-based rest API or create a language-package that\nmeets your API specifications.'),Object(r.b)("h2",{id:"sending-data-to-openfn"},"Sending data to OpenFn"),Object(r.b)("p",null,"To send data to OpenFn, your application must be able to make an HTTPS post to\nan external URL with a valid JSON object as the post body. See the following\nexample using cURL:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -H "Cache-Control: no-cache" \\\n  -d \'{"foo":"bar", "baz":"qux"}\' \\\n  "https://staging.openfn.org/inbox/some-secret-api-key"\n')),Object(r.b)("p",null,"OpenFn will respond with a 200 and an empty JSON object in the event of a\nsuccessful post. 400s mean that the user's external URL is wrong, and 500s means\nthat there is an application error on OpenFn. While 500s are rare, they could be\ndue to invalid JSON in your POST body."),Object(r.b)("p",null,"If you cannot notifiy an external URL when some event takes place, you can still\nintegrate with OpenFn if you have a JSON-based REST API. OpenFn users can make\nHTTP GET requests to your application and perform additional actions based on\nyour response. You should allow either basic or token authentication and\nresponsd to a valid GET with JSON. There is no specific format for your\nresponse, as users can parse it any way they'd like, extracting relevant data\nand then performing other actions\u2014like loading it into a destination system\u2014with\nthat data. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.github.com/openfn/language-http"}),"language-http")," for\ndetails on how users make these generic HTTP requests."),Object(r.b)("h2",{id:"receiving-data-from-openfn"},"Receiving data from OpenFn"),Object(r.b)("p",null,'To make it easy for users to connect to your application, it\'s highly\nrecommended that you create a language-package with your required authentication\nand a set of simple, allowable actions nicely abstracted into "helper\nfunctions". See ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.github.com/openfn/language-dhis2"}),"language-dhis2"),"\nfor an example of a language-package which creates a simpler interface for a\ntraditional JSON-based REST api. Language packages are written in Javascript and\nexecute in Node. You can convert OpenFn's JSON into XML, or any other format\nbefore sending it to your application and you may make use of any node modules\nyou'd like. See\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.github.com/openfn/language-postgresql"}),"language-postgresql"),' for an\nexample of a language package that connects directly to PostgreSQL databases\nusing a popular NPM module called "pg".'),Object(r.b)("p",null,"To receive data from OpenFn's generic language-http langauge package, your\napplication must allow either basic, token, or digest authenticated POST, PUT,\nor GET requests. (Though it is not advisable to create an API that requires GET\nrequests to create or update data.)"))}l.isMDXComponent=!0}}]);