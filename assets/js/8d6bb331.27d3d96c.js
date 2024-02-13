"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[64896],{95788:(e,t,a)=>{a.d(t,{Iu:()=>N,yg:()=>c});var n=a(11504);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var M=n.createContext({}),u=function(e){var t=n.useContext(M),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},N=function(e){var t=u(e.components);return n.createElement(M.Provider,{value:t},e.children)},o="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,M=e.parentName,N=r(e,["components","mdxType","originalType","parentName"]),o=u(a),y=i,c=o["".concat(M,".").concat(y)]||o[y]||g[y]||l;return a?n.createElement(c,s(s({ref:t},N),{},{components:a})):n.createElement(c,s({ref:t},N))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,s=new Array(l);s[0]=y;var r={};for(var M in t)hasOwnProperty.call(t,M)&&(r[M]=t[M]);r.originalType=e,r[o]="string"==typeof e?e:i,s[1]=r;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},87768:(e,t,a)=>{a.d(t,{c:()=>s});var n=a(11504),i=a(14971);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.c)(l.tabItem,s),hidden:a},t)}},38888:(e,t,a)=>{a.d(t,{c:()=>p});var n=a(45072),i=a(11504),l=a(14971),s=a(53943),r=a(55592),M=a(10632),u=a(27128),N=a(21148);function o(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function g(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??o(a);return function(e){const t=(0,u.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function y(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.Uz)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,M._M)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function w(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=g(e),[s,r]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[M,u]=c({queryString:a,groupId:n}),[o,w]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,N.IN)(a);return[n,(0,i.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),D=(()=>{const e=M??o;return y({value:e,tabValues:l})?e:null})();(0,i.useLayoutEffect)((()=>{D&&r(D)}),[D]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!y({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),u(e),w(e)}),[u,w,l]),tabValues:l}}var D=a(93664);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function T(e){let{className:t,block:a,selectedValue:r,selectValue:M,tabValues:u}=e;const N=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.MV)(),g=e=>{const t=e.currentTarget,a=N.indexOf(t),n=u[a].value;n!==r&&(o(t),M(n))},y=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.c)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return i.createElement("li",(0,n.c)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>N.push(e),onKeyDown:y,onClick:g},s,{className:(0,l.c)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===t})}),a??t)})))}function L(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function j(e){const t=w(e);return i.createElement("div",{className:(0,l.c)("tabs-container",m.tabList)},i.createElement(T,(0,n.c)({},e,t)),i.createElement(L,(0,n.c)({},e,t)))}function p(e){const t=(0,D.c)();return i.createElement(j,(0,n.c)({key:String(t)},e))}},89408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>M,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var n=a(45072),i=(a(11504),a(95788)),l=a(38888),s=a(87768);const r={id:"style-guide",title:"Style Guide",sidebar_label:"Style Guide",slug:"/style-guide"},M=void 0,u={unversionedId:"style-guide",id:"version-legacy/style-guide",title:"Style Guide",description:"You can write content using",source:"@site/versioned_docs/version-legacy/style-guide.md",sourceDirName:".",slug:"/style-guide",permalink:"/documentation/legacy/style-guide",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/versioned_docs/version-legacy/style-guide.md",tags:[],version:"legacy",frontMatter:{id:"style-guide",title:"Style Guide",sidebar_label:"Style Guide",slug:"/style-guide"},sidebar:"docs",previous:{title:"Writing Docs",permalink:"/documentation/legacy/writing-docs"},next:{title:"About",permalink:"/documentation/legacy/about"}},N={},o=[{value:"Markdown Syntax",id:"markdown-syntax",level:2},{value:"Headers",id:"headers",level:2},{value:"H2 - Create the best documentation",id:"h2---create-the-best-documentation",level:2},{value:"H3 - Create the best documentation",id:"h3---create-the-best-documentation",level:3},{value:"H4 - Create the best documentation",id:"h4---create-the-best-documentation",level:4},{value:"H5 - Create the best documentation",id:"h5---create-the-best-documentation",level:5},{value:"H6 - Create the best documentation",id:"h6---create-the-best-documentation",level:6},{value:"Emphasis",id:"emphasis",level:2},{value:"Lists",id:"lists",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Image sizing/styling",id:"image-sizingstyling",level:3},{value:"Gifs",id:"gifs",level:2},{value:"Code",id:"code",level:2},{value:"Tables",id:"tables",level:2},{value:"Blockquotes",id:"blockquotes",level:2},{value:"Inline HTML",id:"inline-html",level:2},{value:"Line Breaks",id:"line-breaks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"Tabs",id:"tabs",level:2}],g={toc:o},y="wrapper";function c(e){let{components:t,...r}=e;return(0,i.yg)(y,(0,n.c)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"You can write content using\n",(0,i.yg)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub-flavored Markdown syntax"),"."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"We use a ",(0,i.yg)("inlineCode",{parentName:"p"},".prettierrc"),' file to enforce standard styles via the "Prettier" code\nformatter. If you are using VsCode, you can install prettier via\n',(0,i.yg)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode")),(0,i.yg)("p",{parentName:"admonition"},"Make sure to format you work before opening a PR.")),(0,i.yg)("h2",{id:"markdown-syntax"},"Markdown Syntax"),(0,i.yg)("p",null,"To serve as an example page when styling markdown based Docusaurus sites."),(0,i.yg)("h2",{id:"headers"},"Headers"),(0,i.yg)("h1",{id:"h1---create-the-best-documentation"},"H1 - Create the best documentation"),(0,i.yg)("h2",{id:"h2---create-the-best-documentation"},"H2 - Create the best documentation"),(0,i.yg)("h3",{id:"h3---create-the-best-documentation"},"H3 - Create the best documentation"),(0,i.yg)("h4",{id:"h4---create-the-best-documentation"},"H4 - Create the best documentation"),(0,i.yg)("h5",{id:"h5---create-the-best-documentation"},"H5 - Create the best documentation"),(0,i.yg)("h6",{id:"h6---create-the-best-documentation"},"H6 - Create the best documentation"),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"emphasis"},"Emphasis"),(0,i.yg)("p",null,"Emphasis, aka italics, with ",(0,i.yg)("em",{parentName:"p"},"asterisks")," or ",(0,i.yg)("em",{parentName:"p"},"underscores"),"."),(0,i.yg)("p",null,"Strong emphasis, aka bold, with ",(0,i.yg)("strong",{parentName:"p"},"asterisks")," or ",(0,i.yg)("strong",{parentName:"p"},"underscores"),"."),(0,i.yg)("p",null,"Combined emphasis with ",(0,i.yg)("strong",{parentName:"p"},"asterisks and ",(0,i.yg)("em",{parentName:"strong"},"underscores")),"."),(0,i.yg)("p",null,"Strikethrough uses two tildes. ",(0,i.yg)("del",{parentName:"p"},"Scratch this.")),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"lists"},"Lists"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"First ordered list item"),(0,i.yg)("li",{parentName:"ol"},"Another item",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Unordered sub-list."))),(0,i.yg)("li",{parentName:"ol"},"Actual numbers don't matter, just that it's a number",(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"Ordered sub-list"))),(0,i.yg)("li",{parentName:"ol"},"And another item.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Unordered list can use asterisks")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Or minuses")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Or pluses")),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"links"},"Links"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.google.com/"},"I'm an inline-style link")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.google.com/",title:"Google's Homepage"},"I'm an inline-style link with title")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.mozilla.org/"},"I'm a reference-style link")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"http://slashdot.org/"},"You can use numbers for reference-style link definitions")),(0,i.yg)("p",null,"Or leave it empty and use the ",(0,i.yg)("a",{parentName:"p",href:"http://www.reddit.com/"},"link text itself"),"."),(0,i.yg)("p",null,"URLs and URLs in angle brackets will automatically get turned into links.\n",(0,i.yg)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," or ",(0,i.yg)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," and sometimes example.com\n(but not on GitHub, for example)."),(0,i.yg)("p",null,"Some text to show that the reference links can follow later."),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"images"},"Images"),(0,i.yg)("p",null,"Here's our logo (hover to see the title text):"),(0,i.yg)("p",null,"Inline-style:\n",(0,i.yg)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 1"})),(0,i.yg)("p",null,"Reference-style: ",(0,i.yg)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 2"})),(0,i.yg)("p",null,"Images from any folder can be used by providing path to file. Path should be\nrelative to markdown file."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"img",src:a(25040).c,width:"794",height:"505"})),(0,i.yg)("h3",{id:"image-sizingstyling"},"Image sizing/styling"),(0,i.yg)("p",null,"Images can be sized using inline HTML."),(0,i.yg)("img",{src:"/img/undraw_Portfolio_update_re_jqnp.svg",width:"200"}),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"gifs"},"Gifs"),(0,i.yg)("p",null,"Gifs are helpful for demonstrating short sequences of user behaviour."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"img",src:a(6176).c,width:"1191",height:"727"})),(0,i.yg)("p",null,"There are many tools that will help you create GIFs:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/phw/peek"},"Peek")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/capture-to-a-gif/eapecadlmfblmnfnojebefkbginhggeh"},"Capture to a Gif")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/chrome-capture-screenshot/ggaabchcecdbomdcnbahdfddfikjmphe"},"Chrome Capture"))),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},'Please note that if you\'re using an animated "cursor dot" and "show/click\nanimation", the hex code we use is ',(0,i.yg)("strong",{parentName:"p"},"#B53F48"),".")),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"code"},"Code"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"var s = 'JavaScript syntax highlighting';\nalert(s);\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'s = "Python syntax highlighting"\nprint(s)\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"No language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"function highlightMe() {\n  console.log('This line can be highlighted!');\n}\n")),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"tables"},"Tables"),(0,i.yg)("p",null,"Colons can be used to align columns."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Tables"),(0,i.yg)("th",{parentName:"tr",align:"center"},"Are"),(0,i.yg)("th",{parentName:"tr",align:"right"},"Cool"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"col 3 is"),(0,i.yg)("td",{parentName:"tr",align:"center"},"right-aligned"),(0,i.yg)("td",{parentName:"tr",align:"right"},"\\$1600")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"col 2 is"),(0,i.yg)("td",{parentName:"tr",align:"center"},"centered"),(0,i.yg)("td",{parentName:"tr",align:"right"},"\\$12")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"zebra stripes"),(0,i.yg)("td",{parentName:"tr",align:"center"},"are neat"),(0,i.yg)("td",{parentName:"tr",align:"right"},"\\$1")))),(0,i.yg)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (|)\nare optional, and you don't need to make the raw Markdown line up prettily. You\ncan also use inline Markdown."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Markdown"),(0,i.yg)("th",{parentName:"tr",align:null},"Less"),(0,i.yg)("th",{parentName:"tr",align:null},"Pretty"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("em",{parentName:"td"},"Still")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"renders")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("strong",{parentName:"td"},"nicely"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"1"),(0,i.yg)("td",{parentName:"tr",align:null},"2"),(0,i.yg)("td",{parentName:"tr",align:null},"3")))),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"blockquotes"},"Blockquotes"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Blockquotes are very handy in email to emulate reply text. This line is part\nof the same quote.")),(0,i.yg)("p",null,"Quote break."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"This is a very long line that will still be quoted properly when it wraps. Oh\nboy let's keep writing to make sure this is long enough to actually wrap for\neveryone. Oh, you can ",(0,i.yg)("em",{parentName:"p"},"put")," ",(0,i.yg)("strong",{parentName:"p"},"Markdown")," into a blockquote.")),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"inline-html"},"Inline HTML"),(0,i.yg)("dl",null,(0,i.yg)("dt",null,"Definition list"),(0,i.yg)("dd",null,"Is something people use sometimes."),(0,i.yg)("dt",null,"Markdown in HTML"),(0,i.yg)("dd",null,"Does *not* work **very** well. Use HTML ",(0,i.yg)("em",null,"tags"),".")),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"line-breaks"},"Line Breaks"),(0,i.yg)("p",null,"Here's a line for us to start with."),(0,i.yg)("p",null,"This line is separated from the one above by two newlines, so it will be a\n",(0,i.yg)("em",{parentName:"p"},"separate paragraph"),"."),(0,i.yg)("p",null,"This line is also a separate paragraph, but... This line is only separated by a\nsingle newline, so it's a separate line in the ",(0,i.yg)("em",{parentName:"p"},"same paragraph"),"."),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"admonitions"},"Admonitions"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This is a note")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"This is a tip")),(0,i.yg)("admonition",{type:"important"},(0,i.yg)("p",{parentName:"admonition"},"This is important")),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"This is a caution")),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"This is a warning")),(0,i.yg)("h2",{id:"tabs"},"Tabs"),(0,i.yg)("p",null,"Note how we import tabs first, then use them as below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  defaultValue=\"apple\"\n  values={[\n    { label: 'Apple', value: 'apple' },\n    { label: 'Orange', value: 'orange' },\n    { label: 'Banana', value: 'banana' },\n  ]}\n>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>;\n")),(0,i.yg)(l.c,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,i.yg)(s.c,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,i.yg)(s.c,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,i.yg)(s.c,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))}c.isMDXComponent=!0},6176:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/how-to-gif-727dedc47b0df45976bba4da21fce3d9.gif"},25040:(e,t,a)=>{a.d(t,{c:()=>n});const n="data:image/svg+xml;base64,PHN2ZyBpZD0iYmI0M2IzMDMtNzc4My00YjIwLTg0YWMtODk4OTg4MzZlOWRjIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijc5NC4xMjE4IiBoZWlnaHQ9IjUwNS4zNDUxNCIgdmlld0JveD0iMCAwIDc5NC4xMjE4IDUwNS4zNDUxNCI+PHBhdGggZD0iTTI0Ny40NTc5LDcwMS4xOTg0MmMtMTIuMjUwOTUtMS4wMDc4Ny0yMy4wNjctOS44NzExNy0yOS4yMTgtMjAuNTEzODQtMi4wNjI3NS0zLjU2OS0zLjQ3NjA5LTguMjUwNjMtMS4xNDAxOC0xMS42NDcxN2E2LjQwOTI4LDYuNDA5MjgsMCwwLDEsMTEuMzE1LDEuNDcxMTksNjIuMDQ1MzksNjIuMDQ1MzksMCwwLDEtLjk2NDg1LTEyLjY0MDg2Yy4wOTQxNi0zLjU4Ni43NzE3Ni03LjY0MDUyLDMuNzUzNTgtOS42MzQ3LDMuNDU5MjgtMi4zMTM0OSw4LjQ0NTQ5LS40NzY2MywxMC45NjE2NywyLjgzODE1czMuMTk4OTQsNy42MjY3MSwzLjgwMjgzLDExLjc0NDI2YTEwLjgzMDQxLDEwLjgzMDQxLDAsMCwxLDEyLjAzODY1LTEzLjY1NzEzYzUuMDY2NzIuNzY1MTUsOS4wMzU4MSw1LjE1MTksMTAuNTg0NTcsMTAuMDM2NDFzMS4wNjUyMiwxMC4xODA3MS4wNjg0MiwxNS4yMDdjLTEuMTY4ODMsNS44OTM3My0zLjA2NTgyLDExLjc0MDYyLTYuNDgxLDE2LjY4NDE3cy04LjQ4OCw4LjkyOS0xNC4zNzM1MywxMC4xMzgyMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iI2YyZjJmMiIvPjxwYXRoIGQ9Ik05OTcuMDYwOSwzMDMuMzI3NDNhMTA2LjAzMzkxLDEwNi4wMzM5MSwwLDAsMS03MSwxMDAuMDhjLS42NjAxNi4yMy0xLjMzMDA4LjQ2LTIsLjY3di0xMDcuNzFoLTEzOC43N2MuMDQtLjY3LjA4OTg0LTEuMzQuMTQ5OS0ySDkyNC4wNjA5di0yMS4wNGE1LjAwMiw1LjAwMiwwLDAsMC01LTVINzkwLjk4MDgyYy4yMy0uNjcuNDcwMjEtMS4zNC43My0yYTEwNi4wMTAyMiwxMDYuMDEwMjIsMCwwLDEsMjA1LjM1MDEsMzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNmMmYyZjIiLz48cGF0aCBkPSJNOTE5LjA2MDksMjY2LjMyNzQzaC00ODdhNy4wMDc3OCw3LjAwNzc4LDAsMCwwLTcsN3YzMzBhNy4wMDc3OCw3LjAwNzc4LDAsMCwwLDcsN2g0ODdhNy4wMDc3OSw3LjAwNzc5LDAsMCwwLDctN3YtMzMwQTcuMDA3NzgsNy4wMDc3OCwwLDAsMCw5MTkuMDYwOSwyNjYuMzI3NDNabTUsMzM3YTUuMDAyLDUuMDAyLDAsMCwxLTUsNWgtNDg3YTUuMDAyLDUuMDAyLDAsMCwxLTUtNXYtMzMwYTUuMDAyLDUuMDAyLDAsMCwxLDUtNWg0ODdhNS4wMDIsNS4wMDIsMCwwLDEsNSw1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMjIzLjEyMTgiIHk9Ijk3LjAzOTk4IiB3aWR0aD0iNDk5IiBoZWlnaHQ9IjIiIGZpbGw9IiMzZjNkNTYiLz48Y2lyY2xlIGN4PSIyNDAuMTIxOCIgY3k9Ijg0IiByPSI2IiBmaWxsPSIjM2YzZDU2Ii8+PGNpcmNsZSBjeD0iMjU3LjM3MTgiIGN5PSI4NCIgcj0iNiIgZmlsbD0iIzNmM2Q1NiIvPjxjaXJjbGUgY3g9IjI3NC42MjE4IiBjeT0iODQiIHI9IjYiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNNTYyLjA2MDksMzM1LjMyNzQzaC04OGE3LjAwNzc4LDcuMDA3NzgsMCwwLDAtNyw3djg4YTcuMDA3NzgsNy4wMDc3OCwwLDAsMCw3LDdoODhhNy4wMDc3OSw3LjAwNzc5LDAsMCwwLDctN3YtODhBNy4wMDc3OCw3LjAwNzc4LDAsMCwwLDU2Mi4wNjA5LDMzNS4zMjc0M1ptNSw5NWE1LjAwMiw1LjAwMiwwLDAsMS01LDVoLTg4YTUuMDAyLDUuMDAyLDAsMCwxLTUtNXYtODhhNS4wMDIsNS4wMDIsMCwwLDEsNS01aDg4YTUuMDAyLDUuMDAyLDAsMCwxLDUsNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik03MjAuMDYwOSwzMzUuODI3NDNoLTg4YTYuNTEyNTksNi41MTI1OSwwLDAsMC02LjUsNi41djg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUsNi41aDg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUtNi41di04OEE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNzIwLjA2MDksMzM1LjgyNzQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTg3OC4wNjA5LDMzNS44Mjc0M2gtODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLTYuNSw2LjV2ODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNSw2LjVoODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNS02LjV2LTg4QTYuNTEyNTksNi41MTI1OSwwLDAsMCw4NzguMDYwOSwzMzUuODI3NDNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNNTYyLjA2MDksNDY3LjgyNzQzaC04OGE2LjUxMjU5LDYuNTEyNTksMCwwLDAtNi41LDYuNXY4OGE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNi41LDYuNWg4OGE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNi41LTYuNXYtODhBNi41MTI1OSw2LjUxMjU5LDAsMCwwLDU2Mi4wNjA5LDQ2Ny44Mjc0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGQ9Ik03MjAuMDYwOSw0NjcuODI3NDNoLTg4YTYuNTEyNTksNi41MTI1OSwwLDAsMC02LjUsNi41djg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUsNi41aDg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUtNi41di04OEE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNzIwLjA2MDksNDY3LjgyNzQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTg3OC4wNjA5LDQ2Ny44Mjc0M2gtODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLTYuNSw2LjV2ODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNSw2LjVoODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNS02LjV2LTg4QTYuNTEyNTksNi41MTI1OSwwLDAsMCw4NzguMDYwOSw0NjcuODI3NDNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNNTQwLjU2MDksNDgyLjMyNzQzaC04OGE2LjUwNzQ1LDYuNTA3NDUsMCwwLDEtNi41LTYuNXYtODhhNi41MDc0NCw2LjUwNzQ0LDAsMCwxLDYuNS02LjVoODhhNi41MDc0NSw2LjUwNzQ1LDAsMCwxLDYuNSw2LjV2ODhBNi41MDc0NSw2LjUwNzQ1LDAsMCwxLDU0MC41NjA5LDQ4Mi4zMjc0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iIzZjNjNmZiIvPjxwb2x5Z29uIHBvaW50cz0iMjAyLjc0NiA0OTIuMDg4IDIxNC40NjYgNDg4LjQ5MSAyMDYuMTcgNDQxLjU3MyAxODguODcyIDQ0Ni44ODEgMjAyLjc0NiA0OTIuMDg4IiBmaWxsPSIjYTA2MTZhIi8+PHBhdGggZD0iTTQwMy40ODIsNjgwLjg1Nzg5aDM4LjUzMDczYTAsMCwwLDAsMSwwLDB2MTQuODg2ODdhMCwwLDAsMCwxLDAsMEg0MTguMzY4ODdBMTQuODg2ODYsMTQuODg2ODYsMCwwLDEsNDAzLjQ4Miw2ODAuODU3OXYwQTAsMCwwLDAsMSw0MDMuNDgyLDY4MC44NTc4OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyNS44OTExMiAxMDI0Ljk1NjY5KSByb3RhdGUoMTYyLjkzOTEyKSIgZmlsbD0iIzJmMmU0MSIvPjxwb2x5Z29uIHBvaW50cz0iMTAyLjc0OCA0OTIuMzU4IDExNS4wMDggNDkyLjM1NyAxMjAuODQgNDQ1LjA2OSAxMDIuNzQ2IDQ0NS4wNyAxMDIuNzQ4IDQ5Mi4zNTgiIGZpbGw9IiNhMDYxNmEiLz48cGF0aCBkPSJNMzAzLjA2LDY4Ni4xODE2N2gzOC41MzA3M2EwLDAsMCwwLDEsMCwwdjE0Ljg4Njg3YTAsMCwwLDAsMSwwLDBIMzE3Ljk0Njg5QTE0Ljg4Njg2LDE0Ljg4Njg2LDAsMCwxLDMwMy4wNiw2ODYuMTgxNjh2MGEwLDAsMCwwLDEsMCwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDQxLjc0MzM1IDExODkuOTA4MDcpIHJvdGF0ZSgxNzkuOTk3MzgpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTMwNC44MDc0Myw1NTIuNjA3ODhhOS4xNjIyNCw5LjE2MjI0LDAsMCwxLC4zMTgtMTQuMDQ1NThsOS41MDUzNi0xMTkuNjk0NTksMTkuMzMwODYsNC44Mjk3TDMxOC40ODQwNyw1NDAuNDU1OTRhOS4yMTE4OCw5LjIxMTg4LDAsMCwxLTEzLjY3NjY0LDEyLjE1MTk0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjYTA2MTZhIi8+PGNpcmNsZSBjeD0iMTQwLjU3OTIxIiBjeT0iMTUwLjU1NTIzIiByPSIyNC41NjEwMyIgZmlsbD0iI2EwNjE2YSIvPjxwYXRoIGQ9Ik0zMjIuMTYxNjYsNDE1LjE4NjA1Yy01LjU0MTk0LTcuNjA4MTUtNS43MTI2OS0xOC4wODY4My4yNTcwOC0yNS4zNjQxMiwzLjg5NTg3LTQuNzQ5MTQsMTAuNDEyNDgtOC41NDk1MSwyMS4yOTI0OC04LjU0OTUxLDI5LDAsNDAsMjMsNDAsMjNzMTIsMjIsNSw0Mi03LDIyLTcsMjJsLTQ2LTRTMzQzLjQ3MTQyLDQ0NC40NDA3OSwzMjIuMTYxNjYsNDE1LjE4NjA1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjY2NjIi8+PHBhdGggZD0iTTMwNy45NzY2LDQzNS4wOTQ2OWw5LjkwOTY3LTMyLjQyMDlhMTUuNTAxODksMTUuNTAxODksMCwwLDEsMjEuOTMwMTgtOS4yNDUxMmgwYTE1LjUzLDE1LjUzLDAsMCwxLDcuMDg3ODksMjAuMDA5NzdMMzM0LjMwNiw0NDIuMTI5ODRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNjY2MiLz48cGF0aCBkPSJNMzgwLjcxMTIyLDQ2My4yNzI0MmwzOSwyMDItMjEsNi01MS0xMzMtMjMsMTM2LTIyLDNzLTkuNjUwMzItMTc5Ljk0NSwzMy0yMTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNNDM2Ljg0MjQ2LDQ1My44MDQ4NWExMC41MjcxMiwxMC41MjcxMiwwLDAsMC0uOTYyNjUsMS4zNDkzbC00OS41MzUwNSwyLjQwMTY2LTkuNTM4MzQtMjkuMTE5NTEtMTYuNTYxODUsNy44NzE0MywxNS41ODc3Niw0My4zNzEzLDYxLjI2MjA2LTExLjk4MDc2YTEwLjQ5NTc5LDEwLjQ5NTc5LDAsMSwwLS4yNTE5My0xMy44OTM0MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iI2EwNjE2YSIvPjxwYXRoIGQ9Ik0zNTMuMzE0MjUsNDA3LjE3NjcyYTE1LjUwMDg1LDE1LjUwMDg1LDAsMCwxLDE2LjM2MjMtMTcuMjgyMjNoMGExNS41Mjk1NCwxNS41Mjk1NCwwLDAsMSwxNC41MzQ2NywxNS40NzE2OHYzMS4zMzVsLTI2LjkzNiw0LjE0NDUzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjY2NjIi8+PHBhdGggZD0iTTM0OC45MTk3NSwzNzIuNjY2NDVjLTMuNjg2MzctLjAxNjA1LTYuNTMwMTctMy44OTcyMS02LjM2NDk0LTcuNTc5OTFzMi42Mzg2Ny02LjkyMjg1LDUuNjE4NjYtOS4wOTI5Myw2LjQ3NDc5LTMuNDkxOTEsOS43OTgtNS4wODczOSw2LjYxNzQzLTMuNTg1NjEsOC42NjkyNC02LjY0ODIyYTE0LjcxNTU3LDE0LjcxNTU3LDAsMCwwLDEuMDIzMzItMTMuNTA0MzgsMjEuNjY4NjUsMjEuNjY4NjUsMCwwLDAtOS4zMzMyLTEwLjIyNDE4LDI4LjM3Nzc3LDI4LjM3Nzc3LDAsMCwwLTM3LjYwNzA3LDguMjUwMzhsLTQuMjA4MDgsMTEuNDU3ODdjLTQuMjg3ODYsNS4xNTYxMy00Ljk2OCwxMi44MTMzMy0yLjMzMjE3LDE4Ljk3OTY4czguMjQ4MTQsMTAuODA1NzksMTQuNTgxMTIsMTMuMDExNGEzNS43OTM5MiwzNS43OTM5MiwwLDAsMCwxOS44NDExLjU5NDg4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNMzI2LjQ3MzE3LDMzNC41MDYxM2MtMS44MDg5NC0yLjg5OTMxLTQuOTQ0MzktNC43NDMyNS04LjE4NTg3LTUuODI1NDNhMjUuNzI0MzEsMjUuNzI0MzEsMCwwLDAtMzMuODMyNDQsMjMuMDAyODNjLS4zNDM1Nyw2LjMxNDM3LDEuNjMzNjUsMTIuNDg5MTIsMi43OTU0NSwxOC43MDUxOHMxLjM5MjkxLDEzLjA4MTYxLTIuMDM0NDYsMTguMzk2Yy0yLjYxMDUzLDQuMDQ3OC02Ljk2Mzg3LDYuNTk2MzQtMTEuMjYwODMsOC43NzI1MS0zLjU4MTI4LDEuODEzNzEtNy40NTUwNywzLjUxNTc4LTExLjQ1MzE0LDMuMTU0NHMtOC4wMTY0Mi0zLjUyODEyLTcuOTEwMzMtNy41NDEwOGEzMi4wNTQ0LDMyLjA1NDQsMCwwLDAtMi42ODE2Myw5LjA4MDMzYy0uMjgxMjcsMy4xNTU5My40OTY1OSw2LjU2MTI1LDIuNzc2MDYsOC43NjE5MywzLjMxMzEsMy4xOTg1OSw4LjU2MjU1LDIuOTY0NiwxMy4xMTU3LDIuMjc0NDEsOS44NTY5NC0xLjQ5NDE3LDE5LjgzODE4LTQuMjk1NDMsMjcuNjI1NTItMTAuNTIwMzFzMTIuOTU0NjUtMTYuNDc0OTQsMTAuOTAzODgtMjYuMjMxMjdjLS44NTY2Ni00LjA3NTQ3LTIuODY5OTMtNy43OTYtNC40OTY3Ny0xMS42Mjk2OHMtMi44OTY5Mi04LjAyNy0yLjE0OTU5LTEyLjEyNGExNC43MzUxMywxNC43MzUxMywwLDAsMSw3LjQ5MjU1LTkuOTgxNzYsMTkuNjAxNDIsMTkuNjAxNDIsMCwwLDEsMTIuNTIyNjYtMS44OTljMi43OTkwNi40NTkzMiw2LjI5NDA2LDEuMTcyNTEsNy45NTQxOS0xLjEyNzQyYTQuNTA3NTIsNC41MDc1MiwwLDAsMC0uMDkzNjctNC44MDg1OCwxMy4yNDc1NCwxMy4yNDc1NCwwLDAsMC0zLjU5MjU5LTMuNTU5NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTUxMS40MjM4LDcwMi42NzI1N2gtMzA3LjI5NGExLjE5MDY5LDEuMTkwNjksMCwxLDEsMC0yLjM4MTM3aDMwNy4yOTRhMS4xOTA2OSwxLjE5MDY5LDAsMSwxLDAsMi4zODEzN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iIzNmM2Q1NiIvPjwvc3ZnPg=="}}]);