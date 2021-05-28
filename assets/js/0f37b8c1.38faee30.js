(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2258],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72494:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"CommCare"},p={unversionedId:"apps/commcare",id:"apps/commcare",isDocsHomePage:!1,title:"CommCare",description:"CommCare is a powerful data collection",source:"@site/docs/apps/commcare.md",sourceDirName:"apps",slug:"/apps/commcare",permalink:"/documentation/apps/commcare",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/commcare.md",version:"current",frontMatter:{title:"CommCare"},sidebar:"docs",previous:{title:"Community Health Toolkit",permalink:"/documentation/apps/cht"},next:{title:"Go.Data",permalink:"/documentation/apps/godata"}},c=[{value:"Integration Options",id:"integration-options",children:[{value:"Web API",id:"web-api",children:[]},{value:"Forward cases and/or forms from CommCare to OpenFn",id:"forward-cases-andor-forms-from-commcare-to-openfn",children:[]},{value:"OpenFn Adaptors",id:"openfn-adaptors",children:[]},{value:"Example Integrations",id:"example-integrations",children:[]}]}],m={toc:c};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.dimagi.com/commcare/"},"CommCare")," is a powerful data collection\nplatform developed by Dimagi. It is an open-source platform, and is primarily best for mobile case management."),(0,o.kt)("h2",{id:"integration-options"},"Integration Options"),(0,o.kt)("p",null,"CommCare offers a number of integration options for extracting and/or loading\ndata to and from CommCare HQ."),(0,o.kt)("h3",{id:"web-api"},"Web API"),(0,o.kt)("p",null,"CommCare has different APIs for reading vs. updating data. Some helpful links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data APIs: ",(0,o.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Data+APIs"},"https://confluence.dimagi.com/display/commcarepublic/Data+APIs")),(0,o.kt)("li",{parentName:"ul"},"Bulk Case Upload API to mass update case records:\n",(0,o.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/display/commcarepublic/Bulk+Upload+Case+Data"},"https://confluence.dimagi.com/display/commcarepublic/Bulk+Upload+Case+Data"))),(0,o.kt)("h3",{id:"forward-cases-andor-forms-from-commcare-to-openfn"},"Forward cases and/or forms from CommCare to OpenFn"),(0,o.kt)("p",null,"See\n",(0,o.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128"},"CommCare docs"),'\non how to configure this webhook to "push" data to an external system like\nOpenFn. This option is great for ',(0,o.kt)("em",{parentName:"p"},"real-time")," data forwarding."),(0,o.kt)("p",null,"Quick instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Go to "Project Settings".'),(0,o.kt)("li",{parentName:"ol"},'Click "Data Forwarding".'),(0,o.kt)("li",{parentName:"ol"},'"Add a forwarding location" for Cases, Forms, or both.'),(0,o.kt)("li",{parentName:"ol"},"Specify JSON, using your OpenFn inbox URL as the target. See the\n",(0,o.kt)("a",{parentName:"li",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128"},"CommCare documentation"),"."),(0,o.kt)("li",{parentName:"ol"},"Create a\n",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/triggers#match-a-message-with-a-fragment-inside-another-object-called-form"},"message-filter trigger like this"),"."),(0,o.kt)("li",{parentName:"ol"},"Set up a ",(0,o.kt)("inlineCode",{parentName:"li"},"job")," running on that filter to process CommCare submissions or case\nupdates.")),(0,o.kt)("p",null,"We recommend updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection Settings")," to list emails that should be\nalerted if there is a data forwarding error. See docs:\n",(0,o.kt)("a",{parentName:"p",href:"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128#EnablingDataIntegration(FormandCaseForwarding)-Errornotifications"},"https://confluence.dimagi.com/pages/viewpage.action?pageId=12224128#EnablingDataIntegration(FormandCaseForwarding)-Errornotifications")),(0,o.kt)("h3",{id:"openfn-adaptors"},"OpenFn Adaptors"),(0,o.kt)("p",null,"OpenFn implementations have leveraged both the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CommCare")," adaptors to\nconnect with the CommCare API. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-commcare"},"https://github.com/OpenFn/language-commcare"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http"},"https://github.com/OpenFn/language-http")),(0,o.kt)("h3",{id:"example-integrations"},"Example Integrations"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/miracle-feet"},"https://github.com/OpenFn/miracle-feet")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/lwala"},"https://github.com/OpenFn/lwala")))}l.isMDXComponent=!0}}]);