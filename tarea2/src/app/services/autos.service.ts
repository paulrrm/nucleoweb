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
}
