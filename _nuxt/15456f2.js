(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{333:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return f}));var c=n(608),r=n(0),o=Object(r.g)("v-card__actions"),d=Object(r.g)("v-card__subtitle"),l=Object(r.g)("v-card__text"),f=Object(r.g)("v-card__title");c.a},642:function(t,e,n){var content=n(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("77a43995",content,!0,{sourceMap:!1})},655:function(t,e,n){"use strict";n(642)},656:function(t,e,n){var c=n(13)(!1);c.push([t.i,'.currency[data-v-dcabf6b6],.fraction[data-v-dcabf6b6]{position:relative}.currency span[data-v-dcabf6b6],.fraction span[data-v-dcabf6b6]{position:absolute;top:-1px}.min-height-28px[data-v-dcabf6b6]{min-height:28px}.hide-dot-comma-space.main[data-v-dcabf6b6]{font-size:0}.hide-dot-comma-space.main div[data-v-dcabf6b6],.hide-dot-comma-space.main span[data-v-dcabf6b6]{font-family:"Amazon Ember"!important}.hide-dot-comma-space.main .currency[data-v-dcabf6b6]{width:12px}.hide-dot-comma-space.main .currency.HKD[data-v-dcabf6b6]{width:21px}.hide-dot-comma-space.main .currency.HKD span[data-v-dcabf6b6]{font-size:12px}.hide-dot-comma-space.main .fraction[data-v-dcabf6b6]{width:24px}',""]),t.exports=c},669:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{}},props:{data:{type:Object,required:!0}}},r=(n(655),n(32)),o=n(36),d=n.n(o),l=n(333),f=n(240),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card-title",{staticClass:"text-h5 pt-0 pb-6 pl-8",domProps:{innerHTML:t._s(t.$t(t.data.TitleLine1))}}),t._v(" "),n("v-card-text",{staticClass:"pb-4 pl-8"},[n("p",{staticClass:"mb-2 text-subtitle-1"},[n("span",{class:{"blue--text":"why"==t.data.TypeOfParagraph1},domProps:{innerHTML:t._s(t.$t(t.data.Paragraph1))}}),t._v(" "),"list"==t.data.TypeOfParagraph1?n("span",t._l(t.data.WhatsIncludedList,(function(e,c){return n("span",{key:e,staticClass:"blue--text"},[t._v("\n          "+t._s(e)),c!==t.data.WhatsIncludedList.length-1?n("span",{staticClass:"black--text"},[t._v(",")]):t._e()])})),0):t._e()]),t._v(" "),n("p",{staticClass:"mb-8 text-subtitle-1"},[n("span",{class:{"blue--text":"why"==t.data.TypeOfParagraph2},domProps:{innerHTML:t._s(t.$t(t.data.Paragraph2))}}),t._v(" "),"list"==t.data.TypeOfParagraph2?n("span",t._l(t.data.WhatsIncludedList,(function(e,c){return n("span",{key:e,staticClass:"blue--text"},[t._v("\n          "+t._s(e)),c!==t.data.WhatsIncludedList.length-1?n("span",{staticClass:"black--text"},[t._v(",")]):t._e()])})),0):t._e()]),t._v(" "),n("div",{staticClass:"current-price red--text text-left"},[n("i18n-n",{staticClass:"hide-dot-comma-space main d-flex",attrs:{tag:"div",value:39.95,format:"currency",locale:t.$store.state.currencies.selectedCurrency.name},scopedSlots:t._u([{key:"currency",fn:function(e){return[n("div",{staticClass:"text-h6 currency vertical-align-top",class:t.$store.state.currencies.selectedCurrency.currency},[n("span",[t._v(t._s(e.currency))])])]}},{key:"integer",fn:function(e){return[n("span",{staticClass:"integer text-h2"},[t._v(t._s(e.integer))])]}},{key:"group",fn:function(e){return[n("span",{staticClass:"group"},[t._v(t._s(e.group))])]}},{key:"fraction",fn:function(e){return[n("div",{staticClass:"text-h6 vertical-align-top fraction"},[n("span",[t._v(t._s(e.fraction))])])]}}])})],1),t._v(" "),t.data.OldPriceText?n("div",{staticClass:"min-height-28px pb-8"},[t.data.OldPriceText?n("i18n",{staticClass:"text-caption text-left w-100 d-flex",attrs:{tag:"div",path:t.data.OldPriceText},scopedSlots:t._u([{key:"oldPrice",fn:function(){return[n("span",{staticClass:"pl-1"},[n("i18n-n",{staticClass:"hide-dot-comma-space old-price d-flex",attrs:{tag:"div",value:49.95,format:"currency",locale:t.$store.state.currencies.selectedCurrency.name},scopedSlots:t._u([{key:"currency",fn:function(e){return[n("span",{staticClass:"currency text-caption"},[t._v(t._s(e.currency))])]}},{key:"integer",fn:function(e){return[n("span",{staticClass:"integer text-caption"},[t._v(t._s(e.integer))])]}},{key:"group",fn:function(e){return[n("span",{staticClass:"group text-caption"},[t._v(t._s(e.group))])]}},{key:"fraction",fn:function(e){return[n("span",{staticClass:"fraction text-caption"},[t._v(t._s(e.fraction))])]}}],null,!1,3198517245)})],1)]},proxy:!0},{key:"percentageDiscount",fn:function(){return[n("span",{staticClass:"old-price-percentage-discount"},[t._v("20")])]},proxy:!0}],null,!1,2270337261)}):t._e()],1):t._e(),t._v(" "),t.data.OrPayLaterText?n("i18n",{staticClass:"text-caption text-left",attrs:{tag:"div",path:t.data.OrPayLaterText},scopedSlots:t._u([{key:"paymentAmount",fn:function(){return[n("span",{staticClass:"pay-later-price red--text"},[t._v(t._s(t.$n(13,"currency",t.$store.state.currencies.selectedCurrency.name)))])]},proxy:!0},{key:"numberOfPayments",fn:function(){return[n("a",{staticClass:"pay-later-price no-text-decoration blue--text",attrs:{href:"",target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v("\n          "+t._s(t.$t(t.data.PayLaterNumberOfPaymentsText,{numberOfPayments:3}))+"\n        ")])]},proxy:!0}],null,!1,320075828)}):t._e()],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{staticClass:"pl-8 py-3 pr-4 d-flex justify-space-between justify-md-end"},[n("Button",{attrs:{buttonClassName:"text-subtitle-1",color:"blue",isText:"",buttonText:"NOTIFICATION_BUTTON_CLOSE",eventName:"closeDialog"},on:{closeDialog:function(e){return t.$emit("closeDialog")}}}),t._v(" "),n("Button",{attrs:{buttonClassName:"text-subtitle-1",color:"primary",buttonText:"NOTIFICATION_BUTTON_KEEP_SHOPPING"}})],1)],1)}),[],!1,null,"dcabf6b6",null);e.default=component.exports;d()(component,{Button:n(257).default}),d()(component,{VCardActions:l.a,VCardText:l.c,VCardTitle:l.d,VDivider:f.a})}}]);