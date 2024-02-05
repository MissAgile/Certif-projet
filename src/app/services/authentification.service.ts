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
  alertMessage(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient ,
    private route: Router


    
  ) { 

  }
  login(user: any): Observable<any> {
    return this.http.post<any>(`${url}/login`, user);
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

logout(): Observable<any> {
  const accessToken = localStorage.getItem('access_token');

  return accessToken ?
    this.http.post<any>(`${url}/logout`, {}, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) :
    of(null);
}
}
