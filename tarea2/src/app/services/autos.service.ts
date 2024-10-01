import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutosService {
  constructor(private http: HttpClient) {}

  private API_AUTO = 'http://localhost:3000/vehiculos';

 getVehiculos(): Observable<any> {
   return this.http.get<any>(this.API_AUTO);
 }
 getVehiculo(id: number): Observable<any> {
   return this.http.get<any>(`${this.API_AUTO}/${id}`);
 }
 editaVehiculo(vehiculo: any): Observable<any> {
   return this.http.put<any>(`${this.API_AUTO}/${vehiculo.id}`, vehiculo);
 }
 eliminaVehiculo(id: number): Observable<any> {
   return this.http.delete<any>(`${this.API_AUTO}/${id}`);
 }
}
