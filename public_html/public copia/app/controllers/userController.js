angular
        .module('app')
        .controller('listUserController', listUser)
listUser.$inject = ['$scope', 'model', 'SystemUser'];

function listUser($scope, modelUser, SystemUser) {
    var domain = 'users';
    
    var activate = {
        getUser: getUser(),
    }

    return activate;


    function getUser() {
        usuarios = modelUser.list(domain);
        $scope.usuarios = usuarios;
        console.log(usuarios)
    }

}
