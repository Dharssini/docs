(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1615],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(o),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return o?n.createElement(b,i(i({ref:t},u),{},{components:o})):n.createElement(b,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},51954:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=o(22122),a=o(19756),r=(o(67294),o(3905)),i={title:"Kobo Toolbox"},s={unversionedId:"apps/kobo-toolbox",id:"apps/kobo-toolbox",isDocsHomePage:!1,title:"Kobo Toolbox",description:"Aper\xe7u",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/kobo-toolbox.md",sourceDirName:"apps",slug:"/apps/kobo-toolbox",permalink:"/fr/documentation/apps/kobo-toolbox",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/kobo-toolbox.md",version:"current",frontMatter:{title:"Kobo Toolbox"},sidebar:"docs",previous:{title:"Google Forms/Google Sheets",permalink:"/fr/documentation/apps/google-sheets"},next:{title:"Magpi",permalink:"/fr/documentation/apps/magpi"}},p=[{value:"Aper\xe7u",id:"aper\xe7u",children:[]},{value:"Integration Use Cases",id:"integration-use-cases",children:[]},{value:"Integration Options",id:"integration-options",children:[{value:"Kobo Web API",id:"kobo-web-api",children:[]},{value:"Webhook service to forward submission data to OpenFn endpoint (or another app)",id:"webhook-service-to-forward-submission-data-to-openfn-endpoint-or-another-app",children:[]}]},{value:"OpenFn Adaptor",id:"openfn-adaptor",children:[]},{value:"Integration Examples",id:"integration-examples",children:[]}],l={toc:p};function u(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"aper\xe7u"},"Aper\xe7u"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo Toolbox")," est une suite d'outils open source pour la collecte de donn\xe9es sur le terrain dans des environnements difficiles. Si vous avez travaill\xe9 sur ODK ou ONA, la technologie sous-jacente est tr\xe8s similaire. They offer free accounts and hosting for humanitarian projects, and the app provides a nice interface for managing (and cleaning!) form submissions."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate with common tools, and (2) to educate any OpenFn user/the wider sector."))),(0,r.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,r.kt)("p",null,"Example user stories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a M&E manager, I want to monitor Kobo Toolbox survey responses in real-time in a central database, so that I can better understand data collection activities and program performance across my partner sites."),(0,r.kt)("li",{parentName:"ul"},"... .")),(0,r.kt)("h2",{id:"integration-options"},"Integration Options"),(0,r.kt)("h3",{id:"kobo-web-api"},"Kobo Web API"),(0,r.kt)("p",null,"Kobo APIs support both data and metadata integration. Check out:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kobo API docs: ",(0,r.kt)("a",{parentName:"li",href:"https://support.kobotoolbox.org/api.html"},"https://support.kobotoolbox.org/api.html")),(0,r.kt)("li",{parentName:"ul"},"Kobo Community: ",(0,r.kt)("a",{parentName:"li",href:"https://support.kobotoolbox.org/rest_services.html"},"https://support.kobotoolbox.org/rest_services.html")),(0,r.kt)("li",{parentName:"ul"},"Kobo API v2 explorer: ",(0,r.kt)("a",{parentName:"li",href:"https://kf.kobotoolbox.org/api/v2/assets/"},"https://kf.kobotoolbox.org/api/v2/assets/"))),(0,r.kt)("h3",{id:"webhook-service-to-forward-submission-data-to-openfn-endpoint-or-another-app"},"Webhook service to forward submission data to OpenFn endpoint (or another app)"),(0,r.kt)("p",null,"See the official docs here: ",(0,r.kt)("a",{parentName:"p",href:"https://support.kobotoolbox.org/rest_services.html"},"https://support.kobotoolbox.org/rest_services.html")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To push data from Kobo, users must click the projects icon on their left-side nav bar. It's in the shape of a globe."),(0,r.kt)("li",{parentName:"ol"},"Once selecting a project, the ",(0,r.kt)("inlineCode",{parentName:"li"},"Project Settings")," link will appear at the top left side of the screen. Click it to open the Project Settings page."),(0,r.kt)("li",{parentName:"ol"},"In the bottom left pane of the project settings page, users must paste their inbox URL from OpenFn into the ",(0,r.kt)("inlineCode",{parentName:"li"},"Rest Services")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Service URL")," input area and select ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON Post")," as the ",(0,r.kt)("inlineCode",{parentName:"li"},"Service Name"),"."),(0,r.kt)("li",{parentName:"ol"},"It's helpful to add a wrapper to your form data if you will be publishing multiple forms to OpenFn. You could use ",(0,r.kt)("inlineCode",{parentName:"li"},'{"form":"my_form", "body": %SUBMISSION%}'),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add Service")," to start forwarding new Kobo submissions to OpenFn.org.")),(0,r.kt)("p",null,"To test to integration, add a submission manually using the ",(0,r.kt)("inlineCode",{parentName:"p"},"enter data in browser")," button. Head back to your history page at OpenFn to view the newly submitted data and write a new ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"job")," to map your Kobo data to any destination system on OpenFn."),(0,r.kt)("p",null,"Here's a sample post from Kobo REST service. Note that questions inside groups are prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"groupname/")," rather than sitting inside a group object like ODK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "meta/instanceID": "uuid:19d72997-8316-4e02-8016-4a8ddf6a2aa4",\n  "group1/name": "twenty",\n  "group1/age": "19",\n  "formhub/uuid": "6f5773a110b046cb97e3d71f6c04e7a6",\n  "first_q": "hello",\n  "final_q": "why not?",\n  "_xform_id_string": "groups",\n  "_uuid": "19d72997-8316-4e02-8016-4a8ddf6a2aa4",\n  "_userform_id": "taylordowns2000_groups",\n  "_tags": [],\n  "_submitted_by": null,\n  "_submission_time": "2016-04-22T06:38:20",\n  "_status": "submitted_via_web",\n  "_notes": [],\n  "_id": 889409,\n  "_geolocation": [null, null],\n  "_bamboo_dataset_id": "",\n  "_attachments": []\n}\n')),(0,r.kt)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.github.com/openfn/language-kobotoolbox"},"OpenFn/language-kobotoolbox"),' for some helper functions for extracting or "getting" data in bulk from Kobo Toolbox.'),(0,r.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,r.kt)("p",null,"See the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConSoSci")," Github repo for several example Kobo-to-database jobs: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/consosci"},"https://github.com/OpenFn/consosci")))}u.isMDXComponent=!0}}]);