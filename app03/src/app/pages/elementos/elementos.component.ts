import { Component } from '@angular/core';
import { GaleriaComponent } from "../../components/galeria/galeria.component";

@Component({
  selector: 'app-elementos',
  standalone: true,
  imports: [GaleriaComponent],
  templateUrl: './elementos.component.html',
  styleUrl: './elementos.component.css'
})
export class ElementosComponent {

}
