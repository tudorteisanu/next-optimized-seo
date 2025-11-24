import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'postgres',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  database: process.env.POSTGRES_DB || 'landing_db',
  user: process.env.POSTGRES_USER || 'landing_user',
  password: process.env.POSTGRES_PASSWORD || 'landing_pass',
});

export default pool;

// Default landing page data
export const defaultData = {
  seo: {
    title: 'Welcome to Our Platform',
    description: 'Build amazing things with our platform',
    keywords: 'platform, landing page, nextjs',
    ogTitle: 'Welcome to Our Platform',
    ogDescription: 'Build amazing things with our platform',
    ogImage: '/og-image.jpg'
  },
  hero: {
    title: 'Build Amazing Things',
    subtitle: 'The best platform for your next project',
    cta: 'Get Started'
  },
  features: [
    {
      id: '1',
      title: 'Fast Performance',
      description: 'Lightning-fast load times with SSR',
      icon: '⚡'
    },
    {
      id: '2',
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices',
      icon: '🎯'
    },
    {
      id: '3',
      title: 'Easy to Use',
      description: 'Simple and intuitive interface',
      icon: '✨'
    }
  ]
};

// Initialize database
export async function initDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS landing_page (
        id SERIAL PRIMARY KEY,
        data JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const result = await pool.query('SELECT COUNT(*) FROM landing_page');
    const count = parseInt(result.rows[0].count);

    if (count === 0) {
      await pool.query(
        'INSERT INTO landing_page (data) VALUES ($1)',
        [JSON.stringify(defaultData)]
      );
      console.log('Default landing page data inserted');
    }
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}
