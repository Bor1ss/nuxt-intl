(window.webpackJsonp=window.webpackJsonp||[]).push([[17,6],{326:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return f}));var n=r(598),c=r(0),o=Object(c.g)("v-card__actions"),d=Object(c.g)("v-card__subtitle"),l=Object(c.g)("v-card__text"),f=Object(c.g)("v-card__title");n.a},622:function(t,e,r){var content=r(624);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("3bc925a3",content,!0,{sourceMap:!1})},623:function(t,e,r){"use strict";r(622)},624:function(t,e,r){var n=r(14)(!1);n.push([t.i,'.border-blue[data-v-6487bbae]{border:2px solid #7aaad6}.border-white[data-v-6487bbae]{border:2px solid transparent}.min-height-32px[data-v-6487bbae]{min-height:32px}.min-height-28px[data-v-6487bbae]{min-height:28px}.max-height-64px[data-v-6487bbae]{max-height:64px}.card-title[data-v-6487bbae]{word-break:break-word}.hide-dot-comma-space.main[data-v-6487bbae]{font-size:0}.hide-dot-comma-space.main div[data-v-6487bbae],.hide-dot-comma-space.main span[data-v-6487bbae]{font-family:"Amazon Ember"!important}.hide-dot-comma-space.main .currency[data-v-6487bbae]{width:12px}.hide-dot-comma-space.main .currency.HKD[data-v-6487bbae]{width:21px}.hide-dot-comma-space.main .currency.HKD span[data-v-6487bbae]{font-size:12px}.hide-dot-comma-space.main .fraction[data-v-6487bbae]{width:24px}.current-price-integer[data-v-6487bbae]{font-size:40px!important}.old-price[data-v-6487bbae],.pay-later-price[data-v-6487bbae]{font-family:"Amazon Ember"!important}.old-price[data-v-6487bbae]{color:#565959}.currency[data-v-6487bbae],.fraction[data-v-6487bbae]{position:relative}.currency span[data-v-6487bbae],.fraction span[data-v-6487bbae]{position:absolute;top:-1px}.text-subtitle-1[data-v-6487bbae]{line-height:1.45rem;color:#383838!important}@media (min-width:0px)and (max-width:400px){.v-card[data-v-6487bbae]{width:290px}}@media (min-width:400px)and (max-width:767px){.v-card[data-v-6487bbae]{width:353px}}@media (max-width:767px){.v-card .v-card__title[data-v-6487bbae]{min-height:84px}.v-card .v-card__actions[data-v-6487bbae]{min-height:88px}}@media (min-width:768px){.v-card[data-v-6487bbae]{width:308px;max-width:308px;height:362px}.v-card .upper-part[data-v-6487bbae]{height:calc(100% - 144px)}.v-card .paragraph-1[data-v-6487bbae]{min-height:64px}.v-card .paragraph-2[data-v-6487bbae]{min-height:84px}.v-card .v-card__actions[data-v-6487bbae]{min-height:144px}}',""]),t.exports=n},626:function(t,e,r){var content=r(639);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("6de2099e",content,!0,{sourceMap:!1})},633:function(t,e,r){"use strict";r.r(e);r(19);var n=r(2).a.extend({components:{},props:{card:{type:Object,required:!0},titleClass:{type:String,required:!1},dialogClass:{type:String,required:!1,default:"upper-part cursor-pointer"},showTitle:{type:Boolean,required:!1,default:!0},cardClass:{type:String,required:!1},maxWidth:{type:Number,required:!1,default:0},cols:{type:Number,required:!1,default:12},colsSm:{type:Number,required:!1},colsMd:{type:Number,required:!1},payload:{type:Object,required:!1},eventName:{type:String,required:!0},buttonClassName:{type:String,required:!1},buttonText:{type:String,required:!1},isSelected:{type:Boolean,required:!1,default:!1},hasButton:{type:Boolean,required:!1,default:!1},iconColor:{type:String,required:!1},iconClass:{type:String,required:!1},selectedCurrency:{type:Object,required:!0}},computed:{currentButtonText:function(){return 0===this.payload.minCards?this.isSelected?this.card.btnRemove:this.card.btnAddToCart:this.isSelected?this.card.btnUnselect:this.card.btnSelect},cardNumberOfPayments:function(){var t=this.card.Prices.USD;return t<30?2:t>=30&&t<40?3:t>=40&&t<50?4:t>=50&&t<60?5:6},cardPaymentAmount:function(){return this.card.Prices[this.$store.state.currencies.selectedCurrency.currency]/this.cardNumberOfPayments},cardPercentageDiscount:function(){var t=this.card.Prices[this.$store.state.currencies.selectedCurrency.currency],e=this.card.MSRP[this.$store.state.currencies.selectedCurrency.currency],r=e-t;return Math.round(r/e*100)}},methods:{onPricingCardToggled:function(t){this.$emit("pricing-card-toggled",this.payload)}},watch:{}}),c=(r(623),r(29)),o=r(36),d=r.n(o),l=r(598),f=r(326),h=r(231),m=r(188),v=r(45),x=r(3),y=r(9),C=Object(x.a)(m.a,v.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(y.c)("v-hover should only contain a single element",this),element)):(Object(y.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),S=r(229),_=r(612),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{class:" "+(t.card.isPreSelected||!n&&!t.isSelected?"border-white":"border-blue")+" "+t.cardClass+" "},[r("Dialog",{attrs:{width:600,notificationName:"PricingCardInfo",className:t.dialogClass,data:Object.assign({},t.card,{isSelected:t.isSelected}),eventName:"pricing-card-toggled",isSelected:t.isSelected},on:{"pricing-card-toggled":t.onPricingCardToggled}},[t.card.PriceWithDiscount?r("p",[t._v(t._s(t.card.PriceWithDiscount))]):t._e(),t._v(" "),r("v-card-title",{staticClass:"mb-0 pa-1 d-flex flex-column",class:t.titleClass},[r("v-system-bar",{class:"d-flex align-self-end "+(t.card.IsRecommended||t.card.IsLimitedTimeOffer?"":"hidden"),attrs:{color:t.card.IsLimitedTimeOffer?"red":t.card.IsRecommended?"green":"",height:"21"}},[t.card.IsLimitedTimeOffer||t.card.IsRecommended?r("i18n",{staticClass:"white--text text-caption text-uppercase",attrs:{tag:"span",path:t.card.Disclaimer},scopedSlots:t._u([t.card.IsLimitedTimeOffer?{key:"disclaimerDiscount",fn:function(){return[r("span",[t._v(t._s(t.card.DisclaimerDiscount))])]},proxy:!0}:null],null,!0)}):t._e()],1),t._v(" "),r("div",{staticClass:"d-flex flex-column px-3 align-self-start max-height-64px"},[r("div",{staticClass:"d-inline text-left"},[r("div",{staticClass:"card-title text-left d-inline",attrs:{title:t.$t(t.card.TitleLine1)},domProps:{innerHTML:t._s(t.$t(t.card.TitleLine1))}}),t._v(" "),t.card.Icon?r("v-icon",{class:t.iconClass,attrs:{color:t.iconColor,title:t.$t(t.card.Icon.Title)}},[t._v("mdi-"+t._s(t.card.Icon.Name)+" ")]):t._e(),t._v(" "),r("SvgRender",{attrs:{name:"info",mediumIcon:"",className:" info-icon d-inline-flex"}})],1),t._v(" "),r("div",{staticClass:"align-self-start min-height-32px"},[t.card.BenefitsText?r("div",{staticClass:"blue--text text-caption",domProps:{innerHTML:t._s(t.$t(t.card.BenefitsText))}}):r("div",{domProps:{innerHTML:t._s(t.$t(t.card.TitleLine2))}})])])],1),t._v(" "),r("v-card-subtitle",{staticClass:"text-subtitle-1 paragraph-1 pt-4 pb-0 text-left d-none d-md-block"},[r("span",{class:[{"blue--text":"why"==t.card.TypeOfParagraph1}],domProps:{innerHTML:t._s(t.$t(t.card.Paragraph1))}}),t._v(" "),"list"==t.card.TypeOfParagraph1?r("span",t._l(t.card.WhatsIncludedList,(function(e,n){return r("span",{key:e,staticClass:"blue--text"},[t._v("\n              "+t._s(e)),n!==t.card.WhatsIncludedList.length-1?r("span",{staticClass:"black--text"},[t._v(",")]):t._e()])})),0):t._e()]),t._v(" "),r("v-card-subtitle",{staticClass:"text-subtitle-1 paragraph-2 pt-0 pb-0 text-left"},["why"==t.card.TypeOfParagraph2?r("Dialog",{attrs:{notificationName:"WhyUpgrade",width:900,className:"text-left"}},[r("span",{staticClass:"blue--text text-left link",domProps:{innerHTML:t._s(t.$t(t.card.Paragraph2))}})]):r("Dialog",{attrs:{notificationName:"WhyLifetimeUpgrade",width:900,className:"text-left"}},[r("span",{staticClass:"blue--text text-left link",domProps:{innerHTML:t._s(t.$t(t.card.Paragraph2))}})]),t._v(" "),"list"==t.card.TypeOfParagraph2?r("span",t._l(t.card.WhatsIncludedList,(function(e,n){return r("Link",{key:n+"A",attrs:{className:"link-underline",isExternal:"",link:e.Link}},[t._v("\n            "+t._s(e.Name)),n!==t.card.WhatsIncludedList.length-1?r("span",{staticClass:"black--text"},[t._v(",")]):t._e()])})),1):t._e()],1)],1),t._v(" "),r("v-card-actions",{staticClass:"d-flex flex-column justify-center align-end cursor-pointer",class:t.card.IsPreSelected?"no-pointer-events":"",on:{click:t.onPricingCardToggled}},[r("v-card-text",{staticClass:"text-subtitle-1 pt-0 pt-md-3 pb-0"},[r("div",{staticClass:"d-flex flex-wrap"},[r("div",{staticClass:"current-price red--text col-5 pa-0 text-left"},[r("i18n-n",{staticClass:"hide-dot-comma-space main d-flex",attrs:{tag:"div",value:t.card.Prices[t.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:t.selectedCurrency.name},scopedSlots:t._u([{key:"currency",fn:function(e){return[r("div",{staticClass:"text-h6 currency vertical-align-top",class:t.$store.state.currencies.selectedCurrency.currency},[r("span",[t._v(t._s(e.currency))])])]}},{key:"integer",fn:function(e){return[r("span",{staticClass:"integer text-h3 current-price-integer",class:{"text-h5":t.card.PriceWithDiscount>1e3,"text-h4":t.card.PriceWithDiscount>100&&t.card.PriceWithDiscount<1e3,"text-h3":t.card.PriceWithDiscount<=100}},[t._v(t._s(e.integer))])]}},{key:"group",fn:function(e){return[r("span",{staticClass:"group"},[t._v(t._s(e.group))])]}},{key:"fraction",fn:function(e){return[r("div",{staticClass:"text-h6 vertical-align-top fraction"},[r("span",[t._v(t._s(e.fraction))])])]}}],null,!0)})],1),t._v(" "),r("Button",{attrs:{isDisabled:t.card.IsPreSelected,color:"primary",isOutlined:!0,isText:!0,buttonClassName:t.buttonClassName+" d-md-none d-flex align-self-end ml-auto text-caption font-weight-medium",buttonText:t.currentButtonText,iconName:t.card.IsPreSelected?"lock":""}}),t._v(" "),t.card.OrPayLaterText&&t.card.PayLaterNumberOfPaymentsText&&t.cardNumberOfPayments?r("div",{staticClass:"current-price text-subtitle-2 col-7 pa-0 d-flex"},[r("v-divider",{staticClass:"d-none d-md-block",attrs:{vertical:""}}),t._v(" "),r("i18n",{staticClass:"text-left pl-3 mr-paylater d-none d-md-block",attrs:{tag:"div",path:t.card.OrPayLaterText},scopedSlots:t._u([{key:"payLaterText",fn:function(){return[r("span",[t._v(t._s(t.$t("TILE_PAY_LATER_NAME")))])]},proxy:!0},{key:"br",fn:function(){return[r("br")]},proxy:!0},{key:"numberOfPayments",fn:function(){return[t._v("\n                 \n                    "+t._s(t.$t(t.card.PayLaterNumberOfPaymentsText,{numberOfPayments:t.cardNumberOfPayments}))+"\n                 \n                ")]},proxy:!0},{key:"paymentAmount",fn:function(){return[r("span",{staticClass:"pay-later-price text-underlined red--text"},[t._v(t._s(t.$n(t.cardPaymentAmount,{style:"currency",currency:t.selectedCurrency.currency})))])]},proxy:!0}],null,!0)})],1):t._e()],1),t._v(" "),r("div",{staticClass:"min-height-28px"},[t.card.OldPriceText?r("i18n",{staticClass:"grey--text text-caption text-left w-100 d-flex",attrs:{tag:"div",path:t.card.OldPriceText},scopedSlots:t._u([{key:"oldPrice",fn:function(){return[r("span",{staticClass:"text-underlined px-1 text-decoration-line-through old-price"},[r("i18n-n",{staticClass:"hide-dot-comma-space old-price d-flex",attrs:{tag:"div",value:t.card.MSRP[t.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:t.selectedCurrency.name},scopedSlots:t._u([{key:"currency",fn:function(e){return[r("span",{staticClass:"currency text-caption"},[t._v(t._s(e.currency))])]}},{key:"integer",fn:function(e){return[r("span",{staticClass:"integer text-caption text-decoration-line-through"},[t._v(t._s(e.integer))])]}},{key:"group",fn:function(e){return[r("span",{staticClass:"group text-caption"},[t._v(t._s(e.group))])]}},{key:"fraction",fn:function(e){return[r("span",{staticClass:"fraction text-caption"},[t._v(t._s(e.fraction))])]}}],null,!0)})],1)]},proxy:!0},{key:"percentageDiscount",fn:function(){return[r("span",{staticClass:"old-price-percentage-discount pl-1"},[t._v(t._s(t.cardPercentageDiscount))])]},proxy:!0}],null,!0)}):t._e()],1)]),t._v(" "),r("v-card-text",{staticClass:"py-3 d-none d-md-flex justify-center"},[r("Button",{attrs:{isDisabled:t.card.IsPreSelected,color:"primary",isOutlined:!0,isText:!0,buttonClassName:""+t.buttonClassName,buttonText:t.currentButtonText,iconName:t.card.IsPreSelected?"lock":""}})],1)],1)],1)]}}])})}),[],!1,null,"6487bbae",null);e.default=component.exports;d()(component,{SvgRender:r(126).default,Dialog:r(328).default,Link:r(151).default,Button:r(247).default}),d()(component,{VCard:l.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VDivider:h.a,VHover:C,VIcon:S.a,VSystemBar:_.a})},638:function(t,e,r){"use strict";r(626)},639:function(t,e,r){var n=r(14)(!1);n.push([t.i,'.animation-out-from-left[data-v-3b736957]{-webkit-animation:neo-fade-out-from-left-data-v-3b736957 .3s cubic-bezier(.4,0,1,1) 0s 1 forwards;animation:neo-fade-out-from-left-data-v-3b736957 .3s cubic-bezier(.4,0,1,1) 0s 1 forwards}.animation-in-from-right[data-v-3b736957]{-webkit-animation:neo-fade-in-from-right-data-v-3b736957 .3s cubic-bezier(.4,0,1,1) 0s 1 forwards;animation:neo-fade-in-from-right-data-v-3b736957 .3s cubic-bezier(.4,0,1,1) 0s 1 forwards}.animation-in-from-left[data-v-3b736957]{-webkit-animation:neo-fade-in-from-left-data-v-3b736957 .3s cubic-bezier(.4,0,1,1) 0s 1 forwards;animation:neo-fade-in-from-left-data-v-3b736957 .3s cubic-bezier(.4,0,1,1) 0s 1 forwards}.animation-out-from-right[data-v-3b736957]{-webkit-animation:neo-fade-out-from-right-data-v-3b736957 .3s cubic-bezier(.4,0,1,1) 0s 1 forwards;animation:neo-fade-out-from-right-data-v-3b736957 .3s cubic-bezier(.4,0,1,1) 0s 1 forwards}@-webkit-keyframes neo-fade-out-from-right-data-v-3b736957{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(24px)}}@keyframes neo-fade-out-from-right-data-v-3b736957{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(24px)}}@-webkit-keyframes neo-fade-in-from-right-data-v-3b736957{0%{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}@keyframes neo-fade-in-from-right-data-v-3b736957{0%{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes neo-fade-out-from-left-data-v-3b736957{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-24px)}}@keyframes neo-fade-out-from-left-data-v-3b736957{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-24px)}}@-webkit-keyframes neo-fade-in-from-left-data-v-3b736957{0%{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:translateX(0)}}@keyframes neo-fade-in-from-left-data-v-3b736957{0%{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:translateX(0)}}.cards-container[data-v-3b736957]{min-height:360px}[data-v-3b736957] .v-slide-group__next:not(.v-slide-group__next--disabled) .theme--light.v-icon,[data-v-3b736957] .v-slide-group__prev:not(.v-slide-group__prev--disabled) .theme--light.v-icon{font-size:36px;color:#1976d2}[data-v-3b736957] .v-slide-group__content{justify-content:center}.card-block[data-v-3b736957]{margin:0 22px}[data-v-3b736957] .v-slide-group__next{margin-right:-60px;min-width:60px}[data-v-3b736957] .v-slide-group__prev{margin-left:-60px;min-width:60px}[data-v-3b736957] .v-icon:hover{transform:scale(1.3)}.container[data-v-3b736957]{margin:0 auto;justify-content:center;align-items:center;flex-direction:column;text-align:center}.container .cards[data-v-3b736957]{width:100%}.container .cards div[data-v-3b736957]{display:flex}.container>div.upper[data-v-3b736957]{display:flex;margin-bottom:50px}.container div.steps[data-v-3b736957]{width:100%}.title[data-v-3b736957]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-3b736957]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-3b736957]{padding-top:15px}.v-slide-group[data-v-3b736957] .v-slide-group__next--disabled .v-icon,.v-slide-group[data-v-3b736957] .v-slide-group__prev--disabled .v-icon{display:none}@media(max-width:1090px){[data-v-3b736957] .v-slide-group__next{margin-right:-40px;min-width:40px}[data-v-3b736957] .v-slide-group__prev{margin-left:-40px;min-width:40px}}@media(max-width:1050px){[data-v-3b736957] .v-slide-group__next{margin-right:-20px;min-width:20px}[data-v-3b736957] .v-slide-group__prev{margin-left:-20px;min-width:20px}}@media(max-width:1010px){[data-v-3b736957] .v-slide-group__next{margin-right:-15px;min-width:15px}[data-v-3b736957] .v-slide-group__prev{margin-left:-15px;min-width:15px}}@media(max-width:991px){[data-v-3b736957] .v-slide-group__next{margin-right:-40px;min-width:40px}[data-v-3b736957] .v-slide-group__prev{margin-left:-40px;min-width:40px}.card-block[data-v-3b736957]{margin:0 18px}}@media (min-width:768px){.cards-container[data-v-3b736957]{min-height:568px}}',""]),t.exports=n},640:function(t,e,r){var content=r(641);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("8f7a87bc",content,!0,{sourceMap:!1})},641:function(t,e,r){var n=r(14)(!1);n.push([t.i,".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden;touch-action:none}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}",""]),t.exports=n},659:function(t,e,r){"use strict";r.r(e);r(7),r(4),r(12),r(6),r(13);var n=r(1),c=r(11),o=(r(42),r(152),r(5),r(72),r(27),r(43),r(28),r(62),r(329),r(58),r(84));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={props:{purchase:{type:Object,default:function(){return{discountsAfterAddToCart:"DISCOUNTS_AFTER_ADD_TO_CART"}}}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.params,t.error,!(r=t.payload)){e.next=3;break}return e.abrupt("return",{payload:r});case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{payload:null,isLoaded:!1,model:null,isRedirectAfterNext:!1,isRedirectAfterBack:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({cards:function(t){return t.cards.cards},currentStepCards:function(t){return t.cards.currentStepCards},reachedStepNumber:function(t){return t.steps.reachedStepNumber},currentStepSelectedCards:function(t){return t.cards.currentStepSelectedCards},selectedCards:function(t){return t.cards.selectedCards},steps:function(t){return t.steps.steps},nextStepLink:function(t){return t.steps.nextStepLink},previousStepLink:function(t){return t.steps.previousStepLink},currentSteps:function(t){return t.steps.currentSteps},currentStep:function(t){return t.steps.currentStep},currentStepNumber:function(t){return t.steps.currentStepNumber},currentStepMaxCards:function(t){return t.steps.currentStepMaxCards},currentStepMinCards:function(t){return t.steps.currentStepMinCards},isRedirectNext:function(t){return t.steps.isRedirectNext},isRedirectBack:function(t){return t.steps.isRedirectBack},selectedCurrency:function(t){return t.currencies.selectedCurrency},selectedLocale:function(t){return t.locales.selectedLocale}})),methods:{onCardToggled:function(t){var e=this;this.toggleCard(t),this.setNextPreviousLinks(),1!==this.currentStepMaxCards||1!==this.currentStepSelectedCards.length||this.isLastStep()||(this.$store.commit("steps/setIsisRedirectNext"),setTimeout((function(){1===e.currentStepSelectedCards.length&&e.$router.push({path:e.getLocalePath()+"/purchase/"+e.nextStepLink})}),300))},getLocalePath:function(){return"en"==this.selectedLocale.code?"":"/"+this.selectedLocale.code},deleteCardsLicenses:function(t,e){return t.stepLink!==this.steps[0].Link||(this.$store.commit("cards/deleteSelectedCard",{index:0,amount:e}),this.$store.commit("steps/setReachedStepNumber",0),0!==this.selectedCards.length||this.$store.commit("steps/setCurrentSteps",this.steps),!1)},toggleCard:function(t){var e=this,r=this.selectedCards.some((function(e){return e.Id===t.id}));if(r&&!t.fromQueryParams){if(this.deleteCardsLicenses(t,this.selectedCards.length)){var n=this.selectedCards.findIndex((function(e){return e.Id===t.id}));this.$store.commit("cards/deleteSelectedCard",{index:n,amount:1}),this.addStep(t.stepLink)}}else{if(!r){var c={Id:t.id,CartId:t.cartId,StepLink:t.stepLink};this.$store.commit("cards/addSelectedCard",c)}if(this.cards.filter((function(r){return(null==r?void 0:r.StepLink)==t.stepLink&&e.selectedCards.some((function(t){return t.Id===r.Id}))})).length>t.maxCards&&this.deleteCardsLicenses(t,this.selectedCards.length-1)){var o=this.selectedCards.findIndex((function(r){return r.Id==e.currentStepSelectedCards.find((function(e){return e.Id!==t.id})).Id}));this.$store.commit("cards/deleteSelectedCard",{index:o,amount:1})}this.deleteStep(t.stepLink)}this.$store.commit("cards/setCurrentStepSelectedCards",this.currentStep)},setNextPreviousLinks:function(){var t,e,r,n=this,c=this.currentSteps.findIndex((function(t){return t.Link===n.currentStep}));this.steps[0].Link==this.currentStep&&(null===(t=this.currentStepSelectedCards)||void 0===t?void 0:t.length)>0?(this.$store.commit("steps/setNextStepLink",this.currentStepSelectedCards[0].NextStep),this.$store.commit("steps/setPreviousStepLink","")):(this.$store.commit("steps/setPreviousStepLink",null===(e=this.currentSteps[c-1])||void 0===e?void 0:e.Link),this.$store.commit("steps/setNextStepLink",null===(r=this.currentSteps[c+1])||void 0===r?void 0:r.Link))},isSelected:function(t){return this.selectedCards.some((function(e){return e.Id===t}))},isLastStep:function(){var t,e=null===(t=this.currentSteps[this.currentSteps.length-1])||void 0===t?void 0:t.Link;return this.currentStep==e},deleteStep:function(t){var e=this.deleteStepLink(t);if(e){this.$store.commit("steps/setCurrentSteps",this.currentSteps.filter((function(t){return t.Link!==e})));var r=this.selectedCards.findIndex((function(t){return t.StepLink===e}));-1!==r&&this.$store.commit("cards/deleteSelectedCard",{index:r,amount:1})}},addStep:function(t){var e,r=this;if(!["upgrades","bundles"].includes(t))return"";var n=null===(e=this.cards.find((function(t){return t.Id===r.selectedCards[0].Id})))||void 0===e?void 0:e.Steps;this.$store.commit("steps/setCurrentSteps",this.steps.filter((function(t){return n.includes(t.Link)})))},deleteStepLink:function(t){return["upgrades","bundles"].includes(t)?"upgrades"===t?"bundles":"extras":""},showExtrasStep:function(){var t,e=this;if(this.selectedCards.some((function(t){return"bundles"===t.StepLink}))&&this.selectedCards.some((function(t){return"extras"===t.StepLink})))return!1;var r=(null===(t=this.cards.find((function(t){return t.Id===e.selectedCards[0].Id})))||void 0===t?void 0:t.Steps).filter((function(t){return"bundles"!==t.StepLink}));return this.$store.commit("steps/setCurrentSteps",this.steps.filter((function(t){return r.includes(t.Link)}))),!0}},mounted:function(){var t=this;setTimeout((function(){if(t.$route.query.selectedCardsIds)for(var e=t.$route.query.selectedCardsIds.split(","),i=0;i<e.length;i++)t.toggleCard({id:parseInt(e[i]),currentStep:t.$route.params.id,maxCards:t.steps.find((function(e){return e.link==t.$route.params.id})).MaxCards,fromQueryParams:!0});if(t.$store.commit("steps/setCurrentStep",t.$route.params.id),1===t.selectedCards.length){var r,n=null===(r=t.cards.find((function(e){return e.Id===t.selectedCards[0].Id})))||void 0===r?void 0:r.Steps;t.$store.commit("steps/setCurrentSteps",t.steps.filter((function(t){return n.includes(t.Link)})))}0===t.selectedCards.length&&t.$store.commit("steps/setCurrentSteps",t.steps),t.$store.commit("cards/setCurrentStepCards",t.currentStep);var c=t.currentStepCards[0].StepId-1;t.$store.commit("steps/setReachedStepNumber",t.reachedStepNumber>=c?t.reachedStepNumber:c),t.$store.commit("steps/setCurrentStepNumber",t.currentSteps.findIndex((function(e){return e.Link==t.currentStep}))),t.isRedirectNext&&(t.$store.commit("steps/setIsisRedirectNext"),t.isRedirectAfterNext=!0,setTimeout((function(){return t.isRedirectAfterNext=!1}),300)),t.isRedirectBack&&(t.$store.commit("steps/setIsRedirectBack"),t.isRedirectAfterBack=!0,setTimeout((function(){return t.isRedirectAfterBack=!1}),300)),t.$store.commit("cards/setCurrentStepSelectedCards",t.currentStep),t.$store.commit("steps/setCurrentStepMaxCards",t.steps.find((function(e){return e.Link==t.currentStep})).MaxCards),t.$store.commit("steps/setCurrentStepMinCards",t.steps.find((function(e){return e.Link==t.currentStep})).MinCards),t.setNextPreviousLinks(),(!t.cards||!t.steps||!t.currentStep||!t.currentSteps||!t.currentStepCards||t.currentStepNumber<0||t.currentStepNumber>0&&t.currentStepNumber!==t.currentSteps.length-1&&!t.nextStepLink||t.currentStepNumber>0&&!t.previousStepLink||!t.currentStepMaxCards)&&t.$router.push({path:t.getLocalePath()+"/purchase/"+t.steps[0].Link}),t.isLoaded=!0}),0)}},f=(r(638),r(29)),h=r(36),m=r.n(h),v=r(91),x=(r(25),r(37),r(640),r(46)),y=r(53),C=r(195),S=r(234),_=r(114),w=r(293),k=r(3);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var L=Object(k.a)(C.a,S.a).extend({name:"base-slide-group",directives:{Resize:_.a,Touch:w.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"==typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return $($({},C.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,content=t.content,e=t.wrapper;return content>Math.abs(this.scrollOffset)+e},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[slot])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var r="".concat(t[0].toUpperCase()).concat(t.slice(1)),n=this["has".concat(r)];return this.showArrows||n?this.$createElement(x.a,{props:{disabled:!n}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[slot])},genTransition:function(t){return this.$createElement(y.c,[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,r,n){var c=r?-1:1,o=c*n+("prev"===t?-1:1)*e.wrapper;return c*Math.max(Math.min(o,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var content=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,content=t.content,e=t.wrapper,r=content.clientWidth-e.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-r&&(this.scrollOffset=-r):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=r&&(this.scrollOffset=r)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,r,n){var c=t.clientWidth,o=r?e.content-t.offsetLeft-c:t.offsetLeft;r&&(n=-n);var d=e.wrapper+n,l=c+o,f=.4*c;return o<=n?n=Math.max(o-f,0):d<=l&&(n=Math.min(n-(d-l-f),e.content-e.wrapper)),r?-n:n},calculateCenteredOffset:function(t,e,r){var n=t.offsetLeft,c=t.clientWidth;if(r){var o=e.content-n-c/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,o))}var d=n+c/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,d))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,content=e.content,r=e.wrapper;t.widths={content:content?content.clientWidth:0,wrapper:r?r.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}).extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),P=r(112),I=r(9),N=r(2).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(n.a)({},this.activeClass,this.isActive)}),element):(Object(I.c)("v-item should only contain a single element",this),element)):(Object(I.c)("v-item is missing a default scopedSlot",this),null);var element}}),T=(Object(k.a)(N,Object(P.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(k.a)(N,Object(P.a)("slideGroup")).extend({name:"v-slide-item"})),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lighten-5 col-12 pa-0"},[r("div",{staticClass:"cards-container background-grey"},[t.isLoaded?r("div",[r("div",[r("Layout",{attrs:{small:""}},[r("div",[t.currentSteps[t.currentStepNumber]?r("div",{staticClass:"py-6 py-md-10 upper d-flex flex-column align-items-center"},[r("div",{staticClass:"font-weight-bold mb-0 mb-md-4 text-h4 d-none d-sm-block",domProps:{innerHTML:t._s(t.$t(t.currentSteps[t.currentStepNumber].H4))}}),t._v(" "),r("div",{staticClass:"font-weight-bold text-h5 d-sm-none",domProps:{innerHTML:t._s(t.$t(t.currentSteps[t.currentStepNumber].ShortH5))}}),t._v(" "),r("div",{staticClass:"d-md-flex text-subtitle-1 mb-0 d-none text-body-1 mx-auto"},[t.currentSteps[t.currentStepNumber].TextBody1?r("SvgRender",{attrs:{name:"label"}}):t._e(),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.$t(t.currentSteps[t.currentStepNumber].TextBody1))}})],1)]):t._e(),t._v(" "),r("div",{},[r("div",{staticClass:"pa-0 d-flex flex-column"},[r("div",{staticClass:"d-flex flex-column d-md-none",class:[{"animation-out-from-left":t.isRedirectNext,"animation-in-from-right":t.isRedirectAfterNext,"animation-out-from-right":t.isRedirectBack,"animation-in-from-left":t.isRedirectAfterBack}]},t._l(t.currentStepCards,(function(e){return r("PricingCard",{key:e.Id,attrs:{card:e,cardClass:"mx-auto mx-md-3 col-12 pa-0 d-flex flex-column justify-space-between transition-swing mb-7 pricing-card",iconColor:"blue",iconClass:"ml-3",selectedCurrency:t.selectedCurrency,payload:{id:e.Id,cartId:e.CartId,stepLink:e.StepLink,maxCards:t.currentStepMaxCards,minCards:t.currentStepMinCards},buttonClassName:t.isSelected(e.Id)?"no-uppercase selected-button":"no-uppercase",eventName:"pricing-card-toggled",isSelected:t.isSelected(e.Id)},on:{"pricing-card-toggled":t.onCardToggled}})})),1),t._v(" "),r("div",{staticClass:"d-none d-md-block"},[r("v-sheet",{class:[{"animation-out-from-left":t.isRedirectNext,"animation-in-from-right":t.isRedirectAfterNext,"animation-out-from-right":t.isRedirectBack,"animation-in-from-left":t.isRedirectAfterBack},"background-grey "],attrs:{"max-width":"100%"}},[r("v-slide-group",{staticClass:"pa-0 mx-auto",attrs:{"center-active":"","show-arrows":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.currentStepCards,(function(e){return r("v-slide-item",{key:e.Id},[r("div",{staticClass:"card-block mb-1"},[r("PricingCard",{attrs:{card:e,cardClass:"mx-auto col-12 pa-0 d-flex flex-column justify-space-between transition-swing pricing-card",iconName:"information",iconColor:"blue",iconClass:"ml-3",selectedCurrency:t.selectedCurrency,payload:{id:e.Id,cartId:e.CartId,stepLink:e.StepLink,maxCards:t.currentStepMaxCards,minCards:t.currentStepMinCards},buttonClassName:t.isSelected(e.Id)?"no-uppercase blue-grey lighten-5":"no-uppercase",eventName:"pricing-card-toggled",isSelected:t.isSelected(e.Id)},on:{"pricing-card-toggled":t.onCardToggled}})],1)])})),1)],1)],1),t._v(" "),r("p",{staticClass:"text-caption my-2"},[t._v("\n                  "+t._s(t.$t(t.purchase.discountsAfterAddToCart))+"\n                ")])])])])])],1)]):t._e()])])}),[],!1,null,"3b736957",null);e.default=component.exports;m()(component,{SvgRender:r(126).default,PricingCard:r(633).default,Layout:r(127).default}),m()(component,{VSheet:v.a,VSlideGroup:L,VSlideItem:T})}}]);