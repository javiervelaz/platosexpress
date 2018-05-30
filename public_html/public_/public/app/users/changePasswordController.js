angular
        .module('app')
        .controller('changePasswordController', changePass)

changePass.$inject = ['$scope', 'Notification', 'errorHandler','$location']

function changePass($scope, Notification, errorHandler,$location) {

    $scope.change = function () {
        if ($scope.changePass.$valid) {
            var ref = new Firebase("https://digitalstarfood.firebaseio.com");
            ref.changePassword({
                email: "javiervelaz@hotmail.com",
                oldPassword: "123456",
                newPassword: $scope.repassword
            }, function (error) {
                if (error) {
                    switch (error.code) {
                        case "INVALID_PASSWORD":
                            Notification.error(errorHandler.message(error.code))
                            console.log("The specified user account password is incorrect.");
                            break;
                        case "INVALID_USER":
                            Notification.error(errorHandler.message(error.code))
                            console.log("The specified user account does not exist.");
                            break;
                        default:
                            Notification.error(error)
                            console.log("Error changing password:", error);
                    }
                } else {
                    Notification.success('El password fue cambiado exitosamente')
                    console.log("User password changed successfully!");
                }
            })
            $location.path('/');
        } else {
            var error = $scope.changePass.$error;
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


