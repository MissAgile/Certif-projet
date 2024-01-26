import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { MainComponent } from './main/main.component';
import { AccueilAdminComponent } from './components/accueil-admin/accueil-admin.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { DashboardUtilisateurComponent } from './components/dashboard-utilisateur/dashboard-utilisateur.component';
import { GestionMessagesComponent } from './components/gestion-messages/gestion-messages.component';
import { GestionPubliciteComponent } from './components/gestion-publicite/gestion-publicite.component';
import { GestionPartenariatComponent } from './components/gestion-partenariat/gestion-partenariat.component';
import { GestionCategorieComponent } from './components/gestion-categorie/gestion-categorie.component';
import { GestionRoleComponent } from './components/gestion-role/gestion-role.component';
import { GestionProfilComponent } from './components/gestion-profil/gestion-profil.component';
import { GestionAnnoncesComponent } from './components/gestion-annonces/gestion-annonces.component';


@NgModule({
  declarations: [
    MainComponent,
    AccueilAdminComponent,
    DashboardUtilisateurComponent,
    GestionMessagesComponent,
    GestionPubliciteComponent,
    GestionPartenariatComponent,
    GestionCategorieComponent,
    GestionRoleComponent,
    GestionProfilComponent,
    GestionAnnoncesComponent,
  
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class DashboardAdminModule { }
