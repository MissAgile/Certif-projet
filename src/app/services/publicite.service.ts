import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class PubliciteService {

  constructor(private http : HttpClient) { }

  alertMessage(arg0: string, arg1: string, arg2: string) {
    // throw new Error('Method not implemented.');
  }
// listes les pubs faites 
  getAllPubs(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
      
      return accessToken ?
      this.http.get<any>(`${url}/demandes/index`,  {
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) : of(null);
  }

  // listes des pubs d'un utilisateur 
  getAllPubsUser(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
      
      return accessToken ?
      this.http.get<any>(`${url}/demandes/pubAffichable`,  {
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) : of(null);
  }

  addPub(pub: any):Observable<any>{
    const accessToken = localStorage.getItem('access_token');

    return accessToken ?
    this.http.post<any>(`${url}/demandes/store`, pub, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
}

 /**fonction pour voir detail bien  */
 getPubById(id: any): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');
    
    return accessToken ?
    this.http.get<any>(`${url}/demandes/show/${id}`,  {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
}


/**modifier une publicité*/ 
 
updatePub(id: number): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');
    
    return accessToken ?
    this.http.post<any>(`${url}/demandes/update${id}`,  {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) : of(null);
   
}

/**Fonction pour supprimer une pub d'un utilisateur */
deletePub(id: number): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');

  return accessToken ?
  this.http.delete<any>(`${url}/demandes/destroy/${id}`,  {
    headers:new HttpHeaders({'Authorization':`Bearer ${accessToken}`})
  }) :of(null);
}

/**fonction pour accepter une publicite  */
accepterPubById(id: number, ): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');
    
  console.log(accessToken);
    return accessToken ?
    this.http.post<any>(`${url}/demandes/accept/${id}`,{},{
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) : of(null);
   
}
}
