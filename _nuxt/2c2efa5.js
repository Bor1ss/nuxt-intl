(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{327:function(t,e,o){"use strict";o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return d})),o.d(e,"c",(function(){return l})),o.d(e,"d",(function(){return _}));var r=o(603),n=o(0),c=Object(n.g)("v-card__actions"),d=Object(n.g)("v-card__subtitle"),l=Object(n.g)("v-card__text"),_=Object(n.g)("v-card__title");r.a},636:function(t,e,o){var content=o(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("17fca1a7",content,!0,{sourceMap:!1})},655:function(t,e,o){"use strict";o(636)},656:function(t,e,o){var r=o(12)(!1);r.push([t.i,".headline[data-v-42d21ffc]{word-break:normal}.separate-equally[data-v-42d21ffc]{flex:1}",""]),t.exports=r},673:function(t,e,o){"use strict";o.r(e);o(27),o(90);var r={props:{whyUpgradeData:{type:Object,default:function(){return{whyUpgradeTitle:"MODAL_WHY_UPGRADE_TITLE",whyUpgradeText:"MODAL_WHY_UPGRADE_DESCTIPTION",howPurchaseUpgradeTitle:"MODAL_WHY_UPGRADE_PURCHASE_TITLE",howPurchaseUpgradeText:"MODAL_WHY_UPGRADE_PURCHASE_TEXT",buttonChatNow:"TILE_BTN_CHAT_NOW",buttonClose:"TILE_BTN_CLOSE"}}}},methods:{openLiveChat:function(){var t,e=navigator.userAgent.toLowerCase(),o=(null===(t=navigator)||void 0===t?void 0:t.platform.toLowerCase())||"unknown",r=e.match(/ip(?:ad|od|hone)/)?"ios":(e.match(/(?:webos|android)/)||o.match(/mac|win|linux/)||["other"])[0];if(/ios|android|webos/.test(r)){window.open("https://secure.livechatinc.com/licence/10998812/v2/open_chat.cgi?groups=0","_blank")}else LC_API.open_chat_window();return!1}}},n=(o(655),o(29)),c=o(36),d=o.n(c),l=o(327),_=o(232),v=o(616),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"why-upgrade-container"},[o("div",{staticClass:"d-flex flex-md-row flex-column"},[o("div",{staticClass:"px-0 pl-md-3 pr-md-4 separate-equally"},[o("v-card-title",{staticClass:"headline pb-6 text-h5 pt-0"},[t._v(" "+t._s(t.$t(t.whyUpgradeData.whyUpgradeTitle)))]),t._v(" "),o("v-card-text",{staticClass:"pb-0 text-subtitle-2"},[o("p",{domProps:{innerHTML:t._s(t.$t(t.whyUpgradeData.whyUpgradeText))}})])],1),t._v(" "),o("v-divider",{staticClass:"d-md-block d-none",attrs:{vertical:""}}),t._v(" "),o("v-divider",{staticClass:"d-block d-md-none mx-5"}),t._v(" "),o("div",{staticClass:"d-flex flex-column px-0 pl-md-3 pr-md-4 separate-equally"},[o("v-card-title",{staticClass:"headline pb-6 text-h5 pt-md-0 pt-4"},[t._v(t._s(t.$t(t.whyUpgradeData.howPurchaseUpgradeTitle))+" ")]),t._v(" "),o("v-card-text",{staticClass:"pb-0"},[o("p",{domProps:{innerHTML:t._s(t.$t(t.whyUpgradeData.howPurchaseUpgradeText))}})])],1)],1),t._v(" "),o("v-card-actions",{staticClass:"sticky-bottom"},[o("v-spacer"),t._v(" "),o("Button",{attrs:{buttonClassName:"text-subtitle-1",color:"blue",isText:"",buttonText:t.whyUpgradeData.buttonChatNow},nativeOn:{click:function(e){return t.openLiveChat(e)}}}),t._v(" "),o("Button",{attrs:{buttonClassName:"text-subtitle-1",color:"blue",isText:"",buttonText:t.whyUpgradeData.buttonClose,eventName:"closeDialog"},on:{closeDialog:function(e){return t.$emit("closeDialog")}}})],1)],1)}),[],!1,null,"42d21ffc",null);e.default=component.exports;d()(component,{Button:o(248).default}),d()(component,{VCardActions:l.a,VCardText:l.c,VCardTitle:l.d,VDivider:_.a,VSpacer:v.a})}}]);