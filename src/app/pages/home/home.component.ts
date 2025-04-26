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
      const target = document.querySelector('.tw');
      const writer = new TWriter(target, {
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 80,
        typeColor: '#808080',
      });
      writer
        .type('Software Engineer')
        .rest(1000)
        .changeOps({ deleteSpeed: 20 })
        .remove(17)
        .type('Frontend Developer (Angular)')
        .rest(1000)
        .remove(30)
        .type('Backend Developer (ASP.NET Core)')
        .rest(1000)
        .changeOps({ deleteSpeed: 20 })
        .remove(32)
        .type('Full Stack Developer')
        .rest(1000)
        .clear()
        .start();
    }
  }
}
