angular
        .module('app')
        .factory('preguntaData', preguntasService);

preguntasService.$inject = ['model', '$firebaseObject', 'SystemUser', 'preguntaDomain'];

function preguntasService(model, $firebaseObject, SystemUser, preguntaDomain) {
    var domain = 'preguntas';
    SystemUser.onAuth(function (authData) {
        usuario = authData.uid;
    });
    fecha = new Date().getTime();

    var service = {
        get: getPregunta,
        save: savePregunta

    };
    return service;

    function savePregunta(platoId, texto) {
        var data = preguntaDomain.get;
        data.id_plato = platoId;
        data.id_usuario = usuario;
        data.fecha = fecha;
        data.texto_pregunta = texto;
        model.save(domain, data)
    }

    function getPregunta(idplato) {
        listaPreg = model.list(domain);
        return $firebaseObject(listaPreg.orderByChild('id_plato').equalTo(idplato))


    }


}



