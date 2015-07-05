define(['jquery', 'backbone'], function(jQuery, Backbone) {
    var self,
    AddTaskModel = Backbone.Model.extend({
		urlRoot: "/addTask",

        initialize: function() {
            self = this;
        }
    });
    return AddTaskModel;
});