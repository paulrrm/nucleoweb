import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Tabla1Component } from './components/tabla1/tabla1.component';
import { Tabla2Component } from './components/tabla2/tabla2.component';
import { IteracionComponent } from "./components/iteracion/iteracion.component";
import { FiltroComponent } from "./components/filtro/filtro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    Tabla1Component,
    Tabla2Component,
    IteracionComponent,
    FiltroComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app01';
  nocturno = true;
  filtro = true

  cambioColor() {
    this.nocturno = !this.nocturno
    console.log(this.nocturno)
  }
  diurno(){
    this.nocturno = false
  }
  darckmode(){
    this.nocturno = true
  }
}
