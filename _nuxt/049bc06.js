(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{154:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return _}));var o=n(641),r=n(0),c=Object(r.g)("v-card__actions"),d=Object(r.g)("v-card__subtitle"),l=Object(r.g)("v-card__text"),_=Object(r.g)("v-card__title");o.a},673:function(t,e,n){var content=n(694);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("42c8f360",content,!0,{sourceMap:!1})},693:function(t,e,n){"use strict";n(673)},694:function(t,e,n){var o=n(10)(!1);o.push([t.i,".headline[data-v-a85afd7e]{word-break:normal}.separate-equally[data-v-a85afd7e]{flex:1}",""]),t.exports=o},713:function(t,e,n){"use strict";n.r(e);n(28),n(79);var o={props:{whyUpgradeDataTechLic:{type:Object,default:function(){return{whyUpgradeTitle:"MODAL_WHY_TECH_LIC_TITLE",whyUpgradeText:"MODAL_WHY_TECH_LIC_DESCTIPTION",whyUpgradeNotes:"MODAL_WHY_TECH_LIC_NOTE",whyUpgradeBenefitText:"MODAL_WHY_TECH_LIC_BENEFITS_TEXT",buttonChatNow:"TILE_BTN_CHAT_NOW",buttonClose:"TILE_BTN_CLOSE"}}}},methods:{openLiveChat:function(){var t,e=navigator.userAgent.toLowerCase(),n=(null===(t=navigator)||void 0===t?void 0:t.platform.toLowerCase())||"unknown",o=e.match(/ip(?:ad|od|hone)/)?"ios":(e.match(/(?:webos|android)/)||n.match(/mac|win|linux/)||["other"])[0];if(/ios|android|webos/.test(o)){window.open("https://secure.livechatinc.com/licence/10998812/v2/open_chat.cgi?groups=0","_blank")}else LC_API.open_chat_window();return!1}}},r=(n(693),n(20)),c=n(29),d=n.n(c),l=n(154),_=n(652),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"why-upgrade-container"},[n("div",{},[n("div",{staticClass:"px-0 pl-md-3 pr-md-4 separate-equally"},[n("v-card-title",{staticClass:"headline pb-6 text-h5 pt-0"},[t._v(" "+t._s(t.$t(t.whyUpgradeDataTechLic.whyUpgradeTitle)))]),t._v(" "),n("v-card-text",{staticClass:"pb-0 text-subtitle-2"},[n("div",{domProps:{innerHTML:t._s(t.$t(t.whyUpgradeDataTechLic.whyUpgradeText))}}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.$t(t.whyUpgradeDataTechLic.howPurchaseUpgradeText))}}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.$t(t.whyUpgradeDataTechLic.whyUpgradeBenefitText))}}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.$t(t.whyUpgradeDataTechLic.whyUpgradeNotes))}})])],1)]),t._v(" "),n("v-card-actions",{staticClass:"sticky-bottom"},[n("v-spacer"),t._v(" "),n("Button",{attrs:{"button-class-name":"text-subtitle-1",color:"blue","is-text":"","button-text":t.whyUpgradeDataTechLic.buttonChatNow},nativeOn:{click:function(e){return t.openLiveChat(e)}}}),t._v(" "),n("Button",{attrs:{"button-class-name":"text-subtitle-1",color:"blue","is-text":"","button-text":t.whyUpgradeDataTechLic.buttonClose,"event-name":"closeDialog"},on:{closeDialog:function(e){return t.$emit("closeDialog")}}})],1)],1)}),[],!1,null,"a85afd7e",null);e.default=component.exports;d()(component,{Button:n(260).default}),d()(component,{VCardActions:l.a,VCardText:l.c,VCardTitle:l.d,VSpacer:_.a})}}]);