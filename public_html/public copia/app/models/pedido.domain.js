angular
        .module('app')
        .factory('pedidoDomain',myDomain);

myDomain.$inject =['syncData','dataService','platosData'];

function myDomain(syncData,dataService,platosData){
    var response = {
        get:get(),
        set:set
    }
    
    return response;
    
    function set(values){ 
        if(values.estado == 'c'){
            var estado = 'confirmado'
        }
        if(values.estado == 'i'){
            var estado = 'ingresado'
        }
        if(values.estado == 's'){
            var estado = 'suspendido'
        }
        if(values.estado == 'e'){
            var estado = 'entregado'
        }
        var domain = {
            id_plato: values.id_plato,
            fecha_compra: values.fecha_compre,
            usuario_id: values.usuario_id,
            usuario_id_venta: values.usuario_id_venta,
            precio: values.precio,
            estado : estado,
            delivery: values.delivery,
            calificacion:'',
            cantidad: values.cantidad,
            pago:'0',
            horario_entrega:'',
            monto_pago: 0,
            token:null,
            calificado_vendedor:'N',
            calificado_comprador:'N',
            items:{}
        };
        return domain;
        
    }
    
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
            token:null,
            calificado_vendedor:'N',
            calificado_comprador:'N',
            items:{}
        };
        return domain;
    }
    
}