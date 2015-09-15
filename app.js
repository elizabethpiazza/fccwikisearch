(function(){
	var app = angular.module('wikiSearch', []);

	app.controller('searchCtrl', ['$http', function($http){
		var query = this;
		query.input = "Hello";
		query.submit = function(input){
			alert(input);
		};
	}]);

})();