angular
        .module('app')
        .config(config);

function config($routeProvider, NotificationProvider, $httpProvider, $locationProvider) {
    $routeProvider
//            .when('/',{
//                templateUrl : './front.html',
//                controller: 'listUserController'
//            })
            .when('/', {
                templateUrl: './front.html',
                controller: 'indexController'
            })
            .when('/user/new', {
                templateUrl: 'app/users/registro.html',
                controller: 'createUserController'
            })
            .when('/user/new/twitter', {
                templateUrl: 'app/users/registro.html',
                controller: 'createUserTwitterController'
            })
            .when('/user/new/google', {
                templateUrl: 'app/users/registro.html',
                controller: 'createUserGoogleController'
            })
            .when('/user/login', {
                templateUrl: 'app/users/login.html',
                controller: 'loginUserController'
            })
            .when('/user/resetPassword', {
                templateUrl: 'app/users/resetPassword.html',
                controller: 'loginUserController'
            })
            .when('/user/edit', {
                templateUrl: 'app/users/user.perfil.html',
                controller: 'editUserController'
            })
            .when('/user/changePassword', {
                templateUrl: 'app/users/changePassword.html',
                controller: 'changePasswordController'
            })
            .when('/user/notificaciones',{
                templateUrl: 'app/users/notificacionesListado.html',
                controller: 'notificacionesController'
            })
            //platos
            .when('/platos/new', {
                templateUrl: 'app/platos/crearPlatos.html',
                controller: 'newPlatosController'
            })
            .when('/platos/list', {
                templateUrl: 'app/platos/listado.html',
                controller: 'listPlatosController'
            })
            .when('/platos/republicar/:id', {
                templateUrl: 'app/platos/republicarPlato.html',
                controller: 'republicarPlatoController'
            })
            
            //error
            .when('/error', {
                templateUrl: './error.html',
                controller: 'errorController'
            })
            .when('/contact', {
                templateUrl: './contact.html',
                controller: 'indexController'
            })
            .when('/nosotros', {
                templateUrl: './aboutus.html'
            })
            .when('/gallery', {
                templateUrl: './gallery.html',
                controller: ''
            })
            .when('/registro', {
                templateUrl: 'app/users/registro.html',
                controller: 'createUserController'
            })
            .when('/login', {
                templateUrl: 'app/users/login.html',
                cpmtroller: ''
            })
            .when('/compras/checkout', {
                templateUrl: 'app/compras/item-single.html',
                controller: 'comprasController'
            })
            .when('/compras/detalle/:id', {
                templateUrl: 'app/platos/platoDetalle.html',
                controller: 'platoDetalleController'
            })
            //ventas
            .when('/platos/misVentas', {
                templateUrl: 'app/ventas/ventasListado.html',
                controller: 'ventasController'
            })
            //compras
            .when('/platos/misCompras', {
                templateUrl: 'app/compras/comprasListado.html',
                controller: 'comprasListController'
            })
            //preguntas pendientes
            .when('/platos/preguntasPendientes', {
                templateUrl: 'app/platos/preguntasPendientes.html',
                controller: 'pregPendientesController'
            })
            .otherwise({
                templateUrl: './error.html'
            });

    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 10,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'center',
        positionY: 'top'
    });
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.common = {};
    }
    
    $httpProvider.defaults.headers.common["Cache-Control"] = "no-cache";
    $httpProvider.defaults.headers.common.Pragma = "no-cache";
    $httpProvider.defaults.headers.common["If-Modified-Since"] = "0";

    $locationProvider.html5Mode(true);

}

