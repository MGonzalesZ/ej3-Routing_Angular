import { Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'inscripciones', component: InscripcionesComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '**',
    //   redirectTo: '/home'
    component: NotfoundComponent,
  },
];
