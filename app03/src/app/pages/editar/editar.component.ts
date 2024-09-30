import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonalService } from '../../services/personal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
servicio = inject(PersonalService);
ruta = inject(ActivatedRoute);

ngOnInit() {
  this.ruta.params.subscribe(params => {
      this.id = params['idPersonal'];

  });
  this.servicio.getPersonalById(this.id).subscribe(p => {
    console.log(p);
    this.genero =  p.genero;
    this.edad = p.edad;
    this.nombre = p.nombre;
  });
}
genero: any;
edad: any;
nombre: any;
id: any;


guardar(data: any) {
  this.servicio.putPersonal(data.value).subscribe();
  }
}
