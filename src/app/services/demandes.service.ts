import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {

  constructor(private http : HttpClient) { }


  addDemande(data: any):Observable<any>{
    const accessToken = localStorage.getItem('access_token');

    return accessToken ?
    this.http.post<any>(`${url}/demandes/store`, data, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
     
}

getAllDemandes(): Observable<any> {
  const accessToken = localStorage.getItem('access_token');
    
    return accessToken ?
    this.http.get<any>(`${url}/demandes/indexUser`,  {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
}

//details demandes 
getDemandeById(id: number): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');
    
    return accessToken ?
    this.http.get<any>(`${url}/demandes/show/${id}`,  {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
}

//modifier
updateDemande(id: number, demande:any): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');
    
    return accessToken ?
    this.http.post<any>(`${url}/demandes/update/${id}`, demande, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) : of(null);
   
}
}

