(window.webpackJsonp=window.webpackJsonp||[]).push([[17,8],{157:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));t(281);var n=t(282),r=t.n(n),l=(t(252),t(283)),c=t(0),s=t.n(c),o=t(221),i=t(340),m=t(284),u=t(288),d=t(210),h=t.n(d),b=t(158),v=t.n(b);function E(){var e=Object(c.useState)([]),a=e[0],t=e[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/PGMDev/PGM/releases");case 2:return a=e.sent,e.t0=t,e.next=6,a.json();case 6:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),s.a.createElement(o.a,{title:"Downloads"},s.a.createElement("div",{className:h()("container",v.a.downloads_container)},s.a.createElement("h1",{className:v.a.downloads_title},"Downloads"),0===a.length?s.a.createElement("div",{className:h()("hero",v.a.spinner_hero)},s.a.createElement("div",{className:v.a.lds_ripple},s.a.createElement("div",null),s.a.createElement("div",null))):s.a.createElement("div",{className:h()("hero",v.a.downloads_hero,v.a.appearing)},s.a.createElement("div",{className:"container row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row"},s.a.createElement("img",{src:"/img/shield.png",className:v.a.pgm_logo}),s.a.createElement("div",{className:v.a.pgm},s.a.createElement("h1",null,"PGM ",a[0].name),s.a.createElement("p",null,s.a.createElement("label",null," ",Object(i.a)(new Date(a[0].published_at),"LLLL do, yyyy")," ")),s.a.createElement("a",{href:a[0].html_url},"Changelog ",s.a.createElement(m.a,{icon:u.a})))),s.a.createElement("div",{className:v.a.description},s.a.createElement("p",null,"Minecraft multiplayer game-server suite for managing PvP matches across various gamemodes"))),s.a.createElement("div",{className:h()("col col--4",v.a.col_border)},s.a.createElement("h2",null,"Download PGM"),s.a.createElement("p",null,"PvP Game Manager (PGM) is a plugin that manages running and instancing multiple PvP maps across various gamemodes for Minecraft multiplayer."),s.a.createElement("a",{className:h()("button button--primary",v.a.download_button),href:a[0].assets[0].browser_download_url},"Download ",s.a.createElement(m.a,{icon:u.b}))),s.a.createElement("div",{className:h()("col col--4",v.a.col_margin_left)},s.a.createElement("h2",null,"Download SportPaper"),s.a.createElement("p",null,"SportPaper is a Minecraft server jar based on Paper 1.8 tuned for maximum performance and high intensity PvP. It is mandatory and should run alongside PGM."),s.a.createElement("a",{className:h()("button button--primary",v.a.download_button),href:a[0].assets[1].browser_download_url},"Download ",s.a.createElement(m.a,{icon:u.b}))))),s.a.createElement("div",{className:v.a.others},s.a.createElement("h2",null,"Other Resources"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col--6"},s.a.createElement("div",{className:h()("hero",v.a.others_hero)},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col--6"},s.a.createElement("div",{className:"row"},s.a.createElement("h1",{className:v.a.others_icon},s.a.createElement(m.a,{icon:u.d})),s.a.createElement("div",{className:v.a.others_header},s.a.createElement("h2",null,"ResourcePile"),s.a.createElement("a",{href:"https://github.com/MCResourcePile"},s.a.createElement("label",null,"GitHub"))))),s.a.createElement("div",{className:"col col--6"},s.a.createElement("a",{className:h()("button button--primary",v.a.others_button),href:"https://mcresourcepile.github.io"},"Visit ",s.a.createElement(m.a,{icon:u.d})))),s.a.createElement("div",{className:v.a.others_description},s.a.createElement("p",null,"ResourcePile is a community project which aims to provide various collections of resources, such as maps or statistics, for users with backgrounds in Overcast and similar networks."))))),s.a.createElement("div",{className:h()("col col--6",v.a.others_column)},s.a.createElement("div",{className:h()("hero",v.a.others_hero)},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col--6"},s.a.createElement("div",{className:"row"},s.a.createElement("h1",{className:v.a.others_icon},s.a.createElement(m.a,{icon:u.c})),s.a.createElement("div",{className:v.a.others_header},s.a.createElement("h2",null,"PGM Tracker"),s.a.createElement("a",{href:"https://pgm.fyi"},s.a.createElement("label",null,"Website"))))),s.a.createElement("div",{className:"col col--6"},s.a.createElement("a",{className:h()("button button--primary",v.a.others_button),href:"https://pgm.fyi"},"Visit ",s.a.createElement(m.a,{icon:u.c})))),s.a.createElement("div",{className:v.a.others_description},s.a.createElement("p",null,"PGM Tracker is a community tool made by"," ",s.a.createElement("a",{href:"https://github.com/applenick"},"applenick")," that tracks public PGM servers. Take a look at it, play a variety of Minecraft PvP maps and get involved with development!")))))))))}},227:function(e,a,t){"use strict";var n=t(1),r=t(9),l=t(0),c=t.n(l),s=t(210),o=t.n(s),i=t(212),m=t(209),u=t(211),d=t(135),h=t.n(d);function b(e){var a=e.to,t=e.href,l=e.label,s=Object(r.a)(e,["to","href","label"]),o=Object(u.a)(a);return c.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:o},s),l)}var v=function(e){var a=e.url,t=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(m.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},r=n.copyright,l=n.links,s=void 0===l?[]:l,i=n.logo,d=void 0===i?{}:i,E=Object(u.a)(d.src);return t?c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container"},s&&s.length>0&&c.a.createElement("div",{className:"row footer__links"},s.map((function(e,a){return c.a.createElement("div",{key:a,className:o()("col footer__col",h.a.footerCol)},null!=e.title?c.a.createElement("h4",{className:o()("footer__title",h.a.footerTitle)},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?c.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(b,e))}))):null)}))),(d||r)&&c.a.createElement("div",{className:"text--center"},d&&d.src&&c.a.createElement("div",{className:"margin-bottom--sm"},d.href?c.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:h.a.footerLogoLink},c.a.createElement(v,{alt:d.alt,url:E})):c.a.createElement(v,{alt:d.alt,url:E})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},230:function(e,a,t){"use strict";var n=t(1),r=(t(217),t(52),t(9)),l=t(0),c=t.n(l),s=t(210),o=t.n(s),i=t(212),m=t(209),u=t(211),d=(t(54),t(25),t(20),t(19),t(79),t(213)),h=(t(132),function(e){var a=Object(l.useState)(!1),n=a[0],r=a[1],s=Object(l.useRef)(null),i=Object(m.a)().siteConfig,u=(void 0===i?{}:i).themeConfig.algolia,h=Object(d.b)();var b=function(e){void 0===e&&(e=!0),n||Promise.all([t.e(66).then(t.t.bind(null,338,7)),t.e(44).then(t.t.bind(null,339,7))]).then((function(a){var t=a[0].default;r(!0),window.docsearch=t,function(e){window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,handleSelected:function(e,a,t){var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;h.push(r)}}),e&&s.current.focus()}(e)}))},v=Object(l.useCallback)((function(){b(),n&&s.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),E=Object(l.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),p=Object(l.useCallback)((function(e){var a="mouseover"!==e.type;b(a)}));return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:v,onKeyDown:v,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:p,onFocus:p,onBlur:E,ref:s,style:{borderRadius:"4px"}}))}),b=t(222),v=t(214),E=t(229),p=t(219),f=t(220),_=t(134),N=t.n(_);function g(e){var a=e.activeBasePath,t=e.to,l=e.href,s=e.label,o=e.activeClassName,m=void 0===o?"navbar__link--active":o,d=Object(r.a)(e,["activeBasePath","to","href","label","activeClassName"]),h=Object(u.a)(t),b=Object(u.a)(a);return c.a.createElement(i.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:l}:Object.assign({isNavLink:!0,activeClassName:m,to:h},a?{isActive:function(e,a){return a.pathname.startsWith(b)}}:null),d),s)}function k(e){var a=e.items,t=e.position,l=e.className,s=Object(r.a)(e,["items","position","className"]),i=function(e,a){return void 0===a&&(a=!1),o()({"navbar__item navbar__link":!a,dropdown__link:a},e)};return a?c.a.createElement("div",{className:o()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},c.a.createElement(g,Object(n.a)({className:i(l)},s,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),s.label),c.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){var t=e.className,l=Object(r.a)(e,["className"]);return c.a.createElement("li",{key:a},c.a.createElement(g,Object(n.a)({activeClassName:"dropdown__link--active",className:i(t,!0)},l)))})))):c.a.createElement(g,Object(n.a)({className:i(l)},s))}function w(e){var a=e.items,t=e.className,l=Object(r.a)(e,["items","className"]),s=function(e,a){return void 0===a&&(a=!1),o()("menu__link",{"menu__link--sublist":a},e)};return a?c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(g,Object(n.a)({className:s(t,!0)},l),l.label),c.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){var t=e.className,o=Object(r.a)(e,["className"]);return c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(g,Object(n.a)({activeClassName:"menu__link--active",className:s(t)},o,{onClick:l.onClick})))})))):c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(g,Object(n.a)({className:s(t)},l)))}a.a=function(){var e,a,t=Object(m.a)(),r=t.siteConfig.themeConfig,s=r.navbar,u=(s=void 0===s?{}:s).title,d=s.links,_=void 0===d?[]:d,g=s.hideOnScroll,O=void 0!==g&&g,j=r.disableDarkMode,y=void 0!==j&&j,C=t.isClient,P=Object(l.useState)(!1),x=P[0],M=P[1],S=Object(l.useState)(!1),D=S[0],L=S[1],B=Object(v.a)(),T=B.isDarkTheme,G=B.setLightTheme,I=B.setDarkTheme,R=Object(E.a)(O),H=R.navbarRef,K=R.isNavbarVisible,A=Object(f.a)(),V=A.logoLink,W=A.logoLinkProps,J=A.logoImageUrl,F=A.logoAlt;Object(p.a)(x);var U=Object(l.useCallback)((function(){M(!0)}),[M]),q=Object(l.useCallback)((function(){M(!1)}),[M]),z=Object(l.useCallback)((function(e){return e.target.checked?I():G()}),[G,I]);return c.a.createElement("nav",{ref:H,className:o()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":x},e[N.a.navbarHideable]=O,e[N.a.navbarHidden]=!K,e[N.a.orange]=N.a.orange,e))},c.a.createElement("div",{className:"navbar__inner container"},c.a.createElement("div",{className:"navbar__items"},null!=_&&0!==_.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(i.a,Object(n.a)({className:"navbar__brand",to:V},W),null!=J&&c.a.createElement("img",{key:C,className:"navbar__logo",src:J,alt:F}),null!=u&&c.a.createElement("strong",{className:o()("navbar__title",(a={},a[N.a.hideLogoText]=D,a))},u)),_.filter((function(e){return"left"===e.position})).map((function(e,a){return c.a.createElement(k,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},c.a.createElement(h,{handleSearchBarToggle:L,isSearchBarExpanded:D}),_.filter((function(e){return"right"===e.position})).map((function(e,a){return c.a.createElement(k,Object(n.a)({},e,{key:a}))})),!y&&c.a.createElement(b.a,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:z}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:q}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(i.a,Object(n.a)({className:"navbar__brand",onClick:q,to:V},W),null!=J&&c.a.createElement("img",{key:C,className:"navbar__logo",src:J,alt:F}),null!=u&&c.a.createElement("strong",{className:"navbar__title"},u)),!y&&x&&c.a.createElement(b.a,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:z})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},_.map((function(e,a){return c.a.createElement(w,Object(n.a)({},e,{onClick:q,key:a}))})))))))}}}]);