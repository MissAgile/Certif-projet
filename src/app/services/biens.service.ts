import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class BiensService {

  constructor(private http : HttpClient) { }


   /** fonction qui nous permet de lister les bien déclarer par  un utilisateur */
   getAllBiens(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
      
      return accessToken ?
      this.http.get<any>(`${url}/biens/bienUser`,  {
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) : of(null);
  }

  /**fonction pour voir detail bien */
  //details demandes 
getBienById(id: any): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');
    
    return accessToken ?
    this.http.get<any>(`${url}/biens/show/${id}`,  {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
}

  
  addAnnonce(data: any):Observable<any>{
    const accessToken = localStorage.getItem('access_token');
    // return this.http.post<any>(`${url}/biens/store`, data)
    return accessToken ?
    this.http.post<any>(`${url}/biens/store`, data, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
     
    
  }


 

  //modifier
updateBien(id: number, data:any): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');
    
    return accessToken ?
    this.http.post<any>(`${url}/biens/update/${id}`, data, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) : of(null);
   
}



}
