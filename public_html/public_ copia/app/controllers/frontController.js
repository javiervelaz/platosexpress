angular.module('frontController',[])
        .controller('frontController',function($scope,$firebaseArray){
           var ref = new Firebase('https://digitalstarfood.firebaseio.com/comment');
           $scope.message = $firebaseArray(ref);
           
        });


