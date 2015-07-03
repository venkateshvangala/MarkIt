define(['jquery', 'underscore', 'backbone', "js/views/common/viewCreate"], function(jQuery, _, Backbone, ViewCreate){
	var self, MarkItRouter = Backbone.Router.extend({

		initialize : function(options){
			Backbone.history.start();
			var self = this;
		},
		
		routes : {
			"" : 'renderHome'
		},
		
		renderHome : function(){
			require(["js/views/markit-home"], function(MarkItHomeView){
				var appView = ViewCreate.create({}, 'MarkItHomeView', MarkItHomeView);
				appView.render();
			});
		}
		
	});
	return MarkItRouter;
});