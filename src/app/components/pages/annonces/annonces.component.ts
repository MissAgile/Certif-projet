import { Component } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';

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

listeBiens: any[] = [];
tabBienFilter: any[] = [];

bienSelectionner: any = {};

constructor(private biensServices: BiensService) { }

ngOnInit(): void {
  this.getAllBiensHome();
}
 
 /** fonction pour lister les bien */
 getAllBiensHome() {
  console.log(this.listeBiens);
  this.biensServices. ListeBiensToutType().subscribe(
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
}
