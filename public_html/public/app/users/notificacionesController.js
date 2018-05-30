angular
        .module('app')
        .controller('notificacionesController',notificaciones)

notificaciones.$inject= ['$scope','model','SystemUser','notificacion']

function notificaciones($scope,model,SystemUser,notificacion){
    $scope.titulo = 'Notificaciones';
    $scope.date = new Date().getTime();
    SystemUser.onAuth(function (authData) {
        if (authData) {
            $scope.notifList = model.find('notificaciones',authData.uid)
           
            notificacion.cantidad(authData.uid).then(
            function (valor) {
                $scope.canditadNotif = valor
            },
            function (error) {
                console.log(error)
            })
            
            notificacion.marcar(authData.uid).then(
            function (valor) {
                //$scope.canditadNotif = valor
            },
            function (error) {
                console.log(error)
            })
        } 
    })    
    
    
}

