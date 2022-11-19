"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[45190],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},71759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={layout:"post",title:"Building an Integrated Data Warehouse to Track and Share Student Performance",author:"Lei Lei Tun",author_url:"https://github.com/hninleileitun",author_image_url:"https://avatars.githubusercontent.com/hninleileitun",tags:["case study","African School of Excellence","education","PostgreSQL","Redash","education","data warehouse","automated reporting"],image:"/img/ase.jpg",featured:!1},i=void 0,s={permalink:"/blog/2020/07/01/african-school-of-excellence-case-study",editUrl:"https://github.com/openfn/docs/edit/main/blog/2020-07-01-african-school-of-excellence-case-study.md",source:"@site/blog/2020-07-01-african-school-of-excellence-case-study.md",title:"Building an Integrated Data Warehouse to Track and Share Student Performance",description:"ASE had a diverse data portfolio spread across so many sources that couldn't",date:"2020-07-01T00:00:00.000Z",formattedDate:"July 1, 2020",tags:[{label:"case study",permalink:"/blog/tags/case-study"},{label:"African School of Excellence",permalink:"/blog/tags/african-school-of-excellence"},{label:"education",permalink:"/blog/tags/education"},{label:"PostgreSQL",permalink:"/blog/tags/postgre-sql"},{label:"Redash",permalink:"/blog/tags/redash"},{label:"data warehouse",permalink:"/blog/tags/data-warehouse"},{label:"automated reporting",permalink:"/blog/tags/automated-reporting"}],readingTime:1.605,hasTruncateMarker:!0,authors:[{name:"Lei Lei Tun",url:"https://github.com/hninleileitun",imageURL:"https://avatars.githubusercontent.com/hninleileitun"}],frontMatter:{layout:"post",title:"Building an Integrated Data Warehouse to Track and Share Student Performance",author:"Lei Lei Tun",author_url:"https://github.com/hninleileitun",author_image_url:"https://avatars.githubusercontent.com/hninleileitun",tags:["case study","African School of Excellence","education","PostgreSQL","Redash","education","data warehouse","automated reporting"],image:"/img/ase.jpg",featured:!1},prevItem:{title:"Enhanced Survey Monitoring and Quicker Analysis for Program Improvement in India",permalink:"/blog/2020/07/01/KGVK-case-study"},nextItem:{title:"Helping an Airport Soar: Synchronizing Asset Data Between the Tarmac and HQ",permalink:"/blog/2020/07/01/airport-case-study"}},l={authorsImageUrls:[void 0]},c=[{value:"African School of Excellence is working to deliver quality, affordable education in South Africa.",id:"african-school-of-excellence-is-working-to-deliver-quality-affordable-education-in-south-africa",level:3},{value:"ASE had a diverse, but disconnected data portfolio.",id:"ase-had-a-diverse-but-disconnected-data-portfolio",level:3},{value:"To connect the data sources and enable easy, quick analysis, Open Function Group\u2026",id:"to-connect-the-data-sources-and-enable-easy-quick-analysis-open-function-group",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ASE had a diverse data portfolio spread across so many sources that couldn't\neasily be analyzed. Open Function delivered a centralized, single-view solution\nfor monitoring students and sharing data across schools."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ase",src:a(40454).Z,width:"1444",height:"960"})),(0,o.kt)("h3",{id:"african-school-of-excellence-is-working-to-deliver-quality-affordable-education-in-south-africa"},"African School of Excellence is working to deliver quality, affordable education in South Africa."),(0,o.kt)("p",null,"In South Africa, school funding and tuition costs often defer students from\nreaching their full potential.\n",(0,o.kt)("a",{parentName:"p",href:"http://www.ase.org.za/"},"African School of Excellence (ASE)")," helps students\naccess affordable, world-class education by providing affordable world-class\neducation to everyone through the creation of a self-sustaining network of elite\nindependent secondary schools at a fraction of the cost."),(0,o.kt)("p",null,"ASE focuses their mission on three essential factors: world-class quality,\naffordability, and scalability; They believe their students will succeed in\nSouth Africa and internationally when provided attainable education. ASE seeks\nto grow an even bigger network of schools throughout South Africa to provide the\ntens of thousands of disadvantaged students with elite education."),(0,o.kt)("h3",{id:"ase-had-a-diverse-but-disconnected-data-portfolio"},"ASE had a diverse, but disconnected data portfolio."),(0,o.kt)("p",null,"ASE used Google, Khan Academy, EdAdmin, and a custom built survey app to track\nstudent progress. The data set was rich, but diverse and spread across so many\nsources, so it couldn't easily be analyzed."),(0,o.kt)("h3",{id:"to-connect-the-data-sources-and-enable-easy-quick-analysis-open-function-group"},"To connect the data sources and enable easy, quick analysis, Open Function Group\u2026"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Built a data warehouse on PostgreSQL database to centrally capture data across\nthe organization,"),(0,o.kt)("li",{parentName:"ul"},"Implemented OpenFn to integrate the existing siloed data sources,"),(0,o.kt)("li",{parentName:"ul"},"Configured an analytics layer using Readash for real-time program monitoring,\nand"),(0,o.kt)("li",{parentName:"ul"},"Enabled data sharing across teachers, partners, and schools.")),(0,o.kt)("p",null,"By building an integrated data warehouse , OFG delivered a centralized,\nsingle-view solution for monitoring students and sharing data across schools.\nWith OpenFn, ASE has access to student data like never before. To learn more\nabout OFG data warehouse solutions, see\n",(0,o.kt)("a",{parentName:"p",href:"https://www.openfn.org/solutions"},"Solutions")," or\n",(0,o.kt)("a",{parentName:"p",href:"mailto://admin@openfn.org"},"contact our team"),"."),(0,o.kt)("p",null,"The photo above was originally posted on the Wikimedia\n",(0,o.kt)("a",{parentName:"p",href:"https://commons.wikimedia.org/wiki/File:WikiAfrica_Schools_training_African_School_for_Excellence_(23).jpg"},"site"),'\nunder "WikiAfrica Schools training Africa School of Excellence."'))}d.isMDXComponent=!0},40454:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ase-29bd6b269909d78ce1ccb28e91406721.jpg"}}]);