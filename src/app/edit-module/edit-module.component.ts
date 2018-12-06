import { Component, OnInit } from '@angular/core';
import {Module} from '../model/module';
import {ModuleService} from '../service/module.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Planning} from '../model/planning';
import {PlanningService} from '../service/planning.service';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.css']
})
export class EditModuleComponent implements OnInit {

  private _module = new Module();
  private _planning = new Planning();

  constructor(private _moduleService: ModuleService, private _planningService: PlanningService,
              private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      if (params.idModule) {
        this._moduleService.findById(params.idModule).subscribe(result => {
          this._module = result;
        });
      }
    });
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
}
