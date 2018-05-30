angular
        .module('app')
        .factory('calificacion', getCalif);

getCalif.$inject = ['model', '$q'];

function getCalif(model, $q)
{
    var getData = {};
    
    getData.calificacionUsuario =function(usuario){
        var count = 0
        var average = 0
        var puntos = 0
        var deferred = $q.defer();
        ref = model.referencia('calificaciones')
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
    
    getData.getCalificacion = function (plato) {
        var count = 0
        var average = 0
        var puntos = 0
        var deferred = $q.defer();
        ref = model.referencia('calificaciones')
        ref.orderByKey().on("value", function (snap) {
            snap.forEach(function (snapChild) {
                if (snapChild.key() == plato) {
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
    return getData;

}

