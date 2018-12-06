import {Component, OnInit} from '@angular/core';
import {Matiere} from '../model/matiere';
import {MatieremoduleService} from '../service/matieremodule.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-matieremodule',
  templateUrl: './matieremodule.component.html',
  styleUrls: ['./matieremodule.component.css']
})
export class MatieremoduleComponent implements OnInit {

  private _listeMatieres: Array <Matiere>;
  private _matiere = new Matiere();

  constructor(private _matiereModuleService: MatieremoduleService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      if (params.idMatiere) {
        this._matiereModuleService.findById(params.idMatiere).subscribe(res => {
          this._matiere = res;
        });
      }
    });

  }


  get listeMatieres(): Array<Matiere> {
    return this._listeMatieres;
  }

  set listeMatieres(value: Array<Matiere>) {
    this._listeMatieres = value;
  }

  get matiere(): Matiere {
    return this._matiere;
  }

  set matiere(value: Matiere) {
    this._matiere = value;
  }

  get matiereModuleService(): MatieremoduleService {
    return this._matiereModuleService;
  }

  set matiereModuleService(value: MatieremoduleService) {
    this._matiereModuleService = value;
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
}
