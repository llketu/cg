(function(t){function e(e){for(var i,o,n=e[0],l=e[1],c=e[2],u=0,p=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],i=!0,n=1;n<r.length;n++){var l=r[n];0!==s[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var i={},s={play:0},a=[];function o(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=i,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,function(e){return t[e]}.bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/cg/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;a.push([1,"chunk-vendors","chunk-common"]),r()})({1:function(t,e,r){t.exports=r("ea5d")},"8bbf":function(t,e){t.exports=Vue},c06d:function(t,e){t.exports=DPlayer},cebe:function(t,e){t.exports=axios},ea5d:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("8bbf"),s=r.n(i),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mod_play",attrs:{id:"app"}},[r("Icons"),r("PlayHeader"),t.playGroups.length>0?r("ModPlayer",{ref:"ModPlayer",attrs:{"play-groups":t.playGroups,title:t.title,"poster-url":t.picUrl,"video-url":t.videoUrl}}):t._e(),r("VideoIntro",{attrs:{title:t.title}}),r("PlayList",{attrs:{"play-groups":t.playGroups,"current-video-url":t.videoUrl},on:{changeVideoUrl:t.changeVideoUrl}}),t.showLoading?r("Loading",{attrs:{"error-msg":t.errorMsg}}):t._e(),r("ModRecommend",{attrs:{feeds:t.feeds}})],1)},o=[],n=(r("99af"),r("7db0"),r("d81d"),r("fb6a"),r("4d63"),r("ac1f"),r("25f0"),r("466d"),r("d3b7"),r("5319"),r("1276"),r("cebe")),l=r.n(n),c=r("b383"),d={getPost:function(t,e){var r=this;return new Promise((function(i,s){var a={flag:e,id:t,_:1596948918439,cb:"jQuery18206866"},o={data:[]},n="http://lcoc.top/vip2.3/api.php?".concat(c.encode(a)),d="https://proxy.cdn.pet2.net/page/cache/".concat(escape(n));l.a.get(d).then((function(t){var e=t.data.replace("jQuery18206866({","{").replace("});","}");e=JSON.parse(e);var s=r.parserVideos(e);o.data=[{_id:"detailUrl",picUrl:e.pic,date:"2020-4-16 21:57:24",title:{rendered:e.title},type:"movie",version:"1",playGroups:s}],i(o)})).catch((function(t){console.error(t);var e={title:t.message,msg:JSON.stringify(t)};s(e)}))}))},parserVideos:function(t){return t.info.map((function(e,r){var i=[{serverName:"默认播放源_0",show:!0,videos:[]}];return i.serverName="默认播放源_".concat(r),i.show=!0,i.videos=e.video.map((function(e,r){var i=e.split("$");return{title:t.title,tip:i[0],url:i[1]}})),i}))}},u=r("5034"),p=r("3f87"),f=r("3a5e"),h=r("c5a6"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.playGroups,(function(e,i){return[t.showNumList?r("section",{key:i,staticClass:"mod_box",attrs:{name:"看点/剧集/专辑列表"}},[r("div",{staticClass:"mod_hd mod_hd_new"},[r("h2",{staticClass:"mod_title U_color_a"},[t._v(" 剧集-"+t._s(i+1)+" ")]),r("div",{staticClass:"mod_subtitle U_color_c"},[t._v(" "+t._s(e.serverName)+" ")])]),r("div",{staticClass:"mod_bd"},[r("div",{staticClass:"mod_list_slider mod_list_episodes"},[r("ul",{staticClass:"slider_box"},[t._l(e.videos,(function(e,i){return[t.currentVideoUrl===e.url?r("li",{key:i,staticClass:"item current"},[r("a",{staticClass:"U_color_b",attrs:{href:"javascript:;",title:i+1},on:{click:function(r){return t.changeVideoUrl(e.url)}}},[r("span",{staticClass:"text"},[t._v(t._s(i+1))])])]):r("li",{key:i,staticClass:"item"},[r("a",{staticClass:"U_color_b",attrs:{href:"javascript:;",title:i+1},on:{click:function(r){return t.changeVideoUrl(e.url)}}},[r("span",{staticClass:"text"},[t._v(t._s(i+1))])])])]}))],2)])])]):r("section",{key:i,staticClass:"mod_box"},[r("div",{staticClass:"mod_hd mod_hd_new"},[r("h2",{staticClass:"mod_title U_color_a"},[t._v("专辑列表-"+t._s(i+1))]),r("div",{staticClass:"mod_subtitle U_color_c"},[t._v(t._s(e.serverName))])]),r("div",{staticClass:"mod_bd"},[r("div",{staticClass:"mod_list_slider mod_list"},[r("ul",{staticClass:"slider_box"},[t._l(e.videos,(function(e,i){return[t.currentVideoUrl===e.url?r("li",{key:i,staticClass:"item current"},[r("a",{staticClass:"U_color_b",attrs:{href:"javascript:;",title:e.title},on:{click:function(r){return t.changeVideoUrl(e.url)}}},[r("span",{staticClass:"text"},[t._v(t._s(e.title))]),r("span",{staticClass:"item_imgtag"},[t._v(t._s(e.tip))])])]):r("li",{key:i,staticClass:"item"},[r("a",{staticClass:"U_color_b",attrs:{href:"javascript:;",title:e.title},on:{click:function(r){return t.changeVideoUrl(e.url)}}},[r("span",{staticClass:"text"},[t._v(t._s(e.title))]),r("span",{staticClass:"item_imgtag"},[t._v(t._s(e.tip))])])])]}))],2)])])])]}))],2)},m=[],y=(r("c975"),{name:"PlayList",props:{currentVideoUrl:{type:String,default:""},playGroups:{type:Array,default:function(){return[{serverName:"默认播放源",show:!0,videos:[{title:"普罗米修斯",tip:"HD高清",url:"http://cn7.kankia.com/hls/20191231/e4cc95a536b15fd08f561f48b5d0fa02/1577784336/index.m3u8"},{title:"权力的游戏",tip:"HD",url:"https://v3.szjal.cn/20200103/Oo9sh7hu/index.m3u8"},{title:"普罗米修斯",tip:"1080p",url:"https://dbx6.tyswmp.com/20191231/eW1s50SM9TnKVcxd/index.m3u8"}]},{serverName:"腾讯云播放源",show:!0,videos:[{title:"普罗米修斯",tip:"HD",url:"https://v3.szjal.cn/20200103/Oo9sh7hu/index.m3u8"},{title:"普罗米修斯",tip:"1080p",url:"https://dbx6.tyswmp.com/20191231/eW1s50SM9TnKVcxd/index.m3u8; "}]}]}}},computed:{showNumList:function(){if(this.playGroups.length<1)return!1;var t=this.playGroups[0];if(t.videos.length<4)return!1;var e=t.videos[0];try{if(e.title.indexOf("1")>0||e.tip.indexOf("1")>0)return!0;if(e.title.indexOf("一")>0||e.tip.indexOf("一")>0)return!0}catch(r){console.log(r)}return!1}},methods:{changeVideoUrl:function(t){this.currentVideoUrl=t,this.$emit("changeVideoUrl",t)}}}),_=y,g=r("2877"),b=Object(g["a"])(_,v,m,!1,null,"5f239193",null),U=b.exports,x=r("9688"),C=r("ee1a"),w=r("db49"),P=r.n(w),V=r("8ded"),j={name:"app",components:{ModRecommend:u["a"],PlayHeader:p["a"],Loading:f["a"],Icons:h["a"],PlayList:U,VideoIntro:C["a"],ModPlayer:x["a"]},data:function(){return{showLoading:!0,errorMsg:"",feeds:[],playGroups:[],videoUrl:"",picUrl:"",title:"",playVideoUrl:"".concat(location.origin).concat(location.pathname)}},mounted:function(){var t=this.$utils.getUrlKey("id"),e=this.$utils.getUrlKey("flag");this.picUrl=this.$utils.getUrlKey("poster"),this.videoUrl=this.$utils.getUrlKey("videoUrl"),this.title=this.$utils.getUrlKey("title"),this.loadData(t,e)},methods:{changeVideoUrl:function(t){t!==this.videoUrl&&(this.videoUrl=t,this.$refs.ModPlayer.playVideoWithUrl(t,this.videoType))},loadData:function(t,e){var r={picUrl:this.picUrl,title:{rendered:this.title},playGroups:[{videos:[{url:this.videoUrl,title:this.title}]}]};this.playGroups=r.playGroups,this.playGroups.length>0&&(this.videoUrl=this.playGroups[0].videos[0].url),this.videoSrc=r.playGroups[0].videos[0].url,this.showLoading=!1,r.picUrl=this.picUrl,this.title=r.title.rendered,this.writePlayRecord(r)},loadRelatedFeeds:function(t){var e=this,r=t.substring(0,2);d.getRelatedPost(r).then((function(t){e.feeds=t.data.map((function(t,r){return{index:r,title:t.title.rendered,subTitle:t.date,topTip:"在线视频",footerTip:e.getCatName(t.categories),url:"".concat(e.playVideoUrl,"?id=").concat(t._id),picUrl:t.picUrl}}))}))},isValidUrl:function(t){var e=new RegExp;return e.compile("[a-zA-z]+://[^\\s]*"),e.test(t)},getImageSrcFromHtml:function(t){var e=/<img.*?(?:>|\/>)/gi,r=/src=[\\'\\"]?([^\\'\\"]*)[\\'\\"]?/i,i=t.match(e);if(null===i)return this.defPicUrl;for(var s=0;s<i.length;s++){var a=i[s].match(r);if(this.isValidUrl(a[1]))return a[1]}},getCatName:function(t){return"电影"},writePlayRecord:function(t){var e=V.get(P.a.userPlayInfoKey);if(e){var r=e.playRecords,i=r.find((function(e){if(e._id===t._id)return!0}));if(i)return;return r.length>4&&(r=r.slice(0,4)),r.unshift(t),e.playRecords=r,void V.set(P.a.userPlayInfoKey,e)}V.set(P.a.userPlayInfoKey,{userId:"nil-name",playRecords:[t]})}}},O=j,k=Object(g["a"])(O,a,o,!1,null,null,null),G=k.exports,M=r("ca00"),N=r("caf9");s.a.config.productionTip=!1,s.a.use(N["a"],{preLoad:1.3,error:"https://wx3.sinaimg.cn/mw690/b4ce362dly1gd1xvoyiffj20ci06jmx0.jpg",loading:"https://6f6e-onespider-461969-1251448557.tcb.qcloud.la/app/loading.svg?sign=aba6a438f2665f6c2d8730bb78e05526&t=1584800622",attempt:1}),s.a.prototype.$utils=M["a"],new s.a({render:function(t){return t(G)}}).$mount("#app")}});