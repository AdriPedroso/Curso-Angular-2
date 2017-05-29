/**
 * Declaramos una clase básica en TypeScript
 */

class Avenger { //Clase

    /* Propiedades */
    
    nombre:string;  
    equipo:string;
    nombreReal:string;
    
    puedePelear:boolean;
    peleasGanadas:number;

}

/* Ahora creamos una variable de tipo Avenger (nuestra clase creada) */

let antman:Avenger = new Avenger(); 

console.log(antman);