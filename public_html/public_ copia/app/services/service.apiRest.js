(function () {

    'use strict';

    /* Services */


    angular.module('app')
            .factory('ApiResource', ['$resource', function ($resource) {
                function setRequestData(data) {
                    console.log(data)
                    var requestData = new Object();
                    requestData.user = data;
                    return angular.toJson(requestData);
                }
                return $resource('http://localhost:8000/api/get', {
                }, {
                    'get': {
                        method: 'GET',
                        headers: {"Content-Type": "application/json"}
                    },
                    'new': {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        transformRequest: setRequestData
                    },
                    'update': {
                        method: 'PUT',
                        headers: {"Content-Type": "application/json"},
                        transformRequest: setRequestData
                    }
                });
            }]);
})();


