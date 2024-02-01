import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-gestion-myprofil',
  templateUrl: './gestion-myprofil.component.html',
  styleUrls: ['./gestion-myprofil.component.css']
})
export class GestionMyprofilComponent {

  user: User[] =[
  ]

  successMsg = '';

}
