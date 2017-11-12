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