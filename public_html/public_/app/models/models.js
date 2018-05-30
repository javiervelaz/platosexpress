angular
        .module('app')
        .factory('model', modelData);

modelData.$inject = ['syncData', '$location', 'firebaseRef', 'SystemUser','$firebaseObject','$firebaseArray'];
function modelData(syncData, $location, firebaseRef, SystemUser,$firebaseObject,$firebaseArray) {

    var check = {
        exists:  null
    }

    var serviceModel = {
        list: list,
        find: find,
        save: save,
        deleteItem: deleteItem,
        exists : exists,
        update: update,
        borrarColeccion: borrarTabla
    }
    return serviceModel;
    
    function borrarTabla(domain){
        firebaseRef(domain).remove()
    }
     
    function list(domainName) {

        var domain = domainName,
                Users = syncData(domain);
        return Users;
    }

    function find(domainName, id) {
        var domain = domainName;
        ref =syncData(domain);
        var child = ref.child(id);
        
        return   $firebaseObject(child)
    }

    function save(domainName, data) {
        var domain = domainName;
        firebaseRef(domain).push().set(data);

    }

    function update(domainName,key,value,elemento) {
        var domain = domainName;
        ref=firebaseRef(domain+'/'+key);
         console.log(value)
        ref.child(elemento).set(value);
       
    }

    function deleteItem(domainName, id) {
        var domain = domainName,
           Users = syncData(domain);
        return Users;
    }

    function exists(domainName, id){
        var domain = domainName;
        ref =syncData(domain);
        var child = ref.child(id);
        child.once("value",function(snap){
            //console.log(snap.val())
            var exists = (snap.val() !== null);
            return userExistsCallback(exists)
        })
        return check
    }
    
    function userExistsCallback( exists) {
        if (exists) {
            console.log('user  exists!');
        } else {
            console.log('user  does not exist!');
        }
        return check.exists = exists
    }
}
;



