import { Metadata } from 'next';
import Footer from '@/components/Footer';
import styles from './page.module.css';

interface LandingPageData {
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
  }>;
}

interface Stats {
  users: string;
  projects: string;
  uptime: string;
  countries: string;
}

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

async function getLandingData(): Promise<LandingPageData> {
  // During build time, return mock data
  if (process.env.BUILDING) {
    return {
      seo: {
        title: 'Our Platform',
        description: 'Build amazing things with our platform',
        keywords: 'platform, web development',
        ogTitle: 'Our Platform',
        ogDescription: 'Build amazing things with our platform',
        ogImage: '',
      },
      hero: {
        title: 'Welcome to Our Platform',
        subtitle: 'Build amazing things',
        cta: 'Get Started',
      },
      features: [],
    };
  }

  const res = await fetch('https://dotnet.nanoit.dev/api/landing-page', {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error('Failed to fetch landing data');
  return res.json();
}

async function getStats(): Promise<Stats> {
  // During build time, return mock data
  if (process.env.BUILDING) {
    return { users: '10K+', projects: '5K+', uptime: '99.9%', countries: '50+' };
  }

  const res = await fetch('https://dotnet.nanoit.dev/api/stats', {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error('Failed to fetch stats');
  return res.json();
}

async function getPricing(): Promise<PricingPlan[]> {
  // During build time, return mock data
  if (process.env.BUILDING) {
    return [];
  }

  const res = await fetch('https://dotnet.nanoit.dev/api/pricing', {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error('Failed to fetch pricing');
  return res.json();
}

async function getTestimonials(): Promise<Testimonial[]> {
  // During build time, return mock data
  if (process.env.BUILDING) {
    return [];
  }

  const res = await fetch('https://dotnet.nanoit.dev/api/testimonials', {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error('Failed to fetch testimonials');
  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getLandingData();
    return {
      title: data.seo.title + ' | Transform Your Digital Presence',
      description: data.seo.description + ' Lightning-fast websites with cutting-edge technology, beautiful design, and enterprise-grade security.',
      keywords: data.seo.keywords + ', landing pages, web development, nextjs, modern websites, digital transformation',
      authors: [{ name: 'Landing Pages' }],
      openGraph: {
        title: data.seo.ogTitle || data.seo.title,
        description: data.seo.ogDescription || data.seo.description,
        type: 'website',
        url: 'https://landing-pages.com/',
        siteName: 'Landing Pages',
        images: data.seo.ogImage ? [{ url: data.seo.ogImage }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: data.seo.ogTitle || data.seo.title,
        description: data.seo.ogDescription || data.seo.description,
        images: data.seo.ogImage ? [data.seo.ogImage] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Our Platform',
      description: 'Build amazing things with our platform',
    };
  }
}

export default async function Home() {
  const [landingData, stats, pricing, testimonials] = await Promise.all([
    getLandingData(),
    getStats(),
    getPricing(),
    getTestimonials(),
  ]);

  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>{landingData.hero.title}</h1>
          <p className="subtitle">{landingData.hero.subtitle}</p>
          <button className="cta-button">{landingData.hero.cta}</button>
        </div>
      </section>

      <main>
        {/* Stats Section */}
        <section className={styles.stats}>
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>{stats.users}</div>
                <div className={styles.statLabel}>Active Users</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>{stats.projects}</div>
                <div className={styles.statLabel}>Projects Created</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>{stats.uptime}</div>
                <div className={styles.statLabel}>Uptime</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>{stats.countries}</div>
                <div className={styles.statLabel}>Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <h2>Features</h2>
            <div className="features-grid">
              {landingData.features.map((feature) => (
                <div key={feature.id} className="feature-card">
                  <div className="icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className={styles.pricing}>
          <div className="container">
            <h2>Pricing Plans</h2>
            <div className={styles.pricingGrid}>
              {pricing.map((plan) => (
                <div
                  key={plan.id}
                  className={`${styles.pricingCard} ${plan.highlighted ? styles.highlighted : ''}`}
                >
                  <h3>{plan.name}</h3>
                  <div className={styles.price}>
                    <span className={styles.amount}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </div>
                  <ul className={styles.featuresList}>
                    {plan.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                  <button className={styles.planButton}>Choose Plan</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className="container">
            <h2>What Our Clients Say</h2>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.testimonialCard}>
                  <div className={styles.avatar}>{testimonial.avatar}</div>
                  <p className={styles.content}>&quot;{testimonial.content}&quot;</p>
                  <div className={styles.author}>
                    <div className={styles.name}>{testimonial.name}</div>
                    <div className={styles.role}>{testimonial.role}</div>
                  </div>
                  <div className={styles.rating}>{'⭐'.repeat(testimonial.rating)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
