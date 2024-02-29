import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { url} from './apiUrl';
import {  urlMess } from './apiMess';

@Injectable({
  providedIn: 'root'
})
export class WhatshapService {
  alertMessage(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');

  }

private readonly baseUrl = 'http://127.0.0.1:8000/chatify';
  constructor(private http : HttpClient) { }

  
  sendWhatsapp(id:any): Observable<any> {
    // const userId = 7;
    const accessToken = localStorage.getItem('access_token');
      
    console.log(accessToken);
      return accessToken ?
      
      this.http.post<any>(`${url}/users/whatsapp/${id}`, {},{
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
     
  }


  // sendMessageChatify(){

  //   const token = localStorage.getItem('access_token')

  //   const headers = new HttpHeaders({
  //     'authorization': 'Bearer' + `${token}`, 'Content-Type': 'application/x-www-form-urlencoded'
  //   });
  //   return this.http.get(this.baseUrl, { headers });
  // }   
  
  
  sendMessageChatify(): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token, 
      'Content-Type': 'application/json' // assuming JSON content type
    });
    return this.http.get(this.baseUrl, { headers });
  }
   
  // isLoggedIn(): boolean {
  //   return !!localStorage.getItem('access_token'); 
  

  
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
  }


