(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6],{364:function(t,e,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2dbc0c12",content,!0,{sourceMap:!1})},365:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("3553b576",content,!0,{sourceMap:!1})},366:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("594e89bd",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n(364)},377:function(t,e,n){var r=n(12)((function(i){return i[1]}));r.push([t.i,'#card-links a{text-decoration:none;color:#263238}#profile-img{height:100%;top:0;left:35%;z-index:-1;opacity:.9;position:absolute}#card-main{top:12.5%}#card-links,#card-main{position:absolute;left:5%}#card-links{bottom:10%}#NameCard>div{height:550px;width:910px;box-shadow:0 2.5rem 2rem -2rem hsl(200 50% 20%/40%);color:#263238;background:none}#NameCard,#NameCard>div{overflow:hidden;z-index:1}#NameCard{margin:20px 0;position:relative;width:100%;max-height:600px;max-width:910px;background:#e3f2fd}#NameCard:before{content:"";position:absolute;transform-origin:center;transform:rotate(-64deg);width:720px;height:calc(20% + 360px);top:20%;left:52.5%;z-index:0;background:linear-gradient(45deg,#0288d1,#fafafa)}@media (max-width:600px){#card-main{height:100px;top:5%}#card-main h1{font-size:2rem}#card-main h4{font-size:1.3rem}#card-links h5{font-size:1rem}#profile-img{height:80%;left:20%;top:20%}#card-links{bottom:5%}}',""]),r.locals={},t.exports=r},381:function(t,e,n){"use strict";n(365)},382:function(t,e,n){var r=n(12)((function(i){return i[1]}));r.push([t.i,"@media (min-width:480px){#canvas_holder{width:100%}}@media (max-width:480px){#canvas_holder{width:90%;margin:5%}}#target_image{top:0;background-color:none}",""]),r.locals={},t.exports=r},386:function(t,e,n){"use strict";n(366)},387:function(t,e,n){var r=n(12)((function(i){return i[1]}));r.push([t.i,".v-card[data-v-65873e4a]{transition:opacity .4s ease-in-out}.v-card[data-v-65873e4a]:not(.on-hover){opacity:.6}",""]),r.locals={},t.exports=r},390:function(t,e,n){"use strict";n.r(e);var r=n(332),o=n(351),c=n(348),l=n(399),d=n(363),h=n(344),m=n(123),f=n(362),v=n(342),_=n(439),w=n(159),x=n(24),k=(n(82),n(48),n(25),n(6),n(34),n(54),n(44),n(21),n(67),n(68),n(380)),C=n(400),y=n(445),j={data:function(){return{tagName:"",tags:[],target_illust:{title:"dora1",date:"20200718",tags_text:"#doraemon",src:"/mochiduko-20/doraemon-namecard.webp",url:"https://www.pixiv.net/users/415546",flex:12},canvas_settings:{canvas_width:1200,canvas_height:650,canvas_offset_x:0,canvas_offset_y:-50,box_size:40,image_max:200},api_url:"https://mochiduko-api.netlify.app/",pixiv_embed:"http://embed.pixiv.net/decorate.php",pixiv_artwork:"https://www.pixiv.net/artworks/",axes:["tsne-X","tsne-Y","tsne-Z"],mousePosition:[],target_images:[],renderer:new Object,canvas:new Object,scene:new k.j,camera:new Object,controls:new Object,MOUNTED:!1,INTERSECTED:!1}},watch:{mousePosition:function(t){t&&this.selectImage(t)}},mounted:function(){this.renderer=new k.p({alpha:!0}),this.canvas=this.$refs.canvas_holder,this.canvas_settings.canvas_width=this.canvas.clientWidth,this.canvas.appendChild(this.renderer.domElement),this.renderer.setSize(this.canvas_settings.canvas_width,this.canvas_settings.canvas_height),this.camera=new k.e(45,this.canvas_settings.canvas_width/this.canvas_settings.canvas_height,.5,1e3),this.controls=new C.a(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1,this.controls.dampingFactor=.25,this.controls.enableZoom=!0,this.renderer.setSize(this.canvas_settings.canvas_width,this.canvas_settings.canvas_height),this.renderer.setClearColor(0,0),this.renderer.clear(),this.drawScatter(),this.renderScene(),this.MOUNTED=!0},methods:{v:function(t,e,n){return new k.o(t,e,n)},renderScene:function(){requestAnimationFrame(this.renderScene),this.controls.update(),this.renderer.render(this.scene,this.camera)},setTargetImageProperties:function(t){this.target_illust.src=this.pixiv_embed+"?illust_id="+t.id+"&mode=sns-automator",this.target_illust.title=t.title,this.target_illust.date=t.date,this.target_illust.tags_text=t.tags.map((function(t){return"#"+t.name})).join(" "),this.target_illust.url=this.pixiv_artwork+t.id},calcMousePositionInCanvas:function(t){var e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft-Math.floor(this.canvas.offsetLeft),n=t.clientY+document.body.scrollTop+document.documentElement.scrollTop-Math.floor(this.canvas.offsetTop);return[e=(e+this.canvas_settings.canvas_offset_x)/this.canvas_settings.canvas_width*2-1,n=-(n+this.canvas_settings.canvas_offset_y)/this.canvas_settings.canvas_height*2+1]},onDocumentMouseMove:function(t){this.mousePosition=this.calcMousePositionInCanvas(t)},onTouch:function(t){t.touches&&t.touches.length>0?this.mousePosition=this.calcMousePositionInCanvas(t.touches[0]):t.changedTouches&&t.changedTouches.length>0&&(this.mousePosition=this.calcMousePositionInCanvas(t.changedTouches[0]))},selectImage:function(t){var e=this;return Object(x.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=new k.i,o=new k.n(t[0],t[1]),r.setFromCamera(o,e.camera),c=e.scene.children[0].children,!((l=r.intersectObjects(c.slice(0,c.length-1),!0).filter((function(t){return t.object.name&&t.object.visible}))).length>0)){n.next=11;break}if(0!==(d=e.target_images.filter((function(img){return img.id==l[0].object.name}))).length){n.next=9;break}return n.abrupt("return");case 9:return n.next=11,e.setTargetImageProperties(d[0]);case 11:case"end":return n.stop()}}),n)})))()},onResize:function(){if(this.MOUNTED){var t=this.canvas.clientWidth,e=this.canvas_settings.canvas_height;this.renderer.setSize(this.canvas.clientWidth,this.canvas_settings.canvas_height),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}},filterImage:function(){var t=this,e=this.scene.children[0].children;if(0!==this.tags.length){var n=this.target_images.filter((function(image){return image.tags.some((function(e){return t.tags.includes(e.name)}))})).map((function(image){return image.id.toString()}));e.forEach((function(t){t.visible=!!n.includes(t.name)}))}else e.forEach((function(t){return t.visible=!0}))},addNewTag:function(){this.tags.includes(this.tagName)||(this.tags.push(this.tagName),this.tagName="",this.filterImage())},removeTag:function(t){this.tags.splice(t,1),this.filterImage()},drawScatter:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new k.d,r=t.canvas_settings.box_size,o=t.v,t.scene.add(n),c={},l=t.axes,d=t.api_url,e.next=9,t.$axios.$get(d+"each_illusts.json").then((function(data){t.target_images=data.slice(0,t.canvas_settings.image_max),l.forEach((function(e,i){c[e]=[Math.max.apply(Math,t.target_images.map((function(t){return t[e]}))),Math.min.apply(Math,t.target_images.map((function(t){return t[e]})))]})),t.target_images.forEach((function(t){var e=new k.m;e.setCrossOrigin("anonymous"),e.load(d+"thumbs/"+t.id+".webp",(function(e){var d=new k.g({color:16777215,size:20,transparent:!0,map:e}),h=l.map((function(t){return Object(y.a)().domain(c[t]).range([-r,r])})),m=[],f=h[0](t["tsne-X"]),v=h[1](t["tsne-Y"]),_=h[2](t["tsne-Z"]);m.push(o(f,v,_));var w=(new k.a).setFromPoints(m),x=new k.f(w,d);w.name=t.id.toString(),x.name=t.id.toString(),n.add(x)}))}))})).catch((function(t){console.log("response error",t)}));case 9:t.setTargetImageProperties(t.target_images[0]),t.renderer.setSize(t.canvas_settings.canvas_width,t.canvas_settings.canvas_height),t.renderer.setViewport(-1*t.canvas_settings.canvas_offset_x,0,t.canvas_settings.canvas_width,t.canvas_settings.canvas_height),t.controls.update(),t.renderer.render(t.scene,t.camera),t.camera.position.set(100,100,100);case 15:case"end":return e.stop()}}),e)})))()}}},T=(n(381),n(73)),component=Object(T.a)(j,(function(){var t=this,e=t._self._c;return e(h.a,{attrs:{fluid:"",id:"Gallery"}},[e("h1",[t._v("Gallery")]),t._v(" "),e("h3",[t._v("これまでに描いたイラストなどです. ")]),t._v(" "),e(f.a,{staticClass:"mb-6",attrs:{"align-center":""}},[e(d.a,{attrs:{sm:"8",cols:"12"}},[e("div",{staticClass:"d-flex flex-row align-baseline"},[e(_.a,{staticClass:"mb-6 mr-6",attrs:{"hide-details":"","single-line":"",label:"Input Tag Name"},on:{submit:function(t){t.preventDefault()}},model:{value:t.tagName,callback:function(e){t.tagName=e},expression:"tagName"}}),t._v(" "),e(r.a,{attrs:{color:"white",elevation:"1",outlined:""},on:{click:function(e){return t.addNewTag()}}},[t._v("\n          Filter\n        ")])],1),t._v(" "),t._l(t.tags,(function(n,r){return e(l.a,{key:n,attrs:{filter:"",outlined:"",close:""},on:{"click:close":function(e){return t.removeTag(r)}}},[t._v("\n        "+t._s(n)+"\n      ")])}))],2)],1),t._v(" "),e(f.a,{staticClass:"mb-6",attrs:{"align-center":""}},[e(d.a,{directives:[{def:w.a,name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],attrs:{sm:"8",cols:"12"}},[e("div",{ref:"canvas_holder",attrs:{id:"canvas_holder"},on:{mousemove:function(e){return t.onDocumentMouseMove(e)},click:function(e){return t.onTouch(e)},touchend:function(e){return t.onTouch(e)}}})]),t._v(" "),e(d.a,{staticClass:"mx-auto",attrs:{sm:"4",cols:"8"}},[e(o.a,{attrs:{id:"target_image"}},[e("a",{attrs:{href:t.target_illust.url,target:"_blank"}},[e(m.a,{staticClass:"white--text align-end",attrs:{src:t.target_illust.src,"aspect-ratio":"1"}})],1),t._v(" "),e(c.a,[e(v.a)],1),t._v(" "),e(c.b,[e("h2",[t._v(t._s(t.target_illust.title))]),t._v(" "),e("p",[t._v(t._s(t.target_illust.date))]),t._v(" "),e("p",[t._v(t._s(t.target_illust.tags_text))])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},391:function(t,e,n){"use strict";n.r(e);var r=n(351),o=n(348),c=n(363),l=n(344),d=n(123),h=n(143),m=n(362),f=n(36),v=n(437),_=n(440),w={data:function(){return{model:null,maincard:new Object,cards:[{title:"THE BOOK OF CIRCLES",year:2022,src:"/mochiduko-20/bookofcircles.jpg",url:"https://www.pixiv.net/artworks/103332022",description:"2018-2022年に描いたドラえもんイラストメインにしたイラスト集です. C101にて頒布. B5 フルカラー / 36ページ (本文32ページ)",flex:6},{title:"Perfect Blue",year:2017,src:"/mochiduko-20/perfectblue.jpg",url:"https://www.pixiv.net/artworks/66256659",description:"青色のイラストをメインにしたイラスト集です. C93にて頒布. (C101で再販) B5 フルカラー / 32ページ (本文28ページ)",flex:6},{title:"DORA THE PAST",year:2016,src:"/mochiduko-20/dorathepast.jpg",url:"https://www.deviantart.com/motttey",description:"[SOLD OUT] 2008-2016あたりに描いてきたドラえもん関連イラストの総集編 + 描き下しイラストな画集っぽい感じの本です. C91にて頒布 B5 96ページ, 収録作品数189",flex:6},{title:"パラレルソレイユ 9",year:2017,src:"/mochiduko-20/parallel9.jpg",url:"https://booth.pm/ja/items/723395",description:"ひぐちあき様主催の藤子ファンの藤子ファンによる藤子ファンのための同人誌です. 表紙イラストを担当し, 喪黒さんを描かせていただきました. C93頒布. カラーページ込みA5 102ページ",flex:6},{title:"モチヅ庫 10th Special Site",src:"/mochiduko-20/10th.png",url:"https://motttey.github.io/10th/",description:"pixivに登録して10年たった記念に作ったサイトです. pixivのイラストをタグで検索できたり, 投稿数の統計とかもみれます. お祝いのコメントも入力できるのでお待ちしてます. ",flex:6},{title:"TBD",src:"/mochiduko-20/doraemon-namecard.webp",url:"https://www.deviantart.com/motttey",description:"hogehoge",flex:6}]}},mounted:function(){this.maincard=this.cards[0]},methods:{onChange:function(t){this.maincard=this.cards[t]}}},x=n(73),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{fluid:"",id:"Works"}},[e("h1",[t._v("Works")]),t._v(" "),e("h3",[t._v("同人誌とかをまとめてポートフォリオにしたいですね。")]),t._v(" "),e(m.a,[e(c.a,{attrs:{cols:"12",sm:"12"}},[e(f.a,{attrs:{color:"transparent",elevation:"10"}},[e(v.a,{staticClass:"pa-4",attrs:{"show-arrows":"","center-active":""},on:{change:t.onChange},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.cards,(function(n){return e(_.a,{key:n.title,staticClass:"mx-3",scopedSlots:t._u([{key:"default",fn:function(c){c.active;var l=c.toggle;return[e(r.a,{attrs:{flat:"",hover:""},on:{click:l}},[e(d.a,{staticClass:"grey lighten-4",attrs:{src:n.src,"lazy-src":n.src,"max-width":"200px","aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.5), rgba(0,0,0,.1)"}},[[e(o.b,[e("h2",[t._v(t._s(n.title))])])]],2)],1)]}}],null,!0)})})),1)],1)],1)],1),t._v(" "),e(m.a,{staticClass:"my-6",attrs:{dense:""}},[e(c.a,{attrs:{cols:"12",sm:"6","offset-sm":"3"}},[e(r.a,{attrs:{flat:""}},[e("a",{attrs:{href:t.maincard.url,target:"_blank"}},[e(d.a,{staticClass:"grey lighten-2",attrs:{src:t.maincard.src,"lazy-src":t.maincard.src,"aspect-ratio":"auto","max-height":"600px",gradient:"to bottom, rgba(0,0,0,.5), rgba(0,0,0,.1)"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e(m.a,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e(h.a,{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1),t._v(" "),e(o.b,{staticClass:"text--primary"},[e("div",{staticClass:"my-2"},[e("a",{attrs:{href:t.maincard.url,target:"_blank"}},[e("h1",[t._v(t._s(t.maincard.title))])])]),t._v(" "),e("div",[e("h3",[t._v(t._s(t.maincard.year))])]),t._v(" "),e("div",[t._v(t._s(t.maincard.description))])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,n){"use strict";n.r(e);var r=n(332),o=n(351),c=n(363),l=n(344),d=n(438),h=n(123),m=n(362),f={data:function(){return{cards:[{title:"pixiv",src:"http://embed.pixiv.net/decorate.php?illust_id=56266129",url:"https://www.pixiv.net/users/415546",flex:12},{title:"deviantART",src:"http://embed.pixiv.net/decorate.php?illust_id=49554002",url:"https://www.deviantart.com/motttey",flex:6},{title:"weibo",src:"http://embed.pixiv.net/decorate.php?illust_id=56608401",url:"https://weibo.com/7310121728",flex:6},{title:"twitter",src:"http://embed.pixiv.net/decorate.php?illust_id=79403135",url:"https://twitter.com/mt_tg",flex:12},{title:"Instagram",src:"http://embed.pixiv.net/decorate.php?illust_id=49339965",url:"https://www.instagram.com/tagosaku_mochiduki",flex:6},{title:"Blog",src:"http://embed.pixiv.net/decorate.php?illust_id=83975466",url:"http://motttey.hatenablog.com/",flex:6},{title:"Skeb",src:"http://embed.pixiv.net/decorate.php?illust_id=86992637",url:"https://skeb.jp/@mt_tg",flex:12}]}}},v=(n(386),n(73)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{fluid:"",id:"LinkCards"}},[e("h1",[t._v("Links")]),t._v(" "),e("h3",[t._v("各種SNSのアカウントです。")]),t._v(" "),e(m.a,{staticClass:"mb-6",attrs:{dense:""}},[e(c.a,{attrs:{cols:"12",sm:"8","offset-sm":"2"}},[e(l.a,{attrs:{fluid:""}},[e(m.a,t._l(t.cards,(function(n){return e(c.a,{key:n.tditle,attrs:{cols:n.flex}},[e(d.a,{scopedSlots:t._u([{key:"default",fn:function(c){var l=c.hover;return[e(o.a,{class:{"on-hover":l}},[e("a",{attrs:{href:n.url,target:"_blank"}},[e(h.a,{staticClass:"white--text align-end",attrs:{src:n.src,elevation:l?12:2,position:"50% 80%",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)",height:"250px","aspect-ratio":"1"}},[e(r.a,{attrs:{text:"",color:"#0288D1"}},[e("h2",[t._v(t._s(n.title))])])],1)],1)])]}}],null,!0)})],1)})),1)],1)],1)],1)],1)}),[],!1,null,"65873e4a",null);e.default=component.exports},393:function(t,e,n){"use strict";n.r(e);var r=n(351),o=n(348),c=n(367),l=(n(376),n(73)),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{column:"","justify-center":"","align-center":""}},[e(r.a,{attrs:{id:"NameCard","dark:":"",false:""}},[e(o.c,{attrs:{"primary-title":""}},[e("div",[e("div",{attrs:{id:"card-main"}},[e("h1",{staticClass:"mb-3"},[t._v("Tagosaku Mochiduki")]),t._v(" "),e("h4",{staticClass:"mb-0"},[t._v("Hyper Doraemon Creator")])]),t._v(" "),e("div",{attrs:{id:"card-links"}},[e("h5",[e("a",{attrs:{href:"https://twitter.com/mt_tg"}},[e("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}),t._v("\n              @mt_tg\n            ")],1)]),t._v(" "),e("h5",[e("a",{attrs:{href:"https://www.pixiv.net/users/415546"}},[e("font-awesome-icon",{attrs:{icon:["fas","image"]}}),t._v("\n              https://www.pixiv.net/users/415546\n            ")],1)]),t._v(" "),e("h5",[e("a",{attrs:{href:"https://motttey.github.io/"}},[e("font-awesome-icon",{attrs:{icon:["fas","home"]}}),t._v("\n              https://motttey.github.io/\n            ")],1)]),t._v(" "),e("h5",[e("font-awesome-icon",{attrs:{icon:["fas","envelope"]}}),t._v("\n            motitago@gmail.com\n          ")],1)]),t._v(" "),e("img",{staticClass:"mb-5",attrs:{id:"profile-img",src:"/mochiduko-20/doraemon-namecard.webp",alt:"Doraemon"}})])])],1)],1)}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,n){"use strict";n.r(e);var r=n(435),o=n(436),c=n(73),component=Object(c.a)({},(function(){var t=this,e=t._self._c;return e(r.a,[e(o.a,{attrs:{color:"#0288D1"}},[t._v("1995: Born in Toyama, Japan. ")]),t._v(" "),e(o.a,{staticClass:"text-right",attrs:{color:"#0288D1"}},[t._v("2008: Start drawing")]),t._v(" "),e(o.a,{attrs:{color:"#0288D1"}},[t._v("2009: Start twitter")]),t._v(" "),e(o.a,{staticClass:"text-right",attrs:{color:"#0288D1"}},[t._v("2020: Open this site")]),t._v(" "),e(o.a,{attrs:{color:"#ffffff"}},[t._v("2021: Currently, I'm living in Kanagawa, Japan. And I'm working as Software Engineer. ")])],1)}),[],!1,null,null,null);e.default=component.exports},395:function(t,e,n){"use strict";n.r(e);var r=n(363),o=n(344),c=n(362),l=n(73),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{fluid:"",id:"ContactInfo"}},[e(c.a,{staticClass:"mb-6",attrs:{dense:""}},[e(r.a,{attrs:{cols:"12"}},[e("h3",[t._v("連絡先")]),t._v(" "),e("p",[t._v("お仕事のご依頼や感想は、 motitago(at)gmail.com までよろしくお願いします。")]),t._v(" "),e("p",[t._v("もしイラストなど気に入って頂けた場合には、"),e("a",{attrs:{href:"https://www.amazon.jp/hz/wishlist/ls/1YEAX8DRN0GWO?ref_=wl_share",target:"_blank"}},[t._v("ほしいものリスト")]),t._v("から何か送っていただけるとすごい喜びます。")])])],1),t._v(" "),e(c.a,{staticClass:"mb-6",attrs:{dense:""}},[e(r.a,{attrs:{cols:"12"}},[e("h3",[t._v("リンク")]),t._v(" "),e("p",[t._v("相互リンク募集中です。")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports},449:function(t,e,n){"use strict";n.r(e);var r=n(372),o=n(371),c=n(367),l=n(393),d=n(394),h=n(390),m=n(391),f=n(392),v=n(395),_={components:{NameCard:l.default,TimeLine:d.default,LinkCards:f.default,Gallery:h.default,Works:m.default,ContactInfo:v.default}},w=n(73),component=Object(w.a)(_,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{column:"","justify-center":"","align-center":""}},[e(o.a,{attrs:{xs12:"",sm6:"",md6:""}},[e("name-card"),t._v(" "),e(r.a),t._v(" "),e("time-line"),t._v(" "),e(r.a),t._v(" "),e("gallery"),t._v(" "),e(r.a),t._v(" "),e("works"),t._v(" "),e(r.a),t._v(" "),e("link-cards"),t._v(" "),e(r.a),t._v(" "),e("contact-info")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NameCard:n(393).default,TimeLine:n(394).default,Gallery:n(390).default,Works:n(391).default,LinkCards:n(392).default,ContactInfo:n(395).default})}}]);