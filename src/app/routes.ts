import {Routes} from '@angular/router';
import {PlanningComponent} from './planning/planning.component';
import {HomeComponent} from './home/home.component';
import {FormateurComponent} from './formateur/formateur.component';
import {EditFormateurComponent} from './edit-formateur/edit-formateur.component';
import {ModuleComponent} from './module/module.component';
import {EditModuleComponent} from './edit-module/edit-module.component';
import {EditPlanningComponent} from './edit-planning/edit-planning.component';


export const routes: Routes = [
  {path: 'planning', component: PlanningComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'formateur', component: FormateurComponent},
  {path: 'formateur/edit', component: EditFormateurComponent},
  {path: 'formateur/edit/:id', component: EditFormateurComponent},
  {path: 'module', component: ModuleComponent},
  {path: 'module/edit', component: EditModuleComponent},
  {path: 'module/edit/:idModule', component: EditModuleComponent},
  {path: 'planning', component: ModuleComponent},
  {path: 'planning/edit', component: EditPlanningComponent},
  {path: 'planning/edit/:idModule', component:  EditPlanningComponent}
];
