app.controller('resultController',
['$scope', 'dataService','$route', function($scope, dataService, $route){
  
  var params = {
    gender: $route.current.params.gender,
    minAge: $route.current.params.minAge,
    maxAge: $route.current.params.maxAge
  };

  dataService.getPeople(params).then(function(resp) {
    $scope.data = resp.data !== [] ? resp.data : {resp: 'No results.'};
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
    $scope.selectedGender = val.value;
    nextStep();
  };

  $scope.onSelectAgeRange = function (val) {
    $scope.selectedAge = val.value;
    nextStep();
  };

  function nextStep() {
    if ($scope.step1) {
      $scope.step1 = false;
      $scope.step2 = true;
    }
    else{
      $location.path('/result'+mountQueryString());
    }
  }

  function mountQueryString() {
    return '/'+$scope.selectedGender+'/'+$scope.selectedAge.min+'/'+$scope.selectedAge.max;
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
      getPeople: getPeople,
    };
    return service;

    function getPeople(params){
      var def = $q.defer();
      var parameters = '?gender='+params.gender+'&minAge='+params.minAge+'&maxAge='+params.maxAge;
      
      $http.get(Config.base_url + Config.endpoints.search + parameters).then(function(data){
        def.resolve(data);
      })
      .then(function(){
        def.reject("fail");
      })
      return def.promise;
    }
  }]
);