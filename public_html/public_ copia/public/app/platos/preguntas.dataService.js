angular
        .module('app')
        .factory('preguntaData', preguntasService);

preguntasService.$inject = ['model', '$firebaseObject', 'SystemUser', 'preguntaDomain','$firebaseArray','firebaseRef'];

function preguntasService(model, $firebaseObject, SystemUser, preguntaDomain,$firebaseArray,firebaseRef) {
    var domain = 'preguntas';
    var fieldResp= 'texto_respuesta';
    SystemUser.onAuth(function (authData) {
        usuario = authData.uid;
    });
    fecha = new Date().getTime();
    var preg ={
        contador :null
    };
    

    var service = {
        get: getPregunta,
        save: savePregunta,
        updateRespuesta:updateRespuesta,
        countPreguntas : cantidadPreg,
        countPregByUser: cantidadPregUsuario

    };
    return service;

    function updateRespuesta(key,value){
        model.update(domain,key,value,fieldResp)
    }

    function savePregunta(platoId, texto) {
        var plato = firebaseRef('platos/'+platoId);
        var id_usuario;
        plato.on("value",function(snap){
            id_usuario = snap.val().id_usuario
        })
        
        var data = preguntaDomain.get;
        var lastid;
        data.id_plato = platoId;
        data.id_usuario = usuario;
        data.id_usuario_venta = id_usuario;
        data.fecha = fecha;
        data.texto_pregunta = texto;
        model.save(domain, data);
        preguntasData =  firebaseRef(domain);
        preguntasData.limitToLast(1).on("child_added",function(childSnapshot, prevChildKey){
            lastid = childSnapshot.key();
        });
        
        return lastid;
        
    }

    function getPregunta(idplato) {
        listaPreg = model.list(domain);
        
        return $firebaseObject(listaPreg.orderByChild('id_plato').equalTo(idplato));
    }

    function cantidadPreg(idplato){
        listaPreg = model.list(domain);
        cant =listaPreg.orderByChild('id_plato').equalTo(idplato);
        data= $firebaseArray(cant);
        
        
        return data;
    }
    
    
    function cantidadPregUsuario(usuario){
        listaPregPen = model.list(domain);
        cant = listaPregPen.orderByChild('id_usuario_venta').equalTo(usuario);
        data= $firebaseArray(cant);
        return data;
    }
    
    function callback(value)
    {
        preg.contador = value;
        return preg.contador;
    }

}



