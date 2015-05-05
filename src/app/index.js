'use strict';

angular.module('gulpAngularDemo', ['ngAnimate', 'restangular', 'ui.router', 'ui.bootstrap',
    'gulpAngularDemo.code',
    'gulpAngularDemo.contacts',
    'gulpAngularDemo.contacts.service'
])
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootS
 * cope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            //////////
            // Home //
            //////////
            .state('home',{
                url:'/',
                templateUrl:'app/home/home.html'
            });
    });

