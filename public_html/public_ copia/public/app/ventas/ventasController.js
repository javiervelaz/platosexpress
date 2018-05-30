angular
        .module('app')
        .controller('ventasController', ventas);

ventas.$inject = ['model', '$scope', 'APIREST', 'SystemUser', '$firebaseArray', 'pedidoDomain', 'platosData', 'dataService', '$route', 'Notification','calificacion'];

function ventas(model, $scope, APIREST, SystemUser, $firebaseArray, pedidoDomain, platosData, dataService, $route, Notification,calificacion) {
    SystemUser.onAuth(function (authData) {
        usuario = authData.uid;
    });
    var response = {
        ventaList: ventaList()
    };

    $scope.estadoPedido = 'i'
    $scope.itemCalif = [1, 2, 3, 4, 5];
    var misVentas = [];
    $scope.Tab = "Tab1"
    misVentas['nombrePlato'] = null
    ref = model.list('pedidos').orderByChild('usuario_id_venta').equalTo(usuario);
    list = $firebaseArray(ref);
    console.log(list)
    list.$loaded().then(function (platos) {
        angular.forEach(platos, function (value, key) {
            
            if (value.estado == $scope.estadoPedido) {
                misVentas.push({
                    pedidoData: pedidoDomain.set(value),
                    platoNombre: platosData.getNombre(value.id_plato),
                    platoImg: platosData.getUrl(value.id_plato),
                    userEmail: dataService.get(value.usuario_id),
                    id_pedido: value.$id,
                    usuario_id: value.usuario_id,
                    token: value.token,
                    id_plato: value.id_plato
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
            
            //model.update('calificaciones/' + plato, pedido, cal, 'calificacion');
            model.update('calificaciones/' + $scope.comprador, pedido, cal, 'calificacion');
            //model.update('pedidos', pedido, 'f', 'estado');
            //calificacion.getCalificacion(plato).then(
            calificacion.calificacionUsuario($scope.comprador).then(       
                    function(valor){
                        console.log(valor)
                        model.update('users',$scope.comprador,valor,'calificacion')
                        //model.update('platos',plato,valor,'calificacion')
                    },
                    function(error){
                        console.log(error)
                    }
            )
            $scope.misVentas = loadVentas()
            Notification.success("El pedido fue calificado,muchas gracias!")
        }

//           var data ={
//                calificacion:cal
//            }
//           model.save('calificaciones/'+plato+'/'+pedido,data);
    };

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
                            id_pedido: value.$id,
                            usuario_id: value.usuario_id,
                            token: value.token,
                            id_plato: value.id_plato
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
                            id_pedido: value.$id,
                            usuario_id: value.usuario_id,
                            token: value.token,
                            id_plato: value.id_plato
                        });
                    }
                })
                
            });
        return misVentas
    }
    
    function getUsuarioComprador(idPedido){
            ref  =  model.referencia('pedidos/'+idPedido+'/usuario_id_venta')
            ref.on('value',function(snap){
                //console.log(snap.val())
                $scope.comprador =  snap.val();
            })
        }

}




