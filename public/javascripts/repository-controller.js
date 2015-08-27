Controllers.controller('RepositoryController', ['$scope', '$routeParams', 'Repository', function ($scope, $routeParams, Repository) {

    var name = $routeParams.name;

    $scope.repository = Repository.get({name: name});

}]);
