//"use strict"

// funciones 

function despedir() {
    var saludo = "Adios a todos";
    console.log(saludo);
    return saludo;
}

despedir();

// parametros 

function datos(nombre, edad) {
	console.log('Hola: ', nombre);
	console.log('Edad: ', edad);
	var resultado = nombre + " tiene " + edad + " años";
	return resultado;
}

var mensaje = datos("Hilde", 19);

console.log(mensaje)

// inicialización 

function contar(cantidad = 20) {
	console.log('Total: ', cantidad);
}

contar(1000);

// parametros rest

function productos(...masIngredientes) {
    console.log('Ingrediente1: ', Ingrediente1);
    console.log('Ingrediente2: ', Ingrediente2);
    console.log("masIngredientes", masIngredientes);
}

productos("Pollo", "Tomate", "Arroz", "Frijoles", "Pescado", "Aguacate");

// parametros spread 

function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros) {
    console.log('Ingrediente1: ', ingrediente1);
    console.log('Ingrediente2: ', ingrediente2);
    console.log('Ingrediente3: ', ingrediente3);
    console.log('Otros: ', otros)
}

var ingredientesBase = ["Pollo", "Tomate"];

cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile");

// funciones anonimas 

var saludar = function(nombre){
    var mensaje = "Hola hilde " + nombre;
    return mensaje;
}

// Función Arrow | Fat Arrow | Lambda

var saludar = nombre => "Hola " + nombre;

console.log(saludar("Susana"));

var sumar = cantidad => cantidad + 10
console.log(sumar(10));

var calcular = (datoA, datoB) => datoA + datoB
console.log(calcular(10, 15));

var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA + datoB + datoC;
}
console.log(generar(10, 15));

var validar = () => {
    return 'Validación correcta';
}
console.log(validar())