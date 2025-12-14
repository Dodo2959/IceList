# ICE Team Dashboard - Copilot Instructions

## Project Overview
React + TailwindCSS dashboard for Geometry Dash team with:
- Modern glacial blue theme with glassmorphism
- 3-column responsive layout (left nav, center content, right stats)
- 3 main pages: Homepage, ICE List, Leaderboard
- Animated snowfall background
- Custom Tailwind theme with ice-blue colors

## Key Technologies
- React 18 with TypeScript
- Vite for fast builds
- TailwindCSS for styling
- React Router for navigation

## Customization Guide

### Add/Modify Pages
1. Create new file in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

### Update Data
- Modify mock data in each page component
- Connect to API by replacing mock arrays with `fetch()` or axios

### Theme Colors
Edit `tailwind.config.js` colors:
- `ice.*` - Blue gradient palette
- `glacial.*` - Dark backgrounds

### Styling Classes
- `.glass` - Glassmorphic card (backdrop blur + semi-transparent)
- `.gradient-text` - Blue gradient text effect
- `.hover-glow` - Hover effect with glow shadow
- `.glow-blue` - Permanent glow effect

## File Purposes
- `src/App.tsx` - Main router and layout controller
- `src/components/Navigation.tsx` - Left sidebar navigation
- `src/components/RightSidebar.tsx` - Right stats sidebar
- `src/components/SnowfallBackground.tsx` - Animated snowflake effect
- `tailwind.config.js` - Custom theme colors and animations
- `src/index.css` - Global styles including glassmorphism classes
