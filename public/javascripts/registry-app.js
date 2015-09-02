var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'angular-loading-bar',
    'Controllers'
]);

app.factory("sharedService", function () {
    return {
	condition: {}
    };
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
	when('/', {
	    templateUrl: 'repository-list.html',
	    controller: 'RepositoryListController'
	}).
	when('/repository', {
	    templateUrl: 'repository.html',
	    controller: 'RepositoryController'
	});
}]);

var Controllers = angular.module('Controllers', []);
