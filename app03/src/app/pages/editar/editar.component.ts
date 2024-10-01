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
  
}
genero: any;
edad: any;
nombre: any;
id: any;


guardar(data: any) {
  this.servicio.putPersonal(data.value).subscribe();
  }
}
