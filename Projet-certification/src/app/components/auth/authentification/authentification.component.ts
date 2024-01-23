import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  ngOnInit(): void {


  }

  contenu='exemple@gmail.com'
  imageUrl='../../../assets/imgs/customer01.jpg'
  // email=true


  //méthodes
  afficherBloc1: boolean = true;

  basculerBlocs() {
    this.afficherBloc1 = !this.afficherBloc1;
  }



  // attributs
  name = "";
  firstname = "";
  // numero = "";
  email = "";
  password = "";
  // formChoice=true;


  // methodes
  verifierLogin() {
    console.log({email: this.email, password: this.password});
    if (this.email == "" || this.password == "") {

      this.showMessage("error","Sorry",'Veuillez saisir tous les champs');
    }else if(this.password.length<8){
        this.showMessage("error","Sorry",'Le password doit être > ou = à 8 caractère');
      }
      else {
          this.showMessage('success','Thanks','Connexion faite avec succès');
    }

  }


  verifierRegister() {

    if (this.name == "" || this.firstname == "" || this.email == "" || this.password == "" ) {
      Swal.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'Veuillez saisir tous les champs',
      })
    }
    else if(this.password.length<8){
      this.showMessage("error","Sorry",'Le password doit être > ou = à 8 caractère');
    }


    else {
      Swal.fire({
        icon: 'success',
        title: 'Thanks',
        text: 'Connexion faite avec succès',
      })
      this.showForm()


    }

  }

  showMessage(icon:any,title:any,text:any){
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    })
  }


  showForm(){
    // this.formChoice=!this.formChoice;
    this.name="";
    this.firstname="";
    // this.numero="";
    this.email="";
    this.password="";
  }
}
