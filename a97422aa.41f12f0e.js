(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{118:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),h=n,b=d["".concat(i,".").concat(h)]||d[h]||u[h]||r;return o?a.a.createElement(b,c(c({ref:t},p),{},{components:o})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<r;p++)i[p]=o[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},92:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return l}));var n=o(2),a=o(6),r=(o(0),o(118)),i={id:"faq",title:"FAQ"},c={unversionedId:"guides/faq",id:"guides/faq",isDocsHomePage:!1,title:"FAQ",description:"Repository",source:"@site/../docs/guides/faq.md",slug:"/guides/faq",permalink:"/typegoose/docs/guides/faq",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/faq.md",version:"current",sidebar:"guides",previous:{title:"Quick Start Guide",permalink:"/typegoose/docs/guides/quick-start-guide"},next:{title:"Known Issues",permalink:"/typegoose/docs/guides/known-issues"}},s=[{value:"Repository",id:"repository",children:[{value:"What happened to the original author?",id:"what-happened-to-the-original-author",children:[]},{value:"Is this Project still active?",id:"is-this-project-still-active",children:[]},{value:"Why is the original project not archived?",id:"why-is-the-original-project-not-archived",children:[]},{value:"Why is the package now released in another package?",id:"why-is-the-package-now-released-in-another-package",children:[]},{value:"Why @typegoose/typegoose",id:"why-typegoosetypegoose",children:[]}]},{value:"Functional",id:"functional",children:[{value:"Why does <code>new Model({})</code> not have types?",id:"why-does-new-model-not-have-types",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"repository"},"Repository"),Object(r.b)("h3",{id:"what-happened-to-the-original-author"},"What happened to the original author?"),Object(r.b)("p",null,"A: The original author szokodiakos (github name) ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/szokodiakos/typegoose/issues/99#issuecomment-364639150"}),"has abandoned the project"),", but might look into it again at some time."),Object(r.b)("h3",{id:"is-this-project-still-active"},"Is this Project still active?"),Object(r.b)("p",null,"A: Yes it is, but not on the main repository anymore because of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#what-happened-to-the-original-author"}),"What happened to the original author?")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/en/articles/permission-levels-for-a-user-account-repository"}),"Github Permissions")," (TL;DR: a collaborator cannot add another collaborater, only the owner can)"),Object(r.b)("h3",{id:"why-is-the-original-project-not-archived"},"Why is the original project not archived?"),Object(r.b)("p",null,"A: because a collaborator cannot archive a project, only the owner can (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#what-happened-to-the-original-author"}),"What happened to the original author?"),")"),Object(r.b)("h3",{id:"why-is-the-package-now-released-in-another-package"},"Why is the package now released in another package?"),Object(r.b)("p",null,"(context: from ",Object(r.b)("inlineCode",{parentName:"p"},"typegoose")," to ",Object(r.b)("inlineCode",{parentName:"p"},"@typegoose/typegoose"),")",Object(r.b)("br",null),"\nA: Because of a Repository Switch (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#is-this-project-still-active"}),"reasons"),") and because a name cannot be used by multiple packages, except if it is scoped."),Object(r.b)("h3",{id:"why-typegoosetypegoose"},"Why @typegoose/typegoose"),Object(r.b)("p",null,"A: because I (hasezoey) don't have permissions over the old ",Object(r.b)("inlineCode",{parentName:"p"},"typegoose")," repository and I dont want to touch the old npm package. It is a typical forking and continuation of an OSS project."),Object(r.b)("h2",{id:"functional"},"Functional"),Object(r.b)("h3",{id:"why-does-new-model-not-have-types"},"Why does ",Object(r.b)("inlineCode",{parentName:"h3"},"new Model({})")," not have types?"),Object(r.b)("p",null,"A: because Typegoose doesn't modify any Mongoose code, it is still the same as Mongoose's original ",Object(r.b)("inlineCode",{parentName:"p"},"new Model()"),", you would have to do ",Object(r.b)("inlineCode",{parentName:"p"},"new Model({} as Class)")," (or sometimes ",Object(r.b)("inlineCode",{parentName:"p"},"new Model({} as Partial<Class>)"),", because of functions.)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": since ",Object(r.b)("inlineCode",{parentName:"p"},"@types/mongoose@5.7.22")," there are typings for ",Object(r.b)("inlineCode",{parentName:"p"},".create"),", but are not fully compatible with Typegoose. For more information pleasae read ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/typegoose/docs/guides/known-issues#typesmongoose5722-and-higher"}),"known-issues")))}l.isMDXComponent=!0}}]);