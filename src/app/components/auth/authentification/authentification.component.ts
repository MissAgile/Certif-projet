import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthentificationService } from 'src/app/services/authentification.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(
    private authenticationService: AuthentificationService,
    private route: Router
  ){}
  //variable
  email:string = "";
  password:string="";
  name:string="";
  phone: number = 0;
  firstName:string="";
  confirmPassword:string="";

 //méthodes
  afficherBloc1: boolean = true;

  basculerBlocs() {
    this.afficherBloc1 = !this.afficherBloc1;
  }

  ngOnInit(): void {

   
  }
//fonction conection
   login() {
      console.log(this.email, this.password);
      if (this.email == '' || this.password == '') {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: '',
          text: 'Veillez remplir les champs',
          showConfirmButton: true,
        });
      } else if (this.email.endsWith('@') || !this.email.includes('.')) {
        // Vérifie si l'email se termine juste par @
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: '',
          text: 'Veillez saissir un email valide',
          showConfirmButton: true,
        });
      } else {
        let user = {
          email: this.email,
          password: this.password,
        };
  
        let response: any;
        this.authenticationService.login(user).subscribe(
          (rep) => {
            response = rep;
            console.log(response);
            

            console.log(response.access_token);
            localStorage.setItem("userOnline", JSON.stringify(response.utlisatur));
            localStorage.setItem("access_token", JSON.stringify(response.access_token).replace(/['"]+/g, ''));
            if (response) {
              if(response.utlisatur.role_id === 1){
                this.route.navigate(['utilisateurs/accueilutilisateurs']); 
              }else{
                this.route.navigate(['dashboard-admin/accueil-admin']); 
              }
              // console.log ("C'est bon");
              
              // Swal.fire({
              //   position: 'center',
              //   icon: 'success',
              //   title: '',
              //   text: response.message,
              //   showConfirmButton: true,
              // });
  
              // this.route.navigate(['/accueil']); 

              // this.authenticationService.isAuthenticated = true; // Définit la variable isAuthicated à true pour la guard
  
              // On stocke les info de la requete dans notre localstorage
  
              // this.iscorrectValues = true; //Les données fournies sont correctes
            } else {
              console.log("L'adresse email est incorrecte");
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: '',
                text: 'Veillez saissir un email valide',
                showConfirmButton: true,
              });
            }
          },
          (error) => {
            // this.iscorrectValues = false;
            console.log(error);
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: '',
              text: 'Les informations sont incorrectes',
              showConfirmButton: true,
            });
          }
        );
      }
    }
//fonction inscription
register() {
  console.log(this.firstName, this.name, this.phone, this.email, this.password, this.confirmPassword);
  if (this.name == '' || this.firstName == '' || this.phone == 0 || this.email == '' || this.password == '' || this.confirmPassword == '') {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: '',
      text: 'Veuillez remplir tous les champs',
      showConfirmButton: true,
    });
  } else if (this.email.endsWith('@') || !this.email.includes('.')) {
    // Vérifie si l'email se termine juste par @
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: '',
      text: 'Veuillez saisir un email valide',
      showConfirmButton: true,
    });
  } else {
    let user = {
      name: this.name,
      firstName: this.firstName,
      phone: this.phone,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    this.authenticationService.register(user).subscribe(
      (response) => {
        console.log(response);
        if (response) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '',
            text:'Inscription reuissis' ,
            showConfirmButton: true,
          });

          // Réinitialiser les valeurs des champs après inscription réussie
          this.name = '';
          this.firstName = '';
          this.phone = 0;
          this.email = '';
          this.password = '';
          this.confirmPassword = '';

          // Redirection vers le dashboard concerné
          this.route.navigate(['/authentification']);

          // Stocker les informations de l'utilisateur connecté dans le localStorage
          localStorage.setItem('userConnect', JSON.stringify(response));
        } else {
          console.log("L'adresse email est incorrecte");
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: '',
            text: 'Veuillez saisir un email valide',
            showConfirmButton: true,
          });
        }
      },
      (error) => {
        console.log(error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: '',
          text: 'Les informations sont incorrectes',
          showConfirmButton: true,
        });
      }
    );
  }
}




}
