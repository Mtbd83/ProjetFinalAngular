import {Formateur} from './formateur';
import {Matiere} from './matiere';

export class FormateurMatiereKey {

  constructor(private _formateur?: Formateur, private _matiere?: Matiere) {}

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
}
