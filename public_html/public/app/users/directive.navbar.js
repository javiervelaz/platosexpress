angular
        .module('app')
        .directive('navBar',navegationBar)

function navegationBar(){
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
      templateUrl: 'app/users/navBar.html',
      controller: 'indexController'
    }    
}


