import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {

  service = inject(LibrosService)
  libros: any;

  ngOnInit() {
    this.service.getLibros().subscribe(data => {
      this.libros = data;
    });
  }
}
