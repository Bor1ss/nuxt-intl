(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{326:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return _}));var n=r(600),o=r(0),c=Object(o.g)("v-card__actions"),d=Object(o.g)("v-card__subtitle"),l=Object(o.g)("v-card__text"),_=Object(o.g)("v-card__title");n.a},632:function(t,e,r){var content=r(651);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("49ab55b4",content,!0,{sourceMap:!1})},650:function(t,e,r){"use strict";r(632)},651:function(t,e,r){var n=r(14)(!1);n.push([t.i,".headline[data-v-22c145a1]{word-break:normal}.separate-equally[data-v-22c145a1]{flex:1}",""]),t.exports=n},668:function(t,e,r){"use strict";r.r(e);var n={props:{whyUpgradeDataLT:{type:Object,default:function(){return{whyUpgradeTitle:"MODAL_WHY_LT_UPGRADE_TITLE",whyUpgradeText:"MODAL_WHY_LT_UPGRADE_DESCTIPTION",howPurchaseUpgradeTitle:"MODAL_WHY_LT_UPGRADE_PURCHASE_TITLE",howPurchaseUpgradeText:"MODAL_WHY_LT_UPGRADE_PURCHASE_TEXT",buttonChatNow:"TILE_BTN_CHAT_NOW",buttonClose:"TILE_BTN_CLOSE"}}}},methods:{openLiveChat:function(){return LC_API.open_chat_window(),!1}}},o=(r(650),r(29)),c=r(36),d=r.n(c),l=r(326),_=r(231),v=r(613),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"why-upgrade-container"},[r("div",{staticClass:"d-flex flex-md-row flex-column"},[r("div",{staticClass:"px-0 pl-md-3 pr-md-4 separate-equally"},[r("v-card-title",{staticClass:"headline pb-6 text-h5 pt-0"},[t._v(" "+t._s(t.$t(t.whyUpgradeDataLT.whyUpgradeTitle)))]),t._v(" "),r("v-card-text",{staticClass:"pb-0 text-subtitle-2"},[r("div",{domProps:{innerHTML:t._s(t.$t(t.whyUpgradeDataLT.whyUpgradeText))}})])],1),t._v(" "),r("v-divider",{staticClass:"d-md-block d-none",attrs:{vertical:""}}),t._v(" "),r("v-divider",{staticClass:"d-block d-md-none mx-5"}),t._v(" "),r("div",{staticClass:"d-flex flex-column px-0 pl-md-3 pr-md-4 separate-equally"},[r("v-card-title",{staticClass:"headline pb-6 text-h5 pt-md-0 pt-4"},[t._v(t._s(t.$t(t.whyUpgradeDataLT.howPurchaseUpgradeTitle))+" ")]),t._v(" "),r("v-card-text",{staticClass:"pb-0"},[r("div",{domProps:{innerHTML:t._s(t.$t(t.whyUpgradeDataLT.howPurchaseUpgradeText))}})])],1)],1),t._v(" "),r("v-card-actions",{staticClass:"sticky-bottom"},[r("v-spacer"),t._v(" "),r("Button",{attrs:{buttonClassName:"text-subtitle-1",color:"blue",isText:"",buttonText:t.whyUpgradeDataLT.buttonChatNow},nativeOn:{click:function(e){return t.openLiveChat(e)}}}),t._v(" "),r("Button",{attrs:{buttonClassName:"text-subtitle-1",color:"blue",isText:"",buttonText:t.whyUpgradeDataLT.buttonClose,eventName:"closeDialog"},on:{closeDialog:function(e){return t.$emit("closeDialog")}}})],1)],1)}),[],!1,null,"22c145a1",null);e.default=component.exports;d()(component,{Button:r(247).default}),d()(component,{VCardActions:l.a,VCardText:l.c,VCardTitle:l.d,VDivider:_.a,VSpacer:v.a})}}]);