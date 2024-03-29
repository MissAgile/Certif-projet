import { Component, OnInit } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';
import { CategoriesService } from 'src/app/services/categories.service';
import Swal from 'sweetalert2';

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
  type_bien="";

 /**Variables pour faire la vérifications*/
 verifLibelle: string = "";
 verifDescription: string = "";
 verifDate: string = "";
 verifImage: string = "";
 verifCategorie_id: string = "";
 verifType_bien: string = "";

  
    /**Variables si les champs sont exacts*/
    exactLibelle: boolean = false;
    exactDescription: boolean = false;
    exactDate: boolean = false;
    exactImage: boolean = false;
    exactCategorie_id: boolean = false;
    exactType_bien: boolean = false;
  



  //variables categorie
  id: number = 0;
  nom: string = "";

  categories: any = ""; //tableau categories
  selectedCategory: any = {};
  // typeBien:any

  nomUpdate: any;
  nomCategoryUpdate = "";
   //fin variables categorie  

  listeBiens: any[] = [];
  bienSelectionner: any = {};



  constructor(
    private bienService: BiensService,
    private categoriesService: CategoriesService
    ) { }

 //méthodes
 afficherBloc1: boolean = true;

 basculerBlocs() {
   this.afficherBloc1 = !this.afficherBloc1;
 }

 verifierChamps(title:any, text:any, icon:any) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  });
}

 /**Verification du libelle*/
 verifLibelleFonction() {
  this.exactLibelle = false;
  if(this.libelle == ""){
    this.verifLibelle = "Veuillez renseigner votre nom";
  }
  else if (this.libelle.length < 2 ){
    this.verifLibelle = "Le nom est trop court";
  }
  else {
    this.verifLibelle = "";
    this.exactLibelle = true;
  }
}

 viderChamps(){
  this.libelle = '';
  this.description='';
  this.image ='';
  this.date='';
  this.categorie_id='';
  this.lieu='';
  this.type_bien='';


   /**  On vide les Variables qui permettent de faire la vérifications */
   this.verifLibelle = "";
   this.verifDescription = "";
   this.verifDate = "";
   this.verifImage = "";
   this.verifCategorie_id = "";
   this.verifType_bien = "";
   

   /** On vide les variables qui vérifient si les champs sont exacts */ 
   this.exactLibelle= false;
   this.exactDescription= false;
   this.exactDate= false;
   this.exactImage= false;
   this.exactCategorie_id= false;
   this.exactType_bien= false;
  
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

this.getAllBiens();
this.getAllCategories();
  }

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
 
 /** fonction pour lister un bien */
 getAllBiens() {
  console.log(this.listeBiens);
  this.bienService.getBiensTrooveUser().subscribe(
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
    formData.append("type_bien", this.type_bien);
    console.log(formData);
    this.bienService.addAnnonce(formData).subscribe((response) => {
      console.log(response);
      console.log(this.image);



    }
    );
    this.ngOnInit();
    this.viderChamps();

  }
  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }


/** fonction pour gerer les validation ajout bien */


}


