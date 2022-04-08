(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(t,e,r){"use strict";r.d(e,"a",(function(){return _})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return d}));var n=r(621),o=r(0),_=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),l=Object(o.g)("v-card__text"),d=Object(o.g)("v-card__title");n.a},648:function(t,e,r){var content=r(664);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("46ced14c",content,!0,{sourceMap:!1})},663:function(t,e,r){"use strict";r(648)},664:function(t,e,r){var n=r(12)(!1);n.push([t.i,".headline[data-v-81008f04]{word-break:normal}.schema-list li[data-v-81008f04]{list-style:disc}",""]),t.exports=n},685:function(t,e,r){"use strict";r.r(e);r(29),r(79);var n={name:"PayLater",data:function(){return{}},props:{payLaterData:{type:Object,default:function(){return{title:"TILE_PAY_LATER_NAME",schemaTitle:"MODAL_PAY_LATER_SCHEMA_TITLE",schemaList:[{id:1,name:"MODAL_PAY_LATER_LIST_SCHEMA_TEXT_1"},{id:2,name:"MODAL_PAY_LATER_LIST_SCHEMA_TEXT_2"},{id:3,name:"MODAL_PAY_LATER_LIST_SCHEMA_TEXT_3"}],totalOrderSumTitle:"MODAL_PAY_LATER_TOTAL_ORDER_SUM_TITLE",orderSumList:[{id:1,name:"MODAL_PAY_LATER_TOTAL_ORDER_SUM_LIST_TEXT_1",orderPayment:20,totalOrderSum:29.99},{id:2,name:"MODAL_PAY_LATER_TOTAL_ORDER_SUM_LIST_TEXT_2",orderPayment:30,totalOrderSum:30.99},{id:3,name:"MODAL_PAY_LATER_TOTAL_ORDER_SUM_LIST_TEXT_3",orderPayment:40,totalOrderSum:40.99},{id:4,name:"MODAL_PAY_LATER_TOTAL_ORDER_SUM_LIST_TEXT_4",orderPayment:50,totalOrderSum:50.99},{id:5,name:"MODAL_PAY_LATER_TOTAL_ORDER_SUM_LIST_TEXT_5",orderPayment:60,totalOrderSum:500}],paymentMethodSelected:"MODAL_PAY_LATER_EASY_PAY_METHOD_SELECTED",buttonChatNow:"TILE_BTN_CHAT_NOW",buttonClose:"TILE_BTN_CLOSE"}}}},methods:{openLiveChat:function(){var t,e=navigator.userAgent.toLowerCase(),r=(null===(t=navigator)||void 0===t?void 0:t.platform.toLowerCase())||"unknown",n=e.match(/ip(?:ad|od|hone)/)?"ios":(e.match(/(?:webos|android)/)||r.match(/mac|win|linux/)||["other"])[0];if(/ios|android|webos/.test(n)){window.open("https://secure.livechatinc.com/licence/10998812/v2/open_chat.cgi?groups=0","_blank")}else LC_API.open_chat_window();return!1}}},o=(r(663),r(24)),_=r(28),c=r.n(_),l=r(154),d=r(632),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-0 pl-md-3 pr-md-4"},[r("v-card-title",{staticClass:"headline pb-6 pt-0"},[r("div",{staticClass:"d-flex"},[r("SvgRender",{staticClass:"notification d-flex align-center",attrs:{name:"pay-later"}}),t._v(" "),r("p",{staticClass:"mb-0 text-h5",domProps:{innerHTML:t._s(t.$t(t.payLaterData.title))}})],1)]),t._v(" "),r("v-card-text",{staticClass:"pb-0"},[r("p",{staticClass:"mb-2 text-subtitle-2",domProps:{innerHTML:t._s(t.$t(t.payLaterData.schemaTitle))}},[t._v(".")]),t._v(" "),r("div",{staticClass:"d-flex flex-sm-row flex-column align-center gray px-6 py-3 justify-space-between"},[r("SvgRender",{attrs:{name:"pay-later-schema"}}),t._v(" "),r("ul",{staticClass:"schema-list blue--text text-uppercase text-subtitle-2"},t._l(t.payLaterData.schemaList,(function(e){return r("li",{key:"A"+e.id},[t._v(t._s(t.$t(e.name)))])})),0)],1),t._v(" "),r("p",{staticClass:"mb-3 mt-4 text-subtitle-2"},[t._v(t._s(t.$t(t.payLaterData.totalOrderSumTitle)))]),t._v(" "),r("ul",{staticClass:"pl-0 text-subtitle-2"},t._l(t.payLaterData.orderSumList,(function(e){return r("li",{key:"B"+e.id,staticClass:"pb-3",domProps:{innerHTML:t._s(t.$t(e.name,{orderPayment:t.$n(e.orderPayment,"currency",t.$store.state.currencies.selectedCurrency.name),totalOrderSum:t.$n(e.totalOrderSum,"currency",t.$store.state.currencies.selectedCurrency.name)}))}})})),0),t._v(" "),r("p",{staticClass:"mb-0 pt-2 text-subtitle-2",domProps:{innerHTML:t._s(t.$t(t.payLaterData.paymentMethodSelected))}})]),t._v(" "),r("v-card-actions",{staticClass:"sticky-bottom"},[r("v-spacer"),t._v(" "),r("Button",{attrs:{buttonClassName:"text-subtitle-1",color:"blue",isText:"",buttonText:t.payLaterData.buttonChatNow},nativeOn:{click:function(e){return t.openLiveChat(e)}}}),t._v(" "),r("Button",{attrs:{buttonClassName:"text-subtitle-1",color:"blue",isText:"",buttonText:t.payLaterData.buttonClose,eventName:"closeDialog"},on:{closeDialog:function(e){return t.$emit("closeDialog")}}})],1)],1)}),[],!1,null,"81008f04",null);e.default=component.exports;c()(component,{SvgRender:r(98).default,Button:r(258).default}),c()(component,{VCardActions:l.a,VCardText:l.c,VCardTitle:l.d,VSpacer:d.a})}}]);