import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Planning} from '../model/planning';
import {Observable} from 'rxjs';
import {Module} from '../model/module';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  private url = 'http://localhost:8080/projet/rest/planning';
  private header: HttpHeaders;
  private user: User;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Basic ' + btoa('toto:toto')
    });
  }

  public list(): Observable<Planning[]> {
    return this.http.get<Planning[]>(this.url, {headers: this.header});
  }

  public listModule(idPlanning): Observable<Module[]> {
    return this.http.get<Module[]>(this.url + '/module/' + idPlanning, {headers: this.header});
  }
  public delete(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id, {headers: this.header});
  }

  public findById(id: string) {
    return this.http.get<Planning>(this.url + '/' + id, {headers: this.header});
  }

  public create(planning: Planning) {
    const plan = {
      dateDebut: planning.dateDebut,
      dateFin: planning.dateFin,
      salle: planning.salle,
      modules: planning.modules,
      gestionnaire: planning.gestionnaire,
      videoProj: planning.videoProj
    };
    return this.http.post<Planning>(this.url, plan, {headers: this.header});
  }

  public update(planning: Planning) {
    return this.http.put<Planning>(this.url, planning, {headers: this.header});
  }

}
