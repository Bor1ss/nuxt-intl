(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{154:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return _}));var n=r(635),c=r(0),l=Object(c.g)("v-card__actions"),o=Object(c.g)("v-card__subtitle"),d=Object(c.g)("v-card__text"),_=Object(c.g)("v-card__title");n.a},664:function(t,e,r){var content=r(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("741ed851",content,!0,{sourceMap:!1})},681:function(t,e,r){"use strict";r(664)},682:function(t,e,r){var n=r(10)(!1);n.push([t.i,'.PricingCardInfoCurrency[data-v-50ae44bc]{max-width:40px;text-align:right}.mp0[data-v-50ae44bc]{margin:0!important;padding:0!important}.fg0[data-v-50ae44bc]{flex-grow:0!important}.v-card__title[data-v-50ae44bc]{word-break:normal!important}.v-application .text-h5[data-v-50ae44bc]{word-break:normal}.fs-16[data-v-50ae44bc]{font-size:16px}.first-price-msrp[data-v-50ae44bc]{order:2}.second-price-regular[data-v-50ae44bc]{order:1}.old-price[data-v-50ae44bc]{color:#565959;font-family:"Amazon Ember"!important}.min-height-28px[data-v-50ae44bc]{min-height:28px}.hide-dot-comma-space.main[data-v-50ae44bc]{font-size:0}.hide-dot-comma-space.main div[data-v-50ae44bc],.hide-dot-comma-space.main span[data-v-50ae44bc]{font-family:"Amazon Ember"!important}',""]),t.exports=n},704:function(t,e,r){"use strict";r.r(e);var n={props:{data:{type:Object,required:!0},eventName:{type:String,required:!1},PriceHeader:{type:Object,default:function(){return{BundleBuyNow:"MODAL_BUNDLE_BUY_NOW",BundleBuySeparatly:"MODAL_BUNDLES_BUY_SEPARATELLY",BundleBuyAsBundle:"MODAL_BUNDLES_BUY_AS_BUNDLE",LifetimeBuyNow:"MODAL_LIFETIME_BUY_NOW",LifetimeBuyFullPrice:"MODAL_LIFETIME_BUY_FULL_PRICE",LifetimeBuyListPrice:"MODAL_LIFETIME_BUY_LIST_PRICE"}}}},data:function(){return{}},computed:{cardNumberOfPayments:function(){var t=this.data.Prices.USD;return t<30?2:t>=30&&t<40?3:t>=40&&t<50?4:t>=50&&t<60?5:6},cardPaymentAmount:function(){return this.data.Prices[this.$store.state.currencies.selectedCurrency.currency]/this.cardNumberOfPayments},cardPercentageDiscount:function(){var t=this.data.Prices[this.$store.state.currencies.selectedCurrency.currency],e=this.data.MSRP[this.$store.state.currencies.selectedCurrency.currency],r=e-t;return Math.round(r/e*100)}},methods:{selectCard:function(){this.$emit("selectCard")}}},c=(r(681),r(20)),l=r(29),o=r.n(l),d=r(154),_=r(242),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card-title",{staticClass:"text-h5 pt-0 pb-6 pl-8",domProps:{innerHTML:t._s(t.$t(t.data.ModalTitle))}}),t._v(" "),r("v-card-title",{staticClass:"text-h5 pt-0 pb-6 pl-8"}),t._v(" "),r("v-card-text",{staticClass:"pb-4 pl-8"},[r("div",{staticClass:"mb-2 text-subtitle-1"},[r("span",{class:{"blue--text":"why"==t.data.TypeOfParagraph1},domProps:{innerHTML:t._s(t.$t(t.data.ModalParagraph))}}),t._v(" "),"list"==t.data.TypeOfParagraph1?r("div",t._l(t.data.WhatsIncludedList,(function(e,n){return r("span",{key:n+"A",staticClass:"blue--text"},[t._v("\n          "+t._s(e)),n!==t.data.WhatsIncludedList.length-1?r("span",{staticClass:"black--text"},[t._v(",")]):t._e()])})),0):t._e()]),t._v(" "),r("div",{staticClass:"mb-8 text-subtitle-1"},["why"===t.data.TypeOfParagraph2?r("Dialog",{attrs:{"notification-name":"WhyUpgrade",width:900,"class-name":"text-left"}},[r("span",{class:{"blue--text text-left link-emulate":"why"==t.data.TypeOfParagraph2},domProps:{innerHTML:t._s(t.$t(t.data.Paragraph2))}})]):"whyLT"==t.data.TypeOfParagraph2?r("Dialog",{attrs:{"notification-name":"WhyLifetimeUpgrade",width:900,"class-name":"text-left"}},[r("span",{staticClass:"blue--text text-left link-emulate",domProps:{innerHTML:t._s(t.$t(t.data.Paragraph2))}})]):"whyTechLic"==t.data.TypeOfParagraph2?r("Dialog",{attrs:{"notification-name":"WhyTechLicUpgrade",width:900,"class-name":"text-left"}},[r("span",{staticClass:"blue--text text-left link-emulate",domProps:{innerHTML:t._s(t.$t(t.data.Paragraph2))}})]):t._e(),t._v(" "),"list"==t.data.TypeOfParagraph2||"listLong"==t.data.TypeOfParagraph2?r("div",t._l(t.data.WhatsIncludedList,(function(e,n){return r("span",{key:n+"B",attrs:{isExternal:"",link:e.Link}},[r("b",[t._v("\n            "+t._s(t.$t(e.Name))+"\n          ")]),t._v("\n          "+t._s(t.$t(e.Description))),r("br")])})),0):t._e()],1),t._v(" "),r("div",{staticClass:"d-flex flex-wrap"},[r("div",{staticClass:"current-price text-left fg0",class:{"first-price-msrp mp0 col":"bundle"==t.data.ProductType||"upgrades"==t.data.currentStepTitle.toString().toLowerCase()&&"TILE_SINGLE_LIC_UPGRADE_TITLE"==t.data.discountTitle&&"TILE_LIC_UPGRADE_TITLE"!==t.data.TitleLine1&&"TILE_TECH_LIC_UPGRADE_TITLE"!==t.data.TitleLine1,mp0:"bundle"!=t.data.ProductType&&"upgrades"!=t.data.currentStepTitle.toString().toLowerCase()&&"TILE_SINGLE_LIC_UPGRADE_TITLE"!=t.data.discountTitle}},["bundle"==t.data.ProductType||"upgrades"==t.data.currentStepTitle.toString().toLowerCase()&&"TILE_SINGLE_LIC_UPGRADE_TITLE"==t.data.discountTitle&&"TILE_LIC_UPGRADE_TITLE"!==t.data.TitleLine1&&"TILE_TECH_LIC_UPGRADE_TITLE"!==t.data.TitleLine1?r("span",{staticClass:"black--text text-subtitle-1",domProps:{innerHTML:t._s(t.$t(t.PriceHeader.BundleBuyNow))}}):t._e(),t._v(" "),r("i18n-n",{staticClass:"hide-dot-comma-space main d-flex",attrs:{tag:"div",value:t.data.currentStepTitle&&"bundles"===t.data.currentStepTitle.toString().toLowerCase()&&"TILE_LICENSE_TITLE"===t.data.discountTitle||t.data.currentStepTitle&&"upgrades"===t.data.currentStepTitle.toString().toLowerCase()&&"TILE_SINGLE_LIC_UPGRADE_TITLE"===t.data.discountTitle&&"TILE_LIC_UPGRADE_TITLE"!==t.data.TitleLine1&&"TILE_TECH_LIC_UPGRADE_TITLE"!==t.data.TitleLine1?t.data.Prices[t.$store.state.currencies.selectedCurrency.currency]-t.data.priceDiscount:t.data.Prices[t.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:t.$store.state.currencies.selectedCurrency.name},scopedSlots:t._u([{key:"currency",fn:function(e){return[r("div",{staticClass:"text-h6 vertical-align-top red--text col mp0 PricingCardInfoCurrency",class:t.$store.state.currencies.selectedCurrency.currency},[r("span",[t._v(t._s(t.$store.state.currencies.selectedCurrency.display+e.currency))])])]}},{key:"integer",fn:function(e){return[r("span",{staticClass:"integer text-h2 red--text col mp0"},[t._v(t._s(e.integer))])]}},{key:"group",fn:function(e){return[r("span",{staticClass:"group red--text col mp0"},[t._v(t._s(e.group))])]}},{key:"fraction",fn:function(e){return[r("div",{staticClass:"text-h6 vertical-align-top red--text col mp0"},[r("span",[t._v(t._s(e.fraction))])])]}}])}),t._v(" "),t.data.OldPriceText&&("upgrades"==t.data.currentStepTitle.toString().toLowerCase()&&("TILE_SINGLE_LIC_UPGRADE_TITLE"==t.data.discountTitle&&"TILE_LIC_UPGRADE_TITLE"==t.data.TitleLine1||"TILE_TECH_LIC_UPGRADE_TITLE"==t.data.TitleLine1||"TILE_LICENSE_TITLE"==t.data.discountTitle)||"extras"==t.data.currentStepTitle.toString().toLowerCase()||!t.data.discountTitle&&"bundles"!=t.data.currentStepTitle.toString().toLowerCase()||"licenses"==t.data.currentStepTitle.toString().toLowerCase())?r("div",{staticClass:"min-height-28px"},[t.data.OldPriceText?r("i18n",{staticClass:"text-caption text-left w-100 d-flex",attrs:{tag:"div",path:t.data.OldPriceText},scopedSlots:t._u([{key:"oldPrice",fn:function(){return[r("span",{staticClass:"px-1 old-price"},[r("i18n-n",{staticClass:"hide-dot-comma-space old-price d-flex text-decoration-line-through",attrs:{tag:"div",value:t.data.MSRP[t.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:t.$store.state.currencies.selectedCurrency.name},scopedSlots:t._u([{key:"currency",fn:function(e){return[r("span",{staticClass:"text-caption col mp0"},[t._v(t._s(t.$store.state.currencies.selectedCurrency.display+e.currency))])]}},{key:"integer",fn:function(e){return[r("span",{staticClass:"integer text-caption col mp0"},[t._v(t._s(e.integer))])]}},{key:"group",fn:function(e){return[r("span",{staticClass:"group text-caption col mp0"},[t._v(t._s(e.group))])]}},{key:"fraction",fn:function(e){return[r("span",{staticClass:"text-caption col mp0"},[t._v(t._s(e.fraction))])]}}],null,!1,48506690)})],1)]},proxy:!0},"upgrades"==t.data.currentStepTitle.toString().toLowerCase()&&("TILE_SINGLE_LIC_UPGRADE_TITLE"==t.data.discountTitle&&"TILE_LIC_UPGRADE_TITLE"==t.data.TitleLine1||"TILE_TECH_LIC_UPGRADE_TITLE"==t.data.TitleLine1||"TILE_LICENSE_TITLE"==t.data.discountTitle)||"extras"==t.data.currentStepTitle.toString().toLowerCase()||!t.data.discountTitle&&"bundles"!=t.data.currentStepTitle.toString().toLowerCase()||"licenses"==t.data.currentStepTitle.toString().toLowerCase()?{key:"percentageDiscount",fn:function(){return[r("span",{staticClass:"old-price-percentage-discount pl-1"},[t._v(t._s(t.cardPercentageDiscount))])]},proxy:!0}:null],null,!0)}):t._e()],1):t._e(),t._v(" "),t.data.OrPayLaterTextModal&&t.data.PayLaterNumberOfPaymentsTextModal&&t.cardNumberOfPayments&&("upgrades"==t.data.currentStepTitle.toString().toLowerCase()&&("TILE_SINGLE_LIC_UPGRADE_TITLE"==t.data.discountTitle&&"TILE_LIC_UPGRADE_TITLE"==t.data.TitleLine1||"TILE_TECH_LIC_UPGRADE_TITLE"==t.data.TitleLine1||"TILE_LICENSE_TITLE"==t.data.discountTitle)||"extras"==t.data.currentStepTitle.toString().toLowerCase()||!t.data.discountTitle||"licenses"==t.data.currentStepTitle.toString().toLowerCase())?r("i18n",{staticClass:"text-caption text-left",attrs:{tag:"div",path:t.data.OrPayLaterTextModal},scopedSlots:t._u([{key:"payLaterText",fn:function(){return[r("span",{staticClass:"pay-later-text"},[t._v(t._s(t.$t("TILE_PAY_LATER_NAME_MODAL")))])]},proxy:!0},{key:"paymentAmount",fn:function(){return[r("span",{staticClass:"pay-later-price red--text"},[t._v(t._s(t.$n(t.cardPaymentAmount,"currency",t.$store.state.currencies.selectedCurrency.name)))])]},proxy:!0},{key:"numberOfPayments",fn:function(){return[t._v("\n            "+t._s(t.$t(t.data.PayLaterNumberOfPaymentsTextModal,{numberOfPayments:t.cardNumberOfPayments}))+"\n          ")]},proxy:!0}],null,!1,1382787741)}):t._e()],1),t._v(" "),"upgrades"==t.data.currentStepTitle.toString().toLowerCase()&&"TILE_SINGLE_LIC_UPGRADE_TITLE"==t.data.discountTitle&&"TILE_LIC_UPGRADE_TITLE"!==t.data.TitleLine1&&"TILE_TECH_LIC_UPGRADE_TITLE"!==t.data.TitleLine1?r("div",{staticClass:"col-6 current-price",class:{"second-price-regular mp0":"upgrades"==t.data.currentStepTitle.toString().toLowerCase()&&"TILE_SINGLE_LIC_UPGRADE_TITLE"==t.data.discountTitle&&"TILE_LIC_UPGRADE_TITLE"!==t.data.TitleLine1&&"TILE_TECH_LIC_UPGRADE_TITLE"!==t.data.TitleLine1}},[r("span",{staticClass:"black--text text-subtitle-1",domProps:{innerHTML:t._s(t.$t(t.PriceHeader.LifetimeBuyFullPrice))}}),t._v(" "),t.data.OldPriceText?r("i18n",{staticClass:"hide-dot-comma-space main d-flex",attrs:{tag:"div",path:t.data.OldPriceText},scopedSlots:t._u([{key:"oldPrice",fn:function(){return[r("i18n-n",{staticClass:"hide-dot-comma-space d-flex",attrs:{tag:"div",value:t.data.MSRP[t.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:t.$store.state.currencies.selectedCurrency.name},scopedSlots:t._u([{key:"currency",fn:function(e){return[r("div",{staticClass:"fs-16 vertical-align-top col mp0",class:t.$store.state.currencies.selectedCurrency.currency},[r("span",[t._v(t._s(t.$store.state.currencies.selectedCurrency.display+e.currency))])])]}},{key:"integer",fn:function(e){return[r("span",{staticClass:"integer text-h4 col mp0"},[t._v(t._s(e.integer))])]}},{key:"group",fn:function(e){return[r("span",{staticClass:"group col mp0"},[t._v(t._s(e.group))])]}},{key:"fraction",fn:function(e){return[r("div",{staticClass:"fs-16 vertical-align-top col mp0"},[r("span",[t._v(t._s(e.fraction))])])]}}],null,!1,1271164722)})]},proxy:!0}],null,!1,2002139140)}):t._e(),t._v(" "),r("br"),t._v(" "),"upgrades"==t.data.currentStepTitle.toString().toLowerCase()&&"TILE_SINGLE_LIC_UPGRADE_TITLE"==t.data.discountTitle&&"TILE_LIC_UPGRADE_TITLE"!==t.data.TitleLine1?r("span",{staticClass:"black--text text-subtitle-1",domProps:{innerHTML:t._s(t.$t(t.PriceHeader.LifetimeBuyListPrice))}}):t._e(),t._v(" "),"upgrades"==t.data.currentStepTitle.toString().toLowerCase()&&"TILE_SINGLE_LIC_UPGRADE_TITLE"==t.data.discountTitle&&"TILE_LIC_UPGRADE_TITLE"!==t.data.TitleLine1?r("i18n",{staticClass:"hide-dot-comma-space main d-flex",attrs:{tag:"div",path:t.data.OldPriceText},scopedSlots:t._u([{key:"oldPrice",fn:function(){return[r("i18n-n",{staticClass:"hide-dot-comma-space main d-flex",attrs:{tag:"div",value:t.data.Prices[t.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:t.$store.state.currencies.selectedCurrency.name},scopedSlots:t._u([{key:"currency",fn:function(e){return[r("div",{staticClass:"fs-16 vertical-align-top col mp0",class:t.$store.state.currencies.selectedCurrency.currency},[r("span",[t._v(t._s(t.$store.state.currencies.selectedCurrency.display+e.currency))])])]}},{key:"integer",fn:function(e){return[r("span",{staticClass:"integer text-h4 col mp0"},[t._v(t._s(e.integer))])]}},{key:"group",fn:function(e){return[r("span",{staticClass:"group col mp0"},[t._v(t._s(e.group))])]}},{key:"fraction",fn:function(e){return[r("div",{staticClass:"fs-16 vertical-align-top col mp0"},[r("span",[t._v(t._s(e.fraction))])])]}}],null,!1,1271164722)})]},proxy:!0}],null,!1,3467369069)}):t._e()],1):t._e(),t._v(" "),"bundle"==t.data.ProductType?r("div",{staticClass:"col-6 current-price",class:{"second-price-regular":"bundle"==t.data.ProductType}},[r("span",{staticClass:"black--text text-subtitle-1",domProps:{innerHTML:t._s(t.$t(t.PriceHeader.BundleBuySeparatly))}}),t._v(" "),t.data.OldPriceText?r("i18n",{staticClass:"hide-dot-comma-space main d-flex",attrs:{tag:"div",path:t.data.OldPriceText},scopedSlots:t._u([{key:"oldPrice",fn:function(){return[r("i18n-n",{staticClass:"hide-dot-comma-space d-flex",attrs:{tag:"div",value:t.data.MSRP[t.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:t.$store.state.currencies.selectedCurrency.name},scopedSlots:t._u([{key:"currency",fn:function(e){return[r("div",{staticClass:"fs-16 vertical-align-top col mp0",class:t.$store.state.currencies.selectedCurrency.currency},[r("span",[t._v(t._s(t.$store.state.currencies.selectedCurrency.display+e.currency))])])]}},{key:"integer",fn:function(e){return[r("span",{staticClass:"integer text-h4 col mp0"},[t._v(t._s(e.integer))])]}},{key:"group",fn:function(e){return[r("span",{staticClass:"group"},[t._v(t._s(e.group))])]}},{key:"fraction",fn:function(e){return[r("div",{staticClass:"fs-16 vertical-align-top col mp0"},[r("span",[t._v(t._s(e.fraction))])])]}}],null,!1,1928215263)})]},proxy:!0}],null,!1,1021750699)}):t._e(),t._v(" "),r("br"),t._v(" "),"bundle"==t.data.ProductType&&"TILE_LICENSE_TITLE"==t.data.discountTitle?r("span",{staticClass:"black--text text-subtitle-1",domProps:{innerHTML:t._s(t.$t(t.PriceHeader.BundleBuyAsBundle))}}):t._e(),t._v(" "),"bundle"==t.data.ProductType&&"TILE_LICENSE_TITLE"==t.data.discountTitle?r("i18n",{staticClass:"hide-dot-comma-space main d-flex",attrs:{tag:"div",path:t.data.OldPriceText},scopedSlots:t._u([{key:"oldPrice",fn:function(){return[r("i18n-n",{staticClass:"hide-dot-comma-space main d-flex",attrs:{tag:"div",value:t.data.Prices[t.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:t.$store.state.currencies.selectedCurrency.name},scopedSlots:t._u([{key:"currency",fn:function(e){return[r("div",{staticClass:"fs-16 vertical-align-top col mp0",class:t.$store.state.currencies.selectedCurrency.currency},[r("span",[t._v(t._s(t.$store.state.currencies.selectedCurrency.display+e.currency))])])]}},{key:"integer",fn:function(e){return[r("span",{staticClass:"integer text-h4 col mp0"},[t._v(t._s(e.integer))])]}},{key:"group",fn:function(e){return[r("span",{staticClass:"group col mp0"},[t._v(t._s(e.group))])]}},{key:"fraction",fn:function(e){return[r("div",{staticClass:"fs-16 vertical-align-top col mp0"},[r("span",[t._v(t._s(e.fraction))])])]}}],null,!1,1271164722)})]},proxy:!0}],null,!1,3467369069)}):t._e()],1):t._e()])]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",{staticClass:"pl-8 py-3 pr-4 d-flex justify-space-between justify-md-end sticky-bottom"},[r("Button",{attrs:{"button-class-name":"text-subtitle-1",color:"primary","button-text":t.data.isSelected?t.data.btnSelected:t.data.btnSelect,"event-name":"select-card"},on:{"select-card":function(e){return t.$emit("selectCard")}}}),t._v(" "),r("Button",{attrs:{"button-class-name":"text-subtitle-1",color:"blue","is-text":"","button-text":"TILE_BTN_CLOSE","event-name":"closeDialog"},on:{closeDialog:function(e){return t.$emit("closeDialog")}}})],1)],1)}),[],!1,null,"50ae44bc",null);e.default=component.exports;o()(component,{Dialog:r(155).default,Button:r(260).default}),o()(component,{VCardActions:d.a,VCardText:d.c,VCardTitle:d.d,VDivider:_.a})}}]);