'use strict';


angular


        .module('app')


        // Angular File Upload module does not include this directive
        // Only for example


        /**
         * The ng-thumb directive
         * @author: nerv
         * @version: 0.1.2, 2014-01-09
         */
        .directive("fileread", [function () {
                return {
                    scope: {
                        fileread: "=",
                        model : "=",
                        previmages: "="
                    },
                    link: function (scope, element, attributes) {
                        element.bind("change", function (changeEvent) {
                            var picFile=null;
                            scope.previmages =[];
                            scope.model = [];
                            for (var i = 0; i < changeEvent.target.files.length; i++) {
                                var reader = new FileReader();
                                reader.onload = function (loadEvent) {    
                                    scope.$apply(function () {
                                        picFile = loadEvent.target;
                                        scope.previmages.push(picFile.result);
                                        //scope.fileread = loadEvent.target.result; 
                                        })
                                }    
                                scope.model.push(changeEvent.target.files[i]);
                                scope.fileread = reader.readAsDataURL(changeEvent.target.files[i]);
                                //reader.readAsDataURL(changeEvent.target.files[i]);
                            }
                            
                        });
                    }
                }
            }]);
