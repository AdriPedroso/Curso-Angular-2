import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  nuevo: boolean = false;
  id: string;

  constructor(private _heroesService: HeroesService,
    private router: Router,
    private route: ActivatedRoute) {

    this.route.params.subscribe(parametros => {
      this.id = parametros['id'];

      // Si el id es diferente de nuevo, vamos a hacer un get para recuperar los datos del heroe
      if (this.id !== 'nuevo') {
        this._heroesService.getHeroe( this.id )
            .subscribe( data => this.heroe  = data);
    });

  }

  ngOnInit() {
  }

  guardar() { // En este método vamos a diferenciar cuando guardamos un héroe nuevo o estamos actualizando uno ya existente
    console.log(this.heroe);

    if (this.id == 'nuevo') {
      // Insertamos nuevo

      this._heroesService.nuevoHeroe(this.heroe)
        .subscribe(data => {
          // El subscribe es necesario para que sale el map del post, si no no se va a realizar el post, hay que suscribirse
          this.router.navigate(['/heroe', data.name]); // Esto para que cuando se haga el post OK nos vayamos hacia donde indiquemos
        },
        error => console.error(error)); // Se usa para controlar los errores

    } else {
      // Actualizamos existente

      this._heroesService.actualizarHeroe(this.heroe, this.id)
        .subscribe(data => {
          // El subscribe es necesario para que sale el map del post, si no no se va a realizar el post, hay que suscribirse
         console.log(data);
        },
        error => console.error(error)); // Se usa para controlar los errores

    }

  }

  agregarNuevo( forma: NgForm ) {

    this.router.navigate(['/heroe', 'nuevo']);

    forma.reset({
      casa: 'Marvel'
    }); // Reseteamos los textbox para ponerlos por defecto manteniendo los valores del combobox

  }

}
