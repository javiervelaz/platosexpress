angular
        .module('app')
        .factory('puntuacionDomain',myDomain);

myDomain.$inject =['syncData'];

function myDomain(syncData){
    var response = {
        get:get(),
    }
    
    return response;
    
    function get(){
        
        var domain = {
            puntos: '',
            usuario_id: '',
            plato_id: '',
            fecha : '',
        };
        return domain;
    }
    
}
