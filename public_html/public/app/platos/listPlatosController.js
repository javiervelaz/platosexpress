angular
        .module('app')
        .controller('listPlatosController', listado);

listado.$inject = ['$scope', 'model', '$location', '$firebaseArray', 'platosData', '$firebaseArray','Notification'];

function listado($scope, model, $location, $firebaseObject, platosData, $firebaseArray,Notification) {
    domain = 'platos';
    $scope.eliminar = true;
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
        $scope.misplatos = $firebaseObject(platosList.orderByChild('id_usuario').equalTo($scope.userUid))
        console.log($scope.misplatos);
        $scope.VerDetalle = function (key) {
            var myEl = angular.element(document.querySelector("#" + key));
            myEl.css('display', 'inline');

        }

        $scope.doEliminar = function (id_plato) {
            ref = model.list('pedidos').orderByChild('id_plato').equalTo(id_plato);
            list = $firebaseArray(ref);
            list.$loaded().then(function (platos) {
                angular.forEach(platos, function (value, key) {
                    if(value.estado == 'i' || value.estado == 'c'){
                        $scope.eliminar = false
                        
                    }
                })
                if($scope.eliminar){
                    platosData.deletePlato(id_plato)
                     Notification.success("El plato fue elimnado")
                }else{
                    Notification.error("El plato no se puede elimnar, tiene pedidos pendientes")
                }
                
            })
            

        }

        $scope.Ocultar = function (key) {
            var myEl = angular.element(document.querySelector("#" + key));
            myEl.css('display', 'none');
        }

        $scope.onOff = true;
        $scope.yesNo = true;
        $scope.disabled = true;


        $scope.changeCallback = function (key, estado) {
            var elemento = 'estado';
            model.update(domain, key, estado, elemento)
        };
        return misplatos
    }
    function Callback(value) {
        return misplatos.datos = value
    }

    function CallbackEstado(value) {
        return misplatos.estado = value.estado
    }

}
