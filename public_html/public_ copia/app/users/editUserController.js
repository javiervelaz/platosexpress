angular
        .module('app')
        .controller('editUserController', editUser);

editUser.$inject = ['$scope', 'model', 'SystemUser', 'dataService', 'confirmAlert', 'userDomain', '$location', '$firebaseArray', 'provinciasList'];

function editUser($scope, model, SystemUser, dataService, confirmAlert, userDomain, $location, $firebaseArray, provinciasList) {
    domain = 'users';
    SystemUser.onAuth(function (authData) {
        $scope.userUid = authData.uid;
    });


    $scope.options = provinciasList.get;

    var userDomain = userDomain.get;
    $scope.data = {
        provincia: null,
        multipleSelect: [],
        option1: 'option-1',
    };


    var activate = {
        editableUser: editableUser(),
        edit: editUser()
    }

    return activate;

    function editableUser() {
        usuarios = model.find(domain, $scope.userUid);

        $scope.user = usuarios
        usuarios.$bindTo($scope, "selected").then(function () {
            if ($scope.selected.direccion != 'undefined') {
                provId = $scope.selected.direccion.provincia;
                $scope.selectedOption = $scope.options[provId];
                
            }
        })
        //$scope.selectedOption = $scope.options[0];

    }

    function editUser() {
        $scope.saveEditUser = function () {
            if ($scope.editUser.$valid) {
                userDomain.email = $scope.user.email;
                userDomain.nombre = $scope.user.nombre;
                userDomain.telefono = $scope.user.telefono;
                userDomain.direccion.provincia = $scope.selectedOption.id;
                userDomain.direccion.ciudad = $scope.user.direccion.ciudad;
                userDomain.direccion.calle = $scope.user.direccion.calle;
                userDomain.direccion.altura = $scope.user.direccion.altura;
                userDomain.direccion.piso = $scope.user.direccion.piso;
                userDomain.direccion.numero = $scope.user.direccion.numero;

                dataService.editUser(domain, userDomain, $scope.userUid);
                $location.path('/');
                console.log(userDomain)
            } else {
                var error = $scope.editUser.$error;
                $scope.errormsg = 333333;
                $scope.msgValid = [];
                angular.forEach(error, function (value, key) {
                    angular.forEach(value, function (field) {
                        if (field.$invalid) {
                            $scope.msgValid.push(field.$name);

                        }
                    });
                });
                confirmAlert.confirmBoxResponse($scope.msgValid);
            }
        }
    }
}


