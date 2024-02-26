import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './apiUrl';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  alertMessage: any;

  constructor(private http: HttpClient) { }

  /** fonction qui nous permet de lister les categories enregistrer par l'admin */
  getAllRole(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');

    return accessToken ?
      this.http.get<any>(`${url}/roles/index `, {

        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
  }

  /**fonction pour ajouter un role*/
  addRole(data: any): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
      this.http.post<any>(`${url}/roles/store`, data, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);


  }

  /**fonction pour modifier une categories */
  updateRole(id: number): Observable<any> {

    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken);

    return accessToken ?
      this.http.post<any>(`${url}/roles/update/${id}`, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);

  }

  /** fonction pour supprimer un role  */
  deleteRole(id: number): Observable<{message:string}> {
  
    const accessToken = localStorage.getItem('access_token');
  
    return accessToken ?
    this.http.post<any>(`${url}/roles/destroy/${id}`, "", {
      headers:new HttpHeaders({'Authorization':`Bearer ${accessToken}`})
    }) :of(null);
  }
}
