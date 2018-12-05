import { Component, OnInit } from '@angular/core';
import {Module} from '../model/module';
import {ModuleService} from '../service/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  private _modules: Array<Module>;

  constructor(private _moduleService: ModuleService) { }

  ngOnInit() {
    this.list();
  }


  public list() {
    this._moduleService.list().subscribe(resultat => {
      this._modules = resultat;
    }, error => {
      console.log(error);
    });
  }

  public deleteModule(id: number){
    this._moduleService.delete(id).subscribe(resultat => {
      this.list();
    }, error => {
      console.log(error);
    });
  }


  get modules(): Array<Module> {
    return this._modules;
  }

  set modules(value: Array<Module>) {
    this._modules = value;
  }

  get moduleService(): ModuleService {
    return this._moduleService;
  }

  set moduleService(value: ModuleService) {
    this._moduleService = value;
  }
}
