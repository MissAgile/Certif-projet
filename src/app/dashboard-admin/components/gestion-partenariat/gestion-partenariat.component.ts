import { Component } from '@angular/core';
import { DemandesService } from 'src/app/services/demandes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-partenariat',
  templateUrl: './gestion-partenariat.component.html',
  styleUrls: ['./gestion-partenariat.component.css']
})
export class GestionPartenariatComponent {
  dtOptions: DataTables.Settings = {};

  constructor(private demandeServices: DemandesService){}

  //variable pour la liste des 
  duree: number = 0;
  details: string = "";
  email: string = "";

  listeDemandesUsers: any[] = [];
  demandeSelectionnerUsers: any ;


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

this.getDemandesUsers();

}

/**fonction qui permet de lister les demandes de tous les utilisateurs */

getDemandesUsers(){
  this.demandeServices.getAllDemandes().subscribe((data)=>{
    this.listeDemandesUsers=data.demandes;
    console.log(this.listeDemandesUsers);
    
  })
}

/**fonction pour accepter une demande d'un utilisateur */
accepterDemande(id: number){
  let idDemande = id;
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Vous ne pourrez pas revenir en arrière après cette action!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#017D03',
    cancelButtonColor: '#FF9C00',
    confirmButtonText: 'Oui, supprimer!',
  }).then((result)=>{
    console.log(result);
    if (result.isConfirmed) {
      this.demandeServices.accepterDemandeUser(idDemande).subscribe((response:any)=>{
        console.log(response);
        
        this.demandeServices.alertMessage(
          'success',
          'Supprimé!',
          'Categorie supprimé avec succès'
        );

        this.getDemandesUsers();
      })
    }
  })
 
}
refuserDemandeUser(id: number){
  let idDemande = id;
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Vous ne pourrez pas revenir en arrière après cette action!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#017D03',
    cancelButtonColor: '#FF9C00',
    confirmButtonText: 'Oui, refuser!',
  }).then((result)=>{
    console.log(result);
    if (result.isConfirmed) {
      this.demandeServices.refuserDemandeUser(idDemande).subscribe((response:any)=>{
        console.log(response);
        
        this.demandeServices.alertMessage(
          'success',
          'Refuser!',
          'Demande refuser avec succès'
        );

        this.getDemandesUsers();
      })
    }
  })
 
}
}
