(function () {
    'use strict';

    var app = angular.module('app', ['ngMaterial']);

    app.controller('dialogController', function (confirmAlert) {

        var vm = this;
        
        vm.confirm= function () {
            confirmAlert.confirmBoxResponse(
                'Would you like to delete?',
                'Record will be deleted ',
                'Delete',
                callBack,
                "Hello World");
        };

        function callBack(param) {
            vm.result = param;
        }

    });

})();
