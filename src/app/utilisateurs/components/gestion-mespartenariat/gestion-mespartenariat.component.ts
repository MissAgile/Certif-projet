import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-mespartenariat',
  templateUrl: './gestion-mespartenariat.component.html',
  styleUrls: ['./gestion-mespartenariat.component.css']
})
export class GestionMespartenariatComponent implements OnInit {
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
