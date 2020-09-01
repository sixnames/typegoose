(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{118:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},g=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),g=u(r),d=n,b=g["".concat(l,".").concat(d)]||g[d]||p[d]||a;return r?o.a.createElement(b,s(s({ref:t},i),{},{components:r})):o.a.createElement(b,s({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(118)),l={id:"logger",title:"Typegoose's Logger"},s={unversionedId:"guides/advanced/logger",id:"guides/advanced/logger",isDocsHomePage:!1,title:"Typegoose's Logger",description:"Typegoose uses loglevel to make some soft-errors & for debugging.",source:"@site/../docs/guides/advanced/logger.md",slug:"/guides/advanced/logger",permalink:"/typegoose/docs/guides/advanced/logger",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/logger.md",version:"current",sidebar:"guides",previous:{title:"Models with same name",permalink:"/typegoose/docs/guides/advanced/models-with-same-name"},next:{title:"Reference other Classes",permalink:"/typegoose/docs/guides/advanced/reference-other-classes"}},c=[{value:"Set the LogLevel",id:"set-the-loglevel",children:[]}],i={rightToc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Typegoose uses ",Object(a.b)("inlineCode",{parentName:"p"},"loglevel")," to make some soft-errors & for debugging."),Object(a.b)("h2",{id:"set-the-loglevel"},"Set the LogLevel"),Object(a.b)("p",null,"Currently available loglevels:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"SILENT (logs nothing | turns the logger off ","[not recommended]",")"),Object(a.b)("li",{parentName:"ul"},"ERROR (shows only error)"),Object(a.b)("li",{parentName:"ul"},"WARN (default), used for soft errors / soft mistakes (everything below is mostly for debugging)"),Object(a.b)("li",{parentName:"ul"},"INFO"),Object(a.b)("li",{parentName:"ul"},"DEBUG"),Object(a.b)("li",{parentName:"ul"},"TRACE (shows everything)")),Object(a.b)("p",null,"To set the loglevel of Typegoose:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { setLogLevel, LogLevels } from '@typegoose/typegoose';\n\nsetLogLevel(LogLevels.SILENT);\n")))}u.isMDXComponent=!0}}]);