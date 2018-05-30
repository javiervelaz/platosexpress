angular
        .module('app')
        .factory('dataService', dataService);
dataService.$inject = ['$rootScope', '$log' ,'model', 'SystemUser', '$window', 'userDomain', 'syncData'];

function dataService($rootScope,$log,modelUser, SystemUser, $window, userDomain, syncData) {

    var domain = 'default';
    var userDomain = userDomain.get;
    
    var service = {
        saveUser: saveUser,
        editUser: editUser,
        loginUser: loginUser,
        loginFacebook: loginFacebook,
        loginTwitter: loginTwitter,
        loginGoogle: loginGoogle,
    }
    return service;

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
                //$window.location = '/platos/#/user/login';
                //console.log("Login Failed!", error);
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
                switch (error.code) {
                    case "EMAIL_TAKEN":
                        console.log("The new user account cannot be created because the email is already in use.");
                        break;
                    case "INVALID_EMAIL":
                        console.log("The specified email is not a valid email.");
                        break;
                    default:
                        console.log("Error creating user:", error);
                }
                return false;
            } else {
                SystemUser.child(domainName).child(userData.uid).set(
                        data
                        );
                console.log("Successfully created user account with uid//:", userData.uid);

                return userData.uid;
            }
        });
    }

    function editUser(domainName, data, userUid) {
        edit = syncData(domainName + '/' + userUid);
        edit.update(data);
        //console.log(edit);
        console.log("Successfully edited user account with uid//:", userUid);

    }

    

}





