//let lo usamos para declarar variables por bloques, es decir, usando el let podemos declarar la misma variable pero en bloques diferentes
//y javascript se encarga de ccrear un alias para cada bloque
var mensaje = "hola";
if (true) {
    var mensaje_1 = "adios";
}
console.log(mensaje);
//const lo usamos para declarar variables que nunca van a cambiar de valor, no nos deja reasignar un valor una vez inicializadas, ni cambiarlo de ninguna manera
var OPCIONES = "todas";
if (true) {
    var OPCIONES_1 = "ninguna";
}
