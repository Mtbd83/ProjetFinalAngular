import { Component, OnInit } from '@angular/core';
import {Module} from '../model/module';
import {ModuleService} from '../service/module.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Planning} from '../model/planning';
import {PlanningService} from '../service/planning.service';
import {Matiere} from '../model/matiere';
import {MatiereService} from '../service/matiere.service';
import {Formateur} from '../model/formateur';
import {FormateurService} from '../service/formateur.service';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.css']
})
export class EditModuleComponent implements OnInit {

  private _module = new Module();
  private _planning = new Planning();
  private _matieres: Array <Matiere>;
  private _formateurs: Array <Formateur>;
  private _formateur = new Formateur();

  constructor(private _moduleService: ModuleService, private _planningService: PlanningService, private _matiereService: MatiereService,
              private _formateurService: FormateurService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      if (params.idModule) {
        this._moduleService.findById(params.idModule).subscribe(result => {
          this._module = result;
          if (this.module.formateur) {
            this._formateur.nom = this.module.formateur.nom;
          } else {
            this._formateur.nom = ' ';
          }
        });
      }
    });
    // this.listMatiere();
    this.listFormateur();
  }

  public save() {
    if (this._module.idModule) {
      this._moduleService.update(this._module).subscribe(result => {
        this.backList();
      });
    } else {
      this._moduleService.create(this._module).subscribe(result => {
        this.backList();
      });
    }
  }
  private backList() {
    this._router.navigate(['/module']);
  }


  get formateur(): Formateur {
    return this._formateur;
  }

  set formateur(value: Formateur) {
    this._formateur = value;
  }

  get planning(): Planning {
    return this._planning;
  }

  set planning(value: Planning) {
    this._planning = value;
  }

  get planningService(): PlanningService {
    return this._planningService;
  }

  set planningService(value: PlanningService) {
    this._planningService = value;
  }

  get module(): Module {
    return this._module;
  }

  set module(value: Module) {
    this._module = value;
  }

  get moduleService(): ModuleService {
    return this._moduleService;
  }

  set moduleService(value: ModuleService) {
    this._moduleService = value;
  }

  get activatedRoute(): ActivatedRoute {
    return this._activatedRoute;
  }

  set activatedRoute(value: ActivatedRoute) {
    this._activatedRoute = value;
  }

  get router(): Router {
    return this._router;
  }

  set router(value: Router) {
    this._router = value;
  }


  get matieres(): Array<Matiere> {
    return this._matieres;
  }

  set matieres(value: Array<Matiere>) {
    this._matieres = value;
  }

  get matiereService(): MatiereService {
    return this._matiereService;
  }

  set matiereService(value: MatiereService) {
    this._matiereService = value;
  }


  get formateurs(): Array<Formateur> {
    return this._formateurs;
  }

  set formateurs(value: Array<Formateur>) {
    this._formateurs = value;
  }

  get formateurService(): FormateurService {
    return this._formateurService;
  }

  set formateurService(value: FormateurService) {
    this._formateurService = value;
  }

//
  // public listMatiere() {
  //   this._matiereService.list().subscribe(resultat => {
  //     this._matieres = resultat;
  //   }, error => {
  //     console.log(error);
  //   });
  // }


  public listFormateur() {
    this._formateurService.list().subscribe(resultat => {
      this.formateurs = resultat;
    }, error => {
      console.log(error);
    });
  }
}
