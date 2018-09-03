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
  attrakdiffPoints: number;

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
      const labels = wordPairs.map((wordPair: Criteria) => `${wordPair.positiveWord} - ${wordPair.negativeWord}`);

      const data = wordPairs.map((pair, index) => {

        const averagePairValue = attrakdiffEvaluations.reduce((value, evaluation) => {
            const wordPair = (<AttrakdiffData>evaluation.data).wordPairs[index];
            let pairValue = +wordPair.value;

            if (wordPair.first === '+') {
              pairValue = -pairValue;
            }

            return value + pairValue;
          }, 0);

        return averagePairValue / attrakdiffEvaluations.length;
      });
      this.attrakdiffPoints = data.reduce((sum, val) => sum + val, 0);

      const backgroundColor = data.map((value) => {
        let color;

        // Neutral color
        if (Math.abs(value) <= 1) {
          color = '#b5aa27';
        } else if (value > 0) {

          // Positive colors
          if (value > 2) {
            color = '#0aa91e';
          } else {
            color = '#7fa87b';
          }
        } else {

          // Negative colors
          if (value < -2) {
            color = 'red';
          } else {
            color = '#c57a7e';
          }
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
                stepSize: 0.5,
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


  deleteEvaluation(id: number) {
    if (confirm('Você tem certeza? Esta ação é irreversível')) {
      this.evaluationService.deleteEvaluation(this.projectId, this.experiment.id, id);
      this.projectService.saveProjects();
    }
  }
}
