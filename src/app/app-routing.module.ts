import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AttrakdiffComponent} from './attrakdiff/attrakdiff.component';

const routes: Routes = [
  { path: 'attrakdiff', component: AttrakdiffComponent }
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
