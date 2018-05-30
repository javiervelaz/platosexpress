angular
        .module('app')
        .factory('userDomain',myDomain);

myDomain.$inject =['syncData'];

function myDomain(syncData){
    var userFormat = {
        get:get(),
    }
    
    return userFormat;
    
    function get(){
        
        var domain = {
            email : '',
            nombre: '',
            password: 'none',
            direccion: {
                pais:'argentina',
                provincia:'default',
                ciudad:'default',
                barrio:'default',
                calle:'default',
                altura:'0',
                piso:'0',
                numero:'0'
            },
            telefono: '0',
            provider : 'default',
            delivery: 'no',
            calificacion:'0'
        };
        return domain;
    }
    
}


