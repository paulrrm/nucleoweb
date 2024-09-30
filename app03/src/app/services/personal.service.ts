import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  //delete
  getPersonalById(id: any) {
    return this.http.get(`${this.API_PRESONAL}/${id}`);
  }

  constructor(private http: HttpClient) { }
   private API_PRESONAL: string ='http://localhost:3000/personal'
  ///guardar
  postPersonal(personal: any): Observable<any> {
    console.log("servicio");  
    console.log(personal)
    return this.http.post(this.API_PRESONAL, personal);
  }
  //get
  getPersonal(): Observable<any[]> {
    return this.http.get<any[]>(this.API_PRESONAL);
  }
  //delete
  deletePersonal(id: string): Observable<any> {
    return this.http.delete(`${this.API_PRESONAL}/${id}`);
  }
  //update
  putPersonal(personal: any): Observable<any> {
    return this.http.put(`${this.API_PRESONAL}/${personal.id}`, personal);
  }
}
