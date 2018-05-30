'use strict';

angular.module('app')
        .factory('errorHandler', ErrorCatch);

function ErrorCatch() {
    var service = {
        message: message
    };

    return service;

    function message(code) {
        var mensajeError = null;
        console.log(code)
        switch (code) {
            case 'INVALID_PASSWORD':
                mensajeError = "El password ingresado no es correcto";
                break;
            case 'INVALID_USER':
                mensajeError = "El usuario ingresado no existe";
                break;
            case 'password':
                mensajeError = "El password es obligatorio";
                break;    
            case 'repassword':
                mensajeError = "El password ingresado no es correcto";
                break;
            case 'nombre':
                mensajeError = "El "+code+" es obligatorio";
                break;
            case 'telefono':
                mensajeError = "El "+code+" es obligatorio";
                break;
            case 'provincia':
                mensajeError = "El campo "+code+" es obligatorio";
                break;
            case 'ciudad':
                mensajeError = "El "+code+" es obligatorio";
                break;
            case 'barrio':
                mensajeError = "El "+code+" es obligatorio";
                break;
            case 'altura':
                mensajeError = "El campo "+code+" es obligatorio";
                break;
            case 'piso':
                mensajeError = "El "+code+" es obligatorio";
                break;
            case 'numero':
                mensajeError = "El "+code+" es obligatorio";
                break;
            case 'descripcion':
                mensajeError = "La "+code+" es obligatoria";
                break;
            case 'tipoComida':
                mensajeError = "El "+code+" es obligatorio";
                break;
            case 'precio':
                mensajeError = "El "+code+" es obligatorio";
                break;
            case 'porciones':
                mensajeError = "El campo "+code+" es obligatorio";
                break;
            case 'tipoCocina':
                mensajeError = "El campo "+code+" es obligatorio";
                break; 
            case 'dias':
                mensajeError = "El campo "+code+" es obligatorio";
                break; 
            case 'startDate':
                mensajeError = "El campo "+code+" es obligatorio";
                break;
            case 'fechaHasta':
                mensajeError = "El campo "+code+" es obligatorio";
                break;
            case 'EMAIL_TAKEN':
                mensajeError = "No se pudo crear la cuenta debido a que el mail ya esta siendo utilizado";
                break; 
            case 'INVALID_EMAIL':
                mensajeError = "El email ingresado no es valido";
                break; 
            case 'email':
                mensajeError = "El email ingresado no es valido";
                break; 
            case 'cantidad_disponible':
                mensajeError = "El campo "+code+" es obligatorio";
                break;
            default:
            
        }

        return mensajeError;
    }
}




