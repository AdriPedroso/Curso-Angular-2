/* En este fichero vamos a marcar las rutas entre la web */

import { RouterModule, Routes } from '@angular/router';
/* Importamos nuestros componentes */
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent }, /* En este caso tenemos que recibir un parametro id */
    { path: '**', pathMatch: 'full', redirectTo: 'home' }, /* Si no encuentra la ruta ira hacia esta ruta */
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); /* Recordad exportar el APP_ROUTING a app.module.ts */

/* También es importante poner la etiqueta <router-outlet></router-outlet> en donde queramos que se renderice la ruta */
