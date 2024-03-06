import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
const  userOnline = JSON.parse(localStorage.getItem('userOnline') || "") 
 /**gard pour utilisateur simple */
  if (userOnline.role_id===2   ) {
    return true;
  }else{
    router.navigate(['/authentification'])
    return false;
  }

//   if (localStorage.getItem('access_token')==null || localStorage.getItem('access_token')==undefined) {
//     Swal.fire({
//       icon:'error',
//       text:'Connectez-vous si vous voulez acceder à cet espace',
//       title:'Oops',
//       confirmButtonColor: "#2ECC71",
//     }
      
//     )
//     router.navigate(['/authentification']);
//     return false;

//   }else{

//     return true;
//   } 
// if (localStorage.getItem('access_token')==null || localStorage.getItem('access_token')==undefined) {
//     Swal.fire({
//       icon:'error',
//       text:'Connectez-vous si vous voulez acceder à cet espace',
//       title:'Oops',
//       confirmButtonColor: "#2ECC71",
//     }
      
//     )
//     router.navigate(['/accueil']);
//     return false;

//   }else{

//     return true;
//   }
//  const  userOnline = JSON.parse(localStorage.getItem('access_token') || "") 
//   if (userOnline.role_id===2) {
//     return true;
//   }else{
//     router.navigate(['/authentification'])
//     return false;
//   }


};