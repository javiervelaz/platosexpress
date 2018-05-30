angular
        .module('app')
        .controller('editUserController', editUser);

editUser.$inject = ['$scope', 'model', 'SystemUser', 'dataService', 'confirmAlert', 'userDomain', '$location', '$firebaseArray', 'provinciasList', 'Notification','geoFire'];

function editUser($scope, model, SystemUser, dataService, confirmAlert, userDomain, $location, $firebaseArray, provinciasList, Notification,geoFire) {
    domain = 'users';
    SystemUser.onAuth(function (authData) {
        $scope.userUid = authData.uid;
    });
    $scope.noEditable = true;
    $scope.editable = false;
    $scope.lat = undefined;
    $scope.lng = undefined;

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
        $scope.$on('gmPlacesAutocomplete::placeChanged', function () {
            var location = $scope.autocomplete.getPlace().geometry.location;
            $scope.lat = location.lat();
            $scope.lng = location.lng();
            $scope.direccion = $scope.autocomplete.getPlace().formatted_address
            // mapService.mapa(Callresult,$scope.autocomplete)
            $scope.$apply();
        });


        $scope.edit = function () {
            $scope.noEditable = false;
            $scope.editable = true;
        }

        $scope.saveEditUser = function () {
            if ($scope.editUser.$valid) {
                userDomain.email = $scope.user.email;
                userDomain.nombre = $scope.user.nombre;
                userDomain.telefono = $scope.user.telefono;
                userDomain.latitud = $scope.user.latitud;
                userDomain.longitud = $scope.user.longitud;
                //userDomain.location = $scope.user.location;
                //userDomain.direccion.altura = $scope.user.direccion.altura;
                //userDomain.direccion.piso = $scope.user.direccion.piso;
                //userDomain.direccion.numero = $scope.user.direccion.numero;
                if ($scope.direccion) {
                    
                    userDomain.address = $scope.direccion;
                    userDomain.latitud = $scope.lat;
                    userDomain.longitud = $scope.lng;
                    
                } else {
                    userDomain.address = $scope.user.address;
                }
                console.log(userDomain)
                dataService.editUser(domain, userDomain, $scope.userUid);
                Notification.success("Los datos fueron actualizados correctamente")
                $location.path('/');
                
            } else {
                var error = $scope.editUser.$error;
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


