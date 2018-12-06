import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PlanningComponent} from './planning/planning.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {PlanningService} from './service/planning.service';
import {FormateurService} from './service/formateur.service';
import {ModuleService} from './service/module.service';
import {FormateurComponent} from './formateur/formateur.component';
import {OrdinateurComponent} from './ordinateur/ordinateur.component';
import {EditFormateurComponent} from './edit-formateur/edit-formateur.component';
import {SalleComponent} from './salle/salle.component';
import {EditSalleComponent} from './edit-salle/edit-salle.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { ModuleComponent } from './module/module.component';
import { EditModuleComponent } from './edit-module/edit-module.component';
import {MatiereService} from './service/matiere.service';
import { MatieremoduleComponent } from './matieremodule/matieremodule.component';
import {MatieremoduleService} from './service/matieremodule.service';
import {MatiereComponent} from './matiere/matiere.component';
import {MatiereEditComponent} from './matiere-edit/matiere-edit.component';
import { MatiereFormateurComponent } from './matiere-formateur/matiere-formateur.component';
import {FormateurMatiereService} from './service/formateur-matiere.service';
import {EditPlanningComponent} from './edit-planning/edit-planning.component';
import {EditOrdinateurComponent} from './edit-ordinateur/edit-ordinateur.component';
import {VideoprojecteurComponent} from './videoprojecteur/videoprojecteur.component';
import {EditVideoprojecteurComponent} from './edit-videoprojecteur/edit-videoprojecteur.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanningComponent,
    EditPlanningComponent,
    HomeComponent,
    FormateurComponent,
    OrdinateurComponent,
    EditFormateurComponent,
    SalleComponent,
    EditSalleComponent,
    ModuleComponent,
    EditModuleComponent,
    EditFormateurComponent,
    MatiereComponent,
    MatiereEditComponent,
    MatiereFormateurComponent,
    EditOrdinateurComponent,
    VideoprojecteurComponent,
    EditVideoprojecteurComponent,
    MatiereEditComponent,
    MatiereComponent,
    MatieremoduleComponent
    EditVideoprojecteurComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule,
  ],
  providers: [PlanningService, FormateurService, ModuleService, SalleService, OrdinateurService, VideoprojecteurService, MatiereService, MatieremoduleService],
  providers: [PlanningService, FormateurService, ModuleService, MatiereService, FormateurMatiereService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
