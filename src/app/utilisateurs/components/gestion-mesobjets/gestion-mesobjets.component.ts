import { Component } from '@angular/core';
import { BiensService } from 'src/app/services/biens.service';
import { Bien } from 'src/app/models/bien';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-mesobjets',
  templateUrl: './gestion-mesobjets.component.html',
  styleUrls: ['./gestion-mesobjets.component.css']
})
export class GestionMesobjetsComponent {
  // bienSelectionner: Bien;
  
  /** déclaration vvariable pour bien */
  libelle: string = "";
  lieu: string = "";
  description: string = "";
  date: any;
  image: any[] = [];
  categorie_id = "";
  
  
  //variables pour modifier
  //update demande 
  bienObjet: any;
  libelleUpdate: any;
  descriptionUpdate: any;
  lieuUpdate: any;
  dateUpdate: any;
  imageUpdate: any;
  categorieUpdate: any;
  
  
  
  listeBiens: any[] = [];
  
  bienSelectionner: any = {};
  // bienSelectionner: any = {};



  constructor(private biensServices: BiensService) { }


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

    this.getAllBiens();
    // this.getDemandeById(id:number);  // Appelez la méthode avec l'ID approprié.

  }

  /** fonction pour lister un bien */
  getAllBiens() {
    console.log(this.listeBiens);
    this.biensServices.getAllBiens().subscribe(
      (data) => {
        console.log(data);

        this.listeBiens = data.biens;
        console.log(this.listeBiens);

      }
    )
  }

  /**fonction pour détails bien */
  //details demande 
  getBienById(id: number) {
    this.biensServices.getBienById(id).subscribe(
      (data) => {
        this.bienSelectionner = data.biens;
        ({
          libelle: this.libelleUpdate,
          description: this.descriptionUpdate,
          lieu: this.lieuUpdate,
          date: this.dateUpdate,
          image: this.imageUpdate,
          etat: data.etat,
          categorie_id: this.categorieUpdate
        } = this.bienSelectionner);
      }
    )
  }



  
  chargerInfosBien(bien: any) {
    this.bienSelectionner = bien.id;
    console.log(bien);
    this.libelle = bien.libelle;
    this.description = bien.description;
    this.lieu = bien.lieu;
    this.date = bien.date;
    this.image = bien.image;
    this.categorie_id = bien.categorie_id;
  }

  // fonction pour modifier  
  modifierBien() {
    //libelle, lieu, description , date, image, categorie_id

    const data = {
      libelle: this.libelle,
      description: this.description,
      image: this.image,
      lieu: this.lieu,
      date: this.date,
      categorie_id: this.categorie_id,

    }

    // console.log(this.bienSelectionner);
    // console.log(data)
    this.biensServices.updateBien(this.bienSelectionner, data).subscribe((response) => {

      console.log(response);



    }
    );

    this.getAllBiens();
  }

/*fonction ajout bien **/
ajoutBien() {
  //libelle, lieu, description , date, image, categorie_id
  // let formData=new FormData();
  // formData.append("libelle",this.libelle);
  // formData.append("description",this.description);
  // formData.append("image",this.image);
  // formData.append("date",this.date);
  // formData.append("categorie_id",this.categorie_id);
  // formData.append("lieu",this.lieu);
  const data = {
    libelle: this.libelle,
    lieu: this.lieu,
    description: this.description,
    image: this.image,
    date: this.date,
    categorie_id: this.categorie_id,
  }
  console.log(data);
  this.biensServices.addAnnonce(data).subscribe((response) => {
    console.log(response);
    // console.log(this.image);
    

  }
  );

}




}
