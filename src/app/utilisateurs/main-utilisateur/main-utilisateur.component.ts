import { Component } from '@angular/core';

@Component({
  selector: 'app-main-utilisateur',
  templateUrl: './main-utilisateur.component.html',
  styleUrls: ['./main-utilisateur.component.css']
})
export class MainUtilisateurComponent {
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
}
