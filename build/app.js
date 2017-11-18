/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const app = angular.module('refactionjs',['ngRoute']);
/* harmony export (immutable) */ __webpack_exports__["app"] = app;


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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(2);
__webpack_require__(4);
__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropDownOptions__ = __webpack_require__(3);



__WEBPACK_IMPORTED_MODULE_0__config_config__["app"].controller('searchController',
['$scope', 'dataService', '$location', ($scope, dataService, $location) => {
  
  $scope.genderOptions = __WEBPACK_IMPORTED_MODULE_1__dropDownOptions__["b" /* genderOptions */];
  $scope.ageOptions = __WEBPACK_IMPORTED_MODULE_1__dropDownOptions__["a" /* ageOptions */];

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

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const genderOptions = [{
  label: 'It doesnt matter',
  value: 'everyone'
},{
  label: 'Males',
  value: 'male'
},{
  label: 'Females',
  value: 'female'
}];
/* harmony export (immutable) */ __webpack_exports__["b"] = genderOptions;


const ageOptions = [{
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
/* harmony export (immutable) */ __webpack_exports__["a"] = ageOptions;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(0);


__WEBPACK_IMPORTED_MODULE_0__config_config__["app"].controller('resultController',
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

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(0);


__WEBPACK_IMPORTED_MODULE_0__config_config__["app"].directive('listOptions', () => {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      options: '=',
      onSelect: '=',
      title: '@'
    },
    templateUrl: 'directives/list-options/template.html',
    link: (scope, element, attrs) => { 
      scope.optionSelect = (value) => {
        scope.optionSelected = value;
        scope.onSelect(value);
      };
    } 
  };
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(0);


__WEBPACK_IMPORTED_MODULE_0__config_config__["app"].service('dataService', ["$q", "$http", "Config", ($q, $http, Config) => {

    const getPeople = (params) =>{
      var def = $q.defer();
      var parameters = '?gender='+params.gender+'&minAge='+params.minAge+'&maxAge='+params.maxAge;
      
      $http.get(Config.base_url + Config.endpoints.search + parameters).then(function(data){
        def.resolve(data);
      })
      .then(function(){
        def.reject("fail");
      });
      return def.promise;
    };
    const service = {
      getPeople
    };
    return service;
  }]
);

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map