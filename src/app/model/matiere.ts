import {FormateurMatiere} from './formateur-matiere';
import {Module} from './module';

export class Matiere {

  constructor(private _idMatiere?: number, private _titre?: string, private _duree?: number, private _objectif?: string,
              private _prerequis?: string, private _contenu?: string, private _module?: Module,
              private _formateursMatieres?: Array<FormateurMatiere>)  {
  }

  get idMatiere(): number {
    return this._idMatiere;
  }

  set idMatiere(value: number) {
    this._idMatiere = value;
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get duree(): number {
    return this._duree;
  }

  set duree(value: number) {
    this._duree = value;
  }

  get objectif(): string {
    return this._objectif;
  }

  set objectif(value: string) {
    this._objectif = value;
  }

  get prerequis(): string {
    return this._prerequis;
  }

  set prerequis(value: string) {
    this._prerequis = value;
  }

  get contenu(): string {
    return this._contenu;
  }

  set contenu(value: string) {
    this._contenu = value;
  }

  get module(): Module {
    return this._module;
  }

  set module(value: Module) {
    this._module = value;
  }

  get formateursMatieres(): Array<FormateurMatiere> {
    return this._formateursMatieres;
  }

  set formateursMatieres(value: Array<FormateurMatiere>) {
    this._formateursMatieres = value;
  }
}
