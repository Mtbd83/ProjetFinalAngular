import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Module} from '../model/module';



@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private url = 'http://localhost:8080/formation/rest/formateur';
  private header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Basic ' + btoa('toto:toto')
    });
  }

  public list(): Observable<Module[]>{
    return this.http.get<Module[]>(this.url, {headers: this.header});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id, {headers: this.header});
  }

  public findById(id: string) {
    return this.http.get<Module>(this.url + '/' + id, {headers: this.header});
  }

  public create(module: Module) {
    const mod = {
      datedebut: module.dateDebut,
      datefin: module.dateFin,
      formateur: module.formateur,
      planning: module.planning,
      matiere: module.matiere
    };
    return this.http.post<Module>(this.url, mod, {headers: this.header});
  }

  public update(module: Module) {
    return this.http.put<Module>(this.url, module, {headers: this.header});
  }
}
