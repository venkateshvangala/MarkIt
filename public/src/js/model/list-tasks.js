define(['jquery', 'backbone'], function(jQuery, Backbone) {
    var ListTaskModel = Backbone.Model.extend({
		url: "/listTask",
        initialize: function() {
            self = this;
        }
    });
    return ListTaskModel;
});