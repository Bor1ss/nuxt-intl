(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{154:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return f}));var n=r(622),c=r(0),d=Object(c.g)("v-card__actions"),o=Object(c.g)("v-card__subtitle"),l=Object(c.g)("v-card__text"),f=Object(c.g)("v-card__title");n.a},644:function(t,e,r){var content=r(646);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("566965ca",content,!0,{sourceMap:!1})},645:function(t,e,r){"use strict";r(644)},646:function(t,e,r){var n=r(12)(!1);n.push([t.i,'.word-break-type[data-v-b972b7f8]{word-break:normal!important}.border-blue[data-v-b972b7f8]{border:2px solid #7aaad6}.border-white[data-v-b972b7f8]{border:2px solid transparent}.min-height-32px[data-v-b972b7f8]{min-height:32px}.min-height-28px[data-v-b972b7f8]{min-height:28px}.max-height-64px[data-v-b972b7f8]{max-height:64px}.card-title[data-v-b972b7f8]{word-break:normal!important}.hide-dot-comma-space.main[data-v-b972b7f8]{font-size:0}.hide-dot-comma-space.main div[data-v-b972b7f8],.hide-dot-comma-space.main span[data-v-b972b7f8]{font-family:"Amazon Ember"!important}.hide-dot-comma-space.main .currency[data-v-b972b7f8]{width:12px}.hide-dot-comma-space.main .currency.HKD[data-v-b972b7f8]{width:30px}.hide-dot-comma-space.main .currency.HKD span[data-v-b972b7f8]{font-size:12px}.hide-dot-comma-space.main .fraction[data-v-b972b7f8]{width:24px}.current-price-integer[data-v-b972b7f8]{font-size:40px!important}.old-price[data-v-b972b7f8],.pay-later-price[data-v-b972b7f8]{font-family:"Amazon Ember"!important}.old-price[data-v-b972b7f8]{color:#565959}.currency[data-v-b972b7f8],.fraction[data-v-b972b7f8]{position:relative}.currency span[data-v-b972b7f8],.fraction span[data-v-b972b7f8]{position:absolute;top:-1px}.text-subtitle-1[data-v-b972b7f8]{line-height:1.45rem;color:#383838!important}@media (min-width:0px)and (max-width:400px){.v-card[data-v-b972b7f8]{width:290px}}@media (min-width:400px)and (max-width:767px){.v-card[data-v-b972b7f8]{width:353px}}@media (max-width:767px){.v-card .v-card__title[data-v-b972b7f8]{min-height:84px}.v-card .v-card__actions[data-v-b972b7f8]{min-height:88px}}@media (min-width:768px){.v-card[data-v-b972b7f8]{width:308px;max-width:308px;height:362px}.v-card .upper-part[data-v-b972b7f8]{height:calc(100% - 144px)}.v-card .paragraph-1[data-v-b972b7f8]{min-height:64px}.v-card .paragraph-2[data-v-b972b7f8]{min-height:84px}.v-card .v-card__actions[data-v-b972b7f8]{min-height:144px}}',""]),t.exports=n},655:function(t,e,r){"use strict";r.r(e);r(19);var n=r(2).a.extend({components:{},props:{card:{type:Object,required:!0},titleClass:{type:String,required:!1},dialogClass:{type:String,required:!1,default:"upper-part cursor-pointer"},showTitle:{type:Boolean,required:!1,default:!0},cardClass:{type:String,required:!1},maxWidth:{type:Number,required:!1,default:0},cols:{type:Number,required:!1,default:12},colsSm:{type:Number,required:!1},colsMd:{type:Number,required:!1},payload:{type:Object,required:!1},eventName:{type:String,required:!0},buttonClassName:{type:String,required:!1},buttonText:{type:String,required:!1},isSelected:{type:Boolean,required:!1,default:!1},hasButton:{type:Boolean,required:!1,default:!1},iconColor:{type:String,required:!1},iconClass:{type:String,required:!1},selectedCurrency:{type:Object,required:!0},priceDiscount:{type:Number,required:!1,default:0},currentStepTitle:{type:String,required:!1,default:""},discountTitle:{type:String,required:!1,default:""}},computed:{currentButtonText:function(){return 0===this.payload.minCards?this.isSelected?this.card.btnRemove:this.card.btnAddToCart:this.isSelected?this.card.btnUnselect:this.card.btnSelect},cardNumberOfPayments:function(){var t=this.card.Prices.USD;return t<30?2:t>=30&&t<40?3:t>=40&&t<50?4:t>=50&&t<60?5:6},cardPaymentAmount:function(){return this.card.Prices[this.$store.state.currencies.selectedCurrency.currency]/this.cardNumberOfPayments},cardPercentageDiscount:function(){var t=this.card.Prices[this.$store.state.currencies.selectedCurrency.currency],e=this.card.MSRP[this.$store.state.currencies.selectedCurrency.currency],r=e-t;return Math.round(r/e*100)}},methods:{onPricingCardToggled:function(t){this.$emit("pricing-card-toggled",this.payload)}},watch:{}}),c=(r(645),r(20)),d=r(29),o=r.n(d),l=r(622),f=r(154),m=r(242),h=r(192),v=r(49),x=r(3),y=r(11),_=Object(x.a)(h.a,v.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(y.c)("v-hover should only contain a single element",this),element)):(Object(y.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),T=r(240),C=r(634),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{class:" "+(t.card.isPreSelected||!n&&!t.isSelected?"border-white":"border-blue")+" "+t.cardClass+" "},[r("Dialog",{attrs:{width:600,notificationName:"PricingCardInfo",className:t.dialogClass,data:Object.assign({},t.card,{isSelected:t.isSelected,discountTitle:t.discountTitle,priceDiscount:t.priceDiscount,currentStepTitle:t.currentStepTitle}),eventName:"pricing-card-toggled",isSelected:t.isSelected},on:{"pricing-card-toggled":t.onPricingCardToggled}},[t.card.PriceWithDiscount?r("p",[t._v(t._s(t.card.PriceWithDiscount))]):t._e(),t._v(" "),r("v-card-title",{staticClass:"mb-0 pa-1 d-flex flex-column",class:t.titleClass},[r("v-system-bar",{class:"d-flex align-self-end hAuto "+(t.card.IsRecommended||t.card.IsLimitedTimeOffer?"":"hidden"),attrs:{color:t.card.IsLimitedTimeOffer?"red":t.card.IsRecommended?"green":""}},[t.card.IsLimitedTimeOffer||t.card.IsRecommended?r("i18n",{staticClass:"white--text text-caption text-uppercase",attrs:{tag:"span",path:t.card.Disclaimer},scopedSlots:t._u([t.card.IsLimitedTimeOffer?{key:"disclaimerDiscount",fn:function(){return[r("span",[t._v(t._s(t.card.DisclaimerDiscount))])]},proxy:!0}:null],null,!0)}):t._e()],1),t._v(" "),r("div",{staticClass:"d-flex flex-column px-3 align-self-start"},[r("div",{staticClass:"d-inline text-left"},[r("div",{staticClass:"card-title text-left d-inline",attrs:{title:t.$t(t.card.TitleLine1)},domProps:{innerHTML:t._s(t.$t(t.card.TitleLine1))}}),t._v(" "),t.card.Icon?r("v-icon",{class:t.iconClass,attrs:{color:t.iconColor,title:t.$t(t.card.Icon.Title)}},[t._v("mdi-"+t._s(t.card.Icon.Name)+" ")]):t._e(),t._v(" "),r("SvgRender",{attrs:{name:"info",mediumIcon:"",className:" info-icon d-inline-flex"}})],1),t._v(" "),r("div",{staticClass:"align-self-start min-height-32px"},[t.card.BenefitsText?r("div",{staticClass:"blue--text text-caption",domProps:{innerHTML:t._s(t.$t(t.card.BenefitsText))}}):t._e(),t._v(" "),"whyStep1"==t.card.TypeOfParagraph2?r("Dialog",{attrs:{notificationName:"WhyUpgrade",width:900,className:"text-left"}},[r("div",{staticClass:"blue--text text-caption",domProps:{innerHTML:t._s(t.$t(t.card.Paragraph2))}})]):r("div",{domProps:{innerHTML:t._s(t.$t(t.card.TitleLine2))}})],1)])],1),t._v(" "),r("v-card-subtitle",{staticClass:"text-subtitle-1 paragraph-1 pt-4 pb-0 text-left d-none d-md-block"},[r("span",{class:[{"blue--text":"why"==t.card.TypeOfParagraph1}],domProps:{innerHTML:t._s(t.$t(t.card.Paragraph1))}}),t._v(" "),"list"==t.card.TypeOfParagraph1?r("span",t._l(t.card.WhatsIncludedList,(function(e,n){return r("span",{key:e,staticClass:"blue--text"},[t._v("\n              "+t._s(e)),n!==t.card.WhatsIncludedList.length-1?r("span",{staticClass:"black--text"},[t._v(",")]):t._e()])})),0):t._e()]),t._v(" "),r("v-card-subtitle",{staticClass:"text-subtitle-1 paragraph-2 pt-0 pb-0 text-left"},["why"==t.card.TypeOfParagraph2?r("Dialog",{attrs:{notificationName:"WhyUpgrade",width:900,className:"text-left"}},["why"==t.card.TypeOfParagraph2?r("span",{staticClass:"blue--text text-left link",domProps:{innerHTML:t._s(t.$t(t.card.Paragraph2))}}):t._e()]):"whyLT"===t.card.TypeOfParagraph2?r("Dialog",{attrs:{notificationName:"WhyLifetimeUpgrade",width:900,className:"text-left"}},[r("span",{staticClass:"blue--text text-left link",domProps:{innerHTML:t._s(t.$t(t.card.Paragraph2))}})]):t._e(),t._v(" "),"list"==t.card.TypeOfParagraph2?r("span",t._l(t.card.WhatsIncludedList,(function(e,n){return r("Link",{key:n+"A",attrs:{className:"link-underline",isExternal:"",link:e.Link}},[t._v("\n              "+t._s(e.Name)),n!==t.card.WhatsIncludedList.length-1?r("span",{staticClass:"black--text"},[t._v(",")]):t._e()])})),1):t._e()],1)],1),t._v(" "),r("v-card-actions",{staticClass:"d-flex flex-column justify-center align-end cursor-pointer",class:t.card.IsPreSelected?"no-pointer-events":"",on:{click:t.onPricingCardToggled}},[r("v-card-text",{staticClass:"text-subtitle-1 pt-0 pt-md-3 pb-0"},[r("div",{staticClass:"d-flex flex-wrap row"},[r("div",{staticClass:"current-price red--text  pa-0 text-left",class:t.currentStepTitle&&"bundles"===t.currentStepTitle.toString().toLowerCase()&&t.discountTitle&&"TILE_LICENSE_TITLE"===t.discountTitle?"col-12":"hkd"===t.$store.state.currencies.selectedCurrency.currency.toString().toLowerCase()?"col-md-6 col-sm-7 col-12 col-lg-6":"col-lg-5 col-md-5 col-sm-7  col-12"},[r("i18n-n",{staticClass:"hide-dot-comma-space main d-flex",attrs:{tag:"div",value:t.currentStepTitle&&"bundles"===t.currentStepTitle.toString().toLowerCase()&&t.discountTitle&&"TILE_LICENSE_TITLE"===t.discountTitle||t.currentStepTitle&&"upgrades"===t.currentStepTitle.toString().toLowerCase()&&"TILE_SINGLE_LIC_UPGRADE_TITLE"===t.discountTitle&&"TILE_LIC_UPGRADE_TITLE"!==t.card.TitleLine1?t.card.Prices[t.$store.state.currencies.selectedCurrency.currency]-t.priceDiscount:t.card.Prices[t.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:t.selectedCurrency.name},scopedSlots:t._u([{key:"currency",fn:function(e){return[r("div",{staticClass:"text-h6 currency vertical-align-top",class:t.$store.state.currencies.selectedCurrency.currency},[r("span",[t._v(t._s(e.currency))])])]}},{key:"integer",fn:function(e){return[r("span",{staticClass:"integer text-h3 current-price-integer",class:{"text-h5":t.card.PriceWithDiscount>1e3,"text-h4":t.card.PriceWithDiscount>100&&t.card.PriceWithDiscount<1e3,"text-h3":t.card.PriceWithDiscount<=100}},[t._v(t._s(e.integer)+"\n\n                  ")])]}},{key:"group",fn:function(e){return[r("span",{staticClass:"group"},[t._v(t._s(e.group))])]}},{key:"fraction",fn:function(e){return[r("div",{staticClass:"text-h6 vertical-align-top fraction"},[r("span",[t._v(t._s(e.fraction))])])]}}],null,!0)})],1),t._v(" "),r("Button",{attrs:{isDisabled:t.card.IsPreSelected,color:"primary",isOutlined:!0,isText:!0,buttonClassName:t.buttonClassName+" d-md-none d-flex align-self-end ml-auto text-caption-button font-weight-medium",buttonText:t.currentButtonText,iconName:t.card.IsPreSelected?"lock":""}}),t._v(" "),t.card.OrPayLaterText&&t.card.PayLaterNumberOfPaymentsText&&t.cardNumberOfPayments&&("bundles"==t.currentStepTitle.toString().toLowerCase()&&"TILE_LICENSE_TITLE"!=t.discountTitle||"upgrades"==t.currentStepTitle.toString().toLowerCase()&&("TILE_SINGLE_LIC_UPGRADE_TITLE"==t.discountTitle&&"TILE_LIC_UPGRADE_TITLE"==t.card.TitleLine1||"TILE_LICENSE_TITLE"==t.discountTitle)||"extras"==t.currentStepTitle.toString().toLowerCase()||!t.discountTitle||"licenses"==t.currentStepTitle.toString().toLowerCase())?r("div",{staticClass:"current-price text-subtitle-2 pa-0 d-flex",class:t.currentStepTitle&&"bundles"===t.currentStepTitle.toString().toLowerCase()&&t.discountTitle&&"TILE_LICENSE_TITLE"===t.discountTitle?"col-12":"hkd"===t.$store.state.currencies.selectedCurrency.currency.toString().toLowerCase()?"col-md-6 col-sm-6 col-12 col-lg-6":"col-lg-7 col-md-6 col-sm-5  col-12"},[r("v-divider",{staticClass:"d-none d-md-block",attrs:{vertical:""}}),t._v(" "),r("i18n",{staticClass:"text-left pl-3 mr-paylater d-none d-md-block",attrs:{tag:"div",path:t.card.OrPayLaterText},scopedSlots:t._u([{key:"payLaterText",fn:function(){return[r("span",[t._v(t._s(t.$t("TILE_PAY_LATER_NAME")))])]},proxy:!0},{key:"br",fn:function(){return[r("br")]},proxy:!0},{key:"numberOfPayments",fn:function(){return[t._v("\n                  "+t._s(t.$t(t.card.PayLaterNumberOfPaymentsText,{numberOfPayments:t.cardNumberOfPayments}))+"\n                ")]},proxy:!0},{key:"paymentAmount",fn:function(){return[r("span",{staticClass:"pay-later-price text-underlined red--text"},[t._v("\n                    "+t._s(t.$n(t.cardPaymentAmount,{style:"currency",currency:t.selectedCurrency.currency}))+"\n                  ")])]},proxy:!0}],null,!0)})],1):t._e()],1),t._v(" "),r("div",{staticClass:"min-height-28px row"},[t.card.OldPriceText&&("bundles"==t.currentStepTitle.toString().toLowerCase()&&"TILE_LICENSE_TITLE"!=t.discountTitle||"upgrades"==t.currentStepTitle.toString().toLowerCase()&&("TILE_SINGLE_LIC_UPGRADE_TITLE"==t.discountTitle&&"TILE_LIC_UPGRADE_TITLE"==t.card.TitleLine1||"TILE_LICENSE_TITLE"==t.discountTitle)||"extras"==t.currentStepTitle.toString().toLowerCase()||!t.discountTitle||"licenses"==t.currentStepTitle.toString().toLowerCase())?r("i18n",{staticClass:"grey--text text-caption text-left w-100 d-flex",attrs:{tag:"span",path:t.card.OldPriceText},scopedSlots:t._u([{key:"oldPrice",fn:function(){return[r("span",{staticClass:"text-underlined px-1 text-decoration-line-through old-price"},[r("i18n-n",{staticClass:"hide-dot-comma-space old-price d-flex",attrs:{tag:"span",value:t.card.MSRP[t.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:t.selectedCurrency.name},scopedSlots:t._u([{key:"currency",fn:function(e){return[r("span",{staticClass:"currency text-caption"},[t._v(t._s(e.currency))])]}},{key:"integer",fn:function(e){return[r("span",{staticClass:"integer text-caption text-decoration-line-through"},[t._v(t._s(e.integer))])]}},{key:"group",fn:function(e){return[r("span",{staticClass:"group text-caption"},[t._v(t._s(e.group))])]}},{key:"fraction",fn:function(e){return[r("span",{staticClass:"fraction text-caption"},[t._v(t._s(e.fraction))])]}}],null,!0)})],1)]},proxy:!0},{key:"percentageDiscount",fn:function(){return[r("span",{staticClass:"old-price-percentage-discount pl-1"},[t._v(t._s(t.cardPercentageDiscount))])]},proxy:!0}],null,!0)}):t._e()],1)]),t._v(" "),r("v-card-text",{staticClass:"py-3 d-none d-md-flex justify-center"},[r("Button",{attrs:{isDisabled:t.card.IsPreSelected,color:"primary",isOutlined:!0,isText:!0,buttonClassName:""+t.buttonClassName,buttonText:t.currentButtonText,iconName:t.card.IsPreSelected?"lock":""}})],1)],1)],1)]}}])})}),[],!1,null,"b972b7f8",null);e.default=component.exports;o()(component,{SvgRender:r(98).default,Dialog:r(155).default,Link:r(109).default,Button:r(258).default}),o()(component,{VCard:l.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VDivider:m.a,VHover:_,VIcon:T.a,VSystemBar:C.a})}}]);