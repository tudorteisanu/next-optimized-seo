import { Metadata } from 'next';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Us - Landing Pages | Get In Touch',
  description: 'Get in touch with our team. Have a question or want to work together? We\'re here to help.',
  openGraph: {
    title: 'Contact Us | Landing Pages',
    description: 'Get in touch with our team. We\'d love to hear from you.',
    url: 'https://landing-pages.com/contact',
  },
};

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <section className={styles.pageHero}>
        <div className="container">
          <h1>Contact Us</h1>
          <p className="subtitle">We&apos;d love to hear from you</p>
        </div>
      </section>

      <main>
        <section className={styles.contactContent}>
          <div className="container">
            <div className={styles.contactGrid}>
              <ContactForm />

              <div className={styles.contactInfo}>
                <h2>Get in Touch</h2>
                <p>Have a question or need assistance? We&apos;re here to help!</p>

                <div className={styles.infoItems}>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>📧</div>
                    <div className={styles.infoContent}>
                      <h3>Email</h3>
                      <p>contact@ourplatform.com</p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>📱</div>
                    <div className={styles.infoContent}>
                      <h3>Phone</h3>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>📍</div>
                    <div className={styles.infoContent}>
                      <h3>Office</h3>
                      <p>123 Business Street<br />San Francisco, CA 94102</p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>🕐</div>
                    <div className={styles.infoContent}>
                      <h3>Business Hours</h3>
                      <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
                    </div>
                  </div>
                </div>

                <div className={styles.socialLinks}>
                  <h3>Follow Us</h3>
                  <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialIcon}>🐦</a>
                    <a href="#" className={styles.socialIcon}>👥</a>
                    <a href="#" className={styles.socialIcon}>📷</a>
                    <a href="#" className={styles.socialIcon}>💼</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
