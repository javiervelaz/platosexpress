angular
        .module('app')
        .factory('pedidoDomain',myDomain);

myDomain.$inject =['syncData'];

function myDomain(syncData){
    var response = {
        get:get(),
    }
    
    return response;
    
    function get(){
        
        var domain = {
            id_plato: '',
            fecha_compra: '',
            usuario_id: '',
            usuario_id_venta: '',
            precio: '',
            estado : 'i',
            delivery: 'si',
            calificacion:'',
            cantidad:'0',
            pago:'',
            horario_entrega:'',
            monto_pago: 0,
        };
        return domain;
    }
    
}