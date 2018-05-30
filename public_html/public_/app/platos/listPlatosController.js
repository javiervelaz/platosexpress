angular
        .module('app')
        .controller('listPlatosController', listado);

listado.$inject = ['$scope', 'model', '$location', '$firebaseArray'];

function listado($scope, model, $location, $firebaseObject) {
    domain = 'platos';

    var misplatos = {
        datos: {},
        estado: {}
    }

    $scope.view = false;
    var activate = {
        list: list()
    }
    return activate;

    function list() {
        platosList = model.list(domain)
        console.log(platosList)
        $scope.misplatos = $firebaseObject(platosList.orderByChild('idUsuario').equalTo($scope.userUid))
        //console.log($firebaseObject(platosList.orderByChild('id_usuario').equalTo($scope.userUid)));
        $scope.VerDetalle = function (key) {
            var myEl = angular.element(document.querySelector("#" + key));
            myEl.css('display', 'inline');

        }

        $scope.Ocultar = function (key) {
            var myEl = angular.element(document.querySelector("#" + key));
            myEl.css('display', 'none');
        }

        $scope.onOff = true;
        $scope.yesNo = true;
        $scope.disabled = true;


        $scope.changeCallback = function (key, estado) {
            var elemento='estado';
            model.update(domain, key, estado,elemento)
        };
        return misplatos
    }
    function Callback(value) {
        $scope.llega = 555
        return misplatos.datos = value
    }

    function CallbackEstado(value) {
        return misplatos.estado = value.estado
    }

}
