import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { BiensService } from 'src/app/services/biens.service';
import { WhatshapService } from 'src/app/services/whatshap.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-informations-profil',
  templateUrl: './informations-profil.component.html',
  styleUrls: ['./informations-profil.component.css']
})
export class InformationsProfilComponent {

  /** déclaration vvariable pour bien */
  libelle: string = "";
  lieu: string = "";
  description: string = "";
  date: any;
  image: any;
  categorie_id: any;
  userPhone: any;
  type_bien:any;


  //variable user
  id: number = 7;
  email: string = "";
  password: string = "";
  name: string = "";
  phone: number = 0;
  firstName: string = "";
  confirmPassword: string = "";



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

  bi = {
    userId: 123 // Remplacez 123 par l'identifiant réel de l'utilisateur
  }


  constructor(
    private biensServices: BiensService,
    private whatshapService: WhatshapService,
    private authService: AuthentificationService,
    private router: Router,
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
    const id = this.categorie_id;
    this.getAllBiensHome();
  }

  /** fonction pour lister les bien */
    getAllBiensHome() {
     console.log(this.listeBiensHome);
     this.biensServices. getBienAllType().subscribe(
       (responses) => {
         console.log(responses);

         this.listeBiensHome = responses.data;
         console.log(responses.data);

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
  getBienById(id: number) {
    this.biensServices.getBienById(id).subscribe(
      (data) => {
        this.bienSelectionner = data;
        ({
          libelle: this.libelle,
          description: this.description,
          lieu: this.lieu,
          date: this.date,
          image: this.image,
          userPhone: this.userPhone,
          etat: data.etat,
          categorie_id: this.categorie_id,
          type_bien: this.type_bien,
        } = this.bienSelectionner);
      }
    )
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
      console.log(this.image);
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
      text: 'Vous ne pourrez pas revenir en arrière après cette action!',
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



  // redirectToChatify() {
  //   // Vérifiez si l'utilisateur est connecté
  //   if (this.whatshapService.isLoggedIn()) {
  //     this.router.navigateByUrl('/http://127.0.0.1:8000/chatify/api');
  //   } else {
  //     this.router.navigateByUrl('/authentification'); 
  //   }
  // }
  sendMessage() {
    // this. = data.user;
    // let  phoneNumber = userPhone ; 
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
        this.whatshapService.sendMessageChatify().subscribe((data) => {
          console.log(data, 'ma reponsee');

        });


      }
    })

  };

   /**fonction pour détails bien  */
   detailBien(id: number) {
    this.biensServices.getBienById(id).subscribe((rep) => {
      console.log(rep);
      this.bienSelectionner = rep.data;

    });
  }

}
