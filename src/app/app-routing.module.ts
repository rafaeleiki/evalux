import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project/project.component';
import {HomeComponent} from './home/home.component';
import {ExperimentComponent} from './experiment/experiment.component';
import {AttrakdiffComponent} from './evaluation/attrakdiff/attrakdiff.component';
import {EvaluationComponent} from './evaluation/evaluation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'attrakdiff', component: AttrakdiffComponent },
  { path: 'project/:projectId', component: ProjectComponent, },
  { path: 'project/:projectId/experiment/:experimentId', component: ExperimentComponent },
  {
    path: 'project/:projectId/experiment/:experimentId/evaluation/:evaluationId',
    component: EvaluationComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
