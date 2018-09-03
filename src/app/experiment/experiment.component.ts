import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ExperimentService} from './experiment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Evaluation, Experiment} from '../project/project';
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
  attrakdiffEvaluations: Evaluation[];

  constructor(private projectService: ProjectService,
              private experimentService: ExperimentService,
              private evaluationService: EvaluationService,
              private route: ActivatedRoute,
              private router: Router) {

    this.projectId = +this.route.snapshot.paramMap.get('projectId');
    const experimentId: number = +this.route.snapshot.paramMap.get('experimentId');
    this.experiment = this.experimentService.getExperiment(this.projectId, experimentId);
  }

  ngOnInit() {
    this.loadAttrakdiff();
  }


  loadAttrakdiff() {
    this.attrakdiffEvaluations = this.experiment.evaluations
      .filter((evaluation) => evaluation.type === 'attrakdiff');
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


  deleteEvaluation(id: number) {
    if (confirm('Você tem certeza? Esta ação é irreversível')) {
      this.evaluationService.deleteEvaluation(this.projectId, this.experiment.id, id);
      this.projectService.saveProjects();
    }
  }
}
