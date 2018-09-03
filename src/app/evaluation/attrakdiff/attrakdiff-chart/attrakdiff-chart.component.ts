import {Component, Input, OnInit} from '@angular/core';
import {AttrakdiffData, Criteria} from '../attrakdiff.data';
import {Chart} from 'chart.js';
import {Evaluation} from '../../../project/project';

@Component({
  selector: 'app-attrakdiff-chart',
  templateUrl: './attrakdiff-chart.component.html',
  styleUrls: ['./attrakdiff-chart.component.css']
})
export class AttrakdiffChartComponent implements OnInit {

  @Input() evaluations: Evaluation[] = [];
  attrakdiff: Chart;
  attrakdiffPoints: number;

  constructor() { }

  ngOnInit() {
    if (this.evaluations && this.evaluations.length > 0) {

      const { wordPairs } = <AttrakdiffData> this.evaluations[0].data;
      const labels = wordPairs.map((wordPair: Criteria) => `${wordPair.positiveWord} - ${wordPair.negativeWord}`);

      const data = wordPairs.map((pair, index) => {

        const averagePairValue = this.evaluations.reduce((value, evaluation) => {
          const wordPair = (<AttrakdiffData>evaluation.data).wordPairs[index];
          let pairValue = +wordPair.value;

          if (wordPair.first === '+') {
            pairValue = -pairValue;
          }

          return value + pairValue;
        }, 0);

        return averagePairValue / this.evaluations.length;
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

}
