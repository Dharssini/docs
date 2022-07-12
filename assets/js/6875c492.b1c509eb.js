"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8610],{4118:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(80102),r=a(67294),l=a(86010),i=a(37422),s=a(39960),o=a(95999),c="sidebar_TMXw",m="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",p="sidebarItemLink_eqrF",g="sidebarItemLinkActive_XZSJ";function f(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:g},e.title))})))))}var h=a(13102);function v(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function E(e){return r.createElement(h.Zo,{component:v,props:e})}var b=a(87524);function Z(e){var t=e.sidebar,a=(0,b.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(E,{sidebar:t}):r.createElement(f,{sidebar:t}):null}var N=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,n.Z)(e,N),c=t&&t.items.length>0;return r.createElement(i.Z,o,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(Z,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},36299:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(95999),l=a(71750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&n.createElement(l.Z,{permalink:i,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(67294),r=a(39960),l=a(4118),i=a(223),s=a(95999),o=a(88824),c=a(10833),m=a(35281),u=a(36299),d=a(14739),p=a(86010);function g(e){var t,a=e.tag,g=e.items,f=e.sidebar,h=e.listMetadata,v=(t=(0,o.c)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:v(a.count),tagName:a.label});return n.createElement(c.FG,{className:(0,p.Z)(m.k.wrapper.blogPages,m.k.page.blogTagPostListPage)},n.createElement(c.d,{title:E}),n.createElement(d.Z,{tag:"blog_tags_posts"}),n.createElement(l.Z,{sidebar:f},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,E),n.createElement(r.Z,{href:a.allTagsPath},n.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),g.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},n.createElement(t,null))})),n.createElement(u.Z,{metadata:h})))}},39649:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(83117),r=a(80102),l=a(67294),i=a(86010),s=a(95999),o=a(86668),c="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",u=["as","id"];function d(e){var t=e.as,a=e.id,d=(0,r.Z)(e,u),p=(0,o.L)().navbar.hideOnScroll;return"h1"!==t&&a?l.createElement(t,(0,n.Z)({},d,{className:(0,i.Z)("anchor",p?m:c),id:a}),d.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,n.Z)({},d,{id:void 0}))}},84966:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(83117),r=a(67294),l=a(80102),i=a(35742),s=["mdxType","originalType"];var o=a(25710);var c=a(39960);var m=a(86010),u=a(72389),d=a(86043),p="details_lb9f",g="isBrowser_bmU9",f="collapsibleContent_i85q",h=["summary","children"];function v(e){return!!e&&("SUMMARY"===e.tagName||v(e.parentElement))}function E(e,t){return!!e&&(e===t||E(e.parentElement,t))}function b(e){var t=e.summary,a=e.children,n=(0,l.Z)(e,h),i=(0,u.Z)(),s=(0,r.useRef)(null),o=(0,d.u)({initialState:!n.open}),c=o.collapsed,b=o.setCollapsed,Z=(0,r.useState)(n.open),N=Z[0],_=Z[1];return r.createElement("details",Object.assign({},n,{ref:s,open:N,"data-collapsed":c,className:(0,m.Z)(p,i&&g,n.className),onMouseDown:function(e){v(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;v(t)&&E(t,s.current)&&(e.preventDefault(),c?(b(!1),_(!0)):b(!0))}}),t||r.createElement("summary",null,"Details"),r.createElement(d.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){b(e),_(!e)}},r.createElement("div",{className:f},a)))}var Z="details_BAp3";function N(e){var t=Object.assign({},e);return r.createElement(b,(0,n.Z)({},t,{className:(0,m.Z)("alert alert--info",Z,t.className)}))}var _=a(39649);function k(e){return r.createElement(_.Z,e)}var y="img_E7b_";var T={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var n=e.props,i=(n.mdxType,n.originalType,(0,l.Z)(n,s));return r.createElement(e.props.originalType,i)}return e}(e)}));return r.createElement(i.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(o.Z,e)},a:function(e){return r.createElement(c.Z,e)},pre:function(e){var t;return r.createElement(o.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((function(e){return e!==a})));return r.createElement(N,(0,n.Z)({},e,{summary:a}),l)},ul:function(e){return r.createElement("ul",(0,n.Z)({},e,{className:(t=e.className,(0,m.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"clean-list"))}));var t},img:function(e){return r.createElement("img",(0,n.Z)({loading:"lazy"},e,{className:(t=e.className,(0,m.Z)(t,y))}));var t},h1:function(e){return r.createElement(k,(0,n.Z)({as:"h1"},e))},h2:function(e){return r.createElement(k,(0,n.Z)({as:"h2"},e))},h3:function(e){return r.createElement(k,(0,n.Z)({as:"h3"},e))},h4:function(e){return r.createElement(k,(0,n.Z)({as:"h4"},e))},h5:function(e){return r.createElement(k,(0,n.Z)({as:"h5"},e))},h6:function(e){return r.createElement(k,(0,n.Z)({as:"h6"},e))}}},71750:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(86010),l=a(39960);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,s=e.isNext;return n.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},88824:function(e,t,a){a.d(t,{c:function(){return c}});var n=a(67294),r=a(52263),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var s={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,r.Z)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),s}var t,a}),[e])}function c(){var e=o();return{selectMessage:function(t,a){return function(e,t,a){var n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+n.length+": "+e);var r=a.select(t),l=a.pluralForms.indexOf(r);return n[Math.min(l,n.length-1)]}(a,t,e)}}}},223:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),r=a(86010),l=a(3905),i=a(35742),s=a(39960),o=a(84966),c=a(44996),m="blogPostTitle_uMeh",u="blogPostDate_Ocfp",d="blogPostAuthorSeparator_yskn",p="blogPostAvatar_sUVN",g="blogPostTag_gpUC",f="blogPostPreview_JcaC",h=["January","February","March","April","May","June","July","August","September","October","November","December"];var v=function(e){var t,a,v,E,b,Z=e.children,N=e.frontMatter,_=e.metadata,k=e.truncated,y=e.isBlogPostPage,T=void 0!==y&&y,w=_.date,P=_.permalink,x=_.tags,I=_.readingTime,M=N.author,A=N.author_image_url,F=N.author_url,C=N.title,L=N.image,S=N.keywords,O=(0,c.Z)(L,{absolute:!0});return n.createElement(n.Fragment,null,n.createElement(i.Z,null,S&&S.length&&n.createElement("meta",{name:"keywords",content:S.join(",")}),L&&n.createElement("meta",{property:"og:image",content:O}),L&&n.createElement("meta",{property:"twitter:image",content:O}),L&&n.createElement("meta",{name:"twitter:image:alt",content:"Image for "+C})),n.createElement("article",{className:(0,r.Z)(!T&&"margin-bottom--lg",!T&&f)},(t=T?"h1":"h2",a=w.substring(0,10).split("-"),v=a[0],E=h[parseInt(a[1],10)-1],b=parseInt(a[2],10),n.createElement("header",null,n.createElement(t,{className:(0,r.Z)("margin-bottom--sm",m)},T?C:n.createElement(s.Z,{to:P},C)),n.createElement("div",{className:"margin-vert--md"},n.createElement("time",{dateTime:w,className:u},E," ",b,", ",v," ",I&&n.createElement(n.Fragment,null," \xb7 ",Math.ceil(I)," min read"))),n.createElement("div",{className:"avatar margin-vert--md"},n.createElement("div",{style:{position:"relative",height:"45px",width:53+20*([M].length-1)+"px"}},[{name:M,avatar:A}].map((function(e,t){var a=e.name,r=e.avatar;return n.createElement("img",{key:a,className:p,style:{zIndex:1e3-t,marginLeft:20*t+"px"},src:r,alt:a})}))),n.createElement("div",{className:"avatar__intro"},n.createElement("h4",{className:"avatar__name"},[{name:M,url:F}].map((function(e,t){var a=e.name,l=e.url;return n.createElement(n.Fragment,{key:a},n.createElement("a",{href:l,target:"_blank",rel:"noreferrer noopener"},a),0!=t&&n.createElement("span",{className:(0,r.Z)(d)},",\xa0"))}))))))),n.createElement("section",{className:"markdown"},n.createElement(l.Zo,{components:o.Z},Z)),(x.length>0||k)&&n.createElement("footer",{className:"row margin-vert--md"},x.length>0&&n.createElement("div",{className:"col",style:{marginTop:-10}},x.map((function(e){var t=e.label,a=e.permalink;return n.createElement(s.Z,{key:a,className:(0,r.Z)(g),to:a},t)}))),k&&n.createElement("div",{className:"col text--right",style:{marginTop:"auto"}},n.createElement(s.Z,{to:_.permalink,"aria-label":"Read more about "+C},n.createElement("strong",null,"Read More"))))))}}}]);