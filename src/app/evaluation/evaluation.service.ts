import { Injectable } from '@angular/core';
import {Evaluation} from '../project/project';
import {ExperimentService} from '../experiment/experiment.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private experiments: ExperimentService) { }

  newEvaluation(projectId: number, experimentId: number): Evaluation {
    const experiment = this.experiments.getExperiment(projectId, experimentId);
    const evaluation = {
      id: experiment.evaluationIdGenerator++,
      data: null,
      type: 'attrakdiff'
    };
    experiment.evaluations.push(evaluation);
    return evaluation;
  }


  getEvaltuation(projectId: number, experimentId: number, evaluationId: number): Evaluation {
    const experiment = this.experiments.getExperiment(projectId, experimentId);
    let result: Evaluation;

    experiment.evaluations.some((evaluation) => {
      const found = evaluation.id === evaluationId;
      if (found) {
        result = evaluation;
      }
      return found;
    });

    return result;
  }


  deleteEvaluation(projectId: number, experimentId: number, evaluationId: number) {
    const experiment = this.experiments.getExperiment(projectId, experimentId);
    let deleteIndex = -1;

    experiment.evaluations.some((evaluation, index) => {
      const found = evaluation.id === evaluationId;
      if (found) {
        deleteIndex = index;
      }
      return found;
    });

    if (deleteIndex >= 0) {
      experiment.evaluations.splice(deleteIndex, 1);
    }
  }
}
