import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanningComponent } from './planning/planning.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {PlanningService} from './service/planning.service';
import {FormateurService} from './service/formateur.service';
import {ModuleService} from './service/module.service';
import {FormateurComponent} from './formateur/formateur.component';
import { EditPlanningComponent } from './edit-planning/edit-planning.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { ModuleComponent } from './module/module.component';
import { EditModuleComponent } from './edit-module/edit-module.component';
import {EditFormateurComponent} from './edit-formateur/edit-formateur.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanningComponent,
    HomeComponent,
    FormateurComponent,
    EditPlanningComponent,
    ModuleComponent,
    EditModuleComponent,
    EditFormateurComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule
  ],
  providers: [PlanningService, FormateurService, ModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
