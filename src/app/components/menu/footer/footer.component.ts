import { Component } from '@angular/core';
import { NewsLetterService } from 'src/app/services/news-letter.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email:string="";
  constructor(private newsLetterService:NewsLetterService){}
  subscribeNewsLetter(id:number) {
    let idUser=id;
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière après cette action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#017D03',
      cancelButtonColor: '#FF9C00',
      confirmButtonText: 'Oui, supprimer!',
    }).then((result) => {
      console.log(result);

      if (result.isConfirmed) {
        this.newsLetterService.postNewsletter(idUser).subscribe(
          (data: any) => {
            console.log(data);

            this.newsLetterService.alertMessage(
              'success',
              'Supprimé!',
              'Categorie supprimé avec succès'
            );
            // this.getAllCategories();
          });
      }
    });
  }
}
