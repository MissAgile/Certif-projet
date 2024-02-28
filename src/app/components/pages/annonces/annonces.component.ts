import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { BiensService } from 'src/app/services/biens.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { WhatshapService } from 'src/app/services/whatshap.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent {

/** déclaration vvariable pour bien */
libelle: string = "";
lieu: string = "";
description: string = "";
date: any;
image: any;
categorie_id: any;
userPhone: any;
type_bien="";


//variables pour modifier
//update demande 
bienObjet: any;
libelleUpdate: any;
descriptionUpdate: any;
lieuUpdate: any;
dateUpdate: any;
imageUpdate: any;
categorieUpdate: any;
filterValue: string = "";

listeBiensHome: any[] = [];
listeBiens: any[] = [];
tabBienFilter: any[] = [];

bienSelectionner: any = {};

constructor(
  private biensServices: BiensService,
  private whatshapService: WhatshapService,
  private authService: AuthentificationService,
  private router: Router,
  private http: HttpClient,
  private categoriesService: CategoriesService,

) { }

ngOnInit(): void {
  this.getAllBiensHome();
}
 
/** fonction pour lister les bien */
getAllBiensHome() {
  console.log(this.listeBiensHome);
  this.biensServices.getBienAllType().subscribe(
    (responses) => {
      console.log(responses);

      this.listeBiensHome = responses.data;
      console.log(responses.data);

    }
  )
}

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
        etat: data.etat,
        categorie_id: this.categorie_id,
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

  // Methode de recherche automatique pour professeur
  // onSearch() {
  //   // Recherche se fait selon le libelle  ou le ou la description 
  //   this.listeBiens = this.tabBienFilter.filter(
  //     (elt: any) => (elt?.libelle.toLowerCase().includes(this.filterValue.toLowerCase()) || elt?.description.toLowerCase().includes(this.filterValue.toLowerCase()))

  //     // (elt: any) => (elt?.libelle.toLowerCase().includes(this.filterValue.toLowerCase()))
  //   );
  // }
  onSearch() {
    // Recherche se fait selon le libelle ou la description
    if (this.filterValue.trim() === '') {
      // Si la valeur de recherche est vide, afficher tous les éléments
      this.listeBiens = this.tabBienFilter;
    } else {
      this.listeBiens = this.tabBienFilter.filter((elt: any) =>
        (elt?.libelle && elt?.libelle.toLowerCase().includes(this.filterValue.trim().toLowerCase())) ||
        (elt?.description && elt?.description.toLowerCase().includes(this.filterValue.trim().toLowerCase()))
      );
    }
  }
 /**fonction pour détails bien  */
 detailBien(id: number) {
  this.biensServices.getBienById(id).subscribe((rep) => {
    console.log(rep);
    this.bienSelectionner = rep.data;

  });
}

sendMessage() {
  const accessToken = localStorage.getItem('access_token');
  // console.log(accessToken);

  this.whatshapService.sendMessageChatify().subscribe(
    (data) => {
      console.log(data);
    }
  );
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
}
