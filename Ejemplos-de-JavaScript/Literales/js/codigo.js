"use strict"

// Array

var platillos = [ "arroz", "tacos", "pasta"];

var bebidas = new Array( "colombia", "limon", "soda" );

console.log(Array.isArray(platillos), bebidas)

// boolean

myFalse = new Boolean(false);   // initial value of false
g = new Boolean(myFalse);       //initial value of true
myString = new String("Hello"); // string object
s = new Boolean(myString);      //initial value of true

// enteros

var edad_Persona1 = 20;

var edad_Persona2 = 16;

// flotantes 

var dato_1 = 3.1415;
var dato_2 = -3.1E12;
var dato_3 = .1e12;

// tipos objeto

var Coche = {
    ruedas : 4,
    color: "azul",
    "velocidad" : 120,
    combustible : "Diesel"
  }
  console.log( Coche.ruedas );
  console.log( Coche.color );
  console.log( Coche[2] );
  console.log( Coche.combustible );

  // string 

  var nombrePersona = "Hilde";
var direccionWeb = 'google.com';
var mensaje = "Hola \"Buen Dia\", Que tal!";