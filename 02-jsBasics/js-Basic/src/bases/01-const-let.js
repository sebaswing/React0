//variables

console.log("Hola mundo");

const nombre = "Juan";
const apellido = "Beltrán";

let valorDado=5;
valorDado=4;

console.log(nombre, apellido, valorDado);

//var no se debe usar... es una mala práctica
if(true) {
    let valorDado=6;
    console.log(valorDado); //6 el alcance de la variable es solo dentro del bloque
}