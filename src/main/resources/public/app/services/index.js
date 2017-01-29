import angular from 'angular';
import TodoList from './todoList.service';

const todoList = angular
  .module('TodoList', [])
  .service('TodoList', TodoList)
  .name;

export default todoList;
