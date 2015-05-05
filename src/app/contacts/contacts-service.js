/**
 * Created by Lennon on 15/5/5.
 */
angular.module('gulpAngularDemo.contacts.service',[])
    .factory('contacts',['$http', function ($http) {
            var path='app/data/contacts.json';
        var contacts =$http.get(path).then(function (resp) {
            return resp.data.contacts;
        });
        console.log(contacts);
        var factory={};
        factory.all= function () {
            return contacts;
        };
        return factory;
    }]);