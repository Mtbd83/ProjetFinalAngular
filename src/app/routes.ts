import {Routes} from '@angular/router';
import {PlanningComponent} from './planning/planning.component';
import {HomeComponent} from './home/home.component';
import {FormateurComponent} from './formateur/formateur.component';
import {EditFormateurComponent} from './edit-formateur/edit-formateur.component';
import {ModuleComponent} from './module/module.component';
import {EditModuleComponent} from './edit-module/edit-module.component';
import {EditPlanningComponent} from './edit-planning/edit-planning.component';
import {SalleComponent} from './salle/salle.component';
import {EditSalleComponent} from './edit-salle/edit-salle.component';
import {OrdinateurComponent} from './ordinateur/ordinateur.component';
import {EditOrdinateurComponent} from './edit-ordinateur/edit-ordinateur.component';
import {VideoprojecteurComponent} from './videoprojecteur/videoprojecteur.component';
import {EditVideoprojecteurComponent} from './edit-videoprojecteur/edit-videoprojecteur.component';
import {MatiereEditComponent} from './matiere-edit/matiere-edit.component';
import {MatiereComponent} from './matiere/matiere.component';
import {MatieremoduleComponent} from './matieremodule/matieremodule.component';
import {MatiereFormateurComponent} from './matiere-formateur/matiere-formateur.component';
import {UserComponent} from './user/user.component';
import {UserService} from './service/user.service';
import {Authguard} from './model/authguard';
import {PlanningmoduleComponent} from './planningmodule/planningmodule.component';


export const routes: Routes = [
  {path: 'planning', component: PlanningComponent},
  {path: 'home', component: HomeComponent, canActivate: [Authguard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'formateur', component: FormateurComponent, canActivate: [Authguard]},
  {path: 'formateur/edit', component: EditFormateurComponent},
  {path: 'formateur/edit/:id', component: EditFormateurComponent},
  {path: 'module', component: ModuleComponent, canActivate: [Authguard]},
  {path: 'formateur/matiere/:id', component: MatiereFormateurComponent},
  {path: 'module/edit', component: EditModuleComponent},
  {path: 'module/edit/:idModule', component: EditModuleComponent},
  {path: 'planning', component: PlanningComponent, canActivate: [Authguard]},
  {path: 'planning/edit', component: EditPlanningComponent},
  {path: 'planning/edit/:idPlanning', component:  EditPlanningComponent},
  {path: 'matiere', component: MatiereComponent, canActivate: [Authguard]},
  {path: 'matiere/edit', component: MatiereEditComponent},
  {path: 'matiere/edit/:idMatiere', component:  MatiereEditComponent},
  {path: 'matiere/module/:idMatiere', component:  MatieremoduleComponent},
  {path: 'materiel/salle', component: SalleComponent, canActivate: [Authguard]},
  {path: 'materiel/salle/edit', component: EditSalleComponent},
  {path: 'materiel/salle/edit/:id', component: EditSalleComponent},
  {path: 'materiel/ordinateur', component: OrdinateurComponent, canActivate: [Authguard]},
  {path: 'materiel/ordinateur/edit', component: EditOrdinateurComponent},
  {path: 'materiel/ordinateur/edit/:id', component: EditOrdinateurComponent},
  {path: 'materiel/videoprojecteur', component: VideoprojecteurComponent, canActivate: [Authguard]},
  {path: 'materiel/videoprojecteur/edit', component: EditVideoprojecteurComponent},
  {path: 'materiel/videoprojecteur/edit/:id', component: EditVideoprojecteurComponent},
  {path: 'user', component: UserComponent}
];
