import {Component, OnInit} from '@angular/core';
import {Ordinateur} from '../model/ordinateur';
import {OrdinateurService} from '../service/ordinateur.service';

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit {

  private _listOrdinateurs = new Array<Ordinateur>();

  constructor(private _ordinateurService: OrdinateurService) {
  }

  ngOnInit() {
    this.list();
  }

  public list() {
    this._ordinateurService.list().subscribe(resultat => {
      this._listOrdinateurs = resultat;
    }, error => {
      console.log(error);
    });
  }

  delete(id) {
    this.ordinateurService.supp(id).subscribe(resultat => {
      this.list();
    });
  }


  get listOrdinateurs(): Ordinateur[] {
    return this._listOrdinateurs;
  }

  set listOrdinateurs(value: Ordinateur[]) {
    this._listOrdinateurs = value;
  }

  get ordinateurService(): OrdinateurService {
    return this._ordinateurService;
  }

  set ordinateurService(value: OrdinateurService) {
    this._ordinateurService = value;
  }
}
