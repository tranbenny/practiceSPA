angular.module('UserCtrl', []).controller('UserController', function($scope) {
	$scope.tagline = 'This works too'; 
	$scope.user = "Guest";



	var loadGuestUser = function() {
		$http.get('/api/users').success(function(data) {
			$scope.user = data;
		}).error(function(data) {
			console.log("Error: " + data);
		});
	};

	// loadGuestUser();
});