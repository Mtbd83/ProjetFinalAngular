import {Component, OnInit} from '@angular/core';
import {Formateur} from '../model/formateur';
import {FormateurService} from '../service/formateur.service';
import {Matiere} from '../model/matiere';
import {FormateurMatiereKey} from '../model/formateur-matiere-key';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  private i: number;

  private j: number;

  private _filtre = '';

  private _listeFormateurs = new Array<Formateur>();

  private _formateur = new Formateur();

  private _matiere = new Matiere();

  private _listeMatieres = new Array<Matiere>();

  constructor(private _formateurService: FormateurService) {
  }

  ngOnInit() {
    this.listFormateurs();
  }

  get listeFormateurs(): Formateur[] {
    return this._listeFormateurs;
  }

  set listeFormateurs(value: Formateur[]) {
    this._listeFormateurs = value;
  }

  get formateurService(): FormateurService {
    return this._formateurService;
  }

  set formateurService(value: FormateurService) {
    this._formateurService = value;
  }

  get filtre(): string {
    return this._filtre;
  }

  set filtre(value: string) {
    this._filtre = value;
  }

  get formateur(): Formateur {
    return this._formateur;
  }

  set formateur(value: Formateur) {
    this._formateur = value;
  }

  get matiere(): Matiere {
    return this._matiere;
  }

  set matiere(value: Matiere) {
    this._matiere = value;
  }

  get listeMatieres(): Matiere[] {
    return this._listeMatieres;
  }

  set listeMatieres(value: Matiere[]) {
    this._listeMatieres = value;
  }

  public listFormateurs() {
    this.formateurService.list().subscribe(resultat => {
      this.listeFormateurs = resultat;
    }, error => {
      console.log(error);
    });
  }

  supp(i) {
    this.formateurService.supp(i).subscribe(resultat => {
      this.listFormateurs();
    });
  }

}
