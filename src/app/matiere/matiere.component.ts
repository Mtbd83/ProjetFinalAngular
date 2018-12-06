import { Component, OnInit } from '@angular/core';
import {Matiere} from '../model/matiere';
import {MatiereService} from '../service/matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {

  private _listeMatieres = new Array<Matiere>();

  constructor(private _matiereService: MatiereService) { }

  ngOnInit() {
    this.list();
  }

  get listeMatieres(): Matiere[] {
    return this._listeMatieres;
  }

  set listeMatieres(value: Matiere[]) {
    this._listeMatieres = value;
  }

  get matiereService(): MatiereService {
    return this._matiereService;
  }

  set matiereService(value: MatiereService) {
    this._matiereService = value;
  }
  public list() {
    this.matiereService.list().subscribe(resultat => {
      this.listeMatieres = resultat;
    }, error => {
      console.log(error);
    });
  }
  delete(i) {
    this.matiereService.delete(i).subscribe(resultat => {
      this.list();
    });
  }
}
