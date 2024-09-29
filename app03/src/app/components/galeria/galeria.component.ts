import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  peliculas: any;

  constructor(private servicio: PeliculasService){
   
  }

  ngOnInit(): void {
    this.servicio.getPeliculas().subscribe(peliculas => this.peliculas = peliculas);
    console.log(this.peliculas);
    console.log("test");
}
}
