import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUtilisateurComponent } from './main-utilisateur/main-utilisateur.component';
import { AccueilUtilisateursComponent } from './components/accueil-utilisateurs/accueil-utilisateurs.component';
import { GestionMyprofilComponent } from './components/gestion-myprofil/gestion-myprofil.component';
import { GestionMessagesComponent } from '../dashboard-admin/components/gestion-messages/gestion-messages.component';
import { GestionMymessageComponent } from './components/gestion-mymessage/gestion-mymessage.component';
import { GestionMespartenariatComponent } from './components/gestion-mespartenariat/gestion-mespartenariat.component';
import { GestionMesobjetsComponent } from './components/gestion-mesobjets/gestion-mesobjets.component';
import { GestionDetailsProfilComponent } from './components/gestion-details-profil/gestion-details-profil.component';

const routes: Routes = [
  {path:'', component: MainUtilisateurComponent, 
  children: [
    {path:'accueilutilisateurs', component:AccueilUtilisateursComponent},
    {path:'myprofil-user', component:GestionMyprofilComponent},
    {path:'mes-messages', component:GestionMymessageComponent},
    {path:'mes-demandes', component:GestionMespartenariatComponent},
    {path:'mes-objets', component:GestionMesobjetsComponent},
    {path:'details-utilisateur', component:GestionDetailsProfilComponent},
    {path:'', redirectTo:'accueilutilisateurs', pathMatch:'full'},

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateursRoutingModule { }
