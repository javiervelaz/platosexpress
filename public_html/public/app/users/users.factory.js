angular
        .module('app')
        .factory('dataService', dataService);
dataService.$inject = ['$rootScope', '$log', 'model', 'SystemUser', '$window', 'userDomain', 'syncData', 'Notification', 'errorHandler', 'geoFire', 'APIREST', '$location', 'notificacionesDomain','firebaseRef'];

function dataService($rootScope, $log, modelUser, SystemUser, $window, userDomain, syncData, Notification, errorHandler, geoFire, APIREST, $location, notificacionesDomain,firebaseRef) {

    var domain = 'default';
    var userDomain = userDomain.get;
    var email = [];
    var nombre = [];
    var notificaciones = notificacionesDomain.get;
    var fecha = new Date().getTime();
    var userActive = [];
    var service = {
        saveUser: saveUser,
        userToken: userToken,
        editUser: editUser,
        loginUser: loginUser,
        loginFacebook: loginFacebook,
        loginTwitter: loginTwitter,
        loginGoogle: loginGoogle,
        get: get,
        getUserName: getUserName,
        checkUserActive: checkUserActive,
        getCalif: getCalif
    }
    return service;

    function get(id) {
        modelUser.findField('users/' + id).child('email').once('value', function (snap) {
            callback(snap.val())
        })
        return email
    }

    function getCalif(uid) {
        modelUser.findField('users/' + uid).child('calificacion').once('value', function (snap) {
            console.log(snap.val())
            callbackCalif(snap.val())
        })
        return $rootScope.calificacion;
    }

    function getUserName(id) {
        modelUser.findField('users/' + id).child('nombre').once('value', function (snap) {
            callbackNombre(snap.val())
        })
        return nombre
    }

    function loginFacebook() {
        SystemUser.authWithOAuthPopup("facebook", function (error, authData) {
            if (error) {
                console.log("Authentication Failed!", error);
            } else {
                domain = 'users';
                var userRef = modelUser.referencia(domain)
                userRef.once('value', function (snapshot) {
                    if (snapshot.hasChild(authData.uid)) {
                        console.log('exists');
                        $window.location = '/';
                    } else {
                        console.log('not exists');
                        userDomain.email = 0;
                        userDomain.nombre = authData.facebook.displayName;
                        userDomain.provider = authData.provider;
                        userDomain.address = 0;
                        SystemUser.child('users').child(authData.uid).set(
                                userDomain
                                );
                        //notificacion
                        notificaciones.texto = 'Registro desde Facebook, necesita completar email, direccion';
                        notificaciones.id = 'regitro twitter'
                        notificaciones.fecha = fecha;
                        notificaciones.activo = true

                        var obj = notificaciones;
                        modelUser.save('notificaciones/' + authData.uid, obj);

                        console.log("Authenticated successfully with payload:", userDomain);
                        $window.location = '/';
                    }
                });
                
            }
        });
    }

    function loginTwitter() {
        SystemUser.authWithOAuthPopup("twitter", function (error, authData) {
            if (error) {
                console.log("Authentication Failed!", error);
            } else {
                domain = 'users';
                var userRef = modelUser.referencia(domain)
                userRef.once('value', function (snapshot) {
                    if (snapshot.hasChild(authData.uid)) {
                        console.log('exists');
                        $window.location = '/';
                    } else {
                        console.log('not exists');
                        userDomain.email = 0;
                        userDomain.nombre = authData.twitter.displayName;
                        userDomain.provider = authData.provider;
                        userDomain.address = 0;

                        SystemUser.child('users').child(authData.uid).set(
                                userDomain
                                );
                        //notificacion
                        notificaciones.texto = 'Registro desde Twitter, necesita completar email, direccion';
                        notificaciones.id = 'regitro twitter'
                        notificaciones.fecha = fecha;
                        notificaciones.activo = true

                        var obj = notificaciones;
                        modelUser.save('notificaciones/' + authData.uid, obj);

                        console.log("Authenticated successfully with payload:", userDomain);
                        $window.location = '/';
                    }
                });
            }
        });
    }

    function loginGoogle() {
        SystemUser.authWithOAuthPopup("google", function (error, authData) {
            if (error) {
                console.log("Authentication Failed!", error);
            } else {
                domain = 'users';
                var userRef = modelUser.referencia(domain)
                userRef.once('value', function (snapshot) {
                    if (snapshot.hasChild(authData.uid)) {
                        console.log('exists');
                        $window.location = '/';
                    } else {
                        userDomain.email = 0;
                        userDomain.nombre = authData.google.displayName;
                        userDomain.provider = authData.google;
                        userDomain.address = 0;
                        
                        SystemUser.child('users').child(authData.uid).set(
                                userDomain
                                );
                        
                        //notificacion
                        notificaciones.texto = 'Registro desde Google, necesita completar email, direccion';
                        notificaciones.id = 'regitro twitter'
                        notificaciones.fecha = fecha;
                        notificaciones.activo = true

                        var obj = notificaciones;
                        modelUser.save('notificaciones/' + authData.uid, obj);
                        console.log("Authenticated successfully with payload:", userDomain);
                        $window.location = '/';
                    }
                });
            }
        });
    }

    function loginUser(username, password) {
        SystemUser.authWithPassword({
            email: username,
            password: password
        }, function (error, authData) {
            if (error) {
                $log.error(error);
                //$rootScope.loginError = error;

            } else {
                console.log("Authenticated successfully with payload:", authData);
                $window.location = '/';
            }
        });

    }

    function saveUser(domainName, data) {
        var ref = firebaseRef(domainName);
        ref.createUser({
            email: data.email,
            password: data.password
        }, function (error, userData) {
            if (error) {
                Notification.error(errorHandler.message(error.code))

            } else {
                
                ref.child(userData.uid).set(
                        data
                        );
                //console.log("Successfully created user account with uid:", userData.uid);
                var georef = geoFire('geo')
                georef.set(userData.uid, [data.latitud, data.longitud]).then(function () {
                    console.log("Provided key has been added to GeoFire");
                }, function (error) {
                    console.log("Error: " + error);
                });
                activarCuenta = {
                    usuario_id: userData.uid,
                    token: data.token,
                }
                APIREST.activarCuenta(
                        {
                            data: activarCuenta
                        }
                , function (response) {
                    console.log(response);
                }, function (response) {
                    console.log(response)
                    alert('error')
                });

                console.log(activarCuenta);
                Notification.success('Registro exitoso, usuario id: ' + userData.uid)
                userToken(userData.uid, data.token)
                return userData.uid;
            }
        });
    }

    function editUser(domainName, data, userUid) {
        edit = syncData(domainName + '/' + userUid);
        edit.update(data);
        var georef = geoFire('geo')
        georef.set(userUid, [data.latitud, data.longitud]).then(function () {
            console.log("Provided key has been added to GeoFire");
        }, function (error) {
            console.log("Error: " + error);
        });
        //console.log(edit);
        console.log("Successfully edited user account with uid//:", userUid);

    }

    function checkUserActive(uid) {
        modelUser.findField('users/' + uid).child('activo').once('value', function (snap) {
            callbackUserActive(snap.val())
        })
        console.log(userActive[0])
        return userActive;
    }

    function userToken(uid, token) {
        var data = {
            'token': uid
        }
        SystemUser.child('cuentasActivar').child(token).set(
                uid
                );
    }

    function callbackUserActive(value) {
        return userActive.push(value);
    }

    function callback(value) {
        return email.push(value)
    }

    function callbackNombre(value) {
        return nombre.push(value)
    }

    function callbackCalif(value) {
        $rootScope.calificacion = 7
    }

}





