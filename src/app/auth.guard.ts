import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();

 const  userOnline = JSON.parse(localStorage.getItem('userOnline') || "") 
  if (userOnline.role_id===2) {
    return true;
  }else{
    router.navigate(['/authentification'])
    return false;
  }
};