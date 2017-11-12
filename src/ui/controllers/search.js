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