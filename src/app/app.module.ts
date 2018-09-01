import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AttrakdiffComponent } from './attrakdiff/attrakdiff.component';
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule} from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import {ProjectService} from './project/project.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttrakdiffComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
