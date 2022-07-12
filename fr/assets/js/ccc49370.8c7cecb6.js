"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6103],{4118:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(80102),n=a(67294),l=a(86010),m=a(37422),o=a(39960),i=a(95999),c="sidebar_TMXw",s="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",g="sidebarItem_spIe",p="sidebarItemLink_eqrF",d="sidebarItemLinkActive_XZSJ";function b(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:d},e.title))})))))}var v=a(13102);function E(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function h(e){return n.createElement(v.Zo,{component:E,props:e})}var f=a(87524);function _(e){var t=e.sidebar,a=(0,f.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(h,{sidebar:t}):n.createElement(b,{sidebar:t}):null}var N=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,o=e.children,i=(0,r.Z)(e,N),c=t&&t.items.length>0;return n.createElement(m.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(_,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},39360:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var r=a(67294),n=a(4118),l=a(223),m=a(83117),o=a(95999),i=a(71750);function c(e){var t=e.nextItem,a=e.prevItem;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&r.createElement(i.Z,(0,m.Z)({},a,{subLabel:r.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&r.createElement(i.Z,(0,m.Z)({},t,{subLabel:r.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var s=a(10833),u=a(35281),g=a(51575),p=a(86010);function d(e){var t,a=e.content,n=a.assets,l=a.metadata,m=l.title,o=l.description,i=l.date,c=l.tags,u=l.authors,g=l.frontMatter,p=g.keywords,d=null!=(t=n.image)?t:g.image;return r.createElement(s.d,{title:m,description:o,keywords:p,image:d},r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"article:published_time",content:i}),u.some((function(e){return e.url}))&&r.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&r.createElement("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")}))}function b(e){var t=e.content,a=e.sidebar,m=t.assets,o=t.metadata,i=o.nextItem,s=o.prevItem,u=o.frontMatter,p=u.hide_table_of_contents,d=u.toc_min_heading_level,b=u.toc_max_heading_level;return r.createElement(n.Z,{sidebar:a,toc:!p&&t.toc&&t.toc.length>0?r.createElement(g.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:b}):void 0},r.createElement(l.Z,{frontMatter:u,assets:m,metadata:o,isBlogPostPage:!0},r.createElement(t,null)),(i||s)&&r.createElement(c,{nextItem:i,prevItem:s}))}function v(e){return r.createElement(s.FG,{className:(0,p.Z)(u.k.wrapper.blogPages,u.k.page.blogPostPage)},r.createElement(d,e),r.createElement(b,e))}},223:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(67294),n=a(86010),l=a(3905),m=a(35742),o=a(39960),i=a(84966),c=a(44996),s="blogPostTitle_uMeh",u="blogPostDate_Ocfp",g="blogPostAuthorSeparator_yskn",p="blogPostAvatar_sUVN",d="blogPostTag_gpUC",b="blogPostPreview_JcaC",v=["January","February","March","April","May","June","July","August","September","October","November","December"];var E=function(e){var t,a,E,h,f,_=e.children,N=e.frontMatter,Z=e.metadata,k=e.truncated,y=e.isBlogPostPage,I=void 0!==y&&y,w=Z.date,P=Z.permalink,T=Z.tags,x=Z.readingTime,L=N.author,A=N.author_image_url,M=N.author_url,B=N.title,C=N.image,F=N.keywords,J=(0,c.Z)(C,{absolute:!0});return r.createElement(r.Fragment,null,r.createElement(m.Z,null,F&&F.length&&r.createElement("meta",{name:"keywords",content:F.join(",")}),C&&r.createElement("meta",{property:"og:image",content:J}),C&&r.createElement("meta",{property:"twitter:image",content:J}),C&&r.createElement("meta",{name:"twitter:image:alt",content:"Image for "+B})),r.createElement("article",{className:(0,n.Z)(!I&&"margin-bottom--lg",!I&&b)},(t=I?"h1":"h2",a=w.substring(0,10).split("-"),E=a[0],h=v[parseInt(a[1],10)-1],f=parseInt(a[2],10),r.createElement("header",null,r.createElement(t,{className:(0,n.Z)("margin-bottom--sm",s)},I?B:r.createElement(o.Z,{to:P},B)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:w,className:u},h," ",f,", ",E," ",x&&r.createElement(r.Fragment,null," \xb7 ",Math.ceil(x)," min read"))),r.createElement("div",{className:"avatar margin-vert--md"},r.createElement("div",{style:{position:"relative",height:"45px",width:53+20*([L].length-1)+"px"}},[{name:L,avatar:A}].map((function(e,t){var a=e.name,n=e.avatar;return r.createElement("img",{key:a,className:p,style:{zIndex:1e3-t,marginLeft:20*t+"px"},src:n,alt:a})}))),r.createElement("div",{className:"avatar__intro"},r.createElement("h4",{className:"avatar__name"},[{name:L,url:M}].map((function(e,t){var a=e.name,l=e.url;return r.createElement(r.Fragment,{key:a},r.createElement("a",{href:l,target:"_blank",rel:"noreferrer noopener"},a),0!=t&&r.createElement("span",{className:(0,n.Z)(g)},",\xa0"))}))))))),r.createElement("section",{className:"markdown"},r.createElement(l.Zo,{components:i.Z},_)),(T.length>0||k)&&r.createElement("footer",{className:"row margin-vert--md"},T.length>0&&r.createElement("div",{className:"col",style:{marginTop:-10}},T.map((function(e){var t=e.label,a=e.permalink;return r.createElement(o.Z,{key:a,className:(0,n.Z)(d),to:a},t)}))),k&&r.createElement("div",{className:"col text--right",style:{marginTop:"auto"}},r.createElement(o.Z,{to:Z.permalink,"aria-label":"Read more about "+B},r.createElement("strong",null,"Read More"))))))}}}]);