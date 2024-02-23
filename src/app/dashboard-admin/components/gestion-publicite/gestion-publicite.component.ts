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
  val: any;


  constructor(private publiciteServices: PubliciteService) { }

  //variable pour la liste des 
  date_debut: any;
  date_fin: any;
  email: any;
  nom: any;
  phone: any;
  image: any;
  
  montant:number=0;

  pubId!:number;
  // public pubId: number="";


  listePubs: any[] = [];
  dataPayement: any[] = [];
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
    this.publiciteServices.getAllPubs().subscribe((data) => {
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
    this.publiciteServices.addPub(formData).subscribe((response) => {
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
  chargerInfosPub(bien: any) {
    this.pubSelctionner = bien.id;
    console.log(bien);
    this.date_debut = bien.date_debut;
    this.date_fin = bien.date_fin;
    this.email = bien.email;
    this.nom = bien.nom;
    this.image = bien.image;
    this.phone = bien.phone;
  }

  // fonction pour modifier  
  editerPubs() {

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
    this.pubSelctionner.updateBien(this.pubSelctionner, formData).subscribe((response: any) => {

      console.log(response);


    }
    );
    this.ngOnInit();
    this.getAllPubs();
    this.listePubs;
  }

  /**fonction pour détails bien  */
  detailPub(id: number) {
    this.publiciteServices.getPubById(id).subscribe((rep) => {
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
        alert(this.montant)
        
        this.publiciteServices.accepterPubById(idPub).subscribe((response: any) => {
          console.log(response);
          console.log(this.montant);
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

  bienObejt: any;
  chargerInfos(data: any) {
    this.montant = data.id;
    // this.pubSelctionner = data.id; 
    console.log(data);
    this.val = data;
    alert(this.val)
    console.log(this.montant);
    
    


  }

  // accepterPub(id: number) {
  //   let idPub = id;
  //   this.publiciteServices.accepterPubById(idPub).subscribe((response) => {
  //     console.log(response);
  //   }
  //   );
  //   (error: any) => {
  //     console.error('Erreur lors de la récupération des catégories', error);
  //   }
  //   this.ngOnInit();


  // }

  
}
