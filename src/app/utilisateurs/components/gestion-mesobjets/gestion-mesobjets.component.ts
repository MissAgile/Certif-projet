import { Component } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';
import { Data } from 'src/app/models/bien';
import Swal from 'sweetalert2';
import { data } from 'jquery';
import { CategoriesService } from 'src/app/services/categories.service';

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
  type_bien = "";



  //variables pour modifier
  //update demande 
  bienObjet: any;
  libelleUpdate: any;
  descriptionUpdate: any;
  lieuUpdate: any;
  dateUpdate: any;
  imageUpdate: any;
  categorieUpdate: any;


/** liste et tableau bien pour bien */
  listeBiens: any[] = [];
  listeBiensPerdu: any[] = [];
  bienSelectionner: any = {};

  /**liste et tableau pour categorie */
  categories: any = ""; //tableau categories
  selectedCategory: any = {};
  
  /**varibale pour le stockage de la date */
  currentDate: string = this.getCurrentDate();


  
  constructor(private biensServices: BiensService, private categoriesService: CategoriesService) { }


  dtOptions: DataTables.Settings = {};

   //varibale pour cacher et afficher les tableau des bien trouvés ou perdus
 afficherBloc1: boolean = true;
 afficherBloc2: boolean = true;


/**varibale pour cacher et afficher les tableau des bien trouvés ou perdus */
 basculerBlocs() {
   this.afficherBloc1 = !this.afficherBloc1;
 }
 basculerBlocs2() {
  this.afficherBloc2 = !this.afficherBloc2;
}

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

    this.getBiensUserPerdu();

    this.getBiensUser();
    // this.getDemandeById(id:number);  // Appelez la méthode avec l'ID approprié.
    this.getAllCategories();
  }
  

  getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
  }


  /** fonction pour lister categorie à selectionner lors de l'ajout */
  
  getAllCategories() {
    console.log(this.categories);
    this.categoriesService.getAllCategories().subscribe(
      (data) => {
        console.log(data);
        this.categories = data.categorie;
        console.log(this.categories);

      }
    )
  }
  /** fonction pour lister les bien trouvé */
  getBiensUser() {
    console.log(this.listeBiens);
    this.biensServices.getBiensTrooveUser().subscribe(
      (responses) => {
        console.log(responses);
        this.listeBiens = responses.data;
        console.log(responses.data);
      }
    )
  }

  /** fonction pour lister les bien trouvé */
  getBiensUserPerdu() {
    console.log(this.listeBiensPerdu);
    this.biensServices.getBiensLooseUser().subscribe(
      (responses) => {
        console.log(responses);
        this.listeBiensPerdu = responses.data;
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
    formData.append("type_bien", this.type_bien);
    console.log(formData);
    this.biensServices.addAnnonce(formData).subscribe((response) => {
      console.log(response);
      console.log(this.image);
    }
    );
    this.viderChamps();

  }
  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }


  /**modifier objet */
  bienObejt: any
  chargerInfosBien(data: any) {
    this.bienSelectionner = data.id;
    console.log(data);
    this.libelle = data.libelle;
    this.description = data.description;
    this.lieu = data.lieu;
    this.image = data.image;
    this.date = data.date;
    this.categorie_id = data.categorie_id;
    this.type_bien = data.type_bien;


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
    formData.append("type_bien", this.type_bien);
    console.log(formData);


    console.log(this.bienSelectionner);
    console.log(formData)
    this.biensServices.updateBien(this.bienSelectionner, formData).subscribe((response) => {

      console.log(response);


    }
    );
    this.ngOnInit();
    this.getBiensUser();
    this.listeBiens;
  }

  viderChamps() {
    this.libelle = '';
    this.description = '';
    this.image = '';
    this.date = '';
    this.categorie_id = '';
    this.lieu = '';
    this.type_bien = '';

  }

}
