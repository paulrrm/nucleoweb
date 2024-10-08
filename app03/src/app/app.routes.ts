import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ElementosComponent } from './pages/elementos/elementos.component';
import { GestionPersonalComponent } from './pages/gestion-personal/gestion-personal.component';
import { DetallesSeriesComponent } from './components/detalles-series/detalles-series.component';
import { EditarComponent } from './pages/editar/editar.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
 
    {path:'home', component: HomeComponent},
    {path:'series', component: ElementosComponent},
    {path:'series/:idSeries', component: DetallesSeriesComponent},
    {path:'gestion', component: GestionPersonalComponent},
    {path:'editar/:idPersonal', component: EditarComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', component: Error404Component},

];
