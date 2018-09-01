import { Component, OnInit } from '@angular/core';
import {Project} from '../project/project';
import {ProjectService} from '../project/project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService,
              private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.loadProjects();
  }

  newProject() {
    const project: Project = this.projectService.newProject();
    this.router.navigate(['/project', project.id]);
  }
}
