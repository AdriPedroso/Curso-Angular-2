/**
 * Declaramos una clase básica en TypeScript
 */
var Avenger = (function () {
    function Avenger() {
    }
    return Avenger;
}());
/* Ahora creamos una variable de tipo Avenger (nuestra clase creada) */
var antman = new Avenger();
console.log(antman);
