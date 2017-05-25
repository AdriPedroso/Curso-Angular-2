/**
 * Las promesas nos da la posibilidad de ejecutar una función, una tarea o algún código cuando una tarea síncrona ha termiando
 */
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //termina bien
        resolve();
        //termina mal
        //reject();
    }, 1500);
}); //resolve si la funcion se ejecuta correctament y reject si no lo hace
prom1.then(function () {
    console.log("Ejecutarme cuando se termine bien");
}, function () {
    console.error("Ejecutar si todo sale mal");
});
