angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {
	$scope.tagline = 'Enter to do items here: ';
	$scope.toDoItem = {};

	var loadItems = function() {
		$http.get('/api/items').success(function(data) {
			$scope.items = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	}
	loadItems();


	$scope.add = function() {
		$http.post('/api/items', $scope.toDoItem)
			.success(function(data) {
				$scope.toDoItem = {};
				$scope.items = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.changeStatus = function(item) {
		if (item.done) {
			$http.put('/api/items/' + item._id, {done : false}).success(function(data) {
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
		} else {
			$http.put('/api/items/' + item._id, {done : true}).success(function(data) {
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
		}
	};

	$scope.delete = function(item) {
		$http.delete('/api/items/' + item._id).success(function(data) {
			console.log(data);
			loadItems();
		})
		.error(function(data) {
			console.log("Error: " + data);
		});
	};
	
	$scope.edit = function(item) {
		$http.put('/api/items/' + item._id, {text : item.text}).success(function(data) {
			console.log(data);
		})
		.error(function(data) {
			console.log("Error: " + data);
		});
	};


});