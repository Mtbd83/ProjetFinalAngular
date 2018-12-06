export class Materiel {
  constructor(private _id?: number, private _code?: number, private _cout?: number, private _disponibilite?: boolean) {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get code(): number {
    return this._code;
  }

  set code(value: number) {
    this._code = value;
  }

  get cout(): number {
    return this._cout;
  }

  set cout(value: number) {
    this._cout = value;
  }

  get disponibilite(): boolean {
    return this._disponibilite;
  }

  set disponibilite(value: boolean) {
    this._disponibilite = value;
  }
}
