
//let lo usamos para declarar variables por bloques, es decir, usando el let podemos declarar la misma variable pero en bloques diferentes
//y javascript se encarga de ccrear un alias para cada bloque

let mensaje = "hola";

if(true){
  let  mensaje = "adios";
}

console.log(mensaje);

//const lo usamos para declarar variables que nunca van a cambiar de valor, no nos deja reasignar un valor una vez inicializadas, ni cambiarlo de ninguna manera
const OPCIONES = "todas";

if(true){
  const OPCIONES = "ninguna";
}
