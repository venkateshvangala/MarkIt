define(['jquery', 'backbone'], function(jQuery, Backbone) {
    var GetLabelTaskModel = Backbone.Model.extend({
		url: "/labelTaskList/",
        initialize: function() {
            self = this;
        }
    });
    return GetLabelTaskModel;
});