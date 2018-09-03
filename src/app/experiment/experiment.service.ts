import { Injectable } from '@angular/core';
import {ProjectService} from '../project/project.service';
import {Experiment} from '../project/project';

@Injectable({
  providedIn: 'root'
})
export class ExperimentService {

  constructor(private projects: ProjectService) { }

  newExperiment(projectId: number): Experiment {
    const project = this.projects.getProject(projectId);
    const experiment: Experiment = {
      id: project.experimentIdGenerator++,
      name: '',
      date: new Date(),
      durationInMinutes: 0,
      participants: 0,
      observers: 0,
      evaluations: [],
      evaluationIdGenerator: 1,
    };
    project.experiments.push(experiment);
    return experiment;
  }


  getExperiment(projectId: number, experimentId: number): Experiment {
    const project = this.projects.getProject(projectId);
    let result: Experiment;

    project.experiments.some((experiment) => {
      const found = experiment.id === experimentId;
      if (found) {
        result = experiment;
      }
      return found;
    });

    return result;
  }
}
