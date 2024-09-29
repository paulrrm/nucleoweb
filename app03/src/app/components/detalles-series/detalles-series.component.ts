import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-series.component.html',
  styleUrl: './detalles-series.component.css'
})
export class DetallesSeriesComponent {
constructor(private ruta: ActivatedRoute, private servicio:PeliculasService){}
//ruta = inject(ActivatedRoute)
  id: string = '';
  peli:any;
ngOnInit(){
    this.ruta.params.subscribe(
      params => {
      this.id = params['idSeries'];
      console.log(this.id)
      
      this.peli = this.servicio.getPelicula(this.id);
      console.log(this.peli);
      });

}
}
