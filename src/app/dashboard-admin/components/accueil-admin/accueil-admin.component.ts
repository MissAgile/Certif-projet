import { Component,OnInit } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';
;
@Component({
  selector: 'app-accueil-admin',
  templateUrl: './accueil-admin.component.html',
  styleUrls: ['./accueil-admin.component.css']
})
export class AccueilAdminComponent implements OnInit {
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
  
  
    listeBiens: any[] = [];
  
    bienSelectionner: any = {};
  
    // listeBiens: any[] = [];
  
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
  
      this.getRecentsBiens(23);
  }
  
  
  //fonction pour lister
  
  getRecentsBiens(id:any) {
    console.log(this.listeBiens);
    this.biensServices.getRecentsBiens(id).subscribe(
      (responses) => {
        console.log(responses);
        this.listeBiens = responses.data;
        console.log(responses.data);
  
      }
    )
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
