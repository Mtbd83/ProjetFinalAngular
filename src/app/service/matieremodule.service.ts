import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Matiere} from '../model/matiere';
import {Module} from '../model/module';

@Injectable({
  providedIn: 'root'
})
export class MatieremoduleService {

  private _url = 'http://localhost:8080/projet/rest/matiere/module';
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

  public listModule(idMatiere): Observable<Matiere> {
    return this.http.get<Matiere>(`${this.url}/${idMatiere}`, {headers: this.header});
  }
  public findById(idMatiere: number): Observable<Matiere> {
    return this.http.get<Matiere>(`${this.url}/${idMatiere}`, {headers: this.header});
  }


}
