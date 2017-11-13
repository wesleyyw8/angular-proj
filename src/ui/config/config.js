var app = angular.module('refactionjs',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/search', {
      templateUrl: '../views/search.html',
      controller: 'searchController'
    }).
    when('/result/:gender/:minAge/:maxAge', {
      templateUrl: '../views/result.html',
      controller: 'resultController'
    }).
    otherwise({
      redirectTo: '/search'
    });
}]);

app.factory('Config', [function() {
  var baseUrl = '/endpoints/';
  return {
    base_url: baseUrl,
    endpoints: {
      search: 'search',
    }
  };
}]);