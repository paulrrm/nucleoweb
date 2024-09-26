import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent {


  pelicula =[{
    titulo: 'Titanic',
    director: 'James Cameron',
    anio: 1997,
    genero: 'Drama',
    duracion: 195,
    actores: ['Leonardo DiCaprio', 'Kate Winslet', 'Rose McGowan', 'Jack Nicholson']
  },
  {
    titulo: 'Avengers: Endgame',
    director: 'Christopher Nolan',
    anio: 2019,
    genero: 'Acción',
    duracion: 181,
    actores: ['Chris Evans', 'Thor Ragnarok', 'Hawkeye', 'Bruce Banner']
  },
  {
    titulo: 'Spider-Man: Far From Home',
    director: 'Christopher Nolan',
    anio: 2019,
    genero: 'Acción',
    duracion: 139,
    actores: ['Ben Affleck', 'Kevin Spacey', 'Chris Evans', 'Tony Stark']
  },
  {
    titulo: 'The Matrix',
    director: 'The Wachowski Brothers',
    anio: 1999,
    genero: 'Ciencia Ficción',
    duracion: 136,
    actores: ['Keanu Reeves', 'Laurence Fishburne', 'Christopher Nolan', 'Wes Anderson']
  }
]
binding: any='1999';
}
