var nombre = "Juan";
var apellido = "Perez";
var edad = 32;
/*
* Nos ayudan a reducir las líneas de código a la hora de montar una cadena de texto
*/
//En vez de ser asi: 
//let texto = "Hola " + nombre + " " + apellido + " " + edad;
//Quedaría asi:
var texto = "Hola, " + nombre + " " + apellido + " " + edad;
console.log(texto);
/*Incluso podemos poner intros dentro de la cadena siempre y cuando las comillas esten correctas */
var texto2 = "Hola, \n" + nombre + " \n" + apellido + " " + edad;
console.log(texto2);
