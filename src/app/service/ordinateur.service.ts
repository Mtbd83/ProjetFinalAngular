import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ordinateur} from '../model/ordinateur';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {

  private _url = 'http://localhost:8080/projet/rest/materiel/ordinateur';

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

  public list(): Observable<Ordinateur[]> {
    return this.http.get<Ordinateur[]>(this.url, {headers: this.header});
  }

  public supp(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {headers: this.header});
  }

  public findById(id): Observable<Ordinateur> {
    return this.http.get<Ordinateur>(`${this.url}/${id}`, {headers: this.header});
  }

  public update(ordinateur: Ordinateur): Observable<Ordinateur> {
    return this.http.put<Ordinateur>( this.url, ordinateur, {headers: this.header});
  }

  public create(ordinateur: Ordinateur): Observable<any> {
    const o = {
      id: ordinateur.id,
      cout: ordinateur.cout,
      code: ordinateur.code,
      disqueDur: ordinateur.disqueDur,
      processeur: ordinateur.processeur,
      ram: ordinateur.ram,
      dateAchat: ordinateur.dateAchat
    };
    return this.http.post(this.url, o, {headers: this.header});
  }
}
