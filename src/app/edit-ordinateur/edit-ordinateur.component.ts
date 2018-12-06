import {Component, OnInit} from '@angular/core';
import {Ordinateur} from '../model/ordinateur';
import {ActivatedRoute, Router} from '@angular/router';
import {OrdinateurService} from '../service/ordinateur.service';

@Component({
  selector: 'app-edit-ordinateur',
  templateUrl: './edit-ordinateur.component.html',
  styleUrls: ['./edit-ordinateur.component.css']
})
export class EditOrdinateurComponent implements OnInit {

  private _ordinateur: Ordinateur = new Ordinateur();

  constructor(private _ordinateurService: OrdinateurService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      if (params.id) {
        this._ordinateurService.findById(params.id).subscribe(res => {
          this._ordinateur = res;
        });
      }
    });
  }

  public save() {
    if (this._ordinateur.id) {
      this._ordinateurService.update(this._ordinateur).subscribe(resultat => {
        this.retourListOrdinateur();
      });
    } else {
      this._ordinateurService.create(this._ordinateur).subscribe(resultat => {
        this.retourListOrdinateur();
      });
    }
  }

  private retourListOrdinateur() {
    this._router.navigate(['/materiel/ordinateur']);
  }


  get ordinateur(): Ordinateur {
    return this._ordinateur;
  }

  set ordinateur(value: Ordinateur) {
    this._ordinateur = value;
  }

  get ordinateurService(): OrdinateurService {
    return this._ordinateurService;
  }

  set ordinateurService(value: OrdinateurService) {
    this._ordinateurService = value;
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
