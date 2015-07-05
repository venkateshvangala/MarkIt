define(['jquery', 'underscore', 'backbone', 'js/model/list-tasks', "text!templates/markit-home.html", "text!templates/helper/notes.html", 'js/model/add-task'], 
function(jQuery, _, Backbone, ListTaskModel, markitHome, notes, AddTaskModel){
	'use-strict';
	var MarkItHomeView = Backbone.View.extend({
		
		el: ".content-container",
		
		initialize : function(options){
			self = this;
			self.taskList = [];
			self.task = {};
			console.log("Common to all view for extending all views")
		},
		
		events : {
			"click .add-task-container" : "toggleContainer",
			"click .update-task": "updateTask",
			"click .archive-task" : "archiveTask",
			"click .delete-task": "deleteTask"
		},
		
		
		render : function(status){
			var self = this;
			var url = "/listTask";
			if(status == 1){
				url = "/archiveTasks"
			}
			else if(status == 2){
				url = "/deltedTasks"
			}else if(status == 3){
				url = "/labelTaskList/1";
			}else if(status == 4){
				url = "/labelTaskList/2";
			}
			
			
			$(self.el).parent().find(".left-navigator").removeClass("sidebar-toggle");
			
			$.ajax({
				url: url,
				type: "GET",
				success: function(responseData){
					var collection = responseData.split("|");
					self.parseJson(collection);
					$(self.el).html(_.template(markitHome, {})).find(".notes-list").html();
					for(var k = 0; k < self.taskList.length; k++){
						var compiledTemplate = _.template(notes+"");
						$(self.el).find(".notes-list").append(compiledTemplate({data: self.taskList[k]}));
					}
					self.enableClickEvents();
				}
			});
		},
		
		archiveTask: function(){
			var self = this;
			self.updateTask(this, 1);
		},
		
		deleteTask: function(){
			var self = this;
			self.updateTask(this, 2);
		},
		
		
		enableClickEvents:function(){
			var self = this;
			$(self.el).find(".note").click(function(event){
				$(self.el).parent().find(".left-navigator").removeClass("sidebar-toggle");
				var taskId = $(event.currentTarget).attr("data-id");
				self.task = _.findWhere(self.taskList, {"taskId" : taskId }); 
				var editModal = $(self.el).find("#myModal").modal("show");
				
				$(editModal).find("input[name='title']").val(self.task.title);
				$(editModal).find("input[name='description']").val(self.task.descrition);
			})
		},
		
		updateTask: function(event, status){
			var self = this;
			status = status ? status : 0;
			var taskModel = new AddTaskModel();
			taskModel.set({
				"taskId": self.task.taskId,
				"title": $(self.el).find("input[name='title']").val().trim(),
				"description" : $(self.el).find("input[name='description']").val().trim(),
				"labelId": $(self.el).find("select").val().trim(),
				"status": status
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
				self.render();
			}, 1000)
		},
		
		parseJson: function(collection){
			self.taskList = [];
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