import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanningComponent } from './planning/planning.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { HomeComponent } from './home/home.component';
import {PlanningService} from './service/planning.service';

@NgModule({
  declarations: [
    AppComponent,
    PlanningComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule
  ],
  providers: [PlanningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
