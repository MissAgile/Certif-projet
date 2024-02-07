import { Component, OnInit } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';
import { WhatshapService } from 'src/app/services/whatshap.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent  implements OnInit{

/** déclaration vvariable pour bien */
libelle: string = "";
lieu: string = "";
description: string = "";
date: any;
image: any;
categorie_id: any;

  //variable user
  id:number=0;
  email:string = "";
  password:string="";
  name:string="";
  phone: number = 0;
  firstName:string="";
  confirmPassword:string="";


//variables pour modifier
//update demande 
bienObjet: any;
libelleUpdate: any;
descriptionUpdate: any;
lieuUpdate: any;
dateUpdate: any;
imageUpdate: any;
categorieUpdate: any;


listeBiens: any[] = [];

bienSelectionner: any = {};


constructor(private biensServices: BiensService, private whatshapService:WhatshapService) { }

ngOnInit(): void {
  this.getAllBiens();
}
 
 /** fonction pour lister les bien */
 getAllBiens() {
  console.log(this.listeBiens);
  this.biensServices.getAllBiens().subscribe(
    (responses) => {
      console.log(responses);

      this.listeBiens = responses.data;
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

messageWhatshap(id: number){
  let userId=id;
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Vous ne pourrez pas revenir en arrière après cette action!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#017D03',
    cancelButtonColor: '#FF9C00',
    confirmButtonText: 'Oui, accepter!',
  }).then((result)=>{
    console.log(result);
    if (result.isConfirmed) {
      this.whatshapService.sendWhatsapp(userId).subscribe((response:any)=>{
        console.log(response);
        
        this.whatshapService.alertMessage(
          'success',
          'Supprimé!',
          'Demande acceptée avec succès'
        );

        
      })
    }
  })
 
}

}
