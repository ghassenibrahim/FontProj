import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultComponent } from './components/result/result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddTypeComponent } from './components/add-type/add-type.component';
import { TypesTableComponent } from './components/types-table/types-table.component';
import { TypesComponent } from './components/types/types.component';
import { DisplayTypeComponent } from './display-type/display-type.component';
import { EditTypeComponent } from './components/edit-type/edit-type.component';
import { AddDemandeComponent } from './components/add-demande/add-demande.component';
import { DemandesTableComponent } from './components/demandes-table/demandes-table.component';
import { DemandesComponent } from './components/demandes/demandes.component';
import { DisplayDemandeComponent } from './components/display-demande/display-demande.component';
import { EditDemandeComponent } from './components/edit-demande/edit-demande.component';
import { AddProjetComponent } from './components/add-projet/add-projet.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { ProjetsTableComponent } from './components/projets-table/projets-table.component';
import { AjouutComponent } from './components/ajouut/ajouut.component';
import { SectionComponent } from './components/section/section.component';
import { AboutComponent } from './components/about/about.component';
import { AcheiveComponent } from './components/acheive/acheive.component';
import { ServiceComponent } from './components/service/service.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TeamComponent } from './components/team/team.component';
import { GalerieComponent } from './components/galerie/galerie.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { NavComponent } from './components/nav/nav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { GestiontypesComponent } from './components/gestiontypes/gestiontypes.component';
import { GestionprojetsComponent } from './components/gestionprojets/gestionprojets.component';
import { GestiondemandesComponent } from './components/gestiondemandes/gestiondemandes.component';
import { ProgressBarModule } from 'angular-progress-bar';
import { AddDemoComponent } from './components/add-demo/add-demo.component';
import { XhrInterceptor } from './components/services/xhr.interceptor';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AdminComponent } from './components/admin/admin.component';
import { EspaceComponent } from './components/espace/espace.component';
import { MenuuComponent } from './components/menuu/menuu.component';
import { AjoutprojetComponent } from './components/ajoutprojet/ajoutprojet.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { VideoTableComponent } from './components/video-table/video-table.component';
import { GestionvideosComponent } from './components/gestionvideos/gestionvideos.component';
import { AjoutvideoComponent } from './components/ajoutvideo/ajoutvideo.component';
import { AddLogoComponent } from './components/add-logo/add-logo.component';
import { LogosTableComponent } from './components/logos-table/logos-table.component';
import { AjoutlogoComponent } from './components/ajoutlogo/ajoutlogo.component';
import { GestionlogosComponent } from './components/gestionlogos/gestionlogos.component';
import { AjouafficheComponent } from './components/ajouaffiche/ajouaffiche.component';
import { GestionaffichesComponent } from './components/gestionaffiches/gestionaffiches.component';
import { AddAfficheComponent } from './components/add-affiche/add-affiche.component';
import { AffichesTableComponent } from './components/affiches-table/affiches-table.component';
import { AjoutdemandeComponent } from './components/ajoutdemande/ajoutdemande.component';
import { GestiondemandeComponent } from './components/gestiondemande/gestiondemande.component';
import { DisplayVideoComponent } from './components/display-video/display-video.component';
import { EditVideoComponent } from './components/edit-video/edit-video.component';
import { DisplayLogoComponent } from './components/display-logo/display-logo.component';
import { EditLogoComponent } from './components/edit-logo/edit-logo.component';
import { DisplayAfficheComponent } from './components/display-affiche/display-affiche.component';
import { EditAfficheComponent } from './components/edit-affiche/edit-affiche.component';
import { ModifVideoComponent } from './components/modif-video/modif-video.component';
import { ModifLogoComponent } from './components/modif-logo/modif-logo.component';
import { ModifAfficheComponent } from './components/modif-affiche/modif-affiche.component';
import { VideoAdminComponent } from './components/video-admin/video-admin.component';
import { LogoAdminComponent } from './components/logo-admin/logo-admin.component';
import { AfficheAdminComponent } from './components/affiche-admin/affiche-admin.component';
import { GestionVideoAdminComponent } from './components/gestion-video-admin/gestion-video-admin.component';
import { GestionLogoAdminComponent } from './components/gestion-logo-admin/gestion-logo-admin.component';
import { GestionAfficheAdminComponent } from './components/gestion-affiche-admin/gestion-affiche-admin.component';
import { ModifTypeComponent } from './components/modif-type/modif-type.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { DemandeTableComponent } from './demande-table/demande-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    ResultComponent, 
    AddTypeComponent,
    TypesTableComponent,
    TypesComponent,
    DisplayTypeComponent,
    EditTypeComponent,
    AddDemandeComponent,
    DemandesTableComponent,
    DemandesComponent,
    DisplayDemandeComponent,
    EditDemandeComponent,
    AddProjetComponent,
    ProjetsComponent,
    ProjetsTableComponent,
    AjouutComponent,
    SectionComponent,
    AboutComponent,
    AcheiveComponent,
    ServiceComponent,
    FooterComponent,
    PortfolioComponent,
    TeamComponent,
    GalerieComponent,
    ContactComponent,
    AdministrateurComponent,
    NavComponent,
    NavbarComponent,
    MenuComponent,
    GestiontypesComponent,
    GestionprojetsComponent,
    GestiondemandesComponent,
    AddDemoComponent,
    InscriptionComponent,
    AdminComponent,
    EspaceComponent,
    MenuuComponent,
    AjoutprojetComponent,
     AddVideoComponent,
    VideoTableComponent,
    GestionvideosComponent,
    AjoutvideoComponent,
    AddLogoComponent,
    LogosTableComponent,
    AjoutlogoComponent,
    GestionlogosComponent,
    AjouafficheComponent,
    AffichesTableComponent,
    AddAfficheComponent,
    GestionaffichesComponent,
    AjoutdemandeComponent,
    GestiondemandeComponent,
    DisplayVideoComponent,
    EditVideoComponent,
    DisplayLogoComponent,
    EditLogoComponent,
    DisplayAfficheComponent,
    EditAfficheComponent,
    ModifVideoComponent,
    ModifLogoComponent,
    ModifAfficheComponent,
    VideoAdminComponent,
    LogoAdminComponent,
    AfficheAdminComponent,
    GestionVideoAdminComponent,
    GestionLogoAdminComponent,
    GestionAfficheAdminComponent,
    ModifTypeComponent,
    AddClientComponent,
    DemandeTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    AppRoutingModule,
    ProgressBarModule
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
