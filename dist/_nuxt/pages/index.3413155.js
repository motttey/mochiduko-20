(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{331:function(t,e,n){var content=n(351);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("357c3ec0",content,!0,{sourceMap:!1})},332:function(t,e,n){var content=n(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("6107e316",content,!0,{sourceMap:!1})},333:function(t,e,n){var content=n(380);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("7d93f87c",content,!0,{sourceMap:!1})},338:function(t,e,n){"use strict";n.r(e);n(17),n(18),n(4),n(41),n(42),n(76);var r=n(24),o=(n(26),n(335)),c=n(358),l=n(397),d={data:function(){return{tagName:"",tags:[],target_illust:{title:"dora1",date:"20200718",tags_text:"#doraemon",src:"/mochiduko-20/doraemon-namecard.webp",url:"https://www.pixiv.net/users/415546",flex:12},canvas_settings:{canvas_width:1200,canvas_height:650,canvas_offset_x:0,canvas_offset_y:-50,box_size:40,image_max:200},api_url:"https://mochiduko-api.netlify.app/",pixiv_embed:"http://embed.pixiv.net/decorate.php",pixiv_artwork:"https://www.pixiv.net/artworks/",axes:["tsne-X","tsne-Y","tsne-Z"],mousePosition:[],target_images:[],renderer:new Object,canvas:new Object,scene:new o.j,camera:new Object,controls:new Object,MOUNTED:!1,INTERSECTED:!1}},watch:{mousePosition:function(t){t&&this.selectImage(t)}},mounted:function(){this.renderer=new o.p({alpha:!0}),this.canvas=this.$refs.canvas_holder,this.canvas_settings.canvas_width=this.canvas.clientWidth,this.canvas.appendChild(this.renderer.domElement),this.renderer.setSize(this.canvas_settings.canvas_width,this.canvas_settings.canvas_height),this.camera=new o.e(45,this.canvas_settings.canvas_width/this.canvas_settings.canvas_height,.5,1e3),this.controls=new c.a(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1,this.controls.dampingFactor=.25,this.controls.enableZoom=!0,this.renderer.setSize(this.canvas_settings.canvas_width,this.canvas_settings.canvas_height),this.renderer.setClearColor(0,0),this.renderer.clear(),this.drawScatter(),this.renderScene(),this.MOUNTED=!0},methods:{v:function(t,e,n){return new o.o(t,e,n)},renderScene:function(){requestAnimationFrame(this.renderScene),this.controls.update(),this.renderer.render(this.scene,this.camera)},setTargetImageProperties:function(t){this.target_illust.src=this.pixiv_embed+"?illust_id="+t.id+"&mode=sns-automator",this.target_illust.title=t.title,this.target_illust.date=t.date,this.target_illust.tags_text=t.tags.map((function(t){return"#"+t.name})).join(" "),this.target_illust.url=this.pixiv_artwork+t.id},calcMousePositionInCanvas:function(t){var e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft-Math.floor(this.canvas.offsetLeft),n=t.clientY+document.body.scrollTop+document.documentElement.scrollTop-Math.floor(this.canvas.offsetTop);return[e=(e+this.canvas_settings.canvas_offset_x)/this.canvas_settings.canvas_width*2-1,n=-(n+this.canvas_settings.canvas_offset_y)/this.canvas_settings.canvas_height*2+1]},onDocumentMouseMove:function(t){this.mousePosition=this.calcMousePositionInCanvas(t)},onTouch:function(t){t.touches&&t.touches.length>0?this.mousePosition=this.calcMousePositionInCanvas(t.touches[0]):t.changedTouches&&t.changedTouches.length>0&&(this.mousePosition=this.calcMousePositionInCanvas(t.changedTouches[0]))},selectImage:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,l,d,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=new o.i,c=new o.n(t[0],t[1]),r.setFromCamera(c,e.camera),l=e.scene.children[0].children,!((d=r.intersectObjects(l.slice(0,l.length-1),!0).filter((function(t){return t.object.name&&t.object.visible}))).length>0)){n.next=11;break}if(0!==(h=e.target_images.filter((function(img){return img.id==d[0].object.name}))).length){n.next=9;break}return n.abrupt("return");case 9:return n.next=11,e.setTargetImageProperties(h[0]);case 11:case"end":return n.stop()}}),n)})))()},onResize:function(){if(this.MOUNTED){var t=this.canvas.clientWidth,e=this.canvas_settings.canvas_height;this.renderer.setSize(this.canvas.clientWidth,this.canvas_settings.canvas_height),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}},filterImage:function(){var t=this,e=this.scene.children[0].children;if(0!==this.tags.length){var n=this.target_images.filter((function(image){return image.tags.some((function(e){return t.tags.includes(e.name)}))})).map((function(image){return image.id.toString()}));e.forEach((function(t){t.visible=!!n.includes(t.name)}))}else e.forEach((function(t){return t.visible=!0}))},addNewTag:function(){this.tags.includes(this.tagName)||(this.tags.push(this.tagName),this.tagName="",this.filterImage())},removeTag:function(t){this.tags.splice(t,1),this.filterImage()},drawScatter:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,d,h,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new o.d,r=t.canvas_settings.box_size,c=t.v,t.scene.add(n),d={},h=t.axes,v=t.api_url,e.next=9,t.$axios.$get(v+"each_illusts.json").then((function(data){t.target_images=data.slice(0,t.canvas_settings.image_max),h.forEach((function(e,i){d[e]=[Math.max.apply(Math,t.target_images.map((function(t){return t[e]}))),Math.min.apply(Math,t.target_images.map((function(t){return t[e]})))]})),t.target_images.forEach((function(t){var e=new o.m;e.setCrossOrigin("anonymous"),e.load(v+"thumbs/"+t.id+".webp",(function(e){var v=new o.g({color:16777215,size:20,transparent:!0,map:e}),m=h.map((function(t){return Object(l.a)().domain(d[t]).range([-r,r])})),f=[],_=m[0](t["tsne-X"]),w=m[1](t["tsne-Y"]),x=m[2](t["tsne-Z"]);f.push(c(_,w,x));var C=(new o.a).setFromPoints(f),k=new o.f(C,v);C.name=t.id.toString(),k.name=t.id.toString(),n.add(k)}))}))})).catch((function(t){console.log("response error",t)}));case 9:t.setTargetImageProperties(t.target_images[0]),t.renderer.setSize(t.canvas_settings.canvas_width,t.canvas_settings.canvas_height),t.renderer.setViewport(-1*t.canvas_settings.canvas_offset_x,0,t.canvas_settings.canvas_width,t.canvas_settings.canvas_height),t.controls.update(),t.renderer.render(t.scene,t.camera),t.camera.position.set(100,100,100);case 15:case"end":return e.stop()}}),e)})))()}}},h=(n(359),n(67)),v=n(91),m=n.n(v),f=n(323),_=n(334),w=n(330),x=n(392),C=n(393),k=n(324),y=n(117),V=n(394),T=n(326),j=n(398),S=n(376),I=n.n(S),N=n(148),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"",id:"Gallery"}},[n("h1",[t._v("Gallery")]),t._v(" "),n("h3",[t._v("これまでに描いたイラストなどです. ")]),t._v(" "),n("v-row",{staticClass:"mb-6",attrs:{align:"center"}},[n("v-col",{attrs:{sm:"8",cols:"12"}},[n("div",{staticClass:"d-flex flex-row align-baseline"},[n("v-text-field",{staticClass:"mb-6 mr-6",attrs:{"hide-details":"","single-line":"",label:"Input Tag Name"},on:{submit:function(t){t.preventDefault()}},model:{value:t.tagName,callback:function(e){t.tagName=e},expression:"tagName"}}),t._v(" "),n("v-btn",{attrs:{color:"white",elevation:"1",outlined:""},on:{click:function(e){return t.addNewTag()}}},[t._v("\n          Filter\n        ")])],1),t._v(" "),t._l(t.tags,(function(e,r){return n("v-chip",{key:e,attrs:{filter:"",outlined:"",close:""},on:{"click:close":function(e){return t.removeTag(r)}}},[t._v("\n        "+t._s(e)+"\n      ")])}))],2)],1),t._v(" "),n("v-row",{staticClass:"mb-6",attrs:{align:"center"}},[n("v-col",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],attrs:{sm:"8",cols:"12"}},[n("div",{ref:"canvas_holder",attrs:{id:"canvas_holder"},on:{mousemove:function(e){return t.onDocumentMouseMove(e)},click:function(e){return t.onTouch(e)},touchend:function(e){return t.onTouch(e)}}})]),t._v(" "),n("v-col",{staticClass:"mx-auto",attrs:{sm:"4",cols:"8"}},[n("v-card",{attrs:{id:"target_image"}},[n("a",{attrs:{href:t.target_illust.url,target:"_blank"}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:t.target_illust.src,"aspect-ratio":"1"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer")],1),t._v(" "),n("v-card-text",[n("h2",[t._v(t._s(t.target_illust.title))]),t._v(" "),n("p",[t._v(t._s(t.target_illust.date))]),t._v(" "),n("p",[t._v(t._s(t.target_illust.tags_text))])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:f.a,VCard:_.a,VCardActions:w.a,VCardText:w.b,VChip:x.a,VCol:C.a,VContainer:k.a,VImg:y.a,VRow:V.a,VSpacer:T.a,VTextField:j.a}),I()(component,{Resize:N.a})},339:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{model:null,maincard:new Object,cards:[{title:"Perfect Blue",year:2017,src:"/mochiduko-20/perfectblue.jpg",url:"https://motitago.booth.pm/items/746036",description:"青色のイラストをメインにしたイラスト集です. C93にて頒布. B5 フルカラー / 32ページ (本文28ページ)",flex:6},{title:"DORA THE PAST",year:2016,src:"/mochiduko-20/dorathepast.jpg",url:"https://www.deviantart.com/motttey",description:"[SOLD OUT] 2008-2016あたりに描いてきたドラえもん関連イラストの総集編 + 描き下しイラストな画集っぽい感じの本です. C91にて頒布 B5 96ページ, 収録作品数189",flex:6},{title:"パラレルソレイユ 9",year:2017,src:"/mochiduko-20/parallel9.jpg",url:"https://booth.pm/ja/items/723395",description:"ひぐちあき様主催の藤子ファンの藤子ファンによる藤子ファンのための同人誌です. 表紙イラストを担当し, 喪黒さんを描かせていただきました. C93頒布. カラーページ込みA5 102ページ",flex:6},{title:"モチヅ庫 10th Special Site",src:"/mochiduko-20/10th.png",url:"https://motttey.github.io/10th/",description:"pixivに登録して10年たった記念に作ったサイトです. pixivのイラストをタグで検索できたり, 投稿数の統計とかもみれます. お祝いのコメントも入力できるのでお待ちしてます. ",flex:6},{title:"TBD",src:"/mochiduko-20/doraemon-namecard.webp",url:"https://www.deviantart.com/motttey",description:"hogehoge",flex:6}]}},mounted:function(){this.maincard=this.cards[0]},methods:{onChange:function(t){this.maincard=this.cards[t]}}},o=n(67),c=n(91),l=n.n(c),d=n(334),h=n(330),v=n(393),m=n(324),f=n(117),_=n(132),w=n(394),x=n(34),C=n(395),k=n(401),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"",id:"Works"}},[n("h1",[t._v("Works")]),t._v(" "),n("h3",[t._v("同人誌とかをまとめてポートフォリオにしたいですね。")]),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-sheet",{attrs:{color:"transparent",elevation:"10"}},[n("v-slide-group",{staticClass:"pa-4",attrs:{"show-arrows":"","center-active":""},on:{change:t.onChange},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.cards,(function(e){return n("v-slide-item",{key:e.title,staticClass:"mx-3",scopedSlots:t._u([{key:"default",fn:function(r){r.active;var o=r.toggle;return[n("v-card",{attrs:{flat:"",hover:""},on:{click:o}},[n("v-img",{staticClass:"grey lighten-4",attrs:{src:e.src,"lazy-src":e.src,"max-width":"200px","aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.5), rgba(0,0,0,.1)"}},[[n("v-card-text",[n("h2",[t._v(t._s(e.title))])])]],2)],1)]}}],null,!0)})})),1)],1)],1)],1),t._v(" "),n("v-row",{staticClass:"my-6",attrs:{dense:""}},[n("v-col",{attrs:{cols:"12",sm:"6","offset-sm":"3"}},[n("v-card",{attrs:{flat:""}},[n("a",{attrs:{href:t.maincard.url,target:"_blank"}},[n("v-img",{staticClass:"grey lighten-2",attrs:{src:t.maincard.src,"lazy-src":t.maincard.src,"aspect-ratio":"auto","max-height":"600px",gradient:"to bottom, rgba(0,0,0,.5), rgba(0,0,0,.1)"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1),t._v(" "),n("v-card-text",{staticClass:"text--primary"},[n("div",{staticClass:"my-2"},[n("a",{attrs:{href:t.maincard.url,target:"_blank"}},[n("h1",[t._v(t._s(t.maincard.title))])])]),t._v(" "),n("div",[n("h3",[t._v(t._s(t.maincard.year))])]),t._v(" "),n("div",[t._v(t._s(t.maincard.description))])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardText:h.b,VCol:v.a,VContainer:m.a,VImg:f.a,VProgressCircular:_.a,VRow:w.a,VSheet:x.a,VSlideGroup:C.a,VSlideItem:k.a})},340:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{cards:[{title:"pixiv",src:"http://embed.pixiv.net/decorate.php?illust_id=56266129",url:"https://www.pixiv.net/users/415546",flex:12},{title:"deviantART",src:"http://embed.pixiv.net/decorate.php?illust_id=49554002",url:"https://www.deviantart.com/motttey",flex:6},{title:"weibo",src:"http://embed.pixiv.net/decorate.php?illust_id=56608401",url:"https://weibo.com/7310121728",flex:6},{title:"twitter",src:"http://embed.pixiv.net/decorate.php?illust_id=79403135",url:"https://twitter.com/mt_tg",flex:12},{title:"Instagram",src:"http://embed.pixiv.net/decorate.php?illust_id=49339965",url:"https://www.instagram.com/tagosaku_mochiduki",flex:6},{title:"Blog",src:"/pixiv/decorate.php?illust_id=83975466",url:"http://motttey.hatenablog.com/",flex:6}]}}},o=(n(379),n(67)),c=n(91),l=n.n(c),d=n(323),h=n(334),v=n(393),m=n(324),f=n(402),_=n(117),w=n(394),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"",id:"LinkCards"}},[n("h1",[t._v("Links")]),t._v(" "),n("h3",[t._v("各種SNSのアカウントです。")]),t._v(" "),n("v-row",{staticClass:"mb-6",attrs:{dense:""}},[n("v-col",{attrs:{cols:"12",sm:"8","offset-sm":"2"}},[n("v-container",{attrs:{fluid:""}},[n("v-row",t._l(t.cards,(function(e){return n("v-col",{key:e.tditle,attrs:{cols:e.flex}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[n("v-card",{class:{"on-hover":o}},[n("a",{attrs:{href:e.url,target:"_blank"}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,elevation:o?12:2,position:"50% 80%",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)",height:"250px","aspect-ratio":"1"}},[n("v-btn",{attrs:{text:"",color:"#0288D1"}},[n("h2",[t._v(t._s(e.title))])])],1)],1)])]}}],null,!0)})],1)})),1)],1)],1)],1)],1)}),[],!1,null,"2d511a81",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCol:v.a,VContainer:m.a,VHover:f.a,VImg:_.a,VRow:w.a})},341:function(t,e,n){"use strict";n.r(e);n(350);var r=n(67),o=n(91),c=n.n(o),l=n(334),d=n(330),h=n(349),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-card",{attrs:{id:"NameCard","dark:":"",false:""}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{attrs:{id:"card-main"}},[n("h1",{staticClass:"mb-3"},[t._v("Tagosaku Mochiduki")]),t._v(" "),n("h4",{staticClass:"mb-0"},[t._v("Hyper Doraemon Creator")])]),t._v(" "),n("div",{attrs:{id:"card-links"}},[n("h5",[n("a",{attrs:{href:"https://twitter.com/mt_tg"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}),t._v("\n              @mt_tg\n            ")],1)]),t._v(" "),n("h5",[n("a",{attrs:{href:"https://www.pixiv.net/users/415546"}},[n("font-awesome-icon",{attrs:{icon:["fas","image"]}}),t._v("\n              https://www.pixiv.net/users/415546\n            ")],1)]),t._v(" "),n("h5",[n("a",{attrs:{href:"https://motttey.github.io/"}},[n("font-awesome-icon",{attrs:{icon:["fas","home"]}}),t._v("\n              https://motttey.github.io/\n            ")],1)]),t._v(" "),n("h5",[n("font-awesome-icon",{attrs:{icon:["fas","envelope"]}}),t._v("\n            motitago@gmail.com\n          ")],1)]),t._v(" "),n("img",{staticClass:"mb-5",attrs:{id:"profile-img",src:"/mochiduko-20/doraemon-namecard.webp",alt:"Doraemon"}})])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:l.a,VCardTitle:d.c,VLayout:h.a})},342:function(t,e,n){"use strict";n.r(e);var r=n(67),o=n(91),c=n.n(o),l=n(390),d=n(391),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-timeline",[n("v-timeline-item",{attrs:{color:"#0288D1"}},[t._v("1995: Born in Toyama, Japan. ")]),t._v(" "),n("v-timeline-item",{staticClass:"text-right",attrs:{color:"#0288D1"}},[t._v("2008: Start drawing")]),t._v(" "),n("v-timeline-item",{attrs:{color:"#0288D1"}},[t._v("2009: Start twitter")]),t._v(" "),n("v-timeline-item",{staticClass:"text-right",attrs:{color:"#0288D1"}},[t._v("2020: Open this site")]),t._v(" "),n("v-timeline-item",{attrs:{color:"#ffffff"}},[t._v("2021: Currently, I'm living in Kanagawa, Japan. And I'm working as Software Engineer. ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VTimeline:l.a,VTimelineItem:d.a})},343:function(t,e,n){"use strict";n.r(e);var r=n(67),o=n(91),c=n.n(o),l=n(393),d=n(324),h=n(394),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"",id:"ContactInfo"}},[n("v-row",{staticClass:"mb-6",attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("連絡先")]),t._v(" "),n("p",[t._v("お仕事のご依頼や感想は、 motitago(at)gmail.com までよろしくお願いします。")]),t._v(" "),n("p",[t._v("もしイラストなど気に入って頂けた場合には、"),n("a",{attrs:{href:"https://www.amazon.jp/hz/wishlist/ls/1YEAX8DRN0GWO?ref_=wl_share",target:"_blank"}},[t._v("ほしいものリスト")]),t._v("から何か送っていただけるとすごい喜びます。")])])],1),t._v(" "),n("v-row",{staticClass:"mb-6",attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("リンク")]),t._v(" "),n("p",[t._v("相互リンク募集中です。")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:l.a,VContainer:d.a,VRow:h.a})},350:function(t,e,n){"use strict";var r=n(331);n.n(r).a},351:function(t,e,n){(e=n(10)(!1)).push([t.i,'#card-links a{text-decoration:none;color:#263238}#profile-img{height:100%;top:0;left:35%;z-index:-1;opacity:.9;position:absolute}#card-main{top:12.5%}#card-links,#card-main{position:absolute;left:5%}#card-links{bottom:10%}#NameCard>div{height:550px;width:910px;box-shadow:0 2.5rem 2rem -2rem hsl(200 50% 20%/40%);color:#263238;background:none}#NameCard,#NameCard>div{overflow:hidden;z-index:1}#NameCard{margin:20px 0;position:relative;width:100%;max-height:600px;max-width:910px;background:#e3f2fd}#NameCard:before{content:"";position:absolute;transform-origin:center;transform:rotate(-64deg);width:720px;height:calc(20% + 360px);top:20%;left:52.5%;z-index:0;background:linear-gradient(45deg,#0288d1,#fafafa)}@media (max-width:600px){#card-main{height:100px;top:5%}#card-main h1{font-size:2rem}#card-main h4{font-size:1.3rem}#card-links h5{font-size:1rem}#profile-img{height:80%;left:20%;top:20%}#card-links{bottom:5%}}',""]),t.exports=e},359:function(t,e,n){"use strict";var r=n(332);n.n(r).a},360:function(t,e,n){(e=n(10)(!1)).push([t.i,"#canvas_holder{width:100%}#target_image{top:0;background-color:none}",""]),t.exports=e},379:function(t,e,n){"use strict";var r=n(333);n.n(r).a},380:function(t,e,n){(e=n(10)(!1)).push([t.i,".v-card[data-v-2d511a81]{transition:opacity .4s ease-in-out}.v-card[data-v-2d511a81]:not(.on-hover){opacity:.6}",""]),t.exports=e},399:function(t,e,n){"use strict";n.r(e);var r=n(341),o=n(342),c=n(338),l=n(339),d=n(340),h=n(343),v={components:{NameCard:r.default,TimeLine:o.default,LinkCards:d.default,Gallery:c.default,Works:l.default,ContactInfo:h.default}},m=n(67),f=n(91),_=n.n(f),w=n(396),x=n(348),C=n(349),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("name-card"),t._v(" "),n("v-divider"),t._v(" "),n("time-line"),t._v(" "),n("v-divider"),t._v(" "),n("gallery"),t._v(" "),n("v-divider"),t._v(" "),n("works"),t._v(" "),n("v-divider"),t._v(" "),n("link-cards"),t._v(" "),n("v-divider"),t._v(" "),n("contact-info")],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{NameCard:n(341).default,TimeLine:n(342).default,Gallery:n(338).default,Works:n(339).default,LinkCards:n(340).default,ContactInfo:n(343).default}),_()(component,{VDivider:w.a,VFlex:x.a,VLayout:C.a})}}]);