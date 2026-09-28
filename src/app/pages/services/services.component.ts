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
        'End-to-end web application development using modern technologies, SSR, and robust architecture.',
      technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Angular', '.NET Core'],
      features: [
        'Full-Stack Architecture (SSR / SSG / SPA)',
        'RESTful & GraphQL API Development',
        'Dynamic Admin CMS Dashboards',
        'Database Design & Optimization',
        'Authentication & Role-Based Access',
      ],
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development (Node.js & .NET)',
      description:
        'Robust, scalable, and high-throughput backend services and database architectures.',
      technologies: [
        'Node.js',
        'PostgreSQL',
        'Prisma ORM',
        '.NET Core',
        'ASP.NET Core',
        'SQL Server',
      ],
      features: [
        'RESTful API Design & Middleware',
        'Clean Architecture & Modular Patterns',
        'Database Modeling & Indexing',
        'Performance Optimization & Caching',
        'Secure Auth (JWT, OAuth, Auth.js)',
      ],
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Frontend Development (React, Next.js & Angular)',
      description:
        'Dynamic, interactive, and responsive user interfaces with fluid animations.',
      technologies: [
        'Next.js',
        'React',
        'Angular',
        'TypeScript',
        'Tailwind CSS',
        'GSAP & Framer Motion',
      ],
      features: [
        'Component-Based Architecture',
        'Bilingual & RTL Layouts',
        'Interactive Scroll & Motion Animations',
        'Progressive Web Apps & Performance',
        'Cross-Browser & Mobile-First UX',
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
