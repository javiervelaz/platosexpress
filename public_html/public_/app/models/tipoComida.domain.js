angular
        .module('app')
        .factory('tipoComidaList',List);

function List(){
    var list = {
        get:get(),
    }
    
    return list;
    
    function get(){
        
        var domain = [{ name: "selecctionar", id: 0 },
                      { name: "Comida Árabe", id: 1 },
                      { name: "Comida Argentina", id: 2 },
                      { name: "Comida Armenia", id: 3 },
                      { name: "Comida Asiática", id: 4},
                      { name: "Comida Brasileña", id: 5},
                      { name: "Comida Cantonesa", id: 6},
                      { name: "Comida China", id: 7},
                      { name: "Comida Congelada", id: 8},
                      { name: "Comida Criolla", id: 9},
                      { name: "Comida Española", id: 10},
                      { name: "Comida Francesa", id: 11},
                      { name: "Comida Gourmet", id: 12},
                      { name: "Comida Griega", id: 13},
                      { name: "Comida Hindú", id: 14},
                      { name: "Comida Internacional", id: 15},
                      { name: "Comida Italiana", id: 16},
                      { name: "Comida Japonesa", id: 17},
                      { name: "Comida Judía", id: 18},
                      { name: "Comida Mexicana", id: 19},
                      { name: "Santa Cruz", id: 20},
                      { name: "Comida Orgánica", id: 21},
                      { name: "Santiago del Estero", id: 22},
                      { name: "Tierra del Fuego", id: 23},
                      { name: "Tucumán", id: 24},
                  ];
        return domain;
    }
}


