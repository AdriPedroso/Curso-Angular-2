/**
 * Las funciones de flecha es una característica de ES6.
 */

/* Funcion normal */

let miFuncion = function( a:any ){
    return a;
}

/* Funcion de Flecha */

let miFuncionF = (a:any) => a;

/* Funcion normal con dos parámetros*/

let miFuncion2 = function ( a:number, b:number){
    return a + b;
}

/* Funcion flecha con dos parámetros*/

let miFuncion2F = ( a:number, b:number ) => a + b;

/* Funcion normal con parámetro y más funcionalidad */

let miFuncion3 = function( nombre:string ){
    nombre = nombre.toUpperCase();
    return nombre;
}

/* Funcion flecha con parámetro y más funcionalidad */

let miFuncion3F = ( nombre:string ) => {
    nombre = nombre.toUpperCase();
    return nombre;
}

console.log( miFuncion("Normal") );
console.log( miFuncionF("Flecha") );

/* Todas estas funciones hacen lo mismo, ahora vamos a ver la utilidad de las funciones de flecha */

/* Ejemplo */

let nombre = "Pedro";

let hulk = { //Creamos una variable que contiene una funcion dentro, en este caso la hemos llamado smash
    nombre: "Hulk",
    smash(){
        setTimeout( () => console.log(this.nombre + " smash!!"), 1500 );
    }
}

hulk.smash();