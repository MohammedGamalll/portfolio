import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml, SafeStyle } from '@angular/platform-browser';

interface FloatingElement {
  content: string | SafeHtml;
  type: 'icon' | 'text';
  animClass: string;
  animStyle: SafeStyle;
}

@Component({
  selector: 'app-floating-elements',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="floating-container" *ngIf="isBrowser">
      <div
        *ngFor="let el of elements"
        class="floating-el"
        [ngClass]="el.animClass"
        [style]="el.animStyle"
      >
        <span *ngIf="el.type === 'text'" class="el-text">{{ el.content }}</span>
        <span *ngIf="el.type === 'icon'" class="el-icon" [innerHTML]="el.content"></span>
      </div>
    </div>
  `,
  styles: [`
    .floating-container {
      position: fixed;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      z-index: -1;
      width: 100vw;
      height: 100vh;
    }

    .floating-el {
      position: absolute;
      font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
      font-weight: 600;
      user-select: none;
      pointer-events: none;
      will-change: transform, opacity, filter;
      line-height: 1;
      opacity: 0;
    }

    .el-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    :host ::ng-deep .el-icon svg {
      width: 1em;
      height: 1em;
      fill: currentColor;
    }

    .el-text {
      white-space: nowrap;
      letter-spacing: 0.05em;
    }

    /* ---- Animation combos ---- */
    .anim-float-up {
      animation-name: floatUp, glowCycle;
      animation-timing-function: ease-in-out, ease-in-out;
      animation-iteration-count: infinite, infinite;
    }
    .anim-float-sway {
      animation-name: floatSway, glowCycleAlt;
      animation-timing-function: ease-in-out, ease-in-out;
      animation-iteration-count: infinite, infinite;
    }
    .anim-drift {
      animation-name: drift, glowCycleSlow;
      animation-timing-function: ease-in-out, ease-in-out;
      animation-iteration-count: infinite, infinite;
    }

    /* Movement keyframes */
    @keyframes floatUp {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-25px) rotate(3deg); }
    }
    @keyframes floatSway {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      33% { transform: translate(12px, -18px) rotate(2deg); }
      66% { transform: translate(-10px, 10px) rotate(-2deg); }
    }
    @keyframes drift {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(-18px, -15px) rotate(4deg); }
    }

    /* Glow cycles — element lights up bright, holds, then fades out */
    @keyframes glowCycle {
      0%   { opacity: 0.05; filter: drop-shadow(0 0 0px currentColor); }
      15%  { opacity: 0.6;  filter: drop-shadow(0 0 8px currentColor); }
      35%  { opacity: 0.5;  filter: drop-shadow(0 0 6px currentColor); }
      55%  { opacity: 0.6;  filter: drop-shadow(0 0 10px currentColor); }
      75%  { opacity: 0.3;  filter: drop-shadow(0 0 4px currentColor); }
      100% { opacity: 0.05; filter: drop-shadow(0 0 0px currentColor); }
    }

    @keyframes glowCycleAlt {
      0%   { opacity: 0.05; filter: drop-shadow(0 0 0px currentColor); }
      10%  { opacity: 0.15; filter: drop-shadow(0 0 2px currentColor); }
      30%  { opacity: 0.55; filter: drop-shadow(0 0 8px currentColor); }
      50%  { opacity: 0.65; filter: drop-shadow(0 0 12px currentColor); }
      70%  { opacity: 0.4;  filter: drop-shadow(0 0 5px currentColor); }
      85%  { opacity: 0.1;  filter: drop-shadow(0 0 1px currentColor); }
      100% { opacity: 0.05; filter: drop-shadow(0 0 0px currentColor); }
    }

    @keyframes glowCycleSlow {
      0%   { opacity: 0.05; filter: drop-shadow(0 0 0px currentColor); }
      20%  { opacity: 0.5;  filter: drop-shadow(0 0 6px currentColor); }
      40%  { opacity: 0.7;  filter: drop-shadow(0 0 14px currentColor); }
      60%  { opacity: 0.55; filter: drop-shadow(0 0 8px currentColor); }
      80%  { opacity: 0.2;  filter: drop-shadow(0 0 2px currentColor); }
      100% { opacity: 0.05; filter: drop-shadow(0 0 0px currentColor); }
    }

    /* Light mode */
    :host-context(:not(.dark)) .floating-el {
      filter: none;
    }

    /* Mobile — show fewer */
    @media (max-width: 768px) {
      .floating-el:nth-child(n+8) {
        display: none;
      }
    }
  `]
})
export class FloatingElementsComponent implements OnInit {
  isBrowser = false;
  elements: FloatingElement[] = [];

  private svgIcons: { svg: string; color: string }[] = [
    { // Angular
      color: '#DD0031',
      svg: `<svg viewBox="0 0 256 272"><path d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z" opacity="0.7"/><path d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z" opacity="0.5"/><path d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.828h70.083l17.13 40.474 27.886.498-81.73-174.065zm.2 55.882l26.496 55.53h-49.806l23.31-55.53z"/></svg>`
    },
    { // .NET
      color: '#512BD4',
      svg: `<svg viewBox="0 0 456 456"><path d="M81.274 291.333c-3.249 0-6.089-.893-8.519-2.678-2.431-1.786-3.646-4.464-3.646-8.036 0-3.773 1.262-6.547 3.789-8.322 2.526-1.774 5.318-2.662 8.376-2.662 3.249 0 6.089.888 8.519 2.662 2.431 1.775 3.646 4.549 3.646 8.322 0 3.572-1.262 6.25-3.789 8.036-2.526 1.785-5.317 2.678-8.376 2.678z"/><path d="M210.99 289.619h-28.039l-56.078-88.79c-3.926-6.26-6.945-11.963-9.058-17.108h-.538c.718 6.663 1.077 17.108 1.077 31.336v74.562H93.48V163.2h29.655l54.461 86.65a191.973 191.973 0 019.596 17.108h.358c-.897-5.627-1.346-16.571-1.346-32.833V163.2h24.786v126.419z"/><path d="M327.472 289.619h-74.025V163.2h71.153v22.5h-45.928v31.336h42.501v22.321h-42.501v28.12h48.8v22.142z"/><path d="M423.78 185.879h-37.587v103.74h-25.324V185.879h-37.408V163.2h100.319v22.679z"/></svg>`
    },
    { // TypeScript
      color: '#3178C6',
      svg: `<svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M27.6947 22.9999C27.883 22.6617 28 22.2807 28 21.9385V10.0613C28 9.71913 27.8831 9.33818 27.6947 9L16 16L27.6947 22.9999Z" fill="#7F3A86"/>
  <path d="M17.0395 29.7433L26.9611 23.8047C27.2469 23.6336 27.5067 23.3382 27.695 23L16.0003 16L4.30566 23C4.49398 23.3382 4.75382 23.6337 5.03955 23.8047L14.9611 29.7433C15.5326 30.0855 16.468 30.0855 17.0395 29.7433Z" fill="#662579"/>
  <path d="M27.6947 8.99996C27.5064 8.6617 27.2465 8.36629 26.9608 8.19521L17.0392 2.25662C16.4677 1.91446 15.5323 1.91446 14.9608 2.25662L5.03922 8.19521C4.46761 8.53729 4 9.37709 4 10.0613V21.9386C4 22.2807 4.11694 22.6618 4.30533 23L16 16L27.6947 8.99996Z" fill="#9A5196"/>
  <path d="M16.0385 24C11.6061 24 8 20.4112 8 16C8 11.5888 11.6061 8 16.0385 8C18.8458 8 21.4674 9.47569 22.919 11.8618L19.4765 13.9265C18.7492 12.736 17.4399 12 16.0385 12C13.8222 12 12.0193 13.7944 12.0193 16C12.0193 18.2056 13.8222 20 16.0385 20C17.4362 20 18.7421 19.2681 19.4707 18.0832L22.9205 20.1359C21.4692 22.5234 18.8467 24 16.0385 24Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0001 13V13.9974H22.9999V13H22.0001V13.9974H21V15H22.0001V16.9948H21V18H22.0001V19H22.9999L23 18H25.0001V19H25.9999V18H27V17H25.9999V15H27V13.9974H25.9999V13H25.0001ZM25.0001 17V15H22.9999V16.9948L25.0001 17Z" fill="white"/>
</svg>`
    },
    { // C#
      color: '#68217A',
      svg: `<svg viewBox=""0 0 256 272"" xmlns=""http://www.w3.org/2000/svg"">
  <path d=""M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z"" opacity=""0.7""/>
</svg>`
    },
    { // HTML5
      color: '#E34F26',
      svg: `<svg viewBox="0 0 512 512"><path d="M32 0l40.8 460.8L256 512l183.2-51.2L480 0H32zm360 171.2H178.4l5.6 56h202.4L376 384l-120 33.6L136 384l-8.8-89.6h55.2l4.8 44 68.8 18.4 68-18.4 7.2-76.8H124.8L108.8 112h294.4l-11.2 59.2z"/></svg>`
    },
    { // CSS3
      color: '#1572B6',
      svg: `<svg viewBox="0 0 512 512"><path d="M32 0l40.8 460.8L256 512l183.2-51.2L480 0H32zm328 171.2H203.2l5.6 56h145.6L344 384l-88 24.8L168 384l-6.4-67.2h54.4l3.2 33.6 36.8 9.6 36.8-9.6 4-44.8H160l-11.2-112h214.4l-3.2 52.8z"/></svg>`
    },
    { // Database / SQL
      color: '#F29111',
      svg: `<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3" opacity="0.6"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" opacity="0.3"/><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M21 5c0 1.66-4.03 3-9 3S3 6.66 3 5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`
    },
  ];

  private textItems: { text: string; color: string }[] = [
    { text: '</>', color: '#FF6B6B' },
    { text: '{ }', color: '#4ECDC4' },
    { text: 'API', color: '#45B7D1' },
    { text: 'ng', color: '#DD0031' },
    { text: 'RxJS', color: '#B7178C' },
    { text: 'HTTP', color: '#96CEB4' },
    { text: 'JSON', color: '#F7DC6F' },
  ];

  private animClasses = ['anim-float-up', 'anim-float-sway', 'anim-drift'];

  // Pre-defined positions to avoid overlap and ensure good spacing
  private positions = [
    // Spread across a grid — avoids clustering
    { x: 5,  y: 8  }, { x: 82, y: 5  }, { x: 45, y: 12 },
    { x: 15, y: 35 }, { x: 70, y: 28 }, { x: 92, y: 42 },
    { x: 8,  y: 60 }, { x: 55, y: 55 }, { x: 35, y: 75 },
    { x: 78, y: 70 }, { x: 20, y: 88 }, { x: 60, y: 85 },
    { x: 90, y: 90 }, { x: 40, y: 40 },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sanitizer: DomSanitizer,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;
    this.generateElements();
  }

  private generateElements(): void {
    const all: FloatingElement[] = [];
    let posIdx = 0;

    // Each SVG icon appears exactly once
    this.svgIcons.forEach((icon) => {
      const pos = this.positions[posIdx++ % this.positions.length];
      const dur1 = this.rand(10, 20);  // slow floating
      const dur2 = this.rand(8, 16);   // slow breathing
      const delay = this.rand(0, 6);
      all.push({
        content: this.sanitizer.bypassSecurityTrustHtml(icon.svg),
        type: 'icon',
        animClass: this.animClasses[posIdx % this.animClasses.length],
        animStyle: this.sanitizer.bypassSecurityTrustStyle(
          `left:${pos.x}%;top:${pos.y}%;font-size:${this.rand(28, 48).toFixed(0)}px;color:${icon.color};animation-duration:${dur1.toFixed(1)}s,${dur2.toFixed(1)}s;animation-delay:${delay.toFixed(1)}s,${delay.toFixed(1)}s;`
        ),
      });
    });

    // Each text symbol appears exactly once
    this.textItems.forEach((item) => {
      const pos = this.positions[posIdx++ % this.positions.length];
      const dur1 = this.rand(10, 18);
      const dur2 = this.rand(8, 14);
      const delay = this.rand(0, 8);
      all.push({
        content: item.text,
        type: 'text',
        animClass: this.animClasses[posIdx % this.animClasses.length],
        animStyle: this.sanitizer.bypassSecurityTrustStyle(
          `left:${pos.x}%;top:${pos.y}%;font-size:${this.rand(16, 28).toFixed(0)}px;color:${item.color};animation-duration:${dur1.toFixed(1)}s,${dur2.toFixed(1)}s;animation-delay:${delay.toFixed(1)}s,${delay.toFixed(1)}s;`
        ),
      });
    });

    this.elements = all;
  }

  private rand(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
