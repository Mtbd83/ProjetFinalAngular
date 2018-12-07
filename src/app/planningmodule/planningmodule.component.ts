import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Planning} from '../model/planning';
import {Module} from '../model/module';
import {PlanningmoduleService} from '../service/planningmodule.service';

@Component({
  selector: 'app-planningmodule',
  templateUrl: './planningmodule.component.html',
  styleUrls: ['./planningmodule.component.css']
})
export class PlanningmoduleComponent implements OnInit {

  private _planning: Planning;
  private _listeModule = new Array<Module>();

  constructor(private _planningService: PlanningmoduleService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.idPlanning) {
        this._planningService.findById(params.idPlanning).subscribe(resultat => {
          this._planning = resultat;
          this._planningService.listModule(params.idPlanning).subscribe(resultat1 => {
            this._listeModule = resultat1.modules;
            console.log(this._listeModule);
          });
        });
      }
    });
  }


  get planning(): Planning {
    return this._planning;
  }

  set planning(value: Planning) {
    this._planning = value;
  }

  get listeModule(): Module[] {
    return this._listeModule;
  }

  set listeModule(value: Module[]) {
    this._listeModule = value;
  }

  get planningService(): PlanningmoduleService {
    return this._planningService;
  }

  set planningService(value: PlanningmoduleService) {
    this._planningService = value;
  }
}
