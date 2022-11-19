"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[77078],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>w});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},M=Object.keys(e);for(n=0;n<M.length;n++)a=M[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);for(n=0;n<M.length;n++)a=M[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var N=n.createContext({}),r=function(e){var t=n.useContext(N),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=r(e.components);return n.createElement(N.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},D=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,M=e.originalType,N=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),D=r(a),w=i,L=D["".concat(N,".").concat(w)]||D[w]||o[w]||M;return a?n.createElement(L,l(l({ref:t},u),{},{components:a})):n.createElement(L,l({ref:t},u))}));function w(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var M=a.length,l=new Array(M);l[0]=D;var s={};for(var N in t)hasOwnProperty.call(t,N)&&(s[N]=t[N]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var r=2;r<M;r++)l[r]=a[r];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}D.displayName="MDXCreateElement"},32349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>l,default:()=>L,frontMatter:()=>M,metadata:()=>s,toc:()=>r});var n=a(87462),i=(a(67294),a(3905));const M={id:"style-guide",title:"Guide de style",sidebar_label:"Guide de style",slug:"/style-guide"},l=void 0,s={unversionedId:"style-guide",id:"style-guide",title:"Guide de style",description:"Tu peux \xe9crire du contenu avec la syntaxe Markdown bas\xe9e sur GitHub.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/style-guide.md",sourceDirName:".",slug:"/style-guide",permalink:"/fr/documentation/style-guide",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/style-guide.md",tags:[],version:"current",frontMatter:{id:"style-guide",title:"Guide de style",sidebar_label:"Guide de style",slug:"/style-guide"},sidebar:"docs",previous:{title:"R\xe9daction de docs",permalink:"/fr/documentation/writing-docs"},next:{title:"Qui sommes-nous",permalink:"/fr/documentation/about"}},N={},r=[{value:"Syntaxe de Markdown",id:"syntaxe-de-markdown",level:2},{value:"En-t\xeates",id:"en-t\xeates",level:2},{value:"H2 - Cr\xe9er la meilleure documentation",id:"h2---cr\xe9er-la-meilleure-documentation",level:2},{value:"H3 - Cr\xe9er la meilleure documentation",id:"h3---cr\xe9er-la-meilleure-documentation",level:3},{value:"H4 - Cr\xe9er la meilleure documentation",id:"h4---cr\xe9er-la-meilleure-documentation",level:4},{value:"H5 - Cr\xe9er la meilleure documentation",id:"h5---cr\xe9er-la-meilleure-documentation",level:5},{value:"H6 - Cr\xe9er la meilleure documentation",id:"h6---cr\xe9er-la-meilleure-documentation",level:6},{value:"Mise en valeur",id:"mise-en-valeur",level:2},{value:"Listes",id:"listes",level:2},{value:"Liens",id:"liens",level:2},{value:"Images",id:"images",level:2},{value:"Taille / style de l&#39;image",id:"taille--style-de-limage",level:3},{value:"Gifs",id:"gifs",level:2},{value:"Code",id:"code",level:2},{value:"Tables",id:"tables",level:2},{value:"Citations",id:"citations",level:2},{value:"HTML en ligne",id:"html-en-ligne",level:2},{value:"Sauts de ligne",id:"sauts-de-ligne",level:2},{value:"Avertissements",id:"avertissements",level:2},{value:"Onglets",id:"onglets",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},o=u("Tabs"),D=u("TabItem"),w={toc:r};function L(e){let{components:t,...M}=e;return(0,i.kt)("wrapper",(0,n.Z)({},w,M,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tu peux \xe9crire du contenu avec ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"la syntaxe Markdown bas\xe9e sur GitHub"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We use a ",(0,i.kt)("inlineCode",{parentName:"p"},".prettierrc"),' file to enforce standard styles via the "Prettier" code formatter. If you are using VsCode, you can install prettier via ',(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode")),(0,i.kt)("p",{parentName:"admonition"},"Make sure to format you work before opening a PR.")),(0,i.kt)("h2",{id:"syntaxe-de-markdown"},"Syntaxe de Markdown"),(0,i.kt)("p",null,"To serve as an example page when styling markdown based Docusaurus sites."),(0,i.kt)("h2",{id:"en-t\xeates"},"En-t\xeates"),(0,i.kt)("h1",{id:"h1---cr\xe9er-la-meilleure-documentation"},"H1 - Cr\xe9er la meilleure documentation"),(0,i.kt)("h2",{id:"h2---cr\xe9er-la-meilleure-documentation"},"H2 - Cr\xe9er la meilleure documentation"),(0,i.kt)("h3",{id:"h3---cr\xe9er-la-meilleure-documentation"},"H3 - Cr\xe9er la meilleure documentation"),(0,i.kt)("h4",{id:"h4---cr\xe9er-la-meilleure-documentation"},"H4 - Cr\xe9er la meilleure documentation"),(0,i.kt)("h5",{id:"h5---cr\xe9er-la-meilleure-documentation"},"H5 - Cr\xe9er la meilleure documentation"),(0,i.kt)("h6",{id:"h6---cr\xe9er-la-meilleure-documentation"},"H6 - Cr\xe9er la meilleure documentation"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"mise-en-valeur"},"Mise en valeur"),(0,i.kt)("p",null,"Emphasis, aka italics, with ",(0,i.kt)("em",{parentName:"p"},"asterisks")," or ",(0,i.kt)("em",{parentName:"p"},"underscores"),"."),(0,i.kt)("p",null,"Strong emphasis, aka bold, with ",(0,i.kt)("strong",{parentName:"p"},"asterisks")," or ",(0,i.kt)("strong",{parentName:"p"},"underscores"),"."),(0,i.kt)("p",null,"Combined emphasis with ",(0,i.kt)("strong",{parentName:"p"},"asterisks and ",(0,i.kt)("em",{parentName:"strong"},"underscores")),"."),(0,i.kt)("p",null,"Strikethrough uses two tildes. ",(0,i.kt)("del",{parentName:"p"},"Scratch this.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"listes"},"Listes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Premier \xe9l\xe9ment de liste ordonn\xe9"),(0,i.kt)("li",{parentName:"ol"},"Un autre \xe9l\xe9ment",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sous-liste non-ordonn\xe9e."))),(0,i.kt)("li",{parentName:"ol"},"Les nombres r\xe9els n'ont pas d'importance, juste qu'il s'agit d'un nombre",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Sous-liste ordonn\xe9e"))),(0,i.kt)("li",{parentName:"ol"},"Et un autre \xe9l\xe9ment.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Une liste non ordonn\xe9e peut utiliser des ast\xe9risques")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ou moins")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ou plus")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"liens"},"Liens"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/"},"I'm an inline-style link")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/",title:"Google's Homepage"},"I'm an inline-style link with title")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.mozilla.org/"},"I'm a reference-style link")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://slashdot.org/"},"You can use numbers for reference-style link definitions")),(0,i.kt)("p",null,"Or leave it empty and use the ",(0,i.kt)("a",{parentName:"p",href:"http://www.reddit.com/"},"link text itself"),"."),(0,i.kt)("p",null,"URLs and URLs in angle brackets will automatically get turned into links. ",(0,i.kt)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," or ",(0,i.kt)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," and sometimes example.com (but not on GitHub, for example)."),(0,i.kt)("p",null,"Some text to show that the reference links can follow later."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"images"},"Images"),(0,i.kt)("p",null,"Here's our logo (hover to see the title text):"),(0,i.kt)("p",null,"Inline-style: ",(0,i.kt)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 1"})),(0,i.kt)("p",null,"Reference-style: ",(0,i.kt)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text"})),(0,i.kt)("p",null,"'Logo Title Text 2'"),(0,i.kt)("p",null,"Images from any folder can be used by providing path to file. Path should be relative to markdown file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(302).Z,width:"794",height:"505"})),(0,i.kt)("h3",{id:"taille--style-de-limage"},"Taille / style de l'image"),(0,i.kt)("p",null,"Images can be sized using inline HTML."),(0,i.kt)("img",{src:"/img/undraw_Portfolio_update_re_jqnp.svg",width:"200"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"gifs"},"Gifs"),(0,i.kt)("p",null,"Gifs are helpful for demonstrating short sequences of user behaviour."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(14496).Z,width:"1191",height:"727"})),(0,i.kt)("p",null,"There are many tools that will help you create GIFs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/phw/peek"},"Peek")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/capture-to-a-gif/eapecadlmfblmnfnojebefkbginhggeh"},"Capturer vers un Gif")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/chrome-capture-screenshot/ggaabchcecdbomdcnbahdfddfikjmphe"},"Capture de Chrome"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'Please note that if you\'re using an animated "cursor dot" and "show/click animation", the hex code we use is ',(0,i.kt)("strong",{parentName:"p"},"#B53F48"),".")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var s = 'Coloration de syntaxe JavaScript' ;\nalerte(s) ;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'s = "Coloration syntaxique Python"\nprint(s)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Aucune langue indiqu\xe9e, donc aucune coloration syntaxique.\nMais jetons un <b>tag</b>.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"function highlightMe() {\n  console.log( 'Cette ligne peut \xeatre surlign\xe9e ! ');\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"tables"},"Tables"),(0,i.kt)("p",null,"Colons can be used to align columns."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tables"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Sont"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Cool"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"le col 3 est"),(0,i.kt)("td",{parentName:"tr",align:"center"},"align\xe9 \xe0 droite"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\\$1600")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"le col 2 est"),(0,i.kt)("td",{parentName:"tr",align:"center"},"centr\xe9"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\\$12")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rayures de z\xe8bre"),(0,i.kt)("td",{parentName:"tr",align:"center"},"sont soign\xe9es"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\\$1")))),(0,i.kt)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Markdown"),(0,i.kt)("th",{parentName:"tr",align:null},"Moins"),(0,i.kt)("th",{parentName:"tr",align:null},"Joli"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Toujours")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rendu")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"joliment"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"3")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"citations"},"Citations"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Les citations sont tr\xe8s pratiques dans les e-mails pour \xe9muler le texte de r\xe9ponse. Cette ligne fait partie de la m\xeame citation.")),(0,i.kt)("p",null,"Quote break."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Il s'agit d'une ligne tr\xe8s longue qui sera toujours cit\xe9e correctement lorsqu'elle sera incluse. Oh gar\xe7on continuons \xe0 \xe9crire pour s'assurer que c'est assez long pour vraiment envelopper tout le monde. Oh, vous pouvez ",(0,i.kt)("em",{parentName:"p"},"mettre")," ",(0,i.kt)("strong",{parentName:"p"},"Markdown")," dans une citation.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"html-en-ligne"},"HTML en ligne"),(0,i.kt)("dl",null,(0,i.kt)("dt",null,"Liste de d\xe9finitions"),(0,i.kt)("dd",null,"C'est quelque chose que les gens utilisent parfois."),(0,i.kt)("dt",null,"Markdown en HTML"),(0,i.kt)("dd",null,"Ne fonctionne *pas* **tr\xe8s** bien. Utilisez les ",(0,i.kt)("em",null,"balises")," HTML.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"sauts-de-ligne"},"Sauts de ligne"),(0,i.kt)("p",null,"Here's a line for us to start with."),(0,i.kt)("p",null,"This line is separated from the one above by two newlines, so it will be a ",(0,i.kt)("em",{parentName:"p"},"separate paragraph"),"."),(0,i.kt)("p",null,"This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the ",(0,i.kt)("em",{parentName:"p"},"same paragraph"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"avertissements"},"Avertissements"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This is a note")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This is a tip")),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"This is important")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This is a caution")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"This is a warning")),(0,i.kt)("h2",{id:"onglets"},"Onglets"),(0,i.kt)("p",null,"importer des Onglets depuis '@theme/Tabs';\nimporter un tabItem depuis '@theme/TabItem';"),(0,i.kt)("p",null,"Note how we import tabs first, then use them as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  defaultValue=\"apple\"\n  values={[\n    { label: 'Apple', value: 'apple' },\n    { label: 'Orange', value: 'orange' },\n    { label: 'Banana', value: 'banana' },\n  ]}\n>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>;\n")),(0,i.kt)(o,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,i.kt)(D,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,i.kt)(D,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,i.kt)(D,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))}L.isMDXComponent=!0},14496:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/how-to-gif-727dedc47b0df45976bba4da21fce3d9.gif"},302:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyBpZD0iYmI0M2IzMDMtNzc4My00YjIwLTg0YWMtODk4OTg4MzZlOWRjIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijc5NC4xMjE4IiBoZWlnaHQ9IjUwNS4zNDUxNCIgdmlld0JveD0iMCAwIDc5NC4xMjE4IDUwNS4zNDUxNCI+PHBhdGggZD0iTTI0Ny40NTc5LDcwMS4xOTg0MmMtMTIuMjUwOTUtMS4wMDc4Ny0yMy4wNjctOS44NzExNy0yOS4yMTgtMjAuNTEzODQtMi4wNjI3NS0zLjU2OS0zLjQ3NjA5LTguMjUwNjMtMS4xNDAxOC0xMS42NDcxN2E2LjQwOTI4LDYuNDA5MjgsMCwwLDEsMTEuMzE1LDEuNDcxMTksNjIuMDQ1MzksNjIuMDQ1MzksMCwwLDEtLjk2NDg1LTEyLjY0MDg2Yy4wOTQxNi0zLjU4Ni43NzE3Ni03LjY0MDUyLDMuNzUzNTgtOS42MzQ3LDMuNDU5MjgtMi4zMTM0OSw4LjQ0NTQ5LS40NzY2MywxMC45NjE2NywyLjgzODE1czMuMTk4OTQsNy42MjY3MSwzLjgwMjgzLDExLjc0NDI2YTEwLjgzMDQxLDEwLjgzMDQxLDAsMCwxLDEyLjAzODY1LTEzLjY1NzEzYzUuMDY2NzIuNzY1MTUsOS4wMzU4MSw1LjE1MTksMTAuNTg0NTcsMTAuMDM2NDFzMS4wNjUyMiwxMC4xODA3MS4wNjg0MiwxNS4yMDdjLTEuMTY4ODMsNS44OTM3My0zLjA2NTgyLDExLjc0MDYyLTYuNDgxLDE2LjY4NDE3cy04LjQ4OCw4LjkyOS0xNC4zNzM1MywxMC4xMzgyMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iI2YyZjJmMiIvPjxwYXRoIGQ9Ik05OTcuMDYwOSwzMDMuMzI3NDNhMTA2LjAzMzkxLDEwNi4wMzM5MSwwLDAsMS03MSwxMDAuMDhjLS42NjAxNi4yMy0xLjMzMDA4LjQ2LTIsLjY3di0xMDcuNzFoLTEzOC43N2MuMDQtLjY3LjA4OTg0LTEuMzQuMTQ5OS0ySDkyNC4wNjA5di0yMS4wNGE1LjAwMiw1LjAwMiwwLDAsMC01LTVINzkwLjk4MDgyYy4yMy0uNjcuNDcwMjEtMS4zNC43My0yYTEwNi4wMTAyMiwxMDYuMDEwMjIsMCwwLDEsMjA1LjM1MDEsMzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNmMmYyZjIiLz48cGF0aCBkPSJNOTE5LjA2MDksMjY2LjMyNzQzaC00ODdhNy4wMDc3OCw3LjAwNzc4LDAsMCwwLTcsN3YzMzBhNy4wMDc3OCw3LjAwNzc4LDAsMCwwLDcsN2g0ODdhNy4wMDc3OSw3LjAwNzc5LDAsMCwwLDctN3YtMzMwQTcuMDA3NzgsNy4wMDc3OCwwLDAsMCw5MTkuMDYwOSwyNjYuMzI3NDNabTUsMzM3YTUuMDAyLDUuMDAyLDAsMCwxLTUsNWgtNDg3YTUuMDAyLDUuMDAyLDAsMCwxLTUtNXYtMzMwYTUuMDAyLDUuMDAyLDAsMCwxLDUtNWg0ODdhNS4wMDIsNS4wMDIsMCwwLDEsNSw1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMjIzLjEyMTgiIHk9Ijk3LjAzOTk4IiB3aWR0aD0iNDk5IiBoZWlnaHQ9IjIiIGZpbGw9IiMzZjNkNTYiLz48Y2lyY2xlIGN4PSIyNDAuMTIxOCIgY3k9Ijg0IiByPSI2IiBmaWxsPSIjM2YzZDU2Ii8+PGNpcmNsZSBjeD0iMjU3LjM3MTgiIGN5PSI4NCIgcj0iNiIgZmlsbD0iIzNmM2Q1NiIvPjxjaXJjbGUgY3g9IjI3NC42MjE4IiBjeT0iODQiIHI9IjYiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNNTYyLjA2MDksMzM1LjMyNzQzaC04OGE3LjAwNzc4LDcuMDA3NzgsMCwwLDAtNyw3djg4YTcuMDA3NzgsNy4wMDc3OCwwLDAsMCw3LDdoODhhNy4wMDc3OSw3LjAwNzc5LDAsMCwwLDctN3YtODhBNy4wMDc3OCw3LjAwNzc4LDAsMCwwLDU2Mi4wNjA5LDMzNS4zMjc0M1ptNSw5NWE1LjAwMiw1LjAwMiwwLDAsMS01LDVoLTg4YTUuMDAyLDUuMDAyLDAsMCwxLTUtNXYtODhhNS4wMDIsNS4wMDIsMCwwLDEsNS01aDg4YTUuMDAyLDUuMDAyLDAsMCwxLDUsNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik03MjAuMDYwOSwzMzUuODI3NDNoLTg4YTYuNTEyNTksNi41MTI1OSwwLDAsMC02LjUsNi41djg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUsNi41aDg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUtNi41di04OEE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNzIwLjA2MDksMzM1LjgyNzQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTg3OC4wNjA5LDMzNS44Mjc0M2gtODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLTYuNSw2LjV2ODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNSw2LjVoODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNS02LjV2LTg4QTYuNTEyNTksNi41MTI1OSwwLDAsMCw4NzguMDYwOSwzMzUuODI3NDNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNNTYyLjA2MDksNDY3LjgyNzQzaC04OGE2LjUxMjU5LDYuNTEyNTksMCwwLDAtNi41LDYuNXY4OGE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNi41LDYuNWg4OGE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNi41LTYuNXYtODhBNi41MTI1OSw2LjUxMjU5LDAsMCwwLDU2Mi4wNjA5LDQ2Ny44Mjc0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGQ9Ik03MjAuMDYwOSw0NjcuODI3NDNoLTg4YTYuNTEyNTksNi41MTI1OSwwLDAsMC02LjUsNi41djg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUsNi41aDg4YTYuNTEyNTksNi41MTI1OSwwLDAsMCw2LjUtNi41di04OEE2LjUxMjU5LDYuNTEyNTksMCwwLDAsNzIwLjA2MDksNDY3LjgyNzQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTg3OC4wNjA5LDQ2Ny44Mjc0M2gtODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLTYuNSw2LjV2ODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNSw2LjVoODhhNi41MTI1OSw2LjUxMjU5LDAsMCwwLDYuNS02LjV2LTg4QTYuNTEyNTksNi41MTI1OSwwLDAsMCw4NzguMDYwOSw0NjcuODI3NDNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNNTQwLjU2MDksNDgyLjMyNzQzaC04OGE2LjUwNzQ1LDYuNTA3NDUsMCwwLDEtNi41LTYuNXYtODhhNi41MDc0NCw2LjUwNzQ0LDAsMCwxLDYuNS02LjVoODhhNi41MDc0NSw2LjUwNzQ1LDAsMCwxLDYuNSw2LjV2ODhBNi41MDc0NSw2LjUwNzQ1LDAsMCwxLDU0MC41NjA5LDQ4Mi4zMjc0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iIzZjNjNmZiIvPjxwb2x5Z29uIHBvaW50cz0iMjAyLjc0NiA0OTIuMDg4IDIxNC40NjYgNDg4LjQ5MSAyMDYuMTcgNDQxLjU3MyAxODguODcyIDQ0Ni44ODEgMjAyLjc0NiA0OTIuMDg4IiBmaWxsPSIjYTA2MTZhIi8+PHBhdGggZD0iTTQwMy40ODIsNjgwLjg1Nzg5aDM4LjUzMDczYTAsMCwwLDAsMSwwLDB2MTQuODg2ODdhMCwwLDAsMCwxLDAsMEg0MTguMzY4ODdBMTQuODg2ODYsMTQuODg2ODYsMCwwLDEsNDAzLjQ4Miw2ODAuODU3OXYwQTAsMCwwLDAsMSw0MDMuNDgyLDY4MC44NTc4OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyNS44OTExMiAxMDI0Ljk1NjY5KSByb3RhdGUoMTYyLjkzOTEyKSIgZmlsbD0iIzJmMmU0MSIvPjxwb2x5Z29uIHBvaW50cz0iMTAyLjc0OCA0OTIuMzU4IDExNS4wMDggNDkyLjM1NyAxMjAuODQgNDQ1LjA2OSAxMDIuNzQ2IDQ0NS4wNyAxMDIuNzQ4IDQ5Mi4zNTgiIGZpbGw9IiNhMDYxNmEiLz48cGF0aCBkPSJNMzAzLjA2LDY4Ni4xODE2N2gzOC41MzA3M2EwLDAsMCwwLDEsMCwwdjE0Ljg4Njg3YTAsMCwwLDAsMSwwLDBIMzE3Ljk0Njg5QTE0Ljg4Njg2LDE0Ljg4Njg2LDAsMCwxLDMwMy4wNiw2ODYuMTgxNjh2MGEwLDAsMCwwLDEsMCwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDQxLjc0MzM1IDExODkuOTA4MDcpIHJvdGF0ZSgxNzkuOTk3MzgpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTMwNC44MDc0Myw1NTIuNjA3ODhhOS4xNjIyNCw5LjE2MjI0LDAsMCwxLC4zMTgtMTQuMDQ1NThsOS41MDUzNi0xMTkuNjk0NTksMTkuMzMwODYsNC44Mjk3TDMxOC40ODQwNyw1NDAuNDU1OTRhOS4yMTE4OCw5LjIxMTg4LDAsMCwxLTEzLjY3NjY0LDEyLjE1MTk0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjYTA2MTZhIi8+PGNpcmNsZSBjeD0iMTQwLjU3OTIxIiBjeT0iMTUwLjU1NTIzIiByPSIyNC41NjEwMyIgZmlsbD0iI2EwNjE2YSIvPjxwYXRoIGQ9Ik0zMjIuMTYxNjYsNDE1LjE4NjA1Yy01LjU0MTk0LTcuNjA4MTUtNS43MTI2OS0xOC4wODY4My4yNTcwOC0yNS4zNjQxMiwzLjg5NTg3LTQuNzQ5MTQsMTAuNDEyNDgtOC41NDk1MSwyMS4yOTI0OC04LjU0OTUxLDI5LDAsNDAsMjMsNDAsMjNzMTIsMjIsNSw0Mi03LDIyLTcsMjJsLTQ2LTRTMzQzLjQ3MTQyLDQ0NC40NDA3OSwzMjIuMTYxNjYsNDE1LjE4NjA1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjY2NjIi8+PHBhdGggZD0iTTMwNy45NzY2LDQzNS4wOTQ2OWw5LjkwOTY3LTMyLjQyMDlhMTUuNTAxODksMTUuNTAxODksMCwwLDEsMjEuOTMwMTgtOS4yNDUxMmgwYTE1LjUzLDE1LjUzLDAsMCwxLDcuMDg3ODksMjAuMDA5NzdMMzM0LjMwNiw0NDIuMTI5ODRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiNjY2MiLz48cGF0aCBkPSJNMzgwLjcxMTIyLDQ2My4yNzI0MmwzOSwyMDItMjEsNi01MS0xMzMtMjMsMTM2LTIyLDNzLTkuNjUwMzItMTc5Ljk0NSwzMy0yMTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNNDM2Ljg0MjQ2LDQ1My44MDQ4NWExMC41MjcxMiwxMC41MjcxMiwwLDAsMC0uOTYyNjUsMS4zNDkzbC00OS41MzUwNSwyLjQwMTY2LTkuNTM4MzQtMjkuMTE5NTEtMTYuNTYxODUsNy44NzE0MywxNS41ODc3Niw0My4zNzEzLDYxLjI2MjA2LTExLjk4MDc2YTEwLjQ5NTc5LDEwLjQ5NTc5LDAsMSwwLS4yNTE5My0xMy44OTM0MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iI2EwNjE2YSIvPjxwYXRoIGQ9Ik0zNTMuMzE0MjUsNDA3LjE3NjcyYTE1LjUwMDg1LDE1LjUwMDg1LDAsMCwxLDE2LjM2MjMtMTcuMjgyMjNoMGExNS41Mjk1NCwxNS41Mjk1NCwwLDAsMSwxNC41MzQ2NywxNS40NzE2OHYzMS4zMzVsLTI2LjkzNiw0LjE0NDUzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjY2NjIi8+PHBhdGggZD0iTTM0OC45MTk3NSwzNzIuNjY2NDVjLTMuNjg2MzctLjAxNjA1LTYuNTMwMTctMy44OTcyMS02LjM2NDk0LTcuNTc5OTFzMi42Mzg2Ny02LjkyMjg1LDUuNjE4NjYtOS4wOTI5Myw2LjQ3NDc5LTMuNDkxOTEsOS43OTgtNS4wODczOSw2LjYxNzQzLTMuNTg1NjEsOC42NjkyNC02LjY0ODIyYTE0LjcxNTU3LDE0LjcxNTU3LDAsMCwwLDEuMDIzMzItMTMuNTA0MzgsMjEuNjY4NjUsMjEuNjY4NjUsMCwwLDAtOS4zMzMyLTEwLjIyNDE4LDI4LjM3Nzc3LDI4LjM3Nzc3LDAsMCwwLTM3LjYwNzA3LDguMjUwMzhsLTQuMjA4MDgsMTEuNDU3ODdjLTQuMjg3ODYsNS4xNTYxMy00Ljk2OCwxMi44MTMzMy0yLjMzMjE3LDE4Ljk3OTY4czguMjQ4MTQsMTAuODA1NzksMTQuNTgxMTIsMTMuMDExNGEzNS43OTM5MiwzNS43OTM5MiwwLDAsMCwxOS44NDExLjU5NDg4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjkzOTEgLTE5Ny4zMjc0MykiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNMzI2LjQ3MzE3LDMzNC41MDYxM2MtMS44MDg5NC0yLjg5OTMxLTQuOTQ0MzktNC43NDMyNS04LjE4NTg3LTUuODI1NDNhMjUuNzI0MzEsMjUuNzI0MzEsMCwwLDAtMzMuODMyNDQsMjMuMDAyODNjLS4zNDM1Nyw2LjMxNDM3LDEuNjMzNjUsMTIuNDg5MTIsMi43OTU0NSwxOC43MDUxOHMxLjM5MjkxLDEzLjA4MTYxLTIuMDM0NDYsMTguMzk2Yy0yLjYxMDUzLDQuMDQ3OC02Ljk2Mzg3LDYuNTk2MzQtMTEuMjYwODMsOC43NzI1MS0zLjU4MTI4LDEuODEzNzEtNy40NTUwNywzLjUxNTc4LTExLjQ1MzE0LDMuMTU0NHMtOC4wMTY0Mi0zLjUyODEyLTcuOTEwMzMtNy41NDEwOGEzMi4wNTQ0LDMyLjA1NDQsMCwwLDAtMi42ODE2Myw5LjA4MDMzYy0uMjgxMjcsMy4xNTU5My40OTY1OSw2LjU2MTI1LDIuNzc2MDYsOC43NjE5MywzLjMxMzEsMy4xOTg1OSw4LjU2MjU1LDIuOTY0NiwxMy4xMTU3LDIuMjc0NDEsOS44NTY5NC0xLjQ5NDE3LDE5LjgzODE4LTQuMjk1NDMsMjcuNjI1NTItMTAuNTIwMzFzMTIuOTU0NjUtMTYuNDc0OTQsMTAuOTAzODgtMjYuMjMxMjdjLS44NTY2Ni00LjA3NTQ3LTIuODY5OTMtNy43OTYtNC40OTY3Ny0xMS42Mjk2OHMtMi44OTY5Mi04LjAyNy0yLjE0OTU5LTEyLjEyNGExNC43MzUxMywxNC43MzUxMywwLDAsMSw3LjQ5MjU1LTkuOTgxNzYsMTkuNjAxNDIsMTkuNjAxNDIsMCwwLDEsMTIuNTIyNjYtMS44OTljMi43OTkwNi40NTkzMiw2LjI5NDA2LDEuMTcyNTEsNy45NTQxOS0xLjEyNzQyYTQuNTA3NTIsNC41MDc1MiwwLDAsMC0uMDkzNjctNC44MDg1OCwxMy4yNDc1NCwxMy4yNDc1NCwwLDAsMC0zLjU5MjU5LTMuNTU5NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMi45MzkxIC0xOTcuMzI3NDMpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTUxMS40MjM4LDcwMi42NzI1N2gtMzA3LjI5NGExLjE5MDY5LDEuMTkwNjksMCwxLDEsMC0yLjM4MTM3aDMwNy4yOTRhMS4xOTA2OSwxLjE5MDY5LDAsMSwxLDAsMi4zODEzN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDIuOTM5MSAtMTk3LjMyNzQzKSIgZmlsbD0iIzNmM2Q1NiIvPjwvc3ZnPg=="}}]);