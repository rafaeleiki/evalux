import { Component, OnInit } from '@angular/core';
import {AttrakdiffData, getAttrakdiffData} from './attrakdiff.data';
import {EvaluationService} from '../evaluation.service';
import {ProjectService} from '../../project/project.service';
import {ActivatedRoute} from '@angular/router';
import {Evaluation} from '../../project/project';

@Component({
  selector: 'app-attrakdiff',
  templateUrl: './attrakdiff.component.html',
  styleUrls: ['./attrakdiff.component.css']
})
export class AttrakdiffComponent implements OnInit {

  evaluation: Evaluation;
  data: AttrakdiffData;

  constructor(private evaluationService: EvaluationService,
              private projectService: ProjectService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const { paramMap } = this.route.snapshot;
    const projectId = +paramMap.get('projectId');
    const experimentId = +paramMap.get('experimentId');
    const evaluationId = +paramMap.get('evaluationId');
    this.evaluation = this.evaluationService.getEvaltuation(projectId, experimentId, evaluationId);

    if (this.evaluation.data) {
      this.data = <AttrakdiffData> this.evaluation.data;
    } else {
      this.data = getAttrakdiffData();
    }
  }

  save() {
    this.evaluation.data = this.data;
    this.projectService.saveProjects();
  }
}
