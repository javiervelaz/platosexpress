angular
        .module('app')
        .controller('republicarPlatoController', republicar);

republicar.$inject = ['$scope', 'model', 'Notification', '$route','errorHandler','platosData','$location'];

function republicar($scope, model, Notification, $route,errorHandler,platosData,$location) {
    var domain = 'platos'
    var id_plato = $route.current.params.id;
    $scope.semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    var form = {}
    // selected fruits
    $scope.selectionDias = [];

    $scope.toogleSelection = function toogleSelection(dias) {
        var idx = $scope.selectionDias.indexOf(dias);

        if (idx > -1) {
            $scope.selectionDias.splice(idx, 1);
        } else {
            $scope.selectionDias.push(dias);
        }

    }
    
    
    
    
    var activate = {
        formrepub: formrepub()
    }
   
    
    return activate;

    function formrepub() {
        $scope.plato = model.find(domain, id_plato);

        $scope.SavePlato = function () {
            if ($scope.platoForm.$valid) {
                form.precio = $scope.precio,
                form.cantidad_disponible = $scope.cantidad_disponible,
                form.dias = $scope.selectionDias
                platosData.repubPlato(domain,form,id_plato)
                Notification.success("El plato ha sido republicado correctamente!")
                $location.path('/platos/list');
                //console.log(form)
            } else {
                var error = $scope.platoForm.$error;
                $scope.msgValid = [];
                angular.forEach(error, function (value, key) {
                    angular.forEach(value, function (field) {
                        if (field.$invalid) {
                            $scope.msgValid.push(field.$name);
                            console.log(field.$name)
                            Notification.error(errorHandler.message(field.$name));
                        }
                    });
                });
            }
        }
    }

}


