"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[87393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(n),u=i,g=c["".concat(o,".").concat(u)]||c[u]||p[u]||r;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const r={title:"Triggers"},l=void 0,s={unversionedId:"build/triggers",id:"build/triggers",title:"Triggers",description:"Triggers are responsible for starting job runs automatically. They come in 4",source:"@site/docs/build/triggers.md",sourceDirName:"build",slug:"/build/triggers",permalink:"/documentation/build/triggers",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/triggers.md",tags:[],version:"current",frontMatter:{title:"Triggers"},sidebar:"docs",previous:{title:"Working with branches",permalink:"/documentation/jobs/working_with_branches"},next:{title:"Credentials",permalink:"/documentation/build/credentials"}},o={},m=[{value:"Trigger types",id:"trigger-types",level:2},{value:"Message Filter Triggers",id:"message-filter-triggers",level:3},{value:"Cron Triggers (formerly timers)",id:"cron-triggers-formerly-timers",level:3},{value:"Flow Triggers",id:"flow-triggers",level:3},{value:"Fail Triggers",id:"fail-triggers",level:3},{value:"Processing cron jobs",id:"processing-cron-jobs",level:2},{value:"Keeping a cursor in <code>state</code> for timer Jobs",id:"keeping-a-cursor-in-state-for-timer-jobs",level:4},{value:"Managing the size of <code>state</code> for Timer Jobs",id:"managing-the-size-of-state-for-timer-jobs",level:3},{value:"A quick fix for final state bloat",id:"a-quick-fix-for-final-state-bloat",level:3},{value:"Filter Matching in Detail",id:"filter-matching-in-detail",level:2},{value:"Filter 1, simple inclusion",id:"filter-1-simple-inclusion",level:3},{value:"Message &quot;a&quot; will match",id:"message-a-will-match",level:4},{value:"Message &quot;b&quot; will NOT match",id:"message-b-will-not-match",level:4},{value:"Filter 2, inclusion <em>and</em> exclusion",id:"filter-2-inclusion-and-exclusion",level:3},{value:"Message &quot;c&quot; will match",id:"message-c-will-match",level:4},{value:"Message &quot;d&quot; will NOT match",id:"message-d-will-not-match",level:4},{value:"More filter samples",id:"more-filter-samples",level:2},{value:"Match messages <code>WHERE</code> the <code>formId</code> is <code>&quot;Robot_Photo_21.04.2015&quot;</code>",id:"match-messages-where-the-formid-is-robot_photo_21042015",level:3},{value:"Match a message with two fragments inside an array called <code>data</code>",id:"match-a-message-with-two-fragments-inside-an-array-called-data",level:3},{value:"Match a message <code>WHERE</code> this <code>AND</code> that are both included",id:"match-a-message-where-this-and-that-are-both-included",level:3},{value:"Match a message using exclusion",id:"match-a-message-using-exclusion",level:3},{value:"Match a message with a fragment inside another object called <code>form</code>",id:"match-a-message-with-a-fragment-inside-another-object-called-form",level:3},{value:"An exclusion demo",id:"an-exclusion-demo",level:2}],d={toc:m},c="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Triggers are responsible for starting job runs automatically. They come in 4\ntypes. The most common are "message filter" triggers, but there are also "cron"\ntriggers, "flow" triggers, and "fail" triggers.'),(0,i.kt)("h2",{id:"trigger-types"},"Trigger types"),(0,i.kt)("h3",{id:"message-filter-triggers"},"Message Filter Triggers"),(0,i.kt)("p",null,"Message Filter triggers watch for inbound messages and check to see if the data\nin those messages meet their ",(0,i.kt)("strong",{parentName:"p"},"inclusion criteria")," and ",(0,i.kt)("em",{parentName:"p"},"don't")," meet their\n",(0,i.kt)("strong",{parentName:"p"},"exclusion criteria"),". If they pass these tests and if there are active jobs\nconfigured to use that trigger, a run will be started for each message/job\ncombination."),(0,i.kt)("p",null,"You, the user, specify the inclusion and exclusion criteria which determines\nwhich inbound messages should trigger job runs. Broadly speaking, if part of a\nmessage body ",(0,i.kt)("strong",{parentName:"p"},"matches")," the JSON you provide as the inclusion filter, and\n",(0,i.kt)("em",{parentName:"p"},"doesn't")," match the JSON you provided as the exclusion filter, a job will run\n(assuming you created one with ",(0,i.kt)("inlineCode",{parentName:"p"},"autoprocess")," turned on)."),(0,i.kt)("p",null,"The filter criteria takes the form of a string of valid JSON like this:\n",(0,i.kt)("inlineCode",{parentName:"p"},'{"Name":"Aleksa Iwobi"}'),". In an SQL query, this string will be used in the\nWHERE clause and make use of special ",(0,i.kt)("inlineCode",{parentName:"p"},"jsonb")," operators like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM messages\n  WHERE body::jsonb @> \'{"Name":"Nicholas P\xe9p\xe9"}\'::jsonb;\n')),(0,i.kt)("p",null,"If you provide a exclusion criteria like ",(0,i.kt)("inlineCode",{parentName:"p"},'{"type": "fake-data"}')," the resulting\nquery will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM messages\n  WHERE body::jsonb @> \'{"Name":"Nicholas P\xe9p\xe9"}\'::jsonb\n  AND NOT (body::jsonb @> \'{"type":"fake-data"}\'::jsonb);\n')),(0,i.kt)("p",null,"There is a more detailed explanation of filter matching\n",(0,i.kt)("a",{parentName:"p",href:"#filter-matching-in-detail"},"below"),"."),(0,i.kt)("h3",{id:"cron-triggers-formerly-timers"},"Cron Triggers (formerly timers)"),(0,i.kt)("p",null,"Cron triggers run jobs based on a cron schedule. They can run as frequently as\nonce every minutes, or as infrequently as you desire and can be scheuled on very\nspecific dates or times. Each time a timed job succeeds, its ",(0,i.kt)("inlineCode",{parentName:"p"},"final_state")," will\nbe saved and used as the ",(0,i.kt)("inlineCode",{parentName:"p"},"initial_state"),' for its next run. See "Managing state"\nand "Keeping a cursor" below for implementation help.'),(0,i.kt)("p",null,"The best way to learn about ",(0,i.kt)("inlineCode",{parentName:"p"},"cron"),", if you're not already familiar, is through\nthe OpenFn interface or"),(0,i.kt)("a",{href:"https://crontab.guru",target:"_blank"},"crontab.guru"),".",(0,i.kt)("h3",{id:"flow-triggers"},"Flow Triggers"),(0,i.kt)("p",null,"Flow triggers will execute a job ",(0,i.kt)("em",{parentName:"p"},"after")," another specified job finishes\nsuccessfully. E.g., a flow trigger which specifies the succesful run of Job A\ncan be used by Job B. Each time Job A succeeds, Job B will start to run with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"final_state")," of Job A as its ",(0,i.kt)("inlineCode",{parentName:"p"},"initial_state"),"."),(0,i.kt)("h3",{id:"fail-triggers"},"Fail Triggers"),(0,i.kt)("p",null,'Fail, or "catch", triggers work just like flow triggers, except that they watch\nfor the failure, rather than the success, of a specified job. (E.g., Job A pays\na CHW via MPESA. If Job A ',(0,i.kt)("em",{parentName:"p"},"fails")," we should initiate Job B, which sends an SMS\nto the district manager instructing them to manually pay the CHW.)"),(0,i.kt)("h2",{id:"processing-cron-jobs"},"Processing cron jobs"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"On-demand processing for cron jobs.")," If you\u2019re leveraging cron triggers to\nrun jobs at specific times, you can also run that cron triggered job on demand.\nThis way you don\u2019t have to wait for the timer to expire before testing! Simply\nclick the process/ \u201cplay\u201d button now available via the Job, Run, and Activity\nHistory pages."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Runs list run time trigger button",src:n(39229).Z,width:"2204",height:"104"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Run history time trigger button",src:n(12946).Z,width:"345",height:"352"})),(0,i.kt)("h4",{id:"keeping-a-cursor-in-state-for-timer-jobs"},"Keeping a cursor in ",(0,i.kt)("inlineCode",{parentName:"h4"},"state")," for timer Jobs"),(0,i.kt)("p",null,"Because many timer jobs require keeping some sort of record of their previous\nrun to modify their later actions, ",(0,i.kt)("inlineCode",{parentName:"p"},"state"),' is passed between the runs. One\nexample might be keeping a "cursor" to select only new records from a database.\nWe\'d expect the following logic:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"job-1")," fetches patients from the database"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"job-1")," does something important with those patient records"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"job-1")," saves the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," of the last successfully processed patient to\n",(0,i.kt)("inlineCode",{parentName:"li"},"final_state")),(0,i.kt)("li",{parentName:"ol"},"when ",(0,i.kt)("inlineCode",{parentName:"li"},"job-1")," runs again, it fetches patients whose ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," is greater than the\n",(0,i.kt)("inlineCode",{parentName:"li"},"id")," of the last successfully processed patient.")),(0,i.kt)("p",null,"To achieve this you might write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fetchPatient({ type: 'referral', offset: state.lastId }, state => {\n  // Assuming the system returned an array of patients in the \"data\" key.\n  state.lastId = state.data.patients.sort((a, b) => b.id - a.id)[0];\n  return state;\n});\n")),(0,i.kt)("p",null,"The initial offset will be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),', but the subsequent runs will automatically\nonly fetch "new" patients.'),(0,i.kt)("h3",{id:"managing-the-size-of-state-for-timer-jobs"},"Managing the size of ",(0,i.kt)("inlineCode",{parentName:"h3"},"state")," for Timer Jobs"),(0,i.kt)("p",null,"Since state is passed between each run of a timer job, if your job adds\nsomething new to state each time it runs, it may quickly become too large to be\npractically handled. Imagine if a server response were adding, via\n",(0,i.kt)("inlineCode",{parentName:"p"},"array.push(...)"),", to ",(0,i.kt)("inlineCode",{parentName:"p"},"state.references")," each time the job ran. OpenFn supports\nup to 50,000 bytes (via Erlang's ",(0,i.kt)("inlineCode",{parentName:"p"},"byte_size"),"), though most ",(0,i.kt)("inlineCode",{parentName:"p"},"final_state")," byte\nsizes are between 100 and 1000."),(0,i.kt)("p",null,"If the size of your ",(0,i.kt)("inlineCode",{parentName:"p"},"final_state")," exceeds 10,000 bytes, OpenFn will send project\ncollaborators a warning email. If it exceeds 50,000 bytes, your run will still\nsucceed but its ",(0,i.kt)("inlineCode",{parentName:"p"},"final_state")," will not be saved and the next time that job runs\nit will inherit the previous, un-updated final state. (I.e., the last state that\nwas < 50,000 bytes.)"),(0,i.kt)("h3",{id:"a-quick-fix-for-final-state-bloat"},"A quick fix for final state bloat"),(0,i.kt)("p",null,"Most often, final state bloat is due to improper handling of ",(0,i.kt)("inlineCode",{parentName:"p"},"state.references"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"state.data"),". This can be fixed by adding the following lines ",(0,i.kt)("em",{parentName:"p"},"either")," to the\ncallback of your language-package's operation (if it allows for one) or by\nappending an ",(0,i.kt)("inlineCode",{parentName:"p"},"alterState(...)")," operation after your operation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  state.custom = somethingIntentional;\n  state.data = {};\n  state.references = [];\n  return state;\n});\n")),(0,i.kt)("h2",{id:"filter-matching-in-detail"},"Filter Matching in Detail"),(0,i.kt)("p",null,"To illustrate filter matching, refer to the filters and message samples below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Message "a" will match filter 1, but message "b" will not.'),(0,i.kt)("li",{parentName:"ul"},'Message "c" will match filter 2, but message "d" will not.')),(0,i.kt)("h3",{id:"filter-1-simple-inclusion"},"Filter 1, simple inclusion"),(0,i.kt)("p",null,"The inclusion criteria is ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "formID": "patient_registration_v7" }')," and the\nexclusion criteria is left blank."),(0,i.kt)("h4",{id:"message-a-will-match"},'Message "a" will match'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-15",\n  "formID": "patient_registration_v7",\n  "name": "Jack Wilshere",\n  "dob": "1986-05-16",\n  "medications": ["anaphlene", "zaradood", "morphofast"]\n}\n')),(0,i.kt)("h4",{id:"message-b-will-not-match"},'Message "b" will NOT match'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-16",\n  "formID": "patient_registration_v8",\n  "name": "Larry Bird",\n  "dob": "1982-03-21",\n  "medications": ["anaphlene", "zaradood", "morphofast"]\n}\n')),(0,i.kt)("p",null,"Message 'b' does not include ",(0,i.kt)("inlineCode",{parentName:"p"},'"formID":"patient_registration_v7"')," and will not\nmatch filter '1'."),(0,i.kt)("h3",{id:"filter-2-inclusion-and-exclusion"},"Filter 2, inclusion ",(0,i.kt)("em",{parentName:"h3"},"and")," exclusion"),(0,i.kt)("p",null,"The inclusion criteria is ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "name": "john doe" }')," and the exclusion criteria is\n",(0,i.kt)("inlineCode",{parentName:"p"},'{"allowedToShare": false}'),"."),(0,i.kt)("h4",{id:"message-c-will-match"},'Message "c" will match'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-15",\n  "name": "john doe",\n  "dob": "1986-05-16"\n}\n')),(0,i.kt)("h4",{id:"message-d-will-not-match"},'Message "d" will NOT match'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-15",\n  "name": "john doe",\n  "dob": "1986-05-16",\n  "allowedToShare": false\n}\n')),(0,i.kt)("h2",{id:"more-filter-samples"},"More filter samples"),(0,i.kt)("h3",{id:"match-messages-where-the-formid-is-robot_photo_21042015"},"Match messages ",(0,i.kt)("inlineCode",{parentName:"h3"},"WHERE")," the ",(0,i.kt)("inlineCode",{parentName:"h3"},"formId")," is ",(0,i.kt)("inlineCode",{parentName:"h3"},'"Robot_Photo_21.04.2015"')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,i.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{ "formId": "Robot_Photo_21.04.2015" }')),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"match-a-message-with-two-fragments-inside-an-array-called-data"},"Match a message with two fragments inside an array called ",(0,i.kt)("inlineCode",{parentName:"h3"},"data")),(0,i.kt)("p",null,"(This is useful when gathering data via ODK)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,i.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{ "data": [{ "outlet_call": "TRUE", "new_existing": "Existing" }] }')),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"match-a-message-where-this-and-that-are-both-included"},"Match a message ",(0,i.kt)("inlineCode",{parentName:"h3"},"WHERE")," this ",(0,i.kt)("inlineCode",{parentName:"h3"},"AND")," that are both included"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,i.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{ "formId": "Robot_Photo_21.04.2015", "secret_number": 8 }')),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"match-a-message-using-exclusion"},"Match a message using exclusion"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,i.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{ "formId": "Robot_Photo_21.04.2015" }')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{ "safeToProcess": false }'))))),(0,i.kt)("h3",{id:"match-a-message-with-a-fragment-inside-another-object-called-form"},"Match a message with a fragment inside another object called ",(0,i.kt)("inlineCode",{parentName:"h3"},"form")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,i.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{"form": {"@xmlns": "http://openrosa.org/formdesigner/F732194-3278-nota-ReAL-one"}}')),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"an-exclusion-demo"},"An exclusion demo"),(0,i.kt)("p",null,"Imagine that we had a filter which included messages with ",(0,i.kt)("inlineCode",{parentName:"p"},"form == 'bns_survey'"),"\nbut we then want to start ",(0,i.kt)("em",{parentName:"p"},"excluding")," those that have\n",(0,i.kt)("inlineCode",{parentName:"p"},"body.survey_type == 'practice'"),". Our filter trigger would look need to like\nthis:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,i.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{ "form": "bns_survey" }')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{"body": {"survey_type": "practice"}}'))))),(0,i.kt)("p",null,"We'd set it up from the trigger form like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(84167).Z,width:"1676",height:"946"})),(0,i.kt)("p",null,"And verify the result on the inbox:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(71109).Z,width:"1676",height:"946"})))}p.isMDXComponent=!0},71109:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo-exclusion-cc520464bca5893c3ca38bfa1d1f2142.gif"},84167:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/exclusion-cb6fe8d428d9dd35a5712fa756eb907a.gif"},12946:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtimetrigger1-5fa01ed4cd107935178ec302619b86ea.png"},39229:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);