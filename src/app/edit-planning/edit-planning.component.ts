import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanningService} from '../service/planning.service';
import {ModuleService} from '../service/module.service';
import {Planning} from '../model/planning';


@Component({
  selector: 'app-edit-planning',
  templateUrl: './edit-planning.component.html',
  styleUrls: ['./edit-planning.component.css']
})
export class EditPlanningComponent implements OnInit {

/*   private _modules: Array<Module>;
   private salles: Array<Salle>;
   private videoprojs: Array<Videoprojecteur>;*/
   private _planning = new Planning();

  constructor(private _planningService: PlanningService, private _moduleService: ModuleService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // this.listSalle();
    this.activatedRoute.params.subscribe(params => {
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
    this.router.navigate(['/planning']);
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


  //
  // public listSalle() {
  //   this._salleService.list().subscribe(resultat => {
  //     this._salles = resultat;
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
