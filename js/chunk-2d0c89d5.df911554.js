(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c89d5"],{5642:function(t,a,r){"use strict";r.r(a);var o=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("VContainer",[t.loaded?t._e():r("VRow",{attrs:{dense:""}},[r("VCol",[r("VSkeletonLoader",{staticClass:"elevation-3",attrs:{type:"card"}})],1)],1),t.loaded?r("VRow",{attrs:{dense:""}},[r("VCol",[r("BiliobAuthorGroupInfoCard",{attrs:{sim:!0,"author-group":t.$db.author.group.detail[this.$route.params.gid]}})],1)],1):t._e(),t.loaded?r("VRow",{attrs:{dense:""}},[r("VCol",[r("BiliobCard",{attrs:{title:"聚合数据"}},[r("VRow",{attrs:{dense:""}},[r("VCol",{attrs:{cols:"3"}},[r("h4",[t._v("总粉丝数")]),r("span",{staticClass:"caption"},[t._v(" "+t._s(t.sumData("cFans"))+" ")])]),r("VCol",{attrs:{cols:"3"}},[r("h4",[t._v("总播放量")]),r("span",{staticClass:"caption"},[t._v(" "+t._s(t.sumData("cArchiveView"))+" ")])]),r("VCol",{attrs:{cols:"3"}},[r("h4",[t._v("总点赞数")]),r("span",{staticClass:"caption"},[t._v(" "+t._s(t.sumData("cLike"))+" ")])]),r("VCol",{attrs:{cols:"3"}},[r("h4",[t._v("总专栏阅读")]),r("span",{staticClass:"caption"},[t._v(" "+t._s(t.sumData("cArticleView"))+" ")])]),r("VCol",{attrs:{cols:"3"}},[r("h4",[t._v("粉丝榜首")]),r("div",{staticClass:"caption"},[t._v(" "+t._s(t.maxFansAuthor.name)+" ")]),r("div",{staticClass:"caption"},[t._v(" "+t._s(t.$numberFormat(t.maxFansAuthor.cFans))+" ")])]),r("VCol",{attrs:{cols:"3"}},[r("h4",[t._v("播放榜首")]),r("div",{staticClass:"caption"},[t._v(" "+t._s(t.maxArchiveViewAuthor.name)+" ")]),r("div",{staticClass:"caption"},[t._v(" "+t._s(t.$numberFormat(t.maxArchiveViewAuthor.cArchiveView))+" ")])]),r("VCol",{attrs:{cols:"3"}},[r("h4",[t._v("点赞榜首")]),r("div",{staticClass:"caption"},[t._v(" "+t._s(t.maxLikeAuthor.name)+" ")]),r("div",{staticClass:"caption"},[t._v(" "+t._s(t.$numberFormat(t.maxLikeAuthor.cLike))+" ")])]),r("VCol",{attrs:{cols:"3"}},[r("h4",[t._v("专栏榜首")]),r("div",{staticClass:"caption"},[t._v(" "+t._s(t.maxArticleViewAuthor.name)+" ")]),r("div",{staticClass:"caption"},[t._v(" "+t._s(t.$numberFormat(t.maxArticleViewAuthor.cLike))+" ")])])],1)],1)],1)],1):t._e(),t.loaded?r("VRow",{attrs:{dense:""}},[r("VCol",{attrs:{cols:"12"}},[r("VCard",[r("VTabs",{attrs:{"background-color":"transparent","slider-color":"primary"}},[r("VTab",{on:{click:function(a){return t.sortChange(0)}}},[r("VIcon",[t._v(" mdi-account-heart ")]),r("div",{staticStyle:{"margin-left":"10px"}},[t._v(" 粉丝总数 ")])],1),r("VTab",{on:{click:function(a){return t.sortChange(1)}}},[r("VIcon",[t._v(" mdi-play-circle-outline ")]),r("div",{staticStyle:{"margin-left":"10px"}},[t._v(" 播放总量 ")])],1),r("VTab",{on:{click:function(a){return t.sortChange(2)}}},[r("VIcon",[t._v(" mdi-thumb-up-outline ")]),r("div",{staticStyle:{"margin-left":"10px"}},[t._v(" 获赞总量 ")])],1),r("VTab",{on:{click:function(a){return t.sortChange(3)}}},[r("VIcon",[t._v(" mdi-script-text-outline ")]),r("div",{staticStyle:{"margin-left":"10px"}},[t._v(" 专栏阅读 ")])],1)],1)],1)],1)],1):t._e(),t.loaded?r("VFabTransition",{attrs:{group:""}},t._l(t.$db.author.group.detail[this.$route.params.gid].authorList,(function(t){return r("VRow",{key:t.mid,attrs:{dense:""}},[r("VCol",{attrs:{cols:"12"}},[r("BiliobAuthorInfoCard",{attrs:{author:t}})],1)],1)})),1):t._e()],1)},i=[],s=(r("4de4"),r("4160"),r("13d5"),r("159b"),{data:function(){return{loaded:!1,data:[]}},computed:{maxFansAuthor:function(){return this.maxAuthor("cFans")},maxArchiveViewAuthor:function(){return this.maxAuthor("cArchiveView")},maxLikeAuthor:function(){return this.maxAuthor("cLike")},maxArticleViewAuthor:function(){return this.maxAuthor("cArticleView")}},mounted:function(){var t=this;void 0==this.$db.author.group.detail[this.$route.params.gid]?this.axios.get("/author/group/".concat(this.$route.params.gid)).then((function(a){t.$db.author.group.detail[t.$route.params.gid]=a.data,t.data=t.$db.author.group.detail[t.$route.params.gid].authorList,t.loaded=!0})):(this.data=this.$db.author.group.detail[this.$route.params.gid].authorList,this.loaded=!0)},methods:{maxAuthor:function(t){var a,r=0;return this.data.forEach((function(o){o[t]>r&&(a=o,r=a[t])})),null==a&&(a={name:""}),a},sumData:function(t){return this.$numberFormat(this.data.filter((function(a){return a[t]})).reduce((function(a,r){return a+r[t]}),0))},sortChange:function(t){var a=["cFans","cArchiveView","cLike","cArticleView"];this.$db.author.group.detail[this.$route.params.gid].authorList.sort((function(r,o){return o[a[t]]-r[a[t]]}))}}}),e=s,n=r("2877"),c=r("6544"),u=r.n(c),l=r("b0af"),d=r("62ad"),h=r("a523"),m=r("0789"),v=r("132d"),V=r("0fd9"),p=r("3129"),_=r("71a3"),C=r("fe57"),f=Object(n["a"])(e,o,i,!1,null,null,null);a["default"]=f.exports;u()(f,{VCard:l["a"],VCol:d["a"],VContainer:h["a"],VFabTransition:m["c"],VIcon:v["a"],VRow:V["a"],VSkeletonLoader:p["a"],VTab:_["a"],VTabs:C["a"]})}}]);