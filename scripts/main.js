"use strict";$(document).ready(function(){function e(){$("body").css("padding-top",$(".navbar-inverse").outerHeight(!0)+20+"px")}$(window).resize(e),$(document).ready(e),$(".disabled-link").hover(function(){$(this).find(".error").preventDefault()})});var template=function(e){return _.template($("#"+e).html())},app=app||{};app.appView=Backbone.View.extend({el:".portfolio-body",aboutTemplate:template("about-template"),events:{"mouseover .thumbnail":"onHover","mouseout .thumbnail":"onLeave"},onHover:function(e){var t=e.currentTarget||e.fromElement;$(t).find(".caption").fadeIn(250)},onLeave:function(e){var t=e.relatedTarget||e.toElement;$(t).find(".caption").fadeOut(250)},render:function(){return this.$el.html(this.aboutTemplate()),this}});var aboutView=new app.appView;app.portfolioView=Backbone.View.extend({el:".portfolio-body",portfolioTemplate:template("folio-template"),render:function(){return this.$el.html(this.portfolioTemplate()),this}});var portfolioView=new app.portfolioView;app.resumeView=Backbone.View.extend({el:".portfolio-body",initialize:function(){},renderCharts:function(){$(".chart").easyPieChart({barColor:"#3498db",size:"150",lineWidth:"2",easing:"easeOutBounce"})},resumeTemplate:template("resume-template"),render:function(){return this.$el.html(this.resumeTemplate()),this.renderCharts(),this}});var resumeView=new app.resumeView;app.contactView=Backbone.View.extend({el:".portfolio-body",contactTemplate:template("contact-template"),render:function(){return this.$el.html(this.contactTemplate()),this}});var contactView=new app.contactView,app=app||{};app.Router=Backbone.Router.extend({initialize:function(){},routes:{"":"renderAbout",about:"renderAbout",portfolio:"renderPortfolio",resume:"renderResume",contact:"renderContact"},renderAbout:function(){aboutView.render()},renderPortfolio:function(){portfolioView.render()},renderResume:function(){resumeView.render()},renderContact:function(){contactView.render()}});var router=new app.Router;Backbone.history.start();