(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{154:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return m}));var n=r(621),c=r(0),d=Object(c.g)("v-card__actions"),o=Object(c.g)("v-card__subtitle"),l=Object(c.g)("v-card__text"),m=Object(c.g)("v-card__title");n.a},643:function(e,t,r){var content=r(645);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("5cfbafa4",content,!0,{sourceMap:!1})},644:function(e,t,r){"use strict";r(643)},645:function(e,t,r){var n=r(12)(!1);n.push([e.i,'.border-blue[data-v-24a2369e]{border:2px solid #7aaad6}.border-white[data-v-24a2369e]{border:2px solid transparent}.min-height-32px[data-v-24a2369e]{min-height:32px}.min-height-28px[data-v-24a2369e]{min-height:28px}.max-height-64px[data-v-24a2369e]{max-height:64px}.card-title[data-v-24a2369e]{word-break:break-word}.hide-dot-comma-space.main[data-v-24a2369e]{font-size:0}.hide-dot-comma-space.main div[data-v-24a2369e],.hide-dot-comma-space.main span[data-v-24a2369e]{font-family:"Amazon Ember"!important}.hide-dot-comma-space.main .currency[data-v-24a2369e]{width:12px}.hide-dot-comma-space.main .currency.HKD[data-v-24a2369e]{width:21px}.hide-dot-comma-space.main .currency.HKD span[data-v-24a2369e]{font-size:12px}.hide-dot-comma-space.main .fraction[data-v-24a2369e]{width:24px}.current-price-integer[data-v-24a2369e]{font-size:40px!important}.old-price[data-v-24a2369e],.pay-later-price[data-v-24a2369e]{font-family:"Amazon Ember"!important}.old-price[data-v-24a2369e]{color:#565959}.currency[data-v-24a2369e],.fraction[data-v-24a2369e]{position:relative}.currency span[data-v-24a2369e],.fraction span[data-v-24a2369e]{position:absolute;top:-1px}.text-subtitle-1[data-v-24a2369e]{line-height:1.45rem;color:#383838!important}@media (min-width:0px)and (max-width:400px){.v-card[data-v-24a2369e]{width:290px}}@media (min-width:400px)and (max-width:767px){.v-card[data-v-24a2369e]{width:353px}}@media (max-width:767px){.v-card .v-card__title[data-v-24a2369e]{min-height:84px}.v-card .v-card__actions[data-v-24a2369e]{min-height:88px}}@media (min-width:768px){.v-card[data-v-24a2369e]{width:308px;max-width:308px;height:362px}.v-card .upper-part[data-v-24a2369e]{height:calc(100% - 144px)}.v-card .paragraph-1[data-v-24a2369e]{min-height:64px}.v-card .paragraph-2[data-v-24a2369e]{min-height:84px}.v-card .v-card__actions[data-v-24a2369e]{min-height:144px}}',""]),e.exports=n},654:function(e,t,r){"use strict";r.r(t);r(19);var n=r(2).a.extend({components:{},props:{card:{type:Object,required:!0},titleClass:{type:String,required:!1},dialogClass:{type:String,required:!1,default:"upper-part cursor-pointer"},showTitle:{type:Boolean,required:!1,default:!0},cardClass:{type:String,required:!1},maxWidth:{type:Number,required:!1,default:0},cols:{type:Number,required:!1,default:12},colsSm:{type:Number,required:!1},colsMd:{type:Number,required:!1},payload:{type:Object,required:!1},eventName:{type:String,required:!0},buttonClassName:{type:String,required:!1},buttonText:{type:String,required:!1},isSelected:{type:Boolean,required:!1,default:!1},hasButton:{type:Boolean,required:!1,default:!1},iconColor:{type:String,required:!1},iconClass:{type:String,required:!1},selectedCurrency:{type:Object,required:!0},priceDiscount:{type:Number,required:!1,default:0},currentStepTitle:{type:String,required:!1,default:""},discountTitle:{type:String,required:!1,default:""}},computed:{currentButtonText:function(){return 0===this.payload.minCards?this.isSelected?this.card.btnRemove:this.card.btnAddToCart:this.isSelected?this.card.btnUnselect:this.card.btnSelect},cardNumberOfPayments:function(){var e=this.card.Prices.USD;return e<30?2:e>=30&&e<40?3:e>=40&&e<50?4:e>=50&&e<60?5:6},cardPaymentAmount:function(){return this.card.Prices[this.$store.state.currencies.selectedCurrency.currency]/this.cardNumberOfPayments},cardPercentageDiscount:function(){var e=this.card.Prices[this.$store.state.currencies.selectedCurrency.currency],t=this.card.MSRP[this.$store.state.currencies.selectedCurrency.currency],r=t-e;return Math.round(r/t*100)}},methods:{onPricingCardToggled:function(e){this.$emit("pricing-card-toggled",this.payload)}},watch:{}}),c=(r(644),r(24)),d=r(28),o=r.n(d),l=r(621),m=r(154),f=r(242),h=r(192),v=r(48),x=r(3),y=r(11),_=Object(x.a)(h.a,v.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(y.c)("v-hover should only contain a single element",this),element)):(Object(y.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),T=r(240),C=r(633),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[r("v-card",{class:" "+(e.card.isPreSelected||!n&&!e.isSelected?"border-white":"border-blue")+" "+e.cardClass+" "},[r("Dialog",{attrs:{width:600,notificationName:"PricingCardInfo",className:e.dialogClass,data:Object.assign({},e.card,{isSelected:e.isSelected,discountTitle:e.discountTitle,priceDiscount:e.priceDiscount}),eventName:"pricing-card-toggled",isSelected:e.isSelected},on:{"pricing-card-toggled":e.onPricingCardToggled}},[e.card.PriceWithDiscount?r("p",[e._v(e._s(e.card.PriceWithDiscount))]):e._e(),e._v(" "),r("v-card-title",{staticClass:"mb-0 pa-1 d-flex flex-column",class:e.titleClass},[r("v-system-bar",{class:"d-flex align-self-end hAuto "+(e.card.IsRecommended||e.card.IsLimitedTimeOffer?"":"hidden"),attrs:{color:e.card.IsLimitedTimeOffer?"red":e.card.IsRecommended?"green":""}},[e.card.IsLimitedTimeOffer||e.card.IsRecommended?r("i18n",{staticClass:"white--text text-caption text-uppercase",attrs:{tag:"span",path:e.card.Disclaimer},scopedSlots:e._u([e.card.IsLimitedTimeOffer?{key:"disclaimerDiscount",fn:function(){return[r("span",[e._v(e._s(e.card.DisclaimerDiscount))])]},proxy:!0}:null],null,!0)}):e._e()],1),e._v(" "),r("div",{staticClass:"d-flex flex-column px-3 align-self-start"},[r("div",{staticClass:"d-inline text-left"},[r("div",{staticClass:"card-title text-left d-inline",attrs:{title:e.$t(e.card.TitleLine1)},domProps:{innerHTML:e._s(e.$t(e.card.TitleLine1))}}),e._v(" "),e.card.Icon?r("v-icon",{class:e.iconClass,attrs:{color:e.iconColor,title:e.$t(e.card.Icon.Title)}},[e._v("mdi-"+e._s(e.card.Icon.Name)+" ")]):e._e(),e._v(" "),r("SvgRender",{attrs:{name:"info",mediumIcon:"",className:" info-icon d-inline-flex"}})],1),e._v(" "),r("div",{staticClass:"align-self-start min-height-32px"},[e.card.BenefitsText?r("div",{staticClass:"blue--text text-caption",domProps:{innerHTML:e._s(e.$t(e.card.BenefitsText))}}):e._e(),e._v(" "),"whyStep1"==e.card.TypeOfParagraph2?r("Dialog",{attrs:{notificationName:"WhyUpgrade",width:900,className:"text-left"}},[r("div",{staticClass:"blue--text text-caption",domProps:{innerHTML:e._s(e.$t(e.card.Paragraph2))}})]):r("div",{domProps:{innerHTML:e._s(e.$t(e.card.TitleLine2))}})],1)])],1),e._v(" "),r("v-card-subtitle",{staticClass:"text-subtitle-1 paragraph-1 pt-4 pb-0 text-left d-none d-md-block"},[r("span",{class:[{"blue--text":"why"==e.card.TypeOfParagraph1}],domProps:{innerHTML:e._s(e.$t(e.card.Paragraph1))}}),e._v(" "),"list"==e.card.TypeOfParagraph1?r("span",e._l(e.card.WhatsIncludedList,(function(t,n){return r("span",{key:t,staticClass:"blue--text"},[e._v("\n              "+e._s(t)),n!==e.card.WhatsIncludedList.length-1?r("span",{staticClass:"black--text"},[e._v(",")]):e._e()])})),0):e._e()]),e._v(" "),r("v-card-subtitle",{staticClass:"text-subtitle-1 paragraph-2 pt-0 pb-0 text-left"},["why"==e.card.TypeOfParagraph2?r("Dialog",{attrs:{notificationName:"WhyUpgrade",width:900,className:"text-left"}},["why"==e.card.TypeOfParagraph2?r("span",{staticClass:"blue--text text-left link",domProps:{innerHTML:e._s(e.$t(e.card.Paragraph2))}}):e._e()]):"whyLT"===e.card.TypeOfParagraph2?r("Dialog",{attrs:{notificationName:"WhyLifetimeUpgrade",width:900,className:"text-left"}},[r("span",{staticClass:"blue--text text-left link",domProps:{innerHTML:e._s(e.$t(e.card.Paragraph2))}})]):e._e(),e._v(" "),"list"==e.card.TypeOfParagraph2?r("span",e._l(e.card.WhatsIncludedList,(function(t,n){return r("Link",{key:n+"A",attrs:{className:"link-underline",isExternal:"",link:t.Link}},[e._v("\n              "+e._s(t.Name)),n!==e.card.WhatsIncludedList.length-1?r("span",{staticClass:"black--text"},[e._v(",")]):e._e()])})),1):e._e()],1)],1),e._v(" "),r("v-card-actions",{staticClass:"d-flex flex-column justify-center align-end cursor-pointer",class:e.card.IsPreSelected?"no-pointer-events":"",on:{click:e.onPricingCardToggled}},[r("v-card-text",{staticClass:"text-subtitle-1 pt-0 pt-md-3 pb-0"},[r("div",{staticClass:"d-flex flex-wrap"},[r("div",{staticClass:"current-price red--text col-5 pa-0 text-left"},[r("i18n-n",{staticClass:"hide-dot-comma-space main d-flex",attrs:{tag:"div",value:e.currentStepTitle&&"bundles"===e.currentStepTitle.toString().toLowerCase()&&e.discountTitle&&"TILE_LICENSE_TITLE"===e.discountTitle||e.currentStepTitle&&"upgrades"===e.currentStepTitle.toString().toLowerCase()&&"TILE_SINGLE_LIC_UPGRADE_TITLE"===e.discountTitle&&"TILE_LIC_UPGRADE_TITLE"!==e.card.TitleLine1?e.card.Prices[e.$store.state.currencies.selectedCurrency.currency]-e.priceDiscount:e.card.Prices[e.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:e.selectedCurrency.name},scopedSlots:e._u([{key:"currency",fn:function(t){return[r("div",{staticClass:"text-h6 currency vertical-align-top",class:e.$store.state.currencies.selectedCurrency.currency},[r("span",[e._v(e._s(t.currency))])])]}},{key:"integer",fn:function(t){return[r("span",{staticClass:"integer text-h3 current-price-integer",class:{"text-h5":e.card.PriceWithDiscount>1e3,"text-h4":e.card.PriceWithDiscount>100&&e.card.PriceWithDiscount<1e3,"text-h3":e.card.PriceWithDiscount<=100}},[e._v(e._s(t.integer)+"\n                  ")])]}},{key:"group",fn:function(t){return[r("span",{staticClass:"group"},[e._v(e._s(t.group))])]}},{key:"fraction",fn:function(t){return[r("div",{staticClass:"text-h6 vertical-align-top fraction"},[r("span",[e._v(e._s(t.fraction))])])]}}],null,!0)})],1),e._v(" "),r("Button",{attrs:{isDisabled:e.card.IsPreSelected,color:"primary",isOutlined:!0,isText:!0,buttonClassName:e.buttonClassName+" d-md-none d-flex align-self-end ml-auto text-caption font-weight-medium",buttonText:e.currentButtonText,iconName:e.card.IsPreSelected?"lock":""}}),e._v(" "),e.card.OrPayLaterText&&e.card.PayLaterNumberOfPaymentsText&&e.cardNumberOfPayments&&!e.discountTitle?r("div",{staticClass:"current-price text-subtitle-2 col-7 pa-0 d-flex"},[r("v-divider",{staticClass:"d-none d-md-block",attrs:{vertical:""}}),e._v(" "),r("i18n",{staticClass:"text-left pl-3 mr-paylater d-none d-md-block",attrs:{tag:"div",path:e.card.OrPayLaterText},scopedSlots:e._u([{key:"payLaterText",fn:function(){return[r("span",[e._v(e._s(e.$t("TILE_PAY_LATER_NAME")))])]},proxy:!0},{key:"br",fn:function(){return[r("br")]},proxy:!0},{key:"numberOfPayments",fn:function(){return[e._v("\n                  "+e._s(e.$t(e.card.PayLaterNumberOfPaymentsText,{numberOfPayments:e.cardNumberOfPayments}))+"\n                ")]},proxy:!0},{key:"paymentAmount",fn:function(){return[r("span",{staticClass:"pay-later-price text-underlined red--text"},[e._v("\n                    "+e._s(e.$n(e.cardPaymentAmount,{style:"currency",currency:e.selectedCurrency.currency}))+"\n                  ")])]},proxy:!0}],null,!0)})],1):e._e()],1),e._v(" "),r("div",{staticClass:"min-height-28px"},[e.card.OldPriceText&&("bundles"==e.currentStepTitle.toString().toLowerCase()&&"TILE_LICENSE_TITLE"!=e.discountTitle||"upgrades"==e.currentStepTitle.toString().toLowerCase()&&("TILE_SINGLE_LIC_UPGRADE_TITLE"==e.discountTitle&&"TILE_LIC_UPGRADE_TITLE"==e.card.TitleLine1||"TILE_LICENSE_TITLE"==e.discountTitle)||"extras"==e.currentStepTitle.toString().toLowerCase()||"licenses"==e.currentStepTitle.toString().toLowerCase())?r("i18n",{staticClass:"grey--text text-caption text-left w-100 d-flex",attrs:{tag:"div",path:e.card.OldPriceText},scopedSlots:e._u([{key:"oldPrice",fn:function(){return[r("span",{staticClass:"text-underlined px-1 text-decoration-line-through old-price"},[r("i18n-n",{staticClass:"hide-dot-comma-space old-price d-flex",attrs:{tag:"div",value:e.card.MSRP[e.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:e.selectedCurrency.name},scopedSlots:e._u([{key:"currency",fn:function(t){return[r("span",{staticClass:"currency text-caption"},[e._v(e._s(t.currency))])]}},{key:"integer",fn:function(t){return[r("span",{staticClass:"integer text-caption text-decoration-line-through"},[e._v(e._s(t.integer))])]}},{key:"group",fn:function(t){return[r("span",{staticClass:"group text-caption"},[e._v(e._s(t.group))])]}},{key:"fraction",fn:function(t){return[r("span",{staticClass:"fraction text-caption"},[e._v(e._s(t.fraction))])]}}],null,!0)})],1)]},proxy:!0},{key:"percentageDiscount",fn:function(){return[r("span",{staticClass:"old-price-percentage-discount pl-1"},[e._v(e._s(e.cardPercentageDiscount))])]},proxy:!0}],null,!0)}):e._e()],1)]),e._v(" "),r("v-card-text",{staticClass:"py-3 d-none d-md-flex justify-center"},[r("Button",{attrs:{isDisabled:e.card.IsPreSelected,color:"primary",isOutlined:!0,isText:!0,buttonClassName:""+e.buttonClassName,buttonText:e.currentButtonText,iconName:e.card.IsPreSelected?"lock":""}})],1)],1)],1)]}}])})}),[],!1,null,"24a2369e",null);t.default=component.exports;o()(component,{SvgRender:r(98).default,Dialog:r(155).default,Link:r(109).default,Button:r(258).default}),o()(component,{VCard:l.a,VCardActions:m.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VDivider:f.a,VHover:_,VIcon:T.a,VSystemBar:C.a})}}]);