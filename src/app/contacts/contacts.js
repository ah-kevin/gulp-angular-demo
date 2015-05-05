/**
 * Created by Lennon on 15/5/4.
 */
'use strict';
angular.module('gulpAngularDemo.contacts', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouteProvider) {
        $stateProvider
            //////////////
            // Contacts //
            //////////////

            .state('contacts', {
                url: '/contacts',
                templateUrl: 'app/contacts/contacts.html',
                resolve:{
                  contacts:['contacts', function (contacts) {
                    return contacts.all();
                  }]
                },
                controller:['$scope','$state','contacts', function ($scope,$state,contacts) {
                    $scope.contacts=contacts;
                }]
            })


    }]);