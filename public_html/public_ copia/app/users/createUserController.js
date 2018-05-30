angular
        .module('app')
        .controller('createUserController',createUser);

createUser.$inject = ['$scope','dataService','$location','provinciasList','userDomain','Notification','errorHandler'];

function createUser($scope,dataService,$location,provinciasList,userDomain,Notification,errorHandler){
    var domain = 'users';
    var userDomain = userDomain.get;
    $scope.options = provinciasList.get;
    $scope.selectedOption = $scope.options[0];
    $scope.data = {
                        provincia: null,
                        multipleSelect: [],
                        option1: 'option-1',
                       };
            activate();
            
            function activate(){
                return newUser(); 
            }
            
            
            function newUser(){
                
                $scope.SaveUser = function(){   
                    
                    if ($scope.userForm.$valid) {
                        console.log($scope.data.provincia);   
                        userDomain.email = $scope.email;
                        userDomain.nombre = $scope.nombre;
                        userDomain.password = $scope.password;
                        userDomain.telefono = $scope.telefono;
                        //userDomain.direccion.pais = $scope.pais;
                        userDomain.direccion.provincia = $scope.selectedOption.id;
                        userDomain.direccion.ciudad= $scope.ciudad;
                        userDomain.direccion.barrio = $scope.barrio;
                        userDomain.direccion.altura = $scope.altura;
                        userDomain.direccion.piso = $scope.piso;
                        userDomain.direccion.numero = $scope.numero;
                        
                        userData  = {
                            email: $scope.email,
                            password: $scope.password,
                        }
                        console.log(userDomain)
                        dataService.saveUser(domain,userDomain);
                        
                        $location.path('/');
                    }else{
                        var error = $scope.userForm.$error;
                        $scope.msgValid = [];
                        angular.forEach(error,function(value,key){
                                angular.forEach(value,function(field){
                                if(field.$invalid){
                                    //$scope.msgValid.push(field.$name);
                                    console.log(field)
                                    Notification.error(errorHandler.message(field.$name))
                                }  
                              });
                        });
                         
                    }   
                }
               
            }
}



