angular
        .module('app')
        .factory('platosData', platosDataService);

platosDataService.$inject = ['model', 'firebaseRef','$firebaseObject'];

function platosDataService(modelPlatos, firebaseRef,$firebaseObject) {
    var domain = 'platos';
    var platoN = [];
    var platoI = [];
    var promedio = [];
    
    var service = {
        savePlato: savePlato,
        getTipoCocina: getCocina,
        updateImgPath: updateImgPath,
        getNombre: getNombre,
        getUrl: getUrl,
        setCalificacion: setCalificacion,
        updateStore:updateStore,
        deletePlato: deletePlato,
        repubPlato: repubPlato
        
    };
    return service;

    function getNombre(id) {
        modelPlatos.findField('platos/' + id).child('nombre').once('value', function (snap) {
            callback(snap.val())
        })
        return platoN
    }

    function getUrl(id) {
        modelPlatos.findField('platos/' + id).child('urlPath').once('value', function (snap) {
            callbackI(snap.val())
        })
        return platoI
    }

    function savePlato(domainName, data) {
        modelPlatos.save(domainName, data);
        var lastid;
        platosdatos = firebaseRef(domainName);
        //console.log(platosdatos);
        platosdatos.limitToLast(1).on("child_added", function (childSnapshot, prevChildKey) {
            //console.log(childSnapshot.key());
            lastid = childSnapshot.key();
        });

        return lastid;
    }

    function repubPlato(domainName,data,id_plato){
        angular.forEach(data,function(value,key){
            modelPlatos.update(domainName,id_plato,value,key)
        })
        modelPlatos.update(domainName,id_plato,true,'estado')
        modelPlatos.update(domainName,id_plato,null,'observacion')
    }

    function getCocina(domain) {
        var listaPlatos = modelPlatos.list(domain)
        return listaPlatos;
    }

    function updateImgPath(key, img, elemento) {
        modelPlatos.update(domain, key, img, elemento);
    }

    function callback(value) {
        return platoN.push(value)
    }

    function callbackI(value) {
        return platoI.push(value)
    }
    function callbackProm(value) {
        return promedio.push(value)
    }

    function setCalificacion(idPlato) {
        var puntos = 0;
        var count = 0;
        var average = 0;

        ref = modelPlatos.referencia('calificaciones')
        ref.orderByKey().on("value", function (snap) {
            snap.forEach(function (snapChild) {
                if (snapChild.key() == idPlato) {
                    snapChild.forEach(function (snapData) {
                        //console.log(snapData.val().calificacion)
                        count++
                        puntos += snapData.val().calificacion
                    })

                }
            })
            average = puntos / count;
        })
        return promedio;

    }
    
    function updateStore(id_plato,cantidad){
        var disponible=0;
        var desactivar = null
        var obs = 'desactivado por falta de stock'
        plato =  modelPlatos.referencia(domain+'/'+id_plato);
        plato.on("value",function(data){
            disponible = data.val().cantidad_disponible - cantidad;
              
        })
        console.log(disponible)
        modelPlatos.update(domain,id_plato,disponible,'cantidad_disponible')
        plato.on("value",function(data){
            if(data.val().cantidad_disponible == 0){
                desactivar =true;
            }   
        })
        if(desactivar){
            modelPlatos.update(domain,id_plato,false,'estado')
            modelPlatos.update(domain,id_plato,obs,'observacion')
        }  
    }
    
    function deletePlato(id_plato){
        modelPlatos.deleteItem(domain,id_plato)
    }

}


