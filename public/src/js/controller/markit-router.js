define(['jquery', 'underscore', 'backbone', "js/views/common/viewCreate"], function(jQuery, _, Backbone, ViewCreate){
	var self, MarkItRouter = Backbone.Router.extend({

		initialize : function(options){
			Backbone.history.start();
			var self = this;
		},
		
		routes : {
			"" : 'renderHome',
			"Notes": "renderHome",
			"Archive": 'renderArchive',
			"Trash": "renderTrash",
			"Personal": 'renderPersonal',
			"Work": "renderWork",
			"Others": 'renderOthers'
		},
		
		renderHome : function(){
			require(["js/views/markit-home"], function(MarkItHomeView){
				var appView = ViewCreate.create({}, 'MarkItHomeView', MarkItHomeView);
				appView.render(0);
			});
		},
		
		renderArchive : function(){
			require(["js/views/markit-home"], function(MarkItHomeView){
				var appView = ViewCreate.create({}, 'MarkItHomeView', MarkItHomeView);
				appView.render(1);
			});
		},
		
		renderTrash : function(){
			require(["js/views/markit-home"], function(MarkItHomeView){
				var appView = ViewCreate.create({}, 'MarkItHomeView', MarkItHomeView);
				appView.render(2);
			});
		},
		
		renderPersonal : function(){
			require(["js/views/markit-home"], function(MarkItHomeView){
				var appView = ViewCreate.create({}, 'MarkItHomeView', MarkItHomeView);
				appView.render();
			});
		},
		
		renderWork : function(){
			require(["js/views/markit-home"], function(MarkItHomeView){
				var appView = ViewCreate.create({}, 'MarkItHomeView', MarkItHomeView);
				appView.render();
			});
		},
		
		renderOthers : function(){
			require(["js/views/markit-home"], function(MarkItHomeView){
				var appView = ViewCreate.create({}, 'MarkItHomeView', MarkItHomeView);
				appView.render();
			});
		}
		
	});
	return MarkItRouter;
});