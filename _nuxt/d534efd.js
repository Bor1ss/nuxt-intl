(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{326:function(t,e,c){"use strict";c.d(e,"a",(function(){return l})),c.d(e,"b",(function(){return n})),c.d(e,"c",(function(){return d})),c.d(e,"d",(function(){return T}));var r=c(600),_=c(0),l=Object(_.g)("v-card__actions"),n=Object(_.g)("v-card__subtitle"),d=Object(_.g)("v-card__text"),T=Object(_.g)("v-card__title");r.a},631:function(t,e,c){var content=c(649);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(15).default)("af0952cc",content,!0,{sourceMap:!1})},648:function(t,e,c){"use strict";c(631)},649:function(t,e,c){var r=c(14)(!1);r.push([t.i,".headline[data-v-0c7b50e5]{word-break:normal}.lifetime-license[data-v-0c7b50e5]{max-width:550px;flex:1}.lifetime-license .list-lifetime-license li[data-v-0c7b50e5]{list-style:disc}.purchase-upgrade-container[data-v-0c7b50e5]{flex:1;max-width:450px}.purchase-upgrade-container .list-purchase-upgrade li[data-v-0c7b50e5]{list-style:decimal}@media(max-width:767px){.lifetime-license[data-v-0c7b50e5]{max-width:100%}.purchase-upgrade-container[data-v-0c7b50e5]{flex:1;max-width:100%}}",""]),t.exports=r},667:function(t,e,c){"use strict";c.r(e);var r={data:function(){return{}},props:{upgradeSupportData:{type:Object,default:function(){return{lifetimeLicenseTitle:"NOTIFICATION_LIFETIME_LICENSE_BENEFITS_TITLE",lifetimeLicenseSubtitle:"NOTIFICATION_LIFETIME_LICENSE_BENEFITS_SUBTITLE",lifetimeLicenseList:[{id:1,name:"NOTIFICATION_LIFETIME_LICENSE_BENEFITS_LIST_TEXT_1"},{id:2,name:"NOTIFICATION_LIFETIME_LICENSE_BENEFITS_LIST_TEXT_2"},{id:3,name:"NOTIFICATION_LIFETIME_LICENSE_BENEFITS_LIST_TEXT_3"},{id:4,name:"NOTIFICATION_LIFETIME_LICENSE_BENEFITS_LIST_TEXT_4"},{id:5,name:"NOTIFICATION_LIFETIME_LICENSE_BENEFITS_LIST_TEXT_5"},{id:6,name:"NOTIFICATION_LIFETIME_LICENSE_BENEFITS_LIST_TEXT_6"}],purchaseUpgradeTitle:"NOTIFICATION_PURCHASE_UPGRADE_TITLE",purchaseUpgradeList:[{id:1,name:"NOTIFICATION_PURCHASE_UPGRADE_LIST_TEXT_1"},{id:2,name:"NOTIFICATION_PURCHASE_UPGRADE_LIST_TEXT_2"},{id:3,name:"NOTIFICATION_PURCHASE_UPGRADE_LIST_TEXT_3"},{id:4,name:"NOTIFICATION_PURCHASE_UPGRADE_LIST_TEXT_4"}],purchaseUpgradeCaption1:"NOTIFICATION_PURCHASE_UPGRADE_CAPTION_TEXT_1",purchaseUpgradeCaption2:"NOTIFICATION_PURCHASE_UPGRADE_CAPTION_TEXT_2",purchaseUpgradeCaption3:"NOTIFICATION_PURCHASE_UPGRADE_CAPTION_TEXT_3",buttonChatNow:"NOTIFICATION_BUTTON_CHAT_NOW",buttonClose:"NOTIFICATION_BUTTON_CLOSE"}}}}},_=(c(648),c(29)),l=c(36),n=c.n(l),d=c(326),T=c(231),I=c(613),component=Object(_.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"d-flex flex-md-row flex-column upgrade-support-container"},[c("div",{staticClass:"lifetime-license px-0 pl-md-3 pr-md-4"},[c("v-card-title",{staticClass:"headline pb-6 text-h5 pt-0"},[t._v(" "+t._s(t.$t(t.upgradeSupportData.lifetimeLicenseTitle)))]),t._v(" "),c("v-card-text",{staticClass:"pb-0 text-subtitle-2"},[c("p",{},[t._v(t._s(t.$t(t.upgradeSupportData.lifetimeLicenseSubtitle)))]),t._v(" "),c("ul",{staticClass:"list-lifetime-license"},t._l(t.upgradeSupportData.lifetimeLicenseList,(function(e){return c("li",{key:"A"+e.id,staticClass:"pb-4"},[t._v(t._s(t.$t(e.name)))])})),0)])],1),t._v(" "),c("v-divider",{staticClass:"d-md-block d-none",attrs:{vertical:""}}),t._v(" "),c("v-divider",{staticClass:"d-block d-md-none mx-5"}),t._v(" "),c("div",{staticClass:"purchase-upgrade-container d-flex flex-column px-0 pl-md-3 pr-md-4"},[c("v-card-title",{staticClass:"headline pb-6 text-h5 pt-md-0 pt-4"},[t._v(t._s(t.$t(t.upgradeSupportData.purchaseUpgradeTitle))+" ")]),t._v(" "),c("v-card-text",{staticClass:"pb-0 card-text-block flex-grow-1 d-flex flex-column justify-space-between"},[c("div",[c("ul",{staticClass:"list-purchase-upgrade text-subtitle-2"},t._l(t.upgradeSupportData.purchaseUpgradeList,(function(e){return c("li",{key:"B"+e.id,staticClass:"pb-4"},[t._v(t._s(t.$t(e.name)))])})),0),t._v(" "),c("p",{staticClass:"text-caption pt-2"},[t._v(t._s(t.$t(t.upgradeSupportData.purchaseUpgradeCaption1)))])]),t._v(" "),c("div",{staticClass:"caption-block justify-space-between"},[c("div",{},[c("Link",{attrs:{link:"/"}},[c("p",{staticClass:"text-caption mb-0"},[t._v(t._s(t.$t(t.upgradeSupportData.purchaseUpgradeCaption2)))])]),t._v(" "),c("p",{staticClass:"text-caption"},[t._v(t._s(t.$t(t.upgradeSupportData.purchaseUpgradeCaption3)))])],1)])])],1)],1),t._v(" "),c("v-card-actions",{staticClass:"sticky-bottom"},[c("v-spacer"),t._v(" "),c("Button",{attrs:{buttonClassName:"text-subtitle-1",color:"blue",isText:"",buttonText:t.upgradeSupportData.buttonChatNow}}),t._v(" "),c("Button",{attrs:{buttonClassName:"text-subtitle-1",color:"blue",isText:"",buttonText:t.upgradeSupportData.buttonClose,eventName:"closeDialog"},on:{closeDialog:function(e){return t.$emit("closeDialog")}}})],1)],1)}),[],!1,null,"0c7b50e5",null);e.default=component.exports;n()(component,{Link:c(151).default,Button:c(247).default}),n()(component,{VCardActions:d.a,VCardText:d.c,VCardTitle:d.d,VDivider:T.a,VSpacer:I.a})}}]);