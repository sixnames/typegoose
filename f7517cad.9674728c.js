(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(118)),i={id:"hooks",title:"Hooks"},c={unversionedId:"api/decorators/hooks",id:"api/decorators/hooks",isDocsHomePage:!1,title:"Hooks",description:"@pre",source:"@site/../docs/api/decorators/hooks.md",slug:"/api/decorators/hooks",permalink:"/typegoose/docs/api/decorators/hooks",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/hooks.md",version:"current",sidebar:"docs",previous:{title:"Model Options",permalink:"/typegoose/docs/api/decorators/model-options"},next:{title:"Indexes",permalink:"/typegoose/docs/api/decorators/indexes"}},s=[{value:"@pre",id:"pre",children:[]},{value:"@post",id:"post",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"pre"},"@pre"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@pre<T>(name: string | string[] | regexp | regexp[], method: () => any)")," is used to set Pre-Hooks"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@pre")," supports the use of an array of method names for comfort (this is not mongoose-native)")),Object(a.b)("p",null,"Note: Arrow Functions cannot be used here, because the binding of ",Object(a.b)("inlineCode",{parentName:"p"},"this")," is required to get & modify the document."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"@pre<Car>('save', function () {\n  if (this.model === 'Tesla') {\n    this.isFast = true;\n  }\n})\nclass Car {\n  @prop({ required: true })\n  public model!: string;\n\n  @prop()\n  public isFast?: boolean;\n}\n")),Object(a.b)("h2",{id:"post"},"@post"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@post<T>(name: string | string[] | regexp | regexp[], method: () => any)")," is used to set Post-Hooks"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@post")," supports the use of an array of method names for comfort (this is not mongoose-native)")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"@post<Car>('save', (car) => {\n  if (car.topSpeedInKmH > 300) {\n    console.log(car.model, 'is fast!');\n  }\n})\nclass Car {\n  @prop({ required: true })\n  public model!: string;\n\n  @prop({ required: true })\n  public topSpeedInKmH!: number;\n}\n")))}l.isMDXComponent=!0},118:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);