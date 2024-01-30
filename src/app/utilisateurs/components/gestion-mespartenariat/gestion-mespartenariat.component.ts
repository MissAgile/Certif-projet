import { Component, OnInit } from '@angular/core';
import { DemandesService } from 'src/app/services/demandes.service';

@Component({
  selector: 'app-gestion-mespartenariat',
  templateUrl: './gestion-mespartenariat.component.html',
  styleUrls: ['./gestion-mespartenariat.component.css']
})
export class GestionMespartenariatComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(private demandesService:DemandesService){}
  //variable à initaliser et mettre au niveau du ng model
  duree: number = 0;
  details: string = "";
  email: string = "";

  //update demande 
  dureeUpdate!: any;
  detailsUpdate!: any;
  emailUpdate!: any ;

  listeDemandes: any[] = [];
  demandeSelectionner: any = {};




  

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


    this.getAllDemandes();
  }

  // fonction pour ajouter
  ajoutDemande() {
    //libelle, lieu, description , date, image, categorie_id
    
    const data = {
      duree: this.duree,
      details: this.details,
      email: this.email,
      
    }
    this.demandesService.addDemande(data).subscribe((response) => {
      console.log(response);

    }
    );

  }

  
//fonction pour lister
  getAllDemandes() {
      this.demandesService.getAllDemandes().subscribe(
        (data) => {
          this.listeDemandes = data.demandes;
          // console.log(this.listeDemandes);
          
        }
      )
    }

    //details demande 
    getDemandeById(id: number){
      document.getElementById("btn-modal-edit")?.click();
      this.demandesService.getDemandeById(id).subscribe((data) => {
      this.demandeSelectionner = data.demande;
      console.log(this.demandeSelectionner);        
    });
    
    console.log(this.demandeSelectionner.duree);
    console.log(this.demandeSelectionner.details);
    console.log(this.demandeSelectionner.email);   
    
    // this.demandeSelectionner.email; = document.getElementById("test").innerHTML;
  } 

  demandeObejt:any
  chargerInfosTest(demande:any){
    this.demandeSelectionner = demande.id;
    console.log(demande);
    this.duree = demande.duree;
    this.email = demande.email;
    this.details = demande.details;
    
  }
  



// fonction pour modifier  
modifierDemande() {
  //libelle, lieu, description , date, image, categorie_id
  
  const data = {
    duree: this.duree,
    details: this.details,
    email: this.email,
    
  }
  console.log(this.demandeSelectionner);
  console.log(data)
  this.demandesService.updateDemande(this.demandeSelectionner, data).subscribe((response) => {

    console.log(response);
    
    
  }
  );
  
  this.getAllDemandes();
}





}




