webpackJsonp([1],{0:function(t,e){},"96GF":function(t,e){},Jxg3:function(t,e){},L28u:function(t,e){},NHnr:function(t,e,n){"use strict";function s(t,e,n){this.snowBox=document.getElementById(t),this.snowStyle=Math.ceil(Math.random()*n),this.maxLeft=this.snowBox.offsetWidth-5*Math.random()+3,this.maxTop=this.snowBox.offsetHeight-5*Math.random()+3,this.left=this.snowBox.offsetWidth*Math.random(),this.top=this.snowBox.offsetHeight*Math.random(),this.angle=1.1+.8*Math.random(),this.minAngle=1.1,this.maxAngle=1.9,this.angleDelta=.01*Math.random(),this.speed=1.4+Math.random(),this.createEle(e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n("VCXJ");s.prototype={createEle:function(t){var e=t.lastIndexOf("."),n=t.substring(0,e)+this.snowStyle+t.substring(e,t.length);(new Image).src=n,this.ele=document.createElement("img"),this.ele.setAttribute("src",n),this.ele.style.position="absolute",this.ele.style.zIndex="99",this.ele.style.userSelect="none",this.ele.style.webkitUserSelect="none",this.ele.style.mozUserSelect="none",this.ele.style.msUserSelect="none",this.snowBox.appendChild(this.ele)},move:function(){(this.angle<this.minAngle||this.angle>this.maxAngle)&&(this.angleDelta=-this.angleDelta),this.angle+=this.angleDelta,this.left+=this.speed*Math.cos(this.angle*Math.PI),this.top-=this.speed*Math.sin(this.angle*Math.PI),this.left<0?this.left=this.maxLeft:this.left>this.maxLeft&&(this.left=0),this.top>this.maxTop&&(this.top=0),this.ele.style.left=this.left+"px",this.ele.style.top=this.top+"px"}};var i="/src/assets",o={name:"app",data:function(){return{navLists:[{text:"首页",route:"home"},{text:"归档",route:"archives"},{text:"标签",route:"tags"},{text:"导航",route:"links"},{text:"关于",route:"about"}],sideIsShow:!1,blogInfo:{}}},methods:{sideIsShowFn:function(t){t&&!this.sideIsShow||(this.sideIsShow=!this.sideIsShow)}},beforeCreate:function(){var t=this,e=this;this.$http.get(i+"/data/blogsInfo.json").then(function(n){t.$store.dispatch("blogsInfoSet",n.body),e.blogInfo=e.$store.state.blogInfo}).catch(function(t){console.log(t)}),this.$http.get(i+"/data/noteList.json").then(function(e){t.$store.dispatch("noteListSet",e.body)}).catch(function(t){console.log(t)})},mounted:function(){console.log(this),function(t,e,n,a){for(var i=[],o=0;o<n;o++)i.push(new s(t,e,a));setInterval(function(){for(var t=i.length-1;t>=0;t--)i[t]&&i[t].move()},40)}("bodyCon","https://ntsclong.github.io/resData/img/snow/snow.png",15,2)}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{side:t.sideIsShow},attrs:{id:"bodyCon"}},[s("div",{attrs:{id:"sidebar"}},[s("div",{staticClass:"logoCon"},[s("a",{on:{click:function(e){t.$goRoute("home")}}},[s("img",{staticClass:"sideLogo",attrs:{src:n("dLd/"),alt:"我的头像"}}),t._v(" "),s("p",{staticClass:"sideUserName"},[t._v(t._s(t.blogInfo.blogName))]),t._v(" "),s("p",{staticClass:"sideSubtitle"},[t._v(t._s(t.blogInfo.subtitle))])])]),t._v(" "),s("ul",{staticClass:"sideNav"},t._l(t.navLists,function(e){return s("li",{staticClass:"navList",on:{click:function(e){t.sideIsShowFn("navList")}}},[s("a",{on:{click:function(n){t.$goRoute(e.route)}}},[t._v(t._s(e.text))])])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sideIsShow,expression:"sideIsShow"}],attrs:{id:"sidebar-mask"},on:{click:function(e){t.sideIsShowFn()}}}),t._v(" "),s("div",{attrs:{id:"header"}},[s("img",{staticClass:"headerLogo",attrs:{src:n("dLd/"),alt:""},on:{click:function(e){t.sideIsShowFn()}}}),t._v(" "),s("p",{staticClass:"headerUserName"},[s("a",{on:{click:function(e){t.$goRoute("home")}}},[t._v(t._s(t.blogInfo.blogName))])])]),t._v(" "),s("div",{attrs:{id:"main"}},[s("router-view")],1)])},staticRenderFns:[]},c=n("Mw9A")(o,l,!1,function(t){n("aWym")},null,null).exports,r=n("zO6J"),u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("ul",t._l(t.noteList,function(e){return n("li",{staticClass:"blogItem"},[n("h2",{staticClass:"blogTitle"},[t._v(t._s(e.caption))]),t._v(" "),n("span",{staticClass:"blogUpTime"},[t._v(t._s(e.updatetime))]),t._v(" "),n("p",{staticClass:"blogIntro"},[t._v(t._s(e.intro))]),t._v(" "),n("a",{staticClass:"blogDetail",attrs:{target:"_blank",href:e.url}},[t._v("阅读全文»")])])}))])},staticRenderFns:[]},h=n("Mw9A")({name:"home",data:function(){return{home:"这是主页"}},computed:{noteList:function(){return this.$store.state.noteList.notes}},components:{},mounted:function(){}},u,!1,function(t){n("VvJ2")},null,null).exports,m={name:"archives",data:function(){return{title:"归档"}},computed:{archivesData:function(){for(var t={},e=this.$store.state.noteList.notes||[],n=0;n<e.length;n++)e[n].arcTime=new Date(e[n].updatetime).getFullYear()+"年"+(new Date(e[n].updatetime).getMonth()+1)+"月",t[e[n].arcTime]?t[e[n].arcTime].arcData.push({archive:e[n].arcTime,caption:e[n].caption,updatetime:e[n].updatetime,url:e[n].url}):t[e[n].arcTime]={archive:e[n].arcTime,arcData:[{caption:e[n].caption,updatetime:e[n].updatetime,url:e[n].url}]};return t}},mounted:function(){}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h2",{staticClass:"conTitle"},[t._v("归档")]),t._v(" "),t._l(t.archivesData,function(e){return n("div",{staticClass:"archiveItem"},[n("h3",[t._v(t._s(e.archive)+" "),n("span",[t._v("("+t._s(e.arcData.length)+")")])]),t._v(" "),n("ul",t._l(e.arcData,function(e){return n("li",[n("a",{attrs:{target:"_blank",href:e.url}},[t._v(t._s(e.caption))]),t._v(" "),n("span",[t._v(t._s(e.updatetime))])])}))])})],2)},staticRenderFns:[]},d=n("Mw9A")(m,f,!1,function(t){n("L28u")},null,null).exports,p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h2",{staticClass:"conTitle"},[t._v("标签")]),t._v(" "),n("ul",{staticClass:"tagItem clearfix"},t._l(t.tagsData,function(e){return n("li",{on:{click:function(n){t.$goRoute("noteList",{noteListData:e})}}},[t._v(t._s(e.tagType)),n("span",[t._v("("+t._s(e.tagData.length)+")")])])}))])},staticRenderFns:[]},v=n("Mw9A")({name:"tags",data:function(){return{title:"标签"}},components:{},computed:{tagsData:function(){for(var t={},e=this.$store.state.noteList.notes||[],n=0;n<e.length;n++)t[e[n].type]?t[e[n].type].tagData.push(e[n]):t[e[n].type]={tagType:e[n].type,tagData:[e[n]]};return t}},mounted:function(){}},p,!1,function(t){n("vGyf")},null,null).exports,g={name:"links",data:function(){return{title:"导航",activeName:""}},components:{},computed:{linksData:function(){return this.$store.state.linksData.links||[]}},beforeCreate:function(){var t=this;console.log(22222222,this),t.$store.state.linksData.links||this.$http.get(i+"/data/linksData.json").then(function(e){t.$store.dispatch("linksDataSet",e.body),t.activeName=e.body.links[0].typeName}).catch(function(t){console.log(t)}),console.log(3333333,this)},mounted:function(){this.$store.state.linksData.links&&(this.activeName=this.$store.state.linksData.links[0].typeName)}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h2",{staticClass:"conTitle"},[t._v("前端导航")]),t._v(" "),n("el-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.linksData,function(e){return n("el-collapse-item",{key:e.id,attrs:{title:e.typeName,name:e.typeName}},[n("ul",{staticClass:"linkItems clearfix"},t._l(e.data,function(e){return n("li",{staticClass:"linkItem"},[n("a",{attrs:{target:"_blank",href:e.linkUrl}},[t._v(t._s(e.linkName))])])}))])}))],1)},staticRenderFns:[]},b=n("Mw9A")(g,_,!1,function(t){n("96GF")},null,null).exports,I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("h2",{staticClass:"text-center"},[this._v(this._s(this.title))])])},staticRenderFns:[]},k=n("Mw9A")({name:"about",data:function(){return{title:"关于"}},components:{},mounted:function(){}},I,!1,null,null,null).exports,C={name:"noteItem",data:function(){return{noteData:{}}},components:{},mounted:function(){console.log(this.$route),this.noteData=this.$route.params.noteData}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"noteItemCon",staticStyle:{height:"100%"}},[e("iframe",{attrs:{id:"noteItemIfr",src:this.noteData.content,frameborder:"0"}})])},staticRenderFns:[]},w=n("Mw9A")(C,D,!1,function(t){n("Jxg3")},null,null).exports,x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h2",{staticClass:"title"},[t._v("标签"),n("span",[t._v(t._s(t.noteListData.tagType))]),t._v("下的文章")]),t._v(" "),n("ul",t._l(t.noteListData.tagData,function(e){return n("li",{staticClass:"blogItem"},[n("h2",{staticClass:"blogTitle"},[t._v(t._s(e.caption))]),t._v(" "),n("span",{staticClass:"blogUpTime"},[t._v(t._s(e.updatetime))]),t._v(" "),n("p",{staticClass:"blogIntro"},[t._v(t._s(e.intro))]),t._v(" "),n("a",{staticClass:"blogDetail",attrs:{target:"_blank",href:e.url}},[t._v("阅读全文»")])])}))])},staticRenderFns:[]},y=n("Mw9A")({name:"noteList",data:function(){return{noteListData:{}}},components:{},mounted:function(){this.noteListData=this.$route.params.noteListData}},x,!1,function(t){n("RlcN")},null,null).exports;a.default.use(r.a);var L=new r.a({mode:"history",routes:[{path:"/",name:"home",component:h},{path:"/home",name:"home",component:h},{path:"/archives",name:"archives",component:d},{path:"/tags",name:"tags",component:v},{path:"/links",name:"links",component:b},{path:"/about",name:"about",component:k},{path:"/noteItem",name:"noteItem",component:w},{path:"/noteList",name:"noteList",component:y}]}),S=(n("c3k3"),n("i9nl")),$=n("foln"),M=n("9rMa");a.default.use(S.Collapse),a.default.use(S.CollapseItem),a.default.use($.a),a.default.use(M.a),a.default.config.productionTip=!1,a.default.prototype.$goRoute=function(t,e){console.log(this.$router,e),this.$router.push({name:t,params:e})};var N=new M.a.Store({state:{blogInfo:{},noteList:{},linksData:{}},mutations:{blogsInfoSet:function(t,e){t.blogInfo=e},noteListSet:function(t,e){t.noteList=e},linksDataSet:function(t,e){t.linksData=e}},actions:{blogsInfoSet:function(t,e){t.commit("blogsInfoSet",e)},noteListSet:function(t,e){t.commit("noteListSet",e)},linksDataSet:function(t,e){t.commit("linksDataSet",e)}}});new a.default({el:"#app",store:N,router:L,render:function(t){return t(c)}})},RlcN:function(t,e){},VvJ2:function(t,e){},aWym:function(t,e){},c3k3:function(t,e){},"dLd/":function(t,e,n){t.exports=n.p+"static/img/logo.cc999eb.png"},vGyf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3b73d95815e74ce52bc7.js.map