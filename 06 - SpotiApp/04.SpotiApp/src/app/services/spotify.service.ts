import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any [] = [];

  urlBusqueda: string = 'https://api.spotify.com/v1/search';
  urlArtista: string = 'https://api.spotify.com/v1/artists';
  token = 'Bearer BQD2DKSOYWet5zKnQSqCvmu9sn2-44xxGU1Zk8GUOz7rftKyoExPECAW2UecOJzmVtmV9pnzoLLvj6tAhFZS6g';

  constructor( private http: Http ) { }


  getArtistas( termino: string ) {

    let headers = new Headers();
    headers.append( 'authorization', this.token);

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    // BQD3nACpiv5zU0qyGjHGvuKVAqAEu_PKXolyVcmDNLFV3ChMsGC_bURw1aSBiSSV57w7XgR7MVdJo66-2W4MEg

    return this.http.get( url, { headers } )
           .map( res => {
              // console.log( res.json().artists.items );
              this.artistas = res.json().artists.items;
              console.log(this.artistas);

              return res.json().artists.items;
           })

  }

    getArtista( id: string ) {

      let headers = new Headers();
    headers.append( 'authorization', this.token);

    let query = `/${ id }`;
    let url = this.urlArtista + query;

    // BQD3nACpiv5zU0qyGjHGvuKVAqAEu_PKXolyVcmDNLFV3ChMsGC_bURw1aSBiSSV57w7XgR7MVdJo66-2W4MEg

    return this.http.get( url, { headers } )
           .map( res => {
            return res.json();
           })

  }

  getTop( id: string ) {

    let headers = new Headers();
    headers.append( 'authorization', this.token);

    let query = `/${ id }/top-tracks?country=ES`;
    let url = this.urlArtista + query;

    // BQD3nACpiv5zU0qyGjHGvuKVAqAEu_PKXolyVcmDNLFV3ChMsGC_bURw1aSBiSSV57w7XgR7MVdJo66-2W4MEg

    return this.http.get( url, { headers } )
           .map( res => {
             console.log( res.json().tracks );
            return res.json().tracks;
           })

  }

}
