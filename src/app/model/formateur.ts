import {FormateurMatiere} from './formateur-matiere';
import {Adresse} from './adresse';
import {Module} from './module';
import {Login} from './login';

export class Formateur {

  constructor(private _id?: number, private _nom?: string, private _prenom?: string, private _adresse?: Adresse, private _mail?: string,
              private _telephone?: number, private _formateurmatiere?: Array<FormateurMatiere>, private _login?: Login,
              private _modules?: Array<Module>) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get adresse(): Adresse {
    return this._adresse;
  }

  set adresse(value: Adresse) {
    this._adresse = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get telephone(): number {
    return this._telephone;
  }

  set telephone(value: number) {
    this._telephone = value;
  }

  get formateurmatiere(): Array<FormateurMatiere> {
    return this._formateurmatiere;
  }

  set formateurmatiere(value: Array<FormateurMatiere>) {
    this._formateurmatiere = value;
  }

  get login(): Login {
    return this._login;
  }

  set login(value: Login) {
    this._login = value;
  }

  get modules(): Array<Module> {
    return this._modules;
  }

  set modules(value: Array<Module>) {
    this._modules = value;
  }
}
