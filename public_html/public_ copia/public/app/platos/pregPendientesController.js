angular
        .module('app')
        .controller('pregPendientesController', listPendientes);

listPendientes.$inject = ['$scope', 'SystemUser', 'model', '$firebaseObject', 'preguntaData'];

function listPendientes($scope, SystemUser, model, $firebaseObject, preguntaData) {
    var domain = 'preguntas';
    $scope.date = new Date();
    $scope.countPreguntas = 0;
    SystemUser.onAuth(function (authData) {
        usuario = authData.uid;
    });
    //$scope.textoRespuesta = '';
    listaPreg = model.list(domain);


    var response = {
        list: list()
    };
    return response;

    function list() {
        data = preguntaData.countPregByUser(usuario);
        data.$loaded().then(function (platos) {
            $scope.countPreguntas = platos.length;
        });
        lista = {}
        listaPreg.orderByChild('id_usuario_venta').equalTo(usuario).on('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                if (childSnapshot.val().texto_respuesta == '') {
                    lista[childSnapshot.key()] = childSnapshot.val()
                    
                }

            });
        })

        $scope.listaPreguntas = lista;

        //$scope.listaPreguntas = $firebaseObject(listaPreg.orderByChild('id_usuario_venta').equalTo(usuario));

        $scope.doRespuesta = function (id, data) {
            preguntaData.updateRespuesta(id, data.textoRespuesta)
            lista = {}
            my = $firebaseObject(listaPreg)
            my.$loaded().then(function(preguntas){
                //console.log(preguntas)
            })
            listaPreg.orderByChild('id_usuario_venta').equalTo(usuario).on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    if (childSnapshot.val().texto_respuesta == '') {
                        lista[childSnapshot.key()] = childSnapshot.val()
                        console.log(childSnapshot.val())
                    }

                });
            })
            $scope.listaPreguntas = lista;
        }

    }

}


