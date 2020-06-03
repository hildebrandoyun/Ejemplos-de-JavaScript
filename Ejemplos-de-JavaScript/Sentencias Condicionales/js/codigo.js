"use strict"

// condicion if

var datoA = 100;
var datoB = 10;
var resultado = "Sin datos";

if( datoA > datoB ){
    resultado = "La condición se cumplió";
}

console.log("El resultado de la evaluacion es: ", resultado);

// condicion if else 

var datoA = 100;
var datoB = 200;
var resultado = "Sin datos";

if (datoA < datoB){
	resultado = "La condición se cumplió";
} else {
    resultado = "La condición no se cumplió";
}

console.log("El resultado de la evaluación es: ", resultado);

// switch

var edad = 10;
var resultado = "";

switch (edad) {
    case 10:
		resultado = "La edad es 10 años";
	break;
	case 20:
		resultado = "La edad es 20 años";
	break;
    case 30:
		resultado = "La edad es 30 años";
    break;
    case 40:
		resultado = "La edad es 50 años";
	break;
    default:
    	resultado = "Ningún caso coincide";
    break;
}


console.log("El resultado es: "+ resultado)