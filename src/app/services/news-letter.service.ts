import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class NewsLetterService {
  alertMessage(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }

  constructor( private http:HttpClient) { }

  // Méthode pour ajouter un newsletter
  // postNewsletter(news: any): Observable<any> {
  //   return this.http.post<any>(`${url}/envoyer/newsletter`, news);
  // }

  postNewsletter(news: any):Observable<any>{
    const accessToken = localStorage.getItem('access_token');

    return accessToken ?
    this.http.post<any>(`${url}/news/store`, news, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) : of(null);
}

  // lister des newsletters
  // getAllNewsletter(): Observable<any> {
  //   return this.http.get<any>(`${apiUrl}/lister/newsletter`);
  // }
}
