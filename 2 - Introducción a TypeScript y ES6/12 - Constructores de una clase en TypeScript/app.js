/**
 * Un constructor es una funcion que se ejecuta cuando se crea una nueva instancia de una clase
 */
var Avenger = (function () {
    /* Creamos el constructor */
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = nombre; /* This hace referencia a esta clase Avenger */
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
/* Ahora creamos una variable de tipo Avenger (nuestra clase creada) */
var antman = new Avenger("Antman", "Cap", "Scott Lang");
console.log(antman);
