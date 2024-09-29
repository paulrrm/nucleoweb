import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  private API_SERIES = 'https://api.sampleapis.com/movies/horror'
  getPeliculas(): Observable<any>{
    return this.http.get<any[]>(this.API_SERIES);
  }
  getPelicula(id:string): Observable<any>{
    console.log("pide la pelicula numero "+id);
    return this.http.get<any[]>(`${this.API_SERIES}/${id}`);
  }
}
