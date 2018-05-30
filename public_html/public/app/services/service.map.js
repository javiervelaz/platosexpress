angular
        .module('app')
        .factory('mapService', map)

map.$inject = ['$http'];

function map($http) {

    var service = {
        mapa: getLatitudeLongitude
    }

   
    function getLatitudeLongitude(callback, address ) {
    // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
    address = address || 'Ferrol, Galicia, Spain';
    // Initialize the Geocoder
    geocoder = new google.maps.Geocoder();
    if (geocoder) {
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                callback(results[0]);
                //console.log(results[0]);
            }
        });
    }
}

    

    return service;
}


