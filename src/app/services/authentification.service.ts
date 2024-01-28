import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from '../models/login';
import { url } from './apiUrl';
import { Router } from '@angular/router';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient ,
    private route: Router


    
  ) { 

  }


 
 
  login(user: any) {
    return this.http.post(`${url}/login`, user);
    // return this.http.post(${url}/login, user).subscribe((reponse:any) => onSuccess(reponse))
  }
  register(user: any) {
    return this.http.post(`${url}/register`, user);
  }
}
