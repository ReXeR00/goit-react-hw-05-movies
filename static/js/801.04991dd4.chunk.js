"use strict";(self.webpackChunkHomework_ReXeR00_for_GOIT=self.webpackChunkHomework_ReXeR00_for_GOIT||[]).push([[801],{801:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var o,r,i,s,c,a,l,u,h=t(439),d=t(168),p=t(867),f=p.zo.form(o||(o=(0,d.Z)(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0 20px 0;\n\n    z-index: 999;\n"]))),x=p.zo.input(r||(r=(0,d.Z)(["\n  width: 300px;\n  height: 30px;\n  padding: 5px 5px 5px 15px;\n  font-size: 16px;\n  outline: none;\n  border: none;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n\n  &::placeholder {\n    font-size: 16px;\n    color: #cccccc;\n  }\n"]))),g=p.zo.button(i||(i=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 140px;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 600;\n  border: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: rgba(255, 255, 126, 1);\n  }\n"]))),m=p.zo.span(s||(s=(0,d.Z)(["\n  padding: 10px;\n"]))),b=t(791),j=t(126),v=t(184),w=function(n){var e=n.searchMovies,t=(0,b.useState)(""),o=(0,h.Z)(t,2),r=o[0],i=o[1];return(0,v.jsxs)(f,{onSubmit:function(n){n.preventDefault(),e(r.toLowerCase())},children:[(0,v.jsxs)(g,{children:[(0,v.jsx)(j.dVI,{}),(0,v.jsx)(m,{children:"Search"})]}),(0,v.jsx)(x,{name:"searchName",type:"text",autoFocus:!0,id:"search",value:r,onChange:function(n){i(n.target.value)}})]})},z=t(798),Z=t(689),y=t(87),k=p.zo.ul(c||(c=(0,d.Z)(["\n  list-style-type: none;\n"]))),_=p.zo.li(a||(a=(0,d.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),S=(0,p.zo)(y.rU)(l||(l=(0,d.Z)(["\n  text-decoration: none;\n  color: white;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),T=function(n){var e=n.films,t=(0,Z.TH)();return(0,v.jsx)(k,{children:e.map((function(n){return(0,v.jsx)(_,{children:(0,v.jsx)(S,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})},C=p.zo.h2(u||(u=(0,d.Z)(["\n    color: white;\n"]))),R=function(){var n=(0,b.useState)([]),e=(0,h.Z)(n,2),t=e[0],o=e[1],r=(0,b.useState)(!1),i=(0,h.Z)(r,2),s=i[0],c=i[1];return(0,b.useEffect)((function(){console.log("This is searchFilms: ",t)}),[t]),(0,v.jsxs)("main",{children:[(0,v.jsx)(w,{searchMovies:function(n){(0,z.Ny)(n).then((function(n){o(n),c(0===n.length)})).catch((function(n){console.log(n)}))}}),s&&(0,v.jsx)(C,{children:"There is no movies with this request. Please, try again"}),t.length>0&&(0,v.jsx)(T,{films:t})]})}}}]);
//# sourceMappingURL=801.04991dd4.chunk.js.map