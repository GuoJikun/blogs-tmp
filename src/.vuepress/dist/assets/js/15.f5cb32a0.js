(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{315:function(t,e,i){"use strict";i.r(e);i(302),i(303);var n=i(304),c=i.n(n),o={name:"VueGittalk",data:function(){return{clientId:"f510b99ce0977fa9d1b1",clientSecret:"7fe1d570c1346f8067bd48c819cd0b308b7f4469",id:this.$route.name}},mounted:function(){console.log(this.id,"id",this.$route.name),this.createGitTalk()},methods:{createGitTalk:function(){new c.a({clientID:this.clientId,clientSecret:this.clientSecret,repo:"web-tricks",owner:"jikunguo",admin:["jikunguo"],id:location.pathname,distractionFreeMode:!1}).render(this.id)}},computed:{}},a=i(16),d=Object(a.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.id}})}),[],!1,null,null,null);e.default=d.exports}}]);