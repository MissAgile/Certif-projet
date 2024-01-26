import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/admin/sidenav/sidenav.component';
import { FooterComponent } from './components/menu/footer/footer.component';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { AuthentificationComponent } from './components/auth/authentification/authentification.component';
import { HeaderComponent } from './components/menu/header/header.component';
import { PubliciteComponent } from './components/pages/publicite/publicite.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AnnoncesComponent } from './components/pages/annonces/annonces.component';
import { ConfidentialiteComponent } from './components/pages/confidentialite/confidentialite.component';
import { UtilisationComponent } from './components/pages/utilisation/utilisation.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    AuthentificationComponent,
    PubliciteComponent,
    ContactComponent,
    AnnoncesComponent,
    ConfidentialiteComponent,
    UtilisationComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
