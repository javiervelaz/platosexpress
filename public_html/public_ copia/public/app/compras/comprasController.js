angular
        .module('app')
        .controller('comprasController', compras);

compras.$inject = ['$scope', '$route', 'model', 'SystemUser', 'pedidoDomain', 'Notification', 'ngCart', 'APIREST', 'ordenDomain', 'firebaseRef','platosData'];

function compras($scope, $route, model, SystemUser, pedidoDomain, Notification, ngCart, APIREST, ordenDomain, firebaseRef,platosData) {

    SystemUser.onAuth(function (authData) {
        usuario = authData.uid;
    });

    $scope.mostrarBoton = ngCart.getTotalItems();
 console.log(ngCart)
    $scope.random = function (x) {
        var s = "";
        while (s.length < x && x > 0) {
            var r = Math.random();
            s += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
        }
        return s;
    }

    $scope.doComprar = function () {
        var fecha = new Date().getTime();
        var enviar = 'si';
        var lastid;
        var comprasDomain = 'pedidos';
        if ($scope.selectedDelivery) {
            enviar = 'no';
        }
        var total = ngCart.totalCost();
        var cantidad = ngCart.getTotalItems();

        data = pedidoDomain.get;
        orden = ordenDomain.get;
        angular.forEach(ngCart.getCart().items, function (value, key) {
            //$scope.vendedor= value._data;
            data.fecha_compra = fecha;
            data.usuario_id = usuario;
            data.delivery = enviar;
            data.cantidad = value._quantity;
            data.horario_entrega = 1;
            data.monto_pago = 0;
            data.precio = value._price;
            data.usuario_id_venta = value._data;
            data.montoTotal = total;
            data.id_plato = value._id;
            data.token = $scope.random(16);
            console.log(data)
            orden.items[key] = value;
            model.save(comprasDomain, data);
            
            pedidosData = firebaseRef(comprasDomain);
            pedidosData.limitToLast(1).on("child_added", function (childSnapshot, prevChildKey) {
                lastid = childSnapshot.key();
            });
            data.id_pedido = lastid;
            platosData.updateStore(value._id,value._quantity)
            //send mail
            APIREST.doPedido(
                    {
                        data: data
                    }
            , function (response) {
                console.log(response);
            }, function (response) {
                console.log(response)
                alert('error')
            });

        })
        orden.fecha_compra = fecha;
        orden.usuario_id = usuario;
        orden.montoTotal = total;
        model.save('orden', orden);

        APIREST.doOrden(
                {
                    data: orden
                }
        , function (response) {
            //console.log(response);
        }, function (response) {
            console.log(response)
            alert('error')
        });
        ngCart.empty()
        Notification.success("Compra Exitosa!")
        // $location.path('/');
    };

    var response = {
        itemCompra: comprasDetalle()
    };
    return response;


    function comprasDetalle()
    {
        return true

    }
    ;

}

