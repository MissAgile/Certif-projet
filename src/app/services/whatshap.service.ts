import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class WhatshapService {
  alertMessage(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

  
  sendWhatsapp(userId: number): Observable<any> {
  
    const accessToken = localStorage.getItem('access_token');
      
    console.log(accessToken);
      return accessToken ?
      this.http.post<any>(`${url}/users/whatsapp/${userId}`,{
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
     
  }
}
