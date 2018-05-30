angular
        .module('app')
        .controller('loginUserController', loginUser);
loginUser.$inject = ['$scope', 'model', 'SystemUser', '$window', 'dataService', 'Notification', 'errorHandler', 'firebaseRef', 'userDataService'];


function loginUser($scope, model, SystemUser, $window, dataService, Notification, errorHandler, firebaseRef, userDataService) {
    var domain = 'users';
    $scope.doLogin = function () {
        if ($scope.email && $scope.password) {
            SystemUser.authWithPassword({
                email: $scope.email,
                password: $scope.password
            }, function (error, authData) {
                if (error) {
                    console.log(error);
                    Notification.error(errorHandler.message(error.code))
                    //console.log("Login Failed!", error);
                } else {
                    userDataService.activo(authData.uid).then(
                            function (valor) {
                                if (valor == true) {
                                    console.log("Authenticated successfully with payload:", authData);
                                    $window.location = '/';
                                } else {
                                    console.log("Authenticated failed", $scope.activo);
                                    Notification.error('El usuario no esta activo')
                                    SystemUser.unauth();
                                }

                            },
                            function (error) {
                                console.log(error)
                            }
                    )
                }
            });
        }

    }

    $scope.doResetPassword = function () {
        var ref = firebaseRef(domain);
        if ($scope.resetEmail) {
            ref.resetPassword({
                email: $scope.resetEmail//"javiervelaz@hotmail.com"
            }, function (error) {
                if (error) {
                    switch (error.code) {
                        case "INVALID_USER":
                            Notification.error(errorHandler.message(error.code))
                            console.log("The specified user account does not exist.");
                            break;
                        default:
                            Notification.error(errorHandler.message(error.code))
                            console.log("Error resetting password:", error);
                    }
                } else {
                    Notification.success("Se genero un password temporal por 24hs, fue enviado a su email, por favor cambielo la proxima vez que ingrese a su cuenta.")
                    console.log("Password reset email sent successfully!");
                    $window.location = '/';
                }
            });
        }

    }

    $scope.doLoginFacebook = function () {
        dataService.loginFacebook();

    }

    $scope.doLoginTwitter = function () {
        dataService.loginTwitter();
    }

    $scope.doLoginGoogle = function () {
        dataService.loginGoogle();
    }


}


