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
    title: 'E-Commerce Web Application',
    type: 'ANGULAR',
    description: `A modern, responsive e-commerce platform built with Angular. Users can browse products, view details, add items to their cart, and complete purchases. The site features user authentication, product search, and a smooth checkout process, all optimized for both desktop and mobile devices.`,
    image: '/images/ecommerce.png',
    github: 'https://github.com/MohammedGamalll/E-Commerce',
    live: 'https://e-commerce-mohammed-gamal.vercel.app/',
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
