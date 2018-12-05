import {Salle} from './salle';
import {Gestionnaire} from './gestionnaire';
import {Videoprojecteur} from './videoprojecteur';
import {Module} from './module';

export class Planning {

  constructor(private _idPlanning?: number, private _dateDebut?: Date, private _dateFin?: Date, private _salle?: Salle,
              private _gestionnaire?: Gestionnaire, private _videoProj?: Videoprojecteur, private _modules?: Array<Module>) {

  }


  get salle(): Salle {
    return this._salle;
  }

  set salle(value: Salle) {
    this._salle = value;
  }

  get gestionnaire(): Gestionnaire {
    return this._gestionnaire;
  }

  set gestionnaire(value: Gestionnaire) {
    this._gestionnaire = value;
  }


  get videoProj(): Videoprojecteur {
    return this._videoProj;
  }

  set videoProj(value: Videoprojecteur) {
    this._videoProj = value;
  }

  get modules(): Array<Module> {
    return this._modules;
  }

  set modules(value: Array<Module>) {
    this._modules = value;
  }


  get idPlanning(): number {
    return this._idPlanning;
  }

  set idPlanning(value: number) {
    this._idPlanning = value;
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
}
