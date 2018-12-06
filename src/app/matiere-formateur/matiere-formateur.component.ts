import { Component, OnInit } from '@angular/core';
import {FormateurMatiere} from '../model/formateur-matiere';
import {FormateurMatiereService} from '../service/formateur-matiere.service';
import {MatiereService} from '../service/matiere.service';
import {Matiere} from '../model/matiere';
import {Formateur} from '../model/formateur';
import {ActivatedRoute, Router} from '@angular/router';
import {FormateurService} from '../service/formateur.service';

@Component({
  selector: 'app-matiere-formateur',
  templateUrl: './matiere-formateur.component.html',
  styleUrls: ['./matiere-formateur.component.css']
})
export class MatiereFormateurComponent implements OnInit {

  private i: number;

  private _formateurMatiere = new FormateurMatiere();

  private _listeFM = new Array<FormateurMatiere>();

  private _formateur = new Formateur();

  private _listeMatieres = new Array<Matiere>();

  constructor(private _formateurMatiereService: FormateurMatiereService, private _matiereService: MatiereService,
              private _formateurService: FormateurService , private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.formateurService.findById(params.id).subscribe(resultat => {
          this.formateur = resultat;
          this.list();
          this.listMatiere();
        });
      }
    });
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

  get listeMatieres(): Matiere[] {
    return this._listeMatieres;
  }

  set listeMatieres(value: Matiere[]) {
    this._listeMatieres = value;
  }

  get matiereService(): MatiereService {
    return this._matiereService;
  }

  set matiereService(value: MatiereService) {
    this._matiereService = value;
  }

  get formateurMatiere(): FormateurMatiere {
    return this._formateurMatiere;
  }

  set formateurMatiere(value: FormateurMatiere) {
    this._formateurMatiere = value;
  }

  get listeFM(): FormateurMatiere[] {
    return this._listeFM;
  }

  set listeFM(value: FormateurMatiere[]) {
    this._listeFM = value;
  }

  get formateurMatiereService(): FormateurMatiereService {
    return this._formateurMatiereService;
  }

  set formateurMatiereService(value: FormateurMatiereService) {
    this._formateurMatiereService = value;
  }

  public list() {
    this.formateurMatiereService.list().subscribe(resultat => {
      this.listeFM = resultat;
    }, error => {
      console.log(error);
    });
  }

  public listMatiere() {
    this.matiereService.list().subscribe(resultat => {
      if ( this.formateur.formateurmatiere !== null) {
        for ( this.i = 0; this.i < this.formateur.formateurmatiere.length; this.i ++) {
          this.listeMatieres.push(this.formateur.formateurmatiere[this.i].key.matiere);
        }
      }
    }, error => {
      console.log(error);
    });
  }

  delete(fm: FormateurMatiere) {
    this.formateurMatiereService.delete(fm.key).subscribe(resultat => {
      this.list();
    });
  }
}
