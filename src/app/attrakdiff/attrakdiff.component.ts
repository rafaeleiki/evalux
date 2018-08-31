import { Component, OnInit } from '@angular/core';
import {ATTRAKDIFF_CRITERIA, Criteria} from './attrakdiff.data';

@Component({
  selector: 'app-attrakdiff',
  templateUrl: './attrakdiff.component.html',
  styleUrls: ['./attrakdiff.component.css']
})
export class AttrakdiffComponent implements OnInit {

  criteria: Criteria[] = ATTRAKDIFF_CRITERIA;

  constructor() { }

  ngOnInit() {
  }

}
