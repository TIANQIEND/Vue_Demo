(function(t){function n(n){for(var r,i,a=n[0],c=n[1],s=n[2],f=0,p=[];f<a.length;f++)i=a[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(n);while(p.length)p.shift()();return u.push.apply(u,s||[]),e()}function e(){for(var t,n=0;n<u.length;n++){for(var e=u[n],r=!0,a=1;a<e.length;a++){var c=e[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},u=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var l=c;u.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("04f5"),o=e.n(r);o.a},"04f5":function(t,n,e){},"13b5":function(t,n,e){"use strict";var r=e("cd89"),o=e.n(r);o.a},2:function(t,n){},"283a":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-link",{attrs:{to:"/home"}},[t._v("首页")]),t._v("\n     \n    "),e("router-link",{attrs:{to:"/news"}},[t._v("新闻")]),e("hr"),e("h2",[t._v("App页面")]),e("router-view")],1)},u=[],i={},a=i,c=(e("034f"),e("2877")),s=Object(c["a"])(a,o,u,!1,null,null,null),l=s.exports,f=e("28dd"),p=e("8c4f"),d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"home"}},[t._v("\n    Home组件\n    "),e("ul",t._l(t.list,function(n,r){return e("li",[e("router-link",{attrs:{to:"/pcontent?id="+r}},[t._v(t._s(r)+"-----"+t._s(n))])],1)}))])},h=[],v={data:function(){return{msg:"我是一个商品组件",list:["商品1111","商品2222","商品3333"]}}},m=v,b=(e("8b71"),Object(c["a"])(m,d,h,!1,null,null,null)),_=b.exports,y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"news"}},[t._v("\n    新闻组件\n\n\n    "),e("ul",t._l(t.list,function(n,r){return e("li",[e("router-link",{attrs:{to:"/content/"+n.key},domProps:{innerHTML:t._s(n.value)}})],1)}))])},g=[],k={data:function(){return{msg:"News -----compoment",list:[]}},methods:{requestData:function(){var t=this,n="http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=银魂&bk_length=600";this.$http.jsonp(n).then(function(n){t.list=n.body.card},function(t){console.log(t)})}},mounted:function(){this.requestData()}},j=k,w=(e("13b5"),Object(c["a"])(j,y,g,!1,null,null,null)),O=w.exports,x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"content"}},[t._v("\n    "+t._s(t.msg)+"\n")])},$=[],P=(e("7f7f"),{data:function(){return{msg:"loading...",list:[]}},mounted:function(){var t=this.$route.params.key;this.requestData(t)},methods:{requestData:function(t){var n=this,e="http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=银魂&bk_length=600";this.$http.jsonp(e).then(function(e){for(var r=0;r<=13;r++)e.body.card[r].key==t&&(n.msg=e.body.card[r].name)},function(t){console.log(t)})}}}),q=P,E=(e("b318"),Object(c["a"])(q,x,$,!1,null,null,null)),M=E.exports,S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"pcontent"}},[t._v("\n    商品详情\n")])},D=[],T={data:function(){return{msg:"数据"}},mounted:function(){console.log(this.$route.qurey)}},A=T,L=(e("e69f"),Object(c["a"])(A,S,D,!1,null,null,null)),B=L.exports;r["a"].use(p["a"]);var C=[{path:"/home",component:_},{path:"/news",component:O},{path:"/content/:key",component:M},{path:"/pcontent",component:B},{path:"*",redirect:"/home"}],H=new p["a"]({routes:C}),J=H;r["a"].config.productionTip=!1,r["a"].use(f["a"]),new r["a"]({router:J,render:function(t){return t(l)}}).$mount("#app")},"8b71":function(t,n,e){"use strict";var r=e("283a"),o=e.n(r);o.a},b318:function(t,n,e){"use strict";var r=e("c3b1"),o=e.n(r);o.a},c3b1:function(t,n,e){},cd89:function(t,n,e){},d93c:function(t,n,e){},e69f:function(t,n,e){"use strict";var r=e("d93c"),o=e.n(r);o.a}});
//# sourceMappingURL=app.124677a4.js.map