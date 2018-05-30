angular.module('app.service.firebase', ['firebase'])

// a simple utility to create references to Firebase paths
   .factory('firebaseRef', ['Firebase', 'myConfig', function(Firebase, FBURL) {
      /**
       * @function
       * @name firebaseRef
       * @param {String|Array...} path
       * @return a Firebase instance
       */
      return function(path) {
         return new Firebase(pathRef([FBURL.url].concat(Array.prototype.slice.call(arguments))));
      }

   }])
   
   //create Users
   .factory('SystemUser', ['Firebase', 'myConfig', function(Firebase, FBURL) {
      /**
       * @function
       * @name CreateUsers
       * @param {String|Array...} path
       * @return a Firebase instance
       */
//      return function() {
//         return FBURL.url;// new Firebase(FBURL.url);
//      }
        return new Firebase(FBURL.url);

   }])
   
       

   // a simple utility to create $firebase objects from angularFire
   .service('syncData', ['$firebaseArray', 'firebaseRef', function($firebase, firebaseRef) {
      /**
       * @function
       * @name syncData
       * @param {String|Array...} path
       * @param {int} [limit]
       * @return a Firebase instance
       */
      return function(path, limit) {
           var ref = firebaseRef(path);
           limit && (ref = ref.limit(limit));
           
           return ref
      }
   }]);

function pathRef(args) {
   for(var i=0; i < args.length; i++) {
      if( typeof(args[i]) === 'object' ) {
         args[i] = pathRef(args[i]);
      }
   }
   return args.join('/');
}


