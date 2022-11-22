"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[35097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),c=r,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={layout:"post",title:"How learning JavaScript helps me better understand OpenFn jobs",author:"Aicha Diallo",author_url:"https://github.com/daissatou2",author_image_url:"https://avatars.githubusercontent.com/daissatou2",tags:["javascript","tips","jobs","learning"],featured:!0},o=void 0,s={permalink:"/articles/2021/10/29/how-learning-javascript-helped-me-better-understand-jobs",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-10-29-how-learning-javascript-helped-me-better-understand-jobs.md",source:"@site/articles/2021-10-29-how-learning-javascript-helped-me-better-understand-jobs.md",title:"How learning JavaScript helps me better understand OpenFn jobs",description:"OpenFn automation happens via jobs which define",date:"2021-10-29T00:00:00.000Z",formattedDate:"October 29, 2021",tags:[{label:"javascript",permalink:"/articles/tags/javascript"},{label:"tips",permalink:"/articles/tags/tips"},{label:"jobs",permalink:"/articles/tags/jobs"},{label:"learning",permalink:"/articles/tags/learning"}],readingTime:6.99,hasTruncateMarker:!0,authors:[{name:"Aicha Diallo",url:"https://github.com/daissatou2",imageURL:"https://avatars.githubusercontent.com/daissatou2"}],frontMatter:{layout:"post",title:"How learning JavaScript helps me better understand OpenFn jobs",author:"Aicha Diallo",author_url:"https://github.com/daissatou2",author_image_url:"https://avatars.githubusercontent.com/daissatou2",tags:["javascript","tips","jobs","learning"],featured:!0},prevItem:{title:"Workflow Automation; Why do it yourself when a program can do it for you?",permalink:"/articles/2022/06/07/workflow-automation"},nextItem:{title:"Testing a React app, the blurred line between Unit, integration and E2E",permalink:"/articles/2021/10/22/testing-react-app-with-jest-hound"}},l={authorsImageUrls:[void 0]},p=[{value:"What is that little <code>=&gt;</code> arrow?",id:"what-is-that-little--arrow",level:2},{value:"Falsy values",id:"falsy-values",level:2},{value:"Short-circuit evaluation, template literals, and all the short hand that used to confuse me",id:"short-circuit-evaluation-template-literals-and-all-the-short-hand-that-used-to-confuse-me",level:2},{value:"Higher-order functions &amp; iterators",id:"higher-order-functions--iterators",level:2},{value:"Objects &amp; job mappings",id:"objects--job-mappings",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OpenFn automation happens via ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs"},"jobs"),' which define\nspecific steps ("operations") that OpenFn should perform. They\'re written in a\n',(0,r.kt)("a",{parentName:"p",href:"https://www.openfn.org/core"},"scripting language")," that runs on top of (and has\nfull access to) ",(0,r.kt)("strong",{parentName:"p"},"Javascript"),". A basic understanding of Javascript will take\nyour job writing on OpenFn to the next level. To improve my limited knowledge of\nJavaScript, I have been taking Codecademy's\n",(0,r.kt)("a",{parentName:"p",href:"https://www.codecademy.com/learn/introduction-to-javascript"},"Introduction to JavaScript Course"),"."),(0,r.kt)("p",null,"In this post we'll discuss:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Arrow functions"),(0,r.kt)("li",{parentName:"ol"},"Falsy values"),(0,r.kt)("li",{parentName:"ol"},"Other short-hand notation")),(0,r.kt)("p",null,"Keep reading for all the important learnings I have taken from just the first\nfour modules!"),(0,r.kt)("h2",{id:"what-is-that-little--arrow"},"What is that little ",(0,r.kt)("inlineCode",{parentName:"h2"},"=>")," arrow?"),(0,r.kt)("p",null,"Javascript allows us to create ",(0,r.kt)("em",{parentName:"p"},"functions")," which take ",(0,r.kt)("em",{parentName:"p"},"arguments")," and ",(0,r.kt)("em",{parentName:"p"},"do stuff"),"\nwith them. Most times, function declaration in Javascript looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function getAge(dateString) {\n  if (!dateString) return;\n\n  const today = new Date();\n  const birthDate = new Date(dateString);\n  var age = today.getFullYear() - birthDate.getFullYear();\n  var m = today.getMonth() - birthDate.getMonth();\n  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {\n    age--;\n  }\n  return age;\n}\n")),(0,r.kt)("p",null,"This was simple enough for me to follow. We are declaring a function,\n",(0,r.kt)("inlineCode",{parentName:"p"},"getAge()"),", which has the steps to calculate a person's age and can be easily\nreused throughout the job."),(0,r.kt)("p",null,"But other times, function writing looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const getAge(dateString) => {\n  if (!dateString) return;\n  // and so on...\n}\n")),(0,r.kt)("p",null,"In OpenFn, you're often writing unnamed functions that take ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," as their\nonly argument and you use them right away. See how concise writing and using a\nfunction can be with the arrow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"upsert('tbl_study', 'study_id', {\n  study_id: state => state.studyIDMap[state.formType],\n});\n")),(0,r.kt)("p",null,"These ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"arrow functions"))," confused me when reading through jobs. I've learned\nthat, for the most part, they can be thought of as short-hand notation which\nremoves the need to type out ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," for every function declaration."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"MDN has a great explanation\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"},"here"),'.\nTl;dr: "An arrow function expression is a compact alternative to a traditional\nfunction expression, but is limited and can\'t be used in all situations."')),(0,r.kt)("p",null,"Further, we can make the code even more concise by also removing the\nparenthesis, curly braces, and the return keyword when certain criteria are met.\nIn the code above, the parenthesis are omitted because there are no parameters,\nand the curly braces and return keyword are omitted because the function body is\ncomposed of a single-line block. As you can see, there are a variety of ways to\nwrite functions and this course is helping me better recognize them. Some key\nterminology here is: ",(0,r.kt)("inlineCode",{parentName:"p"},"function expression"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"arrow function"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"concise function"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymous function"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"implicit returns"),"."),(0,r.kt)("h2",{id:"falsy-values"},"Falsy values"),(0,r.kt)("p",null,"During the ",(0,r.kt)("a",{parentName:"p",href:"/adaptors/salesforce/#mapping-and-design-considerations"},"mapping"),"\nphase of integration design, we often discuss how each answer choice for\n",(0,r.kt)("strong",{parentName:"p"},"picklist")," values should map from the source system to the destination system.\nSometimes the mapping is simple but other times, there is an extensive list of\npossible choices that can be found in the\n",(0,r.kt)("a",{parentName:"p",href:"/documentation/getting-started/terminology/#message"},"message")," and not all are\nrelevant to the destination system. Then the question is, ",(0,r.kt)("strong",{parentName:"p"},"how should the job\nhandle values which are not explicitly mapped?")),(0,r.kt)("p",null,'Sometimes we hear clients say to "ignore" those values. ',(0,r.kt)("strong",{parentName:"p"},'But what does it\nreally mean to "ignore" a value?')," Should we set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"? An empty string? How\nabout ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),"? In Javascript these are all ",(0,r.kt)("inlineCode",{parentName:"p"},"falsy")," values."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"MDN is great for falsy values too! Check their explanation out\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Falsy"},"here"),".")),(0,r.kt)("p",null,"Determining what is really meant here is important and the value selected has\ndifferent implications depending on the system."),(0,r.kt)("p",null,"Take this sample mapping for different districts in Conakry. The value left of\nthe colon is from the source system and the value to the right is for the\ndestination system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const districtMapping = {\n  Ratoma: 'RT',\n  Kaloum: 'KL',\n  Dixinn: 'DX',\n  Matam: 'MA',\n  Matoto: 'MT',\n  Other: undefined,\n};\n")),(0,r.kt)("p",null,'If the destination system is Salesforce, this mapping would not upload "Other"\nto Salesforce. However if "Other" mapped to an empty string instead, this would\nupload the empty string to Salesforce. ',(0,r.kt)("strong",{parentName:"p"},"This distinction is especially\nimportant in cases where we are overwriting existing data."),' For instance, if a\nstudent previously lived in Ratoma and then moved to an unknown district marked\nas "Other", ',(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ",(0,r.kt)("em",{parentName:"p"},"would not")," update the student's district in Salesforce\nbut the empty string would. Both of these are falsy values but have different\nmeanings in Salesforce."),(0,r.kt)("p",null,"How about if the message includes a value for a district that ",(0,r.kt)("em",{parentName:"p"},"is not"),' in the\nmapping? Such as "New York". Should the job default to ',(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"? Or ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"?"),(0,r.kt)("p",null,"These questions are just a few examples of how understanding ",(0,r.kt)("inlineCode",{parentName:"p"},"falsy")," values in\nJavascript can make it easier to implement the best mapping for the real-world\nuse case."),(0,r.kt)("h2",{id:"short-circuit-evaluation-template-literals-and-all-the-short-hand-that-used-to-confuse-me"},"Short-circuit evaluation, template literals, and all the short hand that used to confuse me"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Short-circuit evaluation")),(0,r.kt)("p",null,"When we are syncing forms to a database, we sometimes expect different versions\nof the same form with fields present one version but not the other. One way to\nmitigate this discrepancy is by submitting a dummy value for the field whenever\nit is missing in the message. I just learned the fastest way to add this code to\nmy jobs! For example, the code below will ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"household_id")," always has\na value in the destination system: if ",(0,r.kt)("inlineCode",{parentName:"p"},"survey_info/household_id")," is present in\nthe message this will be the assigned value, otherwise it will assign the dummy\nvalue ",(0,r.kt)("inlineCode",{parentName:"p"},"state.data.body._id"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"household_id: state.data.body['survey_info/household_id'] || state.data.body._id,\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Template literals")),(0,r.kt)("p",null,'Like the arrow discussed above, the "dollar sign" was another symbol that often\nconfused me. But template literals are actually very straightforward. They\nincrease the readability of the code and make it easier to see what the\nresulting string will be. Wrap your template in the backtick (',"`",") symbols and\nthen each variable in ",(0,r.kt)("inlineCode",{parentName:"p"},"${}"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const sign = '$';\nconsole.log(`The ${sign} isn't so confusing!`);\n")),(0,r.kt)("h2",{id:"higher-order-functions--iterators"},"Higher-order functions & iterators"),(0,r.kt)("p",null,"The most challenging module in the course covered ",(0,r.kt)("strong",{parentName:"p"},"higher-order functions"),".\nThese are defined as ",(0,r.kt)("strong",{parentName:"p"},"functions that accept other functions as arguments and/or\nreturn functions as output.")," But why are these important and how are they used\nin OpenFn jobs? It turns out we use them quite alot! The code below is an\nexample from an existing integration with the field names replaced."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const participantsToUpdate = state.data.json.filter(data =>\n  state.idList.includes(data.id)\n);\nconst participantsToCreate = state.data.json.filter(\n  data => !state.idList.includes(data.id)\n);\n")),(0,r.kt)("p",null,"This code is using a built-in JavaScript method that ",(0,r.kt)("strong",{parentName:"p"},"helps us iterate on\narrays to manipulate elements and return values.")," The ",(0,r.kt)("inlineCode",{parentName:"p"},".filter()")," method is\nbeing used to return a new array after filtering out certain elements from the\noriginal array. We have declared two variables to store the new arrays:\n",(0,r.kt)("inlineCode",{parentName:"p"},"participantsToUpdate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"participantsToCreate"),". Participants whose ids are\nexisting in the destination system (or who are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"idList")," array) are added\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"participantsToUpdate"),", and any remaining participants are added to\n",(0,r.kt)("inlineCode",{parentName:"p"},"participantsToCreate"),". This filtering helped us perform the correct operations\non each participant type. For instance, later in the job, we use the filtered\narrays to only overwrite a participant's ",(0,r.kt)("inlineCode",{parentName:"p"},"reportNumber")," field if it is a new\nparticipant. ",(0,r.kt)("inlineCode",{parentName:"p"},".filter()")," is just one of many higher-order functions that power\nOpenFn jobs."),(0,r.kt)("h2",{id:"objects--job-mappings"},"Objects & job mappings"),(0,r.kt)("p",null,"The final lesson was on objects and key-value pairs--something used in almost\nevery OpenFn job! The result of the design and mapping phase of requirements\ngathering is almost always a mapping document which includes key-value pairs in\nplain English. These specifications are then translated to JavaScript via\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"objects")),". The code below is a snippet of an object which captures the\nkey-value pairs for states in the US."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const stateMapping = {\n   AK: 'ALASKA',\n   AZ: 'ARIZONA',\n   AR: 'ARKANSAS',\n   CA: 'CALIFORNIA',\n   ....\n")),(0,r.kt)("p",null,"The value left of the colon is how the state is represented in the source\nsystem, and the value right of the colon represents how OpenFn will send the\ndata to the destination system. This mapping process is key to integration\ndesign. Learn more about mappings\n",(0,r.kt)("a",{parentName:"p",href:"/adaptors/salesforce/#mapping-and-design-considerations"},"here"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"MDN has more details on objects\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"here"),'.\nTl;dr: "The Object class represents one of JavaScript\'s data types. It is used\nto store various keyed collections and more complex entities."')),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"I'm well on my way to becoming a better job reader and writer. Here are some\nnext steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Understand ",(0,r.kt)("inlineCode",{parentName:"p"},"fn(state)")," and how ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," can be manipulated in OpenFn jobs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Explore what's available on the JavaScript docs\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},"site"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign up for the next level JavaScript course."))))}u.isMDXComponent=!0}}]);