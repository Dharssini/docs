"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[81649],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),k=r,m=u["".concat(i,".").concat(k)]||u[k]||d[k]||o;return t?n.createElement(m,s(s({ref:a},c),{},{components:t})):n.createElement(m,s({ref:a},c))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},46216:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const o={title:"asana developer readme",id:"asana-readme",keywords:["adaptor","readme","asana"]},s="Developer README for the asana adaptor",p={unversionedId:"packages/asana-readme",id:"packages/asana-readme",title:"asana developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/asana",source:"@site/adaptors/packages/asana-readme.md",sourceDirName:"packages",slug:"/packages/asana-readme",permalink:"/fr/adaptors/packages/asana-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"asana developer readme",id:"asana-readme",keywords:["adaptor","readme","asana"]},sidebar:"adaptors",previous:{title:"asana changelog",permalink:"/fr/adaptors/packages/asana-changelog"},next:{title:"beyonic@0.1.5",permalink:"/fr/adaptors/packages/beyonic-docs"}},i={},l=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:3},{value:"How to create an API token",id:"how-to-create-an-api-token",level:3},{value:"Sample expression",id:"sample-expression",level:3},{value:"Find a single task of a given project using the task id.",id:"find-a-single-task-of-a-given-project-using-the-task-id",level:2},{value:"Find the list of tasks of a given project using the project id.",id:"find-the-list-of-tasks-of-a-given-project-using-the-project-id",level:2},{value:"Update a specific task",id:"update-a-specific-task",level:2},{value:"Create a task",id:"create-a-task",level:2},{value:"Update a task or create a new one",id:"update-a-task-or-create-a-new-one",level:2},{value:"Development",id:"development",level:2}],c={toc:l};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-asana-adaptor"},"Developer README for the asana adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/asana"},"https://github.com/OpenFn/adaptors/tree/main/packages/asana")),(0,r.kt)("h1",{id:"language-asana"},"language-asana"),(0,r.kt)("p",null,"Language Pack for connecting with Asana."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h3",{id:"sample-configuration"},"sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiVersion": "1.0",\n  "token": "shhhhhhhh"\n}\n')),(0,r.kt)("h3",{id:"how-to-create-an-api-token"},"How to create an API token"),(0,r.kt)("p",null,"Using Asana's API requires having an API token. To generate that token, head to\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://app.asana.com/0/developer-console"},"Asana developer console")," and\nenter the ",(0,r.kt)("strong",{parentName:"p"},"Personal access tokens")," section."),(0,r.kt)("p",null,"There you can click on ",(0,r.kt)("strong",{parentName:"p"},"+New access token"),". A prompt will be opened allowing\nyou to give the token a name and then create it."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Treat your PAT like you would with a password. Do not share it or display\nit online.")),(0,r.kt)("h3",{id:"sample-expression"},"Sample expression"),(0,r.kt)("h2",{id:"find-a-single-task-of-a-given-project-using-the-task-id"},"Find a single task of a given project using the task id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getTask('1234', {\n  opt_fields: 'name,assignee',\n});\n")),(0,r.kt)("h2",{id:"find-the-list-of-tasks-of-a-given-project-using-the-project-id"},"Find the list of tasks of a given project using the project id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getTasks('22889593722', {\n  opt_fields: 'name,notes,assignee',\n});\n")),(0,r.kt)("h2",{id:"update-a-specific-task"},"Update a specific task"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"updateTask('12344', {\n  name: 'test',\n  approval_status: 'pending',\n  assignee: '12345',\n});\n")),(0,r.kt)("h2",{id:"create-a-task"},"Create a task"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"createTask({\n  name: 'test',\n  approval_status: 'pending',\n  assignee: '12345',\n});\n")),(0,r.kt)("h2",{id:"update-a-task-or-create-a-new-one"},"Update a task or create a new one"),(0,r.kt)("p",null,"You can use a field name literal as ",(0,r.kt)("inlineCode",{parentName:"p"},"externalId")," to match a specific task. If\nthe task does not exist, a new one will be created. The first parameter in this\nfunction should be the ",(0,r.kt)("inlineCode",{parentName:"p"},"project_id"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"upsertTask('12344', {\n  externalId: 'name',\n  data: {\n    name: 'A new task',\n    projects: ['12344'],\n    notes: 'This is a new task',\n  },\n});\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);