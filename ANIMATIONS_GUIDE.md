# Global Animations System - Usage Guide

This guide explains how to use the global animation classes defined in `src/styles/animations/animations.css` across all components.

## Available Animation Classes

### 1. Fade Animations

```html
<!-- Fade in from top -->
<div class="fade-in">Content</div>

<!-- Fade in with delay -->
<div class="fade-in-delay">Content</div>

<!-- Fade in from bottom -->
<div class="fade-in-up">Content</div>

<!-- Fade in from left -->
<div class="fade-in-left">Content</div>

<!-- Fade in from right -->
<div class="fade-in-right">Content</div>
```

### 2. Scroll Animation Cards (like Services component)

```html
<!-- In your HTML -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  @for (item of items; track $index) {
  <div class="animate-card">
    <!-- Card content -->
  </div>
  }
</div>
```

```typescript
// In your TypeScript component
ngOnInit(): void {
  this.observeElements();
}

observeElements(): void {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
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
        rootMargin: '0px 0px -50px 0px'
      }
    );

    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-card');
      elements.forEach((el) => observer.observe(el));
    }, 100);
  }
}
```

### 3. Hover Effects

```html
<!-- Scale on hover -->
<div class="hover-scale">Scales to 1.05</div>

<!-- Small scale -->
<span class="hover-scale-sm">Scales to 1.1</span>

<!-- Lift effect -->
<div class="hover-lift">Moves up on hover</div>

<!-- Slide right -->
<li class="hover-slide-right">Slides right on hover</li>

<!-- Glow effect -->
<button class="hover-glow">Glows on hover</button>
```

### 4. Icon Animations

```html
<!-- Pulse on hover -->
<i class="fas fa-heart icon-pulse"></i>

<!-- Rotate on hover -->
<i class="fas fa-sync icon-rotate"></i>

<!-- Bounce on hover -->
<i class="fas fa-rocket icon-bounce"></i>

<!-- Shake on hover -->
<i class="fas fa-bell icon-shake"></i>

<!-- Continuous spin (for loading) -->
<i class="fas fa-spinner icon-spin"></i>
```

### 5. Button Animations

```html
<!-- Pulse effect -->
<button class="btn-pulse">Click Me</button>

<!-- Slide effect -->
<button class="btn-slide">Hover Me</button>

<!-- Combined with hover-scale -->
<button class="btn-pulse hover-scale">Get Started</button>
```

### 6. Shimmer Effects

```html
<!-- Shimmer overlay on hover -->
<div class="shimmer-overlay">
  <!-- Content -->
</div>
```

### 7. Gradient Animations

```html
<!-- Animated gradient background -->
<div class="gradient-animate bg-gradient-to-r from-blue-500 to-purple-500">Content</div>
```

### 8. Border Animations

```html
<!-- Animated border on hover -->
<div class="border-animate rounded-lg">Content</div>
```

### 9. Loading Animations

```html
<!-- Pulse -->
<div class="pulse">Loading...</div>

<!-- Bounce -->
<div class="bounce">↓</div>
```

### 10. Text Animations

```html
<!-- Text slide in -->
<h1 class="text-slide-in">Welcome</h1>

<!-- Text highlight on hover -->
<span class="text-highlight bg-gradient-to-r from-yellow-200 to-yellow-400"> Hover me </span>
```

## Complete Examples

### Example 1: Animated Card Grid (Skills, Projects, etc.)

```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
  @for (item of items; track $index) {
  <div class="animate-card">
    <div class="bg-white dark:bg-bg-dark rounded-lg p-4 hover-lift">
      <i class="fas fa-icon icon-pulse"></i>
      <h3>{{ item.title }}</h3>
    </div>
  </div>
  }
</div>
```

### Example 2: Animated List

```html
<ul>
  @for (item of list; track $index) {
  <li class="hover-slide-right">
    <span class="icon-bounce">▸</span>
    {{ item.name }}
  </li>
  }
</ul>
```

### Example 3: Hero Section

```html
<section class="fade-in">
  <h1 class="text-slide-in">{{ title }}</h1>
  <p class="fade-in-delay">{{ description }}</p>
  <button class="btn-pulse hover-scale">Get Started</button>
</section>
```

### Example 4: Service Cards (Complete)

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  @for (service of services; track $index) {
  <div class="animate-card">
    <div class="bg-white dark:bg-bg-dark rounded-lg hover-scale border-animate">
      <div class="shimmer-overlay">
        <i class="icon-pulse">{{ service.icon }}</i>
        <h3>{{ service.title }}</h3>
      </div>
    </div>
  </div>
  }
</div>
```

## Tips

1. **Combine Classes**: You can combine multiple animation classes for complex effects

   ```html
   <div class="animate-card hover-scale shimmer-overlay border-animate"></div>
   ```

2. **Use with Tailwind**: All classes work seamlessly with Tailwind CSS

   ```html
   <div class="fade-in bg-white dark:bg-gray-800 rounded-lg p-6"></div>
   ```

3. **Accessibility**: Animations automatically respect `prefers-reduced-motion`

4. **Smooth Transitions**: Add `smooth-transition` for theme changes

   ```html
   <div class="smooth-transition bg-white dark:bg-gray-800"></div>
   ```

5. **Delays**: Use delay utilities for staggered effects
   ```html
   <div class="fade-in delay-100">First</div>
   <div class="fade-in delay-200">Second</div>
   <div class="fade-in delay-300">Third</div>
   ```

## Browser Support

All animations use modern CSS features but include fallbacks:

- Transform
- Transition
- Animation
- CSS Grid
- Flexbox

Works on all modern browsers (Chrome, Firefox, Safari, Edge).
