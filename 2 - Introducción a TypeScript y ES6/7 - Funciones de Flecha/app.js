/**
 * Las funciones de flecha es una característica de ES6.
 */
/* Funcion normal */
var miFuncion = function (a) {
    return a;
};
/* Funcion de Flecha */
var miFuncionF = function (a) { return a; };
/* Funcion normal con dos parámetros*/
var miFuncion2 = function (a, b) {
    return a + b;
};
/* Funcion flecha con dos parámetros*/
var miFuncion2F = function (a, b) { return a + b; };
/* Funcion normal con parámetro y más funcionalidad */
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
/* Funcion flecha con parámetro y más funcionalidad */
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
/* Todas estas funciones hacen lo mismo, ahora vamos a ver la utilidad de las funciones de flecha */
/* Ejemplo */
var nombre = "Pedro";
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
