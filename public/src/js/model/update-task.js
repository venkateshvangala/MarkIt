define(['jquery', 'backbone'], function($, Backbone) {
    var self,
    UpdateTaskModel = Backbone.Model.extend({
		idAttribute: "taskId",
		urlRoot: "/updateTask/:id",
		id: "taskId",

        initialize: function() {
            self = this;
        }
    });
    return UpdateTaskModel;
});