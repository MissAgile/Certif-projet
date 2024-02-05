import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-utilisateur',
  templateUrl: './main-utilisateur.component.html',
  styleUrls: ['./main-utilisateur.component.css']
})
export class MainUtilisateurComponent {

  constructor(
    private authentificationService: AuthentificationService,
    private route: Router
  ) { }


  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }

   /**fonction pour se déconnecter */
   logout(): void {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière après cette action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2ECC71',
      cancelButtonColor: '#001F3F',
      confirmButtonText: 'Oui, je me deconnecte!',
    }).then((result) => {
      console.log(result);

      if (result.isConfirmed) {
        this.authentificationService.logout().subscribe(
          () => {
            localStorage.removeItem('access_token');
            // Déconnexion réussie, redirigez l'utilisateur vers la page de connexion par exemple
            this.route.navigate(['/authentification']);
            this.authentificationService.alertMessage(
              'success',
              'Déconnexion!',
              'vous etes déconnectés avec succès'
            );
          }, (error) => {
            console.error('Erreur lors de la déconnexion', error);

          });
      }
    });

    // this.authentificationService.logout().subscribe(
    //   () => {
    //     localStorage.removeItem('access_token');
    //     // Déconnexion réussie, redirigez l'utilisateur vers la page de connexion par exemple
    //     this.route.navigate(['/authentification']);


    //   },
    //   (error) => {
    //     console.error('Erreur lors de la déconnexion', error);
    //   }
    // );
  }
}
