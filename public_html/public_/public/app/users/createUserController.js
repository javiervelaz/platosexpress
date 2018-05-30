angular
        .module('app')
        .controller('createUserController', createUser);

createUser.$inject = ['$scope', 'dataService', '$location', 'provinciasList', 'userDomain', 'Notification', 'errorHandler', 'mapService'];

function createUser($scope, dataService, $location, provinciasList, userDomain, Notification, errorHandler, mapService) {
    var domain = 'users';
    var userDomain = userDomain.get;
    $scope.options = provinciasList.get;
    $scope.selectedOption = $scope.options[0];
    $scope.data = {
        provincia: null,
        multipleSelect: [],
        option1: 'option-1',
    };
    $scope.lat = undefined;
    $scope.lng = undefined;
    
    
    activate();

    function activate() {
        return newUser();
    }


    function Callresult(result) {
        console.log(result.geometry.location.lat())
    }

    function newUser() {
        $scope.$on('gmPlacesAutocomplete::placeChanged', function () {
            var location = $scope.autocomplete.getPlace().geometry.location;
            $scope.lat = location.lat();
            $scope.lng = location.lng();
            $scope.direccion = $scope.autocomplete.getPlace().formatted_address
           // mapService.mapa(Callresult,$scope.autocomplete)
            $scope.$apply();
        });
        $scope.SaveUser = function () {

            if ($scope.userForm.$valid) {
                console.log($scope.data.provincia);
                userDomain.email = $scope.email;
                userDomain.nombre = $scope.nombre;
                userDomain.password = $scope.userForm.password;
                userDomain.telefono = $scope.telefono;
                //userDomain.direccion.pais = $scope.pais;
                //userDomain.direccion.provincia = $scope.selectedOption.id;
                //userDomain.direccion.ciudad = $scope.ciudad;
                //userDomain.direccion.barrio = $scope.barrio;
                //userDomain.direccion.altura = $scope.altura;
                //userDomain.direccion.piso = $scope.piso;
                //userDomain.direccion.numero = $scope.numero;
                userDomain.address = $scope.direccion;
                userDomain.longitud=$scope.lng;
                userDomain.latitud = $scope.lat;

                userData = {
                    email: $scope.email,
                    password: $scope.userForm.password,
                }
                //console.log($scope.userForm.password)
                console.log(userDomain)
                dataService.saveUser(domain, userDomain)
                
                $location.path('/');
            } else {
                var error = $scope.userForm.$error;
                $scope.msgValid = [];
                angular.forEach(error, function (value, key) {
                    angular.forEach(value, function (field) {
                        if (field.$invalid) {
                            //$scope.msgValid.push(field.$name);
                            console.log(field)
                            Notification.error(errorHandler.message(field.$name))
                        }
                    });
                });

            }
        }

    }
}



