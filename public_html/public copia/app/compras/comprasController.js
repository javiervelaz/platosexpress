angular
        .module('app')
        .controller('comprasController', compras);

compras.$inject = ['$scope', '$route', 'model', 'SystemUser', 'pedidoDomain', 'Notification', 'ngCart', 'APIREST', 'ordenDomain', 'firebaseRef', 'platosData', '$location', 'notificacionesDomain', 'userDataService'];

function compras($scope, $route, model, SystemUser, pedidoDomain, Notification, ngCart, APIREST, ordenDomain, firebaseRef, platosData, $location, notificacionesDomain, userDataService) {

    fecha = new Date().getTime();
    SystemUser.onAuth(function (authData) {
        if (authData) {
            usuario = authData.uid;
        } else {
            $location.path('/');
        }

    });
    $scope.datosObligatorios = false
    $scope.mostrarBoton = ngCart.getTotalItems();
    userDataService.validacionDatos(usuario).then(
            function (valor) {
                if (valor.length != 0) {
                    $scope.datosObligatorios = true
                }


            },
            function (error) {

            }
    )
    $scope.random = function (x) {
        var s = "";
        while (s.length < x && x > 0) {
            var r = Math.random();
            s += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
        }
        return s;
    }

    $scope.doComprar = function () {

        console.log($scope.datosObligatorios)

        var fecha = new Date().getTime();
        var enviar = 'si';
        var lastid;
        var comprasDomain = 'pedidos';
        if ($scope.selectedDelivery) {
            enviar = 'no';
        }
        var total = ngCart.totalCost();
        var cantidad = ngCart.getTotalItems();
        if ($scope.datosObligatorios == true) {
            Notification.error("No se puede finalizar la Compra, podrian faltar completar el email y la direccion")
        } else {
            data = pedidoDomain.get;
            orden = ordenDomain.get;
            notificaciones = notificacionesDomain.get;
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
                data.items[key] = value;

                orden.items[key] = value;
                model.save(comprasDomain, data);
                //notificacion venta
                notificaciones.texto = 'Venta realizada';
                notificaciones.id = 'venta'
                notificaciones.fecha = fecha;
                notificaciones.activo = true

                var obj = notificaciones;
                model.save('notificaciones/' + value._data, obj);
                ////////////////////////////////////////////////
                
                pedidosData = firebaseRef(comprasDomain);
                pedidosData.limitToLast(1).on("child_added", function (childSnapshot, prevChildKey) {
                    console.log(childSnapshot.key())
                    lastid = childSnapshot.key();
                });
                data.id_pedido = lastid;
                model.update('pedidos', lastid, lastid, 'id_pedido')
                platosData.updateStore(value._id, value._quantity)
                //send mail al vendedor
                APIREST.doPedido(
                        {
                            data: data
                        }
                , function (response) {
                    //console.log(response);
                }, function (response) {
                    console.log(response)
                    alert('error')
                });

            })
            orden.fecha_compra = fecha;
            orden.usuario_id = usuario;
            orden.montoTotal = total;
            model.save('orden', orden);
            //notificacion compra
            notificaciones.texto = 'Compra realizada';
            notificaciones.id = 'compra'
            notificaciones.fecha = fecha;
            notificaciones.activo = true

            var obj = notificaciones;
            model.save('notificaciones/' + usuario, obj);

            APIREST.doOrden(
                    {
                        data: orden
                    }
            , function (response) {
                //console.log(response);
            }, function (response) {
                alert('error3')
            });
            ngCart.empty()
            Notification.success("Compra Exitosa!")
            Notification.success("Se envio notificacion via email, por favor revisar en correo no deseado.")
            $location.path('/');
        }

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

