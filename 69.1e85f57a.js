(window.webpackJsonp=window.webpackJsonp||[]).push([[69,8],{213:function(e,t,a){"use strict";var n=a(39);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e})),a.d(t,"c",(function(){return n.f}))},214:function(e,t,a){"use strict";var n=a(0),r=a(216);t.a=function(){return Object(n.useContext)(r.a)}},216:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},219:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},220:function(e,t,a){"use strict";var n=a(209),r=a(214),c=a(211),o=a(215);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,l=(a=void 0===a?{}:a).logo,i=void 0===l?{}:l,s=Object(r.a)().isDarkTheme,u=i.href||t,d={};i.target?d={target:i.target}:Object(o.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var m=i.srcDark&&s?i.srcDark:i.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(c.a)(m),logoAlt:i.alt}}},221:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(234),o=a(215),l=a(209),i=a(211),s="",u="dark",d=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],o=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),i=Object(n.useCallback)((function(){c(s),o(s)}),[]),d=Object(n.useCallback)((function(){c(u),o(u)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?u:s)}))}),[]),{isDarkTheme:r===u,setLightTheme:i,setDarkTheme:d}},m=a(216);var h=function(e){var t=d(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(m.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},f=(a(52),a(217),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign(Object.assign({},a),{},((n={})[e]=t,n))})),r(e,t)}}}),v=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var b=function(e){var t=f(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(v.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},g=a(131),p=a.n(g);var k=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,c=a.id,o=a.content,i=a.backgroundColor,s=a.textColor,u=Object(n.useState)(!0),d=u[0],m=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&m(!1)}),[]),!o||d?null:r.a.createElement("div",{className:p.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:p.a.announcementBarContent,dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("button",{type:"button",className:p.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),m(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},E=a(230),_=a(227);a(136);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,u=a.themeConfig.image,d=a.url,m=e.children,f=e.title,v=e.noFooter,g=e.description,p=e.image,O=e.keywords,y=e.permalink,j=e.version,N=f?f+" | "+s:s,C=p||u,w=d+Object(i.a)(C);Object(o.a)(C)||(w=C);var S=Object(i.a)(n);return r.a.createElement(h,null,r.a.createElement(b,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),N&&r.a.createElement("title",null,N),N&&r.a.createElement("meta",{property:"og:title",content:N}),n&&r.a.createElement("link",{rel:"shortcut icon",href:S}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),j&&r.a.createElement("meta",{name:"docsearch:version",content:j}),O&&O.length&&r.a.createElement("meta",{name:"keywords",content:O.join(",")}),C&&r.a.createElement("meta",{property:"og:image",content:w}),C&&r.a.createElement("meta",{property:"twitter:image",content:w}),C&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N}),y&&r.a.createElement("meta",{property:"og:url",content:d+y}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(k,null),r.a.createElement(E.a,null),r.a.createElement("div",{className:"main-wrapper"},m),!v&&r.a.createElement(_.a,null)))}},222:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),o=a(223),l=a.n(o),i=a(209),s=a(210),u=a.n(s),d=a(133),m=a.n(d),h=function(){return c.a.createElement("span",{className:u()(m.a.toggle,m.a.moon)})},f=function(){return c.a.createElement("span",{className:u()(m.a.toggle,m.a.sun)})};t.a=function(e){var t=Object(i.a)().isClient;return c.a.createElement(l.a,Object(n.a)({disabled:!t,icons:{checked:c.a.createElement(h,null),unchecked:c.a.createElement(f,null)}},e))}},223:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(210)),i=m(a(16)),s=m(a(224)),u=m(a(225)),d=a(226);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},224:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},225:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},226:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},227:function(e,t,a){"use strict";var n=a(1),r=a(9),c=a(0),o=a.n(c),l=a(210),i=a.n(l),s=a(212),u=a(209),d=a(211),m=a(135),h=a.n(m);function f(e){var t=e.to,a=e.href,c=e.label,l=Object(r.a)(e,["to","href","label"]),i=Object(d.a)(t);return o.a.createElement(s.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:i},l),c)}var v=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(u.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,c=n.links,l=void 0===c?[]:c,s=n.logo,m=void 0===s?{}:s,b=Object(d.a)(m.src);return a?o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"container"},l&&l.length>0&&o.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return o.a.createElement("div",{key:t,className:i()("col footer__col",h.a.footerCol)},null!=e.title?o.a.createElement("h4",{className:i()("footer__title",h.a.footerTitle)},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(f,e))}))):null)}))),(m||r)&&o.a.createElement("div",{className:"text--center"},m&&m.src&&o.a.createElement("div",{className:"margin-bottom--sm"},m.href?o.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:h.a.footerLogoLink},o.a.createElement(v,{alt:m.alt,url:b})):o.a.createElement(v,{alt:m.alt,url:b})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},229:function(e,t,a){"use strict";var n=a(0),r=a(213);var c=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},o=a(30),l=a.n(o),i=function(){return{scrollX:l.a.canUseDOM?window.pageXOffset:0,scrollY:l.a.canUseDOM?window.pageYOffset:0}},s=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(i()),r=a[0],c=a[1],o=function(){var t=i();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o,{passive:!0})}}),t),r};t.a=function(e){var t=Object(n.useState)(!0),a=t[0],o=t[1],l=Object(n.useState)(!1),i=l[0],u=l[1],d=Object(n.useState)(0),m=d[0],h=d[1],f=Object(n.useState)(0),v=f[0],b=f[1],g=Object(n.useCallback)((function(e){null!==e&&b(e.getBoundingClientRect().height)}),[]),p=Object(r.c)(),k=c(p.hash),E=k[0],_=k[1];return s((function(t){var a=t.scrollY;if(e&&(0===a&&o(!0),!(a<v))){if(i)return u(!1),o(!1),void h(a);var n=document.documentElement.scrollHeight-v,r=window.innerHeight;m&&a>=m?o(!1):a+r<n&&o(!0),h(a)}}),[m,v]),Object(n.useEffect)((function(){e&&(o(!0),_(p.hash))}),[p]),Object(n.useEffect)((function(){e&&E&&u(!0)}),[E]),{navbarRef:g,isNavbarVisible:a}}},230:function(e,t,a){"use strict";var n=a(1),r=(a(217),a(52),a(9)),c=a(0),o=a.n(c),l=a(210),i=a.n(l),s=a(212),u=a(209),d=a(211),m=(a(54),a(25),a(20),a(19),a(79),a(213)),h=(a(132),function(e){var t=Object(c.useState)(!1),n=t[0],r=t[1],l=Object(c.useRef)(null),s=Object(u.a)().siteConfig,d=(void 0===s?{}:s).themeConfig.algolia,h=Object(m.b)();var f=function(e){void 0===e&&(e=!0),n||Promise.all([a.e(66).then(a.t.bind(null,338,7)),a.e(44).then(a.t.bind(null,339,7))]).then((function(t){var a=t[0].default;r(!0),window.docsearch=a,function(e){window.docsearch({appId:d.appId,apiKey:d.apiKey,indexName:d.indexName,inputSelector:"#search_input_react",algoliaOptions:d.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;h.push(r)}}),e&&l.current.focus()}(e)}))},v=Object(c.useCallback)((function(){f(),n&&l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(c.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),g=Object(c.useCallback)((function(e){var t="mouseover"!==e.type;f(t)}));return o.a.createElement("div",{className:"navbar__search",key:"search-box"},o.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:v,onKeyDown:v,tabIndex:0}),o.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:g,onFocus:g,onBlur:b,ref:l,style:{borderRadius:"4px"}}))}),f=a(222),v=a(214),b=a(229),g=a(219),p=a(220),k=a(134),E=a.n(k);function _(e){var t=e.activeBasePath,a=e.to,c=e.href,l=e.label,i=e.activeClassName,u=void 0===i?"navbar__link--active":i,m=Object(r.a)(e,["activeBasePath","to","href","label","activeClassName"]),h=Object(d.a)(a),f=Object(d.a)(t);return o.a.createElement(s.a,Object(n.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:c}:Object.assign({isNavLink:!0,activeClassName:u,to:h},t?{isActive:function(e,t){return t.pathname.startsWith(f)}}:null),m),l)}function O(e){var t=e.items,a=e.position,c=e.className,l=Object(r.a)(e,["items","position","className"]),s=function(e,t){return void 0===t&&(t=!1),i()({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{className:i()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},o.a.createElement(_,Object(n.a)({className:s(c)},l,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),l.label),o.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:t},o.a.createElement(_,Object(n.a)({activeClassName:"dropdown__link--active",className:s(a,!0)},c)))})))):o.a.createElement(_,Object(n.a)({className:s(c)},l))}function y(e){var t=e.items,a=e.className,c=Object(r.a)(e,["items","className"]),l=function(e,t){return void 0===t&&(t=!1),i()("menu__link",{"menu__link--sublist":t},e)};return t?o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(_,Object(n.a)({className:l(a,!0)},c),c.label),o.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,i=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(_,Object(n.a)({activeClassName:"menu__link--active",className:l(a)},i,{onClick:c.onClick})))})))):o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(_,Object(n.a)({className:l(a)},c)))}t.a=function(){var e,t,a=Object(u.a)(),r=a.siteConfig.themeConfig,l=r.navbar,d=(l=void 0===l?{}:l).title,m=l.links,k=void 0===m?[]:m,_=l.hideOnScroll,j=void 0!==_&&_,N=r.disableDarkMode,C=void 0!==N&&N,w=a.isClient,S=Object(c.useState)(!1),T=S[0],x=S[1],B=Object(c.useState)(!1),L=B[0],M=B[1],D=Object(v.a)(),P=D.isDarkTheme,I=D.setLightTheme,F=D.setDarkTheme,X=Object(b.a)(j),R=X.navbarRef,G=X.isNavbarVisible,A=Object(p.a)(),H=A.logoLink,U=A.logoLinkProps,K=A.logoImageUrl,Y=A.logoAlt;Object(g.a)(T);var W=Object(c.useCallback)((function(){x(!0)}),[x]),V=Object(c.useCallback)((function(){x(!1)}),[x]),J=Object(c.useCallback)((function(e){return e.target.checked?F():I()}),[I,F]);return o.a.createElement("nav",{ref:R,className:i()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":T},e[E.a.navbarHideable]=j,e[E.a.navbarHidden]=!G,e[E.a.orange]=E.a.orange,e))},o.a.createElement("div",{className:"navbar__inner container"},o.a.createElement("div",{className:"navbar__items"},null!=k&&0!==k.length&&o.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:W,onKeyDown:W},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),o.a.createElement(s.a,Object(n.a)({className:"navbar__brand",to:H},U),null!=K&&o.a.createElement("img",{key:w,className:"navbar__logo",src:K,alt:Y}),null!=d&&o.a.createElement("strong",{className:i()("navbar__title",(t={},t[E.a.hideLogoText]=L,t))},d)),k.filter((function(e){return"left"===e.position})).map((function(e,t){return o.a.createElement(O,Object(n.a)({},e,{key:t}))}))),o.a.createElement("div",{className:"navbar__items navbar__items--right"},o.a.createElement(h,{handleSearchBarToggle:M,isSearchBarExpanded:L}),k.filter((function(e){return"right"===e.position})).map((function(e,t){return o.a.createElement(O,Object(n.a)({},e,{key:t}))})),!C&&o.a.createElement(f.a,{className:E.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:P,onChange:J}))),o.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:V}),o.a.createElement("div",{className:"navbar-sidebar"},o.a.createElement("div",{className:"navbar-sidebar__brand"},o.a.createElement(s.a,Object(n.a)({className:"navbar__brand",onClick:V,to:H},U),null!=K&&o.a.createElement("img",{key:w,className:"navbar__logo",src:K,alt:Y}),null!=d&&o.a.createElement("strong",{className:"navbar__title"},d)),!C&&T&&o.a.createElement(f.a,{"aria-label":"Dark mode toggle in sidebar",checked:P,onChange:J})),o.a.createElement("div",{className:"navbar-sidebar__items"},o.a.createElement("div",{className:"menu"},o.a.createElement("ul",{className:"menu__list"},k.map((function(e,t){return o.a.createElement(y,Object(n.a)({},e,{onClick:V,key:t}))})))))))}},247:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(221);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);