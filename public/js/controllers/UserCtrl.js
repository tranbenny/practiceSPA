angular.module('UserCtrl', []).controller('UserController', function($scope, $http) {
	$scope.tagline = 'This works too'; 



	var loadGuestUser = function() {
		$http.get('/api/users').success(function(data) {
			$scope.users = data;
			findFirstUser();
		}).error(function(data) {
			console.log("Error: " + data);
		});
	};

	var findFirstUser = function() {
		$scope.user = $scope.users[0].name;
	};

	loadGuestUser();
});