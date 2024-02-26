import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-gestion-myprofil',
  templateUrl: './gestion-myprofil.component.html',
  styleUrls: ['./gestion-myprofil.component.css']
})
export class GestionMyprofilComponent implements OnInit {
  tabInfo: any[] = [];

  constructor(private authentificationService: AuthentificationService) { }
  email: any;
  password: any;
  name: any;
  phone: any;
  firstName: any;
  confirmPassword: any;
  role_id: any;

  //var pour changer password
  current_password = "";
  new_password = "";
  confirm_password = "";


  verifCurentPassword:string ="";
  verifNewPassword:string ="";
  verifConfirmPassword:string ="";

  // Variables si les champs sont exacts
  exactCurentPassword: boolean = false;
  exactNewPassword: boolean = false;
  exactConfirmPassword: boolean = false;

  dbUsers: any;
  userConnect: any;
  ngOnInit() {
    // Récupérer les informations de l'utilisateur connecté depuis le stockage local
    const dbUsers = JSON.parse(localStorage.getItem("userOnline") || "{}");

    /**Affecter les informations de l'utilisateur connecté à la variable userConnect */
    this.userConnect = dbUsers;

    console.log('données de l\'utilisateur connecté :', this.userConnect);

  }


  /**fonction pour modifier un profil */
  modifierUtilisateur() {
    // Appeler le service pour mettre à jour les informations de l'utilisateur
    this.authentificationService.updateProfil(this.userConnect).subscribe(
      (response) => {
        console.log('Informations utilisateur mises à jour avec succès :', response);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour des informations utilisateur :', error);
      }
    );
  }

  /**fonction pour modifier un profil */
  //  modifierPassword() {
  //   // Appeler le service pour mettre à jour les informations de l'utilisateur
  //   this.authentificationService.updatePassword().subscribe(
  //     (response) => {
  //       console.log('Informations utilisateur mises à jour avec succès :', response);
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la mise à jour des informations utilisateur :', error);
  //     }
  //   );
  // }

  modifierPassword() {
    const data = {
      current_password: this.current_password,
      new_password: this.new_password,
      confirm_password: this.confirm_password
    }

    
    this.authentificationService.updatePassword(data).subscribe((response) => {
      console.log(response);
    }
    );
    this.viderChamps();
    (error: any) => {
      console.error('Erreur lors de la récupération des catégories', error);
    }

    this.ngOnInit();

  }

  /**fonction qui permet  */
  viderChamps(){
    this.current_password = '';
    this.new_password = '';
    this.confirm_password = '';
}

verifCurentPasswordFonction(){
  this.exactCurentPassword = false;
if(this.current_password == ""){
  this.verifCurentPassword = "Veuillez renseigner votre mot de passe";
}
else if (this.current_password.length < 8 ){
  this.verifCurentPassword = "Mot de passe doit être supérieur ou égal à 5";
}
else{
  this.verifCurentPassword = "";
  this.exactCurentPassword = true;
}
}

verifNewPasswordFonction(){
  this.exactNewPassword = false;
if(this.new_password == ""){
  this.verifNewPassword = "Veuillez renseigner votre mot de passe";
}
else if (this.new_password.length < 8 ){
  this.verifNewPassword = "Mot de passe doit être supérieur ou égal à 5";
}
else{
  this.verifNewPassword = "";
  this.exactNewPassword = true;
}
}

verifCofirmPasswordFonction(){
  this.exactConfirmPassword = false;
if(this.confirm_password == ""){
  this.verifConfirmPassword = "Veuillez renseigner votre mot de passe";
}
else if (this.confirm_password.length < 8 ){
  this.verifConfirmPassword = "Mot de passe doit être supérieur ou égal à 5";
}
else{
  this.verifConfirmPassword = "";
  this.exactConfirmPassword = true;
}
}
}
