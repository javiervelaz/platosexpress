angular
        .module('app')
        .factory('ordenDomain',myDomain);

myDomain.$inject =['syncData'];

function myDomain(syncData){
    var response = {
        get:get(),
    }
    
    return response;
    
    function get(){
        
        var domain = {
            fecha_compra: '',
            usuario_id: '',
            usuario_id_venta: '',
            montoTotal: '0',
            items : {},
            
        };
        return domain;
    }
    
}