angular
        .module('app')
        .factory('platosData',platosDataService);

platosDataService.$inject = ['model','$window','firebaseRef'];

function platosDataService(modelPlatos,$window,firebaseRef){
    var domain = 'platos';

    var service = {
        savePlato : savePlato,
        getTipoCocina : getCocina,
        updateImgPath : updateImgPath
    };
    return service;
    
    function savePlato(domainName, data){
         modelPlatos.save(domainName, data);
        var lastid;
        platosdatos = firebaseRef(domainName); 
        //console.log(platosdatos);
        platosdatos.limitToLast(1).on("child_added",function(childSnapshot, prevChildKey){
            //console.log(childSnapshot.key());
            lastid = childSnapshot.key();
        });
        
        return lastid;
    }
    
    function getCocina(domain){
        var listaPlatos = modelPlatos.list(domain)
       return listaPlatos;
    }
    
    function updateImgPath(key,img,elemento){
        modelPlatos.update(domain,key,img,elemento);
    }
    
}


