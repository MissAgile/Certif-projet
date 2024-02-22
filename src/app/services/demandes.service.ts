import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {
  alertMessage(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }


  addDemande(data: any):Observable<any>{
    const accessToken = localStorage.getItem('access_token');

    return accessToken ?
    this.http.post<any>(`${url}/demandes/store`, data, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
     
}

/** fonction qui nous permet de lister les demandes de tous les utilisateurs*/
getAllDemandes(): Observable<any> {
  const accessToken = localStorage.getItem('access_token');
    
    return accessToken ?
    this.http.get<any>(`${url}/pubs/index`,  {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
}
/** fonction qui nous permet de lister les bien déclarer par  un utilisateur */
getAllDemandesUsers(): Observable<any> {
  const accessToken = localStorage.getItem('access_token');
    
    return accessToken ?
    this.http.get<any>(`${url}/demandes/indexUser/`,  {
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


//fonction pour accepter une demande 
accepterDemandeUser(id: number, ): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');
    
  console.log(accessToken);
    return accessToken ?
    this.http.post<any>(`${url}/demandes/accept/${id}`,{},{
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) : of(null);
   
}
refuserDemandeUser(id: number, ): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');
    
  console.log(accessToken);
    return accessToken ?
    this.http.post<any>(`${url}/api/demandes/refuse${id}`,{},{
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) : of(null);
   
}
}

