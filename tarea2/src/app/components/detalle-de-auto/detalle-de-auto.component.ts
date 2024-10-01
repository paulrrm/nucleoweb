import { Component, inject } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-de-auto',
  standalone: true,
  imports: [],
  templateUrl: './detalle-de-auto.component.html',
  styleUrl: './detalle-de-auto.component.css'
})
export class DetalleDeAutoComponent {

  constructor(private servicio: AutosService , private router: Router) { }

  ruta = inject(ActivatedRoute)
  autoid: any;
  auto: any;

  ngOnInit() {
    this.autoid = this.ruta.snapshot.params['id'];
    this.servicio.getVehiculo(this.autoid).subscribe(auto => {
      this.auto = auto;
      console.log(this.auto);
    });
  }
  eliminar(){
    this.servicio.eliminaVehiculo(this.autoid).subscribe(() => {
      this.router.navigate(['/autos']);
    });
  }
  
}
