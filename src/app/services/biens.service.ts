import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class BiensService {

  constructor(private http : HttpClient) { }


  /**all biens tout  recentes */
  getRecentsBiens(id:any): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
      
      return accessToken ?
      this.http.get<any>(`${url}/biens/index/${id}`, {
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) : of(null);
  }
    /**liste biens tout  type  par admin*/
    getBienAllType(): Observable<any> {
      const accessToken = localStorage.getItem('access_token');
        
        return accessToken ?
        this.http.get<any>(`${url}/biens/listeBiensTousType/`, {
            headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
          }) : of(null);
    }
 
    /**par utilisateur */
   /** fonction  lister les bien trouve par  un utilisateur */
   getBiensTrooveUser(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
      
      return accessToken ?
      this.http.get<any>(`${url}/biens/bienUser`,  {
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) : of(null);
  }

   /** fonction  lister les bien perdu par  un utilisateur */
   getBiensLooseUser(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
      
      return accessToken ?
      this.http.get<any>(`${url}/biens/bienUserPerdu`,  {
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) : of(null);
  }

  /**fonction pour voir detail bien  */
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
