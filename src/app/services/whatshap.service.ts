import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { url, urlMess } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class WhatshapService {
  alertMessage(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }

  private chatifyApiUrl = 'http://127.0.0.1:8000/chatify/api';

  constructor(private http : HttpClient) { }

  
  sendWhatsapp(): Observable<any> {
    const userId = 7;
    const accessToken = localStorage.getItem('access_token');
      
    console.log(accessToken);
      return accessToken ?
      
      this.http.post<any>(`${url}/users/whatsapp/`+ userId, {},{
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
     
  }
  sendMessage(): Observable<any> {
    // const userId = 7;
    const accessToken = localStorage.getItem('access_token');
      
    console.log(accessToken);
      return accessToken ?
      
      this.http.get<any>(`${urlMess}` ,{
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
     
  }

   
  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token'); 
  }

  
  // sendMessage(message: string) {
  //   const accessToken = localStorage.getItem('access_token'); 

  //   if (!accessToken) {
  //     console.error("Access token not found.");
  //     return;
  //   }

  //   const headers = new HttpHeaders({ 
  //     'Authorization': `Bearer ${accessToken}`,
  //     'Content-Type': 'application/json'
  //   });

  //   const body = { message };

  //   return this.http.get<any>(`${this.chatifyApiUrl}/messages`, body, { headers });
  // }

}
