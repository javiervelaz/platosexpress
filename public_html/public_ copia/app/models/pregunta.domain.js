angular
        .module('app')
        .factory('preguntaDomain',myDomain);

myDomain.$inject =['syncData'];

function myDomain(syncData){
    var response = {
        get:get(),
    }
    
    return response;
    
    function get(){
        
        var domain = {
            id_pregunta : '',
            id_plato: '',
            id_usuario: '',
            fecha: '',
            texto_pregunta : '',
            texto_respuesta: ''
        };
        return domain;
    }
    
}





