import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
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
  phone: any;
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

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (
      this.nom == '' ||
      this.email == '' ||
      this.messag == '' ||
      this.phone == ''
    ){
      this.contactService.alertMessage(
      'error',
      'Attention',
      'Renseigner tous les champs'
     );
    }else if (!this.email.match(emailPattern)) {
      this.contactService.alertMessage('error', 'Attention', 'Email invalide');
    } else {
      let newUser: Contact = {
        nom: this.nom,
        email: this.email,
        phone: this.phone,
        messag: this.messag,
      };
      console.log(newUser);
      this.contactService.addContact(newUser).subscribe((response) => {
        console.log(response);
        this.contactService.alertMessage(
          'success',
          'Bravo!',
          'Message envoyer avec succés'
        );
      });
      this.viderChamps();
    }
    // this.contactService.addContact(data).subscribe((response) => {
    //   console.log(response);
    //   console.log(this.nom);
      
    // }
    // );
    // (error: any) => {
    //   console.error('Erreur lors de la récupération des contact', error);
    // }

    // this.ngOnInit();

  }

  viderChamps() {
    this.nom = "";
    this.email = "";
    this.phone = "";
    this.messag = "";
  }
}



