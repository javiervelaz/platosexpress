angular
        .module('app')
        .factory('platoDomain',myDomain);

myDomain.$inject =['syncData'];

function myDomain(syncData){
    var response = {
        get:get()
    };
    
    return response;
    
    function get(){
        
        var domain = {
            id_usuario: '',
            nombre: '',
            descripcion: '',
            precio: '',
            cocina : '',
            tipo: '',
            dias:'',
            estado:true,
            fechaDesde:'',
            fechaHasta:'',
            horarioEntrega:'',
            fechaAlta:'',
            urlPath: '',
            cantidad_disponible:'',
            observacion:'',
            delivery:''
        };
        return domain;
    }
    
}







