import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class PubliciteService {

  constructor(private http : HttpClient) { }

  getAllPubs(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
      
      return accessToken ?
      this.http.get<any>(`${url}/pubs/index/`,  {
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) : of(null);
  }

  addPub(data: any):Observable<any>{
    const accessToken = localStorage.getItem('access_token');

    return accessToken ?
    this.http.post<any>(`${url}/pubs/store`, data, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
}

//pour supprimer 
//modifier
updatePub(id: number, publicite:any): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');
    
    return accessToken ?
    this.http.post<any>(`${url}/pubs/update/${id}`, publicite, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) : of(null);
   
}

}
