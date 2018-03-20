import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesURL: string = 'https://heroesapp-95ab0.firebaseio.com/heroes.json';
  heroeURL: string = 'https://heroesapp-95ab0.firebaseio.com/heroes'; // Completaremos este string con el héroe a modificar
  // key$ --> es un nombre que ponemos para saber que nos referimos a la clave que genera firebase para cada elemnto

  constructor( private http: Http ) { }

  // Creamos la funcion que hace un POST a firebase
  nuevoHeroe ( heroe: Heroe ) {

    let body = JSON.stringify( heroe ); // Esto nos forma el string de un json en un formato válido
    let headers = new Headers ({
      'Content-Type' : 'application/json'
    });

    return this.http.post( this.heroesURL, body, { headers })
      .map( res => {
        console.log (res.json());
        return res.json();
      });

  }

  // Creamos la funcion que hace un PUT a firebase
  actualizarHeroe ( heroe: Heroe, key$: string ) {

        let body = JSON.stringify( heroe ); // Esto nos forma el string de un json en un formato válido
        let headers = new Headers ({
          'Content-Type' : 'application/json'
        });

        let url = `${this.heroeURL }/${ key$ }.json`; // Aquí completamos concatenando la url del héroe que queremos actualizar

        return this.http.put( url, body, { headers })
          .map( res => {
            console.log (res.json());
            return res.json();
          });

   }


   getHeroe ( key$: string ) { // Vamos a recoger un héroe concreto

     let url = `${ this.heroeURL }/${ key$ }.json`;

     return this.http.get ( url )
        .map ( res => res.json() );

   }

   getHeroes ( ) { // Vamos a recoger todos los héroes

         return this.http.get ( this.heroesURL )
            .map ( res => res.json() );

    }

    borrarHeroe ( key$: string) {

      let url = `${ this.heroeURL }/${ key$ }.json`;

      return this.http.delete ( url )
          .map (res => res.json());

    }

}
