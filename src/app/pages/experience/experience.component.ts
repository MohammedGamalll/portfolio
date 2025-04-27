import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-experience',
  imports: [CarouselModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences = [
    {
      number: 1,
      type: 'Course',
      title: 'Frontend Web Development Diploma',
      institution: 'Route Academy',
      date: 'Sep 2024 - Feb 2025',
    },
    {
      number: 2,
      type: 'Internship',
      title: 'CIB Summer Internship',
      institution: 'Commercial International Bank (CIB)',
      date: 'Aug 2024 - Sep 2024',
    },
    {
      number: 3,
      type: 'Job',
      title: 'AI Trainer',
      institution: 'Outlier AI',
      date: 'Aug 2024 - Present',
    },
  ];

  certificates = [
    {
      number: 1,

      src: '/images/Certificates/cer1.png',
    },
    {
      number: 2,

      src: '/images/Certificates/cer2.png',
    },
    {
      number: 3,

      src: '/images/Certificates/cer3.png',
    },
    {
      number: 4,

      src: '/images/Certificates/cer4.png',
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
    autoplayTimeout: 4000,
    autoplaySpeed: 1000,
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
    },
    nav: true,
  };
}
