angular
        .module('app')
        .controller('indexController', Dashboard)
        .filter('offset', function () {
            return function (input, start) {
                start = parseInt(start, 10);
                return input.slice(start);
            };
        });
Dashboard.$inject = ['$scope', 'SystemUser', '$window', 'model', '$firebaseArray', '$pageArray', 'shareData', '$http', 'ngCart', 'orderByFilter', '$firebaseObject'];

function Dashboard($scope, SystemUser, $window, model, $firebaseArray, $pageArray, shareData, $http, ngCart, orderBy, $firebaseObject) {
    $scope.titulo = 'Platos Express';
    console.log($scope.titulo)
    $scope.logOut = function () {
        SystemUser.unauth();
        $window.location = '/platos';
    }

    $scope.hideLogin = false;
    SystemUser.onAuth(function (authData) {
        if (authData) {
            $scope.userUid = authData.uid;
        }

    });
    var index = {
        loginAuth: loginAuth(),
        platosLista: platosLista()
                //sendMail : sendMail()
    }

    return index;

    function platosLista() {
        $scope.itemsPerPage = 5;
        $scope.currentPage = 0;
        $scope.propertyName = 'precio';
        $scope.reverse = true;
        var out = [];
        //var resp = [];
        $scope.items = [];
        domain = 'platos'
        data = model.list(domain).orderByChild('estado').equalTo(true);
        $scope.platos = $firebaseArray(data);
        $scope.platos.$loaded().then(function (platos) {
            //console.log(platos.length); // data is loaded here
            $scope.countPlatos = platos.length;
        });


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



