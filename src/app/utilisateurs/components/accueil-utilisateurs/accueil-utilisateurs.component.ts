import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil-utilisateurs',
  templateUrl: './accueil-utilisateurs.component.html',
  styleUrls: ['./accueil-utilisateurs.component.css']
})
export class AccueilUtilisateursComponent {
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
  }
}