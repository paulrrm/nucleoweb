import { Component } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listadeautos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listadeautos.component.html',
  styleUrl: './listadeautos.component.css'
})
export class ListadeautosComponent {

  constructor(private servicio: AutosService) { }

  auto: any
  ngOnInit(): void {
    this.servicio.getVehiculos().subscribe((auto: any) => {
      this.auto= auto;
      console.log(this.auto);
    });
  }
}
