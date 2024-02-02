import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css']
})
export class GestionCategorieComponent implements OnInit {

  //variables
  id: number = 0;
  nom: string = "";

  categories: any = ""; //tableau categories
  selectedCategory: any = {};

  nomUpdate: any;
  nomCategoryUpdate = "";

  dtCategories: DataTables.Settings = {};

  dtOptions: DataTables.Settings = {};

  constructor(private categoriesService: CategoriesService) { }


  ngOnInit(): void {
    this.dtCategories = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      pageLength: 9,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json',
      },
      autoWidth: true,
    };

    this.getAllCategories();
  }


  getAllCategories() {
    console.log(this.categories);
    this.categoriesService.getAllCategories().subscribe(
      (data) => {
        console.log(data);

        this.categories = data.categorie;
        console.log(this.categories);

      }
    )
  }

//details catégorie
// pour recuperer une annonce
getCategorie(categorie: any) {
  this.selectedCategory = categorie;
}

  /** fonction qui nous per permet d'ajouter une categorie */
  ajoutCategorie() {

    const data = {
      id: this.id,
      nom: this.nom,
    }
    console.log(data);
    this.categoriesService.addCategorie(data).subscribe((response) => {
      console.log(response);
    }
    );
    (error: any) => {
      console.error('Erreur lors de la récupération des catégories', error);
    }

    this.ngOnInit();

  }

  //fonction pour modifier une categorie
  chargerInfosCategorie(categorie: any) {
    this.selectedCategory = this.categories.id;
    console.log(categorie);
    this.id = categorie.id;
    this.nom = categorie.nom;
    
  }

   // fonction pour modifier  
   modifierCategorie() {
    //libelle, lieu, description , date, image, categorie_id

    const data = {
      // id: this.id,
      nom: this.nom,
    }

    // console.log(this.bienSelectionner);
    // console.log(data)
    this.categoriesService.updateCategorie(this.selectedCategory).subscribe((response) => {

      console.log(response);



    }
    );

    this.getAllCategories();
  }



  SupprimerCategorie(id: number) {
    let idCat = id;
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
        this.categoriesService.deleteCategorie(idCat).subscribe(
          (data: any) => {
            console.log(data);

            this.categoriesService.alertMessage(
              'success',
              'Supprimé!',
              'Categorie supprimé avec succès'
            );
            this.getAllCategories();
          });
      }
    });
  }




}

