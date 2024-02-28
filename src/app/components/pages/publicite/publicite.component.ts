import { Component, OnInit } from '@angular/core';
import { PubliciteService } from 'src/app/services/publicite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publicite',
  templateUrl: './publicite.component.html',
  styleUrls: ['./publicite.component.css']
})
export class PubliciteComponent implements OnInit{
  val: any;


  constructor(private publiciteServices: PubliciteService) { }

  //variable pour la liste des publicités
  date_debut: any;
  date_fin: any;
  email: any;
  nom: any;
  phone: any;
  image: any;

  /** tableau des publicités */
  listePubs: any[] = [];
  listePubsPublics: any[] = [];
  dataPayement: any[] = [];
  pubSelctionner: any;

  ngOnInit(): void {
    this.getAllPubsPublic();
  }

  /**fonction pour lister les publicités */
  getAllPubsPublic() {
    this.publiciteServices.getAllPubsPublics().subscribe((data) => {
      this.listePubsPublics = data.publicites;
      console.log(this.listePubsPublics);

    })
  }

   /*fonction ajout publicité **/
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

    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière après cette action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2ECC71',
      cancelButtonColor: '#001F3F',
      confirmButtonText: 'Oui, ajouter!',
    }).then((result)=>{
      console.log(result);
      if(result.isConfirmed){
         this.publiciteServices.addPub(formData).subscribe((response) => {
      
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'Bravo!',
        text: 'Message envoyé avec succès',
        timer: 1000,
        showConfirmButton: false
      });
    }
    );

      }
      
    })
   
  }

  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }
}
