(function(){
	var app = angular.module('wikiSearch', ['ngSanitize']);

	app.controller('searchCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce){
		//$scope.input = "Hello";
		$scope.submit = function(input){
			if (input === undefined) {
				alert('Please enter a search term.');
				return;
			}
			$http.jsonp('https://en.wikipedia.org/w/api.php/w/api.php?action=query&list=search&format=json&callback=JSON_CALLBACK&srsearch=' + input + '&continue=')
			.then(function(data){
				$scope.response = data.data.query.search.map(function(element){
					return {
						'title': element.title,
						'snippit': $sce.trustAsHtml(element.snippet),
						'url': 'https://en.wikipedia.org/wiki/' + element.title.replace(/\s/g, '_')
					};
				});
			});
		};
	}]);

})();