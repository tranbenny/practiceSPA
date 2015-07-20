angular.module('ItemService', []).factory('Item', ['$http', function($http) {
	return {
		get : function() {
			return $http.get('/api/items');
		}, 

		create : function(itemData) {
			return $http.post('/api/items', itemData);
		}, 

		delete : function(id) {
			return $http.delete('/api/items/' + id);
		}
	}

}]);