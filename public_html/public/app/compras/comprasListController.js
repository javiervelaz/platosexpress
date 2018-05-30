angular
        .module('app')
        .controller('comprasListController', compras);

compras.$inject = ['$scope', 'model', 'SystemUser', 'pedidoDomain', 'Notification', 'ngCart', 'APIREST', 'dataService', '$firebaseArray', 'platosData', 'calificacion', '$location'];

function compras($scope, model, SystemUser, pedidoDomain, Notification, ngCart, APIREST, dataService, $firebaseArray, platosData, calificacion, $location) {
    var domain = 'pedidos';
    SystemUser.onAuth(function (authData) {
        if (authData) {
            usuario = authData.uid;
        } else {
            $location.path('/');
        }

    });

    $scope.mostrarBoton = ngCart.getTotalItems();

    $scope.doCalificar = function (plato, pedido, cal) {
        if (!cal) {
            Notification.error("Debes elegir una calificacion");
        } else {
            getUsuarioVendedor(pedido)
            console.log(cal)
            model.update('calificaciones/vendedor/' + $scope.vendedor, pedido, parseInt(cal), 'calificacion');
            model.update('pedidos', pedido, 'S', 'calificado_comprador');

            calificacion.calificacionUsuarioVendedor($scope.vendedor).then(
                    function (valor) {
                        console.log(valor)
                        model.update('users', $scope.vendedor, valor, 'calificacion_vendedor')

                    },
                    function (error) {
                        console.log(error)
                    }
            )
            $scope.misVentas = loadCompras()
            Notification.success("El pedido fue calificado,muchas gracias!")
        }

    };

    var response = {
        lista: lista()
    };
    return response;


    function lista()
    {

        $scope.estadoPedido = 'i'
        var misVentas = [];
        $scope.Tab = "Tab1"
        misVentas['nombrePlato'] = null
        $scope.misVentas = loadCompras();


        $scope.selectEstado = function (estado) {
            misVentas = [];
            if (estado == 'i') {
                $scope.Tab = "Tab2";
            }
            if (estado == 'e') {
                $scope.Tab = "Tab4";
            }
            if (estado == 'c') {
                $scope.Tab = "Tab1";
            }
            if (estado == 's') {
                $scope.Tab = "Tab3";
            }
            $scope.estadoPedido = estado;
            $scope.misVentas = loadCompras();

        }


        $scope.doConfirmar = function (token, idPedido) {
            model.update('pedidos', idPedido, 'c', 'estado');
            $scope.misVentas = loadCompras()
            data = {}
            APIREST.confirmarPedido(
                    token,
                    {
                        data: data
                    }, function (response) {
                console.log(response)

            }, function (response) {
                console.log(response)
                alert('error')
            })

        }

        $scope.doSuspender = function (usuario_id, idPedido) {
            var data = {}
            $scope.misVentas = []
            data.usuario_id = usuario_id;
            data.pedido_id = idPedido;
            $scope.MyPromise = model.update('pedidos', idPedido, 's', 'estado');
            $scope.misVentas = loadCompras()


            APIREST.suspenderPedido({
                data: data
            }, function (response) {
                $scope.Tab = $scope.Tab;
                $scope.estadoPedido = $scope.estadoPedido;

            }, function (response) {
                console.log(response)
                alert('error')
            })


        }

        $scope.doDelete = function (idPedido) {
            model.deleteItem('pedidos', idPedido)
            $scope.misVentas = loadCompras()
        }

        $scope.doFinalizar = function (idPedido) {
            model.update('pedidos', idPedido, 'e', 'estado');
            $scope.misVentas = loadCompras()
        }

    }
    ;
    function loadCompras() {
        $scope.misVentas = []
        misVentas = []
        pedidosList = model.list('pedidos').orderByChild('usuario_id').equalTo(usuario);
        list = $firebaseArray(pedidosList);
        console.log(usuario)
        list.$loaded().then(function (platos) {
            angular.forEach(platos, function (value, key) {
                if (value.estado == $scope.estadoPedido) {
                    misVentas.push({
                        pedidoData: pedidoDomain.set(value),
                        platoNombre: platosData.getNombre(value.id_plato),
                        platoImg: platosData.getUrl(value.id_plato),
                        userEmail: dataService.get(value.usuario_id_venta),
                        id_pedido: value.$id,
                        fecha_compra: value.fecha_compra,
                        usuario_id: value.usuario_id,
                        token: value.token,
                        id_plato: value.id_plato,
                        calificado_comprador: value.calificado_comprador
                    });
                }
            })

        });
        return misVentas;
    }

    function getUsuarioVendedor(idPedido) {
        ref = model.referencia('pedidos/' + idPedido + '/usuario_id_venta')
        ref.on('value', function (snap) {
            //console.log(snap.val())
            $scope.vendedor = snap.val();
        })
    }

}




