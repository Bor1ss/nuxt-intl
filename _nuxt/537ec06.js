(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5],{335:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return f}));var n=r(615),c=r(0),o=Object(c.g)("v-card__actions"),d=Object(c.g)("v-card__subtitle"),l=Object(c.g)("v-card__text"),f=Object(c.g)("v-card__title");n.a},643:function(e,t,r){var content=r(645);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("89bfc21c",content,!0,{sourceMap:!1})},644:function(e,t,r){"use strict";r(643)},645:function(e,t,r){var n=r(13)(!1);n.push([e.i,'.border-blue[data-v-67aa8ece]{border:2px solid #7aaad6}.border-white[data-v-67aa8ece]{border:2px solid transparent}.min-height-32px[data-v-67aa8ece]{min-height:32px}.min-height-28px[data-v-67aa8ece]{min-height:28px}.card-title[data-v-67aa8ece]{word-break:break-word}.hide-dot-comma-space.main[data-v-67aa8ece]{font-size:0}.hide-dot-comma-space.main div[data-v-67aa8ece],.hide-dot-comma-space.main span[data-v-67aa8ece]{font-family:"Amazon Ember"!important}.hide-dot-comma-space.main .currency[data-v-67aa8ece]{width:12px}.hide-dot-comma-space.main .currency.HKD[data-v-67aa8ece]{width:21px}.hide-dot-comma-space.main .currency.HKD span[data-v-67aa8ece]{font-size:12px}.hide-dot-comma-space.main .fraction[data-v-67aa8ece]{width:24px}.current-price-integer[data-v-67aa8ece]{font-size:40px!important}.old-price[data-v-67aa8ece],.pay-later-price[data-v-67aa8ece]{font-family:"Amazon Ember"!important}.old-price[data-v-67aa8ece]{color:#565959}.currency[data-v-67aa8ece],.fraction[data-v-67aa8ece]{position:relative}.currency span[data-v-67aa8ece],.fraction span[data-v-67aa8ece]{position:absolute;top:-1px}.text-subtitle-1[data-v-67aa8ece]{line-height:1.45rem;color:#383838!important}@media (min-width:0px)and (max-width:400px){.v-card[data-v-67aa8ece]{width:290px}}@media (min-width:400px)and (max-width:767px){.v-card[data-v-67aa8ece]{width:353px}}@media (max-width:767px){.v-card .v-card__title[data-v-67aa8ece]{min-height:84px}.v-card .v-card__actions[data-v-67aa8ece]{min-height:88px}}@media (min-width:768px){.v-card[data-v-67aa8ece]{width:308px;max-width:308px;height:362px}.v-card .upper-part[data-v-67aa8ece]{height:calc(100% - 144px)}.v-card .paragraph-1[data-v-67aa8ece]{min-height:64px}.v-card .paragraph-2[data-v-67aa8ece]{min-height:84px}.v-card .v-card__actions[data-v-67aa8ece]{min-height:144px}}',""]),e.exports=n},647:function(e,t,r){var content=r(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("2fb0c732",content,!0,{sourceMap:!1})},652:function(e,t,r){"use strict";r.r(t);r(19);var n=r(2).a.extend({components:{},props:{card:{type:Object,required:!0},titleClass:{type:String,required:!1},dialogClass:{type:String,required:!1,default:"upper-part cursor-pointer"},showTitle:{type:Boolean,required:!1,default:!0},cardClass:{type:String,required:!1},maxWidth:{type:Number,required:!1,default:0},cols:{type:Number,required:!1,default:12},colsSm:{type:Number,required:!1},colsMd:{type:Number,required:!1},payload:{type:Object,required:!1},eventName:{type:String,required:!0},buttonClassName:{type:String,required:!1},buttonText:{type:String,required:!1},isSelected:{type:Boolean,required:!1,default:!1},hasButton:{type:Boolean,required:!1,default:!1},iconColor:{type:String,required:!1},iconClass:{type:String,required:!1},selectedCurrency:{type:Object,required:!0}},methods:{onPricingCardToggled:function(e){this.$emit("pricing-card-toggled",this.payload)}},watch:{}}),c=(r(644),r(32)),o=r(36),d=r.n(o),l=r(615),f=r(335),h=r(241),v=r(190),m=r(46),x=r(3),C=r(9),y=Object(x.a)(v.a,m.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(C.c)("v-hover should only contain a single element",this),element)):(Object(C.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),S=r(239),_=r(638),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[r("v-card",{class:" "+(e.card.isPreSelected||!n&&!e.isSelected?"border-white":"border-blue")+" "+e.cardClass+" "},[r("Dialog",{attrs:{width:600,notificationName:"PricingCardInfo",className:e.dialogClass,data:Object.assign({},e.card,{isSelected:e.isSelected}),eventName:"pricing-card-toggled",isSelected:e.isSelected},on:{"pricing-card-toggled":e.onPricingCardToggled}},[r("p",[e._v(e._s(e.card.PriceWithDiscount))]),e._v(" "),r("v-card-title",{staticClass:"mb-0 pa-1 d-flex flex-column",class:e.titleClass},[r("v-system-bar",{class:"d-flex align-self-end "+(e.card.IsRecommended||e.card.IsLimitedTimeOffer?"":"hidden"),attrs:{color:e.card.IsLimitedTimeOffer?"red":e.card.IsRecommended?"green":"",height:"21"}},[e.card.IsLimitedTimeOffer||e.card.IsRecommended?r("i18n",{staticClass:"white--text text-caption text-uppercase",attrs:{tag:"span",path:e.card.Disclaimer},scopedSlots:e._u([e.card.IsLimitedTimeOffer?{key:"disclaimerDiscount",fn:function(){return[r("span",[e._v(e._s(e.card.DisclaimerDiscount))])]},proxy:!0}:null],null,!0)}):e._e()],1),e._v(" "),r("div",{staticClass:"d-flex flex-column px-3 align-self-start"},[r("div",{staticClass:"d-flex align-self-start"},[r("div",{staticClass:"card-title",attrs:{title:e.$t(e.card.TitleLine1)},domProps:{innerHTML:e._s(e.$t(e.card.TitleLine1))}}),e._v(" "),e.card.Icon?r("v-icon",{class:e.iconClass,attrs:{color:e.iconColor,title:e.$t(e.card.Icon.Title)}},[e._v("mdi-"+e._s(e.card.Icon.Name)+" ")]):e._e()],1),e._v(" "),r("div",{staticClass:"d-none d-md-flex align-self-start min-height-32px"},[e.card.BenefitsText?r("div",{staticClass:"blue--text text-caption",domProps:{innerHTML:e._s(e.$t(e.card.BenefitsText))}}):r("div",{domProps:{innerHTML:e._s(e.$t(e.card.TitleLine2))}})])])],1),e._v(" "),r("v-card-subtitle",{staticClass:"text-subtitle-1 paragraph-1 pt-4 pb-0 text-left d-none d-md-block"},[r("span",{class:{"blue--text":"why"==e.card.TypeOfParagraph1},domProps:{innerHTML:e._s(e.$t(e.card.Paragraph1))}}),e._v(" "),"list"==e.card.TypeOfParagraph1?r("span",e._l(e.card.WhatsIncludedList,(function(t,n){return r("span",{key:t,staticClass:"blue--text"},[e._v("\n              "+e._s(t)),n!==e.card.WhatsIncludedList.length-1?r("span",{staticClass:"black--text"},[e._v(",")]):e._e()])})),0):e._e()]),e._v(" "),r("v-card-subtitle",{staticClass:"text-subtitle-1 paragraph-2 pt-0 pb-0 text-left d-none d-md-block"},["why"==e.card.TypeOfParagraph2?r("Dialog",{attrs:{notificationName:"WhyUpgrade",width:900,className:"text-left"}},[r("span",{staticClass:"blue--text text-left link",domProps:{innerHTML:e._s(e.$t(e.card.Paragraph2))}})]):r("span",{domProps:{innerHTML:e._s(e.$t(e.card.Paragraph2))}}),e._v(" "),"list"==e.card.TypeOfParagraph2?r("span",e._l(e.card.WhatsIncludedList,(function(t,n){return r("Link",{key:n+"A",attrs:{className:"link-underline",isExternal:"",link:t.Link}},[e._v("\n              "+e._s(t.Name)),n!==e.card.WhatsIncludedList.length-1?r("span",{staticClass:"black--text"},[e._v(",")]):e._e()])})),1):e._e()],1)],1),e._v(" "),r("v-card-actions",{staticClass:"d-flex flex-column justify-center align-end cursor-pointer",class:e.card.IsPreSelected?"no-pointer-events":"",on:{click:e.onPricingCardToggled}},[r("v-card-text",{staticClass:"text-subtitle-1 pt-0 pt-md-3 pb-0"},[r("div",{staticClass:"d-flex flex-wrap"},[r("div",{staticClass:"current-price red--text col-5 pa-0 text-left"},[r("i18n-n",{staticClass:"hide-dot-comma-space main d-flex",attrs:{tag:"div",value:e.card.Prices[e.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:e.selectedCurrency.name},scopedSlots:e._u([{key:"currency",fn:function(t){return[r("div",{staticClass:"text-h6 currency vertical-align-top",class:e.$store.state.currencies.selectedCurrency.currency},[r("span",[e._v(e._s(t.currency))])])]}},{key:"integer",fn:function(t){return[r("span",{staticClass:"integer text-h3 current-price-integer",class:{"text-h5":e.card.PriceWithDiscount>1e3,"text-h4":e.card.PriceWithDiscount>100&&e.card.PriceWithDiscount<1e3,"text-h3":e.card.PriceWithDiscount<=100}},[e._v(e._s(t.integer))])]}},{key:"group",fn:function(t){return[r("span",{staticClass:"group"},[e._v(e._s(t.group))])]}},{key:"fraction",fn:function(t){return[r("div",{staticClass:"text-h6 vertical-align-top fraction"},[r("span",[e._v(e._s(t.fraction))])])]}}],null,!0)})],1),e._v(" "),r("Button",{attrs:{isDisabled:e.card.IsPreSelected,color:"primary",isOutlined:!0,isText:!0,buttonClassName:e.buttonClassName+" d-md-none d-flex align-self-end ml-auto text-caption",buttonText:e.payload.maxCards>1?e.isSelected?"REMOVE":"ADD_TO_CART":e.isSelected?"SELECTED":"SELECT",iconName:e.card.IsPreSelected?"lock":""}}),e._v(" "),e.card.OrPayLaterText&&e.card.PayLaterNumberOfPaymentsText?r("div",{staticClass:"current-price black--text text-subtitle-2 col-7 pa-0 d-flex"},[r("v-divider",{staticClass:"d-none d-md-block",attrs:{vertical:""}}),e._v(" "),r("i18n",{staticClass:"text-left pl-3 d-none d-md-block",attrs:{tag:"div",path:e.card.OrPayLaterText},scopedSlots:e._u([{key:"payLaterText",fn:function(){return[r("span",{staticClass:"pay-later-text"},[e._v(e._s(e.$t("PAY_LATER")))])]},proxy:!0},{key:"br",fn:function(){return[r("br")]},proxy:!0},{key:"paymentAmount",fn:function(){return[r("span",{staticClass:"pay-later-price text-underlined red--text"},[e._v(e._s(e.$n(13,{style:"currency",currency:e.selectedCurrency.currency,minimumFractionDigits:0,maximumFractionDigits:0})))])]},proxy:!0},{key:"numberOfPayments",fn:function(){return[r("a",{staticClass:"no-text-decoration blue--text",attrs:{href:"",target:"_blank"},on:{click:function(e){e.stopPropagation()}}},[e._v("\n                    "+e._s(e.$t(e.card.PayLaterNumberOfPaymentsText,{numberOfPayments:3}))+"\n                  ")])]},proxy:!0}],null,!0)})],1):e._e()],1),e._v(" "),r("div",{staticClass:"min-height-28px"},[e.card.OldPriceText?r("i18n",{staticClass:"grey--text text-caption text-left w-100 d-flex",attrs:{tag:"div",path:e.card.OldPriceText},scopedSlots:e._u([{key:"oldPrice",fn:function(){return[r("span",{staticClass:"text-underlined px-1 text-decoration-line-through old-price"},[r("i18n-n",{staticClass:"hide-dot-comma-space old-price d-flex",attrs:{tag:"div",value:e.card.MSRP[e.$store.state.currencies.selectedCurrency.currency],format:"currency",locale:e.selectedCurrency.name},scopedSlots:e._u([{key:"currency",fn:function(t){return[r("span",{staticClass:"currency text-caption"},[e._v(e._s(t.currency))])]}},{key:"integer",fn:function(t){return[r("span",{staticClass:"integer text-caption text-decoration-line-through"},[e._v(e._s(t.integer))])]}},{key:"group",fn:function(t){return[r("span",{staticClass:"group text-caption"},[e._v(e._s(t.group))])]}},{key:"fraction",fn:function(t){return[r("span",{staticClass:"fraction text-caption"},[e._v(e._s(t.fraction))])]}}],null,!0)})],1)]},proxy:!0},{key:"percentageDiscount",fn:function(){return[r("span",{staticClass:"old-price-percentage-discount"},[e._v("20")])]},proxy:!0}],null,!0)}):e._e()],1)]),e._v(" "),r("v-card-text",{staticClass:"py-3 d-none d-md-flex justify-center"},[r("Button",{attrs:{isDisabled:e.card.IsPreSelected,color:"primary",isOutlined:!0,isText:!0,buttonClassName:""+e.buttonClassName,buttonText:e.payload.maxCards>1?e.isSelected?"REMOVE":"ADD_TO_CART":e.isSelected?"SELECTED":"SELECT",iconName:e.card.IsPreSelected?"lock":""}})],1)],1)],1)]}}])})}),[],!1,null,"67aa8ece",null);t.default=component.exports;d()(component,{Dialog:r(336).default,Link:r(259).default,Button:r(258).default}),d()(component,{VCard:l.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VDivider:h.a,VHover:y,VIcon:S.a,VSystemBar:_.a})},657:function(e,t,r){"use strict";r(647)},658:function(e,t,r){var n=r(13)(!1);n.push([e.i,'.cards-container[data-v-61280f35]{min-height:360px}[data-v-61280f35] .v-slide-group__next:not(.v-slide-group__next--disabled) .theme--light.v-icon,[data-v-61280f35] .v-slide-group__prev:not(.v-slide-group__prev--disabled) .theme--light.v-icon{font-size:36px;color:#1976d2}[data-v-61280f35] .v-slide-group__content{justify-content:center}.card-block[data-v-61280f35]{margin:0 22px}[data-v-61280f35] .v-slide-group__next{margin-right:-60px;min-width:60px}[data-v-61280f35] .v-slide-group__prev{margin-left:-60px;min-width:60px}[data-v-61280f35] .v-icon:hover{transform:scale(1.3)}.container[data-v-61280f35]{margin:0 auto;justify-content:center;align-items:center;flex-direction:column;text-align:center}.container .cards[data-v-61280f35]{width:100%}.container .cards div[data-v-61280f35]{display:flex}.container>div.upper[data-v-61280f35]{display:flex;margin-bottom:50px}.container div.steps[data-v-61280f35]{width:100%}.title[data-v-61280f35]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-61280f35]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-61280f35]{padding-top:15px}.v-slide-group[data-v-61280f35] .v-slide-group__next--disabled .v-icon,.v-slide-group[data-v-61280f35] .v-slide-group__prev--disabled .v-icon{display:none}@media(max-width:1090px){[data-v-61280f35] .v-slide-group__next{margin-right:-40px;min-width:40px}[data-v-61280f35] .v-slide-group__prev{margin-left:-40px;min-width:40px}}@media(max-width:1050px){[data-v-61280f35] .v-slide-group__next{margin-right:-20px;min-width:20px}[data-v-61280f35] .v-slide-group__prev{margin-left:-20px;min-width:20px}}@media(max-width:1010px){[data-v-61280f35] .v-slide-group__next{margin-right:-15px;min-width:15px}[data-v-61280f35] .v-slide-group__prev{margin-left:-15px;min-width:15px}}@media(max-width:991px){[data-v-61280f35] .v-slide-group__next{margin-right:-40px;min-width:40px}[data-v-61280f35] .v-slide-group__prev{margin-left:-40px;min-width:40px}.card-block[data-v-61280f35]{margin:0 18px}}@media (min-width:768px){.cards-container[data-v-61280f35]{min-height:485px}}',""]),e.exports=n},659:function(e,t,r){var content=r(660);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("8f7a87bc",content,!0,{sourceMap:!1})},660:function(e,t,r){var n=r(13)(!1);n.push([e.i,".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden;touch-action:none}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}",""]),e.exports=n},674:function(e,t,r){"use strict";r.r(t);var n=r(15),c=(r(43),r(27),r(39),r(207),r(5),r(73),r(31),r(63),r(337),r(59),r(85)),o={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.params,e.error,!(r=e.payload)){t.next=3;break}return t.abrupt("return",{payload:r});case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{payload:null,isLoaded:!1,model:null}},computed:Object(c.b)({cards:function(e){return e.cards.cards},currentStepCards:function(e){return e.cards.currentStepCards},reachedStepNumber:function(e){return e.steps.reachedStepNumber},currentStepSelectedCards:function(e){return e.cards.currentStepSelectedCards},selectedCards:function(e){return e.cards.selectedCards},steps:function(e){return e.steps.steps},nextStepLink:function(e){return e.steps.nextStepLink},previousStepLink:function(e){return e.steps.previousStepLink},currentSteps:function(e){return e.steps.currentSteps},currentStep:function(e){return e.steps.currentStep},currentStepNumber:function(e){return e.steps.currentStepNumber},currentStepMaxCards:function(e){return e.steps.currentStepMaxCards},currentStepMinCards:function(e){return e.steps.currentStepMinCards},selectedCurrency:function(e){return e.currencies.selectedCurrency},selectedLocale:function(e){return e.locales.selectedLocale}}),methods:{onCardToggled:function(e){var t=this;this.toggleCard(e),this.setNextPreviousLinks(),1!==this.currentStepMaxCards||1!==this.currentStepSelectedCards.length||this.isLastStep()||setTimeout((function(){1===t.currentStepSelectedCards.length&&t.$router.push({path:t.getLocalePath()+"/steps/"+t.nextStepLink})}),500)},getLocalePath:function(){return"en"==this.selectedLocale.code?"":"/"+this.selectedLocale.code},deleteCardsLicenses:function(e,t){return e.currentStep!==this.steps[0].Link||(this.$store.commit("cards/deleteSelectedCard",{index:0,amount:t}),this.$store.commit("steps/setReachedStepNumber",0),0!==this.selectedCards.length||(console.log("CIA"),this.$store.commit("steps/setCurrentSteps",this.steps)),!1)},toggleCard:function(e){var t=this;if(this.selectedCards.includes(e.id)&&!e.fromQueryParams){if(this.deleteCardsLicenses(e,this.selectedCards.length)){var r=this.selectedCards.findIndex((function(t){return t==e.id}));this.$store.commit("cards/deleteSelectedCard",{index:r,amount:1})}}else if(this.selectedCards.includes(e.id)||this.$store.commit("cards/addSelectedCard",e.id),this.cards.filter((function(r){return(null==r?void 0:r.StepLink)==e.currentStep&&t.selectedCards.includes(r.Id)})).length>e.maxCards&&this.deleteCardsLicenses(e,this.selectedCards.length-1)){var n=this.selectedCards.findIndex((function(r){return r==t.currentStepSelectedCards.find((function(t){return t.Id!==e.id})).Id}));this.$store.commit("cards/deleteSelectedCard",{index:n,amount:1})}this.$store.commit("cards/setCurrentStepSelectedCards",this.currentStep)},setNextPreviousLinks:function(){var e,t,r,n=this,c=this.currentSteps.findIndex((function(e){return e.Link===n.currentStep}));this.steps[0].Link==this.currentStep&&(null===(e=this.currentStepSelectedCards)||void 0===e?void 0:e.length)>0?(this.$store.commit("steps/setNextStepLink",this.currentStepSelectedCards[0].NextStep),this.$store.commit("steps/setPreviousStepLink","")):(this.$store.commit("steps/setPreviousStepLink",null===(t=this.currentSteps[c-1])||void 0===t?void 0:t.Link),this.$store.commit("steps/setNextStepLink",null===(r=this.currentSteps[c+1])||void 0===r?void 0:r.Link))},isSelected:function(e){return this.selectedCards.includes(e)},isLastStep:function(){return this.currentStep==this.currentSteps[this.currentSteps.length-1].Link}},mounted:function(){var e=this;setTimeout((function(){if(e.$route.query.selectedCardsIds)for(var t=e.$route.query.selectedCardsIds.split(","),i=0;i<t.length;i++)e.toggleCard({id:parseInt(t[i]),currentStep:e.$route.params.id,maxCards:e.steps.find((function(t){return t.link==e.$route.params.id})).MaxCards,fromQueryParams:!0});e.$store.commit("steps/setCurrentStep",e.$route.params.id);var r=e.cards.find((function(t){var r;return 1===t.StepId&&(null===(r=e.selectedCards)||void 0===r?void 0:r.includes(t.Id))}));r?e.$store.commit("steps/setCurrentSteps",e.steps.filter((function(e){return r.Steps.includes(e.Link)}))):e.$store.commit("steps/setCurrentSteps",e.steps),e.$store.commit("cards/setCurrentStepCards",e.currentStep);var n=e.currentStepCards[0].StepId-1;e.$store.commit("steps/setReachedStepNumber",e.reachedStepNumber>=n?e.reachedStepNumber:n),e.$store.commit("steps/setCurrentStepNumber",e.currentSteps.findIndex((function(t){return t.Link==e.currentStep}))),e.$store.commit("cards/setCurrentStepSelectedCards",e.currentStep),e.$store.commit("steps/setCurrentStepMaxCards",e.steps.find((function(t){return t.Link==e.currentStep})).MaxCards),e.$store.commit("steps/setCurrentStepMinCards",e.steps.find((function(t){return t.Link==e.currentStep})).MinCards),e.setNextPreviousLinks(),(!e.cards||!e.steps||!e.currentStep||!e.currentSteps||!e.currentStepCards||e.currentStepNumber<0||e.currentStepNumber>0&&e.currentStepNumber!==e.currentSteps.length-1&&!e.nextStepLink||e.currentStepNumber>0&&!e.previousStepLink||!e.currentStepMaxCards||!e.currentStepMinCards)&&e.$router.push({path:e.getLocalePath()+"/steps/"+e.steps[0].Link}),e.isLoaded=!0}),0)}},d=(r(657),r(32)),l=r(36),f=r.n(l),h=r(94),v=(r(7),r(4),r(11),r(6),r(12),r(1)),m=(r(25),r(37),r(659),r(45)),x=r(71),C=r(199),y=r(244),S=r(119),_=r(302),w=r(3);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var $=Object(w.a)(C.a,y.a).extend({name:"base-slide-group",directives:{Resize:S.a,Touch:_.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(e){return"boolean"==typeof e||["always","desktop","mobile"].includes(e)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return k(k({},C.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var e=this.widths,content=e.content,t=e.wrapper;return content>Math.abs(this.scrollOffset)+t},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(e){this.$refs.content.style.transform="translateX(".concat(-e,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var e=this,slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return e.onAffixClick("next")}},key:"next"},[slot])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(e){var t=e;this.$vuetify.rtl&&"prev"===e?t="next":this.$vuetify.rtl&&"next"===e&&(t="prev");var r="".concat(e[0].toUpperCase()).concat(e.slice(1)),n=this["has".concat(r)];return this.showArrows||n?this.$createElement(m.a,{props:{disabled:!n}},this["".concat(t,"Icon")]):null},genPrev:function(){var e=this,slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return e.onAffixClick("prev")}},key:"prev"},[slot])},genTransition:function(e){return this.$createElement(x.c,[this.genIcon(e)])},genWrapper:function(){var e=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(t){return e.overflowCheck(t,e.onTouchStart)},move:function(t){return e.overflowCheck(t,e.onTouchMove)},end:function(t){return e.overflowCheck(t,e.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(e,t,r,n){var c=r?-1:1,o=c*n+("prev"===e?-1:1)*t.wrapper;return c*Math.max(Math.min(o,t.content-t.wrapper),0)},onAffixClick:function(e){this.$emit("click:".concat(e)),this.scrollTo(e)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(e){var content=this.$refs.content;this.startX=this.scrollOffset+e.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove:function(e){this.scrollOffset=this.startX-e.touchmoveX},onTouchEnd:function(){var e=this.$refs,content=e.content,t=e.wrapper,r=content.clientWidth-t.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-r&&(this.scrollOffset=-r):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=r&&(this.scrollOffset=r)},overflowCheck:function(e,t){e.stopPropagation(),this.isOverflowing&&t(e)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var e=this.items[this.items.length-1].$el.getBoundingClientRect(),t=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&t.right<e.right||!this.$vuetify.rtl&&t.left>e.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(e,t,r,n){var c=e.clientWidth,o=r?t.content-e.offsetLeft-c:e.offsetLeft;r&&(n=-n);var d=t.wrapper+n,l=c+o,f=.4*c;return o<=n?n=Math.max(o-f,0):d<=l&&(n=Math.min(n-(d-l-f),t.content-t.wrapper)),r?-n:n},calculateCenteredOffset:function(e,t,r){var n=e.offsetLeft,c=e.clientWidth;if(r){var o=t.content-n-c/2-t.wrapper/2;return-Math.min(t.content-t.wrapper,Math.max(0,o))}var d=n+c/2-t.wrapper/2;return Math.min(t.content-t.wrapper,Math.max(0,d))},scrollTo:function(e){this.scrollOffset=this.calculateNewOffset(e,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var e=this;window.requestAnimationFrame((function(){var t=e.$refs,content=t.content,r=t.wrapper;e.widths={content:content?content.clientWidth:0,wrapper:r?r.clientWidth:0},e.isOverflowing=e.widths.wrapper+1<e.widths.content,e.scrollIntoView()}))}},render:function(e){return e("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}).extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),L=r(118),P=r(9),T=r(2).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(v.a)({},this.activeClass,this.isActive)}),element):(Object(P.c)("v-item should only contain a single element",this),element)):(Object(P.c)("v-item is missing a default scopedSlot",this),null);var element}}),N=(Object(w.a)(T,Object(L.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(w.a)(T,Object(L.a)("slideGroup")).extend({name:"v-slide-item"})),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lighten-5 col-12 pa-0"},[r("div",{staticClass:"cards-container background-grey"},[e.isLoaded?r("div",[r("div",[r("Layout",{attrs:{small:""}},[r("div",[e.currentSteps[e.currentStepNumber]?r("div",{staticClass:"py-6 py-md-10 upper d-flex flex-column align-items-center"},[r("div",{staticClass:"font-weight-bold mb-0 mb-md-4 text-h4 d-none d-sm-block",domProps:{innerHTML:e._s(e.$t(e.currentSteps[e.currentStepNumber].H4))}}),e._v(" "),r("div",{staticClass:"font-weight-bold text-h5 d-sm-none",domProps:{innerHTML:e._s(e.$t(e.currentSteps[e.currentStepNumber].ShortH5))}}),e._v(" "),r("div",{staticClass:"d-md-flex text-subtitle-1 mb-0 d-none text-body-1 mx-auto"},[e.currentSteps[e.currentStepNumber].TextBody1?r("SvgRender",{attrs:{name:"label",className:""}}):e._e(),e._v(" "),r("div",{domProps:{innerHTML:e._s(e.$t(e.currentSteps[e.currentStepNumber].TextBody1))}})],1)]):e._e(),e._v(" "),r("div",{staticClass:"cards mb-2 mb-md-0"},[r("div",{staticClass:"pa-0 d-flex flex-column"},[r("div",{staticClass:"d-flex flex-column d-md-none"},e._l(e.currentStepCards,(function(t){return r("PricingCard",{key:t.Id,attrs:{card:t,cardClass:"mx-auto mx-md-3 col-12 pa-0 d-flex flex-column justify-space-between transition-swing mb-7 pricing-card",iconColor:"blue",iconClass:"ml-3",selectedCurrency:e.selectedCurrency,payload:{id:t.Id,currentStep:e.currentStep,maxCards:e.currentStepMaxCards,minCards:e.currentStepMinCards},buttonClassName:e.isSelected(t.Id)?"no-uppercase selected-button":"no-uppercase",eventName:"pricing-card-toggled",isSelected:e.isSelected(t.Id)},on:{"pricing-card-toggled":e.onCardToggled}})})),1),e._v(" "),r("div",{staticClass:"d-none d-md-block"},[r("v-sheet",{staticClass:"background-grey",attrs:{"max-width":"100%"}},[r("v-slide-group",{staticClass:"pa-0 mx-auto",attrs:{"center-active":"","show-arrows":""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},e._l(e.currentStepCards,(function(t){return r("v-slide-item",{key:t.Id},[r("div",{staticClass:"mb-6 mb-md-10 card-block"},[r("PricingCard",{attrs:{card:t,cardClass:"mx-auto col-12 pa-0 d-flex flex-column justify-space-between transition-swing pricing-card",iconName:"information",iconColor:"blue",iconClass:"ml-3",selectedCurrency:e.selectedCurrency,payload:{id:t.Id,currentStep:e.currentStep,maxCards:e.currentStepMaxCards,minCards:e.currentStepMinCards},buttonClassName:e.isSelected(t.Id)?"no-uppercase blue-grey lighten-5":"no-uppercase",eventName:"pricing-card-toggled",isSelected:e.isSelected(t.Id)},on:{"pricing-card-toggled":e.onCardToggled}})],1)])})),1)],1)],1)])])])])],1)]):e._e()])])}),[],!1,null,"61280f35",null);t.default=component.exports;f()(component,{SvgRender:r(131).default,PricingCard:r(652).default,Layout:r(132).default}),f()(component,{VSheet:h.a,VSlideGroup:$,VSlideItem:N})}}]);