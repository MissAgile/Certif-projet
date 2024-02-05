import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { MainUtilisateurComponent } from './main-utilisateur/main-utilisateur.component';
import { AccueilUtilisateursComponent } from './components/accueil-utilisateurs/accueil-utilisateurs.component';
import { FormsModule } from '@angular/forms';
import { GestionMesobjetsComponent } from './components/gestion-mesobjets/gestion-mesobjets.component';
import { GestionMymessageComponent } from './components/gestion-mymessage/gestion-mymessage.component';
import { GestionMyprofilComponent } from './components/gestion-myprofil/gestion-myprofil.component';
import { GestionMespartenariatComponent } from './components/gestion-mespartenariat/gestion-mespartenariat.component';
import { GestionDetailsProfilComponent } from './components/gestion-details-profil/gestion-details-profil.component';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainUtilisateurComponent,
    AccueilUtilisateursComponent,
    GestionMesobjetsComponent,
    GestionMymessageComponent,
    GestionMyprofilComponent,
    GestionMespartenariatComponent,
    GestionDetailsProfilComponent
  ],
  imports: [
    CommonModule,
    UtilisateursRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
  
  ]
})
export class UtilisateursModule { }
