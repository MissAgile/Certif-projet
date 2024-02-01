import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-dashboard-utilisateur',
  templateUrl: './dashboard-utilisateur.component.html',
  styleUrls: ['./dashboard-utilisateur.component.css']
})
export class DashboardUtilisateurComponent implements OnInit{

  constructor(
private authentificationService: AuthentificationService

  ){

  }
  dtOptions: DataTables.Settings = {};
   //variable
   email:string = "";
   password:string="";
   name:string="";
   phone: number = 0;
     firstName:string="";
   confirmPassword:string="";
   role_id:any;


   //variable deatails
     //update demande 
  userObjet: any;
  nameUpdate: any;
  firstNameUpdate: any;
  emailUpdate: any;
  passwordUpdate: any;
  phoneUpdate: any;
  role_idUpdate: any;
  // categorieUpdate: any;


listeUsers: any;
userSelectionner: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };

    this.getAllUsers();
  }

  //fonction pour lister les utilisateur
   /** fonction pour lister un bien */
   getAllUsers() {
    console.log(this.listeUsers);
    this.authentificationService.getAllUsers().subscribe(
      (data) => {
        console.log(data);

        this.listeUsers = data.utilisateurs;
        console.log(this.listeUsers);

      }
    )
  }

    /**fonction pour détails utilisateurs*/
  //details demande 
  getUserById(id: number) {
    this.authentificationService.getUserById(id).subscribe(
      (data) => {
        this.listeUsers = data.utilisateurs;
        ({
          name: this.nameUpdate,
          firstName: this.firstNameUpdate,
          email: this.emailUpdate,
          phone: this.phoneUpdate,
          password: this.passwordUpdate,
          role_id: this.role_idUpdate,
          etat: data.etat,
        } = this.userSelectionner);
      }
    )
  }


}
