import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { PubliciteComponent } from './components/pages/publicite/publicite.component';
import { AnnoncesComponent } from './components/pages/annonces/annonces.component';
import {ContactComponent } from './components/pages/contact/contact.component';
import {SidenavComponent } from './components/admin/sidenav/sidenav.component';
import { AuthentificationComponent } from './components/auth/authentification/authentification.component';
import { ConfidentialiteComponent } from './components/pages/confidentialite/confidentialite.component';
import { authGuard } from './auth.guard';
import { userGuard } from './user.guard';
import { PageErrorComponent } from './components/pages/page-error/page-error.component';
import { AccueilVisiteurComponent } from './components/pages/accueil-visiteur/accueil-visiteur.component';
import { InformationsProfilComponent } from './components/pages/informations-profil/informations-profil.component';


const routes: Routes = [
  //route pae defaut du site 
  { path: '', redirectTo: '/visiteur', pathMatch: 'full' },
  {path: "accueil", component:AccueilComponent},
  {path: "publicite", component:PubliciteComponent},
  {path: "annonces", component:AnnoncesComponent},
  {path: "contact", component:ContactComponent},
  {path: "authentification", component:AuthentificationComponent},
  {path: "apropos", component:ConfidentialiteComponent},
  {path: "visiteur", component:AccueilVisiteurComponent},
  {path: "inforations-profil", component:InformationsProfilComponent},
  // {path: "confidentialite", component:ConfidentialiteComponent},

   //route admin
   {path: "dashboard-admin", loadChildren:()=>import('./dashboard-admin/dashboard-admin.module').then(m=>m.DashboardAdminModule), canActivate:[authGuard]},
   {path: "sidenav", component:SidenavComponent},
  //  {path: "**", component:PageErrorComponent},


   //route utilisateurs
   {path: "utilisateurs", loadChildren:()=>import('./utilisateurs/utilisateurs.module').then(m=>m.UtilisateursModule), canActivate:[userGuard]}, //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
