angular
        .module('app')
        .factory('userDataService', getUData)
        .service('userCalif', getUserCalification)
        .service('userNombre',getUserName);

getUData.$inject = ['model', '$q'];
getUserCalification.$inject=['model'];
getUserName.$inject=['model'];


function getUData(model, $q)
{
    var getData = {};

    getData.activo = function (usuario) {
        var deferred = $q.defer();
        ref = model.referencia('users/' + usuario + '/activo')
        ref.on('value', function (snap) {
            deferred.resolve(snap.val());

        })
        return deferred.promise;

    }

    getData.calificacion = function (usuario) {
        var deferred = $q.defer();
        ref = model.referencia('users/' + usuario + '/calificacion')
        ref.on('value', function (snap) {
            deferred.resolve(snap.val());

        })
        return deferred.promise;

    }
    
    getData.email = function (usuario) {
        var deferred = $q.defer();
        ref = model.referencia('users/' + usuario + '/email')
        ref.on('value', function (snap) {
            deferred.resolve(snap.val());

        })
        return deferred.promise;

    }
    
    getData.validacionDatos = function (usuario) {
        var arr=[]
        var deferred = $q.defer();
        ref = model.referencia('users/' + usuario )
        ref.on('value', function (snap) {
            if(snap.val().email ===0){
                arr.push('email')
            }
            if(snap.val().address ===0){
                arr.push('address')
                
            }
            //console.log(snap.val())
            deferred.resolve(arr);

        })
        return deferred.promise;

    }
    return getData;

}

function getUserCalification(model) {
    var reponse = {calificacion: 0};
    this.calif = function (uid) {
        model.findField('users/' + uid).child('calificacion').once('value', function (snap) {
          reponse.calificacion= snap.val()
        }) 
        return {
            'calif': reponse
         }
    };
}

function getUserName(model){
    var response = {nombre: 'none'};
    this.nombre = function (uid) {
        model.findField('users/' + uid).child('nombre').once('value', function (snap) {
          response.nombre= snap.val()
        }) 
        
        return {
            'name': response
         }
    };
}








