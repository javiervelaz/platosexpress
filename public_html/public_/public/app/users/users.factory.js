angular
        .module('app')
        .factory('dataService', dataService);
dataService.$inject = ['$rootScope', '$log', 'model', 'SystemUser', '$window', 'userDomain', 'syncData', 'Notification', 'errorHandler', 'geoFire'];

function dataService($rootScope, $log, modelUser, SystemUser, $window, userDomain, syncData, Notification, errorHandler, geoFire) {

    var domain = 'default';
    var userDomain = userDomain.get;
    var email = [];
    var service = {
        saveUser: saveUser,
        editUser: editUser,
        loginUser: loginUser,
        loginFacebook: loginFacebook,
        loginTwitter: loginTwitter,
        loginGoogle: loginGoogle,
        get: get
    }
    return service;

    function get(id) {
        modelUser.findField('users/' + id).child('email').once('value', function (snap) {
            callback(snap.val())
        })
        return email
    }

    function loginFacebook() {
        SystemUser.authWithOAuthPopup("facebook", function (error, authData) {
            if (error) {
                console.log("Authentication Failed!", error);
            } else {
                domain = 'users';
                var userRef = modelUser.exists(domain, authData.uid)
                if (userRef.exists == false) {
                    userDomain.email = authData.facebook.email;
                    userDomain.nombre = authData.facebook.displayName;
                    userDomain.provider = authData.provider;

                    SystemUser.child('users').child(authData.uid).set(
                            userDomain
                            );
                    console.log("Authenticated successfully with payload:", userDomain);
                }
                $window.location = '/platos';
            }
        });
    }

    function loginTwitter() {
        SystemUser.authWithOAuthPopup("twitter", function (error, authData) {
            if (error) {
                //console.log("Authentication Failed!", error);
            } else {
                domain = 'users';
                var userRef = modelUser.exists(domain, authData.uid)
                if (userRef.exists == false) {
                    userDomain.email = authData.twitter.username;
                    userDomain.nombre = authData.twitter.displayName;
                    userDomain.provider = authData.provider;

                    SystemUser.child('users').child(authData.uid).set(
                            userDomain
                            );
                    console.log("Authenticated successfully with payload:", userDomain);

                }
                $window.location = '/platos';
            }
        });
    }

    function loginGoogle() {
        SystemUser.authWithOAuthPopup("google", function (error, authData) {
            if (error) {
                console.log("Authentication Failed!", error);
            } else {
                domain = 'users';
                var userRef = modelUser.exists(domain, authData.uid)
                if (userRef.exists == false) {
                    userDomain.email = authData.google.displayName;
                    userDomain.nombre = authData.google.displayName;
                    userDomain.provider = authData.provider;

                    SystemUser.child('users').child(authData.uid).set(
                            userDomain
                            );
                    console.log("Authenticated successfully with payload:", userDomain);
                }
                $window.location = '/platos';
                //return authData.uid;
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
                $rootScope.loginError = error;

            } else {
                console.log("Authenticated successfully with payload:", authData);
                $window.location = '/platos';
            }
        });

    }

    function saveUser(domainName, data) {
        SystemUser.createUser({
            email: data.email,
            password: data.password
        }, function (error, userData) {
            if (error) {
                Notification.error(errorHandler.message(error.code))

            } else {
                SystemUser.child(domainName).child(userData.uid).set(
                        data
                        );
                //console.log("Successfully created user account with uid:", userData.uid);
                var georef = geoFire('geo')
                georef.set(userData.uid, [data.latitud, data.longitud]).then(function () {
                    console.log("Provided key has been added to GeoFire");
                }, function (error) {
                    console.log("Error: " + error);
                });

                Notification.success('Registro exitoso, usuario id: ' + userData.uid)
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

    function callback(value) {
        return email.push(value)
    }

}





