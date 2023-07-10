"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[12306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67082:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={title:"Salesforce"},r=void 0,s={unversionedId:"salesforce",id:"salesforce",title:"Salesforce",description:"App Overview",source:"@site/adaptors/salesforce.md",sourceDirName:".",slug:"/salesforce",permalink:"/fr/adaptors/salesforce",draft:!1,tags:[],version:"current",frontMatter:{title:"Salesforce"},sidebar:"adaptors",previous:{title:"resourcemap developer readme",permalink:"/fr/adaptors/packages/resourcemap-readme"},next:{title:"salesforce@4.0.3",permalink:"/fr/adaptors/packages/salesforce-docs"}},l={},p=[{value:"App Overview",id:"app-overview",level:2},{value:"Data Model",id:"data-model",level:3},{value:"Integration Use Cases",id:"integration-use-cases",level:2},{value:"APIs &amp; Integration Options",id:"apis--integration-options",level:2},{value:"App Setup &amp; Integration Tips",id:"app-setup--integration-tips",level:2},{value:"Field API Names",id:"field-api-names",level:3},{value:"Mapping and Design Considerations",id:"mapping-and-design-considerations",level:3},{value:"External Identifiers",id:"external-identifiers",level:4},{value:"Relationships and Lookup Fields",id:"relationships-and-lookup-fields",level:4},{value:"Picklist fields",id:"picklist-fields",level:4},{value:"Timeout considerations",id:"timeout-considerations",level:4},{value:"Salesforce Credentials",id:"salesforce-credentials",level:3},{value:"Resetting Your Security Token",id:"resetting-your-security-token",level:4},{value:"Common Errors",id:"common-errors",level:2},{value:"OpenFn Adaptors",id:"openfn-adaptors",level:2},{value:"Example Implementations",id:"example-implementations",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"app-overview"},"App Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.salesforce.com/"},"Salesforce")," is a cloud-based ",(0,o.kt)("strong",{parentName:"p"},"customer\nrelationship management (CRM)")," platform that hosts applications that customers\ncan access online. Beyond its core CRM product, Salesforce offers a customizable\nplatform for configuring relational databases, business automation, web portals,\nreporting tools, and robust applications for supporting a wide range of use\ncases."),(0,o.kt)("h3",{id:"data-model"},"Data Model"),(0,o.kt)("p",null,'At its core, Salesforce is a relational database. It has some out-of-box or\n"standard" data tables and features, but can be easily extended to include\n"custom" metadata configuration and other app features.'),(0,o.kt)("p",null,"Salesforce data is stored in ",(0,o.kt)("strong",{parentName:"p"},"individual records (rows)")," and organized within\n",(0,o.kt)("strong",{parentName:"p"},"objects (tables)"),". Record attributes are captured in ",(0,o.kt)("strong",{parentName:"p"},"fields (columns)"),'.\nThe data model is configurable, but there are some standard objects that are\nprovided. Note that naming conventions for custom and standard metadata may\ndiffer (e.g., all "custom" field names include the suffix ',(0,o.kt)("inlineCode",{parentName:"p"},"__c")," like\n",(0,o.kt)("inlineCode",{parentName:"p"},"CustomField__c"),")."),(0,o.kt)("p",null,"Learn more about how data is structured in Salesforce at the links below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How data is organized in Salesforce:\n",(0,o.kt)("a",{parentName:"li",href:"https://help.salesforce.com/s/articleView?id=sf.basics_organize_data.htm&type=5"},"https://help.salesforce.com/s/articleView?id=sf.basics_organize_data.htm&type=5")),(0,o.kt)("li",{parentName:"ul"},"Salesforce objects: ",(0,o.kt)("a",{parentName:"li",href:"https://www.salesforcetutorial.com/salesforce-objects/"},"https://www.salesforcetutorial.com/salesforce-objects/"))),(0,o.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,o.kt)("p",null,"Salesforce may be used to manage an organization's programs, operations,\nfundraising, and more. Therefore integrations with 3rd-party apps is a common\nrequirement."),(0,o.kt)("p",null,"Example user stories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a program or M&E manager working in areas with limited internet\nconnectivity, I would like to collect data on a mobile applicaiton that\nsupports offline data capture, but then sync the data collected to Salesforce\nso that I can centrally monitor field activities and analyze data collected to\nevaluate program impact."),(0,o.kt)("li",{parentName:"ul"},"As a fundraiser at an NGO, I would like to see all donor information tracked\nin Salesforce so that I can better monitor fundraising activities, nurture\nrelationships with all funders, and manage campaigns.")),(0,o.kt)("h2",{id:"apis--integration-options"},"APIs & Integration Options"),(0,o.kt)("p",null,"Salesforce has a rich ecosystem of developers and ready-made applications. See\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://appexchange.salesforce.com/"},"Salesforce App Exchange")," for existing\napps and integrations custom-made for Salesforce. If existing applications do\nnot meet your functional or budget requirements, leverage Salesforce's robust\nAPIs to configure a custom integration."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"APIs:")," Salesforce has a robust set of RESTful APIs that support a wide\nrange of operations. For connecting with these APIs, including the\n",(0,o.kt)("inlineCode",{parentName:"li"},"Bulk API"),", OpenFn has developed a robust API adaptor for quicker integration\nsetup - see\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"language-salesforce")),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Webhook:")," By configuring\n",(0,o.kt)("a",{parentName:"li",href:"https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_understanding.htm"},(0,o.kt)("inlineCode",{parentName:"a"},"Outbound Messages")),"\nthat can be sent via criteria-based ",(0,o.kt)("inlineCode",{parentName:"li"},"Workflow Rules"),", Salesforce Admins can\nconfigure real-time notifications to be sent to OpenFn (or any endpoint URL)\nwhen a specific event occurs. (E.g., every time a new ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact")," is created,\nsend an Outbound Message to OpenFn to trigger a data sync between that SF\n",(0,o.kt)("inlineCode",{parentName:"li"},"Contact")," record and another data system.)")),(0,o.kt)("h2",{id:"app-setup--integration-tips"},"App Setup & Integration Tips"),(0,o.kt)("p",null,"Salesforce provides robust online documentation (see\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs"},"Developer Docs"),") and tutorials (see\n",(0,o.kt)("a",{parentName:"p",href:"https://trailhead.salesforce.com/en?utm_campaign=13515883882&utm_content=125227478042&utm_medium=paid&utm_source=google_sem"},"Trailheads"),")\nfor learning about the platform. See below for helpful tips for your next\nSalesforce integration project."),(0,o.kt)("h3",{id:"field-api-names"},"Field API Names"),(0,o.kt)("p",null,"Salesforce ",(0,o.kt)("strong",{parentName:"p"},"field API names")," (unique names for each piece of metadata - e.g.,\n",(0,o.kt)("inlineCode",{parentName:"p"},"PatientID__c"),") should be referenced in OpenFn integrations, not ",(0,o.kt)("strong",{parentName:"p"},"field\nlabels")," (business-friendly label that the end user sees - e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"Patient ID"),")\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128650593-343090da-7f12-468a-aa51-1f87f1cf9f34.png",alt:"image"}),"."),(0,o.kt)("p",null,"To view the Salesforce API field names, navigate to the Salesforce backend. Via\nthe web app, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Setup")," from the top naviagation menu to browse the\nSalesforce backend settings, metadata configuration, object and field names,\netc."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Classic")," view, search for ",(0,o.kt)("inlineCode",{parentName:"li"},"Object")," in the left-hand ",(0,o.kt)("inlineCode",{parentName:"li"},"Setup")," search box\nwithout hitting Enter. From the quick results, select ",(0,o.kt)("inlineCode",{parentName:"li"},"Create -> Objects"),".\nThis takes you to all the custom objects. Select an object and you'll see all\nthe fields and relationships on the object."),(0,o.kt)("li",{parentName:"ul"},"You can also easily view Salesforce API names via the front-end UI by\ndownloading the Chrome extension\n",(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/salesforce-show-api-name/dcfecmnffjopafbbbaepgopfcphnoham"},"Salesforce Show API Name"),".\nFollow the instructions for adding it to Chrome and use it to display API\nnames without going to Setup.")),(0,o.kt)("h3",{id:"mapping-and-design-considerations"},"Mapping and Design Considerations"),(0,o.kt)("h4",{id:"external-identifiers"},"External Identifiers"),(0,o.kt)("p",null,"Individual fields can be configured as ",(0,o.kt)("inlineCode",{parentName:"p"},"external identifiers")," to search for a\nrecord via a the API/an external app and to help prevent duplicate records from\nbeing created in Salesforce. To enable this setting on an individual field,\nensure ",(0,o.kt)("inlineCode",{parentName:"p"},"External ID")," is checked on the field settings. Learn more about external\nidentifiers in Salesforce at\n",(0,o.kt)("a",{parentName:"p",href:"https://www.infallibletechie.com/2014/11/what-is-external-id-in-salesforce.html"},"https://www.infallibletechie.com/2014/11/what-is-external-id-in-salesforce.html"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80456839/128650680-e10fa395-bddb-45bd-bd6c-3a9dda8998f8.png",alt:"image"})),(0,o.kt)("h4",{id:"relationships-and-lookup-fields"},"Relationships and Lookup Fields"),(0,o.kt)("p",null,"When mapping ",(0,o.kt)("inlineCode",{parentName:"p"},"lookup"),' fields (which are similar to database "foreign keys") in\nSalesforce, use the external identifier of the related record. Examples:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Say there is a ",(0,o.kt)("inlineCode",{parentName:"li"},"Survey__c")," object in Salesforce with a lookup field called\n",(0,o.kt)("inlineCode",{parentName:"li"},"Respondent__c")," that looks up to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Person__c"),"object with external ID\n",(0,o.kt)("inlineCode",{parentName:"li"},"PersonID__c"),". To populate the ",(0,o.kt)("inlineCode",{parentName:"li"},"Survey__c.Respondent__c")," lookup field, our\nmapping will look as follows:\n",(0,o.kt)("inlineCode",{parentName:"li"},"Respondent__r.PersonID__c: {personExtIdFromSourceData}"),"."),(0,o.kt)("li",{parentName:"ul"},"If the metadata are standard objects or fields, then you do not need the ",(0,o.kt)("inlineCode",{parentName:"li"},"__r"),"\nto indicate there is a relationship. Example mapping:\n",(0,o.kt)("inlineCode",{parentName:"li"},"Account.CustomAccountID__c: {AcctIdFromSourceData}")),(0,o.kt)("li",{parentName:"ul"},"If using the OpenFn adaptor, you may also choose to leverage the\n",(0,o.kt)("inlineCode",{parentName:"li"},"relationship(...)")," helper function in your job. Example mapping:\n",(0,o.kt)("inlineCode",{parentName:"li"},"relationship('Respondent__r', 'PersonID__c', dataValue('sourceField'))"))),(0,o.kt)("h4",{id:"picklist-fields"},"Picklist fields"),(0,o.kt)("p",null,"As you design your integration and map data elements between systems, make sure\nthat option values for ",(0,o.kt)("strong",{parentName:"p"},"picklist")," fields also match the data from your\nconnected application. If your other app's field value options do not match\nSalesforce picklist values, you should consider (1) transforming or re-labeling\nthe values received from the source system before sending to Salesforce, or (2)\nadd new ",(0,o.kt)("inlineCode",{parentName:"p"},"picklist values")," to Salesforce to align the metadata between systems."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example:")," When mapping a field that specifies ",(0,o.kt)("inlineCode",{parentName:"p"},"sex"),", the source system could\nhave the options ",(0,o.kt)("inlineCode",{parentName:"p"},'"male", "female", "other"')," and the destination system has the\noptions ",(0,o.kt)("inlineCode",{parentName:"p"},'"M", "F", "Other"'),". The mappings would need to specify how to align the\nvalues (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"M: male, F: female"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Multi-Select Picklist fields"),": If mapping to a Salesforce\n",(0,o.kt)("inlineCode",{parentName:"p"},"multi-select picklist field"),", note that multiple values should be formatted as\nsemicolon-separated strings (e.g.,\n",(0,o.kt)("inlineCode",{parentName:"p"},"Services__c: 'Food;Counselling;Medical_Aid"),")."),(0,o.kt)("h4",{id:"timeout-considerations"},"Timeout considerations"),(0,o.kt)("p",null,"The Salesforce adaptor currently waits for the batch to finish syncing to Salesforce to ensure that the batch results (i.e., whether the batch import was successful, how many records succeeded, how many failures) can be relayed back to the OpenFn user in Activity History. This can potentially cause timeout errors in OpenFn if the batch sync triggers Salesforce automation which takes long to complete. "),(0,o.kt)("p",null,"In future adaptor updates, OpenFn will consider adding a new option to the adaptor to not wait for the batch results, and to have the batch run asynchronously. The tradeoff is that the OpenFn run would always succeed\u2013and the administrator would have to log into Salesforce and monitor the batch results via the Salesforce Setup \u201cBulk Data Load Jobs\u201d page. With this approach, OpenFn wouldn\u2019t set limits on the batch processing time avoiding timeout errors, but it does move the batch monitoring from OpenFn to Salesforce. "),(0,o.kt)("h3",{id:"salesforce-credentials"},"Salesforce Credentials"),(0,o.kt)("p",null,"Salesforce requires a username, password, login URL, and security token to\nauthenticate via a user. ",(0,o.kt)("strong",{parentName:"p"},"Note every time you reset the user's password, the\nsecurity token will reset and you need to update the Credential record used in\nyour OpenFn job.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Credentials Menu",src:a(60958).Z,width:"932",height:"610"})),(0,o.kt)("p",null,'A "Salesforce" Credential record should include:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Username"),(0,o.kt)("li",{parentName:"ul"},"Password"),(0,o.kt)("li",{parentName:"ul"},'Security Token (Salesforce will email you this when you set your password. If\nyou cannot find "security token" in your inbox, see below for how to reset\nit.)'),(0,o.kt)("li",{parentName:"ul"},"Login URL: If a production system, use ",(0,o.kt)("inlineCode",{parentName:"li"},"https://login.salesforce.com/")," (unless\nyou have a custom domain ",(0,o.kt)("inlineCode",{parentName:"li"},"https://domainName.salesforce.com/"),"). For sandbox\nenvironments, ",(0,o.kt)("inlineCode",{parentName:"li"},"https://test.salesforce.com/"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Salesforce Cred",src:a(32372).Z,width:"1038",height:"974"})),(0,o.kt)("p",null,"For use in the CLI, see an example\n",(0,o.kt)("a",{parentName:"p",href:"/adaptors/packages/salesforce-configuration-schema"},"salesforce configuration")),(0,o.kt)("h4",{id:"resetting-your-security-token"},"Resetting Your Security Token"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=sf.user_security_token.htm&type=5"},"See instructions here"),"\nor below screenshot. Once reset, you will receive an email from Salesforce.\nPlease save this ",(0,o.kt)("inlineCode",{parentName:"p"},"security token")," in your OpenFn ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Token Reset",src:a(14764).Z,width:"1024",height:"470"})),(0,o.kt)("h2",{id:"common-errors"},"Common Errors"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"INVALID_FIELD: Foreign key external id not found"),": This error message\nusually means that the parent record for an object has not been synced. For\nexample, if one tries uploading participants for an event that has not yet\nbeen synced."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"TypeError [Error]"),":This error usually mean that the job received a part of\nthe message that it wasn't expecting, or there is a syntax error in your job\ncode. It means that the job needs to be updated to know how to handle the\nmessage."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"NOT_FOUND: Provided external ID field does not exist or is not accessible"),":\nThis error usually means that ",(0,o.kt)("inlineCode",{parentName:"li"},"External ID")," has not been checked in the field\nsettings in Salesforce. See Mapping and Design Considerations section above."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"MULTIPLE_CHOICES: Multiple records found"),": This error means that Salesforce\nhas found multiple records with the ",(0,o.kt)("inlineCode",{parentName:"li"},"External ID")," that was specified."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"REQUIRED_FIELD_MISSING: Required fields are missing"),": This error usually\nmeans that a field which is required on the object being updated has not been\nset."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"JSON_PARSER_ERROR"),": This error usually means there is an error with how you\nare mappings and assigning fields. For example, this error would be thrown if\nan empty string ' ' was being mapped to a date value."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RangeError [Error]: Invalid time value"),": This error is telling us that the\ndatetime in the source data is in an unexpected format and not handled by the\njob. You may need to either manually clean the source data, or update the\ncleaning rules in the job to automate this cleaning step."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"INVALID_FIELD_FOR_INSERT_UPDATE: Unable to create/update fields"),": This might\noccur when trying to update a Relationship field, for example a Person\nrelated to a Person's Visit. The field setting ",(0,o.kt)("inlineCode",{parentName:"li"},"Allow reparenting")," on the\nMaster-Detail relationship field may need to be turned on."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"UNABLE_TO_LOCK_ROW: unable to obtain exclusive access to this record"),": This error occurs when either 1) the OpenFn job tries to update the same record more than once at the same time or 2) the OpenFn job tries to updates a Salesforce record at the same time as someone else in the Salesforce system (this includes any automation that may be running in parallel to the OpenFn jobs). ")),(0,o.kt)("h2",{id:"openfn-adaptors"},"OpenFn Adaptors"),(0,o.kt)("p",null,"OpenFn has a robust\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"language-salesforce"))," adaptor\nwith a range of helper functions for common CRUD & upsert operations, and for\naccessing the Salesforce bulk API."),(0,o.kt)("h2",{id:"example-implementations"},"Example Implementations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MiracleFeet (CommCare-to-Salesforce sync):\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/miracle-feet"},"https://github.com/OpenFn/miracle-feet")),(0,o.kt)("li",{parentName:"ul"},"Lwala (CommCare-Salesforce 2-way sync): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/lwala"},"https://github.com/OpenFn/lwala")),(0,o.kt)("li",{parentName:"ul"},"GRS CommCare - Salesforce sync: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/grassroot-soccer"},"https://github.com/OpenFn/grassroot-soccer"))))}u.isMDXComponent=!0},60958:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/credentials-34df63a0847b92ca428f9e2e8c96b5be.png"},32372:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/salesforce-cred-894328ae9133e9f75346efcfdf350f7f.png"},14764:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/security-token-823f24f2a4ff6deebc203a931f6104c4.png"}}]);