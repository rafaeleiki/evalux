import { Component, OnInit } from '@angular/core';
import {Project} from './project';
import {ProjectService} from './project.service';
import {switchMap} from 'rxjs/internal/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ExperimentService} from '../experiment/experiment.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project;

  constructor(private projectService: ProjectService,
              private experimentService: ExperimentService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('projectId');
    this.project = this.projectService.getProject(id);
  }

  save() {
    this.projectService.saveProjects();
  }

  newExperiment() {
    const experiment = this.experimentService.newExperiment(this.project.id);
    this.router.navigate(['/project', this.project.id, 'experiment', experiment.id]);
  }
}
