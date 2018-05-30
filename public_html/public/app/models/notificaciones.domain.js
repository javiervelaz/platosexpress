angular
        .module('app')
        .factory('notificacionesDomain', myDomain);
myDomain.$inject = ['syncData'];
function myDomain(syncData) {
    
    var response = {
        get: get()
    }
    

    return response;
    
    function get() {
        var domain= {
            id : {
                id:null,
                texto:'',
                fecha:'',
                activo:true
            }
               
            
        };
   

        return domain;
    }
}

