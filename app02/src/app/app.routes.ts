import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [

  {path: 'inicio', component: InicioComponent},
  {path: 'sobremi', component: SobreMiComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'contactanos', component: ContactanosComponent},

  {path: '', redirectTo: 'inicio',pathMatch: 'full'},
  {path: '**', component: Error404Component},
];
