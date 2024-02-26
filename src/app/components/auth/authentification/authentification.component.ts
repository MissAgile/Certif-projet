import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode'; // Assurez-vous d'installer jwt-decode

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(
    private authenticationService: AuthentificationService,
    private route: Router,
    private router: Router


  ) { }
  //variable
  email: string = "";
  password: string = "";
  name: string = "";
  phone: any;
  firstName: string = "";
  // Password:string="";
  confirmPassword: string = "";

  // Variables pour faire la vérifications
  verifName: string = "";
  verifFirstName:string ="";
  verifEmail:string ="";
  verifPhone:string ="";
  verifPassword:string ="";
  verifConfirmPassword:string ="";

  // Variables si les champs sont exacts
  exactName: boolean = false;
  exactFirstName: boolean = false;
  exactEmail: boolean = false;
  exactPhone: boolean = false;
  exactPassword: boolean = false;
  exactConfirmPassword: boolean = false;

  //méthodes
  afficherBloc1: boolean = true;

  basculerBlocs() {
    this.afficherBloc1 = !this.afficherBloc1;
  }
 

  ngOnInit(): void {


  }

   /** Methode pour vider les champs */ 
   viderChamps(){
    // On vide les valeurs des champs input 
    this.name = "";
    this.firstName="";
    this.email="";
    this.phone="";
    this.password="";
   

    /**  On vide les Variables qui permettent de faire la vérifications */
    this.verifName = "";
    this.verifFirstName= "";
    this.verifEmail= "";
    this.verifPhone= "";
    this.verifConfirmPassword= "";
    

    /** On vide les variables qui vérifient si les champs sont exacts */ 
    this.exactName = false;
    this.exactFirstName = false;
    this.exactEmail = false;
    this.exactPhone = false;
    this.exactConfirmPassword = false;
    
  }

  verifierChamps(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

    /**Verification du nom*/
    verifNomFonction() {
      this.exactName = false;
      if(this.name == ""){
        this.verifName = "Veuillez renseigner votre nom";
      }
      else if (this.name.length < 2 ){
        this.verifName = "Le nom est trop court";
      }
      else {
        this.verifName = "";
        this.exactName = true;
      }
    }

 /**Verification du prenom*/
    verifFirstNameFonction() {
      this.exactFirstName = false;
      if(this.firstName == ""){
        this.verifFirstName = "Veuillez renseigner votre nom";
      }
      else if (this.firstName.length < 2 ){
        this.verifFirstName = "Le nom est trop court";
      }
      else {
        this.verifFirstName = "";
        this.exactFirstName = true;
      }
    }


  
    // Verification de  l'email 
  verifEmailFonction(){
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
    this.exactEmail = false;
    
    if(this.email == ""){
      this.verifEmail = "Veuillez renseigner votre email";
    }
    else if (!this.email.match(emailPattern) ){
      this.verifEmail = "Veuillez donner un email valide";
    }
    else {
      this.verifEmail = "";
      this.exactEmail = true;
    }
  }

  // Verification de  téléphone 
  verifPhoneFonction(){
    this.exactPhone = false;
    if(this.phone == ""){
      this.verifPhone = "Veuillez renseigner votre numero de téléphone";
    }
    else if (this.phone.length < 9 ){
      this.verifPhone = "Le numero  est trop court";
    }
    else {
      this.verifPhone = "";
      this.exactPhone = true;
  }
  }

    
    verifPasswordFonction(){
      this.exactPassword = false;
    if(this.password == ""){
      this.verifPassword = "Veuillez renseigner votre mot de passe";
    }
    else if (this.password.length < 8 ){
      this.verifPassword = "Mot de passe doit être supérieur ou égal à 5";
    }
    else{
      this.verifPassword = "";
      this.exactPassword = true;
    }
    }

/** Verification confirmation  du password */ 
    verifConfirmPasswordFonction(){
      this.exactConfirmPassword = false;
    if(this.confirmPassword== ""){
      this.verifConfirmPassword = "Veuillez renseigner votre mot de passe";
    }
    else if (this.confirmPassword.length < 8 ){
      this.verifConfirmPassword = "Mot de passe doit être supérieur ou égal à 5";
    }
    else{
      this.verifConfirmPassword = "";
      this.exactConfirmPassword = true;
    }
    }

  // validateEmail(email: string): boolean {
  //   const emailRegex = /^[A-Za-z]+[A-Za-z0-9\._%+-]+@[A-Za-z0-9\.-]+\.[A-Za-z]{2,}$/;
  //   return emailRegex.test(email);
  // }
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
            if (response.utlisatur.role_id === 1) {
              this.route.navigate(['/accueil']);
            } else {
              this.route.navigate(['dashboard-admin/accueil-admin']);
            }
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
          this.viderChamps();
        }
      );
    }
  }



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
              text: 'Inscription reuissis',
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

          let errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
          if (error && error.error && error.error.status_message) {
            errorMessage = error.error.status_message;
          }

          Swal.fire({
            position: 'center',
            icon: 'error',
            title: '',
            text: errorMessage,
            showConfirmButton: true,
          });
        }
      );
    }
    this.viderChamps();
  }

  reinitialiserMotDePass() {
    const data = {
      email: this.email,
      
    }


    this.authenticationService.resetPassword(data).subscribe((response) => {
      console.log(response);
    }
    );
    this.viderChamps();
    (error: any) => {
      console.error('Erreur lors de la récupération email user', error);
    }

    this.ngOnInit();

  }

}

