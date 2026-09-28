import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import TWriter from 't-writer.js';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Typewriter Effect
      const target = document.querySelector('.tw');
      const writer = new TWriter(target, {
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 80,
        typeColor: '#808080',
      });
      writer
        .type('Full-Stack Developer')
        .rest(1200)
        .changeOps({ deleteSpeed: 20 })
        .remove(20)
        .type('Next.js & React Developer')
        .rest(1200)
        .remove(25)
        .type('Node.js & Backend Developer')
        .rest(1200)
        .remove(26)
        .type('Angular & .NET Developer')
        .rest(1200)
        .remove(24)
        .type('Software Engineer')
        .rest(1200)
        .clear()
        .start();

      // Scroll Animations
      this.observeElements();
    }
  }

  private observeElements(): void {
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

    const animatedElements = document.querySelectorAll('.animate-card');
    animatedElements.forEach((el) => observer.observe(el));
  }
}
