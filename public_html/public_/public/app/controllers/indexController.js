angular
        .module('app')
        .controller('indexController', Dashboard)
        .filter('offset', function () {
            return function (input, start) {
                start = parseInt(start, 10);
                return input.slice(start);
            };
        });
Dashboard.$inject = ['$scope', 'SystemUser', '$window', 'model', '$firebaseArray', '$pageArray', 'shareData', '$http', 'ngCart', 'orderByFilter', '$firebaseObject', 'geoFire', 'calificacion'];

function Dashboard($scope, SystemUser, $window, model, $firebaseArray, $pageArray, shareData, $http, ngCart, orderBy, $firebaseObject, geoFire, calificacion) {
    $scope.titulo = 'Platos Express';
    $scope.logOut = function () {
        SystemUser.unauth();
        $window.location = '/';
    }
    var misPlatos = [];
    var input;
    domain = 'platos'
    $scope.radioKm = 100
    $scope.kilometros = [10, 25, 50, 100]
    $scope.selectDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo', 'Todos'];
    $scope.platos = []
    $scope.items = [];


    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miercoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sabado";
    weekday[7] = "Todos";

    $scope.diaNombre = weekday[d.getDay()]

    data = model.list(domain).orderByChild('estado').equalTo(true);
    list = $firebaseArray(data);


    $scope.changeDia = function (value) {
        $scope.platos = []
        $scope.diaSemana = value.diaSemana
        SystemUser.onAuth(function (authData) {
            if (authData) {
                var georef = geoFire('geo')
                var result;
                georef.get(authData.uid).then(function (location) {
                    if (location === null) {
                        console.log("Provided key is not in GeoFire");
                    }
                    else {
                        result = location.toString().split(",");
                        var geoQuery = georef.query({
                            center: [parseFloat(result[0]), parseFloat(result[1])],
                            radius: $scope.radioKm
                        })
                        var onKeyEnteredRegistration = geoQuery.on("key_entered", function (key, location, distance) {
                            list.$loaded().then(function (platos) {
                                var countPlatos = 0
                                angular.forEach(platos, function (value, i) {
                                    angular.forEach(value.dias, function (day) {
                                        //console.log($scope.selectDias)
                                        if ($scope.diaSemana == 'Todos') {
                                            if (value.id_usuario == key && value.id_usuario != authData.uid && value.cantidad_disponible > 0) {
                                                countPlatos = countPlatos + 1;
                                                
                                                $scope.platos.push({
                                                    nombre: value.nombre,
                                                    precio: value.precio,
                                                    urlPath: value.urlPath,
                                                    cantidad_disponible: value.cantidad_disponible,
                                                    $id: value.$id,
                                                    descripcion: value.descripcion,
                                                    calificacion: value.calificacion,
                                                    id_usuario: value.id_usuario,
                                                    distancia: distance,
                                                    delivery: value.delivery,
                                                    dias: value.dias
                                                });
                                            }
                                        } else {
                                            if (day == $scope.diaSemana) {
                                                if (value.id_usuario == key && value.id_usuario != authData.uid && value.cantidad_disponible > 0) {
                                                    countPlatos = countPlatos + 1;
                                                    //console.log(value)
                                                    $scope.platos.push({
                                                        nombre: value.nombre,
                                                        precio: value.precio,
                                                        urlPath: value.urlPath,
                                                        cantidad_disponible: value.cantidad_disponible,
                                                        $id: value.$id,
                                                        descripcion: value.descripcion,
                                                        calificacion: value.calificacion,
                                                        id_usuario: value.id_usuario,
                                                        distancia: distance,
                                                        delivery: value.delivery,
                                                        dias: value.dias
                                                    });
                                                }
                                            }
                                        }


                                    })

                                })
                                $scope.countPlatos = countPlatos
                            });
                            //console.log($scope.platos)
                            //$scope.platos =misPlatos;
                            console.log(key + " entered query at " + location + " (" + distance + " km from center)");
                        });
//                console.log("Provided key has a location of " + location);
                    }
                }, function (error) {
                    console.log("Error: " + error);
                });
            }
        });
    }


    $scope.changeRadio = function (value) {
        $scope.platos = []
        $scope.radioKm = value.radioKm
        SystemUser.onAuth(function (authData) {
            if (authData) {
                var georef = geoFire('geo')
                var result;
                georef.get(authData.uid).then(function (location) {
                    if (location === null) {
                        console.log("Provided key is not in GeoFire");
                    }
                    else {
                        result = location.toString().split(",");
                        var geoQuery = georef.query({
                            center: [parseFloat(result[0]), parseFloat(result[1])],
                            radius: $scope.radioKm
                        })
                        var onKeyEnteredRegistration = geoQuery.on("key_entered", function (key, location, distance) {
                            list.$loaded().then(function (platos) {
                                var countPlatos = 0
                                angular.forEach(platos, function (value, i) {
                                    angular.forEach(value.dias, function (day) {
                                        if (day == $scope.diaNombre || $scope.selectDias == 'Todos') {
                                            if (value.id_usuario == key && value.id_usuario != authData.uid && value.cantidad_disponible > 0) {
                                                countPlatos = countPlatos + 1;
                                                //console.log(value)
                                                $scope.platos.push({
                                                    nombre: value.nombre,
                                                    precio: value.precio,
                                                    urlPath: value.urlPath,
                                                    cantidad_disponible: value.cantidad_disponible,
                                                    $id: value.$id,
                                                    descripcion: value.descripcion,
                                                    calificacion: value.calificacion,
                                                    id_usuario: value.id_usuario,
                                                    distancia: distance,
                                                    delivery: value.delivery,
                                                    dias: value.dias
                                                });
                                            }
                                        }

                                    })

                                })
                                $scope.countPlatos = countPlatos
                            });
                            //console.log($scope.platos)
                            //$scope.platos =misPlatos;
                            console.log(key + " entered query at " + location + " (" + distance + " km from center)");
                        });
//                console.log("Provided key has a location of " + location);
                    }
                }, function (error) {
                    console.log("Error: " + error);
                });
            }
        });
    }

    $scope.itemsPerPage = 10;
    $scope.currentPage = 0;
    $scope.propertyName = 'precio';
    $scope.reverse = true;


    $scope.range = function () {
        var rangeSize = $scope.pageCount() + 1;
        var ret = [];
        var start;

        start = $scope.currentPage;
        //console.log($scope.pageCount())
        if (start > $scope.pageCount() - rangeSize) {
            start = $scope.pageCount() - rangeSize + 1;
        }

        for (var i = start; i < start + rangeSize; i++) {
            ret.push(i);
        }

        return ret;
    };

    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    $scope.prevPageDisabled = function () {
        return $scope.currentPage === 0 ? "disabled" : "";
    };

    $scope.pageCount = function () {
        //console.log(Math.ceil($scope.countPlatos  / $scope.itemsPerPage) - 1)
        return Math.ceil($scope.countPlatos / $scope.itemsPerPage) - 1;
    };

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pageCount()) {
            $scope.currentPage++;
        }
    };

    $scope.nextPageDisabled = function () {
        return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    };

    $scope.setPage = function (n) {
        $scope.currentPage = n;
    };

    SystemUser.onAuth(function (authData) {
        if (authData) {
            var georef = geoFire('geo')
            var result;
            georef.get(authData.uid).then(function (location) {
                if (location === null) {
                    console.log("Provided key is not in GeoFire");
                }
                else {
                    result = location.toString().split(",");
                    var geoQuery = georef.query({
                        center: [parseFloat(result[0]), parseFloat(result[1])],
                        radius: $scope.radioKm
                    })
                    var onKeyEnteredRegistration = geoQuery.on("key_entered", function (key, location, distance) {
                        list.$loaded().then(function (platos) {
                            var countPlatos = 0

                            angular.forEach(platos, function (value, i) {
                                angular.forEach(value.dias, function (day) {
                                    if (day == $scope.diaNombre || $scope.selectDias == 'Todos') {
                                        if (value.id_usuario == key && value.id_usuario != authData.uid && value.cantidad_disponible > 0) {
                                            countPlatos = countPlatos + 1;
                                            //console.log(value)
                                            $scope.platos.push({
                                                nombre: value.nombre,
                                                precio: value.precio,
                                                urlPath: value.urlPath,
                                                cantidad_disponible: value.cantidad_disponible,
                                                $id: value.$id,
                                                descripcion: value.descripcion,
                                                calificacion: value.calificacion,
                                                id_usuario: value.id_usuario,
                                                distancia: distance,
                                                delivery: value.delivery,
                                                dias: value.dias
                                            });
                                        }
                                    }

                                })

                            })
                            $scope.countPlatos = countPlatos
                            console.log(countPlatos)
                        });


                        //$scope.platos =misPlatos;
                        console.log(key + " entered query at " + location + " (" + distance + " km from center)");
                    });

//                console.log("Provided key has a location of " + location);
                }
            }, function (error) {
                console.log("Error: " + error);
            });
        }
    });


//        data = model.list(domain).orderByChild('estado').equalTo(true);
//        $scope.platos = $firebaseArray(data);
//        $scope.platos.$loaded().then(function (platos) {
//            $scope.countPlatos = platos.length;
//        });



    $scope.hideLogin = false;
    SystemUser.onAuth(function (authData) {
        if (authData) {
            $scope.userUid = authData.uid;
        }

    });
    calificacion.calificacionUsuario($scope.userUid).then(
            function (valor) {
                $scope.califComprador = valor
            },
            function (error) {
                console.log(error)
            }
    )

    var index = {
        loginAuth: loginAuth(),
        platosLista: platosLista()
                //sendMail : sendMail()
    }

    return index;

    function platosLista() {


        $scope.calif = function (min, max, step) {
            step = step || 1;
            var input = [];
            for (var i = min; i <= max; i += step) {
                input.push(i);
            }
            return input;
        };

    }

    function loginAuth() {
        SystemUser.onAuth(function (authData) {
            // console.log(authData.provider);
            if (authData) {
                switch (authData.provider) {
                    case 'password':
                        $scope.hideLogin = true;
                        $scope.nombreUser = authData.password.email.replace(/@.*/, '');

                        break;
                    case 'twitter':

                        $scope.hideLogin = true;
                        $scope.nombreUser = authData.twitter.displayName;
                        break;
                    case 'facebook':

                        $scope.hideLogin = true;
                        $scope.nombreUser = authData.facebook.displayName;
                        break;
                    case 'google':

                        $scope.hideLogin = true;
                        $scope.nombreUser = authData.google.displayName;
                        break;
                }
                ;

            } else {

                console.log("Client unauthenticated.")
            }
        });

    }

    function callback(id) {
        return shareData.setFirstName(id)
        //return idPlato.id = id;
    }


}



