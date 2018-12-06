import {FormateurMatiereKey} from './formateur-matiere-key';

export class FormateurMatiere {

  constructor(private _key?: FormateurMatiereKey) {}

  get key(): FormateurMatiereKey {
    return this._key;
  }

  set key(value: FormateurMatiereKey) {
    this._key = value;
  }
}
