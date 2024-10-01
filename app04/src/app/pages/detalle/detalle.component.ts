import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../../services/libros.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
editarLibro() {
throw new Error('Method not implemented.');
}

  ruta = inject(ActivatedRoute)
  servicio = inject(LibrosService)
  id:any
  libro:any

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      this.id = params['id'];
      
    });
    
    this.servicio.getLibro(this.id).subscribe(libro => {
      this.libro = libro;
      console.log(this.libro);
    });

    
  }

}
