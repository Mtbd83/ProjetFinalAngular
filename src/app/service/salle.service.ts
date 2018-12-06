import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Salle} from '../model/salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  private _url = 'http://localhost:8080/projet/rest/materiel/salle';

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

  public list(): Observable<Salle[]> {
    return this._http.get<Salle[]>(this._url, {headers: this._header});
  }

  public delete(id): Observable<any> {
    return this._http.delete(`${this._url}/${id}`, {headers: this._header});
  }

  public findById(id): Observable<Salle> {
    return this._http.get<Salle>(`${this._url}/${id}`, {headers: this._header});
  }

  public update(salle: Salle): Observable<Salle> {
    return this._http.put<Salle>(this._url, salle, {headers: this._header});
  }

  public create(salle: Salle): Observable<any> {
    const s = {
      id: salle.id,
      code: salle.code,
      cout: salle.cout,
      disponibilite: salle.disponibilite,
      capacite: salle.capacite
    };
    return this._http.post(this._url, s, {headers: this.header});
  }
}
