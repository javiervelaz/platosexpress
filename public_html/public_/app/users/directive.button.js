angular
        .module('app')
        .directive('buttonNav',buttonBar);

function buttonBar(){
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
      templateUrl: 'app/users/buttons.html',
      controller: 'indexController'
    }    
}

        


