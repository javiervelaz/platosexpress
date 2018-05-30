angular
        .module('app')
        .config(config);

function config($routeProvider) {
    $routeProvider
//            .when('/',{
//                templateUrl : './front.html',
//                controller: 'listUserController'
//            })
            .when('/', {
                templateUrl: 'front.html',
                controller: 'indexController'
            })
            .when('/user/new', {
                templateUrl: 'app/users/registro.html',
                controller: 'createUserController'
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
            //platos
            .when('/plato/new', {
                templateUrl: 'app/platos/crearPlatos.html',
                controller: 'newPlatosController'
            })
            .when('/list', {
                templateUrl: 'app/platos/listado.html',
                controller: 'listPlatosController'
            })
            .when('/error', {
                templateUrl: './error.html',
                controller: 'errorController'
            })
            .when('/contact', {
                templateUrl: './contact.html',
                controller: 'indexController'
            })
            .when('/blog', {
                templateUrl: './blog.html'
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
//            .when('/compras/item/:id', {
//                templateUrl: 'app/compras/item-single.html',
//                controller: 'comprasController'
//            })
            .otherwise({
                redirectTo: 'contact.html'
            });
//    NotificationProvider.setOptions({
//        delay: 10000,
//        startTop: 10,
//        startRight: 10,
//        verticalSpacing: 20,
//        horizontalSpacing: 20,
//        positionX: 'center',
//        positionY: 'top'
//    });
//    
    
}

