"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[84726],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=d(a),s=r,c=k["".concat(i,".").concat(s)]||k[s]||m[s]||l;return a?n.createElement(c,p(p({ref:e},u),{},{components:a})):n.createElement(c,p({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[k]="string"==typeof t?t:r,p[1]=o;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6224:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"msgraph@0.2.0",id:"msgraph-docs",keywords:["adaptor","msgraph","create","get","getDrive","getFile","getFolder"]},p=void 0,o={unversionedId:"packages/msgraph-docs",id:"packages/msgraph-docs",title:"msgraph@0.2.0",description:"Functions",source:"@site/adaptors/packages/msgraph-docs.md",sourceDirName:"packages",slug:"/packages/msgraph-docs",permalink:"/adaptors/packages/msgraph-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"msgraph@0.2.0",id:"msgraph-docs",keywords:["adaptor","msgraph","create","get","getDrive","getFile","getFolder"]},sidebar:"adaptors",previous:{title:"Moodle",permalink:"/adaptors/moodle"},next:{title:"Config for msgraph",permalink:"/adaptors/packages/msgraph-configuration-schema"}},i={},d=[{value:"Functions",id:"functions",level:2},{value:"create",id:"create",level:2},{value:"get",id:"get",level:2},{value:"getDrive",id:"getdrive",level:2},{value:"getFile",id:"getfile",level:2},{value:"getFolder",id:"getfolder",level:2},{value:"request",id:"request",level:2}],u={toc:d},k="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#create"},"create(resource, data, callback)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#get"},"get(path, query, callback)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getDrive"},"getDrive(specifier, name, [callback])")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getFile"},"getFile(pathOrId, options, [callback])")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getFolder"},"getFolder(pathOrId, options, [callback])"))),(0,r.kt)("h2",{id:"create"},"create"),(0,r.kt)("p",null,"create(resource, data, callback) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nCreate some resource in msgraph"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of entity that will be created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"The data to create the new resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'create("applications", {"displayName": "My App"})\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"get"},"get"),(0,r.kt)("p",null,"get(path, query, callback) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nMake a GET request to msgraph resource"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Query, Headers and Authentication parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"get('sites/root/lists')\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getdrive"},"getDrive"),(0,r.kt)("p",null,"getDrive(specifier, name, ","[callback]",") \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nGet a Drive or SharePoint document library. The drive metadata will be written\nto state.drives, where it can be used by other adaptor functions.\nPass { id } to get a drive by id or { id, owner } to get default drive for\nsome parent resource, like a group"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"specifier"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Object")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"A definition of the drive to retrieve    - id {string} - The ID of the resource or owner.    - owner {string} - The type of drive owner (e.g. sites, groups).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The local name of the drive used to write to state.drives, ie, state.drives","[name]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"s ","=",">"," s")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get a drive by ID)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getDrive({ id: "YXzpkoLwR06bxC8tNdg71m" })\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get the default drive for a site)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getDrive({ id: "openfn.sharepoint.com", owner: "sites" })\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getfile"},"getFile"),(0,r.kt)("p",null,"getFile(pathOrId, options, ","[callback]",") \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nGet file metadata or file content."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pathOrId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"A path to a file or file id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Query parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"s ","=",">"," s")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get a file by ID)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getFile('01LUM6XOGRONYNTZ26DBBJPTN5IFTQPBIW')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get a file for a named drive by id)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getFile("01LUM6XOGRONYNTZ26DBBJPTN5IFTQPBIW",{ driveName: "mydrive"})\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getfolder"},"getFolder"),(0,r.kt)("p",null,"getFolder(pathOrId, options, ","[callback]",") \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nGet the contents or metadata of a folder."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pathOrId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"A path to a folder or folder id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Query parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[callback]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"s ","=",">"," s")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get a folder by ID)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getFolder('01LUM6XOCKDTZKQC7AVZF2VMHE2I3O6OY3')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get a folder for a named drive by id)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getFolder("01LUM6XOCKDTZKQC7AVZF2VMHE2I3O6OY3",{ driveName: "mydrive"})\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"request"},"request"),(0,r.kt)("p",null,"request \u21d2\nThis is an asynchronous function that sends a request to a specified URL with optional parameters\nand headers, and returns the response data in JSON format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," function is returning the parsed JSON data from the response of the HTTP\nrequest made to the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," with the given ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"method"),". If there is an error in\nthe response, the function will throw an error.  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the API endpoint that the request is being made to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[params]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"An object containing any additional parameters to be sent with the request, such as query parameters or request body data. It is an optional parameter and defaults to an empty object if not provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[method]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,'"',"GET",'"')),(0,r.kt)("td",{parentName:"tr",align:null},"The HTTP method to be used for the request. It defaults to 'GET' if not specified.")))),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);