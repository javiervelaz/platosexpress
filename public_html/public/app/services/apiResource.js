angular.module('restapi',['restangular'])
        .factory('APIREST', ['Restangular', function (Restangular) {

                function sendMail(data,onSuccess, onError) {
                    
                    Restangular.all('api/mailSender').post(data).then(function (response) {

                        onSuccess(response);

                    }, function (response) {

                        onError(response);

                    });
                }
                
                function doPedido(data,onSuccess, onError) {
                    
                    Restangular.all('api/pedidos/ingresoPedido').post(data).then(function (response) {

                        onSuccess(response);

                    }, function (response) {

                        onError(response);

                    });
                }
                
                function doOrden(data,onSuccess, onError) {
                    
                    Restangular.all('api/orden/ingresoOrden').post(data).then(function (response) {

                        onSuccess(response);

                    }, function (response) {

                        onError(response);

                    });
                }
                
                
                function ventasList(data,onSuccess, onError) {
                    Restangular.all('api/ventas/list').post(data).then(function (response) {
                        onSuccess(response);
                        console.log(response)
                    }, function (response) {
                        onError(response);
                        console.log(response)
                        
                    });
                     
                }
                
                function preguntaNotification(data,onSuccess, onError) {
                    Restangular.all('api/pregunta/notification').post(data).then(function (response) {
                        onSuccess(response);
                        console.log(response)
                    }, function (response) {
                        onError(response);
                        console.log(response)
                        
                    });
                     
                }
                
                function respuestaNotification(data,onSuccess, onError) {
                    Restangular.all('api/respuesta/notification').post(data).then(function (response) {
                        onSuccess(response);
                        console.log(response)
                    }, function (response) {
                        onError(response);
                        console.log(response)
                        
                    });
                     
                }
                
                function suspenderPedido(data,onSuccess, onError) {
                    Restangular.all('api/pedidos/suspender').post(data).then(function (response) {
                        onSuccess(response);
                        console.log(response)
                    }, function (response) {
                        onError(response);
                        console.log(response)
                        
                    });
                     
                }
                
                function suspenderPedidoVenta(data,onSuccess, onError) {
                    Restangular.all('api/pedidos/venta/suspender').post(data).then(function (response) {
                        onSuccess(response);
                        console.log(response)
                    }, function (response) {
                        onError(response);
                        console.log(response)
                        
                    });
                     
                }
                
                function confirmarPedido(id, data, onSuccess, onError) {

                    Restangular.one("api/pedidos/confirmar").customPUT(data, id).then(function (response) {

                        onSuccess(response);

                    }, function (response) {

                        onError(response);

                    }
                    );

                }
                
                function activarCuenta(data,onSuccess, onError){
                    Restangular.all('api/cuenta/activar').post(data).then(function (response) {

                        onSuccess(response);

                    }, function (response) {

                        onError(response);

                    });
                }
                
                function registroTwitter(data,onSuccess, onError){
                    Restangular.all('user/new/twitter').post(data).then(function (response) {

                        onSuccess(response);

                    }, function (response) {

                        onError(response);

                    });
                }

//                function getById(bookId, onSuccess, onError) {
//
//                    Restangular.one('api/books', bookId).get().then(function (response) {
//
//                        onSuccess(response);
//
//                    }, function (response) {
//
//                        onError(response);
//
//                    });
//
//                }
//
//
//                function update(bookId, data, onSuccess, onError) {
//
//                    Restangular.one("api/books").customPUT(data, bookId).then(function (response) {
//
//                        onSuccess(response);
//
//                    }, function (response) {
//
//                        onError(response);
//
//                    }
//                    );
//
//                }
//
//                function remove(bookId, onSuccess, onError) {
//                    Restangular.one('api/books/', bookId).remove().then(function () {
//
//                        onSuccess();
//
//                    }, function (response) {
//
//                        onError(response);
//
//                    });
//                }
//
//                Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + userService.getCurrentToken()});
//
                return {
                    sendMail: sendMail,
                    doPedido: doPedido,
                    ventasList: ventasList,
                    doOrden: doOrden,
                    preguntaNotification: preguntaNotification,
                    suspenderPedido: suspenderPedido,
                    confirmarPedido:confirmarPedido,
                    activarCuenta:activarCuenta,
                    respuestaNotification: respuestaNotification,
                    registroTwitter : registroTwitter,
                    suspenderPedidoVenta: suspenderPedidoVenta
                    //  remove: remove
                };

            }]);

