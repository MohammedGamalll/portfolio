import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  isNavbarOpen = false;

  // Function to toggle the navbar state
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // Function to close the navbar
  closeNavbar() {
    this.isNavbarOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkModeEnabled(): boolean {
    return this.themeService.isDarkModeEnabled();
  }
}
