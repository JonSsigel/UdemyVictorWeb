'use strict'

// let y var
// let define variables de bloques
// var define variables globales y locales
//

// Prueba con var

var numero = 40;
console.log(numero);

if(true){
	var numero = 50;
	console.log(numero);
}

console.log(numero);


// Prueba con let

var texto = "Curso JS";
console.log(texto);

if(true){
	let texto ="Curso laravel";
	console.log(texto);
}

console.log(texto);
