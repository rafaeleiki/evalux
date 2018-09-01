import { Component, OnInit } from '@angular/core';
import {Project} from './project';
import {ProjectService} from './project.service';
import {switchMap} from 'rxjs/internal/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getProject(id);
  }

  save() {
    this.projectService.saveProjects();
  }
}
