angular
        .module('app')
        .controller('ventasController', ventas);

ventas.$inject = ['model', '$scope', 'APIREST', 'SystemUser', '$firebaseArray', 'pedidoDomain', 'platosData', 'dataService', '$route', 'Notification','calificacion'];

function ventas(model, $scope, APIREST, SystemUser, $firebaseArray, pedidoDomain, platosData, dataService, $route, Notification,calificacion) {
    SystemUser.onAuth(function (authData) {
        if(authData){
            usuario = authData.uid;
        }    
    });
    var response = {
        ventaList: ventaList()
    };

    $scope.estadoPedido = 'i'
    var misVentas = [];
    $scope.Tab = "Tab1"
    misVentas['nombrePlato'] = null
    console.log(usuario)
    ref = model.list('pedidos').orderByChild('usuario_id_venta').equalTo(usuario);
    list = $firebaseArray(ref);

    list.$loaded().then(function (platos) {
        angular.forEach(platos, function (value, key) {
            if (value.estado == $scope.estadoPedido) {
                misVentas.push({
                    pedidoData: pedidoDomain.set(value),
                    platoNombre: platosData.getNombre(value.id_plato),
                    platoImg: platosData.getUrl(value.id_plato),
                    userEmail: dataService.get(value.usuario_id),
                    id_pedido: value.$id,
                    fecha_compra: value.fecha_compra,
                    usuario_id: value.usuario_id,
                    token: value.token,
                    id_plato: value.id_plato,
                    calificado_vendedor: value.calificado_vendedor
                });
            }
        })
    });
    $scope.misVentas = misVentas;

    $scope.doCalificar = function (plato, pedido, cal) {
        if (!cal) {
            Notification.error("Debes elegir una calificacion");
        } else {
            getUsuarioComprador(pedido)
            
            model.update('calificaciones/comprador/' + $scope.comprador, pedido, parseInt(cal), 'calificacion');
            model.update('pedidos', pedido, 'S', 'calificado_vendedor');
            
            calificacion.calificacionUsuarioComprador($scope.comprador).then(       
                    function(valor){
                        console.log(valor)
                        model.update('users',$scope.comprador,valor,'calificacion_comprador')
                        
                    },
                    function(error){
                        console.log(error)
                    }
            )
            $scope.misVentas = loadVentas()
            Notification.success("El pedido fue calificado,muchas gracias!")
        }

    };
    
    $scope.doConfirmar = function (token, idPedido) {
            model.update('pedidos', idPedido, 'c', 'estado');
            $scope.misVentas = loadVentas()
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

    return response;

    function ventaList()
    {

        

        $scope.doDelete = function (idPedido) {
            model.deleteItem('pedidos', idPedido)
            $scope.misVentas = loadVentas()
        }

        $scope.doSuspender = function (usuario_id, idPedido) {
            var data = {}
            $scope.misVentas = []
            data.usuario_id = usuario_id;
            data.pedido_id = idPedido;
            model.update('pedidos', idPedido, 's', 'estado');
            $scope.misVentas = loadVentas()


            APIREST.suspenderPedidoVenta({
                data: data
            }, function (response) {
                $scope.Tab = $scope.Tab;
                $scope.estadoPedido = $scope.estadoPedido;
                
            }, function (response) {
                console.log(response)
                alert('error')
            })


        }

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
            list.$loaded().then(function (platos) {
                angular.forEach(platos, function (value, key) {
                    if (value.estado == $scope.estadoPedido) {
                        misVentas.push({
                            pedidoData: pedidoDomain.set(value),
                            platoNombre: platosData.getNombre(value.id_plato),
                            platoImg: platosData.getUrl(value.id_plato),
                            userEmail: dataService.get(value.usuario_id),
                            fecha_compra: value.fecha_compra,
                            id_pedido: value.$id,
                            usuario_id: value.usuario_id,
                            token: value.token,
                            id_plato: value.id_plato,
                            calificado_vendedor: value.calificado_vendedor
                        });
                    }
                })
            });
            $scope.misVentas = misVentas;

        }


        function getPlatoData(id) {
            return model.find('platos/' + id).child('nombre').once('value', function (snap) {
                return snap.val()
            })
        }
        
    }
    ;

    function loadVentas(){
        $scope.misVentas = []
            misVentas = []
            
            pedidosList = model.list('pedidos').orderByChild('usuario_id_venta').equalTo(usuario);
            list = $firebaseArray(pedidosList);
            list.$loaded().then(function (platos) {
                angular.forEach(platos, function (value, key) {
                    if (value.estado == $scope.estadoPedido) {
                        misVentas.push({
                            pedidoData: pedidoDomain.set(value),
                            platoNombre: platosData.getNombre(value.id_plato),
                            platoImg: platosData.getUrl(value.id_plato),
                            userEmail: dataService.get(value.usuario_id),
                            fecha_compra: value.fecha_compra,
                            id_pedido: value.$id,
                            usuario_id: value.usuario_id,
                            token: value.token,
                            id_plato: value.id_plato,
                            calificado_vendedor: value.calificado_vendedor
                        });
                    }
                })
                
            });
        return misVentas
    }
    
    function getUsuarioComprador(idPedido){
            ref  =  model.referencia('pedidos/'+idPedido+'/usuario_id')
            ref.on('value',function(snap){
                //console.log(snap.val())
                $scope.comprador =  snap.val();
            })
        }

}




