import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  nom: string = "";
  email: string = "";
  phone: number = 0;
  messag: string = "";


  /**liste des contact */
  listeContacts: any = "";
  selectedContacts: any = {};


  ngOnInit(): void {
    // this.getAllContact();
  }

  /**fonction pour lister tous les contacts */
  // getAllContact(){
  //   this.contactService.getAllContact().subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.listeContacts = data.contacts;
  //       console.log(this.listeContacts);
  //     }
  //   )
  // }

  /** fonction pour enregistrer un contact */
  // ajoutContact() {

  //   const contact = {
  //     nom: this.nom,
  //     email: this.email,
  //     phone: this.phone,
  //     messag: this.messag,
  //   }
  //   console.log(contact);
  //   this.contactService.addContact().subscribe((response) => {
  //     console.log(response);
  //   }
  //   );
  //   (error: any) => {
  //     console.error('Erreur lors de la récupération des catégories', error);
  //   }

  ajoutContact() {

    const data = {
      nom: this.nom,
      email:this.email,
      messag:this.messag,
      phone:this.phone,
    }
    console.log(data);
    this.contactService.addContact(data).subscribe((response) => {
      console.log(response);
      console.log(this.nom);
      
    }
    );
    (error: any) => {
      console.error('Erreur lors de la récupération des contact', error);
    }

    this.ngOnInit();

  }



}
