define(["jquery", 'js/views/utils/common-view', 'text!templates/header/header.html', "chosen", "jqueryUi", 'js/model/add-task'], 
	function(jQuery, CommonView, HeaderTemplate, Chosen, JqueryUi, AddTaskModel){
	"use strict";
	
	var HeaderView = CommonView.extend({
		el: 'body',
		
		initialize : function(options){
			console.log("Header is initialized");
		},
		
		events : {
			"click .list-icon": "toggleSidebar",
			"click .add-task": "addTask",
			"click .refresh-icon" : "renderMain",
			"click .view-mode" : "listView"
		},
		
		render : function(){
			var self = this;
			$(this.el).find(".header").html(HeaderTemplate);
			$(self.el).find(".datepicker").datepicker();
		},
		
		renderMain: function(){
			location.reload();
		},
		
		toggleSidebar: function(){
			var self = this;
			$(self.el).find(".left-navigator").toggleClass("sidebar-toggle");
		},
		
		listView: function(event){
			var self = this;
			var currentTarget = $(event.currentTarget); 
			if($(currentTarget).hasClass("list-view-icon")){
				$(currentTarget).toggleClass("grid-view-icon");
				$(currentTarget).toggleClass("list-view-icon");
				$(self.el).find(".notes-container").find(".note").removeAttr("style");
			}
			else{
				$(currentTarget).addClass("list-view-icon");
				$(currentTarget).toggleClass("grid-view-icon");
				$(self.el).find(".notes-container").find(".note").width("70%");
			}
			
			
		},
		
		addTask: function(){
			var self = this;
			var taskModel = new AddTaskModel();
			taskModel.set({
				"taskId": "0",
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
			
			setTimeout(function(){
				self.renderMain();
			}, 1000)
		}
	});
	return HeaderView;
});