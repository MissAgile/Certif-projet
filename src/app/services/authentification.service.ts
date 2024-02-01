import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Login } from '../models/login';
import { url } from './apiUrl';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient ,
    private route: Router


    
  ) { 

  }
  login(user: any): Observable<any> {
    return this.http.post<any>(`${url}/login`, user);
    // return this.http.post(${url}/login, user).subscribe((reponse:any) => onSuccess(reponse))
  }
  register(user: any) {
    return this.http.post(`${url}/register`, user);
  }

  getAllUsers(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
      
      return accessToken ?
      this.http.get<any>(`${url}/users/index`,{
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) : of(null);
  }

   /**fonction pour voir detail bien */
  //details demandes 
getUserById(id: any): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');
    
    return accessToken ?
    this.http.get<any>(`${url}/user/show/${id}`,  {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
}
}
