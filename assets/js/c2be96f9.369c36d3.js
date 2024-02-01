"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[70056],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>m});var o=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,m=c["".concat(i,".").concat(g)]||c[g]||u[g]||a;return t?o.createElement(m,l(l({ref:n},d),{},{components:t})):o.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=g;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},54104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(45072),r=(t(11504),t(95788));const a={title:"Moodle"},l=void 0,s={unversionedId:"moodle",id:"moodle",title:"Moodle",description:"Overview",source:"@site/adaptors/moodle.md",sourceDirName:".",slug:"/moodle",permalink:"/adaptors/moodle",draft:!1,tags:[],version:"current",frontMatter:{title:"Moodle"},sidebar:"adaptors",previous:{title:"mongodb developer readme",permalink:"/adaptors/packages/mongodb-readme"},next:{title:"msgraph@0.4.0",permalink:"/adaptors/packages/msgraph-docs"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Integration Use Cases",id:"integration-use-cases",level:3},{value:"Learn More",id:"learn-more",level:3},{value:"Integration Options",id:"integration-options",level:2},{value:"More on the Moodle API",id:"more-on-the-moodle-api",level:3},{value:"Connect with OpenFn",id:"connect-with-openfn",level:2},{value:"Implementation Examples",id:"implementation-examples",level:2}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,o.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://moodle.org/"},"Moodle")," is a free and open-source online learning\nmanagement system."),(0,r.yg)("h3",{id:"integration-use-cases"},"Integration Use Cases"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"As a teacher on Moodle, I want to send profile, enrollment, and grade updates\nto CommCare so I can continue supporting students offline."),(0,r.yg)("li",{parentName:"ol"},"As a teacher on Moodle, I want to automatically send student engagement data\nto CommCare so I can integrate SMS notifications to increase student\nparticipation."),(0,r.yg)("li",{parentName:"ol"},"As a student on Moodle, I want to access my course data and grades even when\nnot connected to the internet.")),(0,r.yg)("h3",{id:"learn-more"},"Learn More"),(0,r.yg)("p",null,"Helpful links..."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Moodle Docs \u2013 ",(0,r.yg)("a",{parentName:"li",href:"https://docs.moodle.org/310/en/Main_page"},"https://docs.moodle.org/310/en/Main_page")),(0,r.yg)("li",{parentName:"ol"},"Moodle API Docs - ",(0,r.yg)("a",{parentName:"li",href:"https://moodle.org/plugins/webservice_restful"},"https://moodle.org/plugins/webservice_restful"))),(0,r.yg)("h2",{id:"integration-options"},"Integration Options"),(0,r.yg)("p",null,"Data integration via the Moodle web API:\n",(0,r.yg)("a",{parentName:"p",href:"https://moodle.org/plugins/webservice_restful"},"https://moodle.org/plugins/webservice_restful")),(0,r.yg)("p",null,"Data forwarding using a Webhook: ",(0,r.yg)("a",{parentName:"p",href:"https://moodle.org/plugins/local_webhooks"},"https://moodle.org/plugins/local_webhooks")),(0,r.yg)("h3",{id:"more-on-the-moodle-api"},"More on the Moodle API"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Sample HTTP requests")),(0,r.yg)("p",null,"Authentication:",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"GET mymoodlesite.com/login/token.php?service=moodle_mobile_app &username=USERNAME&password=PASSWORD")),(0,r.yg)("p",null,"Retrieve course information for all courses:",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction= core_course_get_courses&moodlewsrestformat=json HTTP/1.1")),(0,r.yg)("p",null,"Retrieve enrolled users in a specific course:",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction= core_enrol_get_enrolled_users&courseid=225&moodlewsrestformat=json HTTP/1.1")),(0,r.yg)("p",null,"Retrieve all final grades for one student:",(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"GET /cv_dgdp/webservice/rest/server.php?wstoken=TOKEN&wsfunction= gradereport_user_get_grade_items&userid=46580&courseid=225&moodlewsrestformat=json HTTP/1.1")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Integration tips")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The endpoint ",(0,r.yg)("inlineCode",{parentName:"li"},"get_enrolled_users")," does not return all user profile details.\nWe have had to access ",(0,r.yg)("inlineCode",{parentName:"li"},"core_user_get_users_by_field")," and filter by one\nspecific user to retrieve profile information such as phone number and\naddress."),(0,r.yg)("li",{parentName:"ol"},"Googling the endpoint you're using goes a long way!")),(0,r.yg)("h2",{id:"connect-with-openfn"},"Connect with OpenFn"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http#language-http-"},(0,r.yg)("inlineCode",{parentName:"a"},"language-http")),"\ncan be used to make HTTP requests to the Moodle API."),(0,r.yg)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Moodle -> CommCare Integration:")),(0,r.yg)("p",null,"In a project implementation for creating an education app (based on CommCare),\nwe extract data from a Moodle learning management system daily, and then upload\nMoodle student ",(0,r.yg)("inlineCode",{parentName:"p"},"user")," data as ",(0,r.yg)("inlineCode",{parentName:"p"},"case")," records in Commcare."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Example User Story: As a coach using CommCare, when a student's profile and\ngrades are updated in Moodle, I would like to automatically see that data\nreflected in my mobile app so that I can follow-up with the relevant support to\nensure they perform well.")),(0,r.yg)("p",null,"Example job to get enrolled users via the Moodle API endpoint (aka\n",(0,r.yg)("inlineCode",{parentName:"p"},"web service function"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"core_enrol_get_enrolled_users")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  const { loginUrl, username, password, host } = state.configuration;\n  return get(\n    `${loginUrl}&username=${username}&password=${password}`,\n    {},\n    state => {\n      const { token } = state.data;\n      const courseIds = [224, 225];\n      const enrolledUsers = [];\n      return each(\n        courseIds,\n        fn(state => {\n          let courseid = state.data;\n          return get(\n            `${host}`,\n            {\n              query: {\n                wstoken: token,\n                wsfunction: 'core_enrol_get_enrolled_users',\n                courseid,\n                moodlewsrestformat: 'json',\n              },\n              headers: { 'content-type': 'application/json' },\n            },\n            state => {\n              console.log(\n                `Getting users enrolled in the course with ${courseid}...`\n              );\n              enrolledUsers.push(state.data);\n              return { ...state, enrolledUsers };\n            }\n          )(state);\n        })\n      )(state);\n    }\n  )(state);\n});\n")))}u.isMDXComponent=!0}}]);