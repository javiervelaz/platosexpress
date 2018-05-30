angular
        .module('app')
        .controller('indexController', Dashboard)
        .filter('offset', function () {
            return function (input, start) {
                start = parseInt(start, 10);
                return input.slice(start);
            };
        });
Dashboard.$inject = ['$scope', 'SystemUser', '$window', 'model', '$firebaseArray', '$pageArray', '$http', 'ngCart', 'orderByFilter', '$firebaseObject', 'geoFire', 'calificacion', 'dataService', 'userNombre','notificacion','userDataService'];

function Dashboard($scope, SystemUser, $window, model, $firebaseArray, $pageArray, $http, ngCart, orderBy, $firebaseObject, geoFire, calificacion, dataService, userNombre,notificacion,userDataService) {
    $scope.titulo = 'Platos Express';
    $scope.notiffHide= false;
    SystemUser.onAuth(function (authData) {
        if (authData) {
            
            cal = model.referencia('users/'+authData.uid);
            cal.on("value", function (snap) {
                $scope.califVendedor = snap.val().calificacion_vendedor;
                $scope.califComprador = snap.val().calificacion_comprador;
            })
            $scope.notifList = model.find('notificaciones',authData.uid)
            
            notificacion.cantidad(authData.uid).then(
            function (valor) {
                if(valor > 0){
                    $scope.notiffHide= true;
                }; 
                $scope.canditadNotif = valor
            },
            function (error) {
                //console.log(error)
            }
                   
            )  
            $scope.nombreUser = dataService.getUserName(authData.uid);
             $scope.datosObligatorios = false
            userDataService.validacionDatos(authData.uid).then(
                    function(valor){
                        //console.log(valor.length)
                        if(valor.length!=0){

                             $scope.datosObligatorios = true
                        }
                        
                        
                    },
                    function(error){
                        
                    }
            )
            
        }
        
    })
    

    $scope.logOut = function () {
        SystemUser.unauth();
        $window.location = '/';
    }
    var misPlatos = [];
    var calif = [];
    domain = 'platos'
    $scope.radioKm = 100
    $scope.kilometros = [10, 25, 50, 100]
    $scope.selectDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
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
                                                    calificacion_vendedor: value.calificacion_vendedor,
                                                    id_usuario: value.id_usuario,
                                                    distancia: distance,
                                                    delivery: value.delivery,
                                                    dias: value.dias,
                                                    userNombre: value.usuarioNombre,
                                                });
                                            }
                                        }



                                    })

                                })
                                $scope.countPlatos = countPlatos
                            });
                            //console.log($scope.platos)
                            //$scope.platos =misPlatos;
                            //console.log(key + " entered query at " + location + " (" + distance + " km from center)");
                        });
//                console.log("Provided key has a location of " + location);
                    }
                }, function (error) {
                    console.log("Error: " + error);
                });
            }
        });
    }

    //$scope.getCalificacion =  userCalif.calif('82f39d03-5105-4001-9647-622686bf84b9');


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
                                        if (day == $scope.diaNombre) {
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
                                                    calificacion_vendedor: value.calificacion_vendedor,
                                                    id_usuario: value.id_usuario,
                                                    distancia: distance,
                                                    delivery: value.delivery,
                                                    dias: value.dias,
                                                    userNombre: value.usuarioNombre,
                                                });
                                            }
                                        }

                                    })

                                })
                                $scope.countPlatos = countPlatos
                            });
                            //console.log($scope.platos)
                            //$scope.platos =misPlatos;
                            //console.log(key + " entered query at " + location + " (" + distance + " km from center)");
                        });
//                console.log("Provided key has a location of " + location);
                    }
                }, function (error) {
                    console.log("Error: " + error);
                });
            }
        });
    }
    
    
    SystemUser.onAuth(function (authData) {
        if (authData) {
            var georef = geoFire('geo')
            var result;
            georef.get(authData.uid).then(function (location) {
                if (location === null) {
                    //console.log("Provided key is not in GeoFire");
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
                            countPlatos = countPlatos + 1;
                                angular.forEach(value.dias, function (day,x) {
                                    if (day == $scope.diaNombre) {
                                        if (value.id_usuario == key && value.id_usuario != authData.uid && value.cantidad_disponible > 0) {
                                       
                                            //countPlatos = x;
                                            
                                            //console.log(i)
                                            $scope.platos.push({
                                                nombre: value.nombre,
                                                precio: value.precio,
                                                urlPath: value.urlPath,
                                                cantidad_disponible: value.cantidad_disponible,
                                                $id: value.$id,
                                                descripcion: value.descripcion,
                                                calificacion_vendedor: value.calificacion_vendedor,
                                                id_usuario: value.id_usuario,
                                                distancia: distance,
                                                delivery: value.delivery,
                                                dias: value.dias,
                                                userNombre: value.usuarioNombre,
                                            });
                                        }
                                    }

                                })

                            })
                            $scope.countPlatos = countPlatos
                        });

                    });
                }
                
            }, function (error) {
                console.log("Error: " + error);
            });
        }
    });
    //console.log($scope.platos.count)

    $scope.itemsPerPage = 4;
    $scope.currentPage = 0;
    $scope.propertyName = 'precio';
    $scope.reverse = true;


    $scope.range = function () {
        var rangeSize = $scope.pageCount() + 1;
        var ret = [];
        var start;
        
        start = $scope.currentPage;
        
        
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
        
        //console.log(Math.ceil($scope.itemsPerPage  / $scope.countPlatos) - 1)
        return Math.ceil($scope.countPlatos  / $scope.itemsPerPage) - 1;
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

    



    $scope.hideLogin = false;
    SystemUser.onAuth(function (authData) {
        if (authData) {
            $scope.userUid = authData.uid;
        }

    });
//    calificacion.getCalificacionComprador($scope.userUid).then(
//            function (valor) {
//                $scope.califComprador = valor
//            },
//            function (error) {
//                console.log(error)
//            }
//    )
//    calificacion.getCalificacionVendedor($scope.userUid).then(
//            function (valor) {
//                $scope.califVendedor = valor
//            },
//            function (error) {
//                console.log(error)
//            }
//    )


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
                        //$scope.nombreUser = authData.password.email.replace(/@.*/, '');
                        break;
                    case 'twitter':

                        $scope.hideLogin = true;
                        //$scope.nombreUser = authData.twitter.displayName;
                        break;
                    case 'facebook':
                        $scope.hideLogin = true;
                        //$scope.nombreUser = authData.facebook.displayName;

                        break;
                    case 'google':

                        $scope.hideLogin = true;
                        //$scope.nombreUser = authData.google.displayName;
                        break;
                }
                ;

            } else {

                console.log("Client unauthenticated.")
            }
        });

    }



}



