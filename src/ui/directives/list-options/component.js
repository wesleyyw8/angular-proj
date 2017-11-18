import { app } from './../../config/config';

app.directive('listOptions', () => {
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