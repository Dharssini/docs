"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1108],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53370:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Open Data Kit (ODK)"},p=void 0,s={unversionedId:"apps/odk",id:"apps/odk",isDocsHomePage:!1,title:"Open Data Kit (ODK)",description:"Open Data Kit (ODK) Collect",source:"@site/docs/apps/odk.md",sourceDirName:"apps",slug:"/apps/odk",permalink:"/documentation/apps/odk",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/odk.md",tags:[],version:"current",frontMatter:{title:"Open Data Kit (ODK)"},sidebar:"docs",previous:{title:"Moodle",permalink:"/documentation/apps/moodle"},next:{title:"Ona.io",permalink:"/documentation/apps/ona"}},c=[{value:"Open Data Kit (ODK) Collect",id:"open-data-kit-odk-collect",children:[],level:2},{value:"Open Data Kit (ODK) Aggregate",id:"open-data-kit-odk-aggregate",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"open-data-kit-odk-collect"},"Open Data Kit (ODK) Collect"),(0,r.kt)("p",null,"To bypass ODK Aggregate and submit forms directly to OpenFn make the following\nchanges in your ODK Collect app."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"General Settings"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Server Settings"),"."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Type"),", select ",(0,r.kt)("inlineCode",{parentName:"li"},"Other"),"."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"URL"),", enter `",(0,r.kt)("a",{parentName:"li",href:"https://www.openfn.org"},"https://www.openfn.org")),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Submission path"),", enter ",(0,r.kt)("inlineCode",{parentName:"li"},"/inbox/your-unique-inbox-url")," (you can copy\nthis from your OpenFn Inbox)."),(0,r.kt)("li",{parentName:"ol"},"Optional: If you have enabled auth methods on your inbox, enter your\n",(0,r.kt)("inlineCode",{parentName:"li"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"password")," on this same screen.")),(0,r.kt)("p",null,"Note that you cannot load forms from OpenFn. Forms must be loaded directly via\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.opendatakit.org/collect-forms/#loading-forms-directly"},"ODK's direct method"),",\nwhich allows you to send forms as files via email/Whatsapp. Users can then\nchoose to download the files and save them in the ",(0,r.kt)("inlineCode",{parentName:"p"},"odk/ forms")," folder on their\nmobile."),(0,r.kt)("p",null,"Note that if you want to reverse this setup and configure ODK Collect to\nre-connect to your Aggregate instance again:`"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go back to ",(0,r.kt)("inlineCode",{parentName:"li"},"General Settings"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Server Settings"),"."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Type"),", select ",(0,r.kt)("inlineCode",{parentName:"li"},"ODK Aggregate"),"."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"URL"),", enter ",(0,r.kt)("inlineCode",{parentName:"li"},"Your Aggregate URL")),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Submission path"),", enter ",(0,r.kt)("inlineCode",{parentName:"li"},"/submissions"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter your ODK Aggregate ",(0,r.kt)("inlineCode",{parentName:"li"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"password")," on this same screen.")),(0,r.kt)("h2",{id:"open-data-kit-odk-aggregate"},"Open Data Kit (ODK) Aggregate"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'To new submissions from ODK in real-time, click the "Form Management" tab at\nthe top of your Aggregate interface.'),(0,r.kt)("li",{parentName:"ol"},'Click "Publish" next to the form you\'d like to publish to OpenFn.'),(0,r.kt)("li",{parentName:"ol"},"A dialogue box will open."),(0,r.kt)("li",{parentName:"ol"},'In the "Publish To:" picklist, select ',(0,r.kt)("inlineCode",{parentName:"li"},"Z-ALPHA JSON Server"),"."),(0,r.kt)("li",{parentName:"ol"},'Choose which data to publish in the "Data to Publish:" picklist. You may:\n',(0,r.kt)("strong",{parentName:"li"},'"Upload Existing Data ONLY"')," (ideal for migrations of finished data sets),\n",(0,r.kt)("strong",{parentName:"li"},'"Stream New Submission Data ONLY"')," (ideal for new projects), or ",(0,r.kt)("strong",{parentName:"li"},'"BOTH\nUpload Existing & Stream New Submission Data"')," (ideal for connecting ongoing\nprojects which are already running)."),(0,r.kt)("li",{parentName:"ol"},'In the "URL to publish to:" text box, enter your OpenFn Inbox UUID. (e.g.,\n',(0,r.kt)("inlineCode",{parentName:"li"},"https://www.openfn.org/inbox/8ad63a29-mUCh-sEcRET-cODes-wOW"),")"),(0,r.kt)("li",{parentName:"ol"},'Leave "Authorization token:" blank.'),(0,r.kt)("li",{parentName:"ol"},'Leave "Include Media as:" set to "Links(URLs) to Media".'),(0,r.kt)("li",{parentName:"ol"},'Click "Publish" and enter your email address in the dialogue box.'),(0,r.kt)("li",{parentName:"ol"},'Click the "Published Data" tab under "Form Management" and select your form\nto view the status of your publisher. You can also now check your OpenFn\ninbox to see ODK submissions arrive.')))}d.isMDXComponent=!0}}]);