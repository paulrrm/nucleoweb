import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ElementosComponent } from './pages/elementos/elementos.component';
import { GestionPersonalComponent } from './pages/gestion-personal/gestion-personal.component';
import { DetallesSeriesComponent } from './components/detalles-series/detalles-series.component';

export const routes: Routes = [
 
    {path:'home', component: HomeComponent},
    {path:'series', component: ElementosComponent},
    {path:'series/:idSeries', component: DetallesSeriesComponent},
    {path:'gestion', component: GestionPersonalComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },

];
