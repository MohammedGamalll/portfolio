import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

interface Experience {
  id: number;
  type: 'Course' | 'Internship' | 'Job' | 'Training';
  title: string;
  position?: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  achievements?: string[];
  icon: string;
}

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  imagePath: string;
  description: string;
  skills: string[];
  verificationUrl?: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule, CarouselModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      id: 1,
      type: 'Course',
      title: 'Front-End Web Development Professional Diploma',
      position: 'Student',
      institution: 'Route Academy',
      location: 'Cairo, Egypt',
      startDate: 'Sep 2024',
      endDate: 'Feb 2025',
      description:
        'Comprehensive front-end development program covering modern web technologies, frameworks, and best practices for building responsive and interactive user interfaces.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Bootstrap',
        'Tailwind CSS',
        'RxJS',
        'Git',
      ],
      achievements: [
        'Built 10+ real-world projects',
        'Mastered Angular framework and ecosystem',
        'Implemented responsive design patterns',
        'Learned modern JavaScript (ES6+)',
      ],
      icon: 'fas fa-graduation-cap',
    },
    {
      id: 2,
      type: 'Internship',
      title: 'CIB Summer Technology Internship',
      position: 'Technology Intern',
      institution: 'Commercial International Bank (CIB)',
      location: 'Cairo, Egypt',
      startDate: 'Aug 2024',
      endDate: 'Sep 2024',
      description:
        'Participated in an intensive internship program focused on banking technology, fintech solutions, and digital transformation in the financial sector.',
      skills: [
        'Banking Systems',
        'Fintech',
        'API Integration',
        'Database Management',
        'Agile Methodology',
      ],
      achievements: [
        'Collaborated with cross-functional teams',
        'Learned banking software architecture',
        'Contributed to digital banking solutions',
        'Received Certificate of Excellence',
      ],
      icon: 'fas fa-code',
    },
    {
      id: 3,
      type: 'Job',
      title: 'AI Trainer & Code Reviewer',
      position: 'Remote AI Trainer',
      institution: 'Outlier AI',
      location: 'Remote',
      startDate: 'Aug 2024',
      endDate: 'Present',
      description:
        'Train AI models by providing high-quality code examples, reviewing AI-generated code, and ensuring accuracy in programming-related tasks across multiple languages and frameworks.',
      skills: [
        'Code Review',
        'AI Training',
        'Quality Assurance',
        'Technical Writing',
        'Multiple Programming Languages',
      ],
      achievements: [
        'Reviewed 500+ code snippets',
        'Maintained 95%+ quality rating',
        'Contributed to AI model improvement',
        'Specialized in .NET and Angular',
      ],
      icon: 'fas fa-robot',
    },
    {
      id: 4,
      type: 'Course',
      title: 'Back-End Web Development Professional Diploma',
      position: 'Student',
      institution: 'Route Academy',
      location: 'Cairo, Egypt',
      startDate: 'May 2024',
      endDate: 'Nov 2024',
      description:
        'Advanced back-end development program focusing on .NET Core, ASP.NET, database design, RESTful APIs, and modern server-side architecture patterns.',
      skills: [
        '.NET Core',
        'ASP.NET Core',
        'C#',
        'Entity Framework',
        'SQL Server',
        'Web API',
        'JWT',
        'Clean Architecture',
      ],
      achievements: [
        'Developed full-stack applications',
        'Implemented microservices architecture',
        'Mastered database design and optimization',
        'Built secure RESTful APIs',
      ],
      icon: 'fas fa-server',
    },
    {
      id: 5,
      type: 'Internship',
      title: 'Front-End Development Internship (Angular)',
      position: 'Angular Developer Intern',
      institution: 'EgronX',
      location: 'Cairo, Egypt',
      startDate: 'Aug 2024',
      endDate: 'Oct 2024',
      description:
        'Hands-on training focused on Angular framework, component-based architecture, state management, and building enterprise-level single-page applications.',
      skills: [
        'Angular',
        'TypeScript',
        'RxJS',
        'NgRx',
        'Component Architecture',
        'Angular Material',
        'Unit Testing',
      ],
      achievements: [
        'Developed production-ready components',
        'Implemented state management solutions',
        'Collaborated on enterprise projects',
        'Gained practical Angular expertise',
      ],
      icon: 'fas fa-code',
    },
  ];

  certificates: Certificate[] = [
    {
      id: 1,
      title: 'CIB Summer Technology Internship Certificate',
      issuer: 'Commercial International Bank (CIB)',
      issueDate: 'September 2024',
      imagePath: '/images/Certificates/cer2.png',
      description:
        'Certificate of successful completion of the CIB Summer Technology Internship program, demonstrating proficiency in banking systems and fintech solutions.',
      skills: ['Fintech', 'Digital Transformation', 'Team Collaboration'],
      credentialId: 'CIB-2024-SUMMER',
    },
    {
      id: 2,
      title: 'SAS & CIB Banking Technology Training',
      issuer: 'SAS Institute & CIB',
      issueDate: 'September 2024',
      imagePath: '/images/Certificates/cer3.png',
      description:
        'Advanced training certificate covering SAS analytics tools and their application in banking operations and risk management.',
      skills: [
        'SAS Analytics',
        'Data Analysis',
        'Banking Operations',
        'Risk Management',
      ],
      credentialId: 'SAS-CIB-2024',
    },
    {
      id: 3,
      title: 'Backend .NET Core Professional Diploma',
      issuer: 'Route Academy',
      issueDate: 'November 2024',
      imagePath: '/images/Certificates/cer5.jpg',
      description:
        'Comprehensive certification in backend development using .NET Core, covering ASP.NET Core, Entity Framework, Web APIs, and modern architecture patterns.',
      skills: [
        '.NET Core',
        'ASP.NET Core',
        'Entity Framework',
        'Web API',
        'SQL Server',
        'Clean Architecture',
      ],
      credentialId: 'ROUTE-BACKEND-2024',
    },
    {
      id: 4,
      title: 'Full-Stack Web Development Professional Diploma',
      issuer: 'Route Academy',
      issueDate: 'February 2025',
      imagePath: '/images/Certificates/cer6.jpg',
      description:
        'Complete full-stack development certification covering both frontend (Angular, React) and backend (.NET Core) technologies with hands-on project experience.',
      skills: [
        'Full-Stack Development',
        'Angular',
        'React',
        '.NET Core',
        'Database Design',
        'RESTful APIs',
      ],
      credentialId: 'ROUTE-FULLSTACK-2025',
    },
    {
      id: 5,
      title: 'Angular Development Internship Certificate',
      issuer: 'EgronX Technology Solutions',
      issueDate: 'October 2024',
      imagePath: '/images/Certificates/cer7.png',
      description:
        'Certificate of completion for intensive Angular development internship, demonstrating expertise in building enterprise-level single-page applications.',
      skills: [
        'Angular',
        'TypeScript',
        'RxJS',
        'NgRx',
        'Component Architecture',
        'Testing',
      ],
      credentialId: 'EGRONX-ANG-2024',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
    nav: true,
  };

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
        const elements = document.querySelectorAll('.animate-card');
        elements.forEach((el) => observer.observe(el));
      }, 100);
    }
  }

  getTypeIcon(type: string): string {
    const icons: { [key: string]: string } = {
      Course: 'fas fa-graduation-cap',
      Internship: 'fas fa-briefcase',
      Job: 'fas fa-laptop-code',
      Training: 'fas fa-chalkboard-teacher',
    };
    return icons[type] || 'fas fa-certificate';
  }

  getTypeColor(type: string): string {
    const colors: { [key: string]: string } = {
      Course: 'bg-blue-500',
      Internship: 'bg-green-500',
      Job: 'bg-purple-500',
      Training: 'bg-orange-500',
    };
    return colors[type] || 'bg-gray-500';
  }
}
