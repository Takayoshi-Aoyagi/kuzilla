Controllers.controller('RepositoryListController', ['$scope', '$routeParams', 'Repository', function ($scope, $routeParams, Repository) {

    $scope.repositories = Repository.query({});
	
    $scope.retreive = function () {
	console.log($scope.search_text);
	alert("TODO: search repository");
    };
    
}]);
