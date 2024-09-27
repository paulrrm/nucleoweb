import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {

  opcion:any = 'web'
  proyectos = [
    {
      id: '0001',
      tecnologia: 'web',
      lenguaje: 'TypeScript',
      tiempo_desarrollo: 8,
    },
    {
      id: '0002',
      tecnologia: 'web',
      lenguaje: 'Spring',
      tiempo_desarrollo: 20,
    },
    {
      id: '0003',
      tecnologia: 'mobile',
      lenguaje: 'Kotlin',
      tiempo_desarrollo: 15,
    },
    {
      id: '0004',
      tecnologia: 'mobile',
      lenguaje: 'React Native',
      tiempo_desarrollo: 12,
    },
    {
      id: '0005',
      tecnologia: 'desktop',
      lenguaje: 'Java',
      tiempo_desarrollo: 18,
    },
    {
      id: '0006',
      tecnologia: 'desktop',
      lenguaje: 'C#',
      tiempo_desarrollo: 10,
    },
  ];
}
