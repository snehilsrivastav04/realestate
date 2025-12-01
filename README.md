# Noida Real Estate MVP

A modern, production-ready real estate application built with React, TypeScript, and TailwindCSS, featuring advanced parallax effects and premium design.

## 🏠 About

NoidaHomes is a comprehensive real estate platform focused on the Noida market, offering property search, detailed listings, agent connections, and more. The application emphasizes visual appeal with sophisticated parallax animations and a premium user experience.

## ✨ Features

- **Modern React Architecture**: Built with TypeScript, React Router, and modern hooks
- **Advanced Parallax Effects**: Multiple types of parallax animations using react-scroll-parallax, framer-motion, and GSAP
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Property Search**: Advanced filtering and search capabilities
- **Agent Integration**: Direct agent contact and property scheduling
- **Interactive UI**: 3D tilt effects, hover animations, and micro-interactions
- **No Price Display**: Intentionally hides prices per business requirement

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd noida-real-estate-mvp
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🎨 Design System

### Colors
- **Primary Red**: `#E3342F` (brand-red)
- **Primary Red Dark**: `#C12722` (brand-red-dark)  
- **Secondary Blue**: `#2563EB` (brand-blue)
- **Neutrals**: White, Gray-50, Gray-100, Gray-600

### Typography
- **Font Family**: Inter (with system font fallbacks)
- **Heading Weights**: Bold (700)
- **Body Weight**: Regular (400), Medium (500)

### Spacing
- **System**: 8px grid system
- **Border Radius**: Standard (0.5rem), XL (1rem), 2XL (1.5rem)

## 📝 Important Notes

### Price Display Policy
**CRITICAL**: This application intentionally does not display property prices anywhere in the UI. This is a business requirement.

- All price-related code is commented with `// PRICES HIDDEN BY REQUIREMENT`
- Property cards show badges like "Luxury", "New Listing", etc. instead of prices
- Contact forms and inquiry systems are used for price requests

### Where to Customize

1. **Images**: Replace placeholder image paths in components:
   - `/images/noida/hero-bg.jpg`
   - `/images/properties/[property-name].jpg`
   - `/images/agents/[agent-name].jpg`

2. **Property Data**: Update mock data in:
   - `src/pages/Home.tsx` (featured properties)
   - `src/pages/Properties.tsx` (property listings)
   - `src/pages/PropertyDetail.tsx` (detailed property info)

3. **Contact Information**: Update in:
   - `src/components/Footer.tsx`
   - `src/pages/Contact.tsx`
   - `src/pages/About.tsx`

4. **Backend Integration**: Replace `console.log` statements with actual API calls

## 🎭 Parallax Features

The application demonstrates various parallax effects:

### Scroll-based Parallax
- Background images move at different speeds than foreground content
- Multi-layer parallax with varying scroll speeds
- Implemented using `react-scroll-parallax`

### Mouse-based Parallax
- 3D tilt effects on property cards using `react-tilt`
- Cursor-following elements with subtle movement
- Depth-based layer movement on mouse interaction

### GSAP ScrollTrigger
- Advanced scroll-triggered animations
- Property gallery reveals with staggered animations
- Custom timeline animations for complex sequences

### Performance Considerations
- Reduced motion support with `prefers-reduced-motion`
- Mobile-optimized parallax (reduced effects on smaller screens)
- Efficient rendering with proper component memoization

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom configuration
- **Routing**: React Router v6
- **Animations**: Framer Motion, GSAP, react-scroll-parallax, react-tilt
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

The application is ready for deployment to any static hosting service:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📄 File Structure

```
src/
├── components/          # Reusable components
│   ├── CTAButton.tsx   # Custom button component
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── PropertyCard.tsx # Property listing card
│   ├── ParallaxLayers.tsx # Parallax wrapper
│   └── SearchBar.tsx   # Property search form
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Properties.tsx  # Property listings
│   ├── PropertyDetail.tsx # Individual property
│   ├── About.tsx       # Company information
│   └── Contact.tsx     # Contact form and info
├── App.tsx             # Main app component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 📧 Support

For questions or support, contact the development team or refer to the component documentation within the codebase.

---

**Note**: This is a UI-first MVP. Backend integration points are marked with comments throughout the codebase for easy identification and implementation.