Controllers.controller('RepositoryListController', ['$scope', '$routeParams', 'Repository', function ($scope, $routeParams, Repository) {

    Repository.query({}, function (repo_list) {
	var repositories = {};
	var tmp = repo_list.map(function (x) {
	    var arr = x.split('/');
	    return {
		name: x,
		arr: arr
	    };
	});
	console.log(tmp)
	tmp.forEach(function (x) {
	    var group = x.arr[0],
		name = x.arr[1],
		fullname = x.name;
	    if (!repositories[group]) {
		repositories[group] = [];
	    }
	    var json = {
		group: group,
		name: name,
		fullname: fullname
	    };
	    repositories[group].push(json);
	});
	$scope.repositories = repositories;
    });
	
    $scope.retreive = function () {
	console.log($scope.search_text);
	alert("TODO: search repository");
    };
    
}]);
