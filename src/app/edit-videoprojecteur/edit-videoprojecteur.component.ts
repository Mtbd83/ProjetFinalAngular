import {Component, OnInit} from '@angular/core';
import {Videoprojecteur} from '../model/videoprojecteur';
import {VideoprojecteurService} from '../service/videoprojecteur.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-videoprojecteur',
  templateUrl: './edit-videoprojecteur.component.html',
  styleUrls: ['./edit-videoprojecteur.component.css']
})
export class EditVideoprojecteurComponent implements OnInit {

  private _videoProj = new Videoprojecteur();

  constructor(private _videoProjService: VideoprojecteurService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      if (params.id) {
        this._videoProjService.findById(params.id).subscribe(res => {
          this._videoProj = res;
        });
      }
    });
  }

  public save() {
    if (this._videoProj.id) {
      this._videoProjService.update(this._videoProj).subscribe(resultat => {
        this.retourListVideoProj();
      });
    } else {
      this._videoProjService.create(this._videoProj).subscribe(resultat => {
        this.retourListVideoProj();
      });
    }
  }

  private retourListVideoProj() {
    this._router.navigate(['/materiel/videoprojecteur']);
  }


  get videoProj(): Videoprojecteur {
    return this._videoProj;
  }

  set videoProj(value: Videoprojecteur) {
    this._videoProj = value;
  }

  get videoProjService(): VideoprojecteurService {
    return this._videoProjService;
  }

  set videoProjService(value: VideoprojecteurService) {
    this._videoProjService = value;
  }

  get activatedRoute(): ActivatedRoute {
    return this._activatedRoute;
  }

  set activatedRoute(value: ActivatedRoute) {
    this._activatedRoute = value;
  }

  get router(): Router {
    return this._router;
  }

  set router(value: Router) {
    this._router = value;
  }
}
