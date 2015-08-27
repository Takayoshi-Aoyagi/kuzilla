app.factory('Repository', ['$resource', function ($resource) {
    return $resource('/api/repositories/:name');
}]);
