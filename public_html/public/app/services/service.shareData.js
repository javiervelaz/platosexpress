angular.module('app')
        .factory('shareData', function () {

            var data = {
                FirstName: ''
            };

            return {
                getFirstName: function () {
                    return data.FirstName;
                },
                setFirstName: function (firstName) {
                    data.FirstName = firstName;
                }
            };

        })


