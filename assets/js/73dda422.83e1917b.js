(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(289)),s={title:"Salesforce"},i={unversionedId:"apps/salesforce",id:"apps/salesforce",isDocsHomePage:!1,title:"Salesforce",description:"Salesforce Integration Options",source:"@site/docs/apps/salesforce.md",sourceDirName:"apps",slug:"/apps/salesforce",permalink:"/documentation/apps/salesforce",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/salesforce.md",version:"current",frontMatter:{title:"Salesforce"},sidebar:"docs",previous:{title:"Power BI",permalink:"/documentation/apps/powerbi"},next:{title:"SurveyCTO",permalink:"/documentation/apps/survey-cto"}},c=[{value:"Salesforce Integration Options",id:"salesforce-integration-options",children:[]},{value:"Salesforce Credentials",id:"salesforce-credentials",children:[{value:"Resetting Your Security Token",id:"resetting-your-security-token",children:[]}]}],l={toc:c};function u(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"salesforce-integration-options"},"Salesforce Integration Options"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"APIs: Salesforce has a robust set of RESTful APIs that support a wide range\nof operations. See OpenFn API adaptor\n",Object(a.b)("a",{parentName:"li",href:"https://github.com/OpenFn/language-salesforce"},Object(a.b)("inlineCode",{parentName:"a"},"language-salesforce")),"."),Object(a.b)("li",{parentName:"ol"},"Webhook: Using\n",Object(a.b)("a",{parentName:"li",href:"https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_understanding.htm"},Object(a.b)("inlineCode",{parentName:"a"},"Outbound Messages")),"\nand workflow automation, admins can configure notifications to be sent to\nOpenFn when a specific event occurs.")),Object(a.b)("h2",{id:"salesforce-credentials"},"Salesforce Credentials"),Object(a.b)("p",null,"Salesforce requires a username, password, login URL, and security token to\nauthenticate via a user. ",Object(a.b)("strong",{parentName:"p"},"Note every time you reset the user's password, the\nsecurity token will reset and you need to update the Credential record used in\nyour OpenFn job.")),Object(a.b)("p",null,Object(a.b)("img",{alt:"Credentials Menu",src:n(469).default})),Object(a.b)("p",null,'A "Salesforce" Credential record should include:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Username"),Object(a.b)("li",{parentName:"ul"},"Password"),Object(a.b)("li",{parentName:"ul"},'Security Token (Salesforce will email you this when you set your password. If\nyou cannot find "security token" in your inbox, see below for how to reset\nit.)'),Object(a.b)("li",{parentName:"ul"},"Login URL: If a production system, use ",Object(a.b)("inlineCode",{parentName:"li"},"https://login.salesforce.com/")," (unless\nyou have a custom domain ",Object(a.b)("inlineCode",{parentName:"li"},"https://domainName.salesforce.com/"),"). For sandbox\nenvironments, ",Object(a.b)("inlineCode",{parentName:"li"},"https://test.salesforce.com/"),".")),Object(a.b)("p",null,Object(a.b)("img",{alt:"Salesforce Cred",src:n(470).default})),Object(a.b)("p",null,"For ",Object(a.b)("strong",{parentName:"p"},"OpenFn/devtools")," or ",Object(a.b)("strong",{parentName:"p"},"OpenFn/engine")," the raw JSON of the credential for\ninclusion in ",Object(a.b)("inlineCode",{parentName:"p"},"state")," should look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"configuration": {\n  "loginUrl": "https://login.salesforce.com/",\n  "username": "openfn@salesforce.org",\n  "password": "testing123",\n  "securityToken": "Mh4gkye9BVZA9dDjD61Fnd1ba"\n},\n')),Object(a.b)("h3",{id:"resetting-your-security-token"},"Resetting Your Security Token"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=sf.user_security_token.htm&type=5"},"See instructions here"),"\nor below screenshot. Once reset, you will receive an email from Salesforce.\nPlease save this ",Object(a.b)("inlineCode",{parentName:"p"},"security token")," in your OpenFn ",Object(a.b)("inlineCode",{parentName:"p"},"Credential"),"."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Token Reset",src:n(471).default})))}u.isMDXComponent=!0},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(s,".").concat(f)]||p[f]||b[f]||a;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},469:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/credentials-864839c91f9940b590649a47da35fc00.png"},470:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/salesforce-cred-5d5b9ada850c8a58fc99d009ab4835a4.png"},471:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/security-token-67feb0a8803f27c60871f43472947981.png"}}]);