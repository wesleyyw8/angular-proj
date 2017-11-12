app.controller('resultController',
['$scope', 'dataService', function($scope, dataService){
  dataService.getMales().then(function(resp) {
    console.log(resp);
  }); 
}]);
app.controller('searchController',
['$scope', 'dataService', '$location', function($scope, dataService, $location){
  
  $scope.genderOptions = [
    {
      label: 'It doesnt matter',
      value: 'everyone'
    },{
      label: 'Males',
      value: 'male'
    },{
      label: 'Females',
      value: 'female'
    }];

  $scope.ageOptions = [
    {
      label: 'Less than 18',
      value: {
        min: null,
        max: 18
      }
    },{
      label: 'Between 19 - 25',
      value: {
        min: 19,
        max: 25
      }
    },{
      label: 'Between 26 - 35',
      value: {
        min: 26,
        max: 35
      }
    },{
      label: 'Between 36 - 49',
      value: {
        min: 36,
        max: 49
      }
    },{
      label: 'More than 50',
      value: {
        min: 50,
        max: null
      }
    }, {
      label: 'All',
      value: {
        min: 0,
        max: null
      }
    }];

  $scope.onSelectGender = function (val) {
    console.log(val.value);
    nextStep();
  };


  $scope.onSelectAgeRange = function (val) {
    console.log(val.value);
    nextStep();
  };

  function nextStep() {
    if ($scope.step1) {
      $scope.step1 = false;
      $scope.step2 = true;
    }
    else
      $location.path('/result');
  }
}]);
app.directive('listOptions', [ '$timeout', function ($timeout) {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      options: '=',
      onSelect: '='
    },
    templateUrl: 'directives/list-options/template.html',
    link: function (scope, element, attrs) { 
      scope.optionSelect = function (value) {
        scope.optionSelected = value;
        scope.onSelect(value);
      };
    } 
  }
}]);
app.service('dataService', ["$q", "$http", "Config", function ($q, $http, Config) {
    var service = {
      getMales: getMales,
      getFemales: getFemales,
      getEveryone: getEveryone,
      getOver30: getOver30,
      getUnder30: getUnder30
    };
    return service;

    function getMales(){
      var def = $q.defer();
      $http.get(Config.base_url + Config.endpoints.male).then(function(data){
        def.resolve(data);
      })
      .then(function(){
        def.reject("fail");
      })
      return def.promise;
    }
    function getFemales(id){
      console.log('adw')
    }
    function getEveryone(id){
      console.log('adw');
    }
    function getOver30(){
      console.log('aqweq');
    }  
    function getUnder30() {
      console.log('awdawdhbahuwd');
    }
  }]
);