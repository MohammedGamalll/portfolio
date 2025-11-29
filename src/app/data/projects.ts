// project-data.ts

export interface ProjectItem {
  title: string;
  type: string; // ANGULAR, JAVASCRIPT, etc.
  description: string;
  image: string;
  github: string;
  live: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Social Hub - Social Media Platform',
    type: 'ANGULAR',
    description: `A full-featured social media application built with Angular. Implements user authentication with JWT tokens, post creation and management with CRUD operations, real-time comment system, user profile pages with follower/following functionality, and timeline feed with infinite scroll. Features reactive forms for post/comment input, HTTP interceptors for API requests, route guards for protected pages, and state management using RxJS observables. Built with Angular Router for SPA navigation, lazy loading modules for performance, and responsive UI using CSS Grid and Flexbox. Integrates with RESTful API for data persistence.`,
    image: '/images/socialhub.png',
    github: 'https://github.com/MohammedGamalll/Social-Hub',
    live: 'https://social-hub-sigma.vercel.app/#/login',
  },
  {
    title: 'Gym Management System',
    type: '.NET Core MVC',
    description: `A comprehensive gym management system built with ASP.NET Core MVC and Entity Framework Core. Implements three-layer architecture (DAL, BLL, PL) with Repository and Unit of Work patterns. Features member management with health records and profile photos, trainer management with specialties, session booking system with capacity control (1-25), membership plans with duration tracking, and analytics dashboard showing active members, trainers, and session statistics. Uses SQL Server with Code-First migrations, complex entity relationships (one-to-many, many-to-many), and check constraints for data validation. Implements AutoMapper for DTO transformations, dependency injection for services, and file upload handling for member photos. Database seeding from JSON files for plans and categories. Built with Razor views, Bootstrap UI, and form validation using Data Annotations.`,
    image: '/images/gym.png',
    github: 'https://github.com/MohammedGamalll/GymManagementSystem',
    live: '',
  },
  {
    title: 'E-Commerce Application',
    type: 'ANGULAR',
    description: `A modern, responsive e-commerce platform built with Angular. Users can browse products, view details, add items to their cart, and complete purchases. The site features user authentication, product search, and a smooth checkout process, all optimized for both desktop and mobile devices.`,
    image: '/images/ecommerce.png',
    github: 'https://github.com/MohammedGamalll/E-Commerce',
    live: 'https://e-commerce-mohammed-gamal.vercel.app/',
  },
  {
    title: 'Fake Store - E-Commerce Application',
    type: 'ANGULAR',
    description: `A modern e-commerce platform built with Angular and Fake Store API. Features product catalog with category filtering, detailed product pages with image galleries, shopping cart functionality with local storage persistence, user authentication system, and checkout process. Implements Angular services for API communication, reactive forms for user input, route resolvers for data prefetching, and custom pipes for price formatting. Utilizes RxJS operators for state management, Angular Material or Bootstrap for UI components, lazy loading for route optimization, and responsive design with mobile-first approach. Deployed on Vercel with automatic CI/CD.`,
    image: '/images/fakestore.png',
    github: 'https://github.com/MohammedGamalll/fakeStore',
    live: 'https://fake-store-ecru.vercel.app/',
  },
  {
    title: 'El Weheby Services Website',
    type: 'JAVASCRIPT',
    description: `A professional Arabic service platform built with Angular for El Weheby Company - a water tank cleaning and maintenance provider in Riyadh. Features RTL (Right-to-Left) layout architecture, dynamic service showcase with 8 service categories, Owl Carousel integration for customer testimonials, real-time contact form with validation, WhatsApp and phone call integration using href protocols, promotional countdown timers, blog section with pagination, and SEO-optimized meta tags. Implements lazy loading for images, smooth scroll animations, responsive grid layouts using CSS Flexbox, and form handling with reactive forms. Built with Angular Router for SPA navigation, TypeScript for type safety, and custom CSS with Arabic web fonts.`,
    image: '/images/elweheby.png',
    live: 'https://www.elweheby.com/',
    github: 'https://github.com/MohammedGamalll/ElWeheby',
  },

  {
    title: 'Meals Web Application',
    type: 'ANGULAR',
    description: `A user-friendly meal browsing platform developed with Angular. The application allows users to explore a variety of meals, view detailed recipes, and search for dishes by category or ingredient. The interface is clean and responsive, providing a seamless experience across devices.`,
    image: '/images/meals.png',
    github: 'https://github.com/MohammedGamalll/Meals',
    live: 'https://meals-ruby.vercel.app/#/home',
  },
  {
    title: 'Weather Web Application',
    type: 'JAVASCRIPT',
    description: `A user-friendly weather browsing platform developed with HTML, CSS and JavaScript. The application allows users to explore a variety of weather data, view detailed forecasts, and search for locations by name or coordinates. The interface is clean and responsive, providing a seamless experience across devices.`,
    image: '/images/weather.png',
    github: 'https://github.com/MohammedGamalll/Weather',
    live: 'https://mohammedgamalll.github.io/Weather/',
  },
  {
    title: 'Personal Portfolio Website (Daniels Website)',
    type: 'RESPONSIVE',
    description: `A visually appealing personal portfolio website built with HTML, CSS, and JavaScript. The site showcases professional information, project highlights, and a dedicated team section. It features smooth navigation, responsive design, and engaging animations.`,
    image: '/images/daniels.png',
    github: 'https://github.com/MohammedGamalll/Daniels-Website',
    live: 'https://mohammedgamalll.github.io/Daniels-Website',
  },
  {
    title: 'DevFolio Personal Portfolio',
    type: 'RESPONSIVE',
    description: `A modern and responsive personal portfolio website created with HTML, CSS, and JavaScript. The site highlights professional skills, projects, and contact information, with smooth scrolling and interactive sections for all devices.`,
    image: '/images/morgan.png',
    github: 'https://github.com/MohammedGamalll/devfolio7',
    live: 'https://mohammedgamalll.github.io/devfolio7/',
  },
  {
    title: 'Start Framework Web Application',
    type: 'ANGULAR',
    description: `A sleek and responsive web application template built with Angular. This project features a modern layout, smooth navigation, and reusable UI components, making it an ideal starting point for web development projects.`,
    image: '/images/framework.png',
    github: 'https://github.com/MohammedGamalll/startFramework',
    live: 'https://start-framework-rho.vercel.app/',
  },
  {
    title: 'Login Page Project',
    type: 'JAVASCRIPT',
    description: `A clean and responsive login page designed with HTML, CSS, and JavaScript. The interface features user-friendly form validation and a modern layout, providing a smooth authentication experience across devices.`,
    image: '/images/login.png',
    github: 'https://github.com/MohammedGamalll/Login11',
    live: 'https://mohammedgamalll.github.io/Login11/index.html',
  },
  {
    title: 'Mealify Restaurant Website',
    type: 'JAVASCRIPT',
    description: `A modern and responsive restaurant website built with HTML, CSS, and JavaScript. Mealify features an attractive menu display, smooth navigation, and a contact section, providing users with an engaging browsing experience on all devices.`,
    image: '/images/mealify.png',
    github: 'https://github.com/MohammedGamalll/Mealify',
    live: 'https://mohammedgamalll.github.io/Mealify/#home',
  },
];
