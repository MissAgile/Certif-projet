import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-gestion-myprofil',
  templateUrl: './gestion-myprofil.component.html',
  styleUrls: ['./gestion-myprofil.component.css']
})
export class GestionMyprofilComponent implements OnInit {
  tabInfo: any[] = [];

  constructor(private authentificationService: AuthentificationService) {}
  email:any;
   password:any;
   name:any;
   phone: any;
     firstName:any;
   confirmPassword:any;
   role_id:any;

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

}
