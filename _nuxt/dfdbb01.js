(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{365:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("3553b576",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";n(365)},382:function(t,e,n){var r=n(12)((function(i){return i[1]}));r.push([t.i,"@media (min-width:480px){#canvas_holder{width:100%}}@media (max-width:480px){#canvas_holder{width:90%;margin:5%}}#target_image{top:0;background-color:none}",""]),r.locals={},t.exports=r},390:function(t,e,n){"use strict";n.r(e);var r=n(332),o=n(351),c=n(348),l=n(399),h=n(363),d=n(344),m=n(123),v=n(362),_=n(342),f=n(439),w=n(159),x=n(24),T=(n(82),n(48),n(25),n(6),n(34),n(54),n(44),n(21),n(67),n(68),n(380)),M=n(400),k=n(445),j={data:function(){return{tagName:"",tags:[],target_illust:{title:"dora1",date:"20200718",tags_text:"#doraemon",src:"/mochiduko-20/doraemon-namecard.webp",url:"https://www.pixiv.net/users/415546",flex:12},canvas_settings:{canvas_width:1200,canvas_height:650,canvas_offset_x:0,canvas_offset_y:-50,box_size:40,image_max:200},api_url:"https://mochiduko-api.netlify.app/",pixiv_embed:"http://embed.pixiv.net/decorate.php",pixiv_artwork:"https://www.pixiv.net/artworks/",axes:["tsne-X","tsne-Y","tsne-Z"],mousePosition:[],target_images:[],renderer:new Object,canvas:new Object,scene:new T.j,camera:new Object,controls:new Object,MOUNTED:!1,INTERSECTED:!1}},watch:{mousePosition:function(t){t&&this.selectImage(t)}},mounted:function(){this.renderer=new T.p({alpha:!0}),this.canvas=this.$refs.canvas_holder,this.canvas_settings.canvas_width=this.canvas.clientWidth,this.canvas.appendChild(this.renderer.domElement),this.renderer.setSize(this.canvas_settings.canvas_width,this.canvas_settings.canvas_height),this.camera=new T.e(45,this.canvas_settings.canvas_width/this.canvas_settings.canvas_height,.5,1e3),this.controls=new M.a(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1,this.controls.dampingFactor=.25,this.controls.enableZoom=!0,this.renderer.setSize(this.canvas_settings.canvas_width,this.canvas_settings.canvas_height),this.renderer.setClearColor(0,0),this.renderer.clear(),this.drawScatter(),this.renderScene(),this.MOUNTED=!0},methods:{v:function(t,e,n){return new T.o(t,e,n)},renderScene:function(){requestAnimationFrame(this.renderScene),this.controls.update(),this.renderer.render(this.scene,this.camera)},setTargetImageProperties:function(t){this.target_illust.src=this.pixiv_embed+"?illust_id="+t.id+"&mode=sns-automator",this.target_illust.title=t.title,this.target_illust.date=t.date,this.target_illust.tags_text=t.tags.map((function(t){return"#"+t.name})).join(" "),this.target_illust.url=this.pixiv_artwork+t.id},calcMousePositionInCanvas:function(t){var e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft-Math.floor(this.canvas.offsetLeft),n=t.clientY+document.body.scrollTop+document.documentElement.scrollTop-Math.floor(this.canvas.offsetTop);return[e=(e+this.canvas_settings.canvas_offset_x)/this.canvas_settings.canvas_width*2-1,n=-(n+this.canvas_settings.canvas_offset_y)/this.canvas_settings.canvas_height*2+1]},onDocumentMouseMove:function(t){this.mousePosition=this.calcMousePositionInCanvas(t)},onTouch:function(t){t.touches&&t.touches.length>0?this.mousePosition=this.calcMousePositionInCanvas(t.touches[0]):t.changedTouches&&t.changedTouches.length>0&&(this.mousePosition=this.calcMousePositionInCanvas(t.changedTouches[0]))},selectImage:function(t){var e=this;return Object(x.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=new T.i,o=new T.n(t[0],t[1]),r.setFromCamera(o,e.camera),c=e.scene.children[0].children,!((l=r.intersectObjects(c.slice(0,c.length-1),!0).filter((function(t){return t.object.name&&t.object.visible}))).length>0)){n.next=11;break}if(0!==(h=e.target_images.filter((function(img){return img.id==l[0].object.name}))).length){n.next=9;break}return n.abrupt("return");case 9:return n.next=11,e.setTargetImageProperties(h[0]);case 11:case"end":return n.stop()}}),n)})))()},onResize:function(){if(this.MOUNTED){var t=this.canvas.clientWidth,e=this.canvas_settings.canvas_height;this.renderer.setSize(this.canvas.clientWidth,this.canvas_settings.canvas_height),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}},filterImage:function(){var t=this,e=this.scene.children[0].children;if(0!==this.tags.length){var n=this.target_images.filter((function(image){return image.tags.some((function(e){return t.tags.includes(e.name)}))})).map((function(image){return image.id.toString()}));e.forEach((function(t){t.visible=!!n.includes(t.name)}))}else e.forEach((function(t){return t.visible=!0}))},addNewTag:function(){this.tags.includes(this.tagName)||(this.tags.push(this.tagName),this.tagName="",this.filterImage())},removeTag:function(t){this.tags.splice(t,1),this.filterImage()},drawScatter:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new T.d,r=t.canvas_settings.box_size,o=t.v,t.scene.add(n),c={},l=t.axes,h=t.api_url,e.next=9,t.$axios.$get(h+"each_illusts.json").then((function(data){t.target_images=data.slice(0,t.canvas_settings.image_max),l.forEach((function(e,i){c[e]=[Math.max.apply(Math,t.target_images.map((function(t){return t[e]}))),Math.min.apply(Math,t.target_images.map((function(t){return t[e]})))]})),t.target_images.forEach((function(t){var e=new T.m;e.setCrossOrigin("anonymous"),e.load(h+"thumbs/"+t.id+".webp",(function(e){var h=new T.g({color:16777215,size:20,transparent:!0,map:e}),d=l.map((function(t){return Object(k.a)().domain(c[t]).range([-r,r])})),m=[],v=d[0](t["tsne-X"]),_=d[1](t["tsne-Y"]),f=d[2](t["tsne-Z"]);m.push(o(v,_,f));var w=(new T.a).setFromPoints(m),x=new T.f(w,h);w.name=t.id.toString(),x.name=t.id.toString(),n.add(x)}))}))})).catch((function(t){console.log("response error",t)}));case 9:t.setTargetImageProperties(t.target_images[0]),t.renderer.setSize(t.canvas_settings.canvas_width,t.canvas_settings.canvas_height),t.renderer.setViewport(-1*t.canvas_settings.canvas_offset_x,0,t.canvas_settings.canvas_width,t.canvas_settings.canvas_height),t.controls.update(),t.renderer.render(t.scene,t.camera),t.camera.position.set(100,100,100);case 15:case"end":return e.stop()}}),e)})))()}}},C=(n(381),n(73)),component=Object(C.a)(j,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{fluid:"",id:"Gallery"}},[e("h1",[t._v("Gallery")]),t._v(" "),e("h3",[t._v("これまでに描いたイラストなどです. ")]),t._v(" "),e(v.a,{staticClass:"mb-6",attrs:{"align-center":""}},[e(h.a,{attrs:{sm:"8",cols:"12"}},[e("div",{staticClass:"d-flex flex-row align-baseline"},[e(f.a,{staticClass:"mb-6 mr-6",attrs:{"hide-details":"","single-line":"",label:"Input Tag Name"},on:{submit:function(t){t.preventDefault()}},model:{value:t.tagName,callback:function(e){t.tagName=e},expression:"tagName"}}),t._v(" "),e(r.a,{attrs:{color:"white",elevation:"1",outlined:""},on:{click:function(e){return t.addNewTag()}}},[t._v("\n          Filter\n        ")])],1),t._v(" "),t._l(t.tags,(function(n,r){return e(l.a,{key:n,attrs:{filter:"",outlined:"",close:""},on:{"click:close":function(e){return t.removeTag(r)}}},[t._v("\n        "+t._s(n)+"\n      ")])}))],2)],1),t._v(" "),e(v.a,{staticClass:"mb-6",attrs:{"align-center":""}},[e(h.a,{directives:[{def:w.a,name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],attrs:{sm:"8",cols:"12"}},[e("div",{ref:"canvas_holder",attrs:{id:"canvas_holder"},on:{mousemove:function(e){return t.onDocumentMouseMove(e)},click:function(e){return t.onTouch(e)},touchend:function(e){return t.onTouch(e)}}})]),t._v(" "),e(h.a,{staticClass:"mx-auto",attrs:{sm:"4",cols:"8"}},[e(o.a,{attrs:{id:"target_image"}},[e("a",{attrs:{href:t.target_illust.url,target:"_blank"}},[e(m.a,{staticClass:"white--text align-end",attrs:{src:t.target_illust.src,"aspect-ratio":"1"}})],1),t._v(" "),e(c.a,[e(_.a)],1),t._v(" "),e(c.b,[e("h2",[t._v(t._s(t.target_illust.title))]),t._v(" "),e("p",[t._v(t._s(t.target_illust.date))]),t._v(" "),e("p",[t._v(t._s(t.target_illust.tags_text))])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);