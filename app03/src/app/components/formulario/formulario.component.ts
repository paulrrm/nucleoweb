import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  service = inject(PersonalService)
id:any
nombre:any;
edad:any;
genero:any;
  guardar(data:any){
    alert("Mensaje recibido!");
    console.log(data.value);
    this.service.postPersonal(data.value).subscribe();
    this.limpiar();
  }
  limpiar(){
    this.id = null;
    this.nombre = null;
    this.edad = null;
    this.genero = null;
  }

}
