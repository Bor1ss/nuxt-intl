(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{687:function(t,e,n){"use strict";n.r(e);n(6);var h={data:function(){return{step:null,show:!1}},methods:{touchAll:function(){var t=this.$vuetify.theme.themes[this.theme];this.$vuetify.theme.themes[this.theme]={},this.$vuetify.theme.themes[this.theme]=t},swap:function(){this.$vuetify.theme.isDark=!this.$vuetify.theme.isDark,this.touchAll(1)},computed:{theme:function(){return this.$vuetify.theme.isDark?"dark":"light"},availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))},currentStep:function(){return this.$store.state.steps.currentStep},steps:function(){return this.$store.state.steps.steps},isLoading:function(){return this.$store.state.steps.isLoading}}}},r=n(20),component=Object(r.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports}}]);