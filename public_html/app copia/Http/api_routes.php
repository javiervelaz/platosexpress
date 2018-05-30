<?php

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {

    $api->post('auth/login', 'App\Api\V1\Controllers\AuthController@login');
    $api->post('auth/signup', 'App\Api\V1\Controllers\AuthController@signup');
    $api->post('auth/recovery', 'App\Api\V1\Controllers\AuthController@recovery');
    $api->post('auth/reset', 'App\Api\V1\Controllers\AuthController@reset');
    //pedidos
    $api->post('pedidos/ingresoPedido','App\Api\V1\Controllers\pedidosController@recibirPedido');
    $api->put('pedidos/confirmar/{idPedido}','App\Api\V1\Controllers\pedidosController@confirmarPedido');
    $api->get('pedidos/confirmar/{idPedido}','App\Api\V1\Controllers\pedidosController@confirmarPedido');
    $api->post('pedidos/suspender','App\Api\V1\Controllers\pedidosController@suspenderPedido');
    $api->post('pedidos/venta/suspender','App\Api\V1\Controllers\pedidosController@suspenderPedidoVenta');
    $api->post('pedidos/finalizar','App\Api\V1\Controllers\pedidosController@finalizarPedido');
    //ventas
    $api->post('ventas/list','App\Api\V1\Controllers\ventasController@get');
    //orden
    $api->post('orden/ingresoOrden','App\Api\V1\Controllers\ordenController@sendOrden');
    $api->post('orden/nro','App\Api\V1\Controllers\ordenController@get');
    
    //preguntas
    $api->post('pregunta/notification','App\Api\V1\Controllers\preguntasController@sendNotification');
    //respuestas
    $api->post('respuesta/notification','App\Api\V1\Controllers\respuestasController@sendNotification');
    // example of protected route
    $api->get('protected', ['middleware' => ['api.auth'], function () {
        return \App\User::all();
    }]);
    //User
    $api->post('cuenta/activar','App\Api\V1\Controllers\UserController@activarCuenta');
    $api->get('cuenta/confirmar/{token}','App\Api\V1\Controllers\UserController@confirmarCuenta');
    // example of free route
    $api->get('free', function() {
        return \App\User::all();
    });
    
    $api->group(['middleware' => 'api.auth'], function ($api) {
	$api->post('book/store', 'App\Api\V1\Controllers\BookController@store');
	$api->get('book', 'App\Api\V1\Controllers\BookController@index');
        $api->get('books', 'App\Api\V1\Controllers\BookController@index');
	$api->get('books/{id}', 'App\Api\V1\Controllers\BookController@show');
	$api->post('books', 'App\Api\V1\Controllers\BookController@store');
	$api->put('books/{id}', 'App\Api\V1\Controllers\BookController@update');
	$api->delete('books/{id}', 'App\Api\V1\Controllers\BookController@destroy');
    }); 
});



