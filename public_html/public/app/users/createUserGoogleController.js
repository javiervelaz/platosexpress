angular
        .module('app')
        .controller('createUserGoogleController',googleUser)

googleUser.$inject = ['$scope', 'dataService', '$location', 'userDomain', 'Notification', 'errorHandler','$location'];

function googleUser($scope, dataService, $location, userDomain, Notification, errorHandler,$location){
    var search =  $location.search();
    
    $scope.nombre = search.name;
   
    var domain = 'users';

    var userDomain = userDomain.get;
    
    $scope.lat = undefined;
    $scope.lng = undefined;
    $scope.random = function (x) {
        var s = "";
        while (s.length < x && x > 0) {
            var r = Math.random();
            s += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
        }
        return s;
    }

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
            var data = {};
            if ($scope.userForm.$valid) {
                userDomain.email = $scope.email;
                userDomain.nombre = $scope.nombre;
                userDomain.password = $scope.userForm.password;
                userDomain.telefono = $scope.telefono;
                userDomain.address = $scope.direccion;
                userDomain.longitud = $scope.lng;
                userDomain.latitud = $scope.lat;
                userDomain.token = $scope.random(16);
                userDomain.provider = 'google'
                userData = {
                    email: $scope.email,
                    password: $scope.userForm.password,
                }
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



