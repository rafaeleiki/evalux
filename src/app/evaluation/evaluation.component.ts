import { Component, OnInit } from '@angular/core';
import {EvaluationService} from './evaluation.service';
import {ActivatedRoute} from '@angular/router';
import {Evaluation} from '../project/project';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  evaluation: Evaluation;

  constructor(private evaluationService: EvaluationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const { paramMap } = this.route.snapshot;
    const projectId = +paramMap.get('projectId');
    const experimentId = +paramMap.get('experimentId');
    const evaluationId = +paramMap.get('evaluationId');

    this.evaluation = this.evaluationService.getEvaltuation(projectId, experimentId, evaluationId);
  }

}
