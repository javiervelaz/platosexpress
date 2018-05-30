angular
        .module('app')
        .factory('calificacion', getCalif);

getCalif.$inject = ['model', '$q'];

function getCalif(model, $q)
{
    var getData = {};
    
    getData.calificacionUsuarioComprador =function(usuario){
        var count = 0
        var average = 0
        var puntos = 0
        var deferred = $q.defer();
        ref = model.referencia('calificaciones/comprador')
        ref.orderByKey().on("value", function (snap) {
            snap.forEach(function (snapChild) {
                if (snapChild.key() == usuario) {
                    snapChild.forEach(function (snapData) {
                        count++
                        puntos += snapData.val().calificacion
                    })

                }
            })
            average = puntos / count;
            deferred.resolve(average);
        })
        
        return deferred.promise;
    }
    
    getData.calificacionUsuarioVendedor =function(usuario){
        var count = 0
        var average = 0
        var puntos = 0
        var deferred = $q.defer();
        ref = model.referencia('calificaciones/vendedor')
        ref.orderByKey().on("value", function (snap) {
            snap.forEach(function (snapChild) {
                if (snapChild.key() == usuario) {
                    snapChild.forEach(function (snapData) {
                        count++
                        puntos += snapData.val().calificacion
                    })

                }
            })
            average = puntos / count;
            deferred.resolve(average);
        })
        
        return deferred.promise;
    }
    
    getData.getCalificacionComprador = function (usuario) {
        var count = 0
        var average = 0
        var puntos = 0
        var deferred = $q.defer();
        ref = model.referencia('calificaciones/comprador')
        ref.orderByKey().on("value", function (snap) {
            snap.forEach(function (snapChild) { 
                 if (snapChild.key() == usuario) {
                    snapChild.forEach(function (snapData) {
                        count++
                        puntos += snapData.val().calificacion
                    })
                 }
            })
            average = puntos / count;
            deferred.resolve(average);
//            console.log(puntos)
        })
        
        return deferred.promise;
    }
    
    getData.getCalificacionVendedor = function (usuario) {
        var count = 0
        var average = 0
        var puntos = 0
        var deferred = $q.defer();
        ref = model.referencia('calificaciones/vendedor')
        ref.orderByKey().on("value", function (snap) {
            snap.forEach(function (snapChild) {           
                 if (snapChild.key() == usuario) {
                    snapChild.forEach(function (snapData) {
                        count++
                        puntos += snapData.val().calificacion
                        
                    })
                 }
                console.log(puntos)
            })
            average = puntos / count;
            deferred.resolve(average);
            
        })
        
        return deferred.promise;
    }
    
    getData.CalificacionVendedor = function (usuario) {
        var puntos = 0
        var deferred = $q.defer();
        ref = model.referencia('users/'+usuario+'/calificacion_vendedor')
        ref.on("value", function (snap) {
            puntos = snap.val();
            deferred.resolve(puntos)
        })
       
        return deferred.promise;
    }
    
    
    return getData;

}

