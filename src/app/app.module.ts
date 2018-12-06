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
import {SalleService} from './service/salle.service';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {ModuleComponent} from './module/module.component';
import {EditModuleComponent} from './edit-module/edit-module.component';
import {EditPlanningComponent} from './edit-planning/edit-planning.component';
import { EditOrdinateurComponent } from './edit-ordinateur/edit-ordinateur.component';
import {OrdinateurService} from './service/ordinateur.service';
import { VideoprojecteurComponent } from './videoprojecteur/videoprojecteur.component';
import { EditVideoprojecteurComponent } from './edit-videoprojecteur/edit-videoprojecteur.component';
import {VideoprojecteurService} from './service/videoprojecteur.service';


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
    EditOrdinateurComponent,
    VideoprojecteurComponent,
    EditVideoprojecteurComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule,
  ],
  providers: [PlanningService, FormateurService, ModuleService, SalleService, OrdinateurService, VideoprojecteurService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
