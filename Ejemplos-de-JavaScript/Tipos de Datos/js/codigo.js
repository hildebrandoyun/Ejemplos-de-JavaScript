"use strict"
// boolean

var activo = false;

var stado = Boolean (10 < 15)

// null 

function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
      return 0;
    }
    return m.length;
  }
  
  console.log(getVowels('ski'));

  // undefined 

  var h;
if (h === undefined) {
   // se ejecutan estas instrucciones
}
else {
   // estas instrucciones no se ejecutan
}

// Number 

var edad = 19;

var cantidad = "50";

var nuevaCantidad = Number(cantidad);

parseInt()

parseFloat()

// String 

var bebida = "gaseosa";

var comida = 'arroz';

var instrucción = "El platillo se llama 'arroz' ";

var edad = 19;

var edad = String(edad)

// symbol

var simbol1 = Symbol(11);
var simbol2 = Symbol(22);

var lugar = Symbol('dev');

// 
