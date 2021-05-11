import { DemandeDetailsComponent } from './components/demande-details/demande-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTypeComponent } from './components/add-type/add-type.component';
import { EditTypeComponent } from './components/edit-type/edit-type.component';
import { TypesComponent } from './components/types/types.component';
import { AddDemandeComponent } from './components/add-demande/add-demande.component';
import { DemandesComponent } from './components/demandes/demandes.component';
import { ResultComponent } from './components/result/result.component';
import { DisplayDemandeComponent } from './components/display-demande/display-demande.component';
import { AddProjetComponent } from './components/add-projet/add-projet.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { AjouutComponent } from './components/ajouut/ajouut.component';
import { TypesTableComponent } from './components/types-table/types-table.component';
import { GestiontypesComponent } from './components/gestiontypes/gestiontypes.component';
import { GestionprojetsComponent } from './components/gestionprojets/gestionprojets.component';
import { GestiondemandesComponent } from './components/gestiondemandes/gestiondemandes.component';
import { DemandesTableComponent } from './components/demandes-table/demandes-table.component';
import { ProjetsTableComponent } from './components/projets-table/projets-table.component';
import { AdminComponent } from './components/admin/admin.component';
import { EspaceComponent } from './components/espace/espace.component';
import { AjoutprojetComponent } from './components/ajoutprojet/ajoutprojet.component';
import { VideoTableComponent } from './components/video-table/video-table.component';
import { GestionvideosComponent } from './components/gestionvideos/gestionvideos.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { AjoutvideoComponent } from './components/ajoutvideo/ajoutvideo.component';
import { LogosTableComponent } from './components/logos-table/logos-table.component';
import { AddLogoComponent } from './components/add-logo/add-logo.component';
import { GestionlogosComponent } from './components/gestionlogos/gestionlogos.component';
import { AjoutlogoComponent } from './components/ajoutlogo/ajoutlogo.component';
import { AddAfficheComponent } from './components/add-affiche/add-affiche.component';
import { AffichesTableComponent } from './components/affiches-table/affiches-table.component';
import { AjouafficheComponent } from './components/ajouaffiche/ajouaffiche.component';
import { GestionaffichesComponent } from './components/gestionaffiches/gestionaffiches.component';
import { AjoutdemandeComponent } from './components/ajoutdemande/ajoutdemande.component';
import { GestiondemandeComponent } from './components/gestiondemande/gestiondemande.component';
import { EditLogoComponent } from './components/edit-logo/edit-logo.component';
import { EditVideoComponent } from './components/edit-video/edit-video.component';
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
import { DemandeTableComponent } from './demande-table/demande-table.component';





const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'addType', component: AddTypeComponent},
  {path: 'addDemande', component: AddDemandeComponent},
  {path: 'addProjet', component: AddProjetComponent},
  {path: 'ajoutprojet', component: AjoutprojetComponent},
  {path: 'ajoutvideo', component: AjoutvideoComponent},
  {path: 'ajouaffiche', component: AjouafficheComponent},
  {path: 'ajoutdemande', component: AjoutdemandeComponent},
  {path: 'ajoutlogo', component: AjoutlogoComponent},
  {path: 'gestiontypes', component: GestiontypesComponent},
  {path: 'gestionprojets', component: GestionprojetsComponent},
  {path: 'gestiondemandes', component: GestiondemandesComponent},
  {path: 'gestiondemande', component: GestiondemandeComponent},
  { path: 'details/:id', component: DemandeDetailsComponent},

  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'types', component: TypesComponent},
  {path: 'typesTable', component: TypesTableComponent},
  {path: 'demandesTable', component: DemandesTableComponent},
  {path: 'demandeTable', component: DemandeTableComponent},
  {path: 'gestionvideos', component: GestionvideosComponent},
  {path: 'gestionaffiches', component: GestionaffichesComponent},
  {path: 'gestionlogos', component: GestionlogosComponent},
  {path: 'videoTable', component: VideoTableComponent},
  {path: 'videoAdmin', component: VideoAdminComponent},
  {path: 'gestionVideoAdmin', component: GestionVideoAdminComponent},
  {path: 'gestionLogoAdmin', component: GestionLogoAdminComponent},
  {path: 'gestionAfficheAdmin', component: GestionAfficheAdminComponent},
  {path: 'gestionVideoAdmin', component: GestionVideoAdminComponent},
  {path: 'logoAdmin', component: LogoAdminComponent},
  {path: 'afficheAdmin', component: AfficheAdminComponent},
  {path: 'addVideo', component: AddVideoComponent},
  {path: 'addAffiche', component: AddAfficheComponent},
  {path: 'logosTable', component: LogosTableComponent},
  {path: 'affichesTable', component: AffichesTableComponent},
  {path: 'addLogo', component: AddLogoComponent},
  {path: 'projetsTable', component: ProjetsTableComponent},
  {path: 'demandes', component: DemandesComponent},
  {path: 'projets', component: ProjetsComponent},
  {path: 'ajouut', component: AjouutComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'result', component: ResultComponent },
  {path: 'espace', component: EspaceComponent },
  {path: 'displayDemande/:id', component: DisplayDemandeComponent },
  {path: 'editLogo/:id', component: EditLogoComponent },
  {path: 'editVideo/:id', component: EditVideoComponent },
  {path: 'editType/:id', component: EditTypeComponent },
  {path: 'modifVideo/:id', component: ModifVideoComponent },
  {path: 'modifType/:id', component: ModifTypeComponent },
  {path: 'modifLogo/:id', component: ModifLogoComponent },
  {path: 'modifAffiche/:id', component: ModifAfficheComponent },
  {path: 'editAffiche/:id', component: EditAfficheComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
