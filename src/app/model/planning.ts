import {Salle} from './salle';
import {Gestionnaire} from './gestionnaire';
import {Videoprojecteur} from './videoprojecteur';
import {Module} from './module';

export class Planning {

  constructor(private _id?: number, private _datedebut?: Date, private _datefin?: Date, private _salle?: Salle,
              private _gestionnaire?: Gestionnaire, private _videoprojecteur?: Videoprojecteur, private _modules?: Array<Module>) {

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

  get videoprojecteur(): Videoprojecteur {
    return this._videoprojecteur;
  }

  set videoprojecteur(value: Videoprojecteur) {
    this._videoprojecteur = value;
  }

  get modules(): Array<Module> {
    return this._modules;
  }

  set modules(value: Array<Module>) {
    this._modules = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get datedebut(): Date {
    return this._datedebut;
  }

  set datedebut(value: Date) {
    this._datedebut = value;
  }

  get datefin(): Date {
    return this._datefin;
  }

  set datefin(value: Date) {
    this._datefin = value;
  }
}
