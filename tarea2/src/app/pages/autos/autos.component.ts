import { Component,  } from '@angular/core';
import { AutosService } from '../../services/autos.service';


@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {

  constructor(private servicio : AutosService){}
  autos: any
  ngOnInit(): void {
    this.servicio.getVehiculos().subscribe( autos => this.autos = autos);
    console.log(this.autos);
  }



}
