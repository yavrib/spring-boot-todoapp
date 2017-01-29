import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AddComponent from './add.component';

const add = angular
  .module('add', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('add', {
        url: '/add',
        template: '<add />'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('add', AddComponent)
  .name;

export default add;
