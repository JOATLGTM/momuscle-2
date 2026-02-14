# Ethos Fitness Recreation - Next.js with GSAP Animations

A pixel-perfect recreation of the Ethos Fitness website built with Next.js and GSAP animations.

## 🎬 Features

### Animations Implemented

1. **Hero Parallax Scroll** - Background image moves slower than scroll speed
2. **3D Tilt Effect** - Images rotate on mouse movement with perspective
3. **Scroll-Triggered Fade-Ins** - Elements fade and slide in when scrolling into view
4. **Color Overlay Animations** - Red color overlays animate based on scroll position
5. **Infinite Marquee** - Continuous scrolling text with icons
6. **Smooth Transitions** - All hover effects use smooth cubic-bezier easing
7. **Image Parallax** - Multiple images with independent parallax speeds

### Built With

- **Next.js 15** (App Router)
- **GSAP 3** (with ScrollTrigger plugin)
- **CSS Modules** for component-scoped styling
- **JavaScript** (ES6+)

## 📁 Project Structure

```
ethos-fitness-recreation/
├── app/
│   ├── globals.css          # Global styles
│   ├── page.js               # Main page component
│   └── page.module.css       # Page styles
├── components/
│   ├── Hero/
│   │   ├── Hero.js           # Hero section with parallax
│   │   └── Hero.module.css
│   ├── Parallax3DImage/
│   │   ├── Parallax3DImage.js  # 3D tilt + parallax component
│   │   └── Parallax3DImage.module.css
│   ├── AnimatedSection/
│   │   ├── AnimatedSection.js  # Scroll-triggered animations
│   │   └── AnimatedSection.module.css
│   └── Marquee/
│       ├── Marquee.js          # Infinite scrolling text
│       └── Marquee.module.css
└── hooks/
    ├── useScrollAnimation.js   # Custom scroll animation hook
    └── useParallax.js          # Custom parallax hook
```

## 🚀 Getting Started

### Install Dependencies

```bash
cd /Users/cvo/Desktop/ethos-fitness-recreation
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Animation Details

### Hero Section
- **Parallax Speed**: 0.5x (image moves at 50% of scroll speed)
- **Fade-in Duration**: 1s with stagger delays
- **Color Overlays**: Fade in/out based on scroll position

### 3D Tilt Effect
- **Perspective**: 1000px
- **Rotation Range**: ±10 degrees on X and Y axis
- **Easing**: power2.out
- **Duration**: 0.5s

### Scroll Animations
- **Trigger Point**: 80% from top of viewport
- **Animation Duration**: 0.8s
- **Easing**: power3.out
- **Stagger Delay**: 0.1-0.2s between elements

### Marquee
- **Speed**: 30 seconds per loop
- **Animation**: Seamless infinite loop using GSAP
- **Direction**: Left to right

## 🎯 Key Components

### `<Hero />`
Full-screen hero section with parallax background, animated title, and smooth button transitions.

### `<Parallax3DImage />`
Reusable image component with both parallax scrolling and 3D tilt on mouse movement.

**Props:**
- `src` - Image URL
- `alt` - Alt text
- `height` - Container height
- `parallaxSpeed` - Parallax multiplier (default: 0.3)

### `<AnimatedSection />`
Wrapper component that triggers animations when scrolled into view.

**Props:**
- `animationType` - 'fadeUp', 'fadeIn', 'scale', 'slideLeft', 'slideRight'
- `delay` - Animation delay in seconds
- `stagger` - Stagger delay for child elements

### `<Marquee />`
Infinite scrolling marquee with customizable items and speed.

**Props:**
- `items` - Array of `{ text, icon }` objects
- `speed` - Duration in seconds for one loop

## 🔧 Custom Hooks

### `useScrollAnimation(config)`
Apply scroll-triggered animations to any element.

### `useParallax(speed)`
Add parallax effect to any element.

## 📱 Responsive Design

- Fully responsive layout
- Mobile-optimized animations
- Touch-friendly interactions

## 🎨 Color Scheme

- Background: `#0a0a0a` (Dark Black)
- Text: `#ffffff` (White)
- Accent: `#ff0000` (Red)
- Overlay: `rgba(0,0,0,0.9)` (Black with transparency)

## 📝 Notes

- All animations use `will-change` for GPU acceleration
- GSAP context cleanup prevents memory leaks
- ScrollTrigger handles scroll-based animations efficiently
- CSS Modules ensure component-scoped styling
- Images use CDN URLs from the original Ethos site

## 🚀 Production Build

```bash
npm run build
npm start
```

## 📦 Build Output

```bash
npm run build
```

The optimized production build will be in the `.next/` folder.

---

**Built by Claude Code** - Recreating pixel-perfect animations from the Ethos Fitness website
