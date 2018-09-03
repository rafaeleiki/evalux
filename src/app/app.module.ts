import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule} from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { ExperimentComponent } from './experiment/experiment.component';
import {AttrakdiffComponent} from './evaluation/attrakdiff/attrakdiff.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import {AttrakdiffChartComponent} from './evaluation/attrakdiff/attrakdiff-chart/attrakdiff-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AttrakdiffComponent,
    ProjectComponent,
    ExperimentComponent,
    EvaluationComponent,
    AttrakdiffChartComponent,
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
