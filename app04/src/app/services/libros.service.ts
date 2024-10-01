import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http:HttpClient) { }

  private API_LIBROS = 'http://localhost:3000/libros'

  getLibros() {
    return this.http.get<any[]>(this.API_LIBROS);
  }

  getLibro(id: number) {
    return this.http.get<any>(`${this.API_LIBROS}/${id}`);
  }

  postLibro(libro: any) {
    return this.http.post(this.API_LIBROS, libro);
  }

  putLibro(libro: any) {
    return this.http.put(`${this.API_LIBROS}/${libro.id}`, libro);
  }
  
  deleteLibro(id: number) {
    return this.http.delete(`${this.API_LIBROS}/${id}`);
  }


  
}
