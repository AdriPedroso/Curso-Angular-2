import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent { 
    /**
     * Aquí vamos a dar funcionalidad al componente
     */
    /* Estas variables las colocaremos en el html para cambiar el texto de la tarjeta */
    /* Vamos a usar el ngif(en el html) para poder mostrar las variables u ocultarlas en funcion del valor de "mostrar" */
     mostrar:boolean = true;

     texto:string = "Un gran poder requiere una gran responsabilidad";
     autor:string = "Ben Parker";

     /**
      * Ahora vamos a usar el ngFor y vamos a colocar los elementos del array en la lista ordenada
      */
      personajes:string[] = ["Spiderman", "Venom", "Dr. Octopus"]
}