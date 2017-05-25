
let nombre:string  = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

/*
* Nos ayudan a reducir las líneas de código a la hora de montar una cadena de texto
*/
//En vez de ser asi: 
//let texto = "Hola " + nombre + " " + apellido + " " + edad;
//Quedaría asi:
let texto = `Hola, ${ nombre } ${ apellido } ${ edad }`;

console.log(texto);

/*Incluso podemos poner intros dentro de la cadena siempre y cuando las comillas esten correctas */

let texto2 = `Hola, 
${ nombre } 
${ apellido } ${ edad }`;

console.log(texto2);