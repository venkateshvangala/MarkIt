define(['jquery', 'underscore', 'backbone', 'js/views/common/viewCreate', "text!templates/index.html"], 
	function($, _, Backbone, ViewCreate, mainTemplate){
	"use strict";

	var AppView = Backbone.View.extend({
		el : ".full-layout",

		initialize : function(options){
			console.log(options);
		},
		
		render : function(){
			var self = this;
			$(this.el).html(mainTemplate);
			
			require(["js/views/header/header"], function(HeaderView){
				var headerView = ViewCreate.create(self, 'HeaderView', HeaderView);
				headerView.render();
			});
			
			require(['js/views/footer/footer'], function(FooterView){
				var footerView = ViewCreate.create(self, 'FooterView', FooterView);
				footerView.render();
			});
		}
	});
	return AppView;
});