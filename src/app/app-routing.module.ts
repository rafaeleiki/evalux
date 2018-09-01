import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AttrakdiffComponent} from './attrakdiff/attrakdiff.component';
import {ProjectComponent} from './project/project.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'attrakdiff', component: AttrakdiffComponent },
  { path: 'project/:id', component: ProjectComponent },
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
