(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{388:function(t,e,n){"use strict";n.r(e);var r=n(446),l=n(439),o=(n(157),n(21),n(67),n(68),{name:"LinkTable",props:{links:{type:Array,default:function(){return[]},required:!0}},data:function(){return{search:""}},computed:{loading:function(){return this.links.length>0},headers:function(){return[{text:"タイトル",value:"title"},{text:"カテゴリ",value:"category"},{text:"紹介",value:"description"}]}},methods:{filterText:function(t,e,n){return null!=t&&null!=e&&"string"==typeof t&&-1!==t.toString().indexOf(e)}}}),c=n(73),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"link-table",attrs:{dense:"",headers:t.headers,items:t.links,"items-per-page":15,"item-key":"id",search:t.search,"custom-filter":t.filterText,loading:t.loading,"loading-text":"Loading data...","no-data-text":"There is a no data."},scopedSlots:t._u([{key:"top",fn:function(){return[e(l.a,{staticClass:"mx-4",attrs:{label:"Search (partial match))"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"item.title",fn:function(n){var r=n.item;return[e("a",{staticClass:"font-weight-bold",attrs:{href:r.url,target:"_blank"}},[t._v("\n      "+t._s(r.title)+"\n    ")])]}}],null,!0)})}),[],!1,null,null,null);e.default=component.exports}}]);