import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(
    private authentificationService: AuthentificationService,
    private route: Router,
    private renderer: Renderer2, private el: ElementRef
  ) { }
ngOnInit(): void {
  
}
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
