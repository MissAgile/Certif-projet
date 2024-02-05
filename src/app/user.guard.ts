import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';


export const userGuard: CanActivateFn = (route, state) => {
  const router = new Router();

 const  userOnline = JSON.parse(localStorage.getItem('userOnline') || "") 
 /**gard pour utilisateur simple */
  if (userOnline.role_id===1) {
    return true;
  }else{
    router.navigate(['/authentification'])
    return false;
  }
};
