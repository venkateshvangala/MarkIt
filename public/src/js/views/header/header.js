define(['js/views/utils/common-view', 'text!templates/header/header.html'], 
	function(CommonView, HeaderTemplate){
	"use strict";
	
	var HeaderView = CommonView.extend({
		el: '.header',
		
		initialize : function(options){
			console.log("Header is initialized");
		},
		
		render : function(){
			var self = this;
			$(this.el).html(HeaderTemplate);
		}
	});
	return HeaderView;
});