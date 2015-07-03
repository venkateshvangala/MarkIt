define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	var self, MarkItRouter = Backbone.Router.extend({

		initialize : function(options){
			Backbone.history.start();
			var self = this;
		},
		
		routes : {
			"" : 'renderHome'
		},
		
		renderHome : function(){
			console.log("test Render Home");
		}
	});
	return MarkItRouter;
});