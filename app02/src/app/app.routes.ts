import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

export const routes: Routes = [

  {path: 'inicio', component: InicioComponent},
  {path: 'sobremi', component: SobreMiComponent},
  {path: 'proyectos', component: ProyectosComponent}

];
