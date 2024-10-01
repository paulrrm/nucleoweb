import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

combustible: any;
precio: any;
transmision: any;
kilometraje: any;
color: any;
marca: any;


  constructor(private router: Router, private servicios: AutosService){}

  ruta = inject(ActivatedRoute)
  id:any
  auto:any

ngOnInit() {
  this.id = this.ruta.snapshot.params['id'];
  
  this.servicios.getVehiculo(this.id).subscribe(auto => {
    this.auto = auto;
  });
  }
  guardar(data: any){
    this.servicios.editaVehiculo(data.value).subscribe(() => {
      this.router.navigate(['/listas']);
    });
  
}
