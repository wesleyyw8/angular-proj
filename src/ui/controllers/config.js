var app = angular.module('refactionjs',['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
  $routeProvider.
    when('/search', {
      templateUrl: '../views/search.html',
      controller: 'searchController'
    }).
    when('/result', {
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
      everyone: 'everyone',
      female: 'female',
      male: 'male',
      over30: 'over30',
      under30: 'under30'
    }
  };
}]);