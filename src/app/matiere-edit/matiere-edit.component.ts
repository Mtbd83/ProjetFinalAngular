import { Component, OnInit } from '@angular/core';
import {Matiere} from '../model/matiere';
import {MatiereService} from '../service/matiere.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-matiere-edit',
  templateUrl: './matiere-edit.component.html',
  styleUrls: ['./matiere-edit.component.css']
})
export class MatiereEditComponent implements OnInit {

  private _matiere: Matiere = new Matiere();

  constructor(private matiereService: MatiereService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.idMatiere) {
        this.matiereService.findById(params.idMatiere).subscribe(res => {
          this._matiere = res;
        });
      }
    });
  }

  get matiere(): Matiere {
    return this._matiere;
  }

  set matiere(value: Matiere) {
    this._matiere = value;
  }
  public save() {
    if (this.matiere.idMatiere) {
      this.matiereService.update(this.matiere).subscribe(res => {
        this.retourListeMatiere();
      });
    } else {
      this.matiereService.create(this.matiere).subscribe(res => {
        this.retourListeMatiere();
      });
    }
  }
  private retourListeMatiere() {
    this.router.navigate(['/matiere']);
  }

}

