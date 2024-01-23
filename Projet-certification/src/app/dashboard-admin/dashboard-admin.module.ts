import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { MainComponent } from './main/main.component';
import { AccueilAdminComponent } from './components/accueil-admin/accueil-admin.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { DashboardUtilisateurComponent } from './components/dashboard-utilisateur/dashboard-utilisateur.component';


@NgModule({
  declarations: [
    MainComponent,
    AccueilAdminComponent,
    DashboardUtilisateurComponent,
  
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class DashboardAdminModule { }
