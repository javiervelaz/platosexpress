angular
        .module('app')
        .factory('notificacion', getNotif);

getNotif.$inject = ['model', '$q'];

function getNotif(model, $q)
{
    var getData = {};
    
    getData.setNotificacionUsuario =function(usuario){
        var mensaje = []
       
        var deferred = $q.defer();
        ref = model.referencia('notificaciones')
        ref.orderByKey().on("value", function (snap) {
            snap.forEach(function (snapChild) {
                if (snapChild.key() == usuario) {
                    snapChild.forEach(function (snapData) {
                        mensaje.push(snapData.val())
                    })

                }
            })
            deferred.resolve(mensaje);
        })
        
        return deferred.promise;
    }
    
    getData.getNotificacionUsuario =function(usuario){
        var mensaje = []
        var deferred = $q.defer();
        ref = model.referencia('notificaciones')
        ref.orderByKey().on("value", function (snap) {
            snap.forEach(function (snapChild) {
                if (snapChild.key() == usuario) {
                    snapChild.forEach(function (snapData) {
                        mensaje[snapData.key()] =snapData.val()
                        //console.log(snapData.key)
                    })

                }
            })
            deferred.resolve(mensaje);
        })
        
        return mensaje;
    }
    
    
    getData.cantidad =function(usuario){
        var count = 0
       
        var deferred = $q.defer();
        ref = model.referencia('notificaciones')
        ref.orderByKey().on("value", function (snap) {
            snap.forEach(function (snapChild) {
                if (snapChild.key() == usuario) {
                    snapChild.forEach(function (snapData) {
                        if(snapData.val().activo == true){
                             count++;
                        }
                       
                    })

                }
            })
            deferred.resolve(count);
        })
        
        return deferred.promise;
    }
    
    
    getData.marcar =function(usuario){
        var count = 0
       
        var deferred = $q.defer();
        ref = model.referencia('notificaciones')
        ref.orderByKey().on("value", function (snap) {
            snap.forEach(function (snapChild) {
                if (snapChild.key() == usuario) {
                    
                    snapChild.forEach(function (snapData) {
                        if(snapData.val().activo){
                            console.log(snapData.key())
                            if(snapData.val().activo == true){
                                model.update('notificaciones/'+usuario,snapData.key(),false,'activo')
                            }                            
                        }
                        
                    })

                }
            })
            deferred.resolve(count);
        })
        
        return deferred.promise;
    }
    
    
    
    return getData;

}




