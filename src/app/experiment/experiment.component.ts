import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ExperimentService} from './experiment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Experiment} from '../project/project';
import {ProjectService} from '../project/project.service';
import {EvaluationService} from '../evaluation/evaluation.service';
import {Chart} from 'chart.js';
import {AttrakdiffData, Criteria} from '../evaluation/attrakdiff/attrakdiff.data';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit, AfterViewInit {

  projectId: number;
  experiment: Experiment;
  attrakdiff: Chart;

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

  }


  ngAfterViewInit() {
    setTimeout(() => this.loadAttrakdiff());
  }


  loadAttrakdiff() {
    const attrakdiffEvaluations = this.experiment.evaluations
      .filter((evaluation) => evaluation.type === 'attrakdiff');

    if (attrakdiffEvaluations.length > 0) {

      const { wordPairs } = <AttrakdiffData> attrakdiffEvaluations[0].data;
      const labels = wordPairs.map((wordPair: Criteria) => `${wordPair.word1} - ${wordPair.word2}`);
      const data = wordPairs.map((pair, index) => {

        const pairValue = attrakdiffEvaluations.reduce((value, evaluation) => {
            return value + (+(<AttrakdiffData>evaluation.data).wordPairs[index].value);
          }, 0);

        return pairValue / attrakdiffEvaluations.length;
      });


      const backgroundColor = data.map((value) => {
        let color;
        if (Math.abs(value) <= 1.5) {
          color = 'yellow';
        } else if (value > 1.5) {
          color = 'green';
        } else {
          color = 'red';
        }
        return color;
      });

      this.attrakdiff = new Chart('attrakdiff', {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            data,
            backgroundColor,
            fill: false,
            borderColor: '#000',
            lineTension: 0,
          }],
        },
        options: {
          responsive: true,
          legend: { display: false },
          title: {
            text: 'Gráfico dos resultados do AttrakDiff',
            display: true,
          },
          scales: {
            xAxes: [{
              ticks: {
                autoSkip : false,
                fontColor: '#000',
                fontSize: 18
              },
              gridLines: {
                borderDash: [8, 4],
                color: '#999',
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                maxTicksLimit: 100,
                min: -3,
                max: 3,
                stepSize: 0.25,
              },
            }],
          }
        }
      });

    }
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
