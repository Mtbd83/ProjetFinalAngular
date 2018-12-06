import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Videoprojecteur} from '../model/videoprojecteur';

@Injectable({
  providedIn: 'root'
})
export class VideoprojecteurService {

  private _url = 'http://localhost:8080/projet/rest/materiel/videoprojecteur';

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

  public list(): Observable<Videoprojecteur[]> {
    return this._http.get<Videoprojecteur[]>(this._url, {headers: this._header});
  }

  public delete(id): Observable<any> {
    return this._http.delete(`${this._url}/${id}`, {headers: this._header});
  }

  public findById(id): Observable<Videoprojecteur> {
    return this._http.get<Videoprojecteur>(`${this._url}/${id}`, {headers: this._header});
  }

  public update(videoProj: Videoprojecteur): Observable<Videoprojecteur> {
    return this._http.put<Videoprojecteur>(this._url, videoProj, {headers: this._header});
  }

  public create(videoProj: Videoprojecteur): Observable<any> {
    const vp = {
      id: videoProj.id,
      code: videoProj.code,
      cout: videoProj.cout,
      disponibilite: videoProj.disponibilite
    };
    return this._http.post(this._url, vp, {headers: this.header});
  }
}
