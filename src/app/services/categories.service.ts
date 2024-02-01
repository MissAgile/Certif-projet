import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http : HttpClient) { }


   /** fonction qui nous permet de lister les categories enregistrer par l'admin */
   getAllCategories(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
      
      return accessToken ?
      this.http.get<any>(`${url}/categories/index `,  {
     
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) : of(null);
  }

/**fonction pour ajouter une categories */
  addCategorie(data: any):Observable<any>{
    const accessToken = localStorage.getItem('access_token');
    // return this.http.post<any>(`${url}/biens/store`, data)
    return accessToken ?
    this.http.post<any>(`${url}/categories/store`, data, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
     
    
  }
/**fonction pour ajouter une categories */
  deleteCategorie(data: any):Observable<any>{
    const accessToken = localStorage.getItem('access_token');
    // return this.http.post<any>(`${url}/biens/store`, data)
    return accessToken ?
    this.http.post<any>(`${url}/categories/destroy`, data, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
     
    
  }
}
