export class Ordinateur {
  constructor(private _id?: number, private _code?: number, private _cout?: number, private _disponibilite?: boolean,
              private _processeur?: string, private _ram?: number, private _disqueDur?: number, private _dateAchat?: Date) {
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

  get processeur(): string {
    return this._processeur;
  }

  set processeur(value: string) {
    this._processeur = value;
  }

  get ram(): number {
    return this._ram;
  }

  set ram(value: number) {
    this._ram = value;
  }

  get disqueDur(): number {
    return this._disqueDur;
  }

  set disqueDur(value: number) {
    this._disqueDur = value;
  }


  get dateAchat(): Date {
    return this._dateAchat;
  }

  set dateAchat(value: Date) {
    this._dateAchat = value;
  }
}
