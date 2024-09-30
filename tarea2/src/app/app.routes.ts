import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { AutosComponent } from './pages/autos/autos.component';
import { DetalleDeAutoComponent } from './components/detalle-de-auto/detalle-de-auto.component';
import { EditaComponent } from './pages/edita/edita.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'listas', component: AutosComponent } ,
  { path: 'autos/:id', component: DetalleDeAutoComponent },
  { path: 'editar/:id', component: EditaComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error404Component },

];
