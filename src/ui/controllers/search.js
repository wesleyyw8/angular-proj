import { app } from './../config/config';
import { genderOptions, ageOptions } from './dropDownOptions';

app.controller('searchController',
['$scope', 'dataService', '$location', ($scope, dataService, $location) => {
  
  $scope.genderOptions = genderOptions;
  $scope.ageOptions = ageOptions;

  $scope.onSelectGender = val => {
    $scope.selectedGender = val.value;
    nextStep();
  };

  $scope.onSelectAgeRange = val => {
    $scope.selectedAge = val.value;
    nextStep();
  };
  
  const nextStep = () => {
    if ($scope.step1) {
      $scope.step1 = false;
      $scope.step2 = true;
    }
    else{
      $location.path(`/result${mountQueryString()}`);
    }
  };

  const mountQueryString = () => 
    `/${$scope.selectedGender}/${$scope.selectedAge.min}/${$scope.selectedAge.max}`;
  
}]);