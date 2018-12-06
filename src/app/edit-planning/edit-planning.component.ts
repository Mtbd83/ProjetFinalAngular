import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanningService} from '../service/planning.service';
import {ModuleService} from '../service/module.service';
import {Planning} from '../model/planning';
import {Module} from '../model/module';
import {Salle} from '../model/salle';
import {Videoprojecteur} from '../model/videoprojecteur';
import {SalleService} from '../service/salle.service';


@Component({
  selector: 'app-edit-planning',
  templateUrl: './edit-planning.component.html',
  styleUrls: ['./edit-planning.component.css']
})
export class EditPlanningComponent implements OnInit {

   private _modules: Array<Module>;
   private _salles: Array<Salle>;
   private _videoprojs: Array<Videoprojecteur>;
   private _planning = new Planning();

  constructor(private _planningService: PlanningService, private _moduleService: ModuleService,
              private _activatedRoute: ActivatedRoute, private _router: Router, private _salleService: SalleService) {
  }

  ngOnInit() {
     this.listSalle();
    this._activatedRoute.params.subscribe(params => {
      if (params.idPlanning) {
        this.planningService.findById(params.idPlanning).subscribe(result => {
          this._planning = result;
        });
      }
    });
  }
  public save() {
    if (this._planning.idPlanning) {
      this.planningService.update(this._planning).subscribe(result => {
        this.backList();
      });
    } else {
      this.planningService.create(this._planning).subscribe(result => {
        this.backList();
      });
    }
  }


  private backList() {
    this._router.navigate(['/planning']);
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

  get moduleService(): ModuleService {
    return this._moduleService;
  }

  set moduleService(value: ModuleService) {
    this._moduleService = value;
  }


  get modules(): Array<Module> {
    return this._modules;
  }

  set modules(value: Array<Module>) {
    this._modules = value;
  }

  get salles(): Array<Salle> {
    return this._salles;
  }

  set salles(value: Array<Salle>) {
    this._salles = value;
  }

  get videoprojs(): Array<Videoprojecteur> {
    return this._videoprojs;
  }

  set videoprojs(value: Array<Videoprojecteur>) {
    this._videoprojs = value;
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

  get salleService(): SalleService {
    return this._salleService;
  }

  set salleService(value: SalleService) {
    this._salleService = value;
  }

  public listSalle() {
    this._salleService.list().subscribe(resultat => {
      this._salles = resultat;
    }, error => {
      console.log(error);
    });
  }
}
