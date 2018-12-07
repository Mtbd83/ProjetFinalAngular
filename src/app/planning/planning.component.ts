import { Component, OnInit } from '@angular/core';
import {PlanningService} from '../service/planning.service';
import {Planning} from '../model/planning';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  private _planning: Array<Planning>;

  constructor(private _planningService: PlanningService) { }

  ngOnInit() {
    this.list();
  }


  public list() {
    this._planningService.list().subscribe(resultat => {
      this._planning = resultat;
    }, error => {
      console.log(error);
    });
  }

  public deletePlanning(id: number) {
    this._planningService.delete(id).subscribe(resultat => {
      this.list();
    }, error => {
      console.log(error);
    });
  }


  get planning(): Array<Planning> {
    return this._planning;
  }

  set planning(value: Array<Planning>) {
    this._planning = value;
  }

  get planningService(): PlanningService {
    return this._planningService;
  }

  set planningService(value: PlanningService) {
    this._planningService = value;
  }
}
