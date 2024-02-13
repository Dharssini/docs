"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[47404],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>m});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(45072),o=(n(11504),n(95788));const a={title:"Troubleshooting",sidebar_label:"Troubleshooting"},i=void 0,s={unversionedId:"monitor-history/troubleshooting",id:"monitor-history/troubleshooting",title:"Troubleshooting",description:"This page provides troubleshooting tips for OpenFn v2 platform users.",source:"@site/docs/monitor-history/troubleshooting.md",sourceDirName:"monitor-history",slug:"/monitor-history/troubleshooting",permalink:"/documentation/monitor-history/troubleshooting",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/monitor-history/troubleshooting.md",tags:[],version:"current",frontMatter:{title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Rerun failures",permalink:"/documentation/monitor-history/rerunning-workflow"},next:{title:"Status Codes",permalink:"/documentation/monitor-history/status-codes"}},l={},p=[{value:"Runs",id:"runs",level:2},{value:"Status codes",id:"status-codes",level:3},{value:"The time it took for the workflow to fail",id:"the-time-it-took-for-the-workflow-to-fail",level:3},{value:"Run logs",id:"run-logs",level:3},{value:"Mappings",id:"mappings",level:4},{value:"Error messages",id:"error-messages",level:4},{value:"Leveraging search and filtering in OpenFn",id:"leveraging-search-and-filtering-in-openfn",level:2},{value:"Sign up for email alerts",id:"sign-up-for-email-alerts",level:2},{value:"More",id:"more",level:2},{value:"Common Error Messages",id:"common-error-messages",level:3}],u={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This page provides troubleshooting tips for ",(0,o.yg)("em",{parentName:"p"},"OpenFn v2 platform")," users."),(0,o.yg)("h2",{id:"runs"},"Runs"),(0,o.yg)("p",null,"One of the most helpful pages for troubleshooting on OpenFn is the\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/monitor-history/activity-history"},"History")," page.\nThis page provides a list of all of the runs executed for a Work Order and their status. Project administrators can troubleshoot errors by clicking into the run to review the run details. Learn more about runs ",(0,o.yg)("a",{parentName:"p",href:"/documentation/monitor-history/inspect-runs"},"here")," here."),(0,o.yg)("h3",{id:"status-codes"},"Status codes"),(0,o.yg)("p",null,"Every run will have a status code. The status code is a way for OpenFn to classify\nthe run status and can help you troubleshoot errors. Learn more about OpenFn\nstatus codes and what each one means ",(0,o.yg)("a",{parentName:"p",href:"/documentation/monitor-history/status-codes"},"here"),"."),(0,o.yg)("h3",{id:"the-time-it-took-for-the-workflow-to-fail"},"The time it took for the workflow to fail"),(0,o.yg)("p",null,"The run will also record how long it took before the workflow failed. This\ninformation helps users understand if the workflow is taking longer than it should\nand is especially helpful with errors that involve timeouts. You can use the run\nto determine at which operation the workflow is timing out and determine if the workflow\nperformance can be optimized."),(0,o.yg)("h3",{id:"run-logs"},"Run logs"),(0,o.yg)("p",null,"As workflows are developed it is important to log details which will make testing and\ntroubleshooting much easier in the future. Keep reading for the two most\nimportant parts of a run log!"),(0,o.yg)("h4",{id:"mappings"},"Mappings"),(0,o.yg)("p",null,"If possible, the logs should be written so that you can see exactly what was mapped between\nthe source system and the destination system. In summary,\nthe log can have a ",(0,o.yg)("strong",{parentName:"p"},'"Data received from source system"')," section and a ",(0,o.yg)("strong",{parentName:"p"},'"Data\nto be uploaded to destination system"')," section."),(0,o.yg)("p",null,"These logs can help admins verify that the source data and the data being\nuploaded to the destination system is correct. For example, seeing in the logs\nthat a unique identifier is being mapped to ",(0,o.yg)("inlineCode",{parentName:"p"},"undefined")," in the destination\nsystem can help you understand this Salesforce error message:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"METHOD_NOT_ALLOWED: HTTP Method 'PATCH' not allowed. Allowed are GET,HEAD,POST at HttpApi.getError"),"."),(0,o.yg)("h4",{id:"error-messages"},"Error messages"),(0,o.yg)("p",null,"The run log should also tell us if an error has been thrown, and depending on\nthe destination system, what the error message is. Sometimes the error message\nis very specific like:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"NOT_FOUND: Provided external ID field does not exist or is not accessible")),(0,o.yg)("p",null,"This error from Salesforce usually indicates that ",(0,o.yg)("inlineCode",{parentName:"p"},"External ID")," has not been\nchecked in the field settings in Salesforce."),(0,o.yg)("p",null,"Other error messages are not as clear and can take some time to debug:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"TypeError [Error]: Cannot read property 'split' of undefined")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"TypeErrors"))," usually indicate that the job received a part of the input\nthat it wasn't expecting, or there is a syntax error in your job code. It means\nthat the job needs to be updated to know how to handle the input. In this\ncase, the job received an old version of the Commcare form which was missing a\nfield on which the job called the ",(0,o.yg)("inlineCode",{parentName:"p"},"split")," function. You can determine this by\nreviewing the job for which fields the split function is being called on and\nchecking that they are all present in the message."),(0,o.yg)("p",null,"The more you test and troubleshoot with a particular system, the more familiar\nwith its error messages you become."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"OpenFn has outlined several of the more common error messages specific to some\nof the systems that we have integrated in the past. Explore these systems and\ntheir error messages ",(0,o.yg)("a",{parentName:"p",href:"/adaptors#connect-anything"},"here"),".")),(0,o.yg)("h2",{id:"leveraging-search-and-filtering-in-openfn"},"Leveraging search and filtering in OpenFn"),(0,o.yg)("p",null,"Leverage the various search functionalities in OpenFn to find the right runs to support your troubleshooting. You can search on the History page across OpenFn IDs, Inputs, and/or Logs. "),(0,o.yg)("p",null,"Check out this ",(0,o.yg)("a",{parentName:"p",href:"https://youtu.be/XIUykmLCxwQ?si=hquc8rPTJrAZkbbD"},"video")," for how to use Search."),(0,o.yg)("h2",{id:"sign-up-for-email-alerts"},"Sign up for email alerts"),(0,o.yg)("p",null,"You can turn on notifications to receive ",(0,o.yg)("a",{parentName:"p",href:"/documentation/manage-projects/notifications"},"email alerts")," when a workflow fails and subscribe to digests that summarize project activity."),(0,o.yg)("h2",{id:"more"},"More"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"What happens if my survey data from ODK needs to link to existing records in\nmy Salesforce system but a respondent enters or selects an invalid\n",(0,o.yg)("inlineCode",{parentName:"p"},"external ID"),"?")),(0,o.yg)("p",null,"Great question, and don't worry, it happens all the time. Assuming you've\nalready taken all possible measures to either pre-load external IDs in your ODK\nform or use more human-proof IDs (like barcodes and fingerprints) here's the\nflow of work:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Read the email, and inspect the reason for failure.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"99% of failed runs on OpenFn are due to ",(0,o.yg)("inlineCode",{parentName:"p"},"value mismatches"),". The ",(0,o.yg)("em",{parentName:"p"},"collected"),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"id")," in ODK doesn't match the ",(0,o.yg)("em",{parentName:"p"},"expected")," ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," in Salesforce. You must now\nchoose to either:"),(0,o.yg)("p",{parentName:"li"},"A. Edit the source ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," in your ",(0,o.yg)("inlineCode",{parentName:"p"},"receipt")," & retry the attempt."),(0,o.yg)("p",{parentName:"li"},"B. Edit the related ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," in your destination system & retry the attempt."),(0,o.yg)("p",{parentName:"li"},'C. Ignore the attempt\u2014this source data will never reach your destination\nsystem. (There have been reports of ODK Aggregate\'s JSON publisher sending\nduplicate values. If that happens and your run fails due to "duplicate\nvalues" on a particular unique field you can safely ignore the run in\nOpenFn.)'))),(0,o.yg)("p",null,"Editing data in your destination system can be done through that system's\ninterface. Many tools that act as ",(0,o.yg)("inlineCode",{parentName:"p"},"sources")," (like ODK) do not allow for easy\nediting and re-submission of data. You can use OpenFn to edit the source data\nbefore retrying the attempt."),(0,o.yg)("h3",{id:"common-error-messages"},"Common Error Messages"),(0,o.yg)("p",null,"The most common error messages with explanations are:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"DUPLICATE_VALUE: duplicate value found: ODK_uuid__c duplicates value on record with id: a0524000005wNw0\nThe insert is blocked because you are attempting to create a new record with a\nunique field with the same value as an existing record.\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"Required value missing\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"ExternalId not found\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"{ INVALID_FIELD_FOR_INSERT_UPDATE: Unable to create/update fields: Contact__c.\nPlease check the security settings of this field and verify that it is\nread/write for your profile or permission set. }\n")),(0,o.yg)("p",null,"This last one may arise if a master-detail relationship in Salesforce is not set\nas reparentable and the user attempts to run an upsert."))}h.isMDXComponent=!0}}]);