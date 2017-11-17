import { app } from './../../config/config';

app.directive('listOptions', function () {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      options: '=',
      onSelect: '=',
      title: '@'
    },
    templateUrl: 'directives/list-options/template.html',
    link: function (scope, element, attrs) { 
      scope.optionSelect = function (value) {
        scope.optionSelected = value;
        scope.onSelect(value);
      };
    } 
  }
});