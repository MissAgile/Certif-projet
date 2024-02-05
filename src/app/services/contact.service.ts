import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  

   /** fonction qui nous permet de lister les categories enregistrer par l'admin */
   addContact(data: any): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
      
      return accessToken ?
      this.http.post<any>(`${url}/contacts/store/ `, data, {
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) : of(null);
  }
}
