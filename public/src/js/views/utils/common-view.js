define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	
	'use-strict';
	
	var CommonView = Backbone.View.extend({
		
		initialize : function(options){
			console.log("Common to all view for extending all views")
		},
		
		renderTemplate : function(){
			console.log("render template mechanism");
		}
	});
	return CommonView;
});