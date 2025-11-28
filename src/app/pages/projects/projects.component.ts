import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects = PROJECTS;
  expandedDescriptions: Set<string> = new Set();

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.observeElements();
  }

  toggleDescription(projectTitle: string): void {
    if (this.expandedDescriptions.has(projectTitle)) {
      this.expandedDescriptions.delete(projectTitle);
    } else {
      this.expandedDescriptions.add(projectTitle);
    }
  }

  isExpanded(projectTitle: string): boolean {
    return this.expandedDescriptions.has(projectTitle);
  }

  private observeElements(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-card');
    animatedElements.forEach((el) => observer.observe(el));
  }
}
