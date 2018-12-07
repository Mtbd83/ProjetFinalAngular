import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Matiere} from '../model/matiere';
import {FormateurMatiere} from '../model/formateur-matiere';
import {FormateurMatiereKey} from '../model/formateur-matiere-key';
import {Formateur} from '../model/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurMatiereService {

  private _url = 'http://localhost:8080/projet/rest/formateur/matiere';
  private _header: HttpHeaders;

  constructor(private _http: HttpClient) {
    this._header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('toto:toto')
    });
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get header(): HttpHeaders {
    return this._header;
  }

  set header(value: HttpHeaders) {
    this._header = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }

  public list(id): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(`${this.url}/${id}`, {headers: this.header});
  }

  public delete(id, idMatiere): Observable<any> {
    return this.http.delete(`${this.url}/${id}/${idMatiere}`, {headers: this.header});
  }
  //
  // public findById(key: FormateurMatiereKey): Observable<Matiere> {
  //   return this.http.get<Matiere>(`${this.url}/${key}`, {headers: this.header});
  // }
  //
  // public create(formateurMatiere: FormateurMatiere): Observable<any> {
  //   return this.http.post(this.url, formateurMatiere, {headers: this.header});
  // }
}
