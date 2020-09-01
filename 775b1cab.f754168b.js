(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},y=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(n),y=r,d=l["".concat(o,".").concat(y)]||l[y]||f[y]||a;return n?i.a.createElement(d,p(p({ref:t},c),{},{components:n})):i.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(118)),o={id:"is-ref-type",title:"Is Ref-Type"},p={unversionedId:"api/functions/typeguards/is-ref-type",id:"api/functions/typeguards/is-ref-type",isDocsHomePage:!1,title:"Is Ref-Type",description:"isRefType",source:"@site/../docs/api/functions/typeguards/isRefType.md",slug:"/api/functions/typeguards/is-ref-type",permalink:"/typegoose/docs/api/functions/typeguards/is-ref-type",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/typeguards/isRefType.md",version:"current",sidebar:"docs",previous:{title:"Is Document",permalink:"/typegoose/docs/api/functions/typeguards/is-document"},next:{title:"Document Type",permalink:"/typegoose/docs/api/types/document-type"}},s=[{value:"isRefType",id:"isreftype",children:[]},{value:"isRefTypeArray",id:"isreftypearray",children:[]}],c={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"isreftype"},"isRefType"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"isRefType(doc: any)"),": Checks if the supplied value is not a document and is not undefined/null (mainly for ",Object(a.b)("inlineCode",{parentName:"p"},"Ref<T>")," fields)."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'class Cat {\n  @prop({ ref: \'Cat\' })\n  public partner: Ref<Cat>;\n\n  public hasPartner(): boolean {\n    if (isRefType(this.partner)) {\n      // "this.partner" now has the type of "Cat._id"\'s RefType (This case ObjectId)\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n')),Object(a.b)("p",null,"-> this could be minified, but for demonstration purposes this will stay the long version"),Object(a.b)("h2",{id:"isreftypearray"},"isRefTypeArray"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"isRefTypeArray(doc: any[])")," is the same as ",Object(a.b)("inlineCode",{parentName:"p"},"isRefType"),", only that it checks if it is an array ",Object(a.b)("strong",{parentName:"p"},"AND")," all of the items are not ",Object(a.b)("inlineCode",{parentName:"p"},"undefined"),"/",Object(a.b)("inlineCode",{parentName:"p"},"null")," and not a document."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'class Cat {\n  @prop({ ref: \'Cat\' })\n  public kittens: Ref<Cat>;\n\n  public areAllKittensExisting(): boolean {\n    if (isDocumentArray(this.kittens)) {\n      // "this.kittens" now has the type of "Cat._id"\'s RefType (This case ObjectId)\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n')),Object(a.b)("p",null,"-> this could be minified, but for demonstration purposes this will stay the long version"))}u.isMDXComponent=!0}}]);