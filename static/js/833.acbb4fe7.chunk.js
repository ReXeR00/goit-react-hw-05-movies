/*! For license information please see 833.acbb4fe7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkHomework_ReXeR00_for_GOIT=self.webpackChunkHomework_ReXeR00_for_GOIT||[]).push([[833,454],{454:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});e(791);var r,o,i,a=e(168),c=e(867),u=(0,c.F4)(r||(r=(0,a.Z)(["\n  10% {\n    opacity: 0.5;\n  }\n  20% {\n    opacity: 1;\n    top: 3.78em;\n    transform: rotateX(-360deg);\n  }\n  80% {\n    opacity: 1;\n    top: 3.78em;\n    transform: rotateX(-360deg);\n  }\n  90% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0;\n    top: 6.94em;\n  }\n"]))),s=c.zo.div(o||(o=(0,a.Z)(["\n  text-align: center;\n\n  font-family: 'Arial Narrow', sans-serif;\n  font-weight: 100;\n  font-size: 1.3em;\n  color: #a3e1f0;\n"]))),l=c.zo.span(i||(i=(0,a.Z)(["\n  position: relative;\n  top: 0.63em;\n  display: inline-block;\n  text-transform: uppercase;\n  opacity: 0;\n  transform: rotateX(-90deg);\n\n  animation: "," 1.2s ease-in-out infinite;\n  animation-delay: ","s;\n"])),u,(function(t){return t.delay})),f=e(184),h=function(){return(0,f.jsx)(s,{children:(0,f.jsxs)("h1",{children:[(0,f.jsx)(l,{delay:1.2,children:"L"}),(0,f.jsx)(l,{delay:1.3,children:"o"}),(0,f.jsx)(l,{delay:1.4,children:"a"}),(0,f.jsx)(l,{delay:1.5,children:"d"}),(0,f.jsx)(l,{delay:1.6,children:"i"}),(0,f.jsx)(l,{delay:1.7,children:"n"}),(0,f.jsx)(l,{delay:1.8,children:"g"}),(0,f.jsx)(l,{delay:1.9,children:"."}),(0,f.jsx)(l,{delay:2,children:"."}),(0,f.jsx)(l,{delay:2.1,children:"."})]})})}},833:function(t,n,e){e.r(n),e.d(n,{default:function(){return I}});var r,o,i,a,c,u,s,l,f,h,d,p=e(439),v=e(168),y=e(867),g=e(87),m=y.ZP.div(r||(r=(0,v.Z)(["\n  display: flex;\n  margin: 20px;\n  border: solid gray 1px;\n"]))),x=y.ZP.img(o||(o=(0,v.Z)([""]))),w=y.ZP.h1(i||(i=(0,v.Z)(["\n  color: white;\n"]))),j=y.ZP.a(a||(a=(0,v.Z)(["\n  color: white;\n"]))),b=y.ZP.h2(c||(c=(0,v.Z)(["\n  color: white;\n"]))),Z=y.ZP.a(u||(u=(0,v.Z)(["\n  color: white;\n"]))),_=y.ZP.h2(s||(s=(0,v.Z)(["\n  color: white;\n"]))),L=y.ZP.ul(l||(l=(0,v.Z)(["\n  color: white;\n  display: inline-flex;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),k=y.ZP.ul(f||(f=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  color: white;\n"]))),E=(0,y.ZP)(g.rU)(h||(h=(0,v.Z)(["\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 18px;\n  color: red;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),O=e(689),P=e(820),S=y.zo.button(d||(d=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: pink;\n  cursor: pointer;\n\n  background: transparent;\n  border: none;\n\n  :hover {\n    color: orangered;\n  }\n"]))),G=e(184),N=function(){var t,n,e=(0,O.TH)();return(0,G.jsx)(g.rU,{to:null!==(t=null===(n=e.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/",children:(0,G.jsxs)(S,{type:"button",children:[(0,G.jsx)(P.kyg,{size:"24"})," GO BACK"]})})},T=e(519),U=e(791),F=e(454),I=function(){var t=(0,O.UO)().movieId,n=(0,U.useState)(null),e=(0,p.Z)(n,2),r=e[0],o=e[1],i=(0,U.useState)(!1),a=(0,p.Z)(i,2),c=a[0],u=a[1];if((0,U.useEffect)((function(){u(!0),(0,T.Y5)(t).then((function(t){o(t)})).catch((function(t){console.log(t)})).finally((function(){u(!1)}))}),[t]),r){var s=r||{},l=s.title,f=s.release_date,h=s.popularity,d=s.overview,v=s.poster_path,y=s.original_title;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,G.jsx)("div",{children:(0,G.jsx)(N,{})}),(0,G.jsxs)(m,{children:[c&&(0,G.jsx)(F.default,{}),(0,G.jsx)(x,{src:v?"https://image.tmdb.org/t/p/w500".concat(v):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:y}),(0,G.jsxs)("div",{children:[(0,G.jsxs)(w,{children:[l," (",f.slice(0,4),")"]}),(0,G.jsxs)(j,{children:[" Movie score: ",h]}),(0,G.jsx)(b,{children:"Overvoew"}),(0,G.jsx)(Z,{children:d}),(0,G.jsx)(_,{children:"Genres"}),(0,G.jsx)(L,{children:r.genres&&r.genres.map((function(t){return(0,G.jsx)("span",{children:t.name},t.id)}))})]}),(0,G.jsx)("hr",{})]})]}),(0,G.jsxs)("div",{children:[(0,G.jsxs)(k,{children:[(0,G.jsx)("li",{children:(0,G.jsx)(E,{to:"cast",children:"Cast"})}),(0,G.jsx)("li",{children:(0,G.jsx)(E,{to:"reviews",children:"Reviewies"})})]}),(0,G.jsx)(O.j3,{})]})]})}}},519:function(t,n,e){e.d(n,{Bt:function(){return f},Ny:function(){return u},Tg:function(){return c},Y5:function(){return s},wL:function(){return l}});var r=e(861),o=e(243);function i(){i=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(P){s=function(t,n,e){return t[n]=e}}function l(t,n,e,o){var i=n&&n.prototype instanceof d?n:d,a=Object.create(i.prototype),c=new k(o||[]);return r(a,"_invoke",{value:b(t,e,c)}),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var h={};function d(){}function p(){}function v(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(E([])));m&&m!==n&&e.call(m,a)&&(y=m);var x=v.prototype=d.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function j(t,n){function o(r,i,a,c){var u=f(t[r],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){o(t,e,n,r)}))}return i=i?i.then(r,r):r()}})}function b(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=Z(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=f(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}function Z(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,Z(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function E(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=v,r(x,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:p,configurable:!0}),p.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(j.prototype),s(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new j(l(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,u,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="04a111d0441c7f65cc626e3e4efacdb5",c=function(){var t=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("trending/movie/day?api_key=".concat(a));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("search/movie?api_key=".concat(a,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"?api_key=").concat(a,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"/credits?api_key=").concat(a,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=833.acbb4fe7.chunk.js.map