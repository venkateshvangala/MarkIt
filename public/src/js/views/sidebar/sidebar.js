define(['js/views/utils/common-view', 'text!templates/sidebar/sidebar.html'], 
	function(CommonView, SidebarTemplate){
	"use strict";
	
	var SidebarView = CommonView.extend({
		el: '.left-navigator',
		
		initialize : function(options){
			console.log("Header is initialized");
		},
		
		render : function(){
			var self = this;
			$(this.el).html(SidebarTemplate);
		}
	});
	return SidebarView;
});