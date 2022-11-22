"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[31109],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),f=r,m=u["".concat(d,".").concat(f)]||u[f]||c[f]||l;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},92257:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Handling multiple ODK repeat groups",sidebar_label:"\ud83d\udcdc Handling multiple ODK repeat groups",id:"ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",keywords:["library","job","expression","salesforce","create","dataPath","dataValue","each","field","fields","lastReferenceValue","merge"]},i=void 0,o={unversionedId:"library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",id:"library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",title:"Handling multiple ODK repeat groups",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",permalink:"/adaptors/library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",draft:!1,tags:[],version:"current",frontMatter:{title:"Handling multiple ODK repeat groups",sidebar_label:"\ud83d\udcdc Handling multiple ODK repeat groups",id:"ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",keywords:["library","job","expression","salesforce","create","dataPath","dataValue","each","field","fields","lastReferenceValue","merge"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Create SMS linked to contact",permalink:"/adaptors/library/jobs/auto/Create-SMS-Linked-to-Contact-in-SF"},next:{title:"\ud83d\udcdc Merge data into child array then upsert",permalink:"/adaptors/library/jobs/auto/upsert-many-items-in-array-with-value-outside-array"}},d={},s=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcdc ",(0,r.kt)("em",null,"This job is an official example from OpenFn.")),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: Handling multiple ODK repeat groups"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,r.kt)("inlineCode",{parentName:"a"},"latest"))),(0,r.kt)("li",{parentName:"ul"},"Created date unknown"),(0,r.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"100")," (an ",(0,r.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lastReferenceValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"merge")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/*\n  Create many records from an ODK submission, moving in and out of repeat\n  blocks, submitted by Taylor Downs @ OpenFn.\n*/\n\nbeta.each(\n  '$.data.data[*]',\n  create(\n    'ODK__c',\n    fields(\n      field('Event_Type__c', dataValue('event_type')),\n      field('Training_Type__c', dataValue('training_type')),\n      field('Event_Leader_ID__c', dataValue('leader')),\n      field('Event_Date__c', dataValue('date')),\n      field('metainstanceid__c', dataValue('*meta-instance-id*'))\n    )\n  )\n);\n\nbeta.each(\n  merge(\n    dataPath('data[*].attendee_new[*]'),\n    fields(field('parentId', lastReferenceValue('id')))\n  ),\n  create(\n    'ODK_Child_2__c',\n    fields(\n      field('ODK__c', dataValue('parentId')),\n      field('Barcode__c', dataValue('new_attendee_id')),\n      field('First_Name__c', dataValue('new_attendee_first_name')),\n      field('Last_Name__c', dataValue('new_attendee_last_name')),\n      field('Phone_Number__c', dataValue('new_attendee_phone'))\n    )\n  )\n);\n\nbeta.each(\n  merge(\n    dataPath('data[*].attendee[*]'),\n    fields(\n      field('parentId', function (state) {\n        return state.references[state.references.length - 1].id;\n      })\n      // ^^ This will get the sfID of the 1st item created.\n    )\n  ),\n  create(\n    'ODK_Child_1__c',\n    fields(\n      field('ODK__c', dataValue('parentId')),\n      field('Barcode__c', dataValue('attendee_id')),\n      field('Late__c', dataValue('late'))\n    )\n  )\n);\n\n")))}c.isMDXComponent=!0}}]);