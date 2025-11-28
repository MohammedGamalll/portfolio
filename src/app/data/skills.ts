export interface Skill {
  name: string;
  file: string;
  category: string;
  level: string; // Beginner, Intermediate, Advanced, Expert
  description: string;
}

export const SKILLS: Skill[] = [
  // Frontend Technologies
  {
    name: 'HTML',
    file: 'html.svg',
    category: 'Frontend',
    level: 'Expert',
    description:
      'Semantic HTML5, accessibility standards, and modern markup techniques',
  },
  {
    name: 'CSS',
    file: 'css.svg',
    category: 'Frontend',
    level: 'Expert',
    description:
      'CSS3, Flexbox, Grid, animations, and responsive design principles',
  },
  {
    name: 'JavaScript',
    file: 'Javascript.svg',
    category: 'Frontend',
    level: 'Advanced',
    description:
      'ES6+, async/await, DOM manipulation, and modern JavaScript features',
  },
  {
    name: 'TypeScript',
    file: 'typescript-16-svgrepo-com.svg',
    category: 'Frontend',
    level: 'Expert',
    description:
      'Strong typing, interfaces, generics, and type-safe development',
  },
  {
    name: 'Angular',
    file: 'angular-svgrepo-com.svg',
    category: 'Frontend',
    level: 'Expert',
    description:
      'Angular 18+, RxJS, state management, routing, and component architecture',
  },
  {
    name: 'Bootstrap',
    file: 'bootstrap.svg',
    category: 'Frontend',
    level: 'Advanced',
    description: 'Responsive layouts, components, utilities, and customization',
  },
  {
    name: 'TailwindCSS',
    file: 'tailwind.svg',
    category: 'Frontend',
    level: 'Advanced',
    description:
      'Utility-first CSS, custom configurations, and rapid UI development',
  },
  {
    name: 'MaterialUI',
    file: 'material.svg',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Material Design components, theming, and UI consistency',
  },
  {
    name: 'SASS',
    file: 'SASS-DwiDfK8t.svg',
    category: 'Frontend',
    level: 'Advanced',
    description: 'Variables, mixins, nesting, and modular CSS architecture',
  },
  {
    name: 'jQuery',
    file: 'jquery-svgrepo-com.svg',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'DOM manipulation, event handling, and AJAX operations',
  },

  // Backend Technologies
  {
    name: 'C#',
    file: 'csharp.svg',
    category: 'Backend',
    level: 'Expert',
    description:
      'Object-oriented programming, LINQ, async programming, and design patterns',
  },
  {
    name: '.NET Core',
    file: 'dotnet.svg',
    category: 'Backend',
    level: 'Advanced',
    description:
      'ASP.NET Core, Web APIs, middleware, dependency injection, and cross-platform development',
  },
  {
    name: 'Entity Framework',
    file: 'ef-core.svg',
    category: 'Backend',
    level: 'Advanced',
    description:
      'EF Core, Code-First migrations, LINQ queries, and database relationships',
  },
  {
    name: 'ASP.NET MVC',
    file: 'aspnet.svg',
    category: 'Backend',
    level: 'Advanced',
    description:
      'MVC pattern, Razor views, model binding, and server-side rendering',
  },
  {
    name: 'SQL Server',
    file: 'sql-svgrepo-com.svg',
    category: 'Backend',
    level: 'Advanced',
    description:
      'Database design, T-SQL, stored procedures, and query optimization',
  },
  {
    name: 'RESTful APIs',
    file: 'api.svg',
    category: 'Backend',
    level: 'Advanced',
    description: 'API design, HTTP methods, authentication, and documentation',
  },

  // Database & Tools
  {
    name: 'SQL',
    file: 'sql-svgrepo-com.svg',
    category: 'Database',
    level: 'Advanced',
    description: 'Complex queries, joins, indexes, and database optimization',
  },
  {
    name: 'Git',
    file: 'git.svg',
    category: 'Tools',
    level: 'Advanced',
    description:
      'Version control, branching strategies, merging, and collaboration workflows',
  },
  {
    name: 'GitHub',
    file: 'github-color-svgrepo-com.svg',
    category: 'Tools',
    level: 'Advanced',
    description:
      'Repository management, pull requests, CI/CD, and collaborative development',
  },
  {
    name: 'Figma',
    file: 'figma.svg',
    category: 'Tools',
    level: 'Intermediate',
    description: 'UI/UX design, prototyping, and design-to-code workflow',
  },

  // Programming Languages
  {
    name: 'Python',
    file: 'python-svgrepo-com.svg',
    category: 'Languages',
    level: 'Advanced',
    description: 'Data structures, algorithms, and scripting automation',
  },
  {
    name: 'C++',
    file: 'cpp-svgrepo-com.svg',
    category: 'Languages',
    level: 'Advanced',
    description: 'Object-oriented programming, data structures, and algorithms',
  },
  {
    name: 'Java',
    file: 'java-svgrepo-com.svg',
    category: 'Languages',
    level: 'Intermediate',
    description:
      'OOP principles, collections framework, and application development',
  },
];
