app.controller('resultController',
['$scope', 'dataService', function($scope, dataService){
  dataService.getMales().then(function(resp) {
    console.log(resp);
  }); 
}]);