(function () {

    'use strict';

    /* Services */


    angular.module('app')
            .service('user.service', userService);

    userService.$inject = ['app.services'];

    function userService($scope,SystemUser) {
     SystemUser.onAuth(function(authData){
                     $scope.UserUid = authData.uid;
                });
        
        this.auth = $scope.UserUid;
    }


})();


