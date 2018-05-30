angular
        .module('app')
        .controller('platoDetalleController', detalle);

detalle.$inject = ["$scope", "model", "$route", "ngCart", "$firebaseObject", "preguntaData","APIREST"];

function detalle($scope, model, $route, ngCart, $firebaseObject, preguntaData,APIREST) {
    var domain = 'platos';
    $scope.date = new Date();
    $scope.countPreguntas = 0;
    var platoId = $route.current.params.id;

    var response = {
        itemCompra: Detalle()
    };
    return response;

    function Detalle()
    {
        //preguntas  
        $scope.preguntasList = preguntaData.get(platoId);
        data = preguntaData.countPreguntas(platoId);
            data.$loaded().then(function (platos) {
                $scope.countPreguntas = platos.length;
        });
        
        $scope.doPregunta = function () {
            var idPregunta = preguntaData.save(platoId, $scope.textPregunta);
            data = preguntaData.countPreguntas(platoId);
            data.$loaded().then(function (platos) {
                $scope.countPreguntas = platos.length;
            });
            //send mail
             APIREST.preguntaNotification(
                        {
                            data : idPregunta
                        }
                , function (response) {
                    console.log(response);
                }, function (response) {
                    console.log(response)
                    alert('error')
                });
 
        };
        
        $scope.platoDetalle = model.find(domain, platoId);

    }
    ;

}

