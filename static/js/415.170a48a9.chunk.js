"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(n,t,r){r.r(t),r.d(t,{default:function(){return d}});var e=r(861),a=r(439),u=r(757),c=r.n(u),o=r(791),i=r(689),p=r(87),s=r(228),x=r(558),f=r(184);function d(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),r=t[0],u=t[1],d=(0,i.TH)();return(0,o.useEffect)((function(){function n(){return(n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Df)();case 2:t=n.sent,u(t.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,f.jsxs)(x.xu,{children:[(0,f.jsx)(x.Dx,{children:"Trending today"}),(0,f.jsx)("ul",{children:r.map((function(n){var t=n.id,r=n.title;return(0,f.jsx)(x.ck,{children:(0,f.jsx)(p.OL,{to:"movies/".concat(t),state:{from:d},children:r})},t)}))})]})}},558:function(n,t,r){r.d(t,{Dx:function(){return b},Ee:function(){return w},Fg:function(){return _},II:function(){return Z},W2:function(){return k},Zx:function(){return y},ck:function(){return v},jh:function(){return P},jp:function(){return m},xu:function(){return h}});var e,a,u,c,o,i,p,s,x,f,d=r(168),l=r(444),g=r(87),h=l.ZP.main(e||(e=(0,d.Z)(["\n  padding: 20px 20px;\n"]))),b=l.ZP.h1(a||(a=(0,d.Z)(["\n  font-sise: 20px;\n  font-weight: 700;\n  text-align: center;\n"]))),v=l.ZP.li(u||(u=(0,d.Z)(["\n  font-size: 15px;\n  padding-bottom: 5px;\n"]))),Z=l.ZP.input(c||(c=(0,d.Z)(["\n  width: 300px;\n  psdding: 5px;\n  margin-right: 5px;\n"]))),m=l.ZP.button(o||(o=(0,d.Z)(["\n  display: inline-block;\n  font-size: 16px;\n  color: #000;\n  padding: 5px;\n  margin-bottom: 20px;\n  border: 1px solid black;\n  background-color: transparent;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  cursor: pointer;\n\n\n  &:hover {\n    background-color: grey;"]))),k=l.ZP.div(i||(i=(0,d.Z)(["\n  display: flex;\n  padding: 15px;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n"]))),w=l.ZP.img(p||(p=(0,d.Z)(["\n  display: block;\n  height: 400px;\n  width: 100%;\n  object-fit: cover;\n"]))),y=l.ZP.div(s||(s=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n"]))),P=l.ZP.ul(x||(x=(0,d.Z)(["\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  padding-bottom: 20px;\n"]))),_=(0,l.ZP)(g.OL)(f||(f=(0,d.Z)(["\n  text-decoration: none;\n  color: black;\n"])))},228:function(n,t,r){r.d(t,{Df:function(){return i},M1:function(){return x},TP:function(){return p},UN:function(){return s},tx:function(){return f}});var e=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="f839b78354fef4499f7468843ae5a754",i=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?language=en-US&api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?language=en-US&api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t,"&language=en-US&api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?language=en-US&api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?language=en-US&api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.170a48a9.chunk.js.map