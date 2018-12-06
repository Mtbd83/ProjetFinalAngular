import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Salle} from '../model/salle';
import {SalleService} from '../service/salle.service';

@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.css']
})
export class EditSalleComponent implements OnInit {

  private _salle: Salle = new Salle();

  constructor(private _salleService: SalleService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      if (params.id) {
        this._salleService.findById(params.id).subscribe(res => {
          this._salle = res;
        });
      }
    });
  }

  public save() {
    if (this._salle.id) {
      this._salleService.update(this._salle).subscribe(resultat => {
        this.retourListSalle();
      });
    } else {
      this._salleService.create(this._salle).subscribe(resultat => {
        this.retourListSalle();
      });
    }
  }

  private retourListSalle() {
    this._router.navigate(['/materiel/salle']);
  }


  get salle(): Salle {
    return this._salle;
  }

  set salle(value: Salle) {
    this._salle = value;
  }

  get salleService(): SalleService {
    return this._salleService;
  }

  set salleService(value: SalleService) {
    this._salleService = value;
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
