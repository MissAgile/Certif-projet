import { Component } from '@angular/core';
import { DemandesService } from 'src/app/services/demandes.service';
import { PubliciteService } from 'src/app/services/publicite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-publicite',
  templateUrl: './gestion-publicite.component.html',
  styleUrls: ['./gestion-publicite.component.css']
})
export class GestionPubliciteComponent {
  dtOptions: DataTables.Settings = {};
  dtCategories: DataTables.Settings = {};


  constructor(private publiciteServices: PubliciteService){}

  //variable pour la liste des 
  media: any;
  demande_id:any;
  

  listePubs: any[] = [];
  pubSelctionner: any ;


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

this.getAllPubs();

}

/**fonction qui permet de lister les demandes de tous les utilisateurs */

getAllPubs(){
  this.publiciteServices.getAllPubs().subscribe((data)=>{
    this.listePubs=data.publicites;
    console.log(this.listePubs);
    
  })
}

/**ajouter une pub */

// ajoutPub() {

//   const data = {
//     media: this.media,
//     demande_id: this.demande_id,
//   }
//   console.log(data);
//   this.publiciteServices.addPub(data).subscribe((response) => {
//     console.log(response);
//   }
//   );
//   (error: any) => {
//     console.error('Erreur lors de la récupération des publicités', error);
//   }

//   this.ngOnInit();

// }



  /*fonction ajout bien **/
  ajoutPub() {
    //libelle, lieu, description , date, image, categorie_id
    let formData = new FormData();
    formData.append("media", this.media);
    console.log(formData);
    this.publiciteServices.addPub(formData).subscribe((response) => {
      console.log(response);
      console.log(this.media);
    }
    );

  }

  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.media = event.target.files[0] as File;
  }

/**fonction pour accepter une demande d'un utilisateur */
}
