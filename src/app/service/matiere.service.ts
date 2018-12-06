import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Matiere} from '../model/matiere';
import {Formateur} from '../model/formateur';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  private _url = 'http://localhost:8080/projet/rest/matiere';
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

  public list(): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(this.url, {headers: this.header});
  }

  public delete(idMatiere: number): Observable<any> {
    return this.http.delete(`${this.url}/${idMatiere}`, {headers: this.header});
  }
  public findById(idMatiere: number): Observable<Matiere> {
    return this.http.get<Matiere>(`${this.url}/${idMatiere}`, {headers: this.header});
  }
  public update(matiere: Matiere): Observable<Matiere> {
    return this.http.put<Matiere>( this.url, matiere, {headers: this.header});
  }
  public create(matiere: Matiere): Observable<any> {
    const m = {
      titre: matiere.titre,
      duree: matiere.duree,
      objectif: matiere.objectif,
      prerequis: matiere.prerequis,
      contenu: matiere.contenu
    };
    return this.http.post(this.url, m, {headers: this.header});
  }
}
