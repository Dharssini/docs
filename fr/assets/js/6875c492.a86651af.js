"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8610],{4118:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(80102),n=a(67294),l=a(86010),s=a(37422),o=a(39960),i=a(95999),m="sidebar_TMXw",c="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",g="sidebarItem_spIe",p="sidebarItemLink_eqrF",d="sidebarItemLinkActive_XZSJ";function h(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:d},e.title))})))))}var b=a(13102);function E(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function v(e){return n.createElement(b.Zo,{component:E,props:e})}var f=a(87524);function N(e){var t=e.sidebar,a=(0,f.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(v,{sidebar:t}):n.createElement(h,{sidebar:t}):null}var k=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,o=e.children,i=(0,r.Z)(e,k),m=t&&t.items.length>0;return n.createElement(s.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(N,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},36299:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(67294),n=a(95999),l=a(71750);function s(e){var t=e.metadata,a=t.previousPage,s=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&r.createElement(l.Z,{permalink:s,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(67294),n=a(39960),l=a(4118),s=a(223),o=a(95999),i=a(88824),m=a(10833),c=a(35281),u=a(36299),g=a(14739),p=a(86010);function d(e){var t,a=e.tag,d=e.items,h=e.sidebar,b=e.listMetadata,E=(t=(0,i.c)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),v=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:E(a.count),tagName:a.label});return r.createElement(m.FG,{className:(0,p.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},r.createElement(m.d,{title:v}),r.createElement(g.Z,{tag:"blog_tags_posts"}),r.createElement(l.Z,{sidebar:h},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,v),r.createElement(n.Z,{href:a.allTagsPath},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),d.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})),r.createElement(u.Z,{metadata:b})))}},88824:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(67294),n=a(52263),l=["zero","one","two","few","many","other"];function s(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function i(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:s(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function m(){var e=i();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+r.length+": "+e);var n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}},223:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(67294),n=a(86010),l=a(3905),s=a(35742),o=a(39960),i=a(82390),m=a(44996),c="blogPostTitle_uMeh",u="blogPostDate_Ocfp",g="blogPostAuthorSeparator_yskn",p="blogPostAvatar_sUVN",d="blogPostTag_gpUC",h="blogPostPreview_JcaC",b=["January","February","March","April","May","June","July","August","September","October","November","December"];var E=function(e){var t,a,E,v,f,N=e.children,k=e.frontMatter,Z=e.metadata,_=e.truncated,w=e.isBlogPostPage,y=void 0!==w&&w,P=Z.date,T=Z.permalink,I=Z.tags,F=Z.readingTime,M=k.author,x=k.author_image_url,A=k.author_url,L=k.title,C=k.image,O=k.keywords,R=(0,m.Z)(C,{absolute:!0});return r.createElement(r.Fragment,null,r.createElement(s.Z,null,O&&O.length&&r.createElement("meta",{name:"keywords",content:O.join(",")}),C&&r.createElement("meta",{property:"og:image",content:R}),C&&r.createElement("meta",{property:"twitter:image",content:R}),C&&r.createElement("meta",{name:"twitter:image:alt",content:"Image for "+L})),r.createElement("article",{className:(0,n.Z)(!y&&"margin-bottom--lg",!y&&h)},(t=y?"h1":"h2",a=P.substring(0,10).split("-"),E=a[0],v=b[parseInt(a[1],10)-1],f=parseInt(a[2],10),r.createElement("header",null,r.createElement(t,{className:(0,n.Z)("margin-bottom--sm",c)},y?L:r.createElement(o.Z,{to:T},L)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:P,className:u},v," ",f,", ",E," ",F&&r.createElement(r.Fragment,null," \xb7 ",Math.ceil(F)," min read"))),r.createElement("div",{className:"avatar margin-vert--md"},r.createElement("div",{style:{position:"relative",height:"45px",width:53+20*([M].length-1)+"px"}},[{name:M,avatar:x}].map((function(e,t){var a=e.name,n=e.avatar;return r.createElement("img",{key:a,className:p,style:{zIndex:1e3-t,marginLeft:20*t+"px"},src:n,alt:a})}))),r.createElement("div",{className:"avatar__intro"},r.createElement("h4",{className:"avatar__name"},[{name:M,url:A}].map((function(e,t){var a=e.name,l=e.url;return r.createElement(r.Fragment,{key:a},r.createElement("a",{href:l,target:"_blank",rel:"noreferrer noopener"},a),0!=t&&r.createElement("span",{className:(0,n.Z)(g)},",\xa0"))}))))))),r.createElement("section",{className:"markdown"},r.createElement(l.Zo,{components:i.Z},N)),(I.length>0||_)&&r.createElement("footer",{className:"row margin-vert--md"},I.length>0&&r.createElement("div",{className:"col",style:{marginTop:-10}},I.map((function(e){var t=e.label,a=e.permalink;return r.createElement(o.Z,{key:a,className:(0,n.Z)(d),to:a},t)}))),_&&r.createElement("div",{className:"col text--right",style:{marginTop:"auto"}},r.createElement(o.Z,{to:Z.permalink,"aria-label":"Read more about "+L},r.createElement("strong",null,"Read More"))))))}}}]);