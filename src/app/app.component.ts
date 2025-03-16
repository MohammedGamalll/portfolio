import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    SidebarComponent,
    FooterComponent,
    MainLayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
