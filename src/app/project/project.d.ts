export interface Project {
  id: number;
  name: string;
  experiments: Experiment[];
}

export interface Experiment {
  date: Date;
  duration: number;
  participants: number;
  observers: number;
  evaluations: Evaluation[];
}

export interface Evaluation {
  type: string;
  data: JSON;
}
