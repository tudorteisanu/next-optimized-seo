import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './pricing.module.css';

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
}

async function getPricing(): Promise<PricingPlan[]> {
  const res = await fetch('https://dotnet.nanoit.dev/api/pricing', {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error('Failed to fetch pricing');
  return res.json();
}

export const metadata: Metadata = {
  title: 'Pricing Plans - Landing Pages | Choose Your Perfect Plan',
  description: 'Choose the perfect plan for your needs. Flexible pricing options for teams of all sizes.',
  openGraph: {
    title: 'Pricing Plans | Landing Pages',
    description: 'Choose the perfect plan for your needs',
    url: 'https://landing-pages.com/pricing',
  },
};

export default async function Pricing() {
  const pricing = await getPricing();

  return (
    <div className={styles.pricingPage}>
      <section className={styles.pageHero}>
        <div className="container">
          <h1>Pricing Plans</h1>
          <p className="subtitle">Choose the perfect plan for your needs</p>
        </div>
      </section>

      <main>
        <section className={styles.pricing}>
          <div className="container">
            <div className={styles.pricingGrid}>
              {pricing.map((plan) => (
                <div
                  key={plan.id}
                  className={`${styles.pricingCard} ${plan.highlighted ? styles.highlighted : ''}`}
                >
                  {plan.highlighted && (
                    <div className={styles.popularBadge}>Most Popular</div>
                  )}
                  <h2>{plan.name}</h2>
                  <div className={styles.price}>
                    <span className={styles.amount}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </div>
                  <ul className={styles.featuresList}>
                    {plan.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                  <button className={styles.planButton}>Choose {plan.name}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className={styles.comparison}>
          <div className="container">
            <h2>Feature Comparison</h2>
            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Starter</th>
                    <th>Professional</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Users</td>
                    <td>Up to 5</td>
                    <td>Up to 20</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Storage</td>
                    <td>10 GB</td>
                    <td>100 GB</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>API Access</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Priority Support</td>
                    <td>-</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Custom Integrations</td>
                    <td>-</td>
                    <td>Limited</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Advanced Analytics</td>
                    <td>-</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>SLA</td>
                    <td>-</td>
                    <td>99.9%</td>
                    <td>99.99%</td>
                  </tr>
                  <tr>
                    <td>Dedicated Account Manager</td>
                    <td>-</td>
                    <td>-</td>
                    <td>✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faq}>
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Can I change plans later?</h3>
                <p>Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is there a free trial?</h3>
                <p>We offer a 14-day free trial on all plans. No credit card required to get started.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What payment methods do you accept?</h3>
                <p>We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I cancel anytime?</h3>
                <p>Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you offer discounts for nonprofits?</h3>
                <p>Yes! We offer special pricing for nonprofits and educational institutions. Contact us for details.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What kind of support do you provide?</h3>
                <p>All plans include email support. Professional and Enterprise plans also get priority support and phone assistance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Still have questions?</h2>
            <p>Our team is here to help you find the right plan.</p>
            <Link href="/contact" className="cta-button">Contact Sales</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
