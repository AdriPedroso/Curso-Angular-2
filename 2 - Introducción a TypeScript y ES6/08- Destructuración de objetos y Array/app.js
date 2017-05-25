/**
 * DESTRUCTURACIÓN DE OBJETOS
 * Vamos a extraer valores específicos de una variable con varios parámetros
 */
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
/**
 * Así lo haríamos normalmente
 */
//let nombre =  avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;
/**
 * Pero con la destructuración de objetos podemos hacerlo en una misma línea de código
 */
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder; // las llaves es la sintaxis de la destructuración, le estamos indicando que queremos esos valores de la variable "avenger""
console.log(nombre, clave, poder);
/**
 * DESTRUCTURACIÓN DE ARRAYS
 * Vamos a extraer valores específicos de un array con varios elementos
 */
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2]; //Es secuencial, es decir, poedmos llamarlos de diferentes maneras al array original, pero va a mostrar los datos en orden, en caso de sacar uno solo habria que contar los caracteres
//let [ , , ironman ] --> Esto solo sacaría el elemento "Tony", hay que indicar con las comas los espacios.
console.log(thor, capi, ironman);
