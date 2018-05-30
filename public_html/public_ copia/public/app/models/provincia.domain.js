angular
        .module('app')
        .factory('provinciasList',List);

function List(){
    var list = {
        get:get(),
    }
    
    return list;
    
    function get(){
        
        var domain = [{ name: "selecctionar", id: 0 },
                      { name: "Catamarca", id: 1 },
                      { name: "Ciudad Autónoma de Buenos Aires", id: 2 },
                      { name: "Cordoba", id: 3 },
                      { name: "Corrientes", id: 4},
                      { name: "Chaco", id: 5},
                      { name: "Chubut", id: 6},
                      { name: "Entre Ríos", id: 7},
                      { name: "Formosa", id: 8},
                      { name: "Jujuy", id: 9},
                      { name: "La Pampa", id: 10},
                      { name: "La Rioja", id: 11},
                      { name: "Mendoza", id: 12},
                      { name: "Misiones", id: 13},
                      { name: "Neuquén", id: 14},
                      { name: "Provincia de Buenos Aires", id: 15},
                      { name: "Río Negro", id: 16},
                      { name: "Salta", id: 17},
                      { name: "San Juan", id: 18},
                      { name: "San Luis", id: 19},
                      { name: "Santa Cruz", id: 20},
                      { name: "Santa Fe", id: 21},
                      { name: "Santiago del Estero", id: 22},
                      { name: "Tierra del Fuego", id: 23},
                      { name: "Tucumán", id: 24},
                  ];
        return domain;
    }
}

