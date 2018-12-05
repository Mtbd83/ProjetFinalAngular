import {Component, OnInit} from '@angular/core';
import {Formateur} from '../model/formateur';
import {FormateurService} from '../service/formateur.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  private _listeFormateurs = new Array<Formateur>();

  constructor(private _formateurService: FormateurService) {
  }

  ngOnInit() {
    this.list();
  }

  get listeFormateurs(): Formateur[] {
    return this._listeFormateurs;
  }

  set listeFormateurs(value: Formateur[]) {
    this._listeFormateurs = value;
  }

  get formateurService(): FormateurService {
    return this._formateurService;
  }

  set formateurService(value: FormateurService) {
    this._formateurService = value;
  }

  public list() {
    this.formateurService.list().subscribe(resultat => {
      this.listeFormateurs = resultat;
    }, error => {
      console.log(error);
    });
  }

  supp(i) {
    this.formateurService.supp(i).subscribe(resultat => {
      this.list();
    });
  }
}
