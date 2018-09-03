import { Component, OnInit } from '@angular/core';
import {AttrakdiffData, Criteria, getAttrakdiffData} from './attrakdiff.data';
import {EvaluationService} from '../evaluation.service';
import {ProjectService} from '../../project/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Evaluation} from '../../project/project';

@Component({
  selector: 'app-attrakdiff',
  templateUrl: './attrakdiff.component.html',
  styleUrls: ['./attrakdiff.component.css']
})
export class AttrakdiffComponent implements OnInit {

  projectId: number;
  experimentId: number;
  evaluation: Evaluation;
  data: AttrakdiffData;

  constructor(private evaluationService: EvaluationService,
              private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) { }


  ngOnInit() {
    const { paramMap } = this.route.snapshot;
    this.projectId = +paramMap.get('projectId');
    this.experimentId = +paramMap.get('experimentId');
    const evaluationId = +paramMap.get('evaluationId');
    this.evaluation = this.evaluationService
      .getEvaltuation(this.projectId, this.experimentId, evaluationId);

    if (this.evaluation.data) {
      this.data = <AttrakdiffData> this.evaluation.data;
    } else {
      this.data = getAttrakdiffData();
    }
  }


  words(pair: Criteria): string[] {
    let result;
    if (pair.first === '+') {
      result = [pair.positiveWord, pair.negativeWord];
    } else {
      result = [pair.negativeWord, pair.positiveWord];
    }
    return result;
  }


  save() {
    this.evaluation.data = this.data;
    this.projectService.saveProjects();
    this.router.navigate(['/project', this.projectId, 'experiment', this.experimentId]);
  }
}
