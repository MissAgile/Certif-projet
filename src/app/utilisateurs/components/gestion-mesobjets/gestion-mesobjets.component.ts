import { Component } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';

@Component({
  selector: 'app-gestion-mesobjets',
  templateUrl: './gestion-mesobjets.component.html',
  styleUrls: ['./gestion-mesobjets.component.css']
})
export class GestionMesobjetsComponent {
/** déclaration vvariable pour bien */
  libelle: string = "";
  lieu: string = "";
  description: string = "";
  date :any;
  image:any;
  categorie_id="";

  listeBiens: any[] = [];
  bienSelectionner: any = {};



  constructor(private biensServices:BiensService){}


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

    this.getAllBiens();
}
/** fonction pour lister un bien */

getAllBiens() {
  console.log(this.listeBiens);
  this.biensServices.getAllBiens().subscribe(
    (data) => {
      console.log(data);
      
      this.listeBiens = data.biens;
      console.log(this.listeBiens);
      
    }
  )
}

bienObejt:any
  chargerInfosTest(bien:any){
    this.bienSelectionner = bien.id;
    console.log(bien);
    this.libelle = bien.lieu;
    this.description = bien.email;
    this.lieu = bien.details;
    
  }


// fonction pour modifier  
modifierBien() {
  //libelle, lieu, description , date, image, categorie_id
  
  const data = {
    libelle: this.libelle,
    description: this.description,
    lieu: this.lieu,
    categorie_id: this.categorie_id,
    
  }
  console.log(this.bienSelectionner);
  console.log(data)
  this.biensServices.updateBien(this.bienSelectionner, data).subscribe((response) => {

    console.log(response);
    
    
  }
  );
  
  this.getAllBiens();
}



}
