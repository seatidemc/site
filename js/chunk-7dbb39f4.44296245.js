(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dbb39f4"],{"0b42":function(e,t,n){var s=n("e8b5"),a=n("68ee"),r=n("861d"),i=n("b622"),o=i("species");e.exports=function(e){var t;return s(e)&&(t=e.constructor,a(t)&&(t===Array||s(t.prototype))?t=void 0:r(t)&&(t=t[o],null===t&&(t=void 0))),void 0===t?Array:t}},"159b":function(e,t,n){var s=n("da84"),a=n("fdbc"),r=n("785a"),i=n("17c2"),o=n("9112"),c=function(e){if(e&&e.forEach!==i)try{o(e,"forEach",i)}catch(t){e.forEach=i}};for(var v in a)a[v]&&c(s[v]&&s[v].prototype);c(r)},"17c2":function(e,t,n){"use strict";var s=n("b727").forEach,a=n("a640"),r=a("forEach");e.exports=r?[].forEach:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}},"5d86":function(e,t,n){e.exports=n.p+"img/tencent-wechant.5d45db2e.svg"},6498:function(e,t,n){"use strict";n("6a38")},"65f0":function(e,t,n){var s=n("0b42");e.exports=function(e,t){return new(s(e))(0===t?0:t)}},"6a38":function(e,t,n){},7208:function(e,t,n){},7595:function(e,t,n){"use strict";n("afdf")},a640:function(e,t,n){"use strict";var s=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&s((function(){n.call(null,t||function(){throw 1},1)}))}},afdf:function(e,t,n){},b727:function(e,t,n){var s=n("0366"),a=n("44ad"),r=n("7b0b"),i=n("50c4"),o=n("65f0"),c=[].push,v=function(e){var t=1==e,n=2==e,v=3==e,u=4==e,l=6==e,f=7==e,m=5==e||l;return function(_,p,d,w){for(var g,h,x=r(_),b=a(x),y=s(p,d,3),E=i(b.length),C=0,S=w||o,k=t?S(_,E):n||f?S(_,0):void 0;E>C;C++)if((m||C in b)&&(g=b[C],h=y(g,C,x),e))if(t)k[C]=h;else if(h)switch(e){case 3:return!0;case 5:return g;case 6:return C;case 2:c.call(k,g)}else switch(e){case 4:return!1;case 7:c.call(k,g)}return l?-1:v||u?u:k}};e.exports={forEach:v(0),map:v(1),filter:v(2),some:v(3),every:v(4),find:v(5),findIndex:v(6),filterReject:v(7)}},c283:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{page:""}},[s("banner",{attrs:{bg:"https://fnmdp.oss-cn-beijing.aliyuncs.com/images/2.jpg"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" 加入 SEATiDE ")]},proxy:!0},{key:"subtitle",fn:function(){return[e._v(" 开始体验 ")]},proxy:!0},{key:"text",fn:function(){return[e._v(" SEATiDE 是 Java 正版高版本模组服务器，加入暂时没有门槛。"),s("br"),e._v("本页将引导你粗略了解 SEATiDE 并提供加入方式。 ")]},proxy:!0}])}),s("div",{staticClass:"container"},[s("div",{staticClass:"server-status content"},[s("h1",{directives:[{name:"view",rawName:"v-view.once",value:e.flowUp,expression:"flowUp",modifiers:{once:!0}}],staticClass:"primary-text"},[e._v("服务器概况")]),s("meta-bar",{directives:[{name:"view",rawName:"v-view.once",value:e.flowUp,expression:"flowUp",modifiers:{once:!0}}]},[s("meta-item",{attrs:{icon:"minecraft"},scopedSlots:e._u([{key:"name",fn:function(){return[e._v(" 版本 ")]},proxy:!0},{key:"text",fn:function(){return[s("span",{staticClass:"monospace"},[e._v("Java "+e._s(e.server.version?e.server.version:"获取中..."))])]},proxy:!0}])}),s("meta-item",{attrs:{icon:"package"},scopedSlots:e._u([{key:"name",fn:function(){return[e._v(" 模组数 ")]},proxy:!0},{key:"text",fn:function(){return[e._v(" "+e._s(e.server.mods?e.getModCount(e.server.mods):"获取中...")+" ")]},proxy:!0}])}),s("meta-item",{attrs:{icon:"map-clock"},scopedSlots:e._u([{key:"name",fn:function(){return[e._v(" 开服时间 ")]},proxy:!0},{key:"text",fn:function(){return[e._v(" "+e._s(e.server.since?e.server.since:"获取中...")+" ")]},proxy:!0}])})],1),s("p",{directives:[{name:"view",rawName:"v-view.once",value:e.flowUp,expression:"flowUp",modifiers:{once:!0}}],staticClass:"typo"},[e._v(" SEATiDE 当前处于"),s("strong",[e._v("第一周目")]),e._v("，本周目的主题是"),s("strong",[e._v("「环境学」")]),e._v("，偏向于休闲生存，配备了许多家具模组。 "),s("br"),e._v("作为 SEATiDE 项目建立以后的第一个周目，本周目的时间"),s("strong",[e._v("将会较长")]),e._v("。 ")]),s("status",{attrs:{status:e.loadingStatus}}),e.server.mods?s("div",{staticClass:"mods"},e._l(e.isPCSize()?e.server.mods.filter((function(e){return"dep"!==e.type})):e.server.mods.filter((function(e){return"dep"!==e.type})).slice(0,5),(function(t,n){return s("div",{directives:[{name:"view",rawName:"v-view.once",value:e.scaleIn,expression:"scaleIn",modifiers:{once:!0}},{name:"lazy",rawName:"v-lazy:background-image",value:t.bg?t.bg:"",expression:"x.bg ? x.bg : ''",arg:"background-image"}],key:n,staticClass:"mod",on:{click:function(n){return e.$open("https://search.mcmod.cn/s?key="+t.name)}}},[s("span",[e._v("#"+e._s(n+1))]),s("h1",[e._v(e._s(t.zh?t.zh:t.name))]),t.zh?s("h2",[e._v(e._s(t.name))]):e._e(),t.desc?s("p",[e._v(e._s(t.desc))]):e._e()])})),0):e._e(),e.isPCSize()?e._e():s("span",{staticClass:"see-full-in-pc"},[s("mdicon",{attrs:{name:"information-outline"}}),e._v(" 在电脑端查看完整内容")],1),s("small",[e._v("另包含前置类模组（"+e._s(e.getDepNames(e.server.mods).length)+" 个）："+e._s(e.getDepNames(e.server.mods).join("、"))+"，模组图片来源 CurseForge。")])],1),s("div",{staticClass:"features content"},[s("div",{staticClass:"hero-box"},[s("h1",{directives:[{name:"view",rawName:"v-view.once",value:e.flowUp,expression:"flowUp",modifiers:{once:!0}}],staticClass:"primary-text"},[e._v("三个概念")]),s("p",{directives:[{name:"view",rawName:"v-view.once",value:e.flowUp,expression:"flowUp",modifiers:{once:!0}}]},[e._v(" 有助于你更好地了解 SEATiDE 服务器的运行模式 ")])]),s("div",{directives:[{name:"view",rawName:"v-view.once",value:e.animateFeatureBox,expression:"animateFeatureBox",modifiers:{once:!0}}],staticClass:"feature-box"},[s("div",{staticClass:"feature black"},[s("mdicon",{attrs:{name:"human-handsup"}}),s("span",[e._v("DEMOCRACY")]),s("h1",[e._v("民主")]),e._m(0)],1),s("div",{staticClass:"feature primary"},[s("mdicon",{attrs:{name:"console"}}),s("span",[e._v("TECHNOLOGY")]),s("h1",[e._v("技术")]),e._m(1)],1),s("div",{staticClass:"feature white"},[s("mdicon",{attrs:{name:"cog"}}),s("span",[e._v("AUTOMATION")]),s("h1",[e._v("自动化")]),e._m(2)],1)])]),s("div",{staticClass:"join content"},[s("h1",{directives:[{name:"view",rawName:"v-view.once",value:e.flowUp,expression:"flowUp",modifiers:{once:!0}}],staticClass:"primary-text"},[e._v("立即加入")]),s("p",{directives:[{name:"view",rawName:"v-view.once",value:e.flowUp,expression:"flowUp",modifiers:{once:!0}}],staticClass:"typo"},[e._v(" 若要加入 SEATiDE，请先加入我们的讨论群并注明你的 ID，我们将给予白名单。 ")]),s("p",{directives:[{name:"view",rawName:"v-view.once",value:e.flowUp,expression:"flowUp",modifiers:{once:!0}}],staticClass:"typo"},[e._v(" SEATiDE 当前主要以 QQ 群的形式存在，同时也有微信讨论群以便交流，没有运营团队。SEATiDE "),s("strong",[e._v("没有")]),e._v("加入门槛，仅需"),s("strong",[e._v(" Java 正版")]),e._v("即可进入服务器。同时，建议使用"),s("strong",[e._v("内存 4GB+")]),e._v(" 的电脑以防模组加载导致的游戏卡顿。 ")]),s("div",{staticClass:"join-cards"},[s("a",{directives:[{name:"view",rawName:"v-view.once",value:e.scaleIn,expression:"scaleIn",modifiers:{once:!0}}],staticClass:"join-card qq",attrs:{href:"https://qm.qq.com/cgi-bin/qm/qr?k=tcoJ_CF6AjAWGQS62TxGRIidea_4tqw7&jump_from=webapi",target:"_blank"}},[s("mdicon",{attrs:{name:"arrow-right"}}),s("img",{attrs:{src:n("dd84")}}),e._m(3)],1),s("div",{directives:[{name:"view",rawName:"v-view.once",value:e.scaleIn,expression:"scaleIn",modifiers:{once:!0}}],staticClass:"join-card wechant"},[s("mdicon",{attrs:{name:"qrcode-scan"}}),s("img",{attrs:{src:n("5d86")}}),e._m(4)],1)]),s("p",{directives:[{name:"view",rawName:"v-view.once",value:e.flowUp,expression:"flowUp",modifiers:{once:!0}}],staticClass:"typo"},[e._v(" 加入以后，你可以在"),s("strong",[e._v("群公告")]),e._v("中找到最新的服务器详细信息（包含"),s("strong",[e._v("版本")]),e._v("、"),s("strong",[e._v("IP")]),e._v("、"),s("strong",[e._v("客户端和模组包下载地址")]),e._v("等）。同时，你也将会被"),s("strong",[e._v("正式认定")]),e._v("为「SEATiDE」玩家。接下来，你只需要准备好游戏，然后加入服务器即可开始你的 SEATiDE 之旅！ ")]),s("p",{directives:[{name:"view",rawName:"v-view.once",value:e.flowUp,expression:"flowUp",modifiers:{once:!0}}],staticClass:"typo"},[e._v(" 如果你对模组有些生疏，不知道如何开始，或者拥有其它问题，你可以在"),s("strong",[e._v("群聊里询问")]),e._v("，或者也可以阅读"),e._m(5),e._v("。维基相当于是本电子书，上面归纳了大家觉得有用的要点，这本书由所有人一起编写，为了让你更快地解决问题 :) ")])])])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"typo light"},[e._v(" 服务器的模组选取"),n("strong",[e._v("不由管理员主导")]),e._v("，而是由玩家共同决定。官方将预先选择一些模组主题，具体模组则由玩家自由决定。 "),n("br"),e._v("决定方式有很多种，一般我们采取"),n("strong",[e._v("语音聊天或者文字交流")]),e._v("，人人平等，仅需给出你的合理理由即可参与！ ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"typo light"},[e._v(" 在 SEATiDE，我们"),n("strong",[e._v("提倡使用各种技术")]),e._v("来解决一些原本看似比较棘手的问题，并尽可能发挥长处，减少痛苦。"),n("br"),e._v("诚然，一个人不可能是全能的，所以需要来自"),n("strong",[e._v("多方的协助")]),e._v("。我们提倡互相学习，即使你什么都不了解，也"),n("strong",[e._v("不必担心")]),e._v("。 ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"typo light"},[e._v(" 得益于阿里云的 API，我们可以做到"),n("strong",[e._v("自动备份")]),e._v("，甚至编写插件，通过让服务器在无人在线"),n("strong",[e._v("超过 1 小时")]),e._v("后自动关闭来节省经费，投入到更应该使用的地方。"),n("br"),e._v("在一些看不见的地方，我们也使用了自动化，这是为了"),n("strong",[e._v("节省和简化开服体验")]),e._v("。 ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text"},[n("h1",[e._v("QQ 讨论群")]),n("h2",[e._v(" 点击加入，或搜索群号 820912578"),n("br"),e._v("验证信息请填写你的正版 ID ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text"},[n("h1",[e._v("微信讨论群")]),n("h2",[e._v("由于限制，加入 QQ 讨论群后扫码可加")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("strong",[e._v("我们编写的"),n("a",{attrs:{href:"#"}},[e._v("维基")])])}],r=(n("159b"),n("b0c0"),n("2b0e")),i=n("84af"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"meta-bar"},[e._t("default")],2)},c=[],v=r["a"].extend({}),u=v,l=(n("f67b"),n("2877")),f=Object(l["a"])(u,o,c,!1,null,"122e5532",null),m=f.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"meta-item"},[e.icon?n("mdicon",{attrs:{name:e.icon}}):e._e(),n("span",{staticClass:"name"},[e._t("name")],2),n("span",{staticClass:"text"},[e._t("text")],2)],1)},p=[],d=r["a"].extend({props:["icon"]}),w=d,g=(n("7595"),Object(l["a"])(w,_,p,!1,null,"a0d53016",null)),h=g.exports,x=n("b903"),b=n("1209"),y=n("3865"),E=r["a"].extend({components:{Banner:i["a"],MetaBar:m,MetaItem:h,Status:y["a"]},data:function(){return{server:{},loadingStatus:"loading",serverExists:!1}},mounted:function(){var e=this;Object(x["d"])("/api/server/v1/get/server").then((function(t){var n=t.data.data;e.serverExists=!(null===n||void 0===n||!n.created),null!==n?(e.server=n,e.loadingStatus=""):e.loadingStatus="error"})).catch((function(t){console.warn(t),e.loadingStatus="error"}))},methods:{getDepNames:function(e){var t=[];return e?(e.forEach((function(e){"dep"===e.type&&t.push(e.name.toLowerCase())})),t):[]},flowUp:x["b"],scaleIn:x["h"],flowUpQuick:x["c"],animateFeatureBox:function(e){Object(b["a"])({targets:".features .feature",opacity:[0,1],translateY:[50,0],duration:750,easing:"easeInOutExpo",delay:function(e,t){return 150*t}})},getModCount:function(e){var t=e.length;return e.forEach((function(e){"set"===e.type&&e.count&&(t+=e.count-1)})),t},isPCSize:x["f"]}}),C=E,S=(n("6498"),Object(l["a"])(C,s,a,!1,null,"055bae0c",null));t["default"]=S.exports},dd84:function(e,t,n){e.exports=n.p+"img/tencent-qq.341b8029.svg"},f67b:function(e,t,n){"use strict";n("7208")}}]);