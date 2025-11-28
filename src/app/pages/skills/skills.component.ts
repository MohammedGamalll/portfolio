import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill, SKILLS } from '../../data/skills';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skills: Skill[] = SKILLS;
  filteredSkills: Skill[] = SKILLS;
  selectedCategory: string = 'All';
  categories: string[] = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'Tools',
    'Languages',
  ];

  ngOnInit(): void {
    this.filteredSkills = this.skills;
  }

  ngAfterViewInit(): void {
    this.observeElements();
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;

    // Remove animate-in class from all cards
    const cards = document.querySelectorAll('.animate-card');
    cards.forEach((card) => card.classList.remove('animate-in'));

    // Update filtered skills
    if (category === 'All') {
      this.filteredSkills = this.skills;
    } else {
      this.filteredSkills = this.skills.filter(
        (skill) => skill.category === category
      );
    }

    // Re-trigger animations after a small delay
    setTimeout(() => {
      this.observeElements();
    }, 100);
  }

  getLevelColor(level: string): string {
    switch (level) {
      case 'Expert':
        return 'text-green-600 dark:text-green-400';
      case 'Advanced':
        return 'text-blue-600 dark:text-blue-400';
      case 'Intermediate':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'Beginner':
        return 'text-gray-600 dark:text-gray-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  }

  getLevelBadgeColor(level: string): string {
    switch (level) {
      case 'Expert':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'Advanced':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      case 'Intermediate':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400';
      case 'Beginner':
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400';
    }
  }

  getFrontendCount(): number {
    return this.skills.filter((skill) => skill.category === 'Frontend').length;
  }

  getBackendCount(): number {
    return this.skills.filter((skill) => skill.category === 'Backend').length;
  }

  getExpertCount(): number {
    return this.skills.filter((skill) => skill.level === 'Expert').length;
  }

  getTotalSkills(): number {
    return this.skills.length;
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

    const animatedElements = document.querySelectorAll('.animate-card');
    animatedElements.forEach((el) => observer.observe(el));
  }
}
