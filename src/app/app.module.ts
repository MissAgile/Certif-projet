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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { PageErrorComponent } from './components/pages/page-error/page-error.component';
import { AccueilVisiteurComponent } from './components/pages/accueil-visiteur/accueil-visiteur.component';
import { InformationsProfilComponent } from './components/pages/informations-profil/informations-profil.component';
  
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
    PageErrorComponent,
    AccueilVisiteurComponent,
    InformationsProfilComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
