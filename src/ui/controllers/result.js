import { app } from './../config/config';

app.controller('resultController',
['$scope', 'dataService','$route', ($scope, dataService, $route) => {
  
  var params = {
    gender: $route.current.params.gender,
    minAge: $route.current.params.minAge,
    maxAge: $route.current.params.maxAge
  };

  dataService.getPeople(params).then(function(resp) {
    $scope.data = resp.data !== [] ? resp.data : {resp: 'No results.'};
  }); 
}]);