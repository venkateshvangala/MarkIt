define(['jquery', 'underscore', 'backbone', "text!templates/markit-home.html"], 
function(jQuery, _, Backbone, markitHome){
	'use-strict';
	var MarkItHomeView = Backbone.View.extend({
		
		el: ".content-container",
		
		initialize : function(options){
			self = this;
			console.log("Common to all view for extending all views")
		},
		
		events : {
			"click .add-task-container" : "toggleContainer"
		},
		
		render : function(){
			var self = this;
			$(self.el).html(_.template(markitHome, {}));
		},
		
		toggleContainer: function(){
			var self = this;
			$(self.el).find(".add-task-container").attr("heght:auto");
		}
	});
	return MarkItHomeView;
});