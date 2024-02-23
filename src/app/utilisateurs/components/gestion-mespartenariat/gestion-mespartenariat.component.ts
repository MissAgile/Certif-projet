import { Component, OnInit } from '@angular/core';
import { DemandesService } from 'src/app/services/demandes.service';
import { PubliciteService } from 'src/app/services/publicite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-mespartenariat',
  templateUrl: './gestion-mespartenariat.component.html',
  styleUrls: ['./gestion-mespartenariat.component.css']
})
export class GestionMespartenariatComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtCategories: DataTables.Settings = {};


  constructor(private publiciteServices: PubliciteService) { }

  //variable pour la liste des 
  date_debut: any;
  date_fin: any;
  email: any;
  nom: any;
  phone: any;
  image: any;


  listePubs: any[] = [];
  pubSelctionner: any;


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

  getAllPubs() {
    this.publiciteServices.getAllPubsUser().subscribe((data:any) => {
      this.listePubs = data.publicites;
      console.log(this.listePubs);

    })
  }





  /*fonction ajout bien **/
  ajoutPub() {
    //libelle, lieu, description , date, image, categorie_id
    let formData = new FormData();
    formData.append("date_debut", this.date_debut);
    formData.append("date_fin", this.date_fin);
    formData.append("email", this.email);
    formData.append("nom", this.nom);
    formData.append("phone", this.phone);
    formData.append("image", this.image);
    console.log(formData);
    this.publiciteServices.addPub(formData).subscribe((response:any) => {
      console.log(response);
      console.log(this.image);
    }
    );

  }

  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }

  /**fonction pour accepter une demande d'un utilisateur */

  demandeObejt: any
  chargerInfosPub(pub: any) {
    this.pubSelctionner = pub.id;
    console.log(pub);
    this.date_debut = pub.date_debut;
    this.date_fin = pub.date_fin;
    this.email = pub.email;
    this.nom = pub.nom;
    this.image = pub.image;
    this.phone = pub.phone;
  }

  // fonction pour modifier  
  // editerPubs() {

  //   let formData = new FormData();
  //   formData.append("date_debut", this.date_debut);
  //   formData.append("date_fin", this.date_fin);
  //   formData.append("email", this.email);
  //   formData.append("nom", this.nom);
  //   formData.append("phone", this.phone);
  //   formData.append("image", this.image);
  //   console.log(formData);
  //   console.log(this.pubSelctionner);
  //   console.log(formData)
  //   this.publiciteServices.updatePub(this.pubSelctionner, formData).subscribe((response: any) => {

  //     console.log(response);


  //   }
  //   );
  //   this.ngOnInit();
  //   this.getAllPubs();
  //   this.listePubs;
  // }


  editerPub() {
    let formData = new FormData();
    formData.append("date_debut", this.date_debut);
    formData.append("date_fin", this.date_fin);
    formData.append("email", this.email);
    formData.append("nom", this.nom);
    formData.append("phone", this.phone);
    formData.append("image", this.image);
    console.log(formData);


    console.log(this.pubSelctionner);
    console.log(formData)
    this.publiciteServices.updatePub(this.pubSelctionner, ).subscribe((response) => {

      console.log(response);


    }
    );
    this.ngOnInit();
    this.getAllPubs();
    this.listePubs;
  }


  /**fonction pour détails bien  */
  detailPub(id: number) {
    this.publiciteServices.getPubById(id).subscribe((rep:any) => {
      console.log(rep);
      this.pubSelctionner = rep.publicite;

    });
  }

  /**fonction pour supprimer la publicité d'un utilisateur */
  SupprimerPub(id: number) {
    let idPub = id;
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir mofifier une pub?',
      text: 'Vous ne pourrez pas revenir en arrière après cette action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2ecc70',
      cancelButtonColor: '#001F3F',
      confirmButtonText: 'Oui, supprimer!',
    }).then((result) => {
      console.log(result);

      if (result.isConfirmed) {
        this.publiciteServices.deletePub(idPub).subscribe(
          (data: any) => {
            console.log(data);

            this.publiciteServices.alertMessage(
              'success',
              'Supprimé!',
              'Categorie supprimé avec succès'
            );
            this.getAllPubs();
          });
      }
    });
  }

  /**fonction pour accepter une publicité */
  accepterPub(id: number) {
    let idPub = id;
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
        this.publiciteServices.accepterPubById(idPub).subscribe((response: any) => {
          console.log(response);

          this.publiciteServices.alertMessage(
            'success',
            'Supprimé!',
            'Demande acceptée avec succès'
          );

          this.getAllPubs();
        })
      }
    })

  }
  

  // demandeObejt:any
  // chargerInfosTest(demande:any){
  //   this.demandeSelectionner = demande.id;
  //   console.log(demande);
  //   this.duree = demande.duree;
  //   this.email = demande.email;
  //   this.details = demande.details;
    
  // }
 
// fonction pour modifier  
// modifierDemande() {  
//   const data = {
//     duree: this.duree,
//     details: this.details,
//     email: this.email,
    
//   }
//   console.log(this.demandeSelectionner);
//   console.log(data)
//   this.demandesService.updateDemande(this.demandeSelectionner, data).subscribe((response) => {

//     console.log(response);
    
    
//   }
//   );
  
//   this.getAllDemandesUsers();
// }





}




