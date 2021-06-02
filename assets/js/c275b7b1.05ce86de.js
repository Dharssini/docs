(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5755],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43359:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={layout:"post",title:"Allow Yourself to Fail",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["how-to","tips"],featured:!1},s={permalink:"/articles/2020/07/02/allow-yourself-to-fail",editUrl:"https://github.com/openfn/docs/edit/main/articles/2020-07-02-allow-yourself-to-fail.md",source:"@site/articles/2020-07-02-allow-yourself-to-fail.md",title:"Allow Yourself to Fail",description:"Hi all, this is a very short post with a simple message: design for failure.",date:"2020-07-02T00:00:00.000Z",formattedDate:"July 2, 2020",tags:[{label:"how-to",permalink:"/articles/tags/how-to"},{label:"tips",permalink:"/articles/tags/tips"}],readingTime:1.8,truncated:!0,prevItem:{title:"Product News: Enhanced Scheduled/Periodic Job Control",permalink:"/articles/2020/07/14/cron-is-better-than-a-timer"},nextItem:{title:"To Automate or Not to Automate? Ask Yourself These 3 Questions.",permalink:"/articles/2020/06/24/three-questions-to-ask"}},l=[],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hi all, this is a very short post with a simple message: design for failure.\nEven if you've never heard of\n",(0,a.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/sql-server"},"MSSQL")," (or\n",(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/"},"Azure"),', or Microsoft?), I want to talk for\none moment about the importance of upserts and a funny developer term called\n"idempotence."'),(0,a.kt)("p",null,"We just extended our\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-mssql"},"language-mssql adaptor")," with a custom\nfunction that allows upserts (an ",(0,a.kt)("inlineCode",{parentName:"p"},"upsert")," is when you either insert a new record\nor update an existing record based on some identifier). Before, you'd need to\nwrite something tedious like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sql({\n  query: `MERGE my_table AS [Target]\n          USING (SELECT '8675309' AS some_unique_id, 'writing_blog_posts' AS skill) AS [Source]\n          ON [Target].some_unique_id = [Source].some_unique_id\n          WHEN MATCHED THEN\n            UPDATE SET [Target].some_unique_id=8675309, [Target].skill='writing_blog_posts'\n          WHEN NOT MATCHED THEN\n            INSERT (some_unique_id, skill) VALUES ([Source].some_unique_id, [Source].skill);`,\n});\n")),(0,a.kt)("p",null,"whereas now you can simply write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"upsert('my_table', 'some_unique_id', {\n  some_unique_id: 8675309,\n  skill: 'writing blog posts',\n});\n")),(0,a.kt)("p",null,"For an operation to be idempotent means that it can be repeated time and time\nagain without producing an unintended result. This is SUPER important for\ncreating S3 (",(0,a.kt)("strong",{parentName:"p"},"S"),"ecure, ",(0,a.kt)("strong",{parentName:"p"},"S"),"table and ",(0,a.kt)("strong",{parentName:"p"},"S"),"calable\u2014more on that\n",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/trust"},"here"),') integrations because it provides you with two\n"get-out-of-jail-free" cards.'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If a destination application fails, if a connection times out, or if (for\nwhatever reason) you're not sure if the ",(0,a.kt)("inlineCode",{parentName:"p"},"job")," was completed (say... making a\npayment to CHW) then an idempotent operation can be RETRIED without fear of\nmaking a double-payment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you make some change to how your ",(0,a.kt)("inlineCode",{parentName:"p"},"job")," works, make some modification to\none of your destination systems, or just because you want to be ",(0,a.kt)("em",{parentName:"p"},"extra extra\nsure")," that all the data in a 9 month survey made it to the national public\nhealth reporting system, you can ",(0,a.kt)("em",{parentName:"p"},"REPROCESS")," every single message that's come\nthrough OpenFn at the click of a button, without having to worry about\nduplicates."))),(0,a.kt)("p",null,"So... when clients let me mess around with their jobs, I ",(0,a.kt)("em",{parentName:"p"},"always")," recommend we\ndesign for idempotence. It's common sense when you're passing messages between\ntwo different systems that are bound to evolve, go offline, have a bad day, etc"),(0,a.kt)("p",null,"\u2014 Taylor"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/signup"},"Sign up"),"{: .btn} to set up a project today,\nabsolutely free."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"mailto:admin@openfn.org"},"Reach out"),"{: .btn} for more information."))}p.isMDXComponent=!0}}]);