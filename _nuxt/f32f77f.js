(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{387:function(t,e,n){"use strict";n.r(e);n(21),n(67),n(68);var r={name:"LinkTable",props:{links:{type:Array,default:function(){return[]},required:!0}},data:function(){return{search:""}},computed:{loading:function(){return this.links.length>0},headers:function(){return[{text:"タイトル",value:"title"},{text:"カテゴリ",value:"category"},{text:"紹介",value:"description"}]}},methods:{filterText:function(t,e,n){return null!=t&&null!=e&&"string"==typeof t&&-1!==t.toString().indexOf(e)}}},l=n(73),o=n(97),c=n.n(o),d=n(446),f=n(439),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"link-table",attrs:{dense:"",headers:t.headers,items:t.links,"items-per-page":15,"item-key":"id",search:t.search,"custom-filter":t.filterText,loading:t.loading,"loading-text":"Loading data...","no-data-text":"There is a no data."},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-text-field",{staticClass:"mx-4",attrs:{label:"Search (partial match))"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"item.title",fn:function(e){var r=e.item;return[n("a",{staticClass:"font-weight-bold",attrs:{href:r.url,target:"_blank"}},[t._v("\n      "+t._s(r.title)+"\n    ")])]}}],null,!0)})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDataTable:d.a,VTextField:f.a})}}]);