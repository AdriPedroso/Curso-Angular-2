import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};
  queCasa:boolean=false;

  constructor(private activatedRoute:ActivatedRoute, 
              private _heroesService:HeroesService) { 

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      
      if(this.heroe.casa=="Marvel"){
        this.queCasa = true;
      }else if(this.heroe.casa=="DC"){
        this.queCasa = false;
        console.log(this.queCasa);
      }

    } )



  }

}
