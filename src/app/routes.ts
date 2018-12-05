import {Routes} from '@angular/router';
import {PlanningComponent} from './planning/planning.component';
import {HomeComponent} from './home/home.component';
import {FormateurComponent} from './formateur/formateur.component';
import {EditFormateurComponent} from './edit-formateur/edit-formateur.component';

export const routes: Routes = [
  {path: 'planning', component: PlanningComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'formateur', component: FormateurComponent},
  {path: 'formateur/edit', component: EditFormateurComponent},
  {path: 'formateur/edit/:id', component: EditFormateurComponent}
];
