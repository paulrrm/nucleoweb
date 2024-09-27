import { Routes } from '@angular/router';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductosdetallesComponent } from './pages/productosdetalles/productosdetalles.component';

export const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'contactos', component: ContactanosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:id', component: ProductosdetallesComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: Error404Component},




];
