import { Component } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';

@Component({
  selector: 'app-gestion-annonces',
  templateUrl: './gestion-annonces.component.html',
  styleUrls: ['./gestion-annonces.component.css']
})
export class GestionAnnoncesComponent {

  constructor(private biensServices:BiensService){}
  //Variable pour bien
  libelle: string = "";
  description: string = "";
  lieu: string = "";
  image: string = "";
  categorie_id: number = 0;




  listeBiens: any[] = [];

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
  this.biensServices.getAllBiens().subscribe(
    (responses) => {
      console.log(this.listeBiens);

      this.listeBiens = responses;
   
      console.log(this.listeBiens);
      
    }
  )
}
}
