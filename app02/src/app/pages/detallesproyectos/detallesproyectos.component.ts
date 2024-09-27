import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallesproyectos',
  standalone: true,
  imports: [],
  templateUrl: './detallesproyectos.component.html',
  styleUrl: './detallesproyectos.component.css',
})
export class DetallesproyectosComponent {
  ruta = inject(ActivatedRoute);

  proyect:any

  ngOnInit(){
    // const id = this.ruta.snapshot.paramMap.get('id');
    let id
    this.ruta.paramMap.subscribe(parametro =>{
      id = parametro.get('id');
      this.proyectos.forEach(proyect =>{
        if(proyect.id ==  parametro.get('id'))
        {
          console.log(proyect);
          this.proyect = proyect;
        }
      }

    )});
    console.log(id); // imprime el id del proyecto seleccionado
  }



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
