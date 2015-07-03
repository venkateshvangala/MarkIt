define(['js/views/utils/common-view', 'text!templates/header/header.html', "chosen", "jqueryUi", 'js/model/add-task'], 
	function(CommonView, HeaderTemplate, Chosen, JqueryUi, AddTaskModel){
	"use strict";
	
	var HeaderView = CommonView.extend({
		el: 'body',
		
		initialize : function(options){
			console.log("Header is initialized");
		},
		
		events : {
			"click .list-icon": "toggleSidebar",
			"click .add-task": "addTask" 
		},
		
		render : function(){
			var self = this;
			$(this.el).find(".header").html(HeaderTemplate);
			$(self.el).find(".datepicker").datepicker();
		},
		
		toggleSidebar: function(){
			var self = this;
			$(self.el).find(".left-navigator").toggleClass("sidebar-toggle");
		},
		
		addTask: function(){
			var self = this;
			var taskModel = new AddTaskModel();
			taskModel.set({
				"title": $("input[name='title']").val().trim(),
				"description" : $("input[name='description']").val().trim(),
				"startDate": $("input[name='startDate']").val().trim(),
				"endDate": $("input[name='endDate']").val().trim()
			});
			$(self.el).find("#myModal").modal("hide");
			taskModel.save({
				  success: function(){
				    console('success');
				  },
				  error: function(){
				    console.log('error');
				  }
			});
		}
	});
	return HeaderView;
});