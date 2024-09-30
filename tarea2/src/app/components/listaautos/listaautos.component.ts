import { Component } from '@angular/core';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-listaautos',
  standalone: true,
  imports: [],
  templateUrl: './listaautos.component.html',
  styleUrl: './listaautos.component.css'
})
export class ListaautosComponent {

    constructor(private servicio: AutosService){}

    autos: any
    ngOnInit() {
        this.servicio.getVehiculos().subscribe(autos => {
            this.autos = autos;
        });
    }

}
