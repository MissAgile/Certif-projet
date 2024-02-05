import { Injectable } from "@angular/core";
import { AuthentificationService } from "./services/authentification.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

// @Injectable({
//   providedIn:"root"
  
// })

// export class AuthGuard implements CanActivate {
//   constructor(private authentificationService: AuthentificationService) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     // Vérifiez ici si l'utilisateur est connecté
//     if (this.authentificationService.) {
//       return true;
//     } else {
//       // Redirigez l'utilisateur vers une autre page s'il n'est pas connecté
//       return false;
//     }
//   }
// }