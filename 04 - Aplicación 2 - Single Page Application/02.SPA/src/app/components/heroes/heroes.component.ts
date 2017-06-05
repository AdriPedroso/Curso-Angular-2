import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service'; // Importamos el servicio
import { Router } from '@angular/router'; /* Para hacer la ruta desde metodo en el click */


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
  
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService, 
               private router:Router ) { // Y lo declaramos en el constructor

   }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes(); /* Recogemos todos los datos del servicio */

  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe', idx] )
  }

}
