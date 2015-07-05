define(['jquery', 'backbone'], function($, Backbone) {
    var GetLabelTaskModel = Backbone.Model.extend({
		url: "/labelTaskList/",
        initialize: function() {
            self = this;
        }
    });
    return GetLabelTaskModel;
});