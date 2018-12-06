import {Component, OnInit} from '@angular/core';
import {Videoprojecteur} from '../model/videoprojecteur';
import {VideoprojecteurService} from '../service/videoprojecteur.service';

@Component({
  selector: 'app-videoprojecteur',
  templateUrl: './videoprojecteur.component.html',
  styleUrls: ['./videoprojecteur.component.css']
})
export class VideoprojecteurComponent implements OnInit {

  private _listVideoProj = new Array<Videoprojecteur>();

  constructor(private _videoProjService: VideoprojecteurService) {
  }

  ngOnInit() {
    this.list();
  }

  public list() {
    this._videoProjService.list().subscribe(resultat => {
      this._listVideoProj = resultat;
    }, error => {
      console.log(error);
    });
  }

  delete(id) {
    this._videoProjService.delete(id).subscribe(resultat => {
      this.list();
    });
  }


  get listVideoProj(): Videoprojecteur[] {
    return this._listVideoProj;
  }

  set listVideoProj(value: Videoprojecteur[]) {
    this._listVideoProj = value;
  }

  get videoProjService(): VideoprojecteurService {
    return this._videoProjService;
  }

  set videoProjService(value: VideoprojecteurService) {
    this._videoProjService = value;
  }
}
