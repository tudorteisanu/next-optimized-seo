# Next.js Optimized Landing Page

A high-performance landing page built with Next.js 15, featuring Server-Side Rendering (SSR), API routes, and PostgreSQL integration.

## Features

- ⚡ Next.js 15 with App Router
- 🎨 Modern, responsive design
- 🚀 Server-Side Rendering (SSR)
- 📊 PostgreSQL database integration
- 🐳 Docker support
- 📱 Mobile-friendly navigation
- 🎯 SEO optimized
- 💼 TypeScript support

## Pages

- **Home** - Hero section, features, stats, pricing preview, and testimonials
- **About** - Company mission, values, and team
- **Pricing** - Detailed pricing plans with comparison table
- **Contact** - Contact form with validation

## Getting Started

### Prerequisites

- Node.js 20+ 
- PostgreSQL (or use Docker Compose)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd optimized-landing-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using Docker Compose

Run the entire stack (Next.js + PostgreSQL):

```bash
docker-compose up -d
```

This will start:
- PostgreSQL on port 5432
- Next.js app on port 3000

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/              # API routes
│   │   ├── contact/
│   │   ├── landing-page/
│   │   ├── pricing/
│   │   ├── stats/
│   │   └── testimonials/
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── pricing/          # Pricing page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # Shared components
│   ├── Navigation.tsx
│   └── Footer.tsx
└── lib/                  # Utility functions
    └── db.ts             # Database configuration
```

## API Endpoints

- `GET /api/landing-page` - Landing page data
- `GET /api/stats` - Platform statistics
- `GET /api/pricing` - Pricing plans
- `GET /api/testimonials` - Customer testimonials
- `POST /api/contact` - Contact form submission
- `GET /api/health` - Health check

## Environment Variables

```
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=landing_db
POSTGRES_USER=landing_user
POSTGRES_PASSWORD=landing_pass
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Deployment

### Using PM2

```bash
npm install -g pm2
npm run build
pm2 start ecosystem.config.js
```

### Docker Production Build

```bash
docker build -t landing-nextjs .
docker run -p 3000:3000 landing-nextjs
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **PostgreSQL** - Database
- **CSS Modules** - Scoped styling
- **Docker** - Containerization

## Performance Features

- Server-Side Rendering (SSR)
- Automatic code splitting
- Image optimization
- Static asset caching
- Compression enabled
- Optimized bundles

## License

MIT

## Migration from Angular

This is a Next.js version of the original Angular SSR landing page. Key differences:

- Uses Next.js App Router instead of Angular Router
- Server Components for better performance
- API Routes instead of Express middleware
- CSS Modules instead of component-scoped styles
- React hooks instead of Angular signals

Both versions maintain feature parity and similar performance characteristics.
