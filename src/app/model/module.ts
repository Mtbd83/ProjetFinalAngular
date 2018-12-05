import {Planning} from '../model/planning';
import {Formateur} from '../model/formateur';
import {Matiere} from '../model/matiere';
export class Module {

  constructor(private _idModule?: number, private _dateDebut?: Date, private _dateFin?: Date,
              private _formateur?: Formateur, private _planning?: Planning, private _matiere?: Matiere) {

  }


  get idModule(): number {
    return this._idModule;
  }

  set idModule(value: number) {
    this._idModule = value;
  }

  get dateDebut(): Date {
    return this._dateDebut;
  }

  set dateDebut(value: Date) {
    this._dateDebut = value;
  }

  get dateFin(): Date {
    return this._dateFin;
  }

  set dateFin(value: Date) {
    this._dateFin = value;
  }

  get formateur(): Formateur {
    return this._formateur;
  }

  set formateur(value: Formateur) {
    this._formateur = value;
  }

  get planning(): Planning {
    return this._planning;
  }

  set planning(value: Planning) {
    this._planning = value;
  }


  get matiere(): Matiere {
    return this._matiere;
  }

  set matiere(value: Matiere) {
    this._matiere = value;
  }
}
