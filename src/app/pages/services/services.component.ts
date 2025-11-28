import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      icon: 'fas fa-code',
      title: 'Full-Stack Web Development',
      description:
        'End-to-end web application development using modern technologies and best practices.',
      technologies: ['.NET Core', 'Angular', 'ASP.NET', 'TypeScript', 'C#'],
      features: [
        'RESTful API Development',
        'Single Page Applications (SPA)',
        'Responsive Web Design',
        'Database Design & Optimization',
        'Authentication & Authorization',
      ],
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development (.NET)',
      description:
        'Robust and scalable backend solutions with .NET technologies.',
      technologies: [
        '.NET Core',
        'ASP.NET Core',
        'Entity Framework',
        'SQL Server',
        'Web API',
      ],
      features: [
        'Microservices Architecture',
        'Clean Architecture Implementation',
        'Database Design (SQL & NoSQL)',
        'Performance Optimization',
        'Unit & Integration Testing',
      ],
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Frontend Development (Angular)',
      description:
        'Dynamic and interactive user interfaces with Angular framework.',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Tailwind CSS',
        'HTML5/CSS3',
      ],
      features: [
        'Component-Based Architecture',
        'State Management',
        'Responsive UI/UX Design',
        'Progressive Web Apps (PWA)',
        'Cross-Browser Compatibility',
      ],
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Web Design',
      description:
        'Mobile-first, responsive websites that work seamlessly across all devices.',
      technologies: ['Tailwind CSS', 'Bootstrap', 'CSS3', 'Flexbox', 'Grid'],
      features: [
        'Mobile-First Approach',
        'Cross-Device Compatibility',
        'Modern UI/UX Patterns',
        'Accessibility (WCAG)',
        'Performance Optimization',
      ],
    },
    {
      icon: 'fas fa-database',
      title: 'Database Design & Management',
      description:
        'Efficient database solutions for optimal data storage and retrieval.',
      technologies: [
        'SQL Server',
        'PostgreSQL',
        'MongoDB',
        'Entity Framework',
        'LINQ',
      ],
      features: [
        'Database Schema Design',
        'Query Optimization',
        'Data Modeling',
        'Migration Strategies',
        'Backup & Recovery Solutions',
      ],
    },
    {
      icon: 'fas fa-cloud',
      title: 'API Development & Integration',
      description: 'RESTful APIs and third-party service integrations.',
      technologies: ['ASP.NET Web API', 'REST', 'JSON', 'Swagger', 'OAuth'],
      features: [
        'RESTful API Design',
        'API Documentation',
        'Third-Party Integrations',
        'API Security',
        'Rate Limiting & Caching',
      ],
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security & Authentication',
      description: 'Secure authentication and authorization implementations.',
      technologies: [
        'JWT',
        'OAuth 2.0',
        'Identity',
        'ASP.NET Core Identity',
        'HTTPS',
      ],
      features: [
        'JWT Authentication',
        'Role-Based Access Control',
        'Secure Password Handling',
        'Two-Factor Authentication',
        'Security Best Practices',
      ],
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Application Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support.',
      technologies: [
        'Git',
        'Azure DevOps',
        'CI/CD',
        'Monitoring Tools',
        'Debugging',
      ],
      features: [
        'Bug Fixing & Troubleshooting',
        'Performance Monitoring',
        'Code Refactoring',
        'Version Control',
        'Technical Documentation',
      ],
    },
    {
      icon: 'fas fa-rocket',
      title: 'Performance Optimization',
      description:
        'Optimize application performance for better user experience.',
      technologies: [
        'Caching',
        'Lazy Loading',
        'CDN',
        'Compression',
        'Minification',
      ],
      features: [
        'Frontend Optimization',
        'Backend Performance Tuning',
        'Database Query Optimization',
        'Load Time Reduction',
        'Resource Optimization',
      ],
    },
  ];

  ngOnInit(): void {
    this.observeElements();
  }

  observeElements(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      setTimeout(() => {
        const elements = document.querySelectorAll('.service-card');
        elements.forEach((el) => observer.observe(el));
      }, 100);
    }
  }
}
