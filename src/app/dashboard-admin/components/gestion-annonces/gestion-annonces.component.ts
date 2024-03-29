import { Component } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';

@Component({
  selector: 'app-gestion-annonces',
  templateUrl: './gestion-annonces.component.html',
  styleUrls: ['./gestion-annonces.component.css']
})
export class GestionAnnoncesComponent {

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

    this.getAllBiens();
}


//fonction pour lister

getAllBiens() {
  console.log(this.listeBiens);
  this.biensServices.ListeBiensToutType().subscribe(
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


    /**fonction pour détails bien  */
    detailBien(id: number) {
      this.biensServices.getBienById(id).subscribe((rep) => {
        console.log(rep);
        this.bienSelectionner = rep.data;
  
      });
    }
}
