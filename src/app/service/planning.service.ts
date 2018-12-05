import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  private url = 'http://localhost:8080/formation/rest/formateur';
  private header: HttpHeaders;

  constructor() { }
}
