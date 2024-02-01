"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[99656,29772],{12597:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(11504),o=n(14971),l=n(85008),c=n(45864),r=n(14456),i=n(35492),s=n(69920),d=n(46192),m=n(82160),u=n(84357),b=n(53943),p=n(27124);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:c,cancelScroll:r}=(0,b.yI)();return(0,b.SM)(((e,n)=>{let{scrollY:a}=e;const c=n?.scrollY;c&&(l.current?l.current=!1:a>=c?(r(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.c)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>c(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.G)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.c)("clean-btn",c.W.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(13856),g=n(55592),v=n(11432),_=n(21824),C=n(68164),k=n(45072);function S(e){return a.createElement("svg",(0,k.c)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.G)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.G)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.c)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},a.createElement(S,{className:I.collapseSidebarButtonIcon}))}var x=n(43868),T=n(91100);const y=Symbol("EmptyContext"),B=a.createContext(y);function w(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(B.Provider,{value:l},t)}var A=n(58448),W=n(13376),L=n(76016),M=n(93664);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.G)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:l,level:r,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.y)(),f=function(e){const t=(0,M.c)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.OQ)(e):void 0),[e,t])}(t),g=(0,i.Md)(t,l),v=(0,W.Sc)(h,l),{collapsed:C,setCollapsed:S}=(0,A.a)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(B);if(e===y)throw new T.AH("DocSidebarItemsExpandedStateProvider");return e}(),x=function(e){void 0===e&&(e=!C),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,T.i0)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:g,collapsed:C,updateCollapsed:x}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),a.createElement("li",{className:(0,o.c)(c.W.docs.docSidebarItemCategory,c.W.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,o.c)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(L.c,(0,k.c)({className:(0,o.c)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?x(!1):(e.preventDefault(),x())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!C:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),x()}})),a.createElement(A.U,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(j,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:l,level:r+1})))}var F=n(18136),U=n(3232);const D={menuExternalLink:"menuExternalLink_NmtK"};function G(e){let{item:t,onItemClick:n,activePath:l,level:r,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i.Md)(t,l),E=(0,F.c)(m);return a.createElement("li",{className:(0,o.c)(c.W.docs.docSidebarItemLink,c.W.docs.docSidebarItemLinkLevel(r),"menu__list-item",b),key:u},a.createElement(L.c,(0,k.c)({className:(0,o.c)("menu__link",!E&&D.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(U.c,null)))}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function V(e){let{item:t,level:n,index:l}=e;const{value:r,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.c)(c.W.docs.docSidebarItemLink,c.W.docs.docSidebarItemLinkLevel(n),i&&[R.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:r}})}function z(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(P,(0,k.c)({item:t},n));case"html":return a.createElement(V,(0,k.c)({item:t},n));default:return a.createElement(G,(0,k.c)({item:t},n))}}function K(e){let{items:t,...n}=e;return a.createElement(w,null,t.map(((e,t)=>a.createElement(z,(0,k.c)({key:t,item:e,index:t},n)))))}const j=(0,a.memo)(K),O={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function Q(e){let{path:t,sidebar:n,className:l}=e;const r=function(){const{isActive:e}=(0,x.el)(),[t,n]=(0,a.useState)(e);return(0,b.SM)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.G)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.c)("menu thin-scrollbar",O.menu,r&&O.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.c)(c.W.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:n,activePath:t,level:1})))}const Y="sidebar_njMd",q="sidebarWithHideableNavbar_wUlq",X="sidebarHidden_VK0M",J="sidebarLogo_isFc";function Z(e){let{path:t,sidebar:n,onCollapse:l,isHidden:c}=e;const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:i}}}=(0,_.y)();return a.createElement("div",{className:(0,o.c)(Y,r&&q,c&&X)},r&&a.createElement(C.c,{tabIndex:-1,className:J}),a.createElement(Q,{path:t,sidebar:n}),i&&a.createElement(N,{onClick:l}))}const $=a.memo(Z);var ee=n(45168),te=n(18200);const ne=e=>{let{sidebar:t,path:n}=e;const l=(0,te.q)();return a.createElement("ul",{className:(0,o.c)(c.W.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ae(e){return a.createElement(ee.Mx,{component:ne,props:e})}const oe=a.memo(ae);function le(e){const t=(0,v.U)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement($,e),o&&a.createElement(oe,e))}const ce={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function re(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ce.expandButton,title:(0,u.G)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.G)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(S,{className:ce.expandButtonIcon}))}const ie={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function se(e){let{children:t}=e;const n=(0,d.m)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function de(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:r}=(0,g.IT)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),!i&&(0,f.I)()&&s(!0),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.c)(c.W.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&s(!0)}},a.createElement(se,null,a.createElement("div",{className:(0,o.c)(ie.sidebarViewport,i&&ie.sidebarViewportHidden)},a.createElement(le,{sidebar:t,path:r,onCollapse:d,isHidden:i}),i&&a.createElement(re,{toggleSidebar:d}))))}const me={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.m)();return a.createElement("main",{className:(0,o.c)(me.docMainContainer,(t||!l)&&me.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.c)("container padding-top--md padding-bottom--lg",me.docItemWrapper,t&&me.docItemWrapperEnhanced)},n))}const be={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX","themedComponent--light":"themedComponent--light_NU7w"};function pe(e){let{children:t}=e;const n=(0,d.m)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.c,{wrapperClassName:be.docsWrapper},a.createElement(E,null),a.createElement("div",{className:be.docPage},n&&a.createElement(de,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(ue,{hiddenSidebarContainer:o},t)))}var he=n(29772),Ee=n(48712);function fe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(Ee.c,{version:t.version,tag:(0,r.SE)(t.pluginId,t.version)}),a.createElement(l.U7,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ge(e){const{versionMetadata:t}=e,n=(0,i.sr)(e);if(!n)return a.createElement(he.default,null);const{docElement:r,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(fe,e),a.createElement(l.cr,{className:(0,o.c)(c.W.wrapper.docsPages,c.W.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.Q,{version:t},a.createElement(d.y,{name:m,items:u},a.createElement(pe,null,r)))))}},29772:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(11504),o=n(84357),l=n(85008),c=n(82160);function r(){return a.createElement(a.Fragment,null,a.createElement(l.U7,{title:(0,o.G)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(c.c,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.c,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.c,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.c,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},69920:(e,t,n)=>{n.d(t,{E:()=>r,Q:()=>c});var a=n(11504),o=n(91100);const l=a.createContext(null);function c(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function r(){const e=(0,a.useContext)(l);if(null===e)throw new o.AH("DocsVersionProvider");return e}}}]);