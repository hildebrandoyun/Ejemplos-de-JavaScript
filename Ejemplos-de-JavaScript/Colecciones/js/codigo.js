"use strict"

// Arrays

function fun(x){return x+1;}
let arr = [123, "abc", (5 > 4), {a: 99}, fun(1)];
console.log(arr[0]); // 123
console.log(arr[1]); // "abc"
console.log(arr[2]); // true
console.log(arr[3]); // Object {a: 99}
console.log(arr[4]); // 2
//Es lo mismo usar un String que un número entero
//no negativo en el índice cuando accedamos
console.log(arr["4"]); // 2
//Longitud del Array
console.log(arr.length); // 5
//Tipo de objeto
console.log(typeof arr); // "object"
console.log(arr.constructor.name); // "Array"
console.log(Object.prototype.toString.call(arr));


// matrices 
var arr = new Array(element0, element1, ... elementN);
var arr = Array(element0, element1, ... elementN);
var arr = [element0, element1, ... elementN];

//maps
var map = new Map();
 
map.set( 'one', 1 );
map.set( 'two', 2 );
map.set( 'three', 3 );
 
console.log( "map.get('two') =", map.get('two') );
 
map.delete('three');
 
console.log( "map.has('three') =", map.has('three') );

// sets 

var obj1 = {
    a: 1,
    b: 2
};
 
var obj2 = {
    a: 1,
    b: 2
};
 
var map = new Set();
 
map.add( obj1 );
map.add( obj2 );
 
console.log( 'map.has(obj1) = ', map.has(obj1) );
console.log( 'map.has(obj2) = ', map.has(obj2) );
