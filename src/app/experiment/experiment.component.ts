import { Component, OnInit } from '@angular/core';
import {ExperimentService} from './experiment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Experiment} from '../project/project';
import {ProjectService} from '../project/project.service';
import {EvaluationService} from '../evaluation/evaluation.service';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {

  projectId: number;
  experiment: Experiment;

  constructor(private projectService: ProjectService,
              private experimentService: ExperimentService,
              private evaluationService: EvaluationService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.projectId = +this.route.snapshot.paramMap.get('projectId');
    const experimentId: number = +this.route.snapshot.paramMap.get('experimentId');
    this.experiment = this.experimentService.getExperiment(this.projectId, experimentId);
  }

  save() {
    this.projectService.saveProjects();
  }

  newEvaluation() {
    const evaluation = this.evaluationService.newEvaluation(this.projectId, this.experiment.id);
    this.router.navigate(['/project', this.projectId,
                          'experiment', this.experiment.id,
                          'evaluation', evaluation.id]);
  }
}
