define(['js/views/utils/common-view', 'text!templates/footer/footer.html'], 
	function(CommonView, FooterTemplate){
    "use strict";
	
	var FooterView = CommonView.extend({
		el: ".footer",
		
		initialize : function(){
			console.log("initialize footer view");
		},
		
		render: function(){
			var self = this;
			$(this.el).html(FooterTemplate);
		}
	});
	return FooterView;
});