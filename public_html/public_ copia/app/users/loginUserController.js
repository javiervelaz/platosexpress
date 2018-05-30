angular
        .module('app')
        .controller('loginUserController', loginUser);
loginUser.$inject = ['$scope', 'model', 'SystemUser', '$window', 'dataService', 'Notification', 'errorHandler', 'firebaseRef'];


function loginUser($scope, model, SystemUser, $window, dataService, Notification, errorHandler, firebaseRef) {
    var domain = 'users';
    $scope.doLogin = function () {
        if ($scope.email && $scope.password) {
            SystemUser.authWithPassword({
                email: $scope.email,
                password: $scope.password
            }, function (error, authData) {
                if (error) {
                    //$log.error(error);
                    Notification.error(errorHandler.message(error.code))
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    console.log(authData);
                    $window.location = '/';
                }
            });
        }

    }

    $scope.doResetPassword = function () {
        var ref = firebaseRef(domain);
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
                $window.location = '/platos';
            }
        });
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


