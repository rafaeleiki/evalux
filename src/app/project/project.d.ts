import {AttrakdiffData} from '../evaluation/attrakdiff/attrakdiff.data';

export interface Project {
  id: number;
  name: string;
  experiments: Experiment[];
  experimentIdGenerator: number;
}

export interface Experiment {
  id: number;
  name: string;
  date: Date;
  durationInMinutes: number;
  participants: number;
  observers: number;
  evaluations: Evaluation[];
  evaluationIdGenerator: number;
}

export interface Evaluation {
  id: number;
  type: string;
  data: object | AttrakdiffData;
}
