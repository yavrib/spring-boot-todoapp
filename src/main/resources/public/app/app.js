import 'bootstrap/dist/css/bootstrap.css';
import 'app.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';
import uiBootstrap from 'angular-ui-bootstrap';

import AppComponent from './app.component';
import Home from './home';
import Add from './add';
import Edit from './edit';
import TodoList from './services';

const root = angular
  .module('todoApp', [
    Home,
    uiRouter,
    ngCookies,
    uiBootstrap,
    Add,
    Edit,
    TodoList
  ])
  .config(($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $urlRouterProvider.otherwise('/');
  })
  .constant('API_URL','http://localhost:8080/api/v1')
  .component('app', AppComponent)
  .name;

export default root;
