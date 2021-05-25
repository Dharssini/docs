(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7427],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return w}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},M=Object.keys(e);for(n=0;n<M.length;n++)a=M[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);for(n=0;n<M.length;n++)a=M[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),N=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=N(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,M=e.originalType,l=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),c=N(a),w=i,m=c["".concat(l,".").concat(w)]||c[w]||u[w]||M;return a?n.createElement(m,s(s({ref:t},o),{},{components:a})):n.createElement(m,s({ref:t},o))}));function w(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var M=a.length,s=new Array(M);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var N=2;N<M;N++)s[N]=a[N];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),i=a(79443);t.Z=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},62518:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j},frontMatter:function(){return D},metadata:function(){return d},toc:function(){return L}});var n=a(22122),i=a(19756),M=a(67294),s=a(3905),r=a(80944),l=a(86010),N="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,c=39;var w=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,i=e.values,s=e.groupId,w=e.className,m=(0,r.Z)(),D=m.tabGroupChoices,d=m.setTabGroupChoices,L=(0,M.useState)(n),T=L[0],j=L[1],p=M.Children.toArray(e.children),g=[];if(null!=s){var k=D[s];null!=k&&k!==T&&i.some((function(e){return e.value===k}))&&j(k)}var h=function(e){var t=e.currentTarget,a=g.indexOf(t),n=i[a].value;j(n),null!=s&&(d(s,n),setTimeout((function(){var e,a,n,i,M,s,r,l;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,M=e.right,s=window,r=s.innerHeight,l=s.innerWidth,a>=0&&M<=l&&i<=r&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},y=function(e){var t,a;switch(e.keyCode){case c:var n=g.indexOf(e.target)+1;a=g[n]||g[0];break;case u:var i=g.indexOf(e.target)-1;a=g[i]||g[g.length-1]}null==(t=a)||t.focus()};return M.createElement("div",{className:"tabs-container"},M.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},w)},i.map((function(e){var t=e.value,a=e.label;return M.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,l.Z)("tabs__item",N,{"tabs__item--active":T===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:y,onFocus:h,onClick:h},a)}))),t?(0,M.cloneElement)(p.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):M.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,M.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))};var m=function(e){var t=e.children,a=e.hidden,n=e.className;return M.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},D={id:"style-guide",title:"Style Guide",sidebar_label:"Style Guide",slug:"/style-guide"},d={unversionedId:"style-guide",id:"style-guide",isDocsHomePage:!1,title:"Style Guide",description:"You can write content using",source:"@site/docs/style-guide.md",sourceDirName:".",slug:"/style-guide",permalink:"/documentation/style-guide",editUrl:"https://github.com/openfn/docs/edit/main/docs/style-guide.md",version:"current",sidebar_label:"Style Guide",frontMatter:{id:"style-guide",title:"Style Guide",sidebar_label:"Style Guide",slug:"/style-guide"},sidebar:"docs",previous:{title:"Writing Docs",permalink:"/documentation/writing-docs"},next:{title:"About",permalink:"/documentation/about"}},L=[{value:"Markdown Syntax",id:"markdown-syntax",children:[]},{value:"Headers",id:"headers",children:[]},{value:"H2 - Create the best documentation",id:"h2---create-the-best-documentation",children:[{value:"H3 - Create the best documentation",id:"h3---create-the-best-documentation",children:[]}]},{value:"Emphasis",id:"emphasis",children:[]},{value:"Lists",id:"lists",children:[]},{value:"Links",id:"links",children:[]},{value:"Images",id:"images",children:[{value:"Image sizing/styling",id:"image-sizingstyling",children:[]}]},{value:"Gifs",id:"gifs",children:[]},{value:"Code",id:"code",children:[]},{value:"Tables",id:"tables",children:[]},{value:"Blockquotes",id:"blockquotes",children:[]},{value:"Inline HTML",id:"inline-html",children:[]},{value:"Line Breaks",id:"line-breaks",children:[]},{value:"Admonitions",id:"admonitions",children:[]},{value:"Tabs",id:"tabs",children:[]}],T={toc:L};function j(e){var t=e.components,M=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},T,M,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can write content using\n",(0,s.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub-flavored Markdown syntax"),"."),(0,s.kt)("h2",{id:"markdown-syntax"},"Markdown Syntax"),(0,s.kt)("p",null,"To serve as an example page when styling markdown based Docusaurus sites."),(0,s.kt)("h2",{id:"headers"},"Headers"),(0,s.kt)("h1",{id:"h1---create-the-best-documentation"},"H1 - Create the best documentation"),(0,s.kt)("h2",{id:"h2---create-the-best-documentation"},"H2 - Create the best documentation"),(0,s.kt)("h3",{id:"h3---create-the-best-documentation"},"H3 - Create the best documentation"),(0,s.kt)("h4",{id:"h4---create-the-best-documentation"},"H4 - Create the best documentation"),(0,s.kt)("h5",{id:"h5---create-the-best-documentation"},"H5 - Create the best documentation"),(0,s.kt)("h6",{id:"h6---create-the-best-documentation"},"H6 - Create the best documentation"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"emphasis"},"Emphasis"),(0,s.kt)("p",null,"Emphasis, aka italics, with ",(0,s.kt)("em",{parentName:"p"},"asterisks")," or ",(0,s.kt)("em",{parentName:"p"},"underscores"),"."),(0,s.kt)("p",null,"Strong emphasis, aka bold, with ",(0,s.kt)("strong",{parentName:"p"},"asterisks")," or ",(0,s.kt)("strong",{parentName:"p"},"underscores"),"."),(0,s.kt)("p",null,"Combined emphasis with ",(0,s.kt)("strong",{parentName:"p"},"asterisks and ",(0,s.kt)("em",{parentName:"strong"},"underscores")),"."),(0,s.kt)("p",null,"Strikethrough uses two tildes. ",(0,s.kt)("del",{parentName:"p"},"Scratch this.")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"lists"},"Lists"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"First ordered list item"),(0,s.kt)("li",{parentName:"ol"},"Another item",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Unordered sub-list."))),(0,s.kt)("li",{parentName:"ol"},"Actual numbers don't matter, just that it's a number",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"Ordered sub-list"))),(0,s.kt)("li",{parentName:"ol"},"And another item.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Unordered list can use asterisks")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Or minuses")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Or pluses")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"links"},"Links"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.google.com/"},"I'm an inline-style link")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.google.com/",title:"Google's Homepage"},"I'm an inline-style link with title")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.mozilla.org/"},"I'm a reference-style link")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://slashdot.org/"},"You can use numbers for reference-style link definitions")),(0,s.kt)("p",null,"Or leave it empty and use the ",(0,s.kt)("a",{parentName:"p",href:"http://www.reddit.com/"},"link text itself"),"."),(0,s.kt)("p",null,"URLs and URLs in angle brackets will automatically get turned into links.\n",(0,s.kt)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," or ",(0,s.kt)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," and sometimes example.com\n(but not on GitHub, for example)."),(0,s.kt)("p",null,"Some text to show that the reference links can follow later."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"images"},"Images"),(0,s.kt)("p",null,"Here's our logo (hover to see the title text):"),(0,s.kt)("p",null,"Inline-style:\n",(0,s.kt)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 1"})),(0,s.kt)("p",null,"Reference-style: ",(0,s.kt)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 2"})),(0,s.kt)("p",null,"Images from any folder can be used by providing path to file. Path should be\nrelative to markdown file."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:a(70966).Z})),(0,s.kt)("h3",{id:"image-sizingstyling"},"Image sizing/styling"),(0,s.kt)("p",null,"Images can be sized using inline HTML."),(0,s.kt)("img",{src:"/img/undraw_Portfolio_update_re_jqnp.svg",width:"200"}),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"gifs"},"Gifs"),(0,s.kt)("p",null,"Gifs are helpful for demonstrating short sequences of user behaviour."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:a(59902).Z})),(0,s.kt)("p",null,"There are many tools that will help you create GIFs:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/phw/peek"},"Peek")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/capture-to-a-gif/eapecadlmfblmnfnojebefkbginhggeh"},"Capture to a Gif")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/chrome-capture-screenshot/ggaabchcecdbomdcnbahdfddfikjmphe"},"Chrome Capture"))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},'Please note that if you\'re using an animated "cursor dot" and "show/click\nanimation", the hex code we use is ',(0,s.kt)("strong",{parentName:"p"},"#B53F48"),"."))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"code"},"Code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var s = 'JavaScript syntax highlighting';\nalert(s);\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'s = "Python syntax highlighting"\nprint(s)\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"No language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"function highlightMe() {\n  console.log('This line can be highlighted!');\n}\n")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"tables"},"Tables"),(0,s.kt)("p",null,"Colons can be used to align columns."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Tables"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Are"),(0,s.kt)("th",{parentName:"tr",align:"right"},"Cool"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"col 3 is"),(0,s.kt)("td",{parentName:"tr",align:"center"},"right-aligned"),(0,s.kt)("td",{parentName:"tr",align:"right"},"\\$1600")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"col 2 is"),(0,s.kt)("td",{parentName:"tr",align:"center"},"centered"),(0,s.kt)("td",{parentName:"tr",align:"right"},"\\$12")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"zebra stripes"),(0,s.kt)("td",{parentName:"tr",align:"center"},"are neat"),(0,s.kt)("td",{parentName:"tr",align:"right"},"\\$1")))),(0,s.kt)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (|)\nare optional, and you don't need to make the raw Markdown line up prettily. You\ncan also use inline Markdown."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Markdown"),(0,s.kt)("th",{parentName:"tr",align:null},"Less"),(0,s.kt)("th",{parentName:"tr",align:null},"Pretty"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("em",{parentName:"td"},"Still")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"renders")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"nicely"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"2"),(0,s.kt)("td",{parentName:"tr",align:null},"3")))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"blockquotes"},"Blockquotes"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Blockquotes are very handy in email to emulate reply text. This line is part\nof the same quote.")),(0,s.kt)("p",null,"Quote break."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This is a very long line that will still be quoted properly when it wraps. Oh\nboy let's keep writing to make sure this is long enough to actually wrap for\neveryone. Oh, you can ",(0,s.kt)("em",{parentName:"p"},"put")," ",(0,s.kt)("strong",{parentName:"p"},"Markdown")," into a blockquote.")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"inline-html"},"Inline HTML"),(0,s.kt)("dl",null,(0,s.kt)("dt",null,"Definition list"),(0,s.kt)("dd",null,"Is something people use sometimes."),(0,s.kt)("dt",null,"Markdown in HTML"),(0,s.kt)("dd",null,"Does *not* work **very** well. Use HTML ",(0,s.kt)("em",null,"tags"),".")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"line-breaks"},"Line Breaks"),(0,s.kt)("p",null,"Here's a line for us to start with."),(0,s.kt)("p",null,"This line is separated from the one above by two newlines, so it will be a\n",(0,s.kt)("em",{parentName:"p"},"separate paragraph"),"."),(0,s.kt)("p",null,"This line is also a separate paragraph, but... This line is only separated by a\nsingle newline, so it's a separate line in the ",(0,s.kt)("em",{parentName:"p"},"same paragraph"),"."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"admonitions"},"Admonitions"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This is a note"))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This is a tip"))),(0,s.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This is important"))),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This is a caution"))),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This is a warning"))),(0,s.kt)("h2",{id:"tabs"},"Tabs"),(0,s.kt)("p",null,"Note how we import tabs first, then use them as below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  defaultValue=\"apple\"\n  values={[\n    { label: 'Apple', value: 'apple' },\n    { label: 'Orange', value: 'orange' },\n    { label: 'Banana', value: 'banana' },\n  ]}\n>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>;\n")),(0,s.kt)(w,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,s.kt)(m,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,s.kt)(m,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,s.kt)(m,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))}j.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})},59902:function(e,t,a){"use strict";t.Z=a.p+"assets/images/how-to-gif-727dedc47b0df45976bba4da21fce3d9.gif"},70966:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iYmI0M2IzMDMtNzc4My00YjIwLTg0YWMtODk4OTg4MzZlOWRjIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijc5NC4xMjE4IiBoZWlnaHQ9IjUwNS4zNDUxNCIgdmlld0JveD0iMCAwIDc5NC4xMjE4IDUwNS4zNDUxNCI+PHBhdGggZD0iTTI0Ny40NTc5LDcwMS4xOTg0MmMtMTIuMjUwOTUtMS4wMDc4Ny0yMy4wNjctOS44NzExNy0yOS4yMTgtMjAuNTEzODQtMi4wNjI3NS0zLjU2OS0zLjQ3NjA5LTguMjUwNjMtMS4xNDAxOC0xMS42NDcxN2E2LjQwOTI4LDYuNDA5MjgsMCwwLDEsMTEuMzE1LDEuNDcxMTksNjIuMDQ1MzksNjIuMDQ1MzksMCwwLDEtLjk2NDg1LTEyLjY0MDg2Yy4wOTQxNi0zLjU4Ni43NzE3Ni03LjY0MDUyLDMuNzUzNTgtOS42MzQ3LDMuNDU5MjgtMi4zMTM0OSw4LjQ0NTQ5LS40NzY2MywxMC45NjE2NywyLjgzODE1czMuMTk4OTQsNy42MjY3MSwzLjgwMjgzLDExLjc0NDI2YTEwLjgzMDQxLDEwLjgzMDQxLDAsMCwxLDEyLjAzODY1LTEzLjY1NzEzYzUuMDY2NzIuNzY1MTUsOS4wMzU4MSw1LjE1MTksMTAuNTg0NTcsMTAuMDM2NDFzMS4wNjUyMiwxMC4xODA3MS4wNjg0MiwxNS4yMDdjLTEuMTY4ODMsNS44OTM3My0zLjA2NTgyLDExLjc0MDYyLTYuNDgxLDE2LjY4NDE3cy04LjQ4OCw4LjkyOS0xNC4zNzM1MywxMC4xMzgyMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iI2YyZjJmMiIvPjxwYXRoIGQ9Ik05OTcuMDYwOSwzMDMuMzI3NDNhMTA2LjAzMzkxLDEwNi4wMzM5MSwwLDAsMS03MSwxMDAuMDhjLS42NjAxNi4yMy0xLjMzMDA4LjQ2LTIsLjY3di0xMDcuNzFoLTEzOC43N2MuMDQtLjY3LjA4OTg0LTEuMzQuMTQ5OS0ySDkyNC4wNjA5di0yMS4wNGE1LjAwMiw1LjAwMiwwLDAsMC01LTVINzkwLjk4MDgyYy4yMy0uNjcuNDcwMjEtMS4zNC43My0yYTEwNi4wMTAyMiwxMDYuMDEwMjIsMCwwLDEsMjA1LjM1MDEsMzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNmMmYyZjIiLz48cGF0aCBkPSJNOTE5LjA2MDksMjY2LjMyNzQzaC00ODdhNy4wMDc3OCw3LjAwNzc4LDAsMCwwLTcsN3YzMzBhNy4wMDc3OCw3LjAwNzc4LDAsMCwwLDcsN2g0ODdhNy4wMDc3OSw3LjAwNzc5LDAsMCwwLDctN3YtMzMwQTcuMDA3NzgsNy4wMDc3OCwwLDAsMCw5MTkuMDYwOSwyNjYuMzI3NDNabTUsMzM3YTUuMDAyLDUuMDAyLDAsMCwxLTUsNWgtNDg3YTUuMDAyLDUuMDAyLDAsMCwxLTUtNXYtMzMwYTUuMDAyLDUuMDAyLDAsMCwxLDUtNWg0ODdhNS4wMDIsNS4wMDIsMCwwLDEsNSw1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMjIzLjEyMTgiIHk9Ijk3LjAzOTk4IiB3aWR0aD0iNDk5IiBoZWlnaHQ9IjIiIGZpbGw9IiMzZjNkNTYiLz48Y2lyY2xlIGN4PSIyNDAuMTIxOCIgY3k9Ijg0IiByPSI2IiBmaWxsPSIjM2YzZDU2Ii8+PGNpcmNsZSBjeD0iMjU3LjM3MTgiIGN5PSI4NCIgcj0iNiIgZmlsbD0iIzNmM2Q1NiIvPjxjaXJjbGUgY3g9IjI3NC42MjE4IiBjeT0iODQiIHI9IjYiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNNTYyLjA2MDksMzM1LjMyNzQzaC04OGE3LjAwNzc4LDcuMDA3NzgsMCwwLDAtNyw3djg4YTcuMDA3NzgsNy4wMDc3OCwwLDAsMCw3LDdoODhhNy4wMDc3OSw3LjAwNzc5LDAsMCwwLDctN3YtODhBNy4wMDc3OCw3LjAwNzc4LDAsMCwwLDU2Mi4wNjA5LDMzNS4zMjc0M1ptNSw5NWE1LjAwMiw1LjAwMiwwLDAsMS01LDVoLTg4YTUuMDAyLDUuMDAyLDAsMCwxLTUtNXYtODhhNS4wMDIsNS4wMDIsMCwwLDEsNS01aDg4YTUuMDAyLDUuMDAyLDAsMCwxLDUsNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik03MjAuMDYwOSwzMzUuODI3NDNoLTg4YTYuNTEyNTksNi41MTI1OSwwLDAsMC02LjUsNi41djg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUsNi41aDg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUtNi41di04OEE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNzIwLjA2MDksMzM1LjgyNzQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTg3OC4wNjA5LDMzNS44Mjc0M2gtODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLTYuNSw2LjV2ODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNSw2LjVoODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNS02LjV2LTg4QTYuNTEyNTksNi41MTI1OSwwLDAsMCw4NzguMDYwOSwzMzUuODI3NDNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNNTYyLjA2MDksNDY3LjgyNzQzaC04OGE2LjUxMjU5LDYuNTEyNTksMCwwLDAtNi41LDYuNXY4OGE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNi41LDYuNWg4OGE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNi41LTYuNXYtODhBNi41MTI1OSw2LjUxMjU5LDAsMCwwLDU2Mi4wNjA5LDQ2Ny44Mjc0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGQ9Ik03MjAuMDYwOSw0NjcuODI3NDNoLTg4YTYuNTEyNTksNi41MTI1OSwwLDAsMC02LjUsNi41djg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUsNi41aDg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUtNi41di04OEE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNzIwLjA2MDksNDY3LjgyNzQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTg3OC4wNjA5LDQ2Ny44Mjc0M2gtODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLTYuNSw2LjV2ODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNSw2LjVoODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNS02LjV2LTg4QTYuNTEyNTksNi41MTI1OSwwLDAsMCw4NzguMDYwOSw0NjcuODI3NDNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNNTQwLjU2MDksNDgyLjMyNzQzaC04OGE2LjUwNzQ1LDYuNTA3NDUsMCwwLDEtNi41LTYuNXYtODhhNi41MDc0NCw2LjUwNzQ0LDAsMCwxLDYuNS02LjVoODhhNi41MDc0NSw2LjUwNzQ1LDAsMCwxLDYuNSw2LjV2ODhBNi41MDc0NSw2LjUwNzQ1LDAsMCwxLDU0MC41NjA5LDQ4Mi4zMjc0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iIzZjNjNmZiIvPjxwb2x5Z29uIHBvaW50cz0iMjAyLjc0NiA0OTIuMDg4IDIxNC40NjYgNDg4LjQ5MSAyMDYuMTcgNDQxLjU3MyAxODguODcyIDQ0Ni44ODEgMjAyLjc0NiA0OTIuMDg4IiBmaWxsPSIjYTA2MTZhIi8+PHBhdGggZD0iTTQwMy40ODIsNjgwLjg1Nzg5aDM4LjUzMDczYTAsMCwwLDAsMSwwLDB2MTQuODg2ODdhMCwwLDAsMCwxLDAsMEg0MTguMzY4ODdBMTQuODg2ODYsMTQuODg2ODYsMCwwLDEsNDAzLjQ4Miw2ODAuODU3OXYwQTAsMCwwLDAsMSw0MDMuNDgyLDY4MC44NTc4OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyNS44OTExMiAxMDI0Ljk1NjY5KSByb3RhdGUoMTYyLjkzOTEyKSIgZmlsbD0iIzJmMmU0MSIvPjxwb2x5Z29uIHBvaW50cz0iMTAyLjc0OCA0OTIuMzU4IDExNS4wMDggNDkyLjM1NyAxMjAuODQgNDQ1LjA2OSAxMDIuNzQ2IDQ0NS4wNyAxMDIuNzQ4IDQ5Mi4zNTgiIGZpbGw9IiNhMDYxNmEiLz48cGF0aCBkPSJNMzAzLjA2LDY4Ni4xODE2N2gzOC41MzA3M2EwLDAsMCwwLDEsMCwwdjE0Ljg4Njg3YTAsMCwwLDAsMSwwLDBIMzE3Ljk0Njg5QTE0Ljg4Njg2LDE0Ljg4Njg2LDAsMCwxLDMwMy4wNiw2ODYuMTgxNjh2MGEwLDAsMCwwLDEsMCwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDQxLjc0MzM1IDExODkuOTA4MDcpIHJvdGF0ZSgxNzkuOTk3MzgpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTMwNC44MDc0Myw1NTIuNjA3ODhhOS4xNjIyNCw5LjE2MjI0LDAsMCwxLC4zMTgtMTQuMDQ1NThsOS41MDUzNi0xMTkuNjk0NTksMTkuMzMwODYsNC44Mjk3TDMxOC40ODQwNyw1NDAuNDU1OTRhOS4yMTE4OCw5LjIxMTg4LDAsMCwxLTEzLjY3NjY0LDEyLjE1MTk0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjYTA2MTZhIi8+PGNpcmNsZSBjeD0iMTQwLjU3OTIxIiBjeT0iMTUwLjU1NTIzIiByPSIyNC41NjEwMyIgZmlsbD0iI2EwNjE2YSIvPjxwYXRoIGQ9Ik0zMjIuMTYxNjYsNDE1LjE4NjA1Yy01LjU0MTk0LTcuNjA4MTUtNS43MTI2OS0xOC4wODY4My4yNTcwOC0yNS4zNjQxMiwzLjg5NTg3LTQuNzQ5MTQsMTAuNDEyNDgtOC41NDk1MSwyMS4yOTI0OC04LjU0OTUxLDI5LDAsNDAsMjMsNDAsMjNzMTIsMjIsNSw0Mi03LDIyLTcsMjJsLTQ2LTRTMzQzLjQ3MTQyLDQ0NC40NDA3OSwzMjIuMTYxNjYsNDE1LjE4NjA1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjY2NjIi8+PHBhdGggZD0iTTMwNy45NzY2LDQzNS4wOTQ2OWw5LjkwOTY3LTMyLjQyMDlhMTUuNTAxODksMTUuNTAxODksMCwwLDEsMjEuOTMwMTgtOS4yNDUxMmgwYTE1LjUzLDE1LjUzLDAsMCwxLDcuMDg3ODksMjAuMDA5NzdMMzM0LjMwNiw0NDIuMTI5ODRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNjY2MiLz48cGF0aCBkPSJNMzgwLjcxMTIyLDQ2My4yNzI0MmwzOSwyMDItMjEsNi01MS0xMzMtMjMsMTM2LTIyLDNzLTkuNjUwMzItMTc5Ljk0NSwzMy0yMTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNNDM2Ljg0MjQ2LDQ1My44MDQ4NWExMC41MjcxMiwxMC41MjcxMiwwLDAsMC0uOTYyNjUsMS4zNDkzbC00OS41MzUwNSwyLjQwMTY2LTkuNTM4MzQtMjkuMTE5NTEtMTYuNTYxODUsNy44NzE0MywxNS41ODc3Niw0My4zNzEzLDYxLjI2MjA2LTExLjk4MDc2YTEwLjQ5NTc5LDEwLjQ5NTc5LDAsMSwwLS4yNTE5My0xMy44OTM0MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iI2EwNjE2YSIvPjxwYXRoIGQ9Ik0zNTMuMzE0MjUsNDA3LjE3NjcyYTE1LjUwMDg1LDE1LjUwMDg1LDAsMCwxLDE2LjM2MjMtMTcuMjgyMjNoMGExNS41Mjk1NCwxNS41Mjk1NCwwLDAsMSwxNC41MzQ2NywxNS40NzE2OHYzMS4zMzVsLTI2LjkzNiw0LjE0NDUzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjY2NjIi8+PHBhdGggZD0iTTM0OC45MTk3NSwzNzIuNjY2NDVjLTMuNjg2MzctLjAxNjA1LTYuNTMwMTctMy44OTcyMS02LjM2NDk0LTcuNTc5OTFzMi42Mzg2Ny02LjkyMjg1LDUuNjE4NjYtOS4wOTI5Myw2LjQ3NDc5LTMuNDkxOTEsOS43OTgtNS4wODczOSw2LjYxNzQzLTMuNTg1NjEsOC42NjkyNC02LjY0ODIyYTE0LjcxNTU3LDE0LjcxNTU3LDAsMCwwLDEuMDIzMzItMTMuNTA0MzgsMjEuNjY4NjUsMjEuNjY4NjUsMCwwLDAtOS4zMzMyLTEwLjIyNDE4LDI4LjM3Nzc3LDI4LjM3Nzc3LDAsMCwwLTM3LjYwNzA3LDguMjUwMzhsLTQuMjA4MDgsMTEuNDU3ODdjLTQuMjg3ODYsNS4xNTYxMy00Ljk2OCwxMi44MTMzMy0yLjMzMjE3LDE4Ljk3OTY4czguMjQ4MTQsMTAuODA1NzksMTQuNTgxMTIsMTMuMDExNGEzNS43OTM5MiwzNS43OTM5MiwwLDAsMCwxOS44NDExLjU5NDg4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNMzI2LjQ3MzE3LDMzNC41MDYxM2MtMS44MDg5NC0yLjg5OTMxLTQuOTQ0MzktNC43NDMyNS04LjE4NTg3LTUuODI1NDNhMjUuNzI0MzEsMjUuNzI0MzEsMCwwLDAtMzMuODMyNDQsMjMuMDAyODNjLS4zNDM1Nyw2LjMxNDM3LDEuNjMzNjUsMTIuNDg5MTIsMi43OTU0NSwxOC43MDUxOHMxLjM5MjkxLDEzLjA4MTYxLTIuMDM0NDYsMTguMzk2Yy0yLjYxMDUzLDQuMDQ3OC02Ljk2Mzg3LDYuNTk2MzQtMTEuMjYwODMsOC43NzI1MS0zLjU4MTI4LDEuODEzNzEtNy40NTUwNywzLjUxNTc4LTExLjQ1MzE0LDMuMTU0NHMtOC4wMTY0Mi0zLjUyODEyLTcuOTEwMzMtNy41NDEwOGEzMi4wNTQ0LDMyLjA1NDQsMCwwLDAtMi42ODE2Myw5LjA4MDMzYy0uMjgxMjcsMy4xNTU5My40OTY1OSw2LjU2MTI1LDIuNzc2MDYsOC43NjE5MywzLjMxMzEsMy4xOTg1OSw4LjU2MjU1LDIuOTY0NiwxMy4xMTU3LDIuMjc0NDEsOS44NTY5NC0xLjQ5NDE3LDE5LjgzODE4LTQuMjk1NDMsMjcuNjI1NTItMTAuNTIwMzFzMTIuOTU0NjUtMTYuNDc0OTQsMTAuOTAzODgtMjYuMjMxMjdjLS44NTY2Ni00LjA3NTQ3LTIuODY5OTMtNy43OTYtNC40OTY3Ny0xMS42Mjk2OHMtMi44OTY5Mi04LjAyNy0yLjE0OTU5LTEyLjEyNGExNC43MzUxMywxNC43MzUxMywwLDAsMSw3LjQ5MjU1LTkuOTgxNzYsMTkuNjAxNDIsMTkuNjAxNDIsMCwwLDEsMTIuNTIyNjYtMS44OTljMi43OTkwNi40NTkzMiw2LjI5NDA2LDEuMTcyNTEsNy45NTQxOS0xLjEyNzQyYTQuNTA3NTIsNC41MDc1MiwwLDAsMC0uMDkzNjctNC44MDg1OCwxMy4yNDc1NCwxMy4yNDc1NCwwLDAsMC0zLjU5MjU5LTMuNTU5NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTUxMS40MjM4LDcwMi42NzI1N2gtMzA3LjI5NGExLjE5MDY5LDEuMTkwNjksMCwxLDEsMC0yLjM4MTM3aDMwNy4yOTRhMS4xOTA2OSwxLjE5MDY5LDAsMSwxLDAsMi4zODEzN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iIzNmM2Q1NiIvPjwvc3ZnPg=="}}]);