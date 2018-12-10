import {Role} from './role.enum';

export class User {
  constructor(private _username?: string, private _password?: string,
              private _enable?: boolean, private _role?: Array<Role>, private _token?: string) {
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get enable(): boolean {
    return this._enable;
  }

  set enable(value: boolean) {
    this._enable = value;
  }


  get role(): Array<Role> {
    return this._role;
  }

  set role(value: Array<Role>) {
    this._role = value;
  }


  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
