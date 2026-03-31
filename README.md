# Hemadevi's AI Portfolio 🚀

A modern, responsive, and visually stunning portfolio website showcasing AI/ML projects, skills, and achievements. Built with React, TypeScript, Tailwind CSS, and Framer Motion with smooth animations and particle effects.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-blue?style=flat-square)

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Portfolio Sections](#portfolio-sections)
- [Skills & Expertise](#skills--expertise)
- [Projects](#projects)
- [Experience](#experience)
- [Achievements](#achievements)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

✨ **Modern UI/UX**
- Beautiful glassmorphism design with gradient effects
- Smooth animations and transitions using Framer Motion
- Responsive design that works seamlessly on all devices
- Dark theme with elegant color scheme

🎨 **Interactive Elements**
- Particle background effect for visual appeal
- Typing animation in the hero section
- Animated counter for statistics
- Hover effects and smooth transitions
- Scroll-triggered animations

📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for desktop, tablet, and mobile devices
- Smooth navigation and menu handling
- Touch-friendly interactive elements

🔧 **Developer Friendly**
- Built with modern web technologies
- Shadcn UI component library for consistent design
- Organized component structure
- ESLint and TypeScript for code quality
- Unit testing setup with Vitest and Playwright

## Project Structure

```
hemadevi-s-ai-portfolio/
├── src/
│   ├── components/
│   │   ├── ui/                          # Shadcn UI components
│   │   ├── AboutSection.tsx             # About me section with highlights
│   │   ├── AchievementsSection.tsx      # Awards and recognitions
│   │   ├── ContactSection.tsx           # Contact information
│   │   ├── ExperienceSection.tsx        # Professional experience
│   │   ├── Footer.tsx                   # Footer component
│   │   ├── HeroSection.tsx              # Hero section with typing animation
│   │   ├── Navbar.tsx                   # Navigation bar
│   │   ├── NavLink.tsx                  # Navigation link component
│   │   ├── ParticleBackground.tsx       # Animated particle effect
│   │   ├── ProjectsSection.tsx          # Portfolio projects showcase
│   │   ├── SectionWrapper.tsx           # Reusable section wrapper
│   │   └── SkillsSection.tsx            # Technical skills display
│   ├── hooks/
│   │   ├── use-mobile.tsx               # Mobile detection hook
│   │   └── use-toast.ts                 # Toast notification hook
│   ├── lib/
│   │   └── utils.ts                     # Utility functions
│   ├── pages/
│   │   ├── Index.tsx                    # Main portfolio page
│   │   └── NotFound.tsx                 # 404 page
│   ├── test/
│   │   ├── example.test.ts              # Test examples
│   │   └── setup.ts                     # Test setup configuration
│   ├── assets/                          # Images and static assets
│   ├── App.tsx                          # Root app component
│   ├── App.css                          # Global app styles
│   ├── index.css                        # Global styles
│   ├── main.tsx                         # React entry point
│   └── vite-env.d.ts                    # Vite environment types
├── public/
│   └── robots.txt                       # SEO robots configuration
├── package.json                         # Dependencies and scripts
├── vite.config.ts                       # Vite configuration
├── tsconfig.json                        # TypeScript configuration
├── tailwind.config.ts                   # Tailwind CSS configuration
├── postcss.config.js                    # PostCSS configuration
├── eslint.config.js                     # ESLint rules
├── vitest.config.ts                     # Vitest test configuration
├── playwright.config.ts                 # Playwright E2E test configuration
├── components.json                      # Shadcn UI components configuration
└── README.md                            # This file
```

## Tech Stack

### Core Technologies
- **React** 18.3 - UI library
- **TypeScript** 5.8 - Type safety
- **Vite** 5.4 - Build tool and dev server
- **React Router** 6.30 - Client-side routing

### Styling & Design
- **Tailwind CSS** 3.4 - Utility-first CSS framework
- **Shadcn UI** - High-quality React components
- **Framer Motion** 12.38 - Animation library
- **lucide-react** 0.462 - Icon library

### State Management & Data Fetching
- **TanStack React Query** 5.83 - Data fetching and caching
- **React Hook Form** 7.61 - Form state management
- **Zod** 3.25 - Schema validation

### Testing
- **Vitest** 3.2.4 - Unit testing framework
- **Playwright** 1.57 - E2E testing framework
- **Testing Library** - React component testing utilities

### Development Tools
- **ESLint** 9.32 - Code linting
- **PostCSS** 8.5 - CSS processing
- **Tailwind CSS Animate** - Animation utilities
- **Sonner** 1.7.4 - Toast notifications

## Portfolio Sections

### 1. Hero Section
- Animated profile image
- Typing animation showcasing multiple titles:
  - AI & ML Enthusiast
  - Future Entrepreneur
  - Problem Solver
  - Tech Innovator
- Call-to-action buttons (Download CV, Get in Touch)
- Smooth scroll indicator

### 2. About Section
- Personal introduction
- Highlights with icons (AI & ML, Problem Solver, Innovator, Lifelong Learner)
- Statistics counter:
  - 5+ Projects Built
  - 3+ Certifications
  - 1 Internship
  - 10+ Skills

### 3. Skills Section
Organized into three categories:

**Programming**
- Python (90%)
- Java (75%)

**AI / ML**
- Machine Learning (85%)
- Deep Learning (80%)
- Data Analysis (82%)

**Tools & Frameworks**
- TensorFlow (80%)
- Keras (78%)
- Scikit-learn (85%)
- Git (75%)
- VS Code (90%)

### 4. Projects Section
Displays 4 major projects:

1. **AI Medication Safety App**
   - Tablet recognition using computer vision
   - Dosage information lookup
   - AI-powered chatbot for medication queries
   - Technologies: Python, TensorFlow, OpenCV, NLP

2. **AI Farming Advisor System**
   - Real-time weather analysis
   - Plant disease detection
   - Actionable farming recommendations
   - Technologies: Python, Keras, Weather API, CNN

3. **FAER Research Project**
   - Foundation for Academic Excellence and Research
   - Cutting-edge AI research with industry mentors
   - Technologies: Research, AI, Machine Learning, Data Science

4. **Portfolio Website**
   - This modern portfolio you're viewing
   - Smooth animations and particle effects
   - Professional dark theme
   - Technologies: React, TypeScript, Tailwind, Framer Motion

### 5. Experience Section
- **AI Intern at Codsoft (2024)**
  - Developed and trained ML models for classification and regression
  - Performed data analysis and preprocessing on large-scale datasets
  - Implemented deep learning architectures using TensorFlow and Keras
  - Collaborated on end-to-end AI project pipelines

### 6. Achievements Section
- **FAER Project Selection** - Selected for prestigious research project
- **Hackathon Participant** - Active competition experience
- **AI/ML Certifications** - Industry-recognized credentials

### 7. Contact Section
- Contact information and call-to-action
- Integration with contact forms

### 8. Footer
- Social media links
- Quick navigation
- Copyright information

## Skills & Expertise

### Programming Languages
- Python (Advanced)
- Java (Intermediate)
- TypeScript (Advanced)
- JavaScript (Advanced)

### AI & Machine Learning
- Machine Learning Algorithms
- Deep Learning & Neural Networks
- Data Analysis & Preprocessing
- Computer Vision
- Natural Language Processing

### Frameworks & Tools
- TensorFlow & Keras
- Scikit-learn
- OpenCV
- React & React Router
- Tailwind CSS
- Git & Version Control

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn/pnpm/bun
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/Hema-devi/hemadevi-s-ai-portfolio.git
cd hemadevi-s-ai-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server
```bash
npm run dev
```

The portfolio will be available at `http://localhost:8080`

## Available Scripts

### Development
```bash
npm run dev              # Start development server with HMR
```

### Building
```bash
npm run build            # Build for production
npm run build:dev        # Build in development mode
npm run preview          # Preview production build locally
```

### Code Quality
```bash
npm run lint             # Run ESLint to check code quality
```

### Testing
```bash
npm run test             # Run unit tests with Vitest
npm run test:watch      # Run tests in watch mode
```

## Development

### Entry Point
The main entry point is `src/main.tsx` which renders the `App` component.

### Routing
- Uses React Router for client-side routing
- Main route: `/` (Portfolio Index page)
- 404 fallback: `*` (NotFound page)

### State Management
- Uses TanStack React Query for server state
- React Hook Form for form state
- Context API via TooltipProvider

### Styling
- Global styles in `src/index.css` and `src/App.css`
- Tailwind CSS utility classes
- Component-scoped styles using Tailwind classes
- Theme configuration in `tailwind.config.ts`

### Adding New Components
1. Create component file in `src/components/`
2. Use Shadcn UI components from `src/components/ui/`
3. Import and add to the appropriate section

### Environment Variables
Create a `.env.local` file if you need environment-specific variables:
```
VITE_API_URL=your_api_url
```

## Building for Production

```bash
npm run build
npm run preview
```

The optimized build will be in the `dist/` directory.

### Build Optimization
- Code splitting
- Minification
- Asset optimization
- Tree shaking for unused code

## Testing

### Unit Tests
```bash
npm run test              # Run tests once
npm run test:watch       # Run tests in watch mode
```

Tests are located in `src/test/` directory.

### E2E Tests
Playwright configuration is available in `playwright.config.ts` for end-to-end testing.

## Deployment

This portfolio can be deployed to:
- **Vercel** - Recommended for Vite projects
- **Netlify** - Drag-and-drop or Git integration
- **GitHub Pages** - Using GitHub Actions
- **Any static hosting** - Build outputs to `dist/`

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on push

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Bundle Size**: ~150KB (gzipped)
- **Load Time**: < 2 seconds on average connection
- **Mobile Optimized**: Responsive design with 60fps animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO

- Meta tags for search engines
- Robot.txt configured
- Semantic HTML structure
- Open Graph tags support
- Mobile-friendly design

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- **Email**: [Your Email]
- **GitHub**: [@Hema-devi](https://github.com/Hema-devi)
- **LinkedIn**: [Your LinkedIn Profile]

## Acknowledgments

- Shadcn UI for beautiful, accessible components
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Vite for blazing fast development experience
- All open-source projects that made this possible

---

**Last Updated**: March 2026
**Status**: Active and Maintained
