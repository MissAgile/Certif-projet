import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css']
})
export class GestionCategorieComponent implements OnInit {
  
//variables
  id:number=0;
  nom:string="";

categories: any = ""; //tableau categories
selectedCategory: any;

nomCategory = "";
nomCategoryUpdate = "";

dtCategories: DataTables.Settings = {};

      dtOptions: DataTables.Settings = {};

      constructor( private categoriesService:CategoriesService) { }


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

      this.categories = data.$categorie;
      console.log(this.categories);

    }
  )
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

}

/**fonction qui nous permet de suppimer une categorie du tableau */
deleteCategorie(id: number) {
  const index = this.categories.findIndex(($categories: { id: number; }) => $categories.id === id);
  if (index !== -1) {
    this.categories.splice(index, 1);
  }
}
}

