(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9514,4608],{63616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var a=n(67294),i=n(3905),o=n(52263),l=n(46291),r=n(35888),s=n(22122),c=n(19756),u=n(86010),d=n(86700),m=n(80944),b=n(31839),p=n(93783),f=n(77898),h=n(36742),v=n(13919),E=n(55537),_=function(e){return a.createElement("svg",(0,s.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=n(84478),g=n(24973),C="sidebar_15mo",N="sidebarWithHideableNavbar_267A",Z="sidebarHidden_2kNb",I="sidebarLogo_3h0W",S="menu_Bmed",y="menuLinkText_2aKo",A="menuWithAnnouncementBar_2WvA",T="collapseSidebarButton_1CGd",w="collapseSidebarButtonIcon_3E-R",R="sidebarMenuIcon_fgN0",x="sidebarMenuCloseIcon_1lpH",M="menuLinkExternal_1OhN";var L=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},B=(0,a.memo)((function(e){var t=e.items,n=(0,c.Z)(e,["items"]);return t.map((function(e,t){return a.createElement(P,(0,s.Z)({key:t,item:e},n))}))}));function P(e){switch(e.item.type){case"category":return a.createElement(H,e);case"link":default:return a.createElement(F,e)}}function H(e){var t,n,i,o=e.item,l=e.onItemClick,r=e.collapsible,d=e.activePath,m=(0,c.Z)(e,["item","onItemClick","collapsible","activePath"]),b=o.items,p=o.label,f=L(o,d),h=(n=f,i=(0,a.useRef)(n),(0,a.useEffect)((function(){i.current=n}),[n]),i.current),v=(0,a.useState)((function(){return!!r&&(!f&&o.collapsed)})),E=v[0],_=v[1],k=(0,a.useRef)(null),g=(0,a.useState)(void 0),C=g[0],N=g[1],Z=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){f&&!h&&E&&_(!1)}),[f,h,E]);var I=(0,a.useCallback)((function(e){e.preventDefault(),C||Z(),setTimeout((function(){return _((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},a.createElement("a",(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":r,"menu__link--active":r&&f},t[y]=!r,t)),onClick:r?I:void 0,href:r?"#!":void 0},m),p),a.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){E||Z(!1)}},a.createElement(B,{items:b,tabIndex:E?"-1":"0",onItemClick:l,collapsible:r,activePath:d})))}function F(e){var t,n=e.item,i=e.onItemClick,o=e.activePath,l=(e.collapsible,(0,c.Z)(e,["item","onItemClick","activePath","collapsible"])),r=n.href,d=n.label,m=L(n,o);return a.createElement("li",{className:"menu__list-item",key:d},a.createElement(h.Z,(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[M]=!(0,v.Z)(r),t)),to:r},(0,v.Z)(r)&&{isNavLink:!0,exact:!0,onClick:i},l),d))}function W(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,g.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,g.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",T),onClick:t},a.createElement(_,{className:w}))}function D(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,g.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,g.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(R,x)},"\xd7"):a.createElement(k.Z,{className:R,height:24,width:24}))}var O=function(e){var t,n,i=e.path,o=e.sidebar,l=e.sidebarCollapsible,r=void 0===l||l,s=e.onCollapse,c=e.isHidden,h=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],i=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||i(0===n)})),n}(),v=(0,d.LU)(),_=v.navbar.hideOnScroll,k=v.hideableSidebar,g=(0,m.Z)().isAnnouncementBarClosed,y=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,a.useEffect)((function(){i===p.D.desktop&&n(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),T=y.showResponsiveSidebar,w=y.closeResponsiveSidebar,R=y.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(C,(t={},t[N]=_,t[Z]=c,t))},_&&a.createElement(E.Z,{tabIndex:-1,className:I}),a.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":T},n[A]=!g&&h,n))},a.createElement(D,{responsiveSidebarOpened:T,onClick:R}),a.createElement("ul",{className:"menu__list"},a.createElement(B,{items:o,onItemClick:w,collapsible:r,activePath:i}))),k&&a.createElement(W,{onClick:s}))},K=n(3541),z=n(24608),J=n(5977),U="docPage_31aa",Y="docMainContainer_3ufF",G="docMainContainerEnhanced_3NYZ",Q="docSidebarContainer_3Kbt",X="docSidebarContainerHidden_3pA8",j="collapsedDocSidebar_2JMH",q="expandSidebarButtonIcon_1naQ",V="docItemWrapperEnhanced_2vyJ",$="docItemWrapper_3FMP";function ee(e){var t,n,l,s,c,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,f=(0,o.default)(),h=f.siteConfig,v=f.isClient,E=b.pluginId,k=b.permalinkToSidebar,C=b.docsSidebars,N=b.version,Z=k[m.path],I=C[Z],S=(0,a.useState)(!1),y=S[0],A=S[1],T=(0,a.useState)(!1),w=T[0],R=T[1],x=(0,a.useCallback)((function(){w&&R(!1),A(!y)}),[w]);return a.createElement(r.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:N,tag:(0,d.os)(E,N)}},a.createElement("div",{className:U},I&&a.createElement("div",{className:(0,u.Z)(Q,(t={},t[X]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q)&&y&&R(!0)},role:"complementary"},a.createElement(O,{key:Z,sidebar:I,path:m.path,sidebarCollapsible:null==(n=null==(l=h.themeConfig)?void 0:l.sidebarCollapsible)||n,onCollapse:x,isHidden:w}),w&&a.createElement("div",{className:j,title:(0,g.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,g.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:x,onClick:x},a.createElement(_,{className:q}))),a.createElement("main",{className:(0,u.Z)(Y,(s={},s[G]=y||!I,s))},a.createElement("div",{className:(0,u.Z)("container padding-vert--lg",$,(c={},c[V]=y,c))},a.createElement(i.Zo,{components:K.Z},p)))))}var te=function(e){var t=e.route.routes,n=e.versionMetadata,i=e.location,o=t.find((function(e){return(0,J.LX)(i.pathname,e)}));return o?a.createElement(ee,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t)):a.createElement(z.default,e)}},24608:function(e,t,n){"use strict";n.r(t);var a=n(67294),i=n(35888),o=n(24973);t.default=function(){return a.createElement(i.Z,{title:"Page Not Found"},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);