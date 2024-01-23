import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AccueilAdminComponent } from './components/accueil-admin/accueil-admin.component';
import { DashboardUtilisateurComponent } from './components/dashboard-utilisateur/dashboard-utilisateur.component';

const routes: Routes = [
  {path:'', component: MainComponent, 
  children: [
    {path:'accueil-admin', component:AccueilAdminComponent},
    {path:'gestion-utilisateur', component:DashboardUtilisateurComponent},
    {path:'', redirectTo:'accueil-admin', pathMatch:'full'},

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
