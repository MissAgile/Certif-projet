import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { PubliciteComponent } from './components/pages/publicite/publicite.component';
import { AnnoncesComponent } from './components/pages/annonces/annonces.component';
import {ContactComponent } from './components/pages/contact/contact.component';
import {SidenavComponent } from './components/admin/sidenav/sidenav.component';


const routes: Routes = [
  {path: "accueil", component:AccueilComponent},
  {path: "publicite", component:PubliciteComponent},
  {path: "annonces", component:AnnoncesComponent},
  {path: "contact", component:ContactComponent},
  // {path: "apropos", component:AproposComponent},

   //route admin
   {path: "dashboard-admin", loadChildren:()=>import('./dashboard-admin/dashboard-admin.module').then(m=>m.DashboardAdminModule)},
   {path: "sidenav", component:SidenavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
