'use strict';

angular
        .module('app')
        .directive("compareWithStartDate", function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (scope, element, attributes, ngModel) {
                    
                    var validateEndDate = function (endDate, startDate) {
                        //console.log(ngModel.$$parentForm.startDate.$viewValue);
                       // endDate= ngModel.$$parentForm.endDate;
                        startDate   = ngModel.$$parentForm.startDate.$viewValue;
                        if (endDate && startDate) {
                            //console.log(startDate);
                            startDate = new Date(startDate);
                            startDate.setHours(0, 0, 0, 0);
                            endDate = new Date(endDate);
                            endDate.setHours(0, 0, 0, 0);
                              console.log(endDate >= startDate);
                            return endDate >= startDate;
                        }
                        else {
                            return true;
                        }
                    }

                    // use $validators.validation_name to do the validation
                    ngModel.$validators.checkEndDate = function (modelValue) {
                        var startdate = Date.parse(attributes.startDate);
                        var enddate = modelValue;
                        return validateEndDate(enddate, startdate);
                    };

                    // use $observe if we need to keep an eye for changes on a passed value
                    attributes.$observe('startDate', function (value) {
                        var startdate = Date.parse(value);
                        var enddate = Date.parse(ngModel.$viewValue);

                        // use $setValidity method to determine the validation result 
                        // the first parameter is the validation name, this name is the same in ng-message template as well
                        // the second parameter sets the validity (true or false), we can pass a function returning a boolean
                        ngModel.$setValidity("checkEndDate", validateEndDate(enddate, startdate));
                    });
                }
            };
        });


