define(['js/views/utils/common-view', 'text!templates/header/header.html'], 
	function(CommonView, HeaderTemplate){
	"use strict";
	
	var HeaderView = CommonView.extend({
		el: 'body',
		
		initialize : function(options){
			console.log("Header is initialized");
		},
		
		events : {
			"click .list-icon" : "toggleSidebar",
//			"click .add-task-icon" : "addTask",
		},
		
		render : function(){
			var self = this;
			$(this.el).find(".header").html(HeaderTemplate);
		},
		
		toggleSidebar: function(){
			var self = this;
			$(self.el).find(".left-navigator").toggleClass("sidebar-toggle");
		},
		
		addTask: function(){
			alert("tse");
		}
	});
	return HeaderView;
});