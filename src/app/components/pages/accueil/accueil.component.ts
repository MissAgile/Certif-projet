import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { data } from 'jquery';
import { url } from 'src/app/services/apiUrl';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { BiensService } from 'src/app/services/biens.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { WhatshapService } from 'src/app/services/whatshap.service';
import Swal from 'sweetalert2';
import { urlMess } from 'src/app/services/apiMess';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  /** déclaration vvariable pour bien */
  libelle: string = "";
  lieu: string = "";
  description: string = "";
  date: any;
  image: any;
  categorie_id: any;
  userPhone: any;
  type_bien="";

  /**Variables pour faire la vérifications*/
  verifLibelle: string = "";
  verifDescription: string = "";
  verifDate: string = "";
  verifLieu: string = "";
  verifImage: string = "";
  verifCategorie_id: string = "";
  verifType_bien: string = "";

  /**Variables si les champs sont exacts*/
  exactLibelle: boolean = false;
  exactDescription: boolean = false;
  exactDate: boolean = false;
  exactLieu: boolean = false;
  exactImage: boolean = false;
  exactCategorie_id: boolean = false;
  exactType_bien: boolean = false;

  //variable user
  id: any;
  email: string = "";
  password: string = "";
  name: string = "";
  phone: number = 0;
  firstName: string = "";
  confirmPassword: string = ""



  //variables pour modifier
  //update demande 
  bienObjet: any;
  libelleUpdate: any;
  descriptionUpdate: any;
  lieuUpdate: any;
  dateUpdate: any;
  imageUpdate: any;
  categorieUpdate: any;


  listeBiensHome: any[] = [];

  bienSelectionner: any = {};

  categories: any = ""; //tableau categories
  selectedCategory: any = {};

  bi = {
    userId: 123 // Remplacez 123 par l'identifiant réel de l'utilisateur
  }
  /**varibale pour le stockage de la date */
  currentDate: string = this.getCurrentDate();

  /**fonction qui gere les date anterieur à selectionner et qui desacive les dates futur Format YYYY-MM-DD */
  getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0];
  }

  constructor(
    private biensServices: BiensService,
    private whatshapService: WhatshapService,
    private authService: AuthentificationService,
    private router: Router,
    private http: HttpClient,
    private categoriesService: CategoriesService,

  ) { }

  ngOnInit(): void {
    const id = this.categorie_id;
    this.getAllBiensHome();
    this.getAllCategories();
  }


  getAllCategories() {
    console.log(this.categories);
    this.categoriesService.getAllCategories().subscribe(
      (data) => {
        console.log(data);
        this.categories = data.categorie;
        console.log(this.categories);

      }
    )
  }

  /** fonction pour lister les bien */
  getAllBiensHome() {
    console.log(this.listeBiensHome);
    this.biensServices.getBienAllType().subscribe(
      (responses) => {
        console.log(responses);

        this.listeBiensHome = responses.data;
        console.log(responses.data);
        this.id = responses.userId
        console.log('je suis id',this.id);
        

      }
    )
  }

  // getAllBiensHome(id: number): void {
  //   this.biensServices.getRecentsBiens(id).subscribe(
  //     (response) => {
  //       console.log(response);
  //       /**Vérifiez si la réponse et les données sont définies */
  //       if (response && response.data) {
  //         this.listeBiensHome = response.data;
  //         console.log(response.data);
  //       }
  //     },
  //     (error) => {
  //       console.error('Une erreur s\'est produite lors de la récupération des biens récents :', error);
  //     }
  //   );
  // }

  /**fonction pour détails bien */
  /**fonction pour détails bien  */
  bienSelectionnerId:any;
  // detailBien(id: number) {
  //   this.biensServices.getBienById(id).subscribe((rep) => {
  //     console.log(rep);
  //     this.bienSelectionner = rep.id;
  //     this.bienSelectionnerId = rep.data.userId;
  //     console.log('salut',this.bienSelectionnerId);
      

  //   });
  // }
  getObjet(objet:any){
    this.bienSelectionner= objet


  }

  /*fonction ajout bien **/
  ajoutBien() {
    //libelle, lieu, description , date, image, categorie_id
    let formData = new FormData();
    formData.append("libelle", this.libelle);
    formData.append("description", this.description);
    formData.append("image", this.image);
    formData.append("date", this.date);
    formData.append("categorie_id", this.categorie_id);
    formData.append("lieu", this.lieu);
    formData.append("type_bien", this.type_bien);
    console.log(formData);
    this.biensServices.addAnnonce(formData).subscribe((response) => {
      console.log(response);
      console.log(this.type_bien);

    }
    );

  }
  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }


  messageWhatshap(userPhone: number) {
    // this. = data.user;
    let phoneNumber = userPhone;
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous allez le contactacter sur whtashap!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2ecc70',
      cancelButtonColor: '#001F3F',
      confirmButtonText: 'Oui, accepter!',
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {

        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');

      }
    })

  };
  userId:any;
  //  messageWhatshap() {
  //   // this. = data.user;
  //    this.userId =this.bienSelectionner.userId ;
  //   // Swal.fire({
  //   //   title: 'Êtes-vous sûr?',
  //   //   text: 'Vous ne pourrez pas revenir en arrière après cette action!',
  //   //   icon: 'warning',
  //   //   showCancelButton: true,
  //   //   confirmButtonColor: '#2ecc70',
  //   //   cancelButtonColor: '#001F3F',
  //   //   confirmButtonText: 'Oui, accepter!',
  //   // }).then((result) => {
  //   //   console.log(result);
  //     // if (result.isConfirmed) {
  //      this.whatshapService.sendWhatsapp(this.userId).subscribe((response) => {
  //       console.log(response);
  //       console.log(this.userPhone);
  
  //     }
  //     );

  //     // }
  //   // })

  // };

  
  messageTelegram(userPhone: number) {
    // this. = data.user;
    let phoneNumber = userPhone;
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière après cette action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2ecc70',
      cancelButtonColor: '#001F3F',
      confirmButtonText: 'Oui, accepter!',
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        window.open(`tg://open?userphone=${phoneNumber}`, '_blank');


      }
    })



  };

  // sendMessage() {
  //   const accessToken = localStorage.getItem('access_token'); 
  //   // console.log(accessToken);

  //   this.whatshapService.sendMessageChatify().subscribe(
  //     (data) => {
  //       console.log(data);

  //     }
  //   );



  // }

  sendMessage() {
    const accessToken = localStorage.getItem('access_token');
    // console.log(accessToken);

    this.whatshapService.sendMessageChatify().subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  /**fonction qui permet  */
  viderChamps() {
    this.libelle = '';
    this.description = '';
    this.image = '';
    this.date = '';
    this.categorie_id = '';
    this.lieu = '';
    this.type_bien = '';


    /**  On vide les Variables qui permettent de faire la vérifications */
    this.verifLibelle = "";
    this.verifDescription = "";
    this.verifDate = "";
    this.verifImage = "";
    this.verifCategorie_id = "";
    this.verifType_bien = "";


    /** On vide les variables qui vérifient si les champs sont exacts */
    this.exactLibelle = false;
    this.exactDescription = false;
    this.exactDate = false;
    this.exactImage = false;
    this.exactCategorie_id = false;
    this.exactType_bien = false;

  }

  verifLibelleFonction() {
    this.exactLibelle = false;
    if (this.libelle === '') {
      this.verifLibelle = 'Veuillez renseigner le libellé';
    } else if (this.libelle.length < 4) {
      this.verifLibelle = 'Le le libelle  est trop courte';
    } else if (!Validators.pattern(/^[a-zA-Z]+$/)) {
      this.verifLibelle = "Le libelle ne doit contenir que des lettres et des chiffres";
    } else {
      this.verifLibelle = '';
      this.exactLibelle = true;
    }
  }

  /**verification de libelle */
  verifDescriptionFonction() {
    this.exactDescription = false;
    if (this.description == "") {
      this.verifDescription = "Veuillez entrez une description";
    }
    else if (this.description.length < 5) {
      this.verifDescription = "La description est trop courte";
    }
    else {
      this.verifDescription = "";
      this.exactDescription = true;
    }
  }

  /**verification de libelle */
verifLieuFonction() {
  this.exactLieu = false;
  if(this.lieu == ""){
    this.verifLieu = "Veuillez entrez le lieu ";
  }
  else if (this.lieu.length < 2 ){
    this.verifLieu = "Le lieu est trop court";
  }
  else {
    this.verifLieu = "";
    this.exactLieu = true;
  }
}
 /**verification de libelle */
 verifCategorieFonction() {
  this.exactDescription = false;
  if(this.description == ""){
    this.verifDescription = "Veuillez renseigner votre nom";
  }
  else if (this.description.length < 2 ){
    this.verifDescription = "Le nom est trop court";
  }
  else {
    this.verifDescription = "";
    this.exactDescription = true;
  }
}

 /**verification de libelle */
 verifTypeBienFonction() {
  this.exactDescription = false;
  if(this.description == ""){
    this.verifDescription = "Veuillez renseigner votre nom";
  }
  else if (this.description.length < 2 ){
    this.verifDescription = "Le nom est trop court";
  }
  else {
    this.verifDescription = "";
    this.exactDescription = true;
  }
}
};



