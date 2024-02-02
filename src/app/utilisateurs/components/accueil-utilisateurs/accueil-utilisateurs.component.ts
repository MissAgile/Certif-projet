import { Component, OnInit } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';

@Component({
  selector: 'app-accueil-utilisateurs',
  templateUrl: './accueil-utilisateurs.component.html',
  styleUrls: ['./accueil-utilisateurs.component.css']
})
export class AccueilUtilisateursComponent implements OnInit {
  dtOptions: DataTables.Settings = {};


  /** déclaration vvariable pour bien */
  libelle: string = "";
  lieu: string = "";
  description: string = "";
  date: any;
  image: any;
  categorie_id: any;


  listeBiens: any[] = [];

  bienSelectionner: any = {};

  constructor(private bienService: BiensService) { }

  // getFile(event: any) {
  //   console.warn(event.target.files[0]);
  //   this.image = event.target.files[0] as File;
  // }

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

this.getAllBiens();
  }

  
 /** fonction pour lister un bien */
 getAllBiens() {
  console.log(this.listeBiens);
  this.bienService.getAllBiens().subscribe(
    (responses) => {
      console.log(responses);

      this.listeBiens = responses.data;
      console.log(responses.data);

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
    this.bienService.addAnnonce(formData).subscribe((response) => {
      console.log(response);
      console.log(this.image);



    }
    );
    this.ngOnInit();
  }
  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }
}


