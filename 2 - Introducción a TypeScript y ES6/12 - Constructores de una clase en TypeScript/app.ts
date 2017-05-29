/**
 * Un constructor es una funcion que se ejecuta cuando se crea una nueva instancia de una clase
 */

class Avenger { //Clase

    /* Propiedades */
    
    nombre:string;  
    equipo:string;
    nombreReal:string;
    
    puedePelear:boolean;
    peleasGanadas:number;

    /* Creamos el constructor */
    constructor( nombre:string, equipo:string, nombreReal:string ){
        this.nombre = nombre;/* This hace referencia a esta clase Avenger */
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

}

/* Ahora creamos una variable de tipo Avenger (nuestra clase creada) */

let antman:Avenger = new Avenger("Antman", "Cap", "Scott Lang"); 

console.log(antman);