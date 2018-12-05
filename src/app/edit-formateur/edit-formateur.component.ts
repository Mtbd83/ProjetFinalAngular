import { Component, OnInit } from '@angular/core';
import {Formateur} from '../model/formateur';
import {FormateurService} from '../service/formateur.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Adresse} from '../model/adresse';

@Component({
  selector: 'app-edit-formateur',
  templateUrl: './edit-formateur.component.html',
  styleUrls: ['./edit-formateur.component.css']
})
export class EditFormateurComponent implements OnInit {

  private _formateur: Formateur = new Formateur();

  constructor(private _formateurService: FormateurService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this.formateur.adresse = new Adresse();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.formateurService.findById(params.id).subscribe(resultat => {
          this.formateur = resultat;
        });
      }
    });
  }

  get router(): Router {
    return this._router;
  }

  set router(value: Router) {
    this._router = value;
  }

  get formateur(): Formateur {
    return this._formateur;
  }

  set formateur(value: Formateur) {
    this._formateur = value;
  }

  get formateurService(): FormateurService {
    return this._formateurService;
  }

  set formateurService(value: FormateurService) {
    this._formateurService = value;
  }

  get activatedRoute(): ActivatedRoute {
    return this._activatedRoute;
  }

  set activatedRoute(value: ActivatedRoute) {
    this._activatedRoute = value;
  }

  public save() {
    if (this.formateur.id) {
      this.formateurService.update(this.formateur).subscribe(resultat => {
        this.retourListeFormateurs();
      });
    } else {
      this.formateurService.create(this.formateur).subscribe(resultat => {
        this.retourListeFormateurs();
      });
    }
  }

  private retourListeFormateurs() {
    this.router.navigate(['/formateur']);
  }
}
