import { Injectable } from '@angular/core';
import {Project} from './project';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private idGenerator;
  private projects: Project[];

  constructor() {
    this.loadProjects();
  }

  loadProjects(): Project[] {
    this.idGenerator = parseInt(localStorage.getItem('projectIdGenerator'), 10) || 1;
    this.projects = JSON.parse(localStorage.getItem('projects')) || [];
    return this.projects;
  }

  saveProjects() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
    localStorage.setItem('projectIdGenerator', this.idGenerator + '');
  }

  newProject() {
    const project: Project = {
      id: this.idGenerator,
      name: '',
      experiments: []
    };
    this.idGenerator++;
    this.projects.push(project);
    return project;
  }

  getProject(id: number): Project {
    let searchedProject: Project;

    this.projects.some((project: Project) => {
      const found = project.id === id;
      if (found) {
        searchedProject = project;
      }
      return found;
    });

    return searchedProject;
  }
}
