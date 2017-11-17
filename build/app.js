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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var app = exports.app = angular.module('refactionjs', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: '../views/search.html',
    controller: 'searchController'
  }).when('/result/:gender/:minAge/:maxAge', {
    templateUrl: '../views/result.html',
    controller: 'resultController'
  }).otherwise({
    redirectTo: '/search'
  });
}]);

app.factory('Config', [function () {
  var baseUrl = '/endpoints/';
  return {
    base_url: baseUrl,
    endpoints: {
      search: 'search'
    }
  };
}]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

_config.app.controller('searchController', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {

  $scope.genderOptions = [{
    label: 'Less than 18',
    value: {
      min: null,
      max: 18
    }
  }];

  $scope.ageOptions = [{
    label: 'Less than 18',
    value: {
      min: null,
      max: 18
    }
  }, {
    label: 'Between 19 - 25',
    value: {
      min: 19,
      max: 25
    }
  }, {
    label: 'Between 26 - 35',
    value: {
      min: 26,
      max: 35
    }
  }, {
    label: 'Between 36 - 49',
    value: {
      min: 36,
      max: 49
    }
  }, {
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

  console.log([].concat(_toConsumableArray($scope.genderOptions), _toConsumableArray($scope.ageOptions)));

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
    } else {
      $location.path('/result' + mountQueryString());
    }
  }

  function mountQueryString() {
    return '/' + $scope.selectedGender + '/' + $scope.selectedAge.min + '/' + $scope.selectedAge.max;
  }
}]);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(0);

_config.app.controller('resultController', ['$scope', 'dataService', '$route', function ($scope, dataService, $route) {

  var params = {
    gender: $route.current.params.gender,
    minAge: $route.current.params.minAge,
    maxAge: $route.current.params.maxAge
  };

  dataService.getPeople(params).then(function (resp) {
    $scope.data = resp.data !== [] ? resp.data : { resp: 'No results.' };
  });
}]);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(0);

_config.app.directive('listOptions', function () {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      options: '=',
      onSelect: '=',
      title: '@'
    },
    templateUrl: 'directives/list-options/template.html',
    link: function link(scope, element, attrs) {
      scope.optionSelect = function (value) {
        scope.optionSelected = value;
        scope.onSelect(value);
      };
    }
  };
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(0);

_config.app.service('dataService', ["$q", "$http", "Config", function ($q, $http, Config) {
  var service = {
    getPeople: getPeople
  };
  return service;

  function getPeople(params) {
    var def = $q.defer();
    var parameters = '?gender=' + params.gender + '&minAge=' + params.minAge + '&maxAge=' + params.maxAge;

    $http.get(Config.base_url + Config.endpoints.search + parameters).then(function (data) {
      def.resolve(data);
    }).then(function () {
      def.reject("fail");
    });
    return def.promise;
  }
}]);

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map