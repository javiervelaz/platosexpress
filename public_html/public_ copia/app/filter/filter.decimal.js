angular
        .module('app')
        .filter('twoDecimal',function(input, scope){

return function(){

   return input.toFixed(2);

  }

})


