/**
 * Created by Lennon on 15/5/5.
 */
/**
 * Created by Lennon on 15/5/4.
 */
'use strict';
angular.module('gulpAngularDemo.code', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouteProvider) {
        $stateProvider
            .state('code', {
                url: '/code',
                templateUrl: 'app/code/code.html'
            })
            .state('tode',{
                url:'/code/tode',
                templateUrl:  'app/code/tode/index.html',
                controller:['$scope', function ($scope) {
                    var todoList = $scope.todoList=[];
                    todoList.todos = [
                        {text:'learn angular', done:true},
                        {text:'build an angular app', done:false}];

                    todoList.addTodo = function() {
                        todoList.todos.push({text:todoList.todoText, done:false});
                        todoList.todoText = '';
                    };

                    todoList.remaining = function() {
                        var count = 0;
                        angular.forEach(todoList.todos, function(todo) {
                            count += todo.done ? 0 : 1;
                        });
                        return count;
                    };

                    todoList.archive = function() {
                        var oldTodos = todoList.todos;
                        todoList.todos = [];
                        angular.forEach(oldTodos, function(todo) {
                            if (!todo.done) todoList.todos.push(todo);
                        });
                    };
                }]
            })
          .state('alert',{
            url:'/code/alert',
            templateUrl:'app/code/alert/index.html'
          })

    }]);