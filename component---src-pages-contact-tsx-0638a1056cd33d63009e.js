(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+Tq5":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),o=t("52Oh"),l=t("24R3"),i=t("EvBo"),m=t.n(i),c=t("/4b6"),u=t("enDt"),s=t("8SHQ");a.a=function(){var e=Object(o.a)().formatMessage;return r.a.createElement(u.a,{id:"contact"},r.a.createElement("form",{action:"https://formspree.io/"+s.b,method:"POST"},r.a.createElement("h1",{className:m.a.headline},r.a.createElement(l.a,{id:"contact-headline"})),r.a.createElement("div",null,r.a.createElement("div",{className:m.a.formGroup},r.a.createElement("input",{name:"name",required:!0,placeholder:"name"}),r.a.createElement("label",{htmlFor:"name"},"name")),r.a.createElement("div",{className:m.a.formGroup},r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"email"}),r.a.createElement("label",{htmlFor:"email"},"email"))),r.a.createElement("div",{className:m.a.formGroup},r.a.createElement("textarea",{name:"message",required:!0,placeholder:e({id:"message-label"})}),r.a.createElement("label",{htmlFor:"message"},r.a.createElement(l.a,{id:"message-label"}))),r.a.createElement("div",{className:m.a.formGroup},r.a.createElement(c.a,{size:"small",type:"submit"},r.a.createElement(l.a,{id:"send-button-text"})))))}},"/4b6":function(e,a,t){"use strict";t("y7hu");var n=t("q1tI"),r=t.n(n),o=t("HJ/5"),l=t.n(o),i=t("oyfx");a.a=function(e){var a=e.type,t=e.children,n=e.size,o=void 0===n?"large":n,m=e.link,c=void 0!==m&&m,u=e.linkTo,s=e.onHover,d=e.onClick,p=e.navigationOrigin;return c?r.a.createElement(i.a,{className:"large"===o?l.a.buttonPrimaryLarge:l.a.buttonPrimarySmall,to:u||"",onClick:d,onHover:s,state:{navigationOrigin:p}},t):r.a.createElement("button",{type:a,className:"large"===o?l.a.buttonPrimaryLarge:l.a.buttonPrimarySmall,onClick:d,onMouseOver:s},t)}},"0Aie":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),o=t("C9yD"),l=t("nTs4"),i=t("+Tq5");a.default=function(e){var a=e.pathContext,t=a.locale,n=a.pagePath;return r.a.createElement(o.a,{locale:t,path:n},r.a.createElement(l.a,{id:"paddles"},r.a.createElement(i.a,null)))}},"9+45":function(e,a,t){e.exports={page:"page-layout-module--page--1a0jP",stickyButtonWrapper:"page-layout-module--stickyButtonWrapper--2oyhv",section:"page-layout-module--section--14Wb4"}},"9ois":function(e,a,t){e.exports={breadCrumb:"breadCrumb-module--breadCrumb--2rTkB"}},EvBo:function(e,a,t){e.exports={headline:"contact-module--headline--2VNna",formGroup:"contact-module--formGroup--2pFrA"}},"HJ/5":function(e,a,t){e.exports={button:"primaryButton-module--button--c1sbO",buttonLarge:"primaryButton-module--buttonLarge--3Ua0c",buttonPrimaryLarge:"primaryButton-module--buttonPrimaryLarge--2vA8v",buttonSmall:"primaryButton-module--buttonSmall--3y7Eq",buttonPrimarySmall:"primaryButton-module--buttonPrimarySmall---cISU",fadeIn:"primaryButton-module--fadeIn--7oZYE"}},enDt:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),o=t("9+45"),l=t.n(o);a.a=function(e){var a=e.id,t=e.children;return r.a.createElement("section",{id:a,className:l.a.section},t)}},nTs4:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),o=t("9+45"),l=t.n(o),i=t("tGc6"),m=t("/4b6"),c=t("8SHQ");var u=function(e,a){if("paddles"===e&&"boards"!==a)return{label:"boards",path:"/boards"};if("boards"===e&&"paddles"!==a)return{label:"paddles",path:"/paddles"};var t=c.c.filter(function(t){return t!==e&&t!==a}),n=t[Math.floor(Math.random()*t.length)];return{label:n,path:"/"+n}};a.a=function(e){var a,t,n,o,c=e.id,s=e.enableHomeBreadCrumb,d=void 0!==s&&s,p=e.navigationOrigin,b=e.children,f=(a=r.a.useState(!0),t=a[0],n=a[1],o=r.a.useRef(0),r.a.useEffect(function(){var e=function(){var e=window.pageYOffset,a=window.innerHeight,r=document.body.offsetHeight;o.current-5>e&&!t&&n(!0),a+e>=r-400&&t&&n(!1),o.current=e};return window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}},[t]),t);return r.a.createElement("div",{className:l.a.page},r.a.createElement("section",{id:c,className:l.a.section},d&&r.a.createElement(i.a,{label:"Home",linkTo:"/"}),b),r.a.createElement("div",{className:l.a.stickyButtonWrapper},!f&&r.a.createElement(m.a,{size:"small",link:!0,linkTo:u(c,p).path,navigationOrigin:c},""+u(c,p).label," -> ")))}},tGc6:function(e,a,t){"use strict";t.d(a,"a",function(){return m});var n=t("q1tI"),r=t.n(n),o=t("oyfx"),l=t("9ois"),i=t.n(l),m=function(e){var a=e.label,t=e.linkTo;return r.a.createElement("span",{className:i.a.breadCrumb},r.a.createElement(o.a,{to:t},a)," > ")}}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-0638a1056cd33d63009e.js.map