import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AccueilAdminComponent } from './components/accueil-admin/accueil-admin.component';
import { DashboardUtilisateurComponent } from './components/dashboard-utilisateur/dashboard-utilisateur.component';
import { GestionMessagesComponent } from './components/gestion-messages/gestion-messages.component';
import { GestionCategorieComponent } from './components/gestion-categorie/gestion-categorie.component';
import { GestionProfilComponent } from './components/gestion-profil/gestion-profil.component';
import { GestionPubliciteComponent } from './components/gestion-publicite/gestion-publicite.component';
import { GestionPartenariatComponent } from './components/gestion-partenariat/gestion-partenariat.component';
import { GestionAnnoncesComponent } from './components/gestion-annonces/gestion-annonces.component';

const routes: Routes = [
  {path:'', component: MainComponent, 
  children: [
    {path:'accueil-admin', component:AccueilAdminComponent},
    {path:'gestion-utilisateur', component:DashboardUtilisateurComponent},
    {path:'gestion-messages', component:GestionMessagesComponent},
    {path:'gestion-categorie', component:GestionCategorieComponent},
    {path:'gestion-profil', component:GestionProfilComponent},
    {path:'gestion-publicite', component:GestionPubliciteComponent},
    {path:'gestion-partenariat', component:GestionPartenariatComponent},
    {path:'gestion-annonces', component:GestionAnnoncesComponent},
    {path:'', redirectTo:'accueil-admin', pathMatch:'full'},

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
