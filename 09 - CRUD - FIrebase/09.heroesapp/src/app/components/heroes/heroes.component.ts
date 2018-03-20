import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading: boolean = true;

  constructor( private _heroesService: HeroesService ) {


    // Vamos a recuperar todos los héroes que están en la base de datos
    this._heroesService.getHeroes()
      .subscribe( data => {

        // console.log(data);
        // this.heroes = data; --> Manera más simple, el siguiente código es únicamente para que tarde más en mostrar los datos
        setTimeout( () => {
          this.loading = false;
          this.heroes = data;
        }, 700 ); // Esta variable es meramente visual, para saber cuando ha cargado los datos
        // De este modo hacemos que tarde x segundos en mostrar los datos
      });

  }

  ngOnInit() {
  }

  borrarHeroe( key$: string ) {

    this._heroesService.borrarHeroe(key$)
        .subscribe( respuesta => {
          // Si se borra ok el registro, firebase nos constesta con un null, por eso la siguiente condición
          if ( respuesta ) {
            console.error( respuesta );
          } else {
            // Todo fué bien, asi que vamos a eliminar del array de datos el elemento que hemos eliminado para que refresque la lista
            delete this.heroes[ key$ ];
          }
        });

  }

}
