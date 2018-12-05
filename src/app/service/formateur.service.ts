import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Formateur} from '../model/formateur';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private _url = 'http://localhost:8080/projet/rest/formateur';

  private _header: HttpHeaders;

  constructor(private _http: HttpClient) {
    this.header = new HttpHeaders({
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

  public list(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(this.url, {headers: this.header});
  }

  public supp(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {headers: this.header});
  }

  public findById(id): Observable<Formateur> {
    return this.http.get<Formateur>(`${this.url}/${id}`, {headers: this.header});
  }

  public update(formateur: Formateur): Observable<Formateur> {
    return this.http.put<Formateur>( this.url, formateur, {headers: this.header});
  }

  public create(formateur: Formateur): Observable<any> {
    const f = {
      nom: formateur.nom
    };
    return this.http.post(this.url, f, {headers: this.header});
  }
}
