import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  static addCategorie(mockData: { name: string; }) {
    throw new Error('Method not implemented.');
  }
  alertMessage(arg0: string, arg1: string, arg2: string) {
    // throw new Error('Method not implemented.');
  }

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

  /**fonction pour modifier une categories */
updateCategorie(id: number): Observable<any> {
  
  const accessToken = localStorage.getItem('access_token');
    console.log(accessToken);
    
    return accessToken ?
    this.http.post<any>(`${url}/categories/update/${id}`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) : of(null);
   
}



/**fonction pour ajouter une categories */
  // deleteCategorie(id: number):Observable<any>{
  //   const accessToken = localStorage.getItem('access_token');
  //   // return this.http.post<any>(`${url}/biens/store`, data)
  //   if (!accessToken) {
  //    // Redirigez l'utilisateur vers la page de connexion s'il n'est pas connecté
  //      // ou affichez un message d'erreur.
  //     return throwError('Utilisateur non connecté')
  //   }
    
  //   return accessToken ?
  //   this.http.delete<{message:string}>(`${url}/categories/destroy/${id}`,  {
  //     headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  //   }) : of(null);
    
  // }


//   deleteCategorie(id: number): {
//     const accessToken = localStorage.getItem('access_token');
//     if (!accessToken) {
//       // Redirigez l'utilisateur vers la page de connexion s'il n'est pas connecté
//       // ou affichez un message d'erreur.
//       return throwError('Utilisateur non connecté');
//     }

   
// }


deleteCategorie(id: number): Observable<{message:string}> {
  
  const accessToken = localStorage.getItem('access_token');

  return accessToken ?
  this.http.post<any>(`${url}/categories/destroy/${id}`, "", {
    headers:new HttpHeaders({'Authorization':`Bearer ${accessToken}`})
  }) :of(null);
}
}