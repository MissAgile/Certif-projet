import { Component } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-role',
  templateUrl: './gestion-role.component.html',
  styleUrls: ['./gestion-role.component.css']
})
export class GestionRoleComponent {
  dtOptions: DataTables.Settings = {};

  //variables
  id = "";
  nomRole: string = "";

  tabRoles: any[] = []; //tableau roles
  selectedRoles: any = {};

  nomUpdate: any;
  nomCategoryUpdate = "";

  constructor(private roleService: RoleService) { }

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
    this.getListRole();
  }

  // getListRole() {
  //   console.log(this.tabRoles);
  //   this.roleService.getAllRole().subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.tabRoles = data.roles;
  //       console.log(this.tabRoles);

  //     }
  //   )
  // }

  /** fonction pour lister les bien trouvé */
  getListRole() {
    console.log(this.tabRoles);
    this.roleService.getAllRole().subscribe(
      (responses) => {
        console.log('dgfhj', responses);
        this.tabRoles = responses.roles;
        console.log(responses.roles);
      }
    )
  }

  /*fonction ajout bien **/
  ajoutRole() {
    //libelle, lieu, description , date, image, categorie_id
    let formData = new FormData();
    formData.append("nomRole", this.nomRole);
    console.log(formData);
    this.roleService.addRole(formData).subscribe((response) => {
      console.log(response);
    }
    );
    this.viderChamps();
    this.getListRole();
    this.ngOnInit();

  }


  /**modifier objet */
  bienObejt: any;
  chargerInfosRole(data: any) {
    this.selectedRoles= data.id;
    console.log(data);
    this.nomRole = data.nomRole;



  }

  // fonction pour modifier  
  modifierRole() {
    let formData = new FormData();
    formData.append("nomRole", this.nomRole);
    console.log(formData);


    console.log(this.selectedRoles);
    console.log(formData)
    this.roleService.updateRole(this.selectedRoles).subscribe((response) => {

      console.log(response);


    }
    );
    this.ngOnInit();
    this.getListRole();
    this.tabRoles;
  }


  SupprimerRole(id: number) {
    let idRole = id;
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
        this.roleService.deleteRole(idRole).subscribe(
          (data: any) => {
            console.log(data);

            this.roleService.alertMessage(
              'success',
              'Supprimé!',
              'Role supprimé avec succès'
            );
            this.getListRole();
          });
      }
    });
  }


  viderChamps() {
    this.nomRole = '';

  }
}
