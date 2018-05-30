angular
        .module('app')
        .controller('comprasController', compras);

compras.$inject = ['$scope', '$route', 'model', 'SystemUser', 'preguntaData', '$rootScope', 'pedidoDomain', 'Notification', 'ngCart', '$window','ApiResource'];

function compras($scope, $route, model, SystemUser, preguntaData, $rootScope, pedidoDomain, Notification, ngCart, $window,ApiResource) {
    var domain = 'platos';
    //var platoId = $route.current.params.id;
    $scope.date = new Date();
    SystemUser.onAuth(function (authData) {
        usuario = authData.uid;
    });
    $scope.mostrarBoton = ngCart.getTotalItems(); 
     ApiResource.get({id:333}, function (response) {
                        console.log(response);
                    }, console.log(response));  
    //$scope.preguntasList = preguntaData.get(platoId);
//    $scope.getLength = function (obj) {
//        return Object.keys(obj).length;
//    };
//    $scope.doPregunta = function () {
//        preguntaData.save(platoId, $scope.textPregunta);
//    };

    $scope.doComprar = function () {
        var fecha = new Date().getTime();
        var enviar = 'si';
        var comprasDomain = 'pedidos';
        if ($scope.selectedDelivery) {
            enviar = 'no';
        }
        var precio = ngCart.totalCost();
        var cantidad = ngCart.getTotalItems();
        var data = pedidoDomain.get;
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
            console.log(value)
            model.save(comprasDomain, data);
        })

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

