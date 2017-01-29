import angular from 'angular';
import uiRouter from 'angular-ui-router';
import EditComponent from './edit.component';

const edit = angular
  .module('edit', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('edit', {
        url: '/edit/{id}',
        template: '<edit />'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('edit', EditComponent)
  .name;

export default edit;
