import { Component, HostListener, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor-follower',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="cursor-light" *ngIf="isVisible" [style.left.px]="x" [style.top.px]="y"></div>`,
  styles: [`
    .cursor-light {
      position: fixed;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
      will-change: left, top;

      /* DEFAULT: Light Cursor (For Dark Backgrounds) */
      background: radial-gradient(
        circle,
         rgba(0, 0, 0, 0.12) 0%,
        rgba(0, 0, 0, 0.06) 20%,
        rgba(0, 0, 0, 0.02) 45%,
 
        transparent 70%
      );
      mix-blend-mode: screen;
    }

    /* DARK THEME CURSOR (For Light Backgrounds) */
    /* Adjust '.light' to whatever class your app uses for light mode (e.g., 'light-theme') */
    :host-context(.dark) .cursor-light,
    :host-context([data-theme="dark"]) .cursor-light {
      background: radial-gradient(
        circle,
              rgba(255, 255, 255, 0.18) 0%,
        rgba(255, 255, 255, 0.10) 20%,
        rgba(255, 255, 255, 0.04) 45%,
        transparent 70%
      );
      mix-blend-mode:screen; /* Multiply works best for dark shadows on light backgrounds */
    }

    @media (max-width: 768px) {
      .cursor-light {
        display: none;
      }
    }

    @media (pointer: coarse) {
      .cursor-light {
        display: none;
      }
    }
  `]
})
export class CursorFollowerComponent implements OnInit, OnDestroy {
  x = 0;
  y = 0;
  isVisible = false;
  private isBrowser: boolean;
  private animFrameId: number = 0;
  private targetX = 0;
  private targetY = 0;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
  }

  private animate(): void {
    // Lerp for smooth trailing effect
    this.x += (this.targetX - this.x) * 0.15;
    this.y += (this.targetY - this.y) * 0.15;
    this.animFrameId = requestAnimationFrame(() => this.animate());
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isBrowser) return;
    this.isVisible = true;
    this.targetX = event.clientX;
    this.targetY = event.clientY;
  }

  @HostListener('document:mouseleave')
  onMouseLeave(): void {
    this.isVisible = false;
  }

  @HostListener('document:mouseenter')
  onMouseEnter(): void {
    if (!this.isBrowser) return;
    this.isVisible = true;
  }
}