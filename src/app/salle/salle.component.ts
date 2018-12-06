import {Component, OnInit} from '@angular/core';
import {Salle} from '../model/salle';
import {SalleService} from '../service/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  private _listSalles = new Array<Salle>(new Salle(1, 159, 50, true, 20),
    new Salle(2, 160, 45, false, 25));

  constructor(private _salleService: SalleService) {
  }

  ngOnInit() {
    this.liste();
  }

  public liste() {
    this._salleService.list().subscribe(resultat => {
      this._listSalles = resultat;
    }, error => {
      console.log(error);
    });
  }

  delete(id) {
    this._salleService.delete(id).subscribe(resultat => {
      this.liste();
    });
  }

  get listSalles(): Salle[] {
    return this._listSalles;
  }

  set listSalles(value: Salle[]) {
    this._listSalles = value;
  }

  get salleService(): SalleService {
    return this._salleService;
  }

  set salleService(value: SalleService) {
    this._salleService = value;
  }
}
