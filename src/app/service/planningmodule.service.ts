import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Module} from '../model/module';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Planning} from '../model/planning';

@Injectable({
  providedIn: 'root'
})
export class PlanningmoduleService {

  private _url = 'http://localhost:8080/projet/rest/planning/module';
  private _header: HttpHeaders;

  constructor(private _http: HttpClient) {
    this._header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('toto:toto')
    });
  }

  public listModule(idPlanning): Observable<Planning> {
    return this._http.get<Planning>(`${this._url}/${idPlanning}`, {headers: this._header});
  }
  public findById(idPlanning: number): Observable<Planning> {
    return this._http.get<Planning>(`${this._url}/${idPlanning}`, {headers: this._header});
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
}
