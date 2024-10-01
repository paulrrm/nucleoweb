import { Routes } from '@angular/router';
import { PrivadoComponent } from './pages/privado/privado.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { Error404Component } from './pages/error404/error404.component';
import { privadoGuard } from './guards/privado.guard';
import { LibrosComponent } from './pages/libros/libros.component';
import { RecomendadosComponent } from './pages/recomendados/recomendados.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

export const routes: Routes = [


{path: 'privado', component: PrivadoComponent, canActivate:[privadoGuard]},
{path: 'login', component: LoginComponent},
{path: 'registro', component: RegistroComponent},
{path: 'libros', component: LibrosComponent},
{path: 'libros/:id', component: DetalleComponent},

///invitados
{path: 'recomendados', component: RecomendadosComponent},

///admin

{path: 'gestion',component: GestionComponent , canActivate:[privadoGuard]},


{path: '', redirectTo: 'login', pathMatch: 'full'},
{path: '**', component: Error404Component}


    
];
