define(['jquery', 'underscore', 'backbone', 'js/model/list-tasks', "text!templates/markit-home.html"], 
function(jQuery, _, Backbone, ListTaskModel, markitHome){
	'use-strict';
	var MarkItHomeView = Backbone.View.extend({
		
		el: ".content-container",
		
		initialize : function(options){
			self = this;
			self.taskList = [];
			console.log("Common to all view for extending all views")
		},
		
		events : {
			"click .add-task-container" : "toggleContainer"
		},
		
		render : function(){
			var self = this;
			$.ajax({
				url: "/listTask",
				type: "GET",
				success: function(responseData){
					var collection = responseData.split("|");
					self.parseJson(collection);
					$(self.el).html(_.template(markitHome, {}));
				}
			});
		},
		
		parseJson: function(collection){
			for(var k = 0; k < collection.length - 1; k++){
				var response = collection[k];
				response = response.replace(/\\/g, '');
				response = response.replace(/''/g, "'");
				response = response.replace(/""/g, "'");
				response = response.replace(/'/g, '"');
				self.taskList.push(JSON.parse(response));
			}
		},
		
		toggleContainer: function(){
			var self = this;
			$(self.el).find(".add-task-container").attr("heght:auto");
		}
	});
	return MarkItHomeView;
});