import { Component,OnInit } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';
;
@Component({
  selector: 'app-accueil-admin',
  templateUrl: './accueil-admin.component.html',
  styleUrls: ['./accueil-admin.component.css']
})
export class AccueilAdminComponent implements OnInit {
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

  constructor(private biensServices: BiensService) { }

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
  this.getAllBiens(21);
  }


/** fonction pour lister les bien */
getAllBiens(id:any) {
  console.log(this.listeBiens);
  this.biensServices.getRecentsBiens(id).subscribe(
    (responses) => {
      console.log(responses);
      this.listeBiens = responses.data;
      console.log(responses.data);

    }
  )
}
}
