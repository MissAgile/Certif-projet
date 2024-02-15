import { Component } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';
import { Data } from 'src/app/models/bien';
import Swal from 'sweetalert2';
import { data } from 'jquery';

@Component({
  selector: 'app-gestion-mesobjets',
  templateUrl: './gestion-mesobjets.component.html',
  styleUrls: ['./gestion-mesobjets.component.css']
})
export class GestionMesobjetsComponent {
  // bienSelectionner: Bien;

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


  listeBiens: any[] = [];

  bienSelectionner: any = {};
  // bienSelectionner: any = {};



  constructor(private biensServices: BiensService) { }


  dtOptions: DataTables.Settings = {};

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

    

    this.getBiens();
    // this.getDemandeById(id:number);  // Appelez la méthode avec l'ID approprié.

  }

  /** fonction pour lister les bien */
  getBiens() {
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
    this.viderChamps;

  }
  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }


  /**modifier objet */
   bienObejt:any
  chargerInfosBien(data:any){
    this.bienSelectionner = data.id;
    console.log(data);
    this.libelle = data.libelle;
    this.description = data.description;
    this.lieu = data.lieu;
    this.image = data.image;
    this.date = data.date;
    this.categorie_id=data.categorie_id;
  
    
  }
 
// fonction pour modifier  
editerBien() {
  let formData = new FormData();
    formData.append("libelle", this.libelle);
    formData.append("description", this.description);
    formData.append("image", this.image);
    formData.append("date", this.date);
    formData.append("categorie_id", this.categorie_id);
    formData.append("lieu", this.lieu);
    console.log(formData);


  console.log(this.bienSelectionner);
  console.log(formData)
  this.biensServices.updateBien(this.bienSelectionner, formData).subscribe((response) => {

console.log(response);
    
    
  }
  );
  this.ngOnInit();
  this.getBiens();
  this.listeBiens;
}

viderChamps(){
  this.libelle = '';
  this.description='';
  this.image ='';
  this.date='';
  this.categorie_id='';
  this.lieu='';
  
}

}
