import { Component } from '@angular/core';
import { InfocontactoComponent } from "../../components/infocontacto/infocontacto.component";
import { FormulariocontactoComponent } from "../../components/formulariocontacto/formulariocontacto.component";
import { MapcontactoComponent } from "../../components/mapcontacto/mapcontacto.component";

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [InfocontactoComponent, FormulariocontactoComponent, MapcontactoComponent],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {

}
