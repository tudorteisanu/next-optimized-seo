import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us - Landing Pages | Our Mission and Values',
  description: 'Learn more about our mission and values. We are dedicated to providing innovative solutions that empower businesses.',
  openGraph: {
    title: 'About Us | Landing Pages',
    description: 'Learn more about our mission and values',
    url: 'https://landing-pages.com/about',
  },
};

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <main>
        {/* Hero Section */}
        <section className={styles.pageHero}>
          <div className="container">
            <h1>About Us</h1>
            <p className="subtitle">Learn more about our mission and values</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.mission}>
          <div className="container">
            <div className={styles.contentGrid}>
              <div className={styles.contentBlock}>
                <h2>Our Mission</h2>
                <p>
                  We are dedicated to providing innovative solutions that empower businesses
                  and individuals to achieve their goals. Our platform combines cutting-edge
                  technology with user-friendly design to deliver exceptional experiences.
                </p>
                <p>
                  Since our founding, we&apos;ve helped thousands of customers transform their
                  workflows and achieve remarkable results. We believe in continuous
                  improvement and putting our customers first.
                </p>
              </div>
              <div className={styles.contentBlock}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.icon}>🎯</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.values}>
          <div className="container">
            <h2>Our Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>💡</div>
                <h3>Innovation</h3>
                <p>We constantly push boundaries and explore new possibilities to stay ahead.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <h3>Integrity</h3>
                <p>We operate with transparency and honesty in everything we do.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🚀</div>
                <h3>Excellence</h3>
                <p>We strive for the highest quality in our products and services.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>❤️</div>
                <h3>Customer Focus</h3>
                <p>Our customers&apos; success is at the heart of everything we do.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.team}>
          <div className="container">
            <h2>Meet Our Team</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.memberAvatar}>👨‍💼</div>
                <h3>John Smith</h3>
                <p className={styles.role}>CEO & Founder</p>
                <p className={styles.bio}>Visionary leader with 15+ years in tech industry.</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberAvatar}>👩‍💻</div>
                <h3>Sarah Johnson</h3>
                <p className={styles.role}>CTO</p>
                <p className={styles.bio}>Tech expert passionate about building scalable solutions.</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberAvatar}>👨‍🎨</div>
                <h3>Mike Davis</h3>
                <p className={styles.role}>Head of Design</p>
                <p className={styles.bio}>Creative designer focused on user experience.</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberAvatar}>👩‍💼</div>
                <h3>Emily Brown</h3>
                <p className={styles.role}>VP of Operations</p>
                <p className={styles.bio}>Operations expert ensuring smooth business processes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of satisfied customers today.</p>
            <Link href="/" className="cta-button">Get Started</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
