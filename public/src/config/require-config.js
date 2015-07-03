requirejs.config({
	
    "baseUrl": "assets/src/",
    "paths": {
      "jquery" 		: "js/lib/jquery-1.11.3.min",
      "jqueryUi"	: 'js/lib/jquery-ui',
      "underscore"	: 'js/lib/underscore-min',
      "backbone"	: 'js/lib/backbone-min',
      "chosen"		: 'js/lib/chosen.jquery',
      "noty"		: 'js/lib/jquery.noty',
      "handlebars"	: 'js/lib/handlebars',
      "text"		: 'js/lib/text',
      "bootstrap"   : 'js/lib/bootstrap.min'
    },
    "shim" : {
        "underscore" : {
            "exports" : "_"
        },
        "backbone" : {
            "deps"    : ["jquery", "underscore"],
            "exports" : "Backbone"
        },
        "chosen": {
            deps: ["bootstrap"],
      	    exports: "Chosen"  
        }
    }
});

require(["jquery", "js/views/common/appView", "js/views/common/viewCreate", "js/controller/markit-router", "chosen"],
function(jQuery, AppView, ViewCreate, MarkItRouter, Chosen){
	var appView = ViewCreate.create({}, 'AppView', AppView);
	appView.render();
	var markItRouter = new MarkItRouter({appView : appView}); 
});



