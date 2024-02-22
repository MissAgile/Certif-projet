import { Component,OnInit } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';
;
@Component({
  selector: 'app-accueil-admin',
  templateUrl: './accueil-admin.component.html',
  styleUrls: ['./accueil-admin.component.css']
})
export class AccueilAdminComponent implements OnInit {
  categoriesService: any;
  // dtOptions: DataTables.Settings = {};

    /** déclaration vvariable pour bien */
   

 
    constructor(private biensServices:BiensService){}
 
    /** déclaration vvariable pour bien */
    libelle: string = "";
    lieu: string = "";
    description: string = "";
    date: any;
    image: any;
    categorie_id: any;
    type_bien="";

    
  
  
    listeBiens: any[] = [];
  
    bienSelectionner: any = {};
  
    /**liste et tableau pour categorie */
    categories: any = ""; //tableau categories
    selectedCategory: any = {};
  
    /**varibale pour le stockage de la date */
    currentDate: string = this.getCurrentDate();
  
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
  
      this.getAllbiens();
      this.getAllCategories();
  }
  
  /**fonction qui gere les date anterieur à selectionner et qui desacive les dates futur Format YYYY-MM-DD */
  getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0];
  }

  
  /** fonction pour lister categorie à selectionner lors de l'ajout */
  getAllCategories() {
    console.log(this.categories);
    this.categoriesService.getAllCategories().subscribe(
      (data:any) => {
        console.log(data);
        this.categories = data.categorie;
        console.log(this.categories);

      }
    )
  }
  
  //fonction pour lister
  
  getAllbiens() {
    console.log(this.listeBiens);
    this.biensServices.ListeBiensToutType().subscribe(
      (responses) => {
        console.log(responses);
        this.listeBiens = responses.data;
        console.log(responses.data);
  
      }
    )
  }
  
  /**fonction pour détails bien  */
  detailBien(id: number) {
    this.biensServices.getBienById(id).subscribe((rep) => {
      console.log(rep);
      this.bienSelectionner = rep.data;

    });
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
    formData.append("type_bien", this.type_bien);
    console.log(formData);


    console.log(this.bienSelectionner);
    console.log(formData)
    this.biensServices.updateBien(this.bienSelectionner, formData).subscribe((response) => {

      console.log(response);


    }
    );
    this.ngOnInit();
    this.getAllbiens();
    this.listeBiens;
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
}
