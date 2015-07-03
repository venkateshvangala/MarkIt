define(['js/views/utils/common-view', 'text!templates/sidebar/sidebar.html'], 
	function(CommonView, SidebarTemplate){
	"use strict";
	
	var SidebarView = CommonView.extend({
		el: '.left-navigator',
		
		initialize : function(options){
			console.log("Header is initialized");
		},
		
		events : {
			"click li a" : "toggleActiveClass"
		},
		
		render : function(){
			var self = this;
			$(this.el).html(SidebarTemplate);
		},
		
		toggleActiveClass: function(event){
			var self = this;
			$(event.currentTarget).closest("ul").find("li").removeClass("active");
			$(event.currentTarget).closest("li").addClass("active");
		}
	});
	return SidebarView;
});