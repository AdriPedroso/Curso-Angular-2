/**
 * Un decorador es una función cualquiera 
 * Hemos creado una funcion que recibe la funcion constructora
 * El decorador sirve para agregar funciones y características a las funciones, clases o propiedades. Es parecido cuando extendemos una clase.
 */

function consola( constructor:Function ){
    console.log( constructor );
}

@consola
class Villano {
    constructor( public nombre:string ){
        
    }
}